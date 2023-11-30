export type Response = {
  folders: ReponseData;
  items: ReponseData;
}

export type ReponseData = {
  columns: Array<string>;
  data: Array<Array<any>>;
}
