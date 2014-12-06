// gen 5.1.js
// File for TPP Black 2
//

// showTimer("TPP Black 2 starts in<br/>", new Date(Date.UTC(2014, 07-1, 6, 0+4)));
// showGameClock("TPP Blaze Black 2 Game Clock<br/>", new Date(Date.UTC(2014, 07-1, 6, 0+4)));
// showGameClock("TPP Blaze Black 2 Game Clock<br/>", new Date(Date.UTC(1986, 07-1, 6, 0+4)));


// CLY!!
addEvent(new Trainer({
	skipme: true,
	name : "CLY",
	spritesheet : "img/trainers/napoleon.png",
	x: -15, y: 20,
	
	dex : "img/pkdx/trainer_cly.png",
	sources : {
		//"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/"
	},
	
	idnum : "06648",
	nickname : "Cly",
	altnicks : "",
	playtime: "19d 2h 17m",
	pokedex : "",
	releasecount : 0,
	catchcount : "",
	e4attempts : 67,
	blackouts : "",
	
	personality: "",
	notable: 
		"<br/>"+
		""+
		"",
	ribbons: [
		new Record_Ribbon("Highest average level on final team: 99.8333"),
		new Record_Ribbon("Lowest Release Count"),
	],
	
	icons : [
		// new Icon("", "forced evolutions? "),
	],
	
	badges_info : {
		img: "img/icn/badges_black2.png",
		frame_width: 16,
		frame_height: 16,
	},
	badges : [
		new Badge({ name: "Basic Badge", leader: "Lenora", type: "Grass" }),
		new Badge({ name: "Toxic Badge", leader: "Roxie", type: "Poison" }),
		new Badge({ name: "Insect Badge", leader: "Burgh", type: "Bug" }),
		new Badge({ name: "Bolt Badge", leader: "Elesa", type: "Electric" }),
		new Badge({ name: "Quake Badge", leader: "Clay", type: "Ground" }),
		new Badge({ name: "Jet Badge", leader: "Skyla", type: "Flying" }),
		new Badge({ name: "Legend Badge", leader: "Drayden", type: "Dragon" }),
		new Badge({ name: "Wave Badge", leader: "Marlon", type: "Water" }),
	],
	
	behavior: behavior.meander,
}));

