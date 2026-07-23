import { PlanDuration, PrimaryGoal } from './types';

/** Billable days for each plan duration. */
export const DURATION_DAYS: Record<string, number> = { '3day': 3, '1week': 5, '2week': 10 };

/**
 * Price per meal in ₹, keyed by primary goal then plan duration.
 * Longer commitments get a lower per-meal rate.
 */
export const MEAL_PRICES: Record<string, Record<string, number>> = {
  gain:     { '3day': 265, '1week': 250, '2week': 240 },
  loss:     { '3day': 245, '1week': 230, '2week': 220 },
  balanced: { '3day': 235, '1week': 220, '2week': 210 },
};

/** Per-meal rate for a goal + duration combination. */
export const getMealPrice = (goalId: string, durationId: string): number =>
  MEAL_PRICES[goalId]?.[durationId] ?? MEAL_PRICES.balanced['2week'];

/** Cheapest per-meal rate offered for a goal (its longest commitment). */
export const getGoalFromPrice = (goalId: string): number =>
  Math.min(...Object.values(MEAL_PRICES[goalId] ?? MEAL_PRICES.balanced));

/** Cheapest rate across every plan — powers the "starting from" copy. */
export const LOWEST_MEAL_PRICE = Math.min(
  ...Object.values(MEAL_PRICES).flatMap((byDuration) => Object.values(byDuration))
);

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
