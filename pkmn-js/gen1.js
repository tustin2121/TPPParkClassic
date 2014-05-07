// gen1.js
// File for TPP Red events
// 

// Bird Jesus and his Church of Helix
addEvent(new Building({
	name: "The Church of Helix",
	sprite: "img/bld/church.png",
	x : 8, y : 8,
	warp_x: 32, warp_y: 67,
}));

addEvent(new Pokemon({
	name: "Bird Jesus",
	animation: "floating",
	sprite: "img/pkmn/bird-jesus.png",
	shadow : "img/pkmn/bird-jesus-shadow.png",
	x : 10, y : 8, z: 20,
	
	dex : "img/pkdx/tpp1_birdjesus.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename: "aaabaaaajss",
	pokename: "Pidgeot",
	level: 69,
	nicknames : "Abba Jesus",
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
	],
}));

//
// Note: Lord Helix is attached to the Battle of Mt Silver multi-event defined
// in the Gen 2 file. See there for his event definition.
//

// ATV
addEvent(new Pokemon({
	name : "ATV",
	
	dex : "img/pkdx/tpp2_atv.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AATTVVV",
	pokename : "Venomoth",
	level : 39,
	nicknames : "All-Terrain Venomoth<br/>The Dragonslayer",
	memo : "Once took down Lance's Dragonite singlehandedly.",
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
	],	
}));

addEvent(new MultiEvent({
	name : "B-Ball Game",
	sprite: "img/pkmn/bballgame.gif",
	x : 0, y : 38, z:-8,
}).addSubEvent("2,24,32,52", new Pokemon({
	name : "King Fonz",
	
	dex : "img/pkdx/tpp3_fonz.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AAAAAAAAAA",
	pokename : "Nidoking",
	level : 54,
	memo : "Survived and entered party on Bloody Sunday",
	caught : "Caught in Safari Zone",
	ball : "safari",
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
	],	
})).addSubEvent("61,20,91,48", new Pokemon({
	name : "Air",
	
	dex : "img/pkdx/tpp6_air.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AIIIIIIRRR",
	pokename : "Lapras",
	nicknames : "Air Jordan<br/>Fresh Prince of Shell Air",
	level : 31,
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
	],	
})));

//The Fonz
addEvent();

//Air
addEvent();

// Zapdos
addEvent(new Pokemon({
	name : "Battery Jesus",
	
	dex : "img/pkdx/tpp5_zapdos.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AA-j",
	pokename : "Zapdos",
	nicknames : "Double-A Jay, Archangel of Justice, John the Zaptist",
	level : 81,
	caught : "With Masterball 10d 7h 49m",
	ball : "master",
	memo : "Attempts at retreival caused Bloody Sunday. Invaluable at Elite Four.",
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
	],	
}));

// Red's Abby
addEvent(new Pokemon({
	name: "Abby",
	sprite: "img/pkmn/abby-gen1.png",
	x : -14, y : -34,
	
	dex : "img/pkdx/tpp9_abby.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/78067393358/ive-updated-omanytes-sprite-to-omastar-i-also",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "ABBBBBBK",
	pokename : "Charmelion",
	level : 34,
	ribbons : [
		new Starter_Ribbon(),
		new Released_Ribbon("4d 8h 53m"),
	],
}));

