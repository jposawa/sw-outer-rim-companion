export enum Faction {
	Empire = "Empire",
	Rebel = "Rebel_Alliance",
	Syndicate = "Syndicate",
	Hutt = "Hutt_Cartel",
}

export enum ShipModuleType {
	Modification = "Modification",
	Cargo = "Cargo",
  Crew = "Crew",
	Mix = "Cargo/Modification",
}

export const GAME_SETTINGS = {
	MAX_ITEMS: 2,
	MAX_MISSIONS: 2,
};

export enum Skill {
	Influence = "Influence",
	Knowledge = "Knowledge",
	Piloting = "Piloting",
	Tech = "Tech",
	Stealth = "Stealth",
	Tactics = "Tactics",
	Strength = "Strength",
}

export enum AssetType {
	Mods = "Mods",
	Gear = "Gear",
}
