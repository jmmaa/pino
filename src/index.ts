// base attack speed

export const calculateTwoHandedSwordBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 50 + level + 2 * AGI + (AGI + STR - 1) / 5;

export const calculateDualWieldBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 100 + level + 4 * AGI + (AGI + STR - 1) / 5;

export const calculateBowBaseAttackSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => 75 + level + 3 * AGI + (AGI + 2 * DEX - 1) / 10;

export const calculateBowgunBaseAttackSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => 30 + level + 2.2 * AGI + 0.2 * DEX;

export const calculateStaffBaseAttackSpeed = (
  level: number,
  AGI: number,
  INT: number
) => 60 + level + AGI + (4 * AGI + INT - 1) / 5;

export const calculateMagicDeviceBaseAttackSpeed = (
  level: number,
  AGI: number,
  INT: number
) => 90 + level + 4 * AGI + (INT - 1) / 5;

export const calculateKnuckleBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number,
  DEX: number
) => 120 + level + 4.6 * AGI + DEX / 10 + STR / 10;

export const calculateKatanaBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 200 + level + 3.9 * AGI + 0.3 * STR;

export const calculateHalberdBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 25 + level + 3.5 * AGI + 0.2 * STR;

export const calculateBareHandBaseAttackSpeed = (level: number, AGI: number) =>
  1000 + level + 9.6 * AGI;

export const calculateActionTimeReduction = (attackSpeed: number) => {
  const raw = Math.floor((attackSpeed - 1000) / 180);

  const effective = raw > 50 ? 50 : raw;

  return effective / 100;
};

// max hp

export const calculateBaseMaxHP = (level: number, VIT: number) =>
  93 + ((VIT + 22.4) * level) / 3;

// max mp

export const calculateBaseMaxMP = (level: number, INT: number, TEC: number) =>
  TEC > 0 ? 100 + level + INT / 10 + (TEC - 1) : 100 + level + INT / 10;

// ailment resistance

export const calculateBaseAilmentResistance = (MTL: number) => MTL / 3.4;

// critical rate

export const calculateBaseCriticalRate = (CRT: number) => 25 + CRT / 3.4;

// critical damage

export const calculateBaseCriticalDamage = (AGI: number, STR: number) =>
  STR >= AGI ? 150 + STR / 5 : 150 + (STR + AGI) / 10;

// cast speed

export const calculateBaseCastSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => level + (1.16 * AGI + 2.94 * DEX);

export const calculateCastTimeReduction = (castSpeed: number) =>
  castSpeed > 1000
    ? (((castSpeed - 1000) / 90) * 0.5 + 50) / 100
    : castSpeed / 20 / 100;

// ampr

export const calculateAttackMPRecovery = (maxMP: number) => 10 + maxMP / 100;

// weapon attack

export const calculateWeaponAttackRefinementBonus = (
  refinementValue: number,
  baseWeaponAttack: number
) => {
  const percent = refinementValue ** 2 / 100;

  const flat = refinementValue;

  const refinementBonus = Math.floor(baseWeaponAttack * percent + flat);

  return refinementBonus;
};

export const calculateSubWeaponAttackRefinementBonus = (
  refinementValue: number,
  baseSubWeaponAttack: number
) => {
  /*
    
      the actual calculation based on phantom library is:
    
      Sub Weapon ATK = Attack value of subhand sword * 
      (1 + Weapon ATK%/100 + refine of weapon²/200) + refine of weapon + flat Weapon ATK
    
      however it seems like its an inconsistency in the coryn.club example, imma search more on this.
    
      */
  const percent = refinementValue ** 2 / 200;

  const flat = refinementValue;

  return Math.floor(baseSubWeaponAttack * percent + flat);
};

// stability

export const calculateOneHandedSwordStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (STR + 3 * DEX) / 40;

export const calculateTwoHandedSwordStability = (
  weaponStability: number,
  DEX: number
) => weaponStability + DEX / 10;

