import type { BaseItemType } from '@/app/components/card/card.model';

export type DeviceItemType = {
  type: 'device';
  state: boolean;
} & BaseItemType;
