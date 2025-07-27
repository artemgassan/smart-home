import type { CardType } from '@/app/components/card/card.model';

export type TabType = {
  id: string;
  title: string;
  cards: CardType[];
};
