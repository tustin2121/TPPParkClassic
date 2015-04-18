// gen3.1.js
// File for TPP FireRed events
// 

// Flameslash
addEvent(new Pokemon({
	name : "Flameslash",
	
	sprite: "img/pkmn/flamesplash.gif",
	x: -11, y: -9,
	animation: null,
	reflection: true,
	refl_adj_y: -17,
	
	dex : "img/pkdx/frdex_flameslash.png",
	sources : {
		"Pokedex Image by /u/bboyskullkid" : "http://www.reddit.com/r/twitchplayspokemon/comments/24ouwj/i_drew_flameslash_in_sprite_form_inspired_by_the/",
		"Sprite based on Flair by /u/RT-Pickred": "",
		"Animated by /u/carlotta4th": "",
	},
	
	OT: "Alice",
	gender: 2,
	gamename : "Sandslash",
	pokename : "Sandslash",
	nicknames : "Sandsplash, Flamesplash",
	level : 63,
	caught : "Bought from Magikarp Man",
	memo : "Ability: Flame Body, knew Flamethrower. Thought it was a Magikarp.",
	
	ribbons : [
		new HallOfFame_Ribbon("15d 2h 2m"),
	],
}).forOccasion("bloodysunday", {
	sprite: "img/pkmn/flamesplash.png",
	x: -1, y: -11,
	animation: "breathe",
}));

// DJ Slaking
addEvent(new Pokemon({
	name : "Stalinking",
	sprite: "img/pkmn/slaking.gif",
	x: 17, y: -35,
	animation : null,
	
	dex : "img/pkdx/frdex_slaking.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "Alice",
	gender: 1,
	gamename : "CCCDJCCCC5",
	pokename : "Slaking",
	nicknames : "DJ, DJ Stalinking",
	level : 66,
	ball : "great",
	memo : "Ability: Minus. Knows Fly.",
	
	ribbons : [
		new HallOfFame_Ribbon("15d 2h 2m"),
	],
}));

// Hyperbug
addEvent(new Pokemon({
	name : "Hyperbug",
	//sprite: "img/pkmn/hyperbug_ev.png",
	sprite: "img/pkmn/hyperbug_fast.gif",
	shadow: "img/pkmn/generic-shadow.png",
	x: 16, y: -25, z: 16,
	animation: "floating",
	
	dex : "img/pkdx/frdex_hyperbug.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "Alice",
	gender: 1,
	gamename : "AATUUUUNN",
	pokename : "Masquerain",
	nicknames : "Tuna, Beambug",
	level : 58,
	// caught : "Bought from Magikarp Man",
	memo : "Ability: Insomnia. Could use Hyper Beam its entire life.",
	
	ribbons : [
		new HallOfFame_Ribbon("15d 2h 2m"),
	],
}));

// Hyperbug
addEvent(new Pokemon({
	name : "Altareon",
	sprite: "img/pkmn/alteria.png",
	shadow: "img/pkmn/generic-shadow.png",
	x: 6, y: -22, z: 16,
	animation: "breathe",
	
	dex : "img/pkdx/frdex_altareon.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "Alice",
	gender: 2,
	gamename : "Altaria",
	pokename : "Altaria",
	nicknames : "Amberia",
	level : 54,
	// caught : "Bought from Magikarp Man",
	memo : 'Ability: Trace. Was our "Eevee" in FireRed.',
	
	ribbons : [
		new HallOfFame_Ribbon("15d 2h 2m"),
	],
}));

// Mew
addEvent(new Pokemon({
	name : "Marc",
	sprite: "img/pkmn/marc-mew.png",
	x: -29, y: 34, z: 32,
	
	dex : "img/pkdx/frdex_marc.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "Alice",
	gender: 0,
	gamename : "MARC",
	pokename : "Mew",
	nicknames : "Karl Marc, Mewgneto",
	level : 57,
	caught : "Traded for Nidoran&#x2642;",
	memo : "Ability: Magnet Pull.",
	
	ribbons : [
		new Traded_Ribbon("For Nidoran&#x2642; 9d 8h 14m"),
		new HallOfFame_Ribbon("15d 2h 2m"),
	],
}));

