// gen 6.1.js
// File for TPP ORAS
//

(function(){
	var date = new Date(Date.UTC(2014, 11-1, 22, 0+3));
	if (date.getTime() > new Date().getTime()) {
		showTimer("TPP ORAS starts in<br/>", date);
	} else {
		showGameClock("TPP ORAS Game Clock<br/>", date);
	}
})();

// http://www.reddit.com/r/twitchplayspokemon/comments/2nza0c/tpp_sprite_complication_thread/


addEvent(new Trainer({
	skipme: true,
	name : "!12rtyhaszs",
	spritesheet : "img/trainers/.png",
	x: -15, y: 18,
	
	dex : "img/pkdx/.png",
	sources : {
	},
	
	idnum : "37614",
	nickname : "Artemis Haze XII",
	altnicks : "Arty",
	playtime: "10d 0h 0m",
	pokedex : "",
	releasecount : 8,
	catchcount : "",
	e4attempts : "20 (1st); 27 (rematch)",
	blackouts : "89+",
	
	personality: "",
	notable: 
		"Peak nap rate: 3.5 naps per minute<br/>"+
		"",
	ribbons: [
	],
	
	icons : [
		new Icon("contest_pass.png", "Not only did Arty enter contests, he even managed to win a few."),
		new Icon("dowsing_machine.png", "The design of Arty's itemfinder makes him appear like his beloved bunnies. The cuteness is too much for many voices to bear."),
		new Icon("eon_flute.png", ""),
	],
	
	badges_info : {
		img: "img/icn/badges_emerald.png",
		frame_width: 16,
		frame_height: 16,
	},
	badges : [
		new Badge({ name: "Stone Badge", leader: "Roxanne", type: "Rock" }),
		new Badge({ name: "Knuckle Badge", leader: "Brawly", type: "Fighting" }),
		new Badge({ name: "Dynamo Badge", leader: "Wattson", type: "Electric" }),
		new Badge({ name: "Heat Badge", leader: "Flannery", type: "Fire" }),
		new Badge({ name: "Balance Badge", leader: "Norman", type: "Normal" }),
		new Badge({ name: "Feather Badge", leader: "Winona", type: "Flying" }),
		new Badge({ name: "Mind Badge", leader: "Tate and Liza", type: "Psychic" }),
		new Badge({ name: "Rain Badge", leader: "Wallace", type: "Water" }),
	],
	
	behavior: behavior.meander,
}));