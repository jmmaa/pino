// accuracy
export const calculateBaseAccuracy = (level: number, DEX: number) =>
  Math.floor(level + DEX);

// base attack speed

export const calculateTwoHandedSwordBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => Math.floor(50 + level + 2 * AGI + (AGI + STR - 1) / 5);

export const calculateDualWieldBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => Math.floor(100 + level + 4 * AGI + (AGI + STR - 1) / 5);

export const calculateBowBaseAttackSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => Math.floor(75 + level + 3 * AGI + (AGI + 2 * DEX - 1) / 10);

export const calculateBowgunBaseAttackSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => Math.floor(30 + level + 2.2 * AGI + 0.2 * DEX);

export const calculateStaffBaseAttackSpeed = (
  level: number,
  AGI: number,
  INT: number
) => Math.floor(60 + level + AGI + (4 * AGI + INT - 1) / 5);

export const calculateMagicDeviceBaseAttackSpeed = (
  level: number,
  AGI: number,
  INT: number
) => Math.floor(90 + level + 4 * AGI + (INT - 1) / 5);

export const calculateKnuckleBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number,
  DEX: number
) => Math.floor(120 + level + 4.6 * AGI + DEX / 10 + STR / 10);

export const calculateKatanaBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => Math.floor(200 + level + 3.9 * AGI + 0.3 * STR);

export const calculateHalberdBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => Math.floor(25 + level + 3.5 * AGI + 0.2 * STR);

export const calculateBareHandBaseAttackSpeed = (level: number, AGI: number) =>
  Math.floor(1000 + level + 9.6 * AGI);

export const calculateActionTimeReduction = (attackSpeed: number) => {
  const raw = Math.floor((attackSpeed - 1000) / 180);

  return raw > 50 ? 0.5 : raw / 100;
};

// max hp

export const calculateBaseMaxHP = (level: number, VIT: number) =>
  Math.floor(93 + ((VIT + 22.4) * level) / 3);

// max mp

export const calculateBaseMaxMP = (level: number, INT: number, TEC: number) =>
  Math.floor(
    TEC > 0 ? 100 + level + INT / 10 + (TEC - 1) : 100 + level + INT / 10
  );

// ailment resistance

export const calculateBaseAilmentResistance = (MTL: number) =>
  Math.floor(MTL / 3.4);

// critical rate

export const calculateBaseCriticalRate = (CRT: number) =>
  Math.floor(25 + CRT / 3.4);

// critical damage

export const calculateBaseCriticalDamage = (AGI: number, STR: number) =>
  Math.floor(STR >= AGI ? 150 + STR / 5 : 150 + (STR + AGI) / 10);

// cast speed

export const calculateBaseCastSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => Math.floor(level + 1.16 * AGI + 2.94 * DEX);

export const calculateCastTimeReduction = (castSpeed: number) =>
  castSpeed > 1000
    ? (((castSpeed - 1000) / 90) * 0.5 + 50) / 100
    : castSpeed / 20 / 100;

// ampr

export const calculateAttackMPRecovery = (maxMP: number) =>
  Math.floor(10 + maxMP / 100);

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
) => Math.floor(weaponStability + (STR + 3 * DEX) / 40);

export const calculateTwoHandedSwordStability = (
  weaponStability: number,
  DEX: number
) => Math.floor(weaponStability + DEX / 10);

// essentially the same to ohs stab
export const calculateDualWieldStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => Math.floor(weaponStability + (STR + 3 * DEX) / 40);

export const calculateDualWieldSubStability = (
  subWeaponStability: number,
  STR: number,
  AGI: number
) => Math.floor(subWeaponStability / 2 + (3 * STR + 2 * AGI) / 50);

export const calculateBowStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => Math.floor(weaponStability + (STR + DEX) / 20);

export const calculateBowWithArrowStability = (
  weaponStability: number,
  arrowStability: number,
  STR: number,
  DEX: number
) => calculateBowStability(weaponStability, STR, DEX) + arrowStability;

export const calculateBowgunWithArrowStability = (
  weaponStability: number,
  arrowStability: number,
  STR: number,
  DEX: number
) => calculateBowStability(weaponStability, STR, DEX) + 0.5 * arrowStability;