addEvent(new Pokemon({
	name : "Meow Zedong",
	sprite: "img/pkmn/meow_zedong.gif",
	x: -27, y: 35, z: 32,
	animation : null,
	adj_x : 4.5, adj_y : 1,
	
	dex : "img/pkdx/frdex_meow.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
		"Sprite is Flair by /u/RT-Pickred": "",
	},
	
	OT: "Alice",
	gender: 1,
	gamename : "ZDNNNG",
	pokename : "Skitty",
	nicknames : "Chairman Meow",
	level : 39,
	memo : "Ability: Magma Armor. Head of the Meowist Party.",
}));

addEvent(new Pokemon({
	name : "Swagsire",
	sprite: "img/pkmn/caveman_quagsire.png",
	x: -24, y: -31,
	
	dex : "img/pkdx/frdex_swagsire.png",
	sources : {
		"Pokedex Image by /u/Carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "Alice",
	gender: 1,
	gamename : "Quagsire",
	pokename : "Quagsire",
	nicknames : "Cavesire",
	level : 24,
	memo : "Ability: Intimidate. Knew Bone Club as a Wooper. Holds some Black Glasses (his Swag).",
}));

//
// Note: Trizagoon is attached to the Ice Cream Truck multi-event defined
// in the Gen 4.1 file. See there for his details.
//


addEvent(new Pokemon({
	name : "Hijinks",
	sprite: "img/pkmn/hijinks_umbrella.png",
	x: 25, y: 102,
	animation : null,
	
	dex : "img/pkdx/frdex_machop.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "Alice",
	gender: 1,
	gamename : "hnjkrs",
	pokename : "Machop",
	level : 12,
	nicknames: "Lazychop",
	memo : "Ability: Truant. First introduction to Randomized Kanto: our Machop starter has Truant.",
	
	ribbons : [
		new Starter_Ribbon(),
	],
}));


// Snorlax/Glalie
addEvent(new Pokemon({
	name : "Snowlax",
	sprite: "img/pkmn/galie_snorlax.png",
	x: -22, y: 3,
	animation: false,
	
	dex : "img/pkdx/b/Spr_3e_362.gif", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
		"Sprite by /u/addgro_ove" : "",
	},
	
	OT: "Alice",
	gender: 2,
	gamename : "Glalie",
	pokename : "Glalie",
	level : 30,
	nicknames: "Glalax",
	ball: "great",
	caught : "",
	memo : "The Snorlax on Route 12 was a Glalie in disguise",
}));

addEvent(new Pokemon({
	name : "Hitmonpluff",
	sprite: "img/pkmn/hitmonpuff.png",
	x: 21, y: 27,
	
	dex : "img/pkdx/frdex_hitmonpluff.png",
	sources : {
		"Pokedex Image by /u/boxofkangaroos" : "http://www.reddit.com/r/twitchplayspokemon/comments/23h0qp/",
	},
	
	OT: "Alice",
	gender: 2,
	gamename : "Jumpluff ",
	pokename : "Jumpluff ",
	level : 25,
	memo : "Received from the Fighting Dojo instead of Hitmonchan.",
}));



//POKE DUDE!! (aka, Primo)
addEvent(new Person({
	name : "PokeDude",
	spritesheet : "img/trainers/pokedude.png",
	x: -22, y: 9,
	
	activeZone: {
		left: -27, right: -20,
		top: 4, bottom: 13,
	},
	
	behavior: behavior.meander,
	behavArg : {
		"left" : -27, "top" : 4,
		"right": -20, "bottom" : 13,
	},
	
	dialog : [
		"Remember, Trainers, a good deed a day brings happiness to stay!",
		"Remember, Trainers, a good deed a day brings happiness to stay!", //2x as likely to appear
		"Come on, let me here you! HELLO, TRAINERS! It's me, the POK&eacute; DUDE!",
		"If a POK&eacute;MON develops a status problem, heal it right away!",
		"Keep your eyes glued to the super<br/>POK&eacute; DUDE SHOW!",
		"If your first POK&eacute; BALL fails to catch the POK&eacute;MON, don't give up! Keep throwing POK&eacute; BALLS... It's bound to work sometime!",
		"If you don't know how type matchups work, battles will be tough!",
		"For the COOL-type POK&eacute; DUDE, AWESOME-type kids like you match up perfectly!",
		"FOCUS PUNCH doesn't sound like anything a bird or fish POK&eacute;MON can learn. So, try using it on a POK&eacute;MON with arms that can throw punches!",
		"You've given yourself one-touch access to TEACHY TV! That kind of attention is a little embarrassing!",
	],
}));

