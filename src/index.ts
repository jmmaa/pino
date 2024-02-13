// this is mostly just for semantics, but its basically just calculating
// the percent, base, and flat values into total

export const totalDEX = (
  baseDEX: number,
  percentDEX: number,
  flatDEX: number
) => Math.floor(baseDEX * (1 + percentDEX) + flatDEX);

export const totalSTR = (
  baseSTR: number,
  percentSTR: number,
  flatSTR: number
) => Math.floor(baseSTR * (1 + percentSTR) + flatSTR);

export const totalINT = (
  baseINT: number,
  percentINT: number,
  flatINT: number
) => Math.floor(baseINT * (1 + percentINT / 100) + flatINT);

export const totalAGI = (
  baseAGI: number,
  percentAGI: number,
  flatAGI: number
) => Math.floor(baseAGI * (1 + percentAGI / 100) + flatAGI);

export const totalVIT = (
  baseVIT: number,
  percentVIT: number,
  flatVIT: number
) => Math.floor(baseVIT * (1 + percentVIT / 100) + flatVIT);

// accuracy
export const baseAccuracy = (level: number, totalDEX: number) =>
  Math.floor(level + totalDEX);

// base attack speed
export const oneHandedSwordBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalSTR: number
) => Math.floor(100 + level + 4 * totalAGI + (totalAGI + totalSTR - 1) / 5);

export const twoHandedSwordBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalSTR: number
) => Math.floor(50 + level + 2 * totalAGI + (totalAGI + totalSTR - 1) / 5);

export const dualWieldBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalSTR: number
) => Math.floor(100 + level + 4 * totalAGI + (totalAGI + totalSTR - 1) / 5);

export const bowBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalDEX: number
) => Math.floor(75 + level + 3 * totalAGI + (totalAGI + 2 * totalDEX - 1) / 10);

export const bowgunBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalDEX: number
) => Math.floor(30 + level + 2.2 * totalAGI + 0.2 * totalDEX);

export const staffBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalINT: number
) => Math.floor(60 + level + totalAGI + (4 * totalAGI + totalINT - 1) / 5);

export const MagicDeviceBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalINT: number
) => Math.floor(90 + level + 4 * totalAGI + (totalINT - 1) / 5);

export const knuckleBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(120 + level + 4.6 * totalAGI + totalDEX / 10 + totalSTR / 10);

export const katanaBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalSTR: number
) => Math.floor(200 + level + 3.9 * totalAGI + 0.3 * totalSTR);

export const halberdBaseAttackSpeed = (
  level: number,
  totalAGI: number,
  totalSTR: number
) => Math.floor(25 + level + 3.5 * totalAGI + 0.2 * totalSTR);

export const bareHandBaseAttackSpeed = (level: number, totalAGI: number) =>
  Math.floor(1000 + level + 9.6 * totalAGI);

export const actionTimeReduction = (totalAttackSpeed: number) =>
  Math.floor((totalAttackSpeed - 1000) / 180) > 50
    ? 0.5
    : Math.floor((totalAttackSpeed - 1000) / 180) / 100;

// max hp

export const baseMaxHP = (level: number, totalVIT: number) =>
  Math.floor(93 + ((totalVIT + 22.4) * level) / 3);

// max mp

// leave TEC as only "TEC" unless theres other calculations that increase TEC.
// if there is, switch this to "totalTEC"
export const baseMaxMP = (level: number, totalINT: number, TEC: number) =>
  Math.floor(
    TEC > 0
      ? 100 + level + totalINT / 10 + (TEC - 1)
      : 100 + level + totalINT / 10
  );

// ailment resistance

// leave MTL as only "MTL" unless theres other calculations that increase MTL.
// if there is, switch this to "totalMTL"
export const baseAilmentResistance = (MTL: number) => Math.floor(MTL / 3.4);

// critical rate

// leave CRT as only "CRT" unless theres other calculations that increase CRT.
// if there is, switch this to "totalCRT"
export const baseCriticalRate = (CRT: number) => Math.floor(25 + CRT / 3.4);

