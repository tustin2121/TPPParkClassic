// gen 6.js
// File for TPP X
//


// TODO: Pokerus Ribbons?

// http://www.reddit.com/r/twitchplayspokemon/comments/2c1d3t/pokémon_x_flair_header_and_sidebar_suggestions/cjb1p9n
// http://www.reddit.com/r/twitchplayspokemon/comments/2c1d3t/pokémon_x_flair_header_and_sidebar_suggestions/cjbf2eb
// http://www.reddit.com/r/twitchplayspokemon/comments/2c1d3t/pokémon_x_flair_header_and_sidebar_suggestions/cjyfn4t

addEvent(new Pokemon({
	skipme: true,
	name : "Wesker",
	sprite: "img/pkmn/.png",
	x: -30, y: -10,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 1,
	gamename : "Chespin",
	pokename : "Chespin",
	nicknames : "",
	level : "",
	caught : "0d 0h 20m: Recieved as starter",
	memo: "",
	ball: "poke",
	
	ribbons : [
		new Starter_Ribbon(),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "99GP",
	sprite: "img/pkmn/.png",
	x: -30, y: -10,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 1,
	gamename : "99GP",
	pokename : "Scatterbug",
	nicknames : "",
	level : 4,
	caught: "0d 1h 15m: in Santalune Forest at Level 2",
	memo : "",
	ball: "poke",
	
	ribbons : [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Worms",
	sprite: "img/pkmn/.png",
	x: -30, y: -10,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 2,
	gamename : "W&nbsp;OMRSQ&nbsp;G6",
	pokename : "Beedrill",
	nicknames : "Beesus",
	level : 19,
	caught: "0d 0h 54m: in Route 2 at Level 4",
	memo : "",
	ball: "poke",
	
	ribbons : [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Dr. 0",
	sprite: "img/pkmn/dr0.png",
	x: -15, y: 15,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Sprite is flair by /u/GXRevolution" : "http://www.reddit.com/r/twitchplayspokemon/comments/2c1d3t/pokémon_x_flair_header_and_sidebar_suggestions/cjb1p9n",
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 2,
	gamename : "0,&nbsp;&nbsp;DR",
	pokename : "Pikachu",
	nicknames : "",
	level : 28,
	caught: "0d 1h 15m: in Santalune Forest at Level 3",
	memo : "Sent to PC by Lucario",
	ball: "poke",
	
	ribbons : [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Lady Helix",
	sprite: "img/pkmn/.png",
	x: -30, y: -10,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 2,
	gamename : "LADY HELIX",
	pokename : "Omanite",
	nicknames : "",
	level : 17,
	caught: "0d 2h 59m: Received in a trade from Dracyoshi",
	memo : "When she was deposited to the PC, she was holding the Sail Fossil. Lil'D never managed to revive that fossil.",
	ball: "poke",
	
	ribbons : [
		new Traded_Ribbon("For 99GP the Scatterbug"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Lloyd",
	sprite: "img/pkmn/.png",
	x: -30, y: -10,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 0,
	gamename : "0,&nbsp;&nbsp;DR",
	pokename : "Pikachu",
	nicknames : "",
	level : 15,
	caught: "0d 1h 38m: Received in a trade from Lloyd",
	memo : "",
	ball: "poke",
	
	ribbons : [
		new Traded_Ribbon("For a Pansage"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Lloyd",
	sprite: "img/pkmn/.png",
	x: -30, y: -10,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 0,
	gamename : "0,&nbsp;&nbsp;DR",
	pokename : "Pikachu",
	nicknames : "",
	level : 15,
	caught: "0d 1h 38m: Received in a trade from Lloyd",
	memo : "",
	ball: "net",
	
	ribbons : [
		new Traded_Ribbon("For a Pansage"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Demon Butterfly",
	sprite: "img/pkmn/.png",
	x: -15, y: 20,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 2,
	gamename : "Vivillon",
	pokename : "Vivillon",
	nicknames : "",
	
	// Daycared at Lv 35, time 2d 5h 9m. Vivillon leveling rate is Medium Fast
	level : function() {
		// left at 2d 5h 9m -- 7/29/2014 9:10:19 UTC
		var timeSince = (new Date().getTime()) - (new Date(2014, 7, 29, 9, 10).getTime());
		//convert timeSince to seconds, and divide by estimated movement
		var expSince = (timeSince / 1000) * 0.1667; //1 step per 6 seconds, with battling accounting for a lot
		
		// Medium Fast equation: EXP = n^3
		// Considerably easier to solve for N, but for consistancy, stick with Gastly's method
		// Solve for a level and loop until we don't have enough exp to be that level
		
		// Start at level 35, since thats what she was when deposited and we don't have a rom to check what she's at endgame.
		for (var i = 35; i < 256; i++) { //limit to level 255
			var exp = Math.pow(i, 3);
			if (expSince <= exp) return i-1; //Found a level!
		}
		return "255+";
	},
	caught: "0d 22h 22m: A fateful encounter",
	memo : "A Nintendo WiFi givaway at the time of the run. PC ate Whisker and Lady Helix when d tried to get recieve it from the postman.",
	ball: "cherish",
	
	ribbons : [
		new Daycare_Ribbon("Forevermore"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Rotom",
	sprite: "img/pkmn/master-geodude.png",
	x: -30, y: -10,
	
	dex : "img/pkdx/b/Spr_4p_074.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 0,
	gamename : "!6696rsxtv8o.",
	pokename : "Rotom",
	nicknames : "",
	level : 38,
	caught: "3d 0h 3m: in the lost hotel",
	memo : "",
	ball: "master",
	
	ribbons : [
		new Master_Ribbon(),
	],
}));



addEvent(new Pokemon({
	skipme: true,
	name : "Tiger",
	sprite: "img/pkmn/.png",
	x: -30, y: -10,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 1,
	gamename : "!taj11yygaaa",
	pokename : "Charizard",
	nicknames : "Italy",
	level : 81,
	caught: "0d 5h 13m: Received from Sycamore",
	memo : "Was the mon most consistently capable of mega evolving.",
	ball: "poke",
	
	ribbons : [
		new HallOfFame_Ribbon("5d 5h 9m"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Smogonsword",
	sprite: "img/pkmn/.png",
	x: -15, y: 20,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 2,
	gamename : "Oi!oiswhhve",
	pokename : "Aigislash",
	nicknames : "Oi! Oi! Rica Suave",
	level : 92,
	caught: "0d 2h 30m: Received in a trade from Dracyoshi",
	memo : "",
	ball: "", // ???
	
	ribbons : [
		new Traded_Ribbon("For a Pikachu"),
		new HallOfFame_Ribbon("5d 5h 9m"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Sailor Moondoge",
	sprite: "img/pkmn/.png",
	x: -16, y: 20,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 2,
	gamename : "QQYyy25o6wf7",
	pokename : "Absol",
	nicknames : "",
	level : 70,
	caught: "1d 2h 49m: In Route 8 at level 15",
	memo : "Moondoge came to warn us of a PC shuffle; unfortunately the warning came ever so slightly too late to be effective.",
	ball: "net",
	
	ribbons : [
		new HallOfFame_Ribbon("5d 5h 9m"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Mucha Lucha",
	sprite: "img/pkmn/.png",
	x: -16, y: 20,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 2,
	gamename : "Hawlucha",
	pokename : "Hawlucha",
	nicknames : "Phoenix",
	level : 72,
	caught: "", // either '1d 12h 1m' or '1d 11h 54m'; tho sisters are nigh indistinguishable
	memo : "One of two Hawlucha caught immediately after trying to make room in the party for a gift Lapras. Another attempt to make room in the party was needed soon after.",
	ball: "",
	
	ribbons : [
		new HallOfFame_Ribbon("5d 5h 9m"),
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Zapras",
	sprite: "img/pkmn/.png",
	x: -3, y: -2, // near Cruella, powering the PC.
	adj_flip: true,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 2,
	gamename : "!&nbsp;♀o?04+6eAd",
	pokename : "Lapras",
	nicknames : "Odette",
	level : 68,
	caught: "2d 6h 10m: Recieved at level 30",
	memo : "<p>d needed a surfer. There were Eevee in the nearby routes. d made the smart choice, and went for the Lapras immediately .</p><p>Held a Zap Plate for most of its tenure.</p>",
	ball: "poke",
	
	ribbons : [
		new HallOfFame_Ribbon("5d 5h 9m"),
	],
}).forOccasion("bloodysunday", {
	x: -29, y: -5,
	adj_flip: true,
}));

addEvent(new Pokemon({
	skipme: true,
	name : "Deer Lord",
	sprite: "img/pkmn/.png",
	x: -16, y: 20,
	
	dex : "img/pkdx/b/.png",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "d",
	gender: 0,
	gamename : "Xerneas",
	pokename : "Xerneas",
	nicknames : "",
	level : 80,
	caught: "3d 22h 6m: in the fifth battle",
	memo : "",
	ball: "dusk",
	
	ribbons : [
		new HallOfFame_Ribbon("5d 5h 9m"),
	],
}));

//TODO: Add Lil'D, but also the Laktu Cameraman following behind him.