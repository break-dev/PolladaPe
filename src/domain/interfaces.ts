import type { TDirection, TPlayerId } from "./types";

//#region

// teclas para moverse
export interface IKeys {
  up: string; // tecla arriba
  down: string; // tecla abajo
  left: string; // tecla izquierda
  right: string; // tecla derecha
}

// una coordenada/frame
export interface ICoordinate {
  x: number; // eje x
  y: number; // eje y
}

// sprite/imagen
export interface ISprite {
  name: string; // nombre del sprite
  path: string; // ruta del archivo
  widthFrame: number; // ancho del frame
  heightFrame: number; // alto del frame
  // frames del sprite que apunta
  frontFrames: ICoordinate[]; // al frente
  leftFrames: ICoordinate[]; // a la izquierda
  rightFrames: ICoordinate[]; // a la derecha
  backFrames: ICoordinate[]; // hacia atras
}

//#endregion

export interface IPlayer {
  id: TPlayerId; // identificador
  name: string; // nombre del jugador
  sprite: ISprite; // pollo elegido
  keys: IKeys; // teclas del jugador
  isMoving: boolean; // si se esta moviendo
  location: ICoordinate; // ubicacion en el mapa
  direction: TDirection; // direccion en la que apunta
  speed: number; // velocidad
  score: number; // puntaje
}

export interface IEnemy {
  sprite: ISprite;
  isMoving: boolean; // si se esta moviendo
  location: ICoordinate; // ubicacion en el mapa
  direction: TDirection; // direccion en la que apunta
  speed: number; // velocidad
}

export interface IIngredient {
  id: string; // identificador - evita colisiones con otros ingredientes
  sprite: ISprite;
  location: ICoordinate; // ubicacion en el mapa
  points: number; // puntos
}
