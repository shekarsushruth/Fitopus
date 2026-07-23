/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { AppState, Subscription, UserProfile } from './types';
import { DURATION_DAYS, getMealPrice } from './constants';
import LandingScreen from './components/LandingScreen';

// Only the landing screen is needed for first paint. Everything else — and
// crucially the Firebase SDK that AuthScreen pulls in — is split into
// separate chunks fetched on demand.
const BuilderScreen = lazy(() => import('./components/BuilderScreen'));
const AuthScreen = lazy(() => import('./components/AuthScreen'));
const SuccessScreen = lazy(() => import('./components/SuccessScreen'));
const MenuScreen = lazy(() => import('./components/MenuScreen'));

/** Warm the chunk for a screen before the user actually navigates to it. */
const prefetch = {
  builder: () => import('./components/BuilderScreen'),
  menu: () => import('./components/MenuScreen'),
  auth: () => import('./components/AuthScreen'),
};

function ScreenFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-10 h-10 rounded-full border-4 border-primary-container border-t-transparent animate-spin" />
    </div>
  );
}

// Per-meal rate depends on both the goal and the duration, so the total has to
// be recalculated whenever any of the three inputs changes.
const calcInvestment = (durationId: string, mealsPerDay: string[], primaryGoalId: string) =>
  getMealPrice(primaryGoalId, durationId) * mealsPerDay.length * (DURATION_DAYS[durationId] ?? 5);

const INITIAL_SUBSCRIPTION: Subscription = {
  durationId: '1week',
  mealsPerDay: ['Breakfast', 'Dinner'],
  dietaryPreference: 'Vegetarian',
  primaryGoalId: 'loss',
  totalInvestment: calcInvestment('1week', ['Breakfast', 'Dinner'], 'loss'),
  status: 'draft'
};

export default function App() {
  const [state, setState] = useState<AppState>({
    step: 'landing',
    userProfile: null,
    subscription: INITIAL_SUBSCRIPTION
  });

  useEffect(() => {
    // The Firebase SDK is ~84 kB gzipped, so it is loaded dynamically *and*
    // deferred to idle time — it never competes with first paint.
    const run = () =>
      import('./lib/firebase').then(({ testFirestoreConnection }) => testFirestoreConnection());

    const ric = window.requestIdleCallback;
    if (ric) {
      const id = ric(run, { timeout: 4000 });
      return () => window.cancelIdleCallback?.(id);
    }
    const timer = setTimeout(run, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.step]);

  const navigate = (step: AppState['step']) => setState(prev => ({ ...prev, step }));
  
  const updateSubscription = (sub: Partial<Subscription>) => {
    setState(prev => {
      const updated = { ...prev.subscription, ...sub };
      updated.totalInvestment = calcInvestment(updated.durationId, updated.mealsPerDay, updated.primaryGoalId);
      return { ...prev, subscription: updated };
    });
  };

  const updateProfile = (profile: UserProfile) => {
    setState(prev => ({ ...prev, userProfile: profile }));
  };

  return (
    <div className="min-h-screen">
      <Suspense fallback={<ScreenFallback />}>
        {state.step === 'landing' && (
          <LandingScreen
            onGetStarted={(goalId) => {
              if (goalId) {
                updateSubscription({ primaryGoalId: goalId });
              }
              navigate('builder');
            }}
            onViewMenu={() => navigate('menu')}
            onPrefetchBuilder={prefetch.builder}
            onPrefetchMenu={prefetch.menu}
          />
        )}
        {state.step === 'builder' && (
          <BuilderScreen
            subscription={state.subscription}
            onUpdate={updateSubscription}
            onSubscribe={() => navigate('auth')}
            onViewMenu={() => navigate('menu')}
            onGoHome={() => navigate('landing')}
            onPrefetchAuth={prefetch.auth}
          />
        )}
        {state.step === 'menu' && (
          <MenuScreen
            onBack={() => navigate('landing')}
            onSelectPlan={() => navigate('builder')}
          />
        )}
        {state.step === 'auth' && (
          <AuthScreen
            subscription={state.subscription}
            onProfileSubmit={(profile) => {
              updateProfile(profile);
              navigate('success');
            }}
            onViewMenu={() => navigate('menu')}
            onGoHome={() => navigate('landing')}
          />
        )}
        {state.step === 'success' && (
          <SuccessScreen onBackHome={() => navigate('landing')} />
        )}
      </Suspense>
    </div>
  );
}
