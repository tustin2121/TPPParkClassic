// gen5.js
// File for TPP Black events
//

//showTimer
// showGameClock("TPP Black Game Clock<br/>", new Date(Date.UTC(2014, 06-1, 15, 0+4)));



//Dammit, we've got 5 pokemon for the park ALREADY -_-

//
// Note: Tepig is attached to the Released Starter Campfire multi-event 
// defined in the "other" events file. See there for his event definition.
//

addEvent(new Pokemon({
	name : "Cat",
	sprite: "img/pkmn/cat.png",
	x: -2, y: 36,
	adj_flip: true, adj_x: 6,
	
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
	x: -3, y: 36,
	adj_flip: true, adj_x: 2,
	
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
	x: -4, y: 36,
	adj_flip: true, adj_x: -2,
	
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


// TODO: Bird Moses

addEvent(new Pokemon({
	name : "Lilly",
	sprite: "img/pkmn/lilly.png",
	x: 32, y: 28,
	
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
	x: 30, y: 28,
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


// TODO: The six hall of famers


// Jimmy!!
addEvent(new Trainer({
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
		new Record_Ribbon("Least evolved Hall of Fame team"),
	],
	
	icons : [
		// new Icon("contest_pass.png", "Where A failed, Napoleon succeeded: he participated, dressed formally in suit and tie, in several Contests. He didn't win any, however."),
	],
	
	badges_info : {
		img: "img/icn/badges_black.png",
		frame_width: 16,
		frame_height: 16,
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
	
	
	// doClick : function(){
	// 	Person.fn.doClick.call(this);
	// 	this.openTrainerCard();
	// },
}));