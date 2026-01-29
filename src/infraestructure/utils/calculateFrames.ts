import type { ICoordinate } from "../../domain/interfaces";

// calcular frames para un personaje (4x4)
export function calculateFramesCharacter(
  widthFrame: number,
  heightFrame: number,
) {
  const frontFrames: ICoordinate[] = [];
  const leftFrames: ICoordinate[] = [];
  const rightFrames: ICoordinate[] = [];
  const backFrames: ICoordinate[] = [];

  for (let x = 0; x < widthFrame * 4; x += widthFrame) {
    frontFrames.push({ x, y: 0 });
    leftFrames.push({ x, y: heightFrame });
    rightFrames.push({ x, y: heightFrame * 2 });
    backFrames.push({ x, y: heightFrame * 3 });
  }

  return {
    frontFrames,
    leftFrames,
    rightFrames,
    backFrames,
  };
}

// calcular frames para un ingrediente (1x4)
export function calculateFramesIngredient(widthFrame: number) {
  const frontFrames: ICoordinate[] = [];

  for (let x = 0; x < widthFrame * 4; x += widthFrame) {
    frontFrames.push({ x, y: 0 });
  }

  return {
    frontFrames,
  };
}
