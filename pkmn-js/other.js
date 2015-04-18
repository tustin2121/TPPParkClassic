// other.js
// File for various other events relating to TPP
// 

//////////////////// Starter Campfire ///////////////////////

addEvent(new Building({
	name : "Released Starter Campfire Base",
	sprite : "img/bld/campfire.gif",
	x: -13, y: -28,
	
	warp_x: 24, warp_y: -6,
}));

addEvent(new SignPost({
	name: "Released Campfire Troop Sign",
	x: -15, y: -24,
	sprite: 2,
	message: "Scout Troop #6<br/>Released Starter Campfire",
	
	infodex_entry: new InfodexEntry({
		title: "The Curse",
		html: '<h1>The Starter Curse</h1><p>With the release of Abby, TwitchPlaysPokemon has always been cursed when it came to their starters. The Fire Starter Curse is the most well known; it blights every fire starter pokemon we obtain with threat of release, whether by pure chaos or self-fulfilling prophecy, and it has only once failed to deliver on its threat.</p><p>The fire starter curse was extended to every fire-typed pokemon, starting with Flareon the False Prophet, and presumably ending with Solareon of Platinum fame when he entered the hall of fame.</p><p>The Starter Curse could be more than just Fire pokemon, however, as TPP has shown an affinity for dealing with the various types of pokemon it gets. TPP was never good with the glass cannons that are Fire Type pokemon, and they are often boxed or released. Water Type pokemon, however, will often survive to the Hall of Fame, as they seem to work well with TPP\'s style of tanking damage. A Grass starter will be relegated to the PC, a step above being released, but not much more given how hard fishing a mon out of the PC can be.</p><p>Regardless of the above, the chaos of the first day of a run means the most often chosen starter is the Fire type, and the most often released starter is the same type.</p>',
	}),
}));

addEvent(new MultiEvent({
	name : "Released Starter Campfire Pokemon",
	sprite : "img/pkmn/campfire_pokes.gif",
	x: -13, y: -26,
	
	adj_x: -3, adj_y: 7,
	
}).forOccasion("bloodysunday", {
	breakme: true,
	
}).addSubEvent("34,2,64,24", new Pokemon({
	name : "Chimchar",
	sprite: "img/pkmn/chimchar.png",
	x: -12, y: -29,
	
	dex : "img/pkdx/ptdex_chimchar.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "nqpppnl",
	gender: 2,
	gamename : "Chimchar",
	pokename : "Chimchar",
	nicknames : "LazorApe",
	level : 15,
	// memo : "",
	
	ribbons : [
		new Starter_Ribbon(),
		new Released_Ribbon("0d 12h 33m"),
		new Record_Ribbon("Fastest Released Starter"),
	],
}).forOccasion("bloodysunday", {
	x: -16, y: -14,
	adj_flip: true,
})

).addSubEvent("18,0,36,20", new Pokemon({
	name: "Zexy",
	sprite: "img/pkmn/zexxy.png",
	x : -14, y : -29,
	
	dex : "img/pkdx/emdex_zexy.png",
	sources : {
		"Pokedex Image by /u/NoPenNameGirl" : "http://www.reddit.com/r/twitchplayspokemon/comments/22d7zw/request_done_zexy_the_torchic_sprite/",
	},
		
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "zyyxyy",
	pokename : "Torchic",
	level : 38,
	ribbons : [
		new Starter_Ribbon(),
		new Released_Ribbon("3d 23h 9m"),
	],
}).forOccasion("bloodysunday", {
	x: -14, y: -15,
})

).addSubEvent("2,19,32,41", new Pokemon({
	name: "Abby",
	sprite: "img/pkmn/abby-gen1.png",
	x : -13, y : -30,
	
	dex : "img/pkdx/tpp9_abby.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/78067393358/ive-updated-omanytes-sprite-to-omastar-i-also",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "ABBBBBBK",
	pokename : "Charmeleon",
	level : 34,
	ribbons : [
		new Starter_Ribbon(),
		new Released_Ribbon("4d 8h 53m"),
	],
}).forOccasion("bloodysunday", {
	x: -19, y: -12,
	adj_flip: true,
})

).addSubEvent("53,26,81,45", new Pokemon({
	name : "Commander Bacon",
	sprite: "img/pkmn/tepig.png",
	x: -12, y: -16,
	
	dex : "img/pkdx/b/Spr_5b_498.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "GMYC&nbsp;&nbsp;",
	gender: 1,
	gamename : ",",
	pokename : "Tepig",
	nicknames : "Commander Kevin Bacon",
	level : 15,
	// memo : "",
	
	ribbons : [
		new Starter_Ribbon(),
		new Pokerus_Ribbon(),
		new Released_Ribbon("1d 13h 36m"),
	],
}).forOccasion("bloodysunday", {
	x: -11, y: -16,
	adj_flip: true,
})
));

