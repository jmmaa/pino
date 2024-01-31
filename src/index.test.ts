import * as pino from ".";

test("CSPD", () => {
  const level = 275;

  const baseDex = 315;
  const percentDex = 1 + (0.1 + 0.07 + 0.01);
  const totalDex = Math.floor(baseDex * percentDex);

  const baseAgi = 220;
  const percentAgi = 1 + 0.1;
  const totalAgi = Math.floor(baseAgi * percentAgi);

  const baseCastSpeed = pino.calculateBaseCastSpeed(level, totalAgi, totalDex);
  const percentCastSpeed = 1 + (1 + 0.05 + 0.35 + 0.75 + -0.7 + 0.21);
  const flatCastSpeed = 1000;

  const totalCastSpeed = Math.floor(
    baseCastSpeed * percentCastSpeed + flatCastSpeed
  );
  const totalCastSpeedWithHighCycle = Math.floor(
    baseCastSpeed * (percentCastSpeed + 2.5) + (flatCastSpeed + 550)
  );

  expect(totalCastSpeed).toEqual(5378);
  expect(totalCastSpeedWithHighCycle).toEqual(10043);
});
