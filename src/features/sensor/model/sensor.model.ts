import type { BaseItem } from '@/features/card';

export type SensorItem = {
  type: 'sensor';
  value: {
    amount: number;
    unit: string;
  };
} & BaseItem;
