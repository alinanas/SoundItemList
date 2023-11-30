import { Item } from "../types/Item";

export const selectInTree = (item: Item, uiId: number, checked: boolean): void => {
  if (item.uiId === uiId) {
    item.checked = checked;
    for (let i = 0; i < item.children.length; i++) {
      selectInTree(item.children[i], item.children[i].uiId, checked);
    }
  }
  
  if (item.children != null) {
    for (let i = 0; i < item.children.length; i++) {
        selectInTree(item.children[i], uiId, checked);
    }
  }
}

export const getSelectedFromTree = (item: Item, result: number[]): void => {
  if (item.checked && !item.expandable) {
    result.push(item.id);
  }
  
  if (item.children != null) {
    for (let i = 0; i < item.children.length; i++) {
      getSelectedFromTree(item.children[i], result);
    }
  }
}
