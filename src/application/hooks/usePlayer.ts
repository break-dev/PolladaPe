import { useGameStore } from "../../infraestructure/useGameStore";
import type { ISprite, ICoordinate } from "../../domain/interfaces";
import type { TDirection, TPlayerId } from "../../domain/types";

// Actualizar datos del jugador
export const usePlayer = () => {
  // Solo extraemos la acción genérica
  const updatePlayer = useGameStore((state) => state.updatePlayer);

  // Exponemos métodos semánticos para la capa de presentación/lógica
  const updateName = (id: TPlayerId, name: string) =>
    updatePlayer(id, "name", name);

  const updateChicken = (id: TPlayerId, sprite: ISprite) =>
    updatePlayer(id, "sprite", sprite);

  const updateLocation = (id: TPlayerId, location: ICoordinate) =>
    updatePlayer(id, "location", location);

  const updateDirection = (id: TPlayerId, direction: TDirection) =>
    updatePlayer(id, "direction", direction);

  const updateScore = (id: TPlayerId, score: number) =>
    updatePlayer(id, "score", score);

  const updateSpeed = (id: TPlayerId, speed: number) =>
    updatePlayer(id, "speed", speed);

  const updateIsMoving = (id: TPlayerId, isMoving: boolean) =>
    updatePlayer(id, "isMoving", isMoving);

  return {
    updateName,
    updateChicken,
    updateLocation,
    updateDirection,
    updateScore,
    updateSpeed,
    updateIsMoving,
  };
};
