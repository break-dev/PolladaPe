import { keysPlayer1, keysPlayer2 } from "./keys";
import enemy_sprite_path from "../../assets/sprites/characters/enemy.png";
import brasa_sprite_path from "../../assets/sprites/characters/brasa.png";
import causa_sprite_path from "../../assets/sprites/characters/causa.png";
import zanahoria_sprite_path from "../../assets/sprites/ingredients/zanahoria.png";
import cebolla_sprite_path from "../../assets/sprites/ingredients/cebolla.png";
import papa_sprite_path from "../../assets/sprites/ingredients/papa.png";
import beterraga_sprite_path from "../../assets/sprites/ingredients/beterraga.png";
import type {
  IEnemy,
  IIngredient,
  IPlayer,
  ISprite,
} from "../../domain/interfaces";
import {
  calculateFramesCharacter,
  calculateFramesIngredient,
} from "./calculateFrames";

//
// Estado inicial del juego - sera util para evitar
// crear nuevos objetos en cada render, pues solo se leera
// lo que ya existe y fue calculado
//

// Jugador 1
export const player1 = {
  id: "player1",
  name: "Jugador 1",
  sprite: {} as ISprite,
  keys: keysPlayer1,
  isMoving: false,
  // la ubicacion sera calculada tras comenzar el juego
  // evitando tomar la misma posicion de otros elementos
  location: { x: 0, y: 0 },
  direction: "front", // direccion inicial
  score: 0,
  speed: 1,
} as IPlayer;

// Jugador 2 - aunque es opcional, tendra datos por defecto
export const player2 = {
  id: "player2",
  name: "Jugador 2",
  sprite: {} as ISprite,
  keys: keysPlayer2,
  isMoving: false,
  location: { x: 0, y: 0 },
  direction: "front",
  score: 0,
  speed: 1,
} as IPlayer;

// Enemigo
export const enemy = {
  sprite: {
    name: "Castor Augurio",
    path: enemy_sprite_path,
    widthFrame: 200,
    heightFrame: 240,
    // frames del sprite
    ...calculateFramesCharacter(200, 240),
  },
  isMoving: false,
  location: { x: 0, y: 0 },
  direction: "front",
  speed: 1,
} as IEnemy;

// Todos los pollos/personajes que el jugador
// podra elegir y setear como su "sprite"
export const chickens = [
  {
    name: "El Brasas",
    path: brasa_sprite_path,
    widthFrame: 200,
    heightFrame: 240,
    // frames del sprite
    ...calculateFramesCharacter(200, 240),
  },
  {
    name: "El Causa",
    path: causa_sprite_path,
    widthFrame: 200,
    heightFrame: 240,
    // frames del sprite
    ...calculateFramesCharacter(200, 240),
  },
] as ISprite[];

// todos los ingredientes unicos que el jugador
// podra recolectar. Ya en el juego cada ingrediente
// tendra su propia ubicacion a recolectar y puntos
export const ingredients = [
  {
    sprite: {
      name: "Zanahoria",
      path: zanahoria_sprite_path,
      widthFrame: 200,
      heightFrame: 240,
      // frames del sprite
      ...calculateFramesIngredient(200),
    },
    location: { x: 0, y: 0 },
    points: 1,
  },
  {
    sprite: {
      name: "Cebolla",
      path: cebolla_sprite_path,
      widthFrame: 200,
      heightFrame: 240,
      // frames del sprite
      ...calculateFramesIngredient(200),
    },
    location: { x: 0, y: 0 },
    points: 1,
  },
  {
    sprite: {
      name: "Papa",
      path: papa_sprite_path,
      widthFrame: 200,
      heightFrame: 240,
      // frames del sprite
      ...calculateFramesIngredient(200),
    },
    location: { x: 0, y: 0 },
    points: 1,
  },
  {
    sprite: {
      name: "Beterraga",
      path: beterraga_sprite_path,
      widthFrame: 200,
      heightFrame: 240,
      // frames del sprite
      ...calculateFramesIngredient(200),
    },
    location: { x: 0, y: 0 },
    points: 1,
  },
] as IIngredient[];
