import { PlanDuration, PrimaryGoal } from './types';

/** Price per meal in ₹. Single source of truth — used for both the
 *  "starting from" copy and the plan total calculation. */
export const PRICE_PER_MEAL = 210;

export const PLAN_DURATIONS: PlanDuration[] = [
  { id: '3day', name: '3 Day Trial', subtitle: 'Short Term' },
  { id: '1week', name: '1 Week (MON-FRI)', subtitle: 'Kickstart', badge: 'MOST POPULAR' },
  { id: '2week', name: '2 Weeks (MON-FRI)', subtitle: 'Transformation' },
];

export const PRIMARY_GOALS: PrimaryGoal[] = [
  {
    id: 'loss',
    name: 'Weight Loss',
    kcal: 1200,
    imageUrl: '/weight-loss.jpg',
    description: 'Calorie-conscious, nutrient-dense meals.'
  },
  {
    id: 'gain',
    name: 'Muscle Gain',
    kcal: 2500,
    imageUrl: '/muscle-gain.jpg',
    description: 'Protein-heavy fuel for the grinders.'
  },
  {
    id: 'balanced',
    name: 'Balanced Diet',
    kcal: 1800,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1701113208728-51959e2d8834?w=800&h=500&fit=crop&q=80',
    description: 'Sustainable eating for everyday life.'
  },
];