// DigRat
addEvent(new Pokemon({
	name: "DigRat",
	sprite: "img/pkmn/digrat.png",
	x: 36, y: -1,
	
	dex : "img/pkdx/tpp11_digrat.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/78067393358/ive-updated-omanytes-sprite-to-omastar-i-also",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AAJST(???",
	pokename : "Raticate",
	nicknames : "BigDig",
	level : 20,
	memo : "A trouble maker, known for digging us out of places we wanted to be.",
	
	ribbons : [
		new Released_Ribbon("10d 16h 2m"),
		new BloodySunday_Ribbon(),
	],
}));

// DUX!
addEvent(new Pokemon({
	name : "DUX",
	sprite: "img/pkmn/dux.png",
	x: -33, y: -11,
	
	dex : "img/pkdx/tpp10_dux.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/78067393358/ive-updated-omanytes-sprite-to-omastar-i-also",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "DUX",
	pokename : "Farfetch'd",
	level : 31,
	nicknames : '"The Slayer of Trees"',
	memo : "Known for its mighty Cut ability!",
	
	ribbons : [
		new Traded_Ribbon("For Spearow 2d 6h 59m"),
		new Released_Ribbon("10d 13h 13m"),
		new BloodySunday_Ribbon(),
	],
}));

// Jay Leno!
addEvent(new Pokemon({
	name : "Jay Leno",
	sprite: "img/pkmn/jayleno.png",
	x: 4, y: -28,
	
	dex : "img/pkdx/jayleno.gif",
	dexsource : "Some tumblr somewhere, could not find! :(",
	sources : {
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "JLVWNNOOOO",
	pokename : "Ratatta",
	level : 13,
	memo : "The very first pokemon ever released.",
	
	ribbons : [
		new Released_Ribbon("4d 8h 50m"),
		new Record_Ribbon("First Pokemon TPP Released"),
	],
}));

// Original Cabbage
addEvent(new Pokemon({
	name : "Cabbage",
	sprite: "img/pkmn/cabbage_grey.png",
	x: 8, y: -26,
	
	// dex : "img/pkdx/jayleno.gif",
	sources : {
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "x(araggbaj",
	pokename : "Gloom",
	level : 31,
	nicknames : "xCabbage<br/>Seed of Hope",
	
	ribbons : [
		new Released_Ribbon("10d 12h 43m"),
		new BloodySunday_Ribbon(),
	],
}));

// The Keeper, keeping the Pokemon Center
addEvent(new Building({
	name: "Pokemon Center",
	sprite: "img/bld/pokecenter.png",
	x : -17, y : 29,
	warp_x: 28, warp_y: 58,
}));

addEvent(new Pokemon({
	name : "The Keeper",
	sprite: "img/pkmn/thekeeper.png",
	x: -17, y: 30,
	
	// dex : "img/pkdx/jayleno.gif",
	sources : {
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "Drowzee",
	pokename : "Drowzee",
	level : 30,
	memo : "Keeper of the PC",
}));

// Rick Gastly (no h...)
addEvent(new Pokemon({
	name : "Rick Gastly",
	sprite: "img/pkmn/rickghastly.gif",
	x: 11, y: -34,
	animation: false,
	
	//dex : "img/pkdx/tpp10_dux.gif",
	//dexsource : "http://hamigakimomo.tumblr.com/post/78067393358/ive-updated-omanytes-sprite-to-omastar-i-also",
	
	OT: "Red",
	gamename : "Gastly",
	pokename : "Gastly",
	level : function() {
		//Gastly left at 11d 1h 30m -- Feb 24th 03:11 UTC
		var timeSince = (new Date().getTime()) - (new Date(2014, 2, 24, 3, 11).getTime());
		//convert timeSince to seconds, and divide by estimated movement
		var expSince = (timeSince / 1000) * 0.1; //1 step per 10 seconds, with battling accounting for a lot
		
		// Medium Slow equation: EXP = (6/5)*n^3 - 15n^2 + 100n - 140;
		// Solve for n?? o_O   https://www.wolframalpha.com/input/?i=x+%3D+%286%2F5%29*y^3+-+15y^2+%2B+100y+-+140
		// Instead, let's just solve for a level and loop until we don't have enough exp to be that level
		
		// Start at level 50, since we know he was that if you pick him up in the save file.
		for (var i = 50; i < 256; i++) { //limit to level 255
			var exp = (6/5)*Math.pow(i, 3) - 15*i*i + 100*i - 140;
			if (expSince <= exp) return i-1; //Found a level!
		}
		return "255+";
	},
	memo : "Left at the Kanto Daycare at Level 23. Still there, haunting it.",
	
	ribbons : [
		new Daycare_Ribbon("Forevermore"),
	],
}));

// C3KO
addEvent(new Pokemon({
	name : "C3KO",
	sprite: "img/pkmn/c3ko.png",
	x: 25, y: 26,
	
	// dex : "img/pkdx/tpp10_dux.gif",
	// dexsource : "http://hamigakimomo.tumblr.com/post/78067393358/ive-updated-omanytes-sprite-to-omastar-i-also",
	sources : {
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
	
	OT: "Red",
	gamename : "CCC",
	pokename : "Hitmonlee",
	nicknames : "Triple C",
	level : 30,
	caught: "Fighting Dojo 6d 22h 4m",
	memo : "Never saw the light of day.",
	
	ribbons : [
		new Released_Ribbon("6d 22h 40m"),
		new Record_Ribbon("Fastest Release: 36m"),
	],
}));



// And finally, Red himself, stuck behind the burgler
addEvent(new Person({
	name : "Burglur",
	spritesheet : "img/trainers/burgler.png",
	x: -10, y: -36,
	
	behavior: behavior.look,
	
	dialog : [
		"I wonder where my partner went.",
	],
}));

addEvent(new Trainer({
	name : "Red",
	spritesheet : "img/trainers/red.png",
	x: -10, y: -37,
	
	behavior: behavior.meander,
	behavArg : {
		"left" : -10, "top" : -38,
		"right": -10, "bottom": -37,
	},
}));



// And the clingy/revive girl and her pokemart
addEvent(new Building({
	name: "Pokemart",
	sprite: "img/bld/mart.png",
	x : -5, y : 21,
	warp_x: 16, warp_y: 46,
}));

addEvent(new Person({
	name : "Clingy Girl",
	spritesheet : "img/trainers/clingy-girl.png",
	x: -5, y: 22,
	
	behavior: behavior.meander,
	behavArg : {
		"left" : -9, "top" : 22,
		"right": 0, "bottom" : 23,
	},
	
	dialog : [
		"REVIVE is costly, but it revives fainted POK&eacute;MON!",
	],
}));
