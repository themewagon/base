export interface TopCardProps {
  id: string | number;
  icon: string;
  title: string;
  count: number;
}

export const topCardsData = [
  {
    id: 1,
    icon: 'mage:heart-fill',
    title: 'Save Products',
    count: 178,
  },
  {
    id: 2,
    icon: 'solar:gamepad-old-bold',
    title: 'Stock Products',
    count: 20,
  },
  {
    id: 3,
    icon: 'solar:bag-4-bold',
    title: 'Sales Products',
    count: 190,
  },
  {
    id: 4,
    icon: 'heroicons:briefcase-20-solid',
    title: 'Job Application',
    count: 12,
  },
];
