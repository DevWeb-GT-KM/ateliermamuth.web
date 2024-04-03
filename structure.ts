// src/structure.js

export const structure = (S: any) =>
  S.list()
    .title("Base")
    .items([...S.documentTypeListItems()]);
