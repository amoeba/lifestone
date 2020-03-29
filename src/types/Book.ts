interface Page {
  authorName: string;
  authorAccount: string;
  authorID: number;
  ignoreAuthor: boolean;
  pageText: string;
}

export interface Book {
  maxNumCharsPerPage: number;
  maxNumPages: number;
  pages: Page[];
}

export const createPage = function(): Page {
  return {
    authorName: "",
    authorAccount: "",
    authorID: 0,
    ignoreAuthor: false,
    pageText: ""
  };
};

export const createBook = function(): Book {
  return {
    maxNumPages: 0,
    maxNumCharsPerPage: 0,
    pages: [createPage()]
  };
};
