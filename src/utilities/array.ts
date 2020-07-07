export function skip<TItem>(array: TItem[], skipCount: number): TItem[] {
  return array.slice(skipCount);
}
