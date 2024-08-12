import { Character, Ship } from "../types";
import { Faction, ShipModuleType, Skill } from "./game";

export const SHIPS: Record<string, Ship> = {
	ship_1: {
		id: "ship_1",
		name: "G-1A Starfighter",
		cost: 0,
		crew: [],
		modules: [],
		speed: 5,
		attack: 3,
		armor: 4,
		damage: 0,
		objectiveAchieved: false,
		constraint: {
			[ShipModuleType.Modification]: 1,
			[ShipModuleType.Cargo]: 1,
			[ShipModuleType.Crew]: 1,
			[ShipModuleType.Mix]: 0,
		},
		objective: "STARTING SHIP",
	},
	ship_2: {
		id: "ship_2",
		name: "G9 Rigger",
		cost: 0,
		crew: [],
		modules: [],
		speed: 6,
		attack: 2,
		armor: 3,
		damage: 0,
		objectiveAchieved: false,
		constraint: {
			[ShipModuleType.Modification]: 1,
			[ShipModuleType.Cargo]: 1,
			[ShipModuleType.Crew]: 1,
			[ShipModuleType.Mix]: 0,
		},
		objective: "STARTING SHIP",
	},
  ship_3: {
    id: "ship_3",
    name: "",
    cost: 0,
    crew: [],
    modules: [],
    speed: 0,
    attack: 0,
    armor: 0,
    damage: 0,
    objective: "",
    objectiveAchieved: false,
    constraint: {
      [ShipModuleType.Modification]: 0,
      [ShipModuleType.Cargo]: 0,
      [ShipModuleType.Crew]: 0,
      [ShipModuleType.Mix]: 0
    }
  }
};

