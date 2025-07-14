export type Dashboard = {
  tabs: Tab[];
};

export type Tab = {
  id: string;
  title: string;
  cards: Card[];
};

export type Card = {
  id: string;
  title: string;
  layout: Layout;
  items: Item[];
};

export type Layout = 'horizontalLayout' | 'verticalLayout' | 'singleDevice';

type BaseItem = {
  type: 'sensor' | 'device';
  icon: string;
  label: string;
};

export type SensorItem = {
  type: 'sensor';
  value: {
    amount: number;
    unit: string;
  };
} & BaseItem;

export type DeviceItem = {
  type: 'device';
  state: boolean;
} & BaseItem;

export type Item = SensorItem | DeviceItem;
