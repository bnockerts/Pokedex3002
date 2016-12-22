const pokemonListData = { "count": 811, "previous": null, "results": [{ "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/", "name": "bulbasaur" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/", "name": "ivysaur" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/3\/", "name": "venusaur" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/4\/", "name": "charmander" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/5\/", "name": "charmeleon" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/6\/", "name": "charizard" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/7\/", "name": "squirtle" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/8\/", "name": "wartortle" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/9\/", "name": "blastoise" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/10\/", "name": "caterpie" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/11\/", "name": "metapod" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/12\/", "name": "butterfree" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/13\/", "name": "weedle" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/14\/", "name": "kakuna" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/15\/", "name": "beedrill" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/16\/", "name": "pidgey" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/17\/", "name": "pidgeotto" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/18\/", "name": "pidgeot" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/19\/", "name": "rattata" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/20\/", "name": "raticate" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/21\/", "name": "spearow" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/22\/", "name": "fearow" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/23\/", "name": "ekans" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/24\/", "name": "arbok" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/25\/", "name": "pikachu" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/26\/", "name": "raichu" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/27\/", "name": "sandshrew" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/28\/", "name": "sandslash" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/29\/", "name": "nidoran-f" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/30\/", "name": "nidorina" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/31\/", "name": "nidoqueen" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/32\/", "name": "nidoran-m" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/33\/", "name": "nidorino" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/34\/", "name": "nidoking" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/35\/", "name": "clefairy" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/36\/", "name": "clefable" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/37\/", "name": "vulpix" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/38\/", "name": "ninetales" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/39\/", "name": "jigglypuff" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/40\/", "name": "wigglytuff" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/41\/", "name": "zubat" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/42\/", "name": "golbat" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/43\/", "name": "oddish" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/44\/", "name": "gloom" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/45\/", "name": "vileplume" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/46\/", "name": "paras" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/47\/", "name": "parasect" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/48\/", "name": "venonat" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/49\/", "name": "venomoth" }, { "url": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/50\/", "name": "diglett" }], "next": "https:\/\/pokeapi.co\/api\/v2\/pokemon\/?limit=50&offset=50" };

const pokemonDetailData = {
  forms: [{
      url: 'https://pokeapi.co/api/v2/pokemon-form/6/',
      name: 'charizard'
  }],
  abilities: [{
      slot: 3,
      is_hidden: true,
      ability: {
          url: 'https://pokeapi.co/api/v2/ability/94/',
          name: 'solar-power'
      }
  }, {
      slot: 1,
      is_hidden: false,
      ability: { url: 'https://pokeapi.co/api/v2/ability/66/', name: 'blaze' }
  }],
  stats: [{
      stat: { url: 'https://pokeapi.co/api/v2/stat/6/', name: 'speed' },
      effort: 0,
      base_stat: 100
  }, {
      stat: {
          url: 'https://pokeapi.co/api/v2/stat/5/',
          name: 'special-defense'
      },
      effort: 0,
      base_stat: 85
  }, {
      stat: {
          url: 'https://pokeapi.co/api/v2/stat/4/',
          name: 'special-attack'
      },
      effort: 3,
      base_stat: 109
  }, {
      stat: { url: 'https://pokeapi.co/api/v2/stat/3/', name: 'defense' },
      effort: 0,
      base_stat: 78
  }, {
      stat: { url: 'https://pokeapi.co/api/v2/stat/2/', name: 'attack' },
      effort: 0,
      base_stat: 84
  }, {
      stat: { url: 'https://pokeapi.co/api/v2/stat/1/', name: 'hp' },
      effort: 0,
      base_stat: 78
  }],
  name: 'charizard',
  weight: 905,
  sprites: {
      back_female: null,
      back_shiny_female: null,
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
      front_female: null,
      front_shiny_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png'
  },
  held_items: [],
  location_area_encounters: '/api/v2/pokemon/6/encounters',
  height: 17,
  is_default: true,
  species: {
      url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
      name: 'charizard'
  },
  id: 6,
  order: 7,
  game_indices: [{
      version: {
          url: 'https://pokeapi.co/api/v2/version/22/',
          name: 'white-2'
      },
      game_index: 6
  }, {
      version: {
          url: 'https://pokeapi.co/api/v2/version/21/',
          name: 'black-2'
      },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/18/', name: 'white' },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/17/', name: 'black' },
      game_index: 6
  }, {
      version: {
          url: 'https://pokeapi.co/api/v2/version/16/',
          name: 'soulsilver'
      },
      game_index: 6
  }, {
      version: {
          url: 'https://pokeapi.co/api/v2/version/15/',
          name: 'heartgold'
      },
      game_index: 6
  }, {
      version: {
          url: 'https://pokeapi.co/api/v2/version/14/',
          name: 'platinum'
      },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/13/', name: 'pearl' },
      game_index: 6
  }, {
      version: {
          url: 'https://pokeapi.co/api/v2/version/12/',
          name: 'diamond'
      },
      game_index: 6
  }, {
      version: {
          url: 'https://pokeapi.co/api/v2/version/11/',
          name: 'leafgreen'
      },
      game_index: 6
  }, {
      version: {
          url: 'https://pokeapi.co/api/v2/version/10/',
          name: 'firered'
      },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/9/', name: 'emerald' },
      game_index: 6
  }, {
      version: {
          url: 'https://pokeapi.co/api/v2/version/8/',
          name: 'sapphire'
      },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/7/', name: 'ruby' },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/6/', name: 'crystal' },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/5/', name: 'silver' },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/4/', name: 'gold' },
      game_index: 6
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/3/', name: 'yellow' },
      game_index: 180
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/2/', name: 'blue' },
      game_index: 180
  }, {
      version: { url: 'https://pokeapi.co/api/v2/version/1/', name: 'red' },
      game_index: 180
  }],
  base_experience: 240,
  types: [{
      slot: 2,
      type: { url: 'https://pokeapi.co/api/v2/type/3/', name: 'flying' }
  }, {
      slot: 1,
      type: { url: 'https://pokeapi.co/api/v2/type/10/', name: 'fire' }
  }]
};

export {
  pokemonListData,
  pokemonDetailData
}