///////////////// Train Station ////////////////////
// I like trains!

addEvent(new Building({
	name: "Train Station",
	sprite: "img/bld/train_station.png",
	x: -19, y: 60,
	
	warp_x: 128, warp_y: 144,
}));

addEvent(new Event({
	name: "Train",
	sprite: "img/bld/train.png",
	x: -15, y: 58, z: -8,
	
	is_stopped : false, //if the train is stopped permenantly at the station
	
	activeZone : function(load) {
		if (this.is_stopped) return false;
		var res = !(load.bottom < 56 || load.top > 61);
		if (!res && this.nowRunning) {
			this.nowRunning = false;
			this.domElement.hide();
		}
		return res;
	},
	
	lastRun : -1,
	nowRunning : false,
	actTimer : 0,
	behavior: function(){
		if (--this.actTimer > 0) return;
		if (this.is_stopped) return;
		if (!this.nowRunning) {
			this.domElement.hide();
			
			var date = new Date();
			var hour = date.getHours();
			var min = date.getMinutes();
			//run on the hour (up to 5 minutes after) and only once per hour
			if (min > 5 || hour == this.lastRun) {
				this.actTimer = 120;
				return;
			}
			
			//We want to run, place train just off the left side of the screen
			var offset = $("#anchor").position();
			this.domElement.css("left", -offset.left - 256).show();
			
			this.lastRun = hour;
			this.nowRunning = true;
			this.actTimer = -1;
			console.log("Train now running!");
		}
		
		if (this.nowRunning) {
			var xloc = this.domElement.position().left;
			this.domElement.stop().animate({
				"left" : xloc + 128,
			}, {
				duration: 500,
				easing: 'linear',
			});
			
			var offset = $("#anchor").position();
			var scrw = $("body").width() + 512;
			if (xloc > -offset.left + scrw) {
				this.domElement.hide();
				this.nowRunning = false;
				this.actTimer = 60;
			}
		}
	},
}));

/////////////////// Shiny House ///////////////////

addEvent(new Building({
	name : "Shiny House",
	sprite : "img/bld/shiny2.png",
	x: -38, y: -13,
	
	warp_x: 32, warp_y: 54,
}));
addEvent(new SignPost({
	name : "Shiny House Mailbox",
	x: -41, y: -13,
	sprite: 3,
	message: "<strong>Shiny House</strong>",
}));

//////////////////// Misc Signs! //////////////////

addEvent(new SignPost({
	name : "Park Sign",
	x: 5, y: 9,
}));


addEvent(new SignPost({
	name : "Park Sign",
	x: -2121, y: 57,
	sprite: 2,
	message: "Hey, congrats, you made it all the way out here. Why, I don't know, because there's nothing out here. But good for you! :) --tustin2121",
}));

addEvent(new SignPost({
	name : "Park Sign",
	x: 2121, y: 57,
	sprite: 2,
	message: "Congrats on scrolling all the way out here. Did you know you could move the trainer card and status screen by dragging them? :) --tustin2121",
}));

addEvent(new SignPost({
	name : "Park Sign",
	x: 2221, y: 57,
	sprite: 2,
	message: "Quit scrolling already, there's nothing more out this way. --tustin2121",
}));

addEvent(new SignPost({
	name : "Park Sign",
	x: 2321, y: 57,
	sprite: 2,
	message: "No, really. Stop it. You're only going to be disappointed. --tustin2121",
}));

addEvent(new SignPost({
	name : "Park Sign",
	x: 2521, y: 57,
	sprite: 2,
	message: "Fine, whatever, keep going. I don't care. There's literally nothing beyond this sign now. --tustin2121",
}));


//////////////// Creepy Eyes! >:3 ////////////////////
addEvent(new Event({
	name : "Cave Eyes",
	sprite : "img/pkmn/cave_eyes.png",
	x: -20, y: -36, z: 0,
	
	doClick : function() {
		var eyes = $(this.domElement).find("img.main");
		eyes.delay(1400) //blink eyes
			.hide(10).delay(100).show(10).delay(100)
			.hide(10).delay(100).show(10).delay(100)
			.delay(600)
			.hide(200);
		
		this.doClick = function(){}; //remove this function
	},
}));


//SHIPPING APP!
/*
The shipping app is the "Matchup App" from Platinum, where you can select two
pokemon and see if they're compatable for breeding. Here, we're going to show off
some of the OTPs of TPP.

Four levels: "OTP", "Shipping", "Interest", and "NOPE!" indicating how shipped they are

-- OTP --
Joey + AJ
M4 + Zexxy

-- Shipping --
M4 + C3   (C3 -> M4)
Mightydoge + BirdCop

-- Interest --



-- NOPE! --
(Any others)

*/
