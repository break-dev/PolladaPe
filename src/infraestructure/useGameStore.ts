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

export interface IGameStore {
  // Estado inicial
  quantityPlayers: number; // cantidad de jugadores
  chickens: ISprite[]; // pollos
  player1: IPlayer; // jugador 1
  player2: IPlayer; // jugador 2
  enemy: IEnemy; // enemigo
  ingredients: IIngredient[]; // ingredientes

  // Setters
  setQuantityPlayers: (quantityPlayers: number) => void;
  setPlayer1: (data: Partial<IPlayer>) => void;
  setPlayer2: (data: Partial<IPlayer>) => void;
  setEnemy: (data: Partial<IEnemy>) => void;

  // Gestión de ingredientes
  setIngredients: (ingredients: IIngredient[]) => void;
  addIngredient: (ingredient: IIngredient) => void;
  removeIngredient: (index: number) => void;
}

export const useGameStore = create<IGameStore>((set) => ({
  // Estado inicial
  quantityPlayers: 1,
  chickens: chickens,
  player1: player1,
  player2: player2,
  enemy: enemy,
  ingredients: ingredients,

  setQuantityPlayers: (quantityPlayers) => set({ quantityPlayers }),

  setPlayer1: (data) =>
    set((state) => ({
      player1: { ...state.player1, ...data },
    })),

  setPlayer2: (data) =>
    set((state) => ({
      player2: { ...state.player2, ...data },
    })),

  setEnemy: (data) =>
    set((state) => ({
      enemy: { ...state.enemy, ...data },
    })),
    
  setIngredients: (ingredients) => set({ ingredients }),

  addIngredient: (ingredient) =>
    set((state) => ({
      ingredients: [...state.ingredients, ingredient],
    })),

  removeIngredient: (index) =>
    set((state) => ({
      ingredients: state.ingredients.filter((_, i) => i !== index),
    })),
}));
