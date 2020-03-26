interface Page {
  authorName: string;
  account: string;
  id: number;
  ignore: boolean;
  text: string;
}

export interface Book {
  maxPages: number;
  maxCharacters: number;
  pages: Page[];
}

export const createPage = function(): Page {
  return { authorName: "", account: "", id: 0, ignore: false, text: "" };
};

export const createBook = function(): Book {
  return {
    maxPages: 0,
    maxCharacters: 0,
    pages: [createPage()]
  };
};
