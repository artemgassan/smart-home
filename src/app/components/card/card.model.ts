import type { SensorItemType } from '@/app/components/sensor/sensor.model';
import type { DeviceItemType } from '@/app/components/device/device.model';

export enum Layout {
  SingleDevice = 'singleDevice',
  MultiHorizontalDevice = 'horizontalLayout',
  MultiVerticalDevice = 'verticalLayout',
}

export type LayoutType = Layout;

export type ItemType = SensorItemType | DeviceItemType;

export type ItemCategoryType = 'sensor' | 'device';

export type BaseItemType = {
  type: ItemCategoryType;
  icon: string;
  label: string;
};

export type CardType = {
  id: string;
  title: string;
  layout: LayoutType;
  items: ItemType[];
};
