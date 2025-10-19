export type CardType = {
  id: string;
  title: string;
  layout: LayoutType;
  items: ItemType[];
};

export type BaseItemType = {
  id: string;
  type: ItemCategoryType;
  icon: string;
  label: string;
};

export type DeviceItemType = {
  type: 'device';
  state: boolean;
} & BaseItemType;

export type SensorItemType = {
  type: 'sensor';
  value: SensorValueType;
} & BaseItemType;

export type ItemType = SensorItemType | DeviceItemType;
export type ItemCategoryType = 'sensor' | 'device';

export type LayoutType = Layout;

export enum Layout {
  SingleDevice = 'singleDevice',
  MultiHorizontalDevice = 'horizontalLayout',
  MultiVerticalDevice = 'verticalLayout',
}

export type SensorValueType = {
  amount: number;
  unit: string;
};

export type DeviceRequest = {
  state: boolean;
};

export type DeviceResponse = DeviceRequest & BaseItemType;
