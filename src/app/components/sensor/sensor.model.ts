import type { BaseItemType } from '@/features/card';

export type SensorItemType = {
  type: 'sensor';
  value: SensorValueType;
} & BaseItemType;

export type SensorValueType = {
  amount: number;
  unit: string;
};
