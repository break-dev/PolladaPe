import { create } from "zustand";
import type {
  ISprite,
  IEnemy,
  IIngredient,
  IPlayer,
} from "../domain/interfaces";
import {
  chickens,
  enemy,
  ingredients,
  player1,
  player2,
} from "./utils/initialState";
import type { TPlayerId } from "../domain/types";

export interface IGameStore {
  // Estado inicial del juego
  quantityPlayers: number;
  chickens: ISprite[];
  player1: IPlayer;
  player2: IPlayer;
  enemy: IEnemy;
  ingredients: Record<string, IIngredient>;

  // UPDATES

  // General
  setQuantityPlayers: (quantity: number) => void;

  // Jugadores
  // id precisa si es el primer o segundo jugador
  // key indica que propiedad del jugador se actualizara
  // value es el valor que se le asignara a la propiedad
  updatePlayer: <K extends keyof IPlayer>(
    id: TPlayerId,
    key: K,
    value: IPlayer[K],
  ) => void;

  // Enemigo
  updateEnemy: <K extends keyof IEnemy>(key: K, value: IEnemy[K]) => void;

  // Ingredientes
  addIngredient: (ingredient: IIngredient) => void;
  removeIngredient: (id: string) => void;
  setIngredients: (ingredients: Record<string, IIngredient>) => void;

  // Reset del juego
  resetGame: () => void;
}

export const useGameStore = create<IGameStore>((set) => ({
  // Estado inicial
  quantityPlayers: 1,
  chickens: chickens,
  player1: player1,
  player2: player2,
  enemy: enemy,
  ingredients: ingredients,

  // Actualizaciones para una propiedad específica
  // del juegador o enemigo

  // General
  setQuantityPlayers: (quantityPlayers) => set({ quantityPlayers }),

  // Jugadores
  updatePlayer: (id, key, value) =>
    set((state) => ({
      [id]: {
        ...state[id],
        [key]: value,
      },
    })),

  // Enemigo
  updateEnemy: (key, value) =>
    set((state) => ({
      enemy: {
        ...state.enemy,
        [key]: value,
      },
    })),

  // Ingredientes
  setIngredients: (ingredients) => set({ ingredients }),

  addIngredient: (ingredient) =>
    set((state) => ({
      ingredients: {
        ...state.ingredients,
        [ingredient.id]: ingredient,
      },
    })),

  removeIngredient: (id) =>
    set((state) => {
      // Desestructuración para eliminar una propiedad sin mutar el original
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: _, ...remainingIngredients } = state.ingredients;
      return { ingredients: remainingIngredients };
    }),

  // Restablece el estado del juego al estado inicial
  resetGame: () =>
    set({
      player1,
      player2,
      enemy,
      ingredients: ingredients,
      quantityPlayers: 1,
    }),
}));
