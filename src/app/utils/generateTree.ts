import { Item } from '../types/Item';
import { Response } from '../types/Reponse';

export const generateTree = (data: Response): Item[] => {
  let result: Item[] = data.folders.data
  .map((item) => ({
    id: item[0],
    uiId: item[0],
    name: item[1],
    parentId: item[2],
    checked: false,
    expanded: true,
    children: [],
    expandable: true,
  }));

  result = result.concat(data.items.data
  .map((item) => ({
    id: item[0],
    uiId: item[0] + 1000,
    name: item[1],
    parentId: item[2],
    checked: false,
    expanded: true,
    children: [],
    expandable: false,
  })));

  return buildTree(result);
}

const buildTree = (list: Item[]) => {
  var map:{ [key:number]: number; } = {}, node, roots = [], i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].uiId] = i; 
    list[i].children = []; 
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== null) {
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}
