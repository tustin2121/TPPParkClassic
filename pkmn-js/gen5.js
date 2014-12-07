// gen5.js
// File for TPP Black events
//

//showTimer
// showGameClock("TPP Black Game Clock<br/>", new Date(Date.UTC(2014, 06-1, 15, 0+4)));



//
// Note: Tepig is attached to the Released Starter Campfire multi-event 
// defined in the "other" events file. See there for his event definition.
//


addEvent(new Pokemon({
	name : "Cat",
	sprite: "img/pkmn/cat.png",
	x: -4, y: 36,
	adj_flip: true, adj_x: -2,
	
	dex : "img/pkdx/b/Spr_5b_509.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 2,
	gamename : "B66_4ssidb",
	pokename : "Purrloin",
	nicknames : "",
	level : 12,
	// memo : "",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new Released_Ribbon("1d 14h 16m"),
		new MondayMassacre_Ribbon(),
	],
}));

addEvent(new Pokemon({
	name : "Puppy",
	sprite: "img/pkmn/puppy.png",
	x: -2, y: 36,
	adj_flip: true, adj_x: 6,
	
	dex : "img/pkdx/b/Spr_5b_506.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "Lillipup",
	pokename : "Lillipup",
	nicknames : "",
	level : 16,
	// memo : "",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new Released_Ribbon("1d 13h 38m"),
		new MondayMassacre_Ribbon(),
	],
}));

addEvent(new Pokemon({
	name : "BBQ",
	sprite: "img/pkmn/bbq.png",
	x: -3, y: 36,
	adj_flip: true, adj_x: 2,
	
	dex : "img/pkdx/b/Spr_5b_511.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "mbbqUU FG",
	pokename : "Pansage",
	nicknames : "",
	level : 27,
	// memo : "",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new Released_Ribbon("1d 14h 2m"),
		new MondayMassacre_Ribbon(),
	],
}));

addEvent(new Pokemon({
	name : "Tympole",
	sprite: "img/pkmn/tympole.png",
	x: -5, y: 36,
	adj_flip: true, adj_x: -6,
	
	dex : "img/pkdx/b/Spr_5b_535.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "Tympole",
	pokename : "Tympole",
	nicknames : "",
	level : 14,
	memo : "Seen as one of the causes of the Monday Massacre: we were only trying to box the two Tympole...",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new Released_Ribbon("1d 14h 40m"),
		new MondayMassacre_Ribbon(),
	],
}));


