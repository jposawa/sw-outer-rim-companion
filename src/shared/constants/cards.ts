import { Character, Ship } from "../types";
import { Faction, Skill } from "./game";

export const SHIPS: Record<string, Ship> = {};

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
		ship: {
			id: "",
			name: "",
			cost: 0,
			crew: [],
			modules: [],
			speed: 0,
			attack: 0,
			armor: 0,
			objectiveAchieved: false,
		},
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
			description: "When you move into a patrol space, you may test Piloting.\nIf you pass, you don't need to finish your movement on this space.",
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
      [Faction.Hutt]: 0
    },
    credits: 0,
    objective: "To have 2 Droid crew.",
    baseAbility: {
      description: "Once per combat, you may reroll any number of your dice.",
      modifier: {
        character: {
          attack: 0,
          armor: 0
        },
        ship: {
          attack: 0,
          armor: 0,
          speed: 0
        }
      },
      id: undefined
    },
    initialAbility: {
      description: "<strong>Action:</strong> Take a droid crew from other Player on same space.",
      modifier: {
        character: {
          attack: 0,
          armor: 0
        },
        ship: {
          attack: 0,
          armor: 0,
          speed: 0
        }
      },
    },
    objectiveAchieved: false,
    ship: {
      id: "",
      name: "",
      cost: 0,
      crew: [],
      modules: [],
      speed: 0,
      attack: 0,
      armor: 0,
      objectiveAchieved: false,
      objective: undefined,
      ability: undefined
    },
    skills: [Skill.Strength, Skill.Tech],
    advancedAbility: {
      description: "When you are going to be defeated, instead, you may discard 1 of your Crew to recover all damage from your Character and Ship.\n(Put the crew Contact on the closest empty Contact Slot.",
      modifier: {
        character: {
          attack: 0,
          armor: 0
        },
        ship: {
          attack: 0,
          armor: 0,
          speed: 0
        }
      },
      id: undefined
    }
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
      [Faction.Hutt]: 0
    },
    credits: 0,
    objective: "Complete 2 jobs",
    baseAbility: {
      description: "Once per turn, before doing a Skill Check, you may gain a Skill of your choice for this test.",
      modifier: {
        character: {
          attack: 0,
          armor: 0
        },
        ship: {
          attack: 0,
          armor: 0,
          speed: 0
        }
      },
      id: undefined,
      name: undefined
    },
    objectiveAchieved: false,
    ship: {
      id: "",
      name: "",
      cost: 0,
      crew: [],
      modules: [],
      speed: 0,
      attack: 0,
      armor: 0,
      objectiveAchieved: false,
      objective: undefined,
      ability: undefined
    },
    skills: [],
    advancedAbility: {
      description: "<strong>Planning:</strong> If you are on a planet or navigation point, do a market action. This doesn't stop you from doing a market action during your action phase.",
      modifier: {
        character: {
          attack: 0,
          armor: 0
        },
        ship: {
          attack: 0,
          armor: 0,
          speed: 0
        }
      },
      id: undefined,
      name: undefined
    }
  }
};
