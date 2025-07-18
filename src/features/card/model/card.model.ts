import type { DeviceItemType } from '@/features/device';
import type { SensorItemType } from '@/features/sensor';

export enum Layout {
  SingleDevice = 'singleDevice',
  MultiHorizontalDevice = 'horizontalLayout',
  MultiVerticalDevice = 'verticalLayout',
}

export type LayoutType = Layout.SingleDevice | Layout.MultiHorizontalDevice | Layout.MultiVerticalDevice;

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
