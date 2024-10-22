// Datos de los Pokémon
const pokemones = {
    "Bulbasaur": {
        name: "Bulbasaur",
        image: "images/Bulbasaur.png",
        type: "Planta/Veneno",
        height: "0.7 m",
        weight: "6.9 kg",
        abilities: "Esporas, Clorofila"
    },
    "Ivysaur": {
        name: "Ivysaur",
        image: "images/Ivysaur.png",
        type: "Planta/Veneno",
        height: "1 m",
        weight: "13 kg",
        abilities: "Esporas, Clorofila"
    },
    "Venusaur": {
        name: "Venusaur",
        image: "images/Venusaur.png",
        type: "Planta/Veneno",
        height: "2 m",
        weight: "100 kg",
        abilities: "Esporas, Clorofila"
    },
    "Charmander": {
        name: "Charmander",
        image: "images/Charmander.png",
        type: "Fuego",
        height: "0.6 m",
        weight: "8.5 kg",
        abilities: "Mar Llamas"
    },
"Charmeleon": {
    name: "Charmeleon",
    image: "images/Charmeleon.png",
    type: "Fuego",
    height: "1.1 m",
    weight: "19 kg",
    abilities: "Mar Llamas"
},
"Charizard": {
    name: "Charizard",
    image: "images/Charizard.png",
    type: "Fuego/Volador",
    height: "1.7 m",
    weight: "90.5 kg",
    abilities: "Mar Llamas"
},
"Squirtle": {
    name: "Squirtle",
    image: "images/Squirtle.png",
    type: "Agua",
    height: "0.5 m",
    weight: "9 kg",
    abilities: "Torrent"
},
"Wartortle": {
    name: "Wartortle",
    image: "images/Wartortle.png",
    type: "Agua",
    height: "1 m",
    weight: "22.5 kg",
    abilities: "Torrent"
},
"Blastoise": {
    name: "Blastoise",
    image: "images/Blastoise.png",
    type: "Agua",
    height: "1.6 m",
    weight: "85.5 kg",
    abilities: "Torrent"
},
"Arbok": {
    name: "Arbok",
    image: "images/Arbok.png",
    type: "Veneno",
    height: "3.5 m",
    weight: "65 kg",
    abilities: "Intimidación, Bucle"
},
"Beedrill": {
    name: "Beedrill",
    image: "images/Beedrill.png",
    type: "Bicho/Veneno",
    height: "1 m",
    weight: "29.5 kg",
    abilities: "Absorbe, Foco Interno"
},
"Pidgeotto": {
    name: "Pidgeotto",
    image: "images/Pidgeotto.png",
    type: "Normal/Volador",
    height: "1.1 m",
    weight: "30 kg",
    abilities: "Esquiva"
},
"Pidgeot": {
    name: "Pidgeot",
    image: "images/Pidgeot.png",
    type: "Normal/Volador",
    height: "1.5 m",
    weight: "39.5 kg",
    abilities: "Esquiva"
},
"Rattata": {
    name: "Rattata",
    image: "images/Rattata.png",
    type: "Normal",
    height: "0.3 m",
    weight: "3.5 kg",
    abilities: "Run Away, Guts"
},
"Raticate": {
    name: "Raticate",
    image: "images/Raticate.png",
    type: "Normal",
    height: "0.7 m",
    weight: "18.5 kg",
    abilities: "Run Away, Guts"
},
"Sandshrew": {
    name: "Sandshrew",
    image: "images/Sandshrew.png",
    type: "Tierra",
    height: "0.6 m",
    weight: "12 kg",
    abilities: "Escudo de Arena"
},
"Sandslash": {
    name: "Sandslash",
    image: "images/Sandslash.png",
    type: "Tierra",
    height: "1 m",
    weight: "29.5 kg",
    abilities: "Escudo de Arena"
},
"Ekans": {
    name: "Ekans",
    image: "images/Ekans.png",
    type: "Veneno",
    height: "2 m",
    weight: "6.9 kg",
    abilities: "Intimidación"
},
"Arbok": {
    name: "Arbok",
    image: "images/Arbok.png",
    type: "Veneno",
    height: "3.5 m",
    weight: "65 kg",
    abilities: "Intimidación"
},
"Pikachu": {
    name: "Pikachu",
    image: "images/Pikachu.png",
    type: "Eléctrico",
    height: "0.4 m",
    weight: "6 kg",
    abilities: "Electricidad Estática"
},
"Raichu": {
    name: "Raichu",
    image: "images/Raichu.png",
    type: "Eléctrico",
    height: "0.8 m",
    weight: "30 kg",
    abilities: "Electricidad Estática"
},
"Jigglypuff": {
    name: "Jigglypuff",
    image: "images/Jigglypuff.png",
    type: "Normal/Hada",
    height: "0.5 m",
    weight: "5.5 kg",
    abilities: "Canto"
},
"Wigglytuff": {
    name: "Wigglytuff",
    image: "images/Wigglytuff.png",
    type: "Normal/Hada",
    height: "0.8 m",
    weight: "12 kg",
    abilities: "Canto"
},
"Zubat": {
    name: "Zubat",
    image: "images/Zubat.png",
    type: "Veneno/Volador",
    height: "0.8 m",
    weight: "7.5 kg",
    abilities: "Absorbe"
},
"Caterpie": {
    name: "Caterpie",
    image: "images/Caterpie.png",
    type: "Bicho",
    height: "0.3 m",
    weight: "2.9 kg",
    abilities: "Absorbe"
},
    "Metapod": {
        name: "Metapod",
        image: "images/Metapod.png",
        type: "Bicho",
        height: "0.7 m",
        weight: "9.9 kg",
        abilities: "Rígido"
    },
    "Butterfree": {
        name: "Butterfree",
        image: "images/Butterfree.png",
        type: "Bicho/Volador",
        height: "1.1 m",
        weight: "32 kg",
        abilities: "Polvo Estático, Vista Lince"
    },
    "Weedle": {
        name: "Weedle",
        image: "images/Weedle.png",
        type: "Bicho/Veneno",
        height: "0.3 m",
        weight: "3.2 kg",
        abilities: "Espinas"
    },
    "Kakuna": {
        name: "Kakuna",
        image: "images/Kakuna.png",
        type: "Bicho/Veneno",
        height: "0.6 m",
        weight: "10 kg",
        abilities: "Rígido"
    },
    "Pidgey": {
        name: "Pidgey",
        image: "images/Pidgey.png",
        type: "Normal/Volador",
        height: "0.3 m",
        weight: "1.8 kg",
        abilities: "Esquiva"
    },
    "Pidgeotto": {
        name: "Pidgeotto",
        image: "images/Pidgeotto.png",
        type: "Normal/Volador",
        height: "1.1 m",
        weight: "30 kg",
        abilities: "Esquiva"
    },
    "Pidgeot": {
        name: "Pidgeot",
        image: "images/Pidgeot.png",
        type: "Normal/Volador",
        height: "1.5 m",
        weight: "39.5 kg",
        abilities: "Esquiva"
    },
    "Rattata": {
        name: "Rattata",
        image: "images/Rattata.png",
        type: "Normal",
        height: "0.3 m",
        weight: "3.5 kg",
        abilities: "Run Away, Guts"
    },
    "Raticate": {
        name: "Raticate",
        image: "images/Raticate.png",
        type: "Normal",
        height: "0.7 m",
        weight: "18.5 kg",
        abilities: "Run Away, Guts"
    },
    "Spearow": {
        name: "Spearow",
        image: "images/Spearow.png",
        type: "Normal/Volador",
        height: "0.3 m",
        weight: "2 kg",
        abilities: "Esquiva"
    },
    "Fearow": {
        name: "Fearow",
        image: "images/Fearow.png",
        type: "Normal/Volador",
        height: "1.2 m",
        weight: "38 kg",
        abilities: "Esquiva"
    },
    "Ekans": {
        name: "Ekans",
        image: "images/Ekans.png",
        type: "Veneno",
        height: "2 m",
        weight: "6.9 kg",
        abilities: "Intimidación"
    },
    "Arbok": {
        name: "Arbok",
        image: "images/Arbok.png",
        type: "Veneno",
        height: "3.5 m",
        weight: "65 kg",
        abilities: "Intimidación, Bucle"
    },
    "Pikachu": {
        name: "Pikachu",
        image: "images/Pikachu.png",
        type: "Eléctrico",
        height: "0.4 m",
        weight: "6 kg",
        abilities: "Electricidad Estática"
    },
    "Raichu": {
        name: "Raichu",
        image: "images/Raichu.png",
        type: "Eléctrico",
        height: "0.8 m",
        weight: "30 kg",
        abilities: "Electricidad Estática"
    },
    "Sandshrew": {
        name: "Sandshrew",
        image: "images/Sandshrew.png",
        type: "Tierra",
        height: "0.6 m",
        weight: "12 kg",
        abilities: "Escudo de Arena"
    },
    "Sandslash": {
        name: "Sandslash",
        image: "images/Sandslash.png",
        type: "Tierra",
        height: "1 m",
        weight: "29.5 kg",
        abilities: "Escudo de Arena"
    },
    "Nidoran♀": {
        name: "Nidoran♀",
        image: "images/Nidoran♀.png",
        type: "Veneno",
        height: "0.4 m",
        weight: "7 kg",
        abilities: "Veneno Punzante"
    },
    "Nidorina": {
        name: "Nidorina",
        image: "images/Nidorina.png",
        type: "Veneno",
        height: "0.8 m",
        weight: "20 kg",
        abilities: "Veneno Punzante"
    },
    "Nidoqueen": {
        name: "Nidoqueen",
        image: "images/Nidoqueen.png",
        type: "Veneno/Tierra",
        height: "1.3 m",
        weight: "60 kg",
        abilities: "Veneno Punzante"
    },
    "Nidoran♂": {
        name: "Nidoran♂",
        image: "images/Nidoran♂.png",
        type: "Veneno",
        height: "0.5 m",
        weight: "9 kg",
        abilities: "Veneno Punzante"
    },
    "Nidorino": {
        name: "Nidorino",
        image: "images/Nidorino.png",
        type: "Veneno",
        height: "0.9 m",
        weight: "19.5 kg",
        abilities: "Veneno Punzante"
    },
    "Nidoking": {
        name: "Nidoking",
        image: "images/Nidoking.png",
        type: "Veneno/Tierra",
        height: "1.4 m",
        weight: "62 kg",
        abilities: "Veneno Punzante"
    },
    "Clefairy": {
        name: "Clefairy",
        image: "images/Clefairy.png",
        type: "Hada",
        height: "0.6 m",
        weight: "7.5 kg",
        abilities: "Curación"
    },
    "Clefable": {
        name: "Clefable",
        image: "images/Clefable.png",
        type: "Hada",
        height: "1.3 m",
        weight: "40 kg",
        abilities: "Curación"
    },
    "Vulpix": {
        name: "Vulpix",
        image: "images/Vulpix.png",
        type: "Fuego",
        height: "0.6 m",
        weight: "9.9 kg",
        abilities: "Fuego"
    },
    "Ninetales": {
        name: "Ninetales",
        image: "images/Ninetales.png",
        type: "Fuego",
        height: "1.1 m",
        weight: "19.9 kg",
        abilities: "Fuego"
    },
    "Jigglypuff": {
        name: "Jigglypuff",
        image: "images/Jigglypuff.png",
        type: "Normal/Hada",
        height: "0.5 m",
        weight: "5.5 kg",
        abilities: "Cute Charm"
    },
    "Wigglytuff": {
        name: "Wigglytuff",
        image: "images/Wigglytuff.png",
        type: "Normal/Hada",
        height: "1 m",
        weight: "12 kg",
        abilities: "Cute Charm"
    },
    "Zubat": {
        name: "Zubat",
        image: "images/Zubat.png",
        type: "Veneno/Volador",
        height: "0.8 m",
        weight: "7.5 kg",
        abilities: "Infiltrator"
    },
    "Golbat": {
        name: "Golbat",
        image: "images/Golbat.png",
        type: "Veneno/Volador",
        height: "1.6 m",
        weight: "55 kg",
        abilities: "Infiltrator"
    },
    "Oddish": {
        name: "Oddish",
        image: "images/Oddish.png",
        type: "Planta/Veneno",
        height: "0.5 m",
        weight: "5.4 kg",
        abilities: "Chlorophyll"
    },
    "Gloom": {
        name: "Gloom",
        image: "images/Gloom.png",
        type: "Planta/Veneno",
        height: "0.8 m",
        weight: "8.6 kg",
        abilities: "Chlorophyll"
    },
    "Vileplume": {
        name: "Vileplume",
        image: "images/Vileplume.png",
        type: "Planta/Veneno",
        height: "1.2 m",
        weight: "18.6 kg",
        abilities: "Chlorophyll"
    },
    "Paras": {
        name: "Paras",
        image: "images/Paras.png",
        type: "Bicho/Planta",
        height: "0.3 m",
        weight: "5 kg",
        abilities: "Efect Spora"
    },
    "Parasect": {
        name: "Parasect",
        image: "images/Parasect.png",
        type: "Bicho/Planta",
        height: "1 m",
        weight: "29.5 kg",
        abilities: "Efect Spora"
    },
    "Venonat": {
        name: "Venonat",
        image: "images/Venonat.png",
        type: "Bicho/Veneno",
        height: "1 m",
        weight: "30 kg",
        abilities: "Sincronía"
    },
    "Venomoth": {
        name: "Venomoth",
        image: "images/Venomoth.png",
        type: "Bicho/Veneno",
        height: "1.5 m",
        weight: "12.5 kg",
        abilities: "Sincronía"
    },
    "Diglett": {
        name: "Diglett",
        image: "images/Diglett.png",
        type: "Tierra",
        height: "0.2 m",
        weight: "0.8 kg",
        abilities: "Rastro"
    },
    "Dugtrio": {
        name: "Dugtrio",
        image: "images/Dugtrio.png",
        type: "Tierra",
        height: "0.7 m",
        weight: "33.3 kg",
        abilities: "Rastro"
    },
    "Meowth": {
        name: "Meowth",
        image: "images/Meowth.png",
        type: "Normal",
        height: "0.4 m",
        weight: "4.2 kg",
        abilities: "Recolecta"
    },
    "Persian": {
        name: "Persian",
        image: "images/Persian.png",
        type: "Normal",
        height: "1 m",
        weight: "32 kg",
        abilities: "Recolecta"
    },
    "Psyduck": {
        name: "Psyduck",
        image: "images/Psyduck.png",
        type: "Agua",
        height: "0.8 m",
        weight: "19.6 kg",
        abilities: "Sincronía"
    },
    "Golduck": {
        name: "Golduck",
        image: "images/Golduck.png",
        type: "Agua",
        height: "1.7 m",
        weight: "76.6 kg",
        abilities: "Sincronía"
    },
    "Machop": {
        name: "Machop",
        image: "images/Machop.png",
        type: "Lucha",
        height: "0.8 m",
        weight: "19.5 kg",
        abilities: "Guts"
    },
    "Machoke": {
        name: "Machoke",
        image: "images/Machoke.png",
        type: "Lucha",
        height: "1.5 m",
        weight: "70.5 kg",
        abilities: "Guts"
    },
    "Machamp": {
        name: "Machamp",
        image: "images/Machamp.png",
        type: "Lucha",
        height: "1.6 m",
        weight: "130 kg",
        abilities: "Guts"
    },
    "Bellsprout": {
        name: "Bellsprout",
        image: "images/Bellsprout.png",
        type: "Planta/Veneno",
        height: "0.7 m",
        weight: "4 kg",
        abilities: "Chlorophyll"
    },
    "Weepinbell": {
        name: "Weepinbell",
        image: "images/Weepinbell.png",
        type: "Planta/Veneno",
        height: "1 m",
        weight: "6.4 kg",
        abilities: "Chlorophyll"
    },
    "Victreebel": {
        name: "Victreebel",
        image: "images/Victreebel.png",
        type: "Planta/Veneno",
        height: "1.7 m",
        weight: "15.5 kg",
        abilities: "Chlorophyll"
    },
    "Tentacool": {
        name: "Tentacool",
        image: "images/Tentacool.png",
        type: "Agua/Veneno",
        height: "0.9 m",
        weight: "35 kg",
        abilities: "Absorción"
    },
    "Tentacruel": {
        name: "Tentacruel",
        image: "images/Tentacruel.png",
        type: "Agua/Veneno",
        height: "1.6 m",
        weight: "55 kg",
        abilities: "Absorción"
    },
    
    "Mankey": {
        name: "Mankey",
        image: "images/Mankey.png",
        type: "Lucha",
        height: "0.5 m",
        weight: "28 kg",
        abilities: "Agallas"
    },
    "Primeape": {
        name: "Primeape",
        image: "images/Primeape.png",
        type: "Lucha",
        height: "1.0 m",
        weight: "32 kg",
        abilities: "Agallas"
    },
    "Growlithe": {
        name: "Growlithe",
        image: "images/Growlithe.png",
        type: "Fuego",
        height: "0.6 m",
        weight: "19 kg",
        abilities: "Intimidación"
    },
    "Arcanine": {
        name: "Arcanine",
        image: "images/Arcanine.png",
        type: "Fuego",
        height: "1.9 m",
        weight: "155 kg",
        abilities: "Intimidación"
    },
    "Poliwag": {
        name: "Poliwag",
        image: "images/Poliwag.png",
        type: "Agua",
        height: "0.6 m",
        weight: "12.4 kg",
        abilities: "Absorción"
    },
    "Poliwhirl": {
        name: "Poliwhirl",
        image: "images/Poliwhirl.png",
        type: "Agua",
        height: "1.0 m",
        weight: "20 kg",
        abilities: "Absorción"
    },
    "Poliwrath": {
        name: "Poliwrath",
        image: "images/Poliwrath.png",
        type: "Agua/Lucha",
        height: "1.3 m",
        weight: "54 kg",
        abilities: "Absorción"
    },
    "Abra": {
        name: "Abra",
        image: "images/Abra.png",
        type: "Psíquico",
        height: "0.9 m",
        weight: "19.5 kg",
        abilities: "Sincronía"
    },
    "Kadabra": {
        name: "Kadabra",
        image: "images/Kadabra.png",
        type: "Psíquico",
        height: "1.3 m",
        weight: "56.5 kg",
        abilities: "Sincronía"
    },
    "Alakazam": {
        name: "Alakazam",
        image: "images/Alakazam.png",
        type: "Psíquico",
        height: "1.5 m",
        weight: "48 kg",
        abilities: "Sincronía"
    },
    "Machop": {
        name: "Machop",
        image: "images/Machop.png",
        type: "Lucha",
        height: "0.8 m",
        weight: "19.5 kg",
        abilities: "Poder Interno"
    },
    "Machoke": {
        name: "Machoke",
        image: "images/Machoke.png",
        type: "Lucha",
        height: "1.5 m",
        weight: "70.5 kg",
        abilities: "Poder Interno"
    },
    "Machamp": {
        name: "Machamp",
        image: "images/Machamp.png",
        type: "Lucha",
        height: "1.6 m",
        weight: "130 kg",
        abilities: "Poder Interno"
    },
    "Bellsprout": {
        name: "Bellsprout",
        image: "images/Bellsprout.png",
        type: "Planta/Veneno",
        height: "0.7 m",
        weight: "4 kg",
        abilities: "Clorofila"
    },
    "Weepinbell": {
        name: "Weepinbell",
        image: "images/Weepinbell.png",
        type: "Planta/Veneno",
        height: "1.0 m",
        weight: "6.4 kg",
        abilities: "Clorofila"
    },
    "Victreebel": {
        name: "Victreebel",
        image: "images/Victreebel.png",
        type: "Planta/Veneno",
        height: "1.7 m",
        weight: "15.5 kg",
        abilities: "Clorofila"
    },
    "Tentacool": {
        name: "Tentacool",
        image: "images/Tentacool.png",
        type: "Agua/Veneno",
        height: "0.9 m",
        weight: "35 kg",
        abilities: "Absorción"
    },
    "Tentacruel": {
        name: "Tentacruel",
        image: "images/Tentacruel.png",
        type: "Agua/Veneno",
        height: "1.6 m",
        weight: "55 kg",
        abilities: "Absorción"
    },
    "Geodude": {
        name: "Geodude",
        image: "images/Geodude.png",
        type: "Roca/Tierra",
        height: "0.4 m",
        weight: "20 kg",
        abilities: "Poder Arena"
    },
    "Graveler": {
        name: "Graveler",
        image: "images/Graveler.png",
        type: "Roca/Tierra",
        height: "1.0 m",
        weight: "105 kg",
        abilities: "Poder Arena"
    },
    "Golem": {
        name: "Golem",
        image: "images/Golem.png",
        type: "Roca/Tierra",
        height: "1.4 m",
        weight: "300 kg",
        abilities: "Poder Arena"
    },
    "Ponyta": {
        name: "Ponyta",
        image: "images/Ponyta.png",
        type: "Fuego",
        height: "0.6 m",
        weight: "30 kg",
        abilities: "Cuerpo Llama"
    },
    "Rapidash": {
        name: "Rapidash",
        image: "images/Rapidash.png",
        type: "Fuego",
        height: "1.7 m",
        weight: "95 kg",
        abilities: "Cuerpo Llama"
    },
    "Slowpoke": {
        name: "Slowpoke",
        image: "images/Slowpoke.png",
        type: "Agua/Psíquico",
        height: "1.2 m",
        weight: "36 kg",
        abilities: "Sincronía"
    },
    "Slowbro": {
        name: "Slowbro",
        image: "images/Slowbro.png",
        type: "Agua/Psíquico",
        height: "1.6 m",
        weight: "78.5 kg",
        abilities: "Regeneración"
    },
    "Magnemite": {
        name: "Magnemite",
        image: "images/Magnemite.png",
        type: "Eléctrico/Acero",
        height: "0.3 m",
        weight: "6 kg",
        abilities: "Imán"
    },
    "Magneton": {
        name: "Magneton",
        image: "images/Magneton.png",
        type: "Eléctrico/Acero",
        height: "1.0 m",
        weight: "60 kg",
        abilities: "Imán"
    },
    "Farfetch'd": {
        name: "Farfetch'd",
        image: "images/Farfetch'd.png",
        type: "Normal/Volador", 
        height: "0.6 m",
        weight: "15 kg",
        abilities: "Pico Agudo"
    },
    "Doduo": {
        name: "Doduo",
        image: "images/Doduo.png",
        type: "Normal/Volador",
        height: "1.4 m",
        weight: "39.2 kg",
        abilities: "Rapidez"
    },
    "Dodrio": {
        name: "Dodrio",
        image: "images/Dodrio.png",
        type: "Normal/Volador",
        height: "1.8 m",
        weight: "85.2 kg",
        abilities: "Rapidez"
    },
    "Seel": {
        name: "Seel",
        image: "images/Seel.png",
        type: "Agua",
        height: "1.1 m",
        weight: "90 kg",
        abilities: "Caparazón"
    },
    "Dewgong": {
        name: "Dewgong",
        image: "images/Dewgong.png",
        type: "Agua/Hielo",
        height: "1.7 m",
        weight: "120 kg",
        abilities: "Caparazón"
    },
    "Grimer": {
        name: "Grimer",
        image: "images/Grimer.png",
        type: "Veneno",
        height: "0.9 m",
        weight: "30 kg",
        abilities: "Inmunidad"
    },
    "Muk": {
        name: "Muk",
        image: "images/Muk.png",
        type: "Veneno",
        height: "1.2 m",
        weight: "30 kg",
        abilities: "Inmunidad"
    },
        
    "Shellder": {
        name: "Shellder",
        image: "images/Shellder.png",
        type: "Agua",
        height: "0.3 m",
        weight: "4 kg",
        abilities: "Escudo"
    },
    "Cloyster": {
        name: "Cloyster",
        image: "images/Cloyster.png",
        type: "Agua/Hielo",
        height: "1.5 m",
        weight: "132.5 kg",
        abilities: "Escudo"
    },
    "Gastly": {
        name: "Gastly",
        image: "images/Gastly.png",
        type: "Fantasma/Veneno",
        height: "1.3 m",
        weight: "0.1 kg",
        abilities: "Levitación"
    },
    "Haunter": {
        name: "Haunter",
        image: "images/Haunter.png",
        type: "Fantasma/Veneno",
        height: "1.6 m",
        weight: "0.1 kg",
        abilities: "Levitación"
    },
    "Gengar": {
        name: "Gengar",
        image: "images/Gengar.png",
        type: "Fantasma/Veneno",
        height: "1.5 m",
        weight: "40 kg",
        abilities: "Levitación"
    },
    "Onix": {
        name: "Onix",
        image: "images/Onix.png",
        type: "Roca/Tierra",
        height: "8.8 m",
        weight: "210 kg",
        abilities: "Poder Arena"
    },
    "Drowzee": {
        name: "Drowzee",
        image: "images/Drowzee.png",
        type: "Psíquico",
        height: "1.0 m",
        weight: "32.4 kg",
        abilities: "Sincronía"
    },
    "Hypno": {
        name: "Hypno",
        image: "images/Hypno.png",
        type: "Psíquico",
        height: "1.6 m",
        weight: "75.6 kg",
        abilities: "Sincronía"
    },
    "Krabby": {
        name: "Krabby",
        image: "images/Krabby.png",
        type: "Agua",
        height: "0.4 m",
        weight: "6.5 kg",
        abilities: "Músculo"
    },
    "Kingler": {
        name: "Kingler",
        image: "images/Kingler.png",
        type: "Agua",
        height: "1.3 m",
        weight: "60 kg",
        abilities: "Músculo"
    },
    "Voltorb": {
        name: "Voltorb",
        image: "images/Voltorb.png",
        type: "Eléctrico",
        height: "0.5 m",
        weight: "10 kg",
        abilities: "Estática"
    },
    "Electrode": {
        name: "Electrode",
        image: "images/Electrode.png",
        type: "Eléctrico",
        height: "1.2 m",
        weight: "66.6 kg",
        abilities: "Estática"
    },
    "Exeggcute": {
        name: "Exeggcute",
        image: "images/Exeggcute.png",
        type: "Planta/Psíquico",
        height: "0.4 m",
        weight: "2.5 kg",
        abilities: "Clorofila"
    },
    "Exeggutor": {
        name: "Exeggutor",
        image: "images/Exeggutor.png",
        type: "Planta/Psíquico",
        height: "2.0 m",
        weight: "120 kg",
        abilities: "Clorofila"
    },
    "Cubone": {
        name: "Cubone",
        image: "images/Cubone.png",
        type: "Tierra",
        height: "0.4 m",
        weight: "6.5 kg",
        abilities: "Cuerpo Frío"
    },
    "Marowak": {
        name: "Marowak",
        image: "images/Marowak.png",
        type: "Tierra",
        height: "1.0 m",
        weight: "45 kg",
        abilities: "Cuerpo Frío"
    },
    "Hitmonlee": {
        name: "Hitmonlee",
        image: "images/Hitmonlee.png",
        type: "Lucha",
        height: "1.5 m",
        weight: "49 kg",
        abilities: "Poder Interno"
    },
    "Hitmonchan": {
        name: "Hitmonchan",
        image: "images/Hitmonchan.png",
        type: "Lucha",
        height: "1.4 m",
        weight: "50.2 kg",
        abilities: "Poder Interno"
    },
    "Lickitung": {
        name: "Lickitung",
        image: "images/Lickitung.png",
        type: "Normal",
        height: "1.2 m",
        weight: "65 kg",
        abilities: "Regeneración"
    },
    
    "Koffing": {
        name: "Koffing",
        image: "images/Koffing.png",
        type: "Veneno",
        height: "0.6 m",
        weight: "1 kg",
        abilities: "Inmunidad"
    },
    "Weezing": {
        name: "Weezing",
        image: "images/Weezing.png",
        type: "Veneno",
        height: "1.2 m",
        weight: "9.5 kg",
        abilities: "Inmunidad"
    },
    "Rhyhorn": {
        name: "Rhyhorn",
        image: "images/Rhyhorn.png",
        type: "Roca/Tierra",
        height: "0.8 m",
        weight: "115 kg",
        abilities: "Piedra Dura"
    },
    "Rhydon": {
        name: "Rhydon",
        image: "images/Rhydon.png",
        type: "Roca/Tierra",
        height: "1.9 m",
        weight: "120 kg",
        abilities: "Piedra Dura"
    },
    "Chansey": {
        name: "Chansey",
        image: "images/Chansey.png",
        type: "Normal",
        height: "1.1 m",
        weight: "34.6 kg",
        abilities: "Cura Natural"
    },
    "Tangela": {
        name: "Tangela",
        image: "images/Tangela.png",
        type: "Planta",
        height: "1.0 m",
        weight: "35 kg",
        abilities: "Clorofila"
    },
    "Kangaskhan": {
        name: "Kangaskhan",
        image: "images/Kangaskhan.png",
        type: "Normal",
        height: "2.2 m",
        weight: "80 kg",
        abilities: "Rompemoldes"
    },
    "Horsea": {
        name: "Horsea",
        image: "images/Horsea.png",
        type: "Agua",
        height: "0.6 m",
        weight: "8 kg",
        abilities: "Absorción"
    },
    "Seadra": {
        name: "Seadra",
        image: "images/Seadra.png",
        type: "Agua",
        height: "1.2 m",
        weight: "25 kg",
        abilities: "Absorción"
    },
    "Goldeen": {
        name: "Goldeen",
        image: "images/Goldeen.png",
        type: "Agua",
        height: "0.6 m",
        weight: "15 kg",
        abilities: "Nado Rápido"
    },
    "Seaking": {
        name: "Seaking",
        image: "images/Seaking.png",
        type: "Agua",
        height: "1.3 m",
        weight: "39 kg",
        abilities: "Nado Rápido"
    },
    "Staryu": {
        name: "Staryu",
        image: "images/Staryu.png",
        type: "Agua",
        height: "0.8 m",
        weight: "34.5 kg",
        abilities: "Absorción"
    },
    "Starmie": {
        name: "Starmie",
        image: "images/Starmie.png",
        type: "Agua/Psíquico",
        height: "1.1 m",
        weight: "80 kg",
        abilities: "Absorción"
    },
    "Mr._Mime": {
        name: "Mr. Mime",
        image: "images/Mr._Mime.png",
        type: "Psíquico/Hada",
        height: "1.3 m",
        weight: "54.5 kg",
        abilities: "Manto Espejo"
    },
    "Scyther": {
        name: "Scyther",
        image: "images/Scyther.png",
        type: "Bicho/Volador",
        height: "1.5 m",
        weight: "56 kg",
        abilities: "Tecnico"
    },
    "Jynx": {
        name: "Jynx",
        image: "images/Jynx.png",
        type: "Hielo/Psíquico",
        height: "1.4 m",
        weight: "40.6 kg",
        abilities: "Cuerpo Congelante"
    },
    "Electabuzz": {
        name: "Electabuzz",
        image: "images/Electabuzz.png",
        type: "Eléctrico",
        height: "1.1 m",
        weight: "30 kg",
        abilities: "Electricidad Estática"
    },
    "Magmar": {
        name: "Magmar",
        image: "images/Magmar.png",
        type: "Fuego",
        height: "1.3 m",
        weight: "44.5 kg",
        abilities: "Piel Ígnea"
    },
    "Pinsir": {
        name: "Pinsir",
        image: "images/Pinsir.png",
        type: "Bicho",
        height: "1.5 m",
        weight: "55 kg",
        abilities: "Fuerza"
    },
    "Tauros": {
        name: "Tauros",
        image: "images/Tauros.png",
        type: "Normal",
        height: "1.4 m",
        weight: "88 kg",
        abilities: "Intimidación"
    },
    "Magikarp": {
        name: "Magikarp",
        image: "images/Magikarp.png",
        type: "Agua",
        height: "0.9 m",
        weight: "10 kg",
        abilities: "Saltos Brillantes"
    },
    "Gyarados": {
        name: "Gyarados",
        image: "images/Gyarados.png",
        type: "Agua/Volador",
        height: "6.5 m",
        weight: "235 kg",
        abilities: "Intimidación"
    },
    "Lapras": {
        name: "Lapras",
        image: "images/Lapras.png",
        type: "Agua/Hielo",
        height: "2.5 m",
        weight: "220 kg",
        abilities: "Cuerpo Congelante"
    },
    "Ditto": {
        name: "Ditto",
        image: "images/Ditto.png",
        type: "Normal",
        height: "0.3 m",
        weight: "4 kg",
        abilities: "Transformación"
    },
    "Eevee": {
        name: "Eevee",
        image: "images/Eevee.png",
        type: "Normal",
        height: "0.3 m",
        weight: "6.5 kg",
        abilities: "Adaptabilidad"
    },
    "Vaporeon": {
        name: "Vaporeon",
        image: "images/Vaporeon.png",
        type: "Agua",
        height: "1.0 m",
        weight: "29 kg",
        abilities: "Absorber Agua"
    },
    "Jolteon": {
        name: "Jolteon",
        image: "images/Jolteon.png",
        type: "Eléctrico",
        height: "0.8 m",
        weight: "24 kg",
        abilities: "Absorber Electricidad"
    },
    "Flareon": {
        name: "Flareon",
        image: "images/Flareon.png",
        type: "Fuego",
        height: "0.9 m",
        weight: "25 kg",
        abilities: "Absorber Fuego"
    },
    "Espeon": {
        name: "Espeon",
        image: "images/Espeon.png",
        type: "Psíquico",
        height: "0.9 m",
        weight: "26.5 kg",
        abilities: "Sincronía"
    },
    "Umbreon": {
        name: "Umbreon",
        image: "images/Umbreon.png",
        type: "Siniestro",
        height: "1.0 m",
        weight: "27 kg",
        abilities: "Sincronía"
    },
    "Leafeon": {
        name: "Leafeon",
        image: "images/Leafeon.png",
        type: "Planta",
        height: "1.0 m",
        weight: "25.5 kg",
        abilities: "Clorofila"
    },
    "Glaceon": {
        name: "Glaceon",
        image: "images/Glaceon.png",
        type: "Hielo",
        height: "0.8 m",
        weight: "25.9 kg",
        abilities: "Hielo Interno"
    },
    "Sylveon": {
        name: "Sylveon",
        image: "images/Sylveon.png",
        type: "Hada",
        height: "1.0 m",
        weight: "23.5 kg",
        abilities: "Sintético"
    },
    
    "Porygon": {
        name: "Porygon",
        image: "images/Porygon.png",
        type: "Normal",
        height: "0.6 m",
        weight: "32.5 kg",
        abilities: "Software de Mejora"
    },
    "Omanyte": {
        name: "Omanyte",
        image: "images/Omanyte.png",
        type: "Roca/Agua",
        height: "0.4 m",
        weight: "7.5 kg",
        abilities: "Lodo"
    },
    "Omastar": {
        name: "Omastar",
        image: "images/Omastar.png",
        type: "Roca/Agua",
        height: "1.0 m",
        weight: "35 kg",
        abilities: "Lodo"
    },
    "Kabuto": {
        name: "Kabuto",
        image: "images/Kabuto.png",
        type: "Roca/Agua",
        height: "0.5 m",
        weight: "11.5 kg",
        abilities: "Absorción"
    },
    "Kabutops": {
        name: "Kabutops",
        image: "images/Kabutops.png",
        type: "Roca/Agua",
        height: "1.3 m",
        weight: "40.5 kg",
        abilities: "Absorción"
    },
    "Aerodactyl": {
        name: "Aerodactyl",
        image: "images/Aerodactyl.png",
        type: "Roca/Volador",
        height: "1.8 m",
        weight: "59 kg",
        abilities: "Presión"
    },
    "Snorlax": {
        name: "Snorlax",
        image: "images/Snorlax.png",
        type: "Normal",
        height: "2.1 m",
        weight: "460 kg",
        abilities: "Inmunidad"
    },
    "Articuno": {
        name: "Articuno",
        image: "images/Articuno.png",
        type: "Hielo/Volador",
        height: "1.7 m",
        weight: "55.4 kg",
        abilities: "Presión"
    },
    "Zapdos": {
        name: "Zapdos",
        image: "images/Zapdos.png",
        type: "Eléctrico/Volador",
        height: "1.6 m",
        weight: "52.6 kg",
        abilities: "Presión"
    },
    "Moltres": {
        name: "Moltres",
        image: "images/Moltres.png",
        type: "Fuego/Volador",
        height: "2.0 m",
        weight: "60.0 kg",
        abilities: "Presión"
    },
    "Dratini": {
        name: "Dratini",
        image: "images/Dratini.png",
        type: "Dragón",
        height: "1.8 m",
        weight: "3.3 kg",
        abilities: "Seda"
    },
    "Dragonair": {
        name: "Dragonair",
        image: "images/Dragonair.png",
        type: "Dragón",
        height: "4.0 m",
        weight: "16.5 kg",
        abilities: "Seda"
    },
    "Dragonite": {
        name: "Dragonite",
        image: "images/Dragonite.png",
        type: "Dragón/Volador",
        height: "2.2 m",
        weight: "210 kg",
        abilities: "Multiescamas"
    },
    "Mewtwo": {
        name: "Mewtwo",
        image: "images/Mewtwo.png",
        type: "Psíquico",
        height: "2.0 m",
        weight: "122 kg",
        abilities: "Sincronía"
    },
    "Mew": {
        name: "Mew",
        image: "images/Mew.png",
        type: "Psíquico",
        height: "0.4 m",
        weight: "4 kg",
        abilities: "Sincronía"
    }
};


// Función para cargar los datos del Pokémon seleccionado
function loadPokemonDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonName = urlParams.get('pokemon');
    
    if (pokemonName && pokemones[pokemonName]) {
        const pokemon = pokemones[pokemonName];

        // Mostrar los datos del Pokémon en la página
        document.getElementById('pokemon-name').textContent = pokemon.name;
        document.getElementById('pokemon-name-data').textContent = pokemon.name;
        document.getElementById('pokemon-type').textContent = pokemon.type;
        document.getElementById('pokemon-height').textContent = pokemon.height;
        document.getElementById('pokemon-weight').textContent = pokemon.weight;
        document.getElementById('pokemon-abilities').textContent = pokemon.abilities;
        document.getElementById('pokemon-img').src = pokemon.image;
    } else {
        document.getElementById('pokemon-name').textContent = "Pokémon no encontrado";
    }
}

// recarga la página
window.onload = loadPokemonDetails;
