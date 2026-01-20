import type { TDirection, TPlayerId } from "./types";

//#region

// una coordenada
export interface ICoordinate {
  x: number; // eje x
  y: number; // eje y
}

// sprite/imagen
export interface ISprite {
  path: string; // ruta del archivo
  width: string; // ancho
  height: string; // alto
}

// una fila del sprite
type TRow = [ICoordinate, ICoordinate, ICoordinate, ICoordinate];

// personaje (pollo, chef, etc)
export interface ICharacter {
  name: string; // nombre
  sprite: ISprite; // sprite
  // frames del sprite que apuntan:
  front: TRow; // al frente
  left: TRow; // la izquierda
  right: TRow; // la derecha
  back: TRow; // hacia atras
}

// teclas para moverse
export interface IKeys {
  up: string; // tecla arriba
  down: string; // tecla abajo
  left: string; // tecla izquierda
  right: string; // tecla derecha
}

//#endregion

export interface IPlayer {
  id: TPlayerId; // identificador
  name: string; // nombre
  chicken: ICharacter; // pollo
  keys: IKeys; // teclas del jugador
  isMoving: boolean; // si se esta moviendo
  location: ICoordinate; // ubicacion en el mapa
  direction: TDirection; // direccion en la que apunta
  score: number; // puntaje
  speed: number; // velocidad
}

export interface IEnemy extends ICharacter {
  isMoving: boolean; // si se esta moviendo
  location: ICoordinate; // ubicacion en el mapa
  direction: TDirection; // direccion en la que apunta
  speed: number; // velocidad
}

export interface IIngredient {
  name: string; // nombre
  sprite: ISprite; // sprite
  frames: TRow[]; // array de frames
  location: ICoordinate; // ubicacion en el mapa
}