// critical damage

export const baseCriticalDamage = (totalAGI: number, totalSTR: number) =>
  Math.floor(
    totalSTR >= totalAGI ? 150 + totalSTR / 5 : 150 + (totalSTR + totalAGI) / 10
  );

// cast speed

export const baseCastSpeed = (
  level: number,
  totalAGI: number,
  totalDEX: number
) => Math.floor(level + 1.16 * totalAGI + 2.94 * totalDEX);

export const castTimeReduction = (totalCastSpeed: number) =>
  totalCastSpeed > 1000
    ? (((totalCastSpeed - 1000) / 90) * 0.5 + 50) / 100
    : totalCastSpeed / 20 / 100;

// ampr

export const attackMPRecovery = (totalMaxMP: number) =>
  Math.floor(10 + totalMaxMP / 100);

// weapon attack

export const refinementBonusWeaponAttack = (
  refinement: number,
  baseWeaponAttack: number
) => Math.floor(baseWeaponAttack * (refinement ** 2 / 100) + refinement);

export const refinementBonusSubWeaponAttack = (
  refinement: number,
  baseSubWeaponAttack: number
) =>
  // the actual calculation based on phantom library is:
  // Sub Weapon ATK = Attack value of subhand sword *
  // (1 + Weapon ATK%/100 + refine of weapon²/200) + refine of weapon + flat Weapon ATK
  // however it seems like its an inconsistency in the coryn.club example, imma search more on this.

  Math.floor(baseSubWeaponAttack * (refinement ** 2 / 200) + refinement);

// stability

