import type { BaseItemType } from '@/app/components/card/card.model';

export type SensorItemType = {
  type: 'sensor';
  value: SensorValueType;
} & BaseItemType;

export type SensorValueType = {
  amount: number;
  unit: string;
};
