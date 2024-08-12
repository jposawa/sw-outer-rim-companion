import { Character, Ship } from "../types";
import { Faction, Module, ShipModuleType, Skill } from "./game";

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
			base: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Crew]: 1,
				[ShipModuleType.Mix]: 0,
			},
			advanced: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Crew]: 1,
				[ShipModuleType.Mix]: 0,
			},
		},
		objective: "STARTING SHIP",
		ability: {
			description: "",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
					reputation: undefined,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
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
			base: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Crew]: 1,
				[ShipModuleType.Mix]: 0,
			},
			advanced: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Crew]: 1,
				[ShipModuleType.Mix]: 0,
			},
		},
		objective: "STARTING SHIP",
		ability: {
			description: "",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
					reputation: undefined,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
	},
	ship_3: {
		id: "ship_3",
		name: "Firespray-31 Patrolship",
		cost: 20000,
		crew: [],
		modules: [],
		speed: 6,
		attack: 5,
		armor: 6,
		damage: 0,
		objective:
			"<strong>Encounter: </strong> Start a ship combat against a Player on your space that has more fame than you.",
		objectiveAchieved: false,
		ability: {
			name: "Stealth Device",
			description: `When you move into a Patrol space, you can make a ${Skill.Stealth} check. If you pass, you don't need to finish your movement on this space.`,
			modifier: {
				character: {
					attack: 0,
					armor: 0,
					reputation: undefined,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
		},
		constraint: {
			base: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 2,
			},
			advanced: {
				[ShipModuleType.Modification]: 2,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 2,
			},
		},
	},
	ship_4: {
		id: "ship_4",
		name: "Aggressor assault ship",
		cost: 15000,
		crew: [],
		modules: [],
		speed: 6,
		attack: 5,
		armor: 5,
		damage: 0,
		objective: "Win 2 combats against Patrol.",
		objectiveAchieved: false,
		constraint: {
			base: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 2,
			},
			advanced: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 3,
			},
		},
		ability: {
			name: "Long range Ion cannon",
			description:
				"When you win a combat against Patrol, don't loose Reputation with its faction.",
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
			id: undefined,
		},
	},
	ship_5: {
		id: "ship_5",
		name: "HWK-290 Freighter",
		cost: 5000,
		crew: [],
		modules: [],
		speed: 6,
		attack: 3,
		armor: 4,
		damage: 0,
		objective:
			"<strong>Action: </strong>If you have a modification, spend [[Credits]]7000",
		objectiveAchieved: false,
		constraint: {
			base: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 0,
				[ShipModuleType.Crew]: 2,
			},
			advanced: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 2,
				[ShipModuleType.Mix]: 0,
				[ShipModuleType.Crew]: 2,
			},
		},
		ability: {
			description: "Gain +1 [[PersonalWeapon]]",
			modifier: {
				character: {
					attack: 1,
					armor: 0,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
			name: "Anti Personal blaster turret",
		},
	},
	ship_6: {
		id: "ship_6",
		name: "GX1 Light Freighter",
		cost: 5000,
		crew: [],
		modules: [],
		speed: 6,
		attack: 2,
		armor: 5,
		damage: 0,
		objective: "Get a Crew member while having 2 Crew. (Keep all 3 crew)",
		objectiveAchieved: false,
		constraint: {
			base: {
				[ShipModuleType.Modification]: 0,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 2,
			},
			advanced: {
				[ShipModuleType.Modification]: 0,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 3,
			},
		},
		ability: {
			description:
				"During <b>Encounter</b> phase, you aren't required to face patrols with [[Negative]] reputation.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
					reputation: undefined,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
			name: "Diplomatic Mission",
		},
	},
	ship_7: {
		id: "ship_7",
		name: "Heavy Hauler",
		cost: 10000,
		crew: [],
		modules: [],
		speed: 6,
		attack: 3,
		armor: 5,
		damage: 0,
		objective: "If you have at least 1 Cargo, complete a job.",
		objectiveAchieved: false,
		constraint: {
			base: {
				[ShipModuleType.Modification]: 0,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 3,
			},
			advanced: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 2,
				[ShipModuleType.Mix]: 0,
				[ShipModuleType.Crew]: 3,
			},
		},
		ability: {
			description: "Gain +1 [[Speed]] for each Job you have",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
					reputation: undefined,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
			name: "Secret Mission",
		},
	},
	ship_8: {
		id: "ship_8",
		name: "YT-1300 modded Light Freighter",
		cost: 20000,
		crew: [],
		modules: [],
		speed: 7,
		attack: 4,
		armor: 5,
		damage: 0,
		objective:
			'If you have 2 mods or 1 mod and the "Chewbacca" crew, deliver 1 cargo.',
		objectiveAchieved: false,
		constraint: {
			base: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 3,
			},
			advanced: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 1,
				[ShipModuleType.Crew]: 3,
			},
		},
		ability: {
			description:
				"When you roll a die to deliver a <b>Illegal</b> cargo, you can switch a [[Focus]] or [[Critical]] to [[Hit]]",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
					reputation: undefined,
				},
				ship: {
					attack: 1,
					armor: 0,
					speed: 0,
				},
			},
			name: "Special Modifications",
		},
	},
	ship_9: {
		id: "ship_9",
		name: "Lancer pursuing ship",
		cost: 10000,
		crew: [],
		modules: [],
		speed: 6,
		attack: 4,
		armor: 5,
		damage: 0,
		objective: "Deliver a Contact from your Bounties",
		objectiveAchieved: false,
		constraint: {
			base: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 0,
				[ShipModuleType.Crew]: 2,
			},
			advanced: {
				[ShipModuleType.Modification]: 1,
				[ShipModuleType.Cargo]: 1,
				[ShipModuleType.Mix]: 0,
				[ShipModuleType.Crew]: 3,
			},
		},
		ability: {
			description:
				"When other player moves to your space, you can make them to stop the movement.",
			modifier: {
				character: {
					attack: 0,
					armor: 0,
					reputation: undefined,
				},
				ship: {
					attack: 0,
					armor: 0,
					speed: 0,
				},
			},
			name: "Tractor Beam",
		},
	},
  ship_10: {
    id: "ship_10",
    name: "YV-666 Light Freighter",
    cost: 15000,
    crew: [],
    modules: [],
    speed: 7,
    attack: 3,
    armor: 5,
    damage: 0,
    objective: "When you recover at least 1 damage from this ship, spend [[Credits]] 7000.",
    objectiveAchieved: false,
    constraint: {
      base: {
        [ShipModuleType.Modification]: 0,
        [ShipModuleType.Cargo]: 2,
        [ShipModuleType.Mix]: 1,
        [ShipModuleType.Crew]: 3
      },
      advanced: {
        [ShipModuleType.Modification]: 0,
        [ShipModuleType.Cargo]: 2,
        [ShipModuleType.Mix]: 1,
        [ShipModuleType.Crew]: 3
      }
    },
    ability: {
      description: "When you are going to be defeated during a ship combat, roll a die. On a [[Focus]] or [[Hit]] you recover 2 ship damage instead.",
      modifier: {
        character: {
          attack: 0,
          armor: 0,
          reputation: undefined
        },
        ship: {
          attack: 1,
          armor: 0,
          speed: 0
        }
      },
      name: "Nashtah Pup"
    }
  }
};

export const CHARACTERS: Record<Module, Record<string, Character>> = {
	[Module.Core]: {
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
	},
	[Module.Unfinished]: {},
};
