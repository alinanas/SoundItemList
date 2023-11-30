export type Item = {
  id: number;
  uiId: number;
  name: string;
  parentId: number | null;
  checked: boolean;
  expanded: boolean;
  children: Item[];
  expandable: boolean;
}