export const CHARACTERS: Record<string, Character> = {
	char_1: {
		id: "char_1",
		name: "Han Solo",
		items: [],
		missions: [],
		attack: 3,
		armor: 4,
		fame: 0,
		reputation: {
			[Faction.Empire]: 0,
			[Faction.Rebel]: 0,
			[Faction.Syndicate]: 0,
			[Faction.Hutt]: -1,
		},
		credits: 0,
		objective: "To have a ship with minimum cost of 15000",
		objectiveAchieved: false,
		skills: [Skill.Piloting, Skill.Tech],
		baseAbility: {
			name: "",
			description: "Add +2 [[Speed]]",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 2,
				},
			},
		},
		advancedAbility: {
			name: "",
			description:
				"When you move into a patrol space, you may test Piloting.\nIf you pass, you don't need to finish your movement on this space.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		damage: 0,
	},
	char_2: {
		id: "char_2",
		name: "IG-88",
		items: [],
		missions: [],
		attack: 3,
		armor: 4,
		fame: 0,
		reputation: {
			[Faction.Empire]: 0,
			[Faction.Rebel]: 0,
			[Faction.Syndicate]: 0,
			[Faction.Hutt]: 0,
		},
		credits: 0,
		objective: "To have 2 Droid crew.",
		baseAbility: {
			description: "Once per combat, you may reroll any number of your dice.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		initialAbility: {
			description:
				"<strong>Action:</strong> Take a droid crew from other Player on same space.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		objectiveAchieved: false,
		skills: [Skill.Strength, Skill.Tech],
		advancedAbility: {
			description:
				"When you are going to be defeated, instead, you may discard 1 of your Crew to recover all damage from your Character and Ship.\n(Put the crew Contact on the closest empty Contact Slot.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		damage: 0,
	},
	char_3: {
		id: "char_3",
		name: "Doctor Aphra",
		items: [],
		missions: [],
		attack: 2,
		armor: 4,
		fame: 0,
		reputation: {
			[Faction.Empire]: 1,
			[Faction.Rebel]: 0,
			[Faction.Syndicate]: 0,
			[Faction.Hutt]: 0,
		},
		credits: 0,
		objective: "Complete 2 jobs",
		baseAbility: {
			description:
				"Once per turn, before doing a Skill Check, you may gain a Skill of your choice for this test.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		objectiveAchieved: false,
		skills: [],
		advancedAbility: {
			description:
				"<strong>Planning:</strong> If you are on a planet or navigation point, do a market action. This doesn't stop you from doing a market action during your action phase.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		damage: 0,
	},
	char_4: {
		id: "char_4",
		name: "Bossk",
		items: [],
		missions: [],
		attack: 3,
		armor: 4,
		fame: 0,
		reputation: {
			[Faction.Empire]: 0,
			[Faction.Rebel]: 0,
			[Faction.Syndicate]: 0,
			[Faction.Hutt]: 1,
		},
		credits: 0,
		objective:
			"Have at least 1 modification and 2 gears with combined cost of at least [[Credits]] 15000",
		baseAbility: {
			description:
				"<strong>Action:</strong> Heal 2 damage of your Character and 2 damage of your Ship.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		objectiveAchieved: false,
		skills: [Skill.Strength, Skill.Tactics],
		advancedAbility: {
			description:
				"<strong>Encounter:</strong> Start a combat against a Player on your space with Fame equal or higher than you. If you win, gain 1 Fame.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		damage: 0,
	},
	char_5: {
		id: "char_5",
		name: "Boba Fett",
		items: [],
		missions: [],
		attack: 3,
		armor: 4,
		fame: 0,
		reputation: {
			[Faction.Empire]: 0,
			[Faction.Rebel]: 0,
			[Faction.Syndicate]: 0,
			[Faction.Hutt]: 1,
		},
		credits: 0,
		objective: "Get rewards from 2 bounties",
		baseAbility: {
			description:
				"<strong>Action:</strong> Secretly look 1 Contact on your planet.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		objectiveAchieved: false,
		skills: [Skill.Stealth, Skill.Tactics],
		advancedAbility: {
			description:
				"After eliminating a Bounty Contact instead of capturing them, gain [[Credits]] 5000",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		damage: 0,
	},
	char_6: {
		id: "char_6",
		name: "Jyn Erso",
		items: [],
		missions: [],
		attack: 3,
		armor: 4,
		fame: 0,
		reputation: {
			[Faction.Empire]: -1,
			[Faction.Rebel]: 0,
			[Faction.Syndicate]: 0,
			[Faction.Hutt]: 0,
		},
		credits: 0,
		objective: "Place a damage token on 2 Imperial Planets",
		initialAbility: {
			description: `<strong>Action:</strong> If you are on an Imperial Planet, take a ${Skill.Stealth} test. If you pass, place 1 damage token on this planet.`,
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		baseAbility: {
			description:
				"Once per turn, during a combat or skill test, you can change one of your [[Focus]] to one [[Critical]]",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		objectiveAchieved: false,
		skills: [Skill.Influence, Skill.Tactics],
		advancedAbility: {
			description:
				"When a Patrol up to 3 spaces from you is going to move during your <b>Action</b> phase, you can move it on the direction of other Player instead.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		damage: 0,
	},
	char_7: {
		id: "char_7",
		name: "Ketsu Onyo",
		items: [],
		missions: [],
		attack: 3,
		armor: 4,
		fame: 0,
		reputation: {
			[Faction.Empire]: 0,
			[Faction.Rebel]: 0,
			[Faction.Syndicate]: 1,
			[Faction.Hutt]: 0,
		},
		credits: 0,
		objective: "Win 3 combats",
		baseAbility: {
			description:
				"<strong>Encounter:</strong> Start an Encounter with a Patrol or Contact up to 3 spaces from you.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		objectiveAchieved: false,
		skills: [Skill.Stealth, Skill.Strength],
		advancedAbility: {
			description: "After winning a Combat, win [[Credits]] 4000",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		damage: 0,
	},
	char_8: {
		id: "char_8",
		name: "Lando Calrissian",
		items: [],
		missions: [],
		attack: 2,
		armor: 4,
		fame: 0,
		reputation: {
			[Faction.Empire]: 0,
			[Faction.Rebel]: 0,
			[Faction.Syndicate]: 0,
			[Faction.Hutt]: 0,
		},
		credits: 0,
		objective: "Deliver 2 <b>Illegal</b> cargo.",
		baseAbility: {
			description:
				"After rolling dice (For any reason), you can reroll 1 of your dice.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
					reputation: "choose",
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		objectiveAchieved: false,
		skills: [Skill.Influence, Skill.Knowledge, Skill.Piloting],
		advancedAbility: {
			description: `<strong>Action: </strong>If you are in a Planet, you may spend [[Credits]] 1000 to make an ${Skill.Influence} test.\nIf you pass, gain 1 Reputation with the Planet's faction.`,
			modifier: {
				character: {
					attack: 0,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		damage: 0,
	},
};