addEvent(new Pokemon({
	name : "J VOON",
	sprite: "img/pkmn/cat.png",
	x: -4, y: 35,
	adj_x: 2, adj_y: 2,
	
	dex : "img/pkdx/b/Spr_5b_509.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 2,
	gamename : "J&nbsp;&nbsp;V00NPQN",
	pokename : "Purrloin",
	nicknames : "",
	level : 8,
	caught : "0d 1h 31m: in Route 2 at level 4",
	memo : "Was not murdered durring Murder Monday, but was deposited never to be retrieved while having to deal with her sister.",
	
	ribbons : [
	],
}).forOccasion("bloodysunday", {
	x: 9, y: -11,
	adj_flip: false,
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Bird Moses",
	sprite: "img/pkmn/.png",
	x: 26, y: 17,
	
	dex : "img/pkdx/.png",
	sources : {
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "Pidove",
	pokename : "Pidove",
	nicknames : "",
	level : 34,
	caught : "1d 16h 57m: In Pinwheel Forest at level 15",
	ball: "poke",
	memo : "Lead the party while traveling through the Route 4 desert and Desert Resort.",
	
	ribbons : [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "F-30",
	sprite: "img/pkmn/.png",
	x: -12, y: 20,
	
	dex : "img/pkdx/.png",
	sources : {
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "F3O3OO3OGO",
	pokename : "Pidove",
	nicknames : "",
	level : 44,
	caught : "1d 17h 3m: In Pinwheel Forest at level 15",
	ball: "premiere",
	memo : "",
	
	ribbons : [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Mistress Vullaby",
	sprite: "img/pkmn/.png",
	x: -13, y: 20,
	
	dex : "img/pkdx/b/Spr_5b_629.png",
	sources : {
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 2,
	gamename : "GMHM",
	pokename : "Vullaby",
	nicknames : "",
	level : 36,
	caught : "9d 3h 0m: Route 10",
	ball: "master",
	memo : "Jimmy obtained the Master Ball a mere 1h 28m before catching this vullaby.",
	
	ribbons : [
		new Master_Ribbon(),
	],
}));


addEvent(new Pokemon({
	name : "Lilly",
	sprite: "img/pkmn/lilly.png",
	x: 35, y: 33,
	
	dex : "img/pkdx/bldex_lilly.png",
	sources : {
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/"
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 2,
	gamename : "Lillil",
	pokename : "Petilil",
	nicknames : "Princess Lilly",
	level : 41,
	caught : "Recieved in a trade: 1d 17h 37m",
	ball: "poke",
	memo : "Avid musical participant. Usually seen with red specs.",
	
	ribbons : [
		new Traded_Ribbon("For Cottonee 1d 17h 37m"),
		new Released_Ribbon("5d 6h 36m"),
	],
}));

addEvent(new Pokemon({
	name : "Lord Cover",
	sprite: "img/pkmn/cover.png",
	x: 33, y: 33,
	adj_flip: true,
	
	dex : "img/pkdx/bldex_cover.png",
	sources : {
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/"
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "Tirtouga",
	pokename : "Tirtouga",
	nicknames : "",
	level : 36,
	caught : "Revived from fossil: 3d 6h 18m",
	ball: "poke",
	memo : "Avid musical participant. Usually seen wearing a pink bow.",
	
	ribbons : [
		new Released_Ribbon("5d 6h 38m"),
	],
}));


addEvent(new Pokemon({
	name : "0000M",
	sprite: "img/pkmn/0000m.png",
	x: -18, y: -30,
	adj_flip: true,
	
	dex : "img/pkdx/b/Spr_5b_643.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: null,
	gamename : "0000M",
	pokename : "Reshiram",
	nicknames : "",
	level : 50,
	caught : "during the 9th battle: 12d 18h 0m",
	ball: "dusk",
	memo : "Was excited to join Jimmy's fight against N, but the Truth that Jimmy fought for required her to stay at the sidelines.",
	
	ribbons : [
	],
}));


addEvent(new Pokemon({
	skipme: true,
	name : "Nonon Tympazure",
	sprite: "img/pkmn/tympole.png",
	x: 5, y: -34,
	adj_flip: true,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 2,
	gamename : "NONNQWMMSO",
	pokename : "Tympole",
	nicknames : "Anonymous",
	level : 64,
	caught : "1d 10h 1m: in Pinwheel Forest at level 12",
	ball: "great",
	memo : "The sole survivor of two party-destroying events. ",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new HallOfFame_Ribbon("12d 18h 21m"),
	],
}).forOccasion("bloodysunday", {
	x: 9, y: -10,
	adj_flip: false,
}));

addEvent(new Pokemon({
	skipme: true,
	name : "fives",
	sprite: "img/pkmn/.png",
	x: -13, y: 20,
	adj_flip: true,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 2,
	gamename : "5",
	pokename : "Deerling",
	nicknames : "",
	level : 63,
	caught : "5d 12h 48m: in Route 7 at level 26",
	ball: "poke",
	memo : "Her high-risk battle style allows her to deal massive damage to the strongest of foes, but she is usually KO'd before she can finish the job.",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new HallOfFame_Ribbon("12d 18h 21m"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Drew",
	sprite: "img/pkmn/.png",
	x: -14, y: 20,
	adj_flip: true,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "Dru",
	pokename : "Druddigon",
	nicknames : "Dr. Dru",
	level : 68,
	caught : "7d 5h 59m: in Dragonspiral Tower at level 31",
	ball: "great",
	memo : "",
	
	ribbons : [
		new HallOfFame_Ribbon("12d 18h 21m"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Bird Matt",
	sprite: "img/pkmn/.png",
	x: -15, y: 20,
	adj_flip: true,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "QQQQ",
	pokename : "Tranquill",
	nicknames : "Quadquill, 4Q",
	level : 56,
	caught : "", // 7.8/10 too many Tranquills - I can't tell from the live updater which capture was this one.
	ball: "poke",
	memo : "Incredibly lucky. His ability gave him a higher crit ratio, and he had a nack for dodging Rock moves at just the right time.",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new HallOfFame_Ribbon("12d 18h 21m"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Sparky",
	sprite: "img/pkmn/.png",
	x: -17, y: 20,
	adj_flip: true,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "&nbsp;&nbsp;&nbsp;&nbsp;&quot;☀☀☀",
	pokename : "Joltik",
	nicknames : "Peter Sparker",
	level : 69,
	caught : "5d 7h 54m: in Mistralton City at Lv 24", 
	ball: "poke",
	memo : "",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new HallOfFame_Ribbon("12d 18h 21m"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Mega Henry",
	sprite: "img/pkmn/.png",
	x: -15, y: 20,
	adj_flip: true,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Sprite from Bulbapedia" : "",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : "aMH",
	pokename : "Zebstrika",
	nicknames : "Zecoro, Z33kbra",
	level : 75,
	caught : "5d 8h 0m: in Route 7 at Lv 29", 
	ball: "poke",
	memo : "",
	
	ribbons : [
		new Pokerus_Ribbon(),
		new HallOfFame_Ribbon("12d 18h 21m"),
	],
}));


// Jimmy!!
addEvent(new Trainer({
	skipme: true,
	name : "GMYC&nbsp;&nbsp;",
	spritesheet : "img/trainers/napoleon.png",
	x: -15, y: 20,
	
	dex : "img/pkdx/trainer_jimmy.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/"
	},
	
	idnum : "12356",
	nickname : "Jimmy C.",
	altnicks : "Gimmick",
	playtime: "12d 18h 21m",
	pokedex : "39 own/135 seen",
	releasecount : 12,
	catchcount : 121,
	e4attempts : 62,
	blackouts : "164+",
	
	personality: "Jimmy is an avid fan of the voices, and initially far too willing to obey their commands at the expense of his Pokémon. Has been known to play video games professionally.",
	notable: 
		"Number of Pokémon evolved: 0<br/>"+
		"Fresh water bought: 53+"+
		"",
	ribbons: [
	],
	
	icons : [
		new Icon("xtransceiver.png", "Once Jimmy recieved the C-Gear, he couldn't stop playing with it. He continuously went to the Entralink until his C-Gear was disabled via divine intervention."),
	],
	
	badges_info : {
		img: "img/icn/badges_black.png",
		frame_width: 15,
		frame_height: 25,
	},
	badges : [
		new Badge({ name: "Trio Badge", leader: "Cress", type: "Water" }),
		new Badge({ name: "Basic Badge", leader: "Lenora", type: "Grass" }),
		new Badge({ name: "Insect Badge", leader: "Burgh", type: "Bug" }),
		new Badge({ name: "Bolt Badge", leader: "Elesa", type: "Electric" }),
		new Badge({ name: "Quake Badge", leader: "Clay", type: "Ground" }),
		new Badge({ name: "Jet Badge", leader: "Skyla", type: "Flying" }),
		new Badge({ name: "Freeze Badge", leader: "Brycen", type: "Ice" }),
		new Badge({ name: "Legend Badge", leader: "Drayden", type: "Dragon" }),
	],
	
	behavior: behavior.meander,
}));