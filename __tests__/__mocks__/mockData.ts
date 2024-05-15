import { Pokemon } from "@/interfaces/Pokemon.interface";

export const mockPokemon: Pokemon = {
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/"
      },
      is_hidden: false,
      slot: 1
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/"
      },
      is_hidden: true,
      slot: 3
    }
  ],
  base_experience: 142,
  cries: {
    latest: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg",
    legacy: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/2.ogg"
  },
  forms: [
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon-form/2/"
    }
  ],
  game_indices: [
    {
      game_index: 9,
      version: {
        name: "red",
        url: "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      game_index: 9,
      version: {
        name: "blue",
        url: "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      game_index: 9,
      version: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "gold",
        url: "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "silver",
        url: "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "ruby",
        url: "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "sapphire",
        url: "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "firered",
        url: "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "leafgreen",
        url: "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "diamond",
        url: "https://pokeapi.co/api/v2/version/12/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "pearl",
        url: "https://pokeapi.co/api/v2/version/13/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version/14/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "heartgold",
        url: "https://pokeapi.co/api/v2/version/15/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "soulsilver",
        url: "https://pokeapi.co/api/v2/version/16/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "black",
        url: "https://pokeapi.co/api/v2/version/17/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "white",
        url: "https://pokeapi.co/api/v2/version/18/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "black-2",
        url: "https://pokeapi.co/api/v2/version/21/"
      }
    },
    {
      game_index: 2,
      version: {
        name: "white-2",
        url: "https://pokeapi.co/api/v2/version/22/"
      }
    }
  ],
  height: 10,
  held_items: [],
  id: 2,
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/2/encounters",
  moves: [
    {
      move: {
        name: "swords-dance",
        url: "https://pokeapi.co/api/v2/move/14/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "cut",
        url: "https://pokeapi.co/api/v2/move/15/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "bind",
        url: "https://pokeapi.co/api/v2/move/20/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      move: {
        name: "vine-whip",
        url: "https://pokeapi.co/api/v2/move/22/"
      },
      version_group_details: [
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "headbutt",
        url: "https://pokeapi.co/api/v2/move/29/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        }
      ]
    },
    {
      move: {
        name: "tackle",
        url: "https://pokeapi.co/api/v2/move/33/"
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "body-slam",
        url: "https://pokeapi.co/api/v2/move/34/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "take-down",
        url: "https://pokeapi.co/api/v2/move/36/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "double-edge",
        url: "https://pokeapi.co/api/v2/move/38/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 48,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "growl",
        url: "https://pokeapi.co/api/v2/move/45/"
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "roar",
        url: "https://pokeapi.co/api/v2/move/46/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "strength",
        url: "https://pokeapi.co/api/v2/move/70/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "mega-drain",
        url: "https://pokeapi.co/api/v2/move/72/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        }
      ]
    },
    {
      move: {
        name: "leech-seed",
        url: "https://pokeapi.co/api/v2/move/73/"
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "growth",
        url: "https://pokeapi.co/api/v2/move/74/"
      },
      version_group_details: [
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 38,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "razor-leaf",
        url: "https://pokeapi.co/api/v2/move/75/"
      },
      version_group_details: [
        {
          level_learned_at: 30,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 30,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "solar-beam",
        url: "https://pokeapi.co/api/v2/move/76/"
      },
      version_group_details: [
        {
          level_learned_at: 54,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 54,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "poison-powder",
        url: "https://pokeapi.co/api/v2/move/77/"
      },
      version_group_details: [
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 14,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "sleep-powder",
        url: "https://pokeapi.co/api/v2/move/79/"
      },
      version_group_details: [
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 14,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "petal-dance",
        url: "https://pokeapi.co/api/v2/move/80/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "egg",
            url: "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "string-shot",
        url: "https://pokeapi.co/api/v2/move/81/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        }
      ]
    },
    {
      move: {
        name: "toxic",
        url: "https://pokeapi.co/api/v2/move/92/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "egg",
            url: "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "rage",
        url: "https://pokeapi.co/api/v2/move/99/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        }
      ]
    },
    {
      move: {
        name: "mimic",
        url: "https://pokeapi.co/api/v2/move/102/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        }
      ]
    },
    {
      move: {
        name: "double-team",
        url: "https://pokeapi.co/api/v2/move/104/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "defense-curl",
        url: "https://pokeapi.co/api/v2/move/111/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        }
      ]
    },
    {
      move: {
        name: "light-screen",
        url: "https://pokeapi.co/api/v2/move/113/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "reflect",
        url: "https://pokeapi.co/api/v2/move/115/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        }
      ]
    },
    {
      move: {
        name: "bide",
        url: "https://pokeapi.co/api/v2/move/117/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        }
      ]
    },
    {
      move: {
        name: "amnesia",
        url: "https://pokeapi.co/api/v2/move/133/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      move: {
        name: "flash",
        url: "https://pokeapi.co/api/v2/move/148/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "rest",
        url: "https://pokeapi.co/api/v2/move/156/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "substitute",
        url: "https://pokeapi.co/api/v2/move/164/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "snore",
        url: "https://pokeapi.co/api/v2/move/173/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      move: {
        name: "curse",
        url: "https://pokeapi.co/api/v2/move/174/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "egg",
            url: "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "protect",
        url: "https://pokeapi.co/api/v2/move/182/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "sludge-bomb",
        url: "https://pokeapi.co/api/v2/move/188/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "mud-slap",
        url: "https://pokeapi.co/api/v2/move/189/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        }
      ]
    },
    {
      move: {
        name: "outrage",
        url: "https://pokeapi.co/api/v2/move/200/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        }
      ]
    },
    {
      move: {
        name: "giga-drain",
        url: "https://pokeapi.co/api/v2/move/202/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "endure",
        url: "https://pokeapi.co/api/v2/move/203/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "charm",
        url: "https://pokeapi.co/api/v2/move/204/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "false-swipe",
        url: "https://pokeapi.co/api/v2/move/206/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "swagger",
        url: "https://pokeapi.co/api/v2/move/207/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "fury-cutter",
        url: "https://pokeapi.co/api/v2/move/210/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        }
      ]
    },
    {
      move: {
        name: "attract",
        url: "https://pokeapi.co/api/v2/move/213/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "sleep-talk",
        url: "https://pokeapi.co/api/v2/move/214/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "return",
        url: "https://pokeapi.co/api/v2/move/216/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      move: {
        name: "frustration",
        url: "https://pokeapi.co/api/v2/move/218/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      move: {
        name: "safeguard",
        url: "https://pokeapi.co/api/v2/move/219/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "sweet-scent",
        url: "https://pokeapi.co/api/v2/move/230/"
      },
      version_group_details: [
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 30,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 30,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 30,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "synthesis",
        url: "https://pokeapi.co/api/v2/move/235/"
      },
      version_group_details: [
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 35,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 35,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 35,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "hidden-power",
        url: "https://pokeapi.co/api/v2/move/237/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      move: {
        name: "sunny-day",
        url: "https://pokeapi.co/api/v2/move/241/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "rock-smash",
        url: "https://pokeapi.co/api/v2/move/249/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "facade",
        url: "https://pokeapi.co/api/v2/move/263/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "nature-power",
        url: "https://pokeapi.co/api/v2/move/267/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      move: {
        name: "helping-hand",
        url: "https://pokeapi.co/api/v2/move/270/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "ingrain",
        url: "https://pokeapi.co/api/v2/move/275/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "egg",
            url: "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "knock-off",
        url: "https://pokeapi.co/api/v2/move/282/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "secret-power",
        url: "https://pokeapi.co/api/v2/move/290/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        }
      ]
    },
    {
      move: {
        name: "weather-ball",
        url: "https://pokeapi.co/api/v2/move/311/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "bullet-seed",
        url: "https://pokeapi.co/api/v2/move/331/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "magical-leaf",
        url: "https://pokeapi.co/api/v2/move/345/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "natural-gift",
        url: "https://pokeapi.co/api/v2/move/363/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        }
      ]
    },
    {
      move: {
        name: "worry-seed",
        url: "https://pokeapi.co/api/v2/move/388/"
      },
      version_group_details: [
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "seed-bomb",
        url: "https://pokeapi.co/api/v2/move/402/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "energy-ball",
        url: "https://pokeapi.co/api/v2/move/412/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "leaf-storm",
        url: "https://pokeapi.co/api/v2/move/437/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "power-whip",
        url: "https://pokeapi.co/api/v2/move/438/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "captivate",
        url: "https://pokeapi.co/api/v2/move/445/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        }
      ]
    },
    {
      move: {
        name: "grass-knot",
        url: "https://pokeapi.co/api/v2/move/447/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "venoshock",
        url: "https://pokeapi.co/api/v2/move/474/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "acid-spray",
        url: "https://pokeapi.co/api/v2/move/491/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "round",
        url: "https://pokeapi.co/api/v2/move/496/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      move: {
        name: "echoed-voice",
        url: "https://pokeapi.co/api/v2/move/497/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      move: {
        name: "grass-pledge",
        url: "https://pokeapi.co/api/v2/move/520/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "work-up",
        url: "https://pokeapi.co/api/v2/move/526/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      move: {
        name: "grassy-terrain",
        url: "https://pokeapi.co/api/v2/move/580/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "confide",
        url: "https://pokeapi.co/api/v2/move/590/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      move: {
        name: "grassy-glide",
        url: "https://pokeapi.co/api/v2/move/803/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "tera-blast",
        url: "https://pokeapi.co/api/v2/move/851/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      move: {
        name: "trailblaze",
        url: "https://pokeapi.co/api/v2/move/885/"
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    }
  ],
  name: "ivysaur",
  order: 2,
  past_abilities: [],
  past_types: [],
  species: {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon-species/2/"
  },
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    back_female: null,
    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
    back_shiny_female: null,
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    front_female: null,
    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        front_female: null
      },
      home: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
        front_female: null,
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/2.png",
        front_shiny_female: null
      },
      'official-artwork': {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png"
      },
      showdown: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/2.gif",
        back_female: null,
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/2.gif",
        back_shiny_female: null,
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/2.gif",
        front_female: null,
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/2.gif",
        front_shiny_female: null
      }
    },
  },
  stats: [
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      base_stat: 62,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      base_stat: 63,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      base_stat: 80,
      effort: 1,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      base_stat: 80,
      effort: 1,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  weight: 130
}