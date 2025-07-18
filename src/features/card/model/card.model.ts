import type { DeviceItem } from '@/features/device';
import type { SensorItem } from '@/features/sensor';

export type BaseItem = {
  type: 'sensor' | 'device';
  icon: string;
  label: string;
};

export type Item = SensorItem | DeviceItem;

export type Layout = 'horizontalLayout' | 'verticalLayout' | 'singleDevice';

export type Card = {
  id: string;
  title: string;
  layout: Layout;
  items: Item[];
};
