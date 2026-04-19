/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { db, testFirestoreConnection } from './lib/firebase';
import { AppState, Subscription, UserProfile } from './types';
import LandingScreen from './components/LandingScreen';
import BuilderScreen from './components/BuilderScreen';
import AuthScreen from './components/AuthScreen';
import SuccessScreen from './components/SuccessScreen';

const INITIAL_SUBSCRIPTION: Subscription = {
  durationId: '1week',
  mealsPerDay: ['Breakfast', 'Dinner'],
  dietaryPreference: 'Vegetarian',
  primaryGoalId: 'gain',
  totalInvestment: 19000,
  status: 'draft'
};

export default function App() {
  const [state, setState] = useState<AppState>({
    step: 'landing',
    userProfile: null,
    subscription: INITIAL_SUBSCRIPTION
  });

  useEffect(() => {
    testFirestoreConnection();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.step]);

  const navigate = (step: AppState['step']) => setState(prev => ({ ...prev, step }));
  
  const updateSubscription = (sub: Partial<Subscription>) => {
    setState(prev => ({
      ...prev,
      subscription: { ...prev.subscription, ...sub }
    }));
  };

  const updateProfile = (profile: UserProfile) => {
    setState(prev => ({ ...prev, userProfile: profile }));
  };

  return (
    <div className="min-h-screen">
      {state.step === 'landing' && (
        <LandingScreen 
          onGetStarted={(goalId) => {
            if (goalId) {
              updateSubscription({ primaryGoalId: goalId });
            }
            navigate('builder');
          }} 
        />
      )}
      {state.step === 'builder' && (
        <BuilderScreen 
          subscription={state.subscription}
          onUpdate={updateSubscription}
          onSubscribe={() => navigate('auth')}
        />
      )}
      {state.step === 'auth' && (
        <AuthScreen 
          subscription={state.subscription}
          onProfileSubmit={(profile) => {
            updateProfile(profile);
            navigate('success');
          }}
        />
      )}
      {state.step === 'success' && (
        <SuccessScreen 
          onBackHome={() => navigate('landing')}
        />
      )}
    </div>
  );
}
