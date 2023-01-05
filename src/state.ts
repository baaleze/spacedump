import { defineStore } from "pinia";
import { Base } from "./model/model";

export const useGameState = defineStore("gameState", {
  state: () => ({
    base: {
      grid: [
        [0, 1, 1, 0, 0, 1],
        [0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ],
      power: 10,
      name: "testBase",
    } as Base,
    storages: [

    ]
  }),
  actions: {},
});
