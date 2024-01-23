export interface FixtureItem {
  C: string;
  N: string;
  TYPE: string;
  NID: string;
  D: string;
  T: string;
  DAY: string;
  S: string;
  LN: string;
  IMF: boolean;
  OCG: {
    [key: string]: OCGItem;
  };
  HEC: boolean;
}

export interface BasketItem extends FixtureItem {
  selectedOdd: number;
}

export interface OCGItem {
  ID: string;
  N: string;
  MBS: string;
  SO: number;
  OC: {
    [key: string]: OCItem;
  };
}

export interface OCItem {
  ID: string;
  O: string;
  N: string;
  MBS: string;
  G: string;
  OD: number;
  IMF: boolean;
}