//And some Randomized Pokemon to prove Poke Dude wrong on that Focus Punch point
addEvent(new Event({
	name : "Punching Taillow",
	sprite : "img/pkmn/taillow_punching.png",
	x: -28, y: 13,
	
	animation: "breathe",
	
	doClick : Person.fn.doClick,
	getPosition : Person.fn.getPosition,
	updateImage : function(){},
	
	dialog_assignment : "random",
	dialog : [
		"Wild TAILLOW used MEGA PUNCH!",
	],
}));

addEvent(new Event({
	name : "Kicking Diglett",
	sprite : "img/pkmn/diglett.gif",
	x: -30, y: 16,
	
	doClick : Person.fn.doClick,
	getPosition : Person.fn.getPosition,
	updateImage : function(){},
	
	dialog_assignment : "random",
	dialog : [
		"Wild DIGLETT used HIGH JUMP KICK!",
	],
}));


addEvent(new Pokemon({
	name: "Pikachu",
	sprite: "img/pkmn/shiny-pikachu.gif",
	x: -36, y: -9,
	
	dex: "img/pkdx/b/Spr_3f_025_s.png", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "--",
	gamename: "--",
	pokename: "Pikachu",
	caught: "Encountered by Alice.",
	level: "???",
	memo: "TPP's second random shiny, killed in battle.",
}));


addEvent(new MultiEvent({
	name: "Master Wingull and Trainer",
	sprite: "img/pkmn/master_wingull.gif",
	x: -33, y: 32,
}).addSubEvent("19,0,0,25,1,45,12,49,21,45,47,12,40,0",new Pokemon({
	name: "Wingull",
	
	animation: null,
	
	dex: "img/pkdx/b/Spr_3e_278.gif", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "Guitarist",
	gamename: "--",
	pokename: "Wingull",
	caught: "Encountered by Alice.",
	level: "???",
	memo: "Master Ball thrown at another trainer's pokemon.",
	
	ribbons : [
		new Master_Ribbon(),
	],
})).addSubEvent("33,45,48,66", new Person({
	name: "Guitarist",
	behavior: null,
	dialog: [
		"Don't be a thief!"
	],
	
	updateImage : function(){},
	getPosition : function(){
		var o = this.parent.domElement.position();
		// o.left += 33;
		// o.top += 50;
		return o;
	},
}))
);