// essentially the same to ohs stab
export const calculateDualWieldStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (STR + 3 * DEX) / 40;

export const calculateDualWieldSubStability = (
  subWeaponStability: number,
  STR: number,
  AGI: number
) => subWeaponStability / 2 + (3 * STR + 2 * AGI) / 50;

export const calculateBowStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (STR + DEX) / 20;

export const calculateBowgunStability = (
  weaponStability: number,
  STR: number
) => weaponStability + STR / 20;

export const calculateStaffStability = (weaponStability: number, STR: number) =>
  weaponStability + STR / 20;

export const calculateMagicDeviceStability = (
  weaponStability: number,
  DEX: number
) => weaponStability + DEX / 10;

export const calculateKnuckleStability = (
  weaponStability: number,
  DEX: number
) => weaponStability + DEX / 40;

export const calculateHalberdStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (STR + DEX) / 20;

export const calculateKatanaStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (3 * STR + DEX) / 40;

export const calculateBareHandStability = (
  weaponStability: number,
  DEX: number
) => weaponStability + DEX / 3;

export const calculateMagicStability = (stability: number) =>
  (100 + stability) / 2;

// drop rate
export const calculateBaseDropRate = (LUK: number) => Math.floor(LUK / 5);

// ATK

export const calculateOneHandedSwordBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => level + STR * 2 + DEX * 2 + weaponAttack;

export const calculateTwoHandedSwordBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => level + STR * 3 + DEX + weaponAttack;

export const calculateDualWieldBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number,
  AGI: number
) => level + STR + 2 * DEX + AGI + weaponAttack;

export const calculateDualWieldBaseSubAttack = (
  level: number,
  subWeaponAttack: number,
  STR: number,
  AGI: number
) => level + subWeaponAttack + STR + AGI * 3;

export const calculateBowBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => level + 3 * DEX + STR + weaponAttack;

export const calculateBowgunBaseAttack = (
  level: number,
  weaponAttack: number,
  DEX: number
) => level + weaponAttack + DEX * 4;

export const calculateStaffBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  INT: number
) => level + STR * 3 + INT + weaponAttack;

export const calculateMagicDeviceBaseAttack = (
  level: number,
  weaponAttack: number,
  AGI: number,
  INT: number
) => level + 2 * INT + 2 * AGI + weaponAttack;

export const calculateKnuckleBaseAttack = (
  level: number,
  weaponAttack: number,
  AGI: number,
  DEX: number
) => level + AGI * 2 + 0.5 * DEX + weaponAttack;

export const calculateHalberdBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  AGI: number
) => level + 2.5 * STR + 1.5 * AGI + weaponAttack;

export const calculateKatanaBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => level + 1.5 * STR + 2.5 * DEX + weaponAttack;

export const calculateBareHandBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number
) => level + STR + 1 + weaponAttack;

const floor = (n: number) => Math.floor(n);

const percentDex = 0.1 + 0.07;

const percentAgi = 0.1;

const percentCspd = 1 + 0.05 + 0.35 + 0.75 + -0.7 + 0.21;

const flatCspd = 1000;

const baseCspd = calculateBaseCastSpeed(
  275,
  floor(220 * (1 + percentAgi)),
  floor(315 * (1 + percentDex))
);

const cspd = floor(baseCspd) * (1 + percentCspd) + flatCspd;

const cspdWithHighCycle =
  floor(baseCspd) * (1 + percentCspd + 2.5) + flatCspd + 550;

const castTimeReduction = calculateCastTimeReduction(cspd);
const castTimeReductionWithHighCycle =
  calculateCastTimeReduction(cspdWithHighCycle);

console.log("CSPD: ", floor(cspd));
console.log("CSPD w/ High Cycle Buff: ", floor(cspdWithHighCycle));
console.log("Cast Time Reduction: ", castTimeReduction);
console.log(
  "Cast Time Reduction w/ High Cycle Buff: ",
  castTimeReductionWithHighCycle
);
