export interface Piece {
  grid: number[][];
  anchorPoint: number[];
  rotation: number;
  type: string;
  stats: Map<Stat, number>;
  name: string;
}

export interface Base {
  grid: number[][];
  power: number;
  name: string;
}

export interface Storage {
  size: number;
  contents: (Piece | Stack)[];
}

export interface Stack {
  material: string;
  amount: number;
}

export type Stat = "POWER" | "CARGO_SPACE";