// And finally, Alice!
addEvent(new Trainer({
	name : "A  ", //spaces to differentiate from the OTHER "A"
	spritesheet : "img/trainers/alice.png",
	x: 22, y: -39,
	frame_width : 20,
	
	dex : "img/pkdx/trainer_alice.png",
	sources : {
		"Alice Sprite by /u/KingdomXathers":"http://www.reddit.com/r/twitchplayspokemon/comments/23tl7o/made_a_sprite_for_aalice_this_is_more_of_a_wip/", 
		"Amberzard Icon is Flair by /u/RT-Pickred": "",
		"Fossil Badge by /u/KingdomXathers" : "http://www.reddit.com/r/twitchplayspokemon/comments/23qqwb/rocktype_blaines_badge_the_fossil_badge_name/",
		"Snowflake Badge by /u/tpphypemachine" : "http://www.reddit.com/r/twitchplayspokemon/comments/23lsw6/i_adjusted_the_snowflake_badge/",
		"Harmony Badge by /u/KingdomXathers" : "http://www.reddit.com/r/twitchplayspokemon/comments/23iywq/sabrinas_harmony_badge/",
		"Other Badges by /u/Booster137" : "http://www.reddit.com/r/twitchplayspokemon/comments/2318l8/i_decided_to_try_and_make_custom_badges_to_fit/",
	},
	
	idnum : "56171",
	nickname : "Alice",
	playtime: "15d 2h 2m",
	pokedex : "56 own/303 seen",
	releasecount : 1,
	catchcount : 0,
	e4attempts : 8,
	blackouts : "89+",
	
	personality: "Alice is more of a researcher than a pokemon trainer. The voices coming to her simply gave her an excuse to go adventuring through the land of randomized Kanto, taking notes all the way. The name Alice came from <em>Alice in Wonderland</em>, since Randomized Kanto was pretty much that.",
	notable: "",
	ribbons: [
		new Record_Ribbon("Shortest E4 Run"),
	],
	
	icons : [
		new Icon("teachy_tv.png", "We spent a whole hour or two in democracy watching <b>Teachy TV</b>, where we met Pokedude, learned how to catch pokemon by retrieving balls from the Ball Pokcet, and found out he is a COOL-type dude!"),
		new Icon("dome_fossil.png", "While Red consulted the Helix Fossil, Alice, the antithesis of Red in many ways, picked up the <b>Dome Fossil</b>. Democracy was a big part of FireRed."),
		new Icon("poke_doll.png", "We picked up a pokedoll during the Safari Zone Grand Prix. The doll featured in some art."),
		new Icon("amber_charizard.png", "Due to the randomization, <b>Old Amber</b> was revived into a <b>Charizard!</b>"),
		new Icon("potato.png", 'POTATO! To help us (or punish us) while facing Mr. Giovanni\'s Wild Ride, the streamer implemented Chat-To-Speech. "This is madness. No, this. Is. Potato!"'),
		// null,// "img/icn/slowpoke_tail.png",
	],
	
	badges_info : {
		img: "img/icn/badges_firered.png",
		frame_width: 16,
		frame_height: 16,
	},
	badges : [
		new Badge({ name: "Cocoon Badge", leader: "Brock", type: "Bug" }),
		new Badge({ name: "Chemical Badge", leader: "Misty", type: "Poison" }),
		new Badge({ name: "Shale Badge", leader: "Lt. Surge", type: "Ground" }),
		new Badge({ name: "Snowflake Badge", leader: "Erika", type: "Ice" }),
		new Badge({ name: "Wind Badge", leader: "Koga", type: "Flying" }),
		new Badge({ name: "Harmony Badge", leader: "Sabrina", type: "Normal" }),
		new Badge({ name: "Fossil Badge", leader: "Blaine", type: "Rock" }),
		new Badge({ name: "Impact Badge", leader: "Giovanni", type: "Fighing" }),
	],
	
	behavior: behavior.meander,
	behavArg : {
		"left" : 21, "top" : -40,
		"right": 26, "bottom": -36,
		avoidEvent: "Shellock",
	},
}));

// Shellock Holmes
addEvent(new MovingPokemon({
	name : "Shellock",
	spritesheet: "img/pkmn/shellock_blastoise.png",
	x: 24, y: -38,
	frame_width : 29,
	frame_height: 27,
	
	dex: "img/pkdx/frdex_shellock.png", //Bulbapedia
	sources : {
		"Pokedex Image by /u/Sorceress_Feraly" : "http://www.reddit.com/r/twitchplayspokemon/comments/24j8p0/my_sprites_of_our_firered_team/",
		"Sprite is Flair by /u/RT-Pickred": "",
		"Animated by /u/carlotta4th": "",
	},
	
	OT: "Alice",
	gender: 1,
	gamename : "TTABCIJIJD",
	pokename : "Blastoise",
	nicknames : "Full Name: Shellock Holmes",
	level : 58,
	caught : "Caught from Route Heaven",
	memo : "Ability: Vital Spirit. Used Odor Sleuth a lot to identify pokemon. Also has an Octazooka.",
	
	ribbons : [
		new HallOfFame_Ribbon("15d 2h 2m"),
	],
	
	behavior: behavior.meander,
	behavArg : {
		"left" : 21, "top" : -40,
		"right": 26, "bottom": -36,
		avoidEvent: "A  ",
	},
}));

addEvent(new Building({
	name: "Crime Scene",
	sprite: "img/bld/crime_scene.png",
	x: 19, y: -41,
	warp_x: 0, warp_y: -16,
}));