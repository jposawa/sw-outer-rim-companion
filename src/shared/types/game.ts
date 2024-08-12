import { AssetType, Faction, ShipModuleType, Skill } from "../constants/game";

export type Contact = {
	id: string;
	name: string;
	skills: Skill[];
};

export type Ability = {
	description: string;
	modifier: Modifier;
	id?: string;
	name?: string;
};

export type Reward = {
	fame: number;
	credits: number;
	crew: Contact[];
};

export type Job = {
	id: string;
	name: string;
	location: string;
	description: string;
	reward: Reward;
	cost: number;
};

// It might be the same as @Job, but I have to check on game rules
export type Bounty = {
	id: string;
	name: string;
	targetId: string;
	description?: string;
	cost: number;
	reward: {
		alive: Reward;
		dead: Reward;
	};
};

export type Cargo = {
	id: string;
	name: string;
	description: string;
	location: string;
	isIllegal: boolean;
	reward: Reward;
	cost: number;
};

export type Modifier = {
	character: {
		attack: number;
		armor: number;
		reputation?: Record<Faction, number> | "choose";
	};
	ship: {
		attack: number;
		armor: number;
		speed: number;
	};
};

export type Asset = {
	id: string;
	name: string;
	description: string;
	cost: number;
	type: AssetType;
	modifier: Modifier;
	ability: Ability;
};

export type ShipModule = {
	id?: string; // TODO: Check if it's really needed
	type: ShipModuleType;
	attachedModule: Asset | Cargo;
};

export type Ship = {
	id: string;
	name: string;
	cost: number;
	crew: Contact[];
	modules: ShipModule[];
	speed: number;
	attack: number;
	armor: number;
	damage: number;
	objective: string;
	objectiveAchieved: boolean;
	constraint: {
		base: Record<ShipModuleType, number>;
		advanced: Record<ShipModuleType, number>;
	};
	ability: Ability;
};

export type Character = {
	id: string;
	name: string;
	items: Asset[];
	missions: Array<Job | Bounty>[];
	attack: number;
	armor: number;
	damage: number;
	fame: number;
	reputation: Record<Faction, number>;
	credits: number;
	objective: string;
	baseAbility: Ability;
	objectiveAchieved: boolean;
	skills: Skill[];
	advancedAbility: Ability;
	initialAbility?: Ability;
	ship?: Ship;
};

export type CardStep = {
	description: string;
	stepLabel?: string | React.ReactDOM;
};

export type DatabankCard = {
	id: string;
	number: number;
	steps: CardStep[];
};