export const oneHandedSwordStability = (
  weaponStability: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(weaponStability + (totalSTR + 3 * totalDEX) / 40);

export const twoHandedSwordStability = (
  weaponStability: number,
  totalDEX: number
) => Math.floor(weaponStability + totalDEX / 10);

// essentially the same to ohs stab
export const dualWieldStability = (
  weaponStability: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(weaponStability + (totalSTR + 3 * totalDEX) / 40);

export const dualWieldSubStability = (
  subWeaponStability: number,
  totalSTR: number,
  totalAGI: number
) => Math.floor(subWeaponStability / 2 + (3 * totalSTR + 2 * totalAGI) / 50);

export const bowStability = (
  weaponStability: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(weaponStability + (totalSTR + totalDEX) / 20);

export const bowWithArrowStability = (
  weaponStability: number,
  arrowStability: number,
  totalSTR: number,
  totalDEX: number
) => bowStability(weaponStability, totalSTR, totalDEX) + arrowStability;

export const bowgunWithArrowStability = (
  weaponStability: number,
  arrowStability: number,
  totalSTR: number,
  totalDEX: number
) => bowStability(weaponStability, totalSTR, totalDEX) + 0.5 * arrowStability;

export const bowgunStability = (weaponStability: number, totalSTR: number) =>
  Math.floor(weaponStability + totalSTR / 20);

export const staffStability = (weaponStability: number, totalSTR: number) =>
  Math.floor(weaponStability + totalSTR / 20);

export const magicDeviceStability = (
  weaponStability: number,
  totalDEX: number
) => Math.floor(weaponStability + totalDEX / 10);

export const knuckleStability = (weaponStability: number, totalDEX: number) =>
  Math.floor(weaponStability + totalDEX / 40);

export const halberdStability = (
  weaponStability: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(weaponStability + (totalSTR + totalDEX) / 20);

export const katanaStability = (
  weaponStability: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(weaponStability + (3 * totalSTR + totalDEX) / 40);

export const bareHandStability = (weaponStability: number, totalDEX: number) =>
  Math.floor(weaponStability + totalDEX / 3);

export const magicStability = (stability: number) =>
  Math.floor((100 + stability) / 2);

// drop rate
export const baseDropRate = (LUK: number) => Math.floor(LUK / 5);

// ATK

export const oneHandedSwordBaseAttack = (
  level: number,
  weaponAttack: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(level + totalSTR * 2 + totalDEX * 2 + weaponAttack);

export const twoHandedSwordBaseAttack = (
  level: number,
  weaponAttack: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(level + totalSTR * 3 + totalDEX + weaponAttack);

export const dualWieldBaseAttack = (
  level: number,
  weaponAttack: number,
  totalSTR: number,
  totalDEX: number,
  totalAGI: number
) => Math.floor(level + totalSTR + 2 * totalDEX + totalAGI + weaponAttack);

export const dualWieldBaseSubAttack = (
  level: number,
  subWeaponAttack: number,
  totalSTR: number,
  totalAGI: number
) => Math.floor(level + subWeaponAttack + totalSTR + totalAGI * 3);

export const bowBaseAttack = (
  level: number,
  weaponAttack: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(level + 3 * totalDEX + totalSTR + weaponAttack);

export const bowgunBaseAttack = (
  level: number,
  weaponAttack: number,
  totalDEX: number
) => Math.floor(level + weaponAttack + totalDEX * 4);

export const staffBaseAttack = (
  level: number,
  weaponAttack: number,
  totalSTR: number,
  INT: number
) => Math.floor(level + totalSTR * 3 + INT + weaponAttack);

export const magicDeviceBaseAttack = (
  level: number,
  weaponAttack: number,
  totalAGI: number,
  INT: number
) => Math.floor(level + 2 * INT + 2 * totalAGI + weaponAttack);

export const knuckleBaseAttack = (
  level: number,
  weaponAttack: number,
  totalAGI: number,
  totalDEX: number
) => Math.floor(level + totalAGI * 2 + 0.5 * totalDEX + weaponAttack);

export const halberdBaseAttack = (
  level: number,
  weaponAttack: number,
  totalSTR: number,
  totalAGI: number
) => Math.floor(level + 2.5 * totalSTR + 1.5 * totalAGI + weaponAttack);

export const katanaBaseAttack = (
  level: number,
  weaponAttack: number,
  totalSTR: number,
  totalDEX: number
) => Math.floor(level + 1.5 * totalSTR + 2.5 * totalDEX + weaponAttack);

export const bareHandBaseAttack = (
  level: number,
  weaponAttack: number,
  totalSTR: number
) => Math.floor(level + totalSTR + 1 + weaponAttack);

// Magic Attack

export const oneHandedSwordBaseMagicAttack = (
  level: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 3 * totalINT + totalDEX);

export const twoHandedSwordBaseMagicAttack = (
  level: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 3 * totalINT + totalDEX + 1);

export const dualWieldBaseMagicAttack = (
  level: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 3 * totalINT + totalDEX);

export const bowBaseMagicAttack = (
  level: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 3 * totalINT + totalDEX);

export const bowgunBaseMagicAttack = (
  level: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 3 * totalINT + totalDEX);

export const staffBaseMagicAttack = (
  level: number,
  weaponAttack: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 4 * totalINT + totalDEX + weaponAttack);

export const magicDeviceBaseMagicAttack = (
  level: number,
  weaponAttack: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 4 * totalINT + totalDEX + weaponAttack);

export const knuckleBaseMagicAttack = (
  level: number,
  weaponAttack: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 4 * totalINT + totalDEX + 0.5 * weaponAttack);

export const halberdBaseMagicAttack = (
  level: number,
  totalINT: number,
  totalDEX: number,
  totalAGI: number
) => Math.floor(level + 2 * totalINT + totalDEX + totalAGI);

export const katanaBaseMagicAttack = (
  level: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 1.5 * totalINT + totalDEX);

export const bareHandBaseMagicAttack = (
  level: number,
  totalINT: number,
  totalDEX: number
) => Math.floor(level + 3 * totalINT + totalDEX + 1);

// armors

export const normalArmorDefense = (
  level: number,
  totalVIT: number,
  equipmentDefense: number
) => level + totalVIT + equipmentDefense;

export const normalArmorMagicDefense = (
  level: number,
  INT: number,
  equipmentDefense: number
) => level + INT + equipmentDefense;

export const normalArmorDodge = (level: number, totalAGI: number) =>
  level + totalAGI;

export const lightArmorDefense = (
  level: number,
  totalVIT: number,
  equipmentDefense: number
) => Math.floor(0.8 * level + 0.25 * totalVIT + equipmentDefense);

export const lightArmorMagicDefense = (
  level: number,
  INT: number,
  equipmentDefense: number
) => Math.floor(0.8 * level + 0.25 * INT + equipmentDefense);

export const lightArmorDodge = (level: number, totalAGI: number) =>
  Math.floor(1.25 * level + 1.75 * totalAGI + 30);

export const heavyArmorDefense = (
  level: number,
  totalVIT: number,
  equipmentDefense: number
) => Math.floor(1.2 * level + 2 * totalVIT + equipmentDefense);

export const heavyArmorMagicDefense = (
  level: number,
  INT: number,
  equipmentDefense: number
) => Math.floor(1.2 * level + 2 * INT + equipmentDefense);

export const heavyArmorDodge = (level: number, totalAGI: number) =>
  Math.floor(0.5 * level + 0.75 * totalAGI - 15);

export const nakedDefense = (
  level: number,
  totalVIT: number,
  equipmentDefense: number
) => Math.floor(0.4 * level + 0.1 * totalVIT + equipmentDefense);

export const nakedMagicDefense = (
  level: number,
  totalINT: number,
  equipmentDefense: number
) => Math.floor(0.4 * level + 0.1 * totalINT + equipmentDefense);

export const nakedDodge = (level: number, totalAGI: number) =>
  Math.floor(1.5 * level + 2 * totalAGI + 75);

// physical, magic, and elemental resistance

export const resistance = (value: number) => {
  if (value > 50) {
    return resistancePenalty(value, 50, 2);
  } else {
    return value;
  }
};

const resistancePenalty = (
  raw: number,
  acc: number,
  penalty: number
): number => {
  if (raw > 50) {
    const value = 50 / penalty;
    return resistancePenalty(raw - 50, acc + value, penalty * 2);
  } else {
    return Math.floor(acc);
  }
};

// barrier cooldown

// hard cap is rumored to be 10 secs cooldown, need to confirm this before changing
// this func
export const barrierCooldown = (value: number) => Math.floor(value / -5 + 30);

// degradation chance

// leave LUK as only "LUK" unless theres other calculations that increase LUK.
// if there is, switch this to "totalLUK"
export const chanceToPreventDegradation = (LUK: number) =>
  Math.floor(LUK / 3.4);

// player difficulty

// leave TEC as only "TEC" unless theres other calculations that increase TEC.
// if there is, switch this to "totalTEC"
export const playerCraftingDifficulty = (
  proficiency: number,
  TEC: number,
  totalDEX: number
) => proficiency + TEC / 2 + totalDEX / 6;

// INT DTE

export const baseDamageToElement = (INT: number) => Math.floor(INT / 10);

// constant values

export const LIGHT_ARMOR_ATTACK_SPEED = 0.5;

export const HEAVY_ARMOR_ATTACK_SPEED = -0.5;

export const DUAL_WIELD_ACCURACY = -0.55;

export const DUAL_WIELD_CRITICAL_RATE = -0.55;

export const SUB_WEAPON_SHIELD_ATTACK_SPEED = -0.5;

export const SUB_WEAPON_MagiC_DEVICE_ATTACK = -0.15;

export const SUB_WEAPON_KNUCKLE_MagiC_ATTACK = -0.15;

export const SUB_WEAPON_ARROW_MagiC_DEFENSE = -0.25;

export const SUB_WEAPON_ARROW_PHYSICAL_DEFENSE = -0.25;

// scratch

console.log(chanceToPreventDegradation(255));