export const calculateBowgunStability = (
  weaponStability: number,
  STR: number
) => Math.floor(weaponStability + STR / 20);

export const calculateStaffStability = (weaponStability: number, STR: number) =>
  Math.floor(weaponStability + STR / 20);

export const calculateMagicDeviceStability = (
  weaponStability: number,
  DEX: number
) => Math.floor(weaponStability + DEX / 10);

export const calculateKnuckleStability = (
  weaponStability: number,
  DEX: number
) => Math.floor(weaponStability + DEX / 40);

export const calculateHalberdStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => Math.floor(weaponStability + (STR + DEX) / 20);

export const calculateKatanaStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => Math.floor(weaponStability + (3 * STR + DEX) / 40);

export const calculateBareHandStability = (
  weaponStability: number,
  DEX: number
) => Math.floor(weaponStability + DEX / 3);

export const calculateMagicStability = (stability: number) =>
  Math.floor((100 + stability) / 2);

// drop rate
export const calculateBaseDropRate = (LUK: number) => Math.floor(LUK / 5);

// ATK

export const calculateOneHandedSwordBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => Math.floor(level + STR * 2 + DEX * 2 + weaponAttack);

export const calculateTwoHandedSwordBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => Math.floor(level + STR * 3 + DEX + weaponAttack);

export const calculateDualWieldBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number,
  AGI: number
) => Math.floor(level + STR + 2 * DEX + AGI + weaponAttack);

export const calculateDualWieldBaseSubAttack = (
  level: number,
  subWeaponAttack: number,
  STR: number,
  AGI: number
) => Math.floor(level + subWeaponAttack + STR + AGI * 3);

export const calculateBowBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => Math.floor(level + 3 * DEX + STR + weaponAttack);

export const calculateBowgunBaseAttack = (
  level: number,
  weaponAttack: number,
  DEX: number
) => Math.floor(level + weaponAttack + DEX * 4);

export const calculateStaffBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  INT: number
) => Math.floor(level + STR * 3 + INT + weaponAttack);

export const calculateMagicDeviceBaseAttack = (
  level: number,
  weaponAttack: number,
  AGI: number,
  INT: number
) => Math.floor(level + 2 * INT + 2 * AGI + weaponAttack);

export const calculateKnuckleBaseAttack = (
  level: number,
  weaponAttack: number,
  AGI: number,
  DEX: number
) => Math.floor(level + AGI * 2 + 0.5 * DEX + weaponAttack);

export const calculateHalberdBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  AGI: number
) => Math.floor(level + 2.5 * STR + 1.5 * AGI + weaponAttack);

export const calculateKatanaBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => Math.floor(level + 1.5 * STR + 2.5 * DEX + weaponAttack);

export const calculateBareHandBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number
) => Math.floor(level + STR + 1 + weaponAttack);

// Magic Attack

export const calculateOneHandedSwordBaseMagicAttack = (
  level: number,
  INT: number,
  DEX: number
) => Math.floor(level + 3 * INT + DEX);

export const calculateTwoHandedSwordBaseMagicAttack = (
  level: number,
  INT: number,
  DEX: number
) => Math.floor(level + 3 * INT + DEX + 1);

export const calculateDualWieldBaseMagicAttack = (
  level: number,
  INT: number,
  DEX: number
) => Math.floor(level + 3 * INT + DEX);

export const calculateBowBaseMagicAttack = (
  level: number,
  INT: number,
  DEX: number
) => Math.floor(level + 3 * INT + DEX);

export const calculateBowgunBaseMagicAttack = (
  level: number,
  INT: number,
  DEX: number
) => Math.floor(level + 3 * INT + DEX);

export const calculateStaffBaseMagicAttack = (
  level: number,
  weaponAttack: number,
  INT: number,
  DEX: number
) => Math.floor(level + 4 * INT + DEX + weaponAttack);

export const calculateMagicDeviceBaseMagicAttack = (
  level: number,
  weaponAttack: number,
  INT: number,
  DEX: number
) => Math.floor(level + 4 * INT + DEX + weaponAttack);

export const calculateKnuckleBaseMagicAttack = (
  level: number,
  weaponAttack: number,
  INT: number,
  DEX: number
) => Math.floor(level + 4 * INT + DEX + 0.5 * weaponAttack);

