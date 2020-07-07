export function shuffle<TItem>(array: TItem[]): TItem[] {
  const shuffleItems = array.map(makeShuffleItem)
  return shuffleItems.sort(compareShuffleItems)
    .map(shuffleItem => shuffleItem.item);
}

interface IShuffleItem<TItem> {
  item: TItem;
  sortOrder: number;
}

function makeShuffleItem<TItem>(item: TItem): IShuffleItem<TItem> {
  return {
    item,
    sortOrder: Math.random(),
  };
}

function compareShuffleItems<TItem>(a: IShuffleItem<TItem>, b: IShuffleItem<TItem>): number {
  return (a.sortOrder > b.sortOrder)
    ? +1
    : (a.sortOrder < b.sortOrder)
      ? -1
      : 0;
}
