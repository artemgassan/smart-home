import type { DeviceItemType } from '@/features/device';
import type { SensorItemType } from '@/features/sensor';

export type BaseItemType = {
  type: 'sensor' | 'device';
  icon: string;
  label: string;
};

export type ItemType = SensorItemType | DeviceItemType;

export type LayoutType = 'horizontalLayout' | 'verticalLayout' | 'singleDevice';

export type CardType = {
  id: string;
  title: string;
  layout: LayoutType;
  items: ItemType[];
};
