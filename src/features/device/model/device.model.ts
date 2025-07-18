import type { BaseItem } from '@/features/card';

export type DeviceItem = {
  type: 'device';
  state: boolean;
} & BaseItem;
