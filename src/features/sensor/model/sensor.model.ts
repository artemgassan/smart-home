import type { BaseItemType } from '@/features/card';

export type SensorItemType = {
  type: 'sensor';
  value: {
    amount: number;
    unit: string;
  };
} & BaseItemType;
