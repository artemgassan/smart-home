import type { BaseItemType } from '@/features/card';

export type DeviceItemType = {
  type: 'device';
  state: boolean;
} & BaseItemType;