export const calculateHalberdBaseMagicAttack = (
  level: number,

  INT: number,
  DEX: number,
  AGI: number
) => Math.floor(level + 2 * INT + DEX + AGI);

export const calculateKatanaBaseMagicAttack = (
  level: number,
  INT: number,
  DEX: number
) => Math.floor(level + 1.5 * INT + DEX);

export const calculateBareHandBaseMagicAttack = (
  level: number,
  INT: number,
  DEX: number
) => Math.floor(level + 3 * INT + DEX + 1);

// armors

export const calculateNormalArmorDefense = (
  level: number,
  VIT: number,
  equipmentDefense: number
) => level + VIT + equipmentDefense;

export const calculateNormalArmorMagicDefense = (
  level: number,
  INT: number,
  equipmentDefense: number
) => level + INT + equipmentDefense;

export const calculateNormalArmorDodge = (level: number, AGI: number) =>
  level + AGI;

export const calculateLightArmorDefense = (
  level: number,
  VIT: number,
  equipmentDefense: number
) => Math.floor(0.8 * level + 0.25 * VIT + equipmentDefense);

export const calculateLightArmorMagicDefense = (
  level: number,
  INT: number,
  equipmentDefense: number
) => Math.floor(0.8 * level + 0.25 * INT + equipmentDefense);

export const calculateLightArmorDodge = (level: number, AGI: number) =>
  Math.floor(1.25 * level + 1.75 * AGI + 30);

export const calculateHeavyArmorDefense = (
  level: number,
  VIT: number,
  equipmentDefense: number
) => Math.floor(1.2 * level + 2 * VIT + equipmentDefense);

export const calculateHeavyArmorMagicDefense = (
  level: number,
  INT: number,
  equipmentDefense: number
) => Math.floor(1.2 * level + 2 * INT + equipmentDefense);

export const calculateHeavyArmorDodge = (level: number, AGI: number) =>
  Math.floor(0.5 * level + 0.75 * AGI - 15);

export const calculateArmorLessDefense = (
  level: number,
  VIT: number,
  equipmentDefense: number
) => Math.floor(0.4 * level + 0.1 * VIT + equipmentDefense);

export const calculateArmorLessMagicDefense = (
  level: number,
  INT: number,
  equipmentDefense: number
) => Math.floor(0.4 * level + 0.1 * INT + equipmentDefense);

export const calculateArmorLessDodge = (level: number, AGI: number) =>
  Math.floor(1.5 * level + 2 * AGI + 75);

// physical, magic, and elemental resistance

export const calculateResistance = (value: number) => {
  if (value > 50) {
    return __resistance(value, 50, 2);
  } else {
    return value;
  }
};

const __resistance = (left: number, acc: number, penalty: number): number => {
  if (left > 50) {
    const value = 50 / penalty;
    return __resistance(left - 50, acc + value, penalty * 2);
  } else {
    return Math.floor(acc);
  }
};

// barrier cooldown

export const calculateBarrierCooldown = (value: number) => value / -5 + 30;

// degradation chance

export const calculateChanceToPreventDegradation = (LUK: number) =>
  Math.floor(LUK / 3.4);

// player difficulty

export const calculatePlayerCraftingDifficulty = (
  proficiency: number,
  TEC: number,
  DEX: number
) => proficiency + TEC / 2 + DEX / 6;

// INT DTE

export const calculateBaseDamageToElement = (INT: number) =>
  Math.floor(INT / 10);

// constant values

export const LIGHT_ARMOR_ATTACK_SPEED = 0.5;

export const HEAVY_ARMOR_ATTACK_SPEED = -0.5;

export const DUAL_WIELD_ACCURACY = -0.55;

export const DUAL_WIELD_CRITICAL_RATE = -0.55;

export const SUB_WEAPON_SHIELD_ATTACK_SPEED = -0.5;

export const SUB_WEAPON_MAGIC_DEVICE_ATTACK = -0.15;

export const SUB_WEAPON_KNUCKLE_MAGIC_ATTACK = -0.15;

export const SUB_WEAPON_ARROW_MAGIC_DEFENSE = -0.25;

export const SUB_WEAPON_ARROW_PHYSICAL_DEFENSE = -0.25;

// scratch

console.log(calculateChanceToPreventDegradation(255));
