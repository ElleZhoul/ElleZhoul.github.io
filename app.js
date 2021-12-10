const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
	menu.classList.toggle('is-active')
	menuLinks.classList.toggle('active');
})

var allWorm = localStorage.getItem('allWorm');
if(allWorm || allWorm === ""){
	//was touched
	allWorm = JSON.parse(localStorage.getItem("allWorm"));
}
else{
	//is fresh
	var allWorm = [
		{
			"name": "Null",
			"power": "Create an artificial cluster. Everyone added to this cluster has their parahuman abilities shared, but with a decrease in the power of each new ability.",
			"fromCanon": "Null"
		},
		{
			"name": "One",
			"power": "Thinker ability that allows for quick and efficient brainwashing given sufficient control over the victim's environment.",
			"fromCanon": "One"
		},
		{
			"name": "Two",
			"power": "Magnify other powers in close proximity.",
			"fromCanon": "Two"
		},
		{
			"name": "Four",
			"power": "Limited flight. Can hover between five and ten feet from the ground with a top speed of fifty to sixty miles per hour.",
			"fromCanon": "Four"
		},
		{
			"name": "Nine",
			"power": "Can push and pull on metals within a short range, accelerating both self and object away from or towards each other.",
			"fromCanon": "Nine"
		},
		{
			"name": "Thirteen",
			"power": "Forcefield creation.",
			"fromCanon": "Thirteen"
		},
		{
			"name": "Fourteen",
			"power": "Vacuum generation.",
			"fromCanon": "Fourteen"
		},
		{
			"name": "Twenty-Three",
			"power": "Danger sense.",
			"fromCanon": "Twenty-Three"
		},
		{
			"name": "Thirty-One",
			"power": "Powerful cutting lasers.",
			"fromCanon": "Thirty-One"
		},
		{
			"name": "Thirty-Two",
			"power": "Nullification waves. Stall things in motion, warm up cold things, cool warm things. Silences, stills.",
			"fromCanon": "Thirty-Two"
		},
		{
			"name": "Forty-Two",
			"power": "Teleportation. Requires concentration and time, time which increases the farther the distance.",
			"fromCanon": "Forty-Two"
		},
		{
			"name": "Accord",
			"power": "Create plans with more intelligence and functionality as the size and scope of a given problem increases, with a side of homicidal rage at anything out of place.",
			"fromCanon": "Accord"
		},
		{
			"name": "Acidbath",
			"power": "Transform into an extremely strong acid which can move as a tidal wave faster than the average car. Can fire acid blasts within a hundred feet. Immune to burns.",
			"fromCanon": "Acidbath"
		},
		{
			"name": "Adamant",
			"power": "Enhanced strength, durability, and short-ranged metal manipulation.",
			"fromCanon": "Adamant"
		},
		{
			"name": "Aegis",
			"power": "Biological redundancy and flight. Can always act at peak physical capacity. Redundancies compensate for any physical damage.",
			"fromCanon": "Aegis"
		},
		{
			"name": "Agnes Court",
			"power": "Grow artificial structures from generated seeds, which initially are like wood and harden to something like stone. Seeds have exponential growth in area of influence.",
			"fromCanon": "Agnes Court"
		},
		{
			"name": "Alabaster",
			"power": "Restore self and equipment every 4.3 seconds. Resets mental/emotional effects from other powers. Pain immunity. Small thinker ability to improve/repair equipment.",
			"fromCanon": "Alabaster"
		},
		{
			"name": "Albatross",
			"power": "Limited flight, with wide turns and accelerating speed, and creation of gaseous bombs that thrust all gas out of an area until the effect is canceled.",
			"fromCanon": "Albatross"
		},
		{
			"name": "Alexandria",
			"power": "Invincibility, flight, incredible strength, perfect memory, accelerated learning, and immunity to most master effects.",
			"fromCanon": "Alexandria"
		},
		{
			"name": "Allfather",
			"power": "Generate metal blades from nothing, which can then be continuously granted velocity for a short amount of time.",
			"fromCanon": "Allfather"
		},
		{
			"name": "Andrew Richter",
			"power": "AI creation, with a compulsion to place restraints on created intelligences with more potential.",
			"fromCanon": "Andrew Richter"
		},
		{
			"name": "Animos",
			"power": "Transform into a dog-like creature for a short amount of time, allowing for a roar that nullifies powers.",
			"fromCanon": "Animos"
		},
		{
			"name": "Annex",
			"power": "Can meld into and warp inorganic objects.",
			"fromCanon": "Annex"
		},
		{
			"name": "Anomaly",
			"power": "Create black spheres that generate light and draw people toward them.",
			"fromCanon": "Anomaly"
		},
		{
			"name": "Arbiter",
			"power": "Minor forcefield, sonic lasers, and a riot sense which assess the threats to an individual in terms of color.",
			"fromCanon": "Arbiter"
		},
		{
			"name": "Armsmaster",
			"power": "Tinker specialization of miniaturization and efficiency.",
			"fromCanon": "Armsmaster"
		},
		{
			"name": "Ash Beast",
			"power": "Crude mass-energy conversion, with lots of large explosions and largely uncontrolled regeneration.",
			"fromCanon": "Ash Beast"
		},
		{
			"name": "Assault",
			"power": "Touch-based kinetic energy manipulation.",
			"fromCanon": "Assault"
		},
		{
			"name": "Astrologer",
			"power": "Call down projectiles from the sky.",
			"fromCanon": "Astrologer"
		},
		{
			"name": "August Prince",
			"power": "Actions that would cause physical harm cannot be taken.",
			"fromCanon": "August Prince"
		},
		{
			"name": "Bakuda",
			"power": "Tinker specialization of explosive devices with potential for exotic effects.",
			"fromCanon": "Bakuda"
		},
		{
			"name": "Ballistic",
			"power": "Imbue inorganic objects with kinetic energy on touch.",
			"fromCanon": "Ballistic"
		},
		{
			"name": "Bambina",
			"power": "Propel self at high speeds and bounce off surfaces while causing fiery explosions on contact.",
			"fromCanon": "Bambina"
		},
		{
			"name": "Barker",
			"power": "Cause a variety of effects based on the vocal stresses of particular sounds, including concussive force, heat, and cold.",
			"fromCanon": "Barker"
		},
		{
			"name": "Barrow",
			"power": "Slowly replace environment with an otherworldly forest, which subtly changes based on wants and needs.",
			"fromCanon": "Barrow"
		},
		{
			"name": "Bastard Son",
			"power": "Grant incredible skill with random and obscure objects to others. These skills make the subject highly suggestible.",
			"fromCanon": "Bastard Son"
		},
		{
			"name": "Bastion",
			"power": "Create a variety of force and deflector fields.",
			"fromCanon": "Bastion"
		},
		{
			"name": "Battery",
			"power": "Release a charge of power to boost speed and durability, and manipulate metallic objects. Concentrate for seven to twelve seconds to gain full charge.",
			"fromCanon": "Battery"
		},
		{
			"name": "Bauble",
			"power": "Tinker specialization of glassworking and tools related to glassworking.",
			"fromCanon": "Bauble"
		},
		{
			"name": "Behemoth",
			"power": "Dynakinesis, production and manipulation of all kinds of energy.",
			"fromCanon": "Behemoth"
		},
		{
			"name": "Big Rig",
			"power": "Tinker specialization of drones specializing in construction of large structurs.",
			"fromCanon": "Big Rig"
		},
		{
			"name": "Bitch",
			"power": "Empower canines, increasing size, strength, durability, agility, and adding spikes and bone plating. No direct control, but includes understanding of canine thought.",
			"fromCanon": "Bitch"
		},
		{
			"name": "Biter",
			"power": "Distortion of body parts to increase size, including materials worn.",
			"fromCanon": "Biter"
		},
		{
			"name": "Black Kaze",
			"power": "Teleportation limited by arc of swung object, such as a katana. In transit, versions of self occupy spaces between departure and arrival point, moving for less than a second.",
			"fromCanon": "Black Kaze"
		},
		{
			"name": "Blasto",
			"power": "Tinker specialization of minion creation via hybridization of living organisms.",
			"fromCanon": "Blasto"
		},
		{
			"name": "Blesk",
			"power": "Teleportation.",
			"fromCanon": "Blesk"
		},
		{
			"name": "Blowout",
			"power": "Telekinetically assisted strength. Strength and durability increase with size of audience and strength of emotional reaction. Secondary stunning effect on audience.",
			"fromCanon": "Blowout"
		},
		{
			"name": "Bohu",
			"power": "Warp space with time spent stationary, making terrain actively hostile.",
			"fromCanon": "Bohu"
		},
		{
			"name": "Bonesaw",
			"power": "Tinker specialization of neuroanatomy, biology, and bio-mechanical fusions.",
			"fromCanon": "Bonesaw"
		},
		{
			"name": "Brandish",
			"power": "Creation of simple hard light shields and weapons. Can condense self into bouncing sphere of hard light, invincible but immobile.",
			"fromCanon": "Brandish"
		},
		{
			"name": "Breed",
			"power": "Creation of trilobite-like parasites that go after vulnerable prey or corpses, eventually growing into formidable threats.",
			"fromCanon": "Breed"
		},
		{
			"name": "Browbeat",
			"power": "Self-directed biokinesis and short-ranged telekinesis that also acts as a personal forcefield.",
			"fromCanon": "Browbeat"
		},
		{
			"name": "Burnscar",
			"power": "Pyrokinesis and teleportation limited to areas saturated with flame. Use of power reduces empathy and impulse control.",
			"fromCanon": "Burnscar"
		},
		{
			"name": "Butcher I",
			"power": "Increased strength and durability, aura of severe agony infliction, and transfer of consciousness and abilities at reduced power to killer.",
			"fromCanon": "Butcher I"
		},
		{
			"name": "Butcher II",
			"power": "See cardiovascular systems through walls.",
			"fromCanon": "Butcher II"
		},
		{
			"name": "Butcher III",
			"power": "Danger sense and super strength.",
			"fromCanon": "Butcher III"
		},
		{
			"name": "Butcher IV",
			"power": "Infliction of festering wounds.",
			"fromCanon": "Butcher IV"
		},
		{
			"name": "Butcher VI",
			"power": "Explosive teleportation at point of arrival and super strength.",
			"fromCanon": "Butcher VI"
		},
		{
			"name": "Butcher VIII",
			"power": "Reform matter. Can shape it into various objects.",
			"fromCanon": "Butcher VIII"
		},
		{
			"name": "Butcher IX",
			"power": "Super strength and ability to induce mindless rage.",
			"fromCanon": "Butcher IX"
		},
		{
			"name": "Butcher XI",
			"power": "Super strength.",
			"fromCanon": "Butcher XI"
		},
		{
			"name": "Butcher XII",
			"power": "Painlessness and durable skin.",
			"fromCanon": "Butcher XII"
		},
		{
			"name": "Butcher XIII",
			"power": "Super strength.",
			"fromCanon": "Butcher XIII"
		},
		{
			"name": "Cache",
			"power": "Force objects into an extradimensional space and withdraw them at will. Not limited to inorganics.",
			"fromCanon": "Cache"
		},
		{
			"name": "Cadence",
			"power": "Create intense vibrations that deliver debilitating hallucinations to individuals within sphere of influence.",
			"fromCanon": "Cadence"
		},
		{
			"name": "Califa de Perro",
			"power": "Enhanced strength and agility along with point-blank aerokinesis.",
			"fromCanon": "Califa de Perro"
		},
		{
			"name": "Camion",
			"power": "Tinker specialization in vehicles.",
			"fromCanon": "Camion"
		},
		{
			"name": "Campanile",
			"power": "Gravity alteration aura, along with ability to grow to enormous heights.",
			"fromCanon": "Campanile"
		},
		{
			"name": "Canary",
			"power": "Increases singing ability. Songs render listeners extremely susceptible to suggestions.",
			"fromCanon": "Canary"
		},
		{
			"name": "Carnal",
			"power": "Durability and self-healing which accelerates by bathing in blood.",
			"fromCanon": "Carnal"
		},
		{
			"name": "Cask",
			"power": "Tinker specialization of enhancement and restorative chemicals.",
			"fromCanon": "Cask"
		},
		{
			"name": "Chariot",
			"power": "Tinker specialization of mobility, movement, and transportation.",
			"fromCanon": "Chariot"
		},
		{
			"name": "Chevalier",
			"power": "Can combine the properties of several items into one, selectively choosing desired attributes, and adjust these properties on the fly.",
			"fromCanon": "Chevalier"
		},
		{
			"name": "Chopshop",
			"power": "Tinker specialization of drones that work better the larger they are.",
			"fromCanon": "Chopshop"
		},
		{
			"name": "Chronicler",
			"power": "Flight and creation of a hazy field around self and others. Can copy whatever happened inside one field to another area",
			"fromCanon": "Chronicler"
		},
		{
			"name": "Chubster",
			"power": "Increased toughness and a kinetic dampening field. Grows more effective at slower speeds.",
			"fromCanon": "Chubster"
		},
		{
			"name": "Chuckles",
			"power": "Super speed localized in the head and legs, and super strength in the chest and arms. Causes the world to appear to be in perpetual slow motion.",
			"fromCanon": "Chuckles"
		},
		{
			"name": "Circus",
			"power": "Enhanced reflexes, balance, coordination, aim, and spatial sense, along with minor pyrokinesis and an extradimensional storage space.",
			"fromCanon": "Circus"
		},
		{
			"name": "Cinderhands",
			"power": "Create fire from nothing at temperatures capable of burning through bone.",
			"fromCanon": "Cinderhands"
		},
		{
			"name": "Cinereal",
			"power": "Coat an area in ash. Ash reinforces nearby structures and can be ignited at will or absorbed for healing or teleportation.",
			"fromCanon": "Cinereal"
		},
		{
			"name": "Citrine",
			"power": "Attune areas to particular functions, altering specific properties within a small area. Can target gravity, temperature, friction, progression of time, and powers.",
			"fromCanon": "Citrine"
		},
		{
			"name": "Clairvoyant",
			"power": "View areas anywhere in the multiverse. Can grant visions to people on touch, though doing so leaves the vision's recipient unconscious.",
			"fromCanon": "Clairvoyant"
		},
		{
			"name": "Clockblocker",
			"power": "Freeze objects, including living beings, in time. Objects stopped in time are inviolable until the effect runs out after thirty seconds to ten minutes.",
			"fromCanon": "Clockblocker"
		},
		{
			"name": "Codex",
			"power": "Shoot projectiles which cause permanent brain damage and memory loss, granting a temporary mental boost with each target.",
			"fromCanon": "Codex"
		},
		{
			"name": "Coil",
			"power": "Split the world into two timelines, abandoning the unfavorable one at any time. Is in actuality a form of precognition.",
			"fromCanon": "Coil"
		},
		{
			"name": "Contessa",
			"power": "See the intervening steps needed to accomplish any goal and allow these steps to be followed on autopilot.",
			"fromCanon": "Contessa"
		},
		{
			"name": "Cozen",
			"power": "Create pocket dimensions. Can be placed in fixed locations or kept with self. Not limited to inanimate objects. Pockets within twenty-five feet can transfer storage.",
			"fromCanon": "Cozen"
		},
		{
			"name": "Crane the Harmonious",
			"power": "Create a sphere that directs motion and orientation. Can understand motion and ranges of motion, allowing for specialized martial arts styles.",
			"fromCanon": "Crane the Harmonious"
		},
		{
			"name": "Cranial",
			"power": "Tinker specialization of neurology, allowing for skills and memories to be taken and implanted.",
			"fromCanon": "Cranial"
		},
		{
			"name": "Crawler",
			"power": "Permanent adaptive regeneration. Any injuries heal incredibly fast, altering the healed area to be resistant or immune to the source of damage.",
			"fromCanon": "Crawler"
		},
		{
			"name": "Cricket",
			"power": "Greatly enhanced reflexes, enough to appear to dodge bullets, along with echolocation and nausea-inducing sound generation.",
			"fromCanon": "Cricket"
		},
		{
			"name": "Crimson",
			"power": "Strength, agility, and durability that increases after consuming blood from victims.",
			"fromCanon": "Crimson"
		},
		{
			"name": "Crock o'Shit",
			"power": "Transform into a form that has sensory abilities that can determine lies based on reactions, which influence the form's shape.",
			"fromCanon": "Crock o'Shit"
		},
		{
			"name": "Crucible",
			"power": "Create a forcefield bubble that can incinerate everything inside.",
			"fromCanon": "Crucible"
		},
		{
			"name": "Crusader",
			"power": "Create ghostly duplicates of self and equipment that can fly. Duplicates do not interact with inorganic matter.",
			"fromCanon": "Crusader"
		},
		{
			"name": "Cuff",
			"power": "Manipulate and reshape metal while and after touching it. After being injured, strength and durability increases for a short time.",
			"fromCanon": "Cuff"
		},
		{
			"name": "Custodian",
			"power": "Become incorporeal and omnipresent within a structure. Can incarnate temporary duplicates of self in enormous numbers.",
			"fromCanon": "Custodian"
		},
		{
			"name": "Damsel of Distress",
			"power": "Create maelstroms of inconsistent gravity and warped spacetime, twisting reality in uncontrolled cone-shapes blasts. Annihilation effect.",
			"fromCanon": "Damsel of Distress"
		},
		{
			"name": "Dauntless",
			"power": "Permanently empower items by infusing them with a little power each day, with stacking effects.",
			"fromCanon": "Dauntless"
		},
		{
			"name": "Deva Yaga",
			"power": "Alter parahuman abilities, granting or removing power, range, effectiveness, and duration, with minor costs on other fronts.",
			"fromCanon": "Deva Yaga"
		},
		{
			"name": "Dinah Alcott",
			"power": "See the likelihood of an event occurring as a percentage chance. Can look through a timeline at significant cost.",
			"fromCanon": "Dinah Alcott"
		},
		{
			"name": "Dispatch",
			"power": "Enhanced strength and durability. Can create bubbles of accelerated time.",
			"fromCanon": "Dispatch"
		},
		{
			"name": "Dodge",
			"power": "Tinker specialization of pocket dimension creation.",
			"fromCanon": "Dodge"
		},
		{
			"name": "Doormaker",
			"power": "Open and close portals between anywhere within area of sensory awareness.",
			"fromCanon": "Doormaker"
		},
		{
			"name": "Dovetail",
			"power": "Flight and strength. While flying, trails of light fall to the ground where they balloon into soft enveloping forcefields.",
			"fromCanon": "Dovetail"
		},
		{
			"name": "Dragon",
			"power": "Tinker specialization of understanding and reproducing tinkertech.",
			"fromCanon": "Dragon"
		},
		{
			"name": "Dredge",
			"power": "Post-cog. Gain knowledge from objects and people within the immediate vicinity.",
			"fromCanon": "Dredge"
		},
		{
			"name": "Echidna",
			"power": "Capture all organisms on touch, then split out a clone with more strength than the original. Cloned perahumans have a stronger or modified power.",
			"fromCanon": "Echidna"
		},
		{
			"name": "Edict",
			"power": "Give one-word commands to any single target in earshot. If they can be obeyed within three seconds, but aren't, the target suffers a random penalty.",
			"fromCanon": "Edict"
		},
		{
			"name": "Egg",
			"power": "Hatch and produce autonomous, shapeshifting minions.",
			"fromCanon": "Egg"
		},
		{
			"name": "Eidolon",
			"power": "Use several of an enormous array of powers. More than three at once reduces potency.",
			"fromCanon": "Eidolon"
		},
		{
			"name": "Eligos",
			"power": "Aerokinesis. Compress air into shearing blades of wind that grow as they travel, then boomerang back.",
			"fromCanon": "Eligos"
		},
		{
			"name": "Entourage",
			"power": "Long-range self duplication. Duplicates operate independently, with no personality degradation.",
			"fromCanon": "Entourage"
		},
		{
			"name": "Epeios",
			"power": "Tinker specialization in computers, with a focus on software and viruses.",
			"fromCanon": "Epeios"
		},
		{
			"name": "Epoch",
			"power": "Rewind, push forward through, or pause time by ten seconds.",
			"fromCanon": "Epoch"
		},
		{
			"name": "Erik Granholme",
			"power": "Tinker specialization of drones and remote tanks.",
			"fromCanon": "Erik Granholme"
		},
		{
			"name": "Exalt",
			"power": "Aerokinesis, which improves after letting a charge build up, and telekinesis strong enough to allow for flight.",
			"fromCanon": "Exalt"
		},
		{
			"name": "Faultline",
			"power": "Make holes or cuts by touching any non-living material.",
			"fromCanon": "Faultline"
		},
		{
			"name": "Feint",
			"power": "Generate hard light shells around objects and individuals, then move them about until they expire.",
			"fromCanon": "Feint"
		},
		{
			"name": "Felix Swoop",
			"power": "Control certain birds and grant them fire resistance and pyrokinesis.",
			"fromCanon": "Felix Swoop"
		},
		{
			"name": "Flashpoint",
			"power": "Set water on fire.",
			"fromCanon": "Flashpoint"
		},
		{
			"name": "Flechette",
			"power": "Imbue an object with the power to punch through anything, even nominally indestructible objects. Gain an enhanced sense of angles and timing.",
			"fromCanon": "Flechette"
		},
		{
			"name": "Floret",
			"power": "Create buds that unfold into crystalline shapes based on a timer or on impact with a target. Can bond to surfaces, set things on fire, mess with tinkertech, and more.",
			"fromCanon": "Floret"
		},
		{
			"name": "Fog",
			"power": "Transform into a living fog that erodes living matter within it.",
			"fromCanon": "Fog"
		},
		{
			"name": "Fume",
			"power": "Cast out large bullets that can break bones and produce a cloud of sulfurous gas.",
			"fromCanon": "Fume"
		},
		{
			"name": "Fume Hood",
			"power": "Create fragile spheres of poison that explode on contact, generating weak concussive blasts.",
			"fromCanon": "Fume Hood"
		},
		{
			"name": "Gallant",
			"power": "Generate concussive blasts of energy that can alter emotions. Sense emotions of individuals as a colored aura.",
			"fromCanon": "Gallant"
		},
		{
			"name": "Galvanate",
			"power": "Give powers to others with a touch. Powers include invincibility, super strength, and an electric touch.",
			"fromCanon": "Galvanate"
		},
		{
			"name": "Garotte",
			"power": "Assume the form of a large amount of strong, durable tendrils surrounding a face.",
			"fromCanon": "Garotte"
		},
		{
			"name": "Gasconade",
			"power": "Change body into an arrangement of 2D images. On touching for enough time, revert objects to a prior condition and location. Can use on self and other living targets.",
			"fromCanon": "Gasconade"
		},
		{
			"name": "Gavel",
			"power": "Reduce the severity of any damage to a small, set amount, no matter the source. Gain some amount of super strength. Imbue an object with damage reduction and a vast impact.",
			"fromCanon": "Gavel"
		},
		{
			"name": "Genesis",
			"power": "While awake, gain charge. Spend charge while sleeping to design, summon, and sustain a construct, which takes less charge the more biologically stable the design.",
			"fromCanon": "Genesis"
		},
		{
			"name": "Genoscythe",
			"power": "Transform arms into razor-sharp limbs.",
			"fromCanon": "Genoscythe"
		},
		{
			"name": "Gentle Giant",
			"power": "Gain extreme durability, extra size, super strength, and mottled, mossy skin.",
			"fromCanon": "Gentle Giant"
		},
		{
			"name": "Getaway",
			"power": "Set up areas in advance to teleport to.",
			"fromCanon": "Getaway"
		},
		{
			"name": "Goddess",
			"power": "Master aura. Telekinesis; flight, super strength, and manipulating objects. Adaptive defense to powers. Danger sense. Personal power battery that can strengthen abilities.",
			"fromCanon": "Goddess"
		},
		{
			"name": "Glace",
			"power": "Tinker specialization of cryogenics and stasis.",
			"fromCanon": "Glace"
		},
		{
			"name": "Glaistig Uaine",
			"power": "Kill parahumans on touch, gaining an imprint of the person and use of their power. Can use up to three at full power, more at much reduced potency. Can call up duplicates.",
			"fromCanon": "Glaistig Uaine"
		},
		{
			"name": "Grace",
			"power": "Enhanced reflexes, agility, and perception of time. Can imbue body parts with striking power and invulnerability to both powers and general harm.",
			"fromCanon": "Grace"
		},
		{
			"name": "Gray Boy",
			"power": "Form stationary time loops no one else can enter or make changes to. Changes made to loops repeat every time. Any changes made to self revert.",
			"fromCanon": "Gray Boy"
		},
		{
			"name": "Gregor the Snail",
			"power": "Increased durability. Concoct chemicals within stomach and project them through skin. Chemicals include fire retardant foam, adhesives, lubricants, and acids.",
			"fromCanon": "Gregor the Snail"
		},
		{
			"name": "Grue",
			"power": "Generate cloud of darkness that erases light and mutes sounds for everyone except self.",
			"fromCanon": "Grue"
		},
		{
			"name": "Gully",
			"power": "Altered body with increased size and strength, along with a distorted appearance. Can manipulate earth with an incredible degree of control.",
			"fromCanon": "Gully"
		},
		{
			"name": "Halo",
			"power": "Generate a five-foot-wide, sharp-edged gold hoop that can be moved at will and can generate forcefields and lasers.",
			"fromCanon": "Halo"
		},
		{
			"name": "Hatchet Face",
			"power": "Super strength and durability along with nullification of nearby powers.",
			"fromCanon": "Hatchet Face"
		},
		{
			"name": "Heartbreaker",
			"power": "Permanently manipulate the emotions of nearby people in line of sight, allowing for the creation of incredibly loyal agents.",
			"fromCanon": "Heartbreaker"
		},
		{
			"name": "Heith Anders",
			"power": "Can scale up in size, gaining protection from a personal distortion field.",
			"fromCanon": "Heith Anders"
		},
		{
			"name": "Hemorrhagia",
			"power": "Blood control, limited to self. Can create cutting weapons from blood and shields from scabs.",
			"fromCanon": "Hemorrhagia"
		},
		{
			"name": "Hero",
			"power": "Tinker specialization of wavelength manipulation, similar to the stilling powers employed by Zion and Eden.",
			"fromCanon": "Hero"
		},
		{
			"name": "Homer",
			"power": "Incredible accuracy in regards to weak points, such that hitting a baseball can make it inevitably make contact with any point of vulnerability.",
			"fromCanon": "Homer"
		},
		{
			"name": "Hookwolf",
			"power": "Transform into a shifting mass of hooks, blades, and other metal weapons. Form is durable, but retains a vulnerable core.",
			"fromCanon": "Hookwolf"
		},
		{
			"name": "Horizon",
			"power": "Can use one of three types of enhanced senses at a time; enhanced scene processing, see through inorganics, see into organics. Explosive touch linked to focus on target.",
			"fromCanon": "Horizon"
		},
		{
			"name": "Hoyden",
			"power": "Hits create explosions on impact. If harmed, attackers receive explosions. Resist damage from other powers; resistance increases with distance. Extra strength and durability.",
			"fromCanon": "Hoyden"
		},
		{
			"name": "Hunch",
			"power": "Precognition with uncertain accuracy.",
			"fromCanon": "Hunch"
		},
		{
			"name": "Imp",
			"power": "Become unnoticeable, removing entire memory of existence from others' minds while power is active.",
			"fromCanon": "Imp"
		},
		{
			"name": "Ingenue",
			"power": "Boost one aspect of a parahuman's power in exchange for dropping proficiency in another. Long-term use drives targets homicidally insane.",
			"fromCanon": "Ingenue"
		},
		{
			"name": "Jack Slash",
			"power": "Extend the cutting edge of any handheld cutting weapon with no upper limit. Gain intuition of and ability to manipulate emotions of parahumans.",
			"fromCanon": "Jack Slash"
		},
		{
			"name": "Jacked",
			"power": "Tinker specialization of cybernetic limbs and implants.",
			"fromCanon": "Jacked"
		},
		{
			"name": "Jacklight",
			"power": "Create orbs of light that grow in flight, then stop in mid-air. Orbs accelerate motion in their vicinity, and can affect other types of energy.",
			"fromCanon": "Jacklight"
		},
		{
			"name": "Jamestowner",
			"power": "Tinker specialization of radiation that can mutate organisms and control mutated individuals.",
			"fromCanon": "Jamestowner"
		},
		{
			"name": "Jiǎ",
			"power": "Tinker specialization of simulation and construction.",
			"fromCanon": "Jiǎ"
		},
		{
			"name": "Jouster",
			"power": "Channel several effects by striking with lance. Effects include concussive blasts, fire, ice, lightning, suction, disintegration, and more. Can move with bursts of speed.",
			"fromCanon": "Jouster"
		},
		{
			"name": "Kaeing Tha",
			"power": "Can adopt another form that appears 2D, which can envelop others and control their actions, and, to a limited extent, their powers.",
			"fromCanon": "Kaeing Tha"
		},
		{
			"name": "Kazikli Bey",
			"power": "Aerokinesis capable of forming whirlwinds and slicing people with air compressed into razorlike ribbons.",
			"fromCanon": "Kazikli Bey"
		},
		{
			"name": "Khonsu",
			"power": "Layered protective forcefields. Can summon up to three time fields which greatly accelerate time. Individuals trapped within appear to die in seconds.",
			"fromCanon": "Khonsu"
		},
		{
			"name": "Khun Sa",
			"power": "Can assume an immobile and invulnerable state that grants control of nervous systems in the area, and some limited control of electronics.",
			"fromCanon": "Khun Sa"
		},
		{
			"name": "Kid Win",
			"power": "Tinker specialization of modular devices.",
			"fromCanon": "Kid Win"
		},
		{
			"name": "King",
			"power": "Enhanced strength and endurance. Any physical harm transfers to those touched within the last day.",
			"fromCanon": "King"
		},
		{
			"name": "King of Cups",
			"power": "Can create limbs out of energy and use them for mobility or to graft onto wound stumps as prosthetics.",
			"fromCanon": "King of Cups"
		},
		{
			"name": "Kismet",
			"power": "Balance thinker.",
			"fromCanon": "Kismet"
		},
		{
			"name": "Koschei",
			"power": "Disappear on death, emerging from a nearby location bigger, tougher, and stronger, but less intelligent than before.",
			"fromCanon": "Koschei"
		},
		{
			"name": "Krieg",
			"power": "Kinetic manipulation within a certain radius of self. Disrupts, slows, and/or deflects nearby hostile forces. Increases results of own actions.",
			"fromCanon": "Krieg"
		},
		{
			"name": "Kudzu",
			"power": "Self-duplicating master.",
			"fromCanon": "Kudzu"
		},
		{
			"name": "Lab Rat",
			"power": "Tinker specialization of drugs that temporarily turn subjects into monsters while storing their original form. Requires test subjects.",
			"fromCanon": "Lab Rat"
		},
		{
			"name": "Labyrinth",
			"power": "Alter surroundings at will. Sphere of influence increases while remaining still. Can exclude people from effects of power.",
			"fromCanon": "Labyrinth"
		},
		{
			"name": "Legend",
			"power": "Flight, transformation into light that heals based on energy absorbed, and laser beams that can turn corners, pass through walls, freeze, ignite, and more.",
			"fromCanon": "Legend"
		},
		{
			"name": "Leet",
			"power": "All tinker tech trees, but a limitation of only being able to create anything once.",
			"fromCanon": "Leet"
		},
		{
			"name": "Leister",
			"power": "Can cause objects to distort and extend on touch.",
			"fromCanon": "Leister"
		},
		{
			"name": "Leonid",
			"power": "Hear everything within a certain range. Can manipulate sounds, making them anywhere from silent to twice as loud. Can teleport anywhere in earshot of a sound.",
			"fromCanon": "Leonid"
		},
		{
			"name": "Leviathan",
			"power": "Macro hydrokinesis, the manipulation of water on a massive scale.",
			"fromCanon": "Leviathan"
		},
		{
			"name": "Licit",
			"power": "Create forcefields in geometric shapes and retain awareness of them. Can walk through own forcefields.",
			"fromCanon": "Licit"
		},
		{
			"name": "Ligeia",
			"power": "Cause geysers of water to gush out of empty space, or suck water and whatever is caught in it back to an ocean of another reality.",
			"fromCanon": "Ligeia"
		},
		{
			"name": "Lightslinger",
			"power": "Convert light near hands into a concussive laser cannon, with a higher potential power output based on strength of light source.",
			"fromCanon": "Lightslinger"
		},
		{
			"name": "Lizardtail II",
			"power": "Regeneration aura which can reach across an entire street.",
			"fromCanon": "Lizardtail II"
		},
		{
			"name": "Lookout",
			"power": "Tinker specialization of cameras and immobile terminals.",
			"fromCanon": "Lookout"
		},
		{
			"name": "Lord of Loss",
			"power": "Breaker form of metallic ribbons, allowing for shapeshifting. Any repeated action in breaker state has its effect and power multiplied over time.",
			"fromCanon": "Lord of Loss"
		},
		{
			"name": "Lung",
			"power": "Enhanced strength and resilience, along with low-level pyrokinesis and regeneration. Powers and form scale with threat, slowly transforming into something dragonlike.",
			"fromCanon": "Lung"
		},
		{
			"name": "Lustrum",
			"power": "Sap energy from immediate vicinity to form hard light body, briefly crippling the mind, body, and power of anyone nearby.",
			"fromCanon": "Lustrum"
		},
		{
			"name": "Mama Mathers",
			"power": "If perceived, gain a connection to senses and gain the ability to manipulate and use them. Can infect new targets by them perceiving own name.",
			"fromCanon": "Mama Mathers"
		},
		{
			"name": "Mannequin",
			"power": "Tinker specialization of sustaining life and sheltering it from outside forces.",
			"fromCanon": "Mannequin"
		},
		{
			"name": "Manpower",
			"power": "Electromagnetic shield that augments both strength and durability.",
			"fromCanon": "Manpower"
		},
		{
			"name": "Mantellum",
			"power": "Nullify powers within fifteen feet, and senses within five.",
			"fromCanon": "Mantellum"
		},
		{
			"name": "March",
			"power": "Extraordinarily enhanced timing, both in long and short term. Blocks thinker powers. Use objects to cut in all dimensions and detonate. Increased accuracy.",
			"fromCanon": "March"
		},
		{
			"name": "Marquis",
			"power": "Bone manipulation, including self and any in line of sight. Can make it grow or shrink, reshape and multiply.",
			"fromCanon": "Marquis"
		},
		{
			"name": "Masamune",
			"power": "Tinker specialization of mass-production.",
			"fromCanon": "Masamune"
		},
		{
			"name": "Matryoshka",
			"power": "Transform into a mess of ribbons that can absorb an individual, granting some memories and their appearance but costing some memories as well.",
			"fromCanon": "Matryoshka"
		},
		{
			"name": "Miasma",
			"power": "Transform, becoming undetectable and spewing an odorless gas that causes headaches, tinnitus, watery eyes, and eventually blindness, memory loss, and comas.",
			"fromCanon": "Miasma"
		},
		{
			"name": "Minakhm",
			"power": "On touch, compel individuals to move a set distance before attacking anything that comes within range.",
			"fromCanon": "Minakhm"
		},
		{
			"name": "Mirrormask",
			"power": "On touch, temporarily turn an individual into a copy of self. Copies can reset other copies' durations before they wear off.",
			"fromCanon": "Mirrormask"
		},
		{
			"name": "Miss Militia",
			"power": "Control a semi-sentient blur of energy that can transform into any sort of ordinary weapon.",
			"fromCanon": "Miss Militia"
		},
		{
			"name": "Mockshow",
			"power": "Animate and control discrete objects, creating loose, telekinetically animated servants.",
			"fromCanon": "Mockshow"
		},
		{
			"name": "Mog",
			"power": "Absorb impacts, using the energy for physical changes such as new features, armor, and weaponry. Comes with mental degradation similar to Alzheimer's.",
			"fromCanon": "Mog"
		},
		{
			"name": "Mokosh",
			"power": "Fire powerful bullets from the hand that are connected with strings of near-invisible razor wire.",
			"fromCanon": "Mokosh"
		},
		{
			"name": "Moord Nag",
			"power": "Control a living shadow that switches out skulls fitting for its size. Starts off small, growing in size and destructive power the more lives consumed.",
			"fromCanon": "Moord Nag"
		},
		{
			"name": "Mouse Protector",
			"power": "Enhanced agility, coordination, and stamina. Mark objects and people on touch and teleport to them at will.",
			"fromCanon": "Mouse Protector"
		},
		{
			"name": "Mush",
			"power": "Form a humanoid body around self out of loose debris. Can gather mass using tendrils that attach to loose matter such as dirt, compost, junk, sand, or mud.",
			"fromCanon": "Mush"
		},
		{
			"name": "Myrddin",
			"power": "Gain personal access to a variety of pocket dimensions, allowing for the apparent display of a variety of powers through their use.",
			"fromCanon": "Myrddin"
		},
		{
			"name": "Nailbiter",
			"power": "Teeth transform into rusty nails, and any body parts can be stretched into fine, visible points with enhanced durability.",
			"fromCanon": "Nailbiter"
		},
		{
			"name": "Narwhal",
			"power": "Create multiple crystalline forcefields that can move in straight lines at high velocities. Forcefields can bisect targets within fifty feet.",
			"fromCanon": "Narwhal"
		},
		{
			"name": "Nemean",
			"power": "Extreme durability.",
			"fromCanon": "Nemean"
		},
		{
			"name": "Newter",
			"power": "Enhanced toughness and agility. All bodily fluids contain a powerful hallucinogen.",
			"fromCanon": "Newter"
		},
		{
			"name": "Nice Guy",
			"power": "Become incapable of being seen as a threat.",
			"fromCanon": "Nice Guy"
		},
		{
			"name": "Night",
			"power": "Transform into a horrifying monster while unseen. Reverting to human form resets body to a pristine state.",
			"fromCanon": "Night"
		},
		{
			"name": "Night Hag",
			"power": "Gain a breaker state where environment becomes 'infected' while standing still. If destroyed or killed, reform at any infected ground.",
			"fromCanon": "Night Hag"
		},
		{
			"name": "Nilbog",
			"power": "Create customized minions with feelings and powers of their own by recycling living material. Creations can reproduce.",
			"fromCanon": "Nilbog"
		},
		{
			"name": "Nix",
			"power": "Create and control illusions that can be altered on the fly. When disrupted, they turn into harmless smoke.",
			"fromCanon": "Nix"
		},
		{
			"name": "The Number Man",
			"power": "Understand numbers both on a personal and worldwide level, allowing for analysis and prediction of opponents in combat.",
			"fromCanon": "The Number Man"
		},
		{
			"name": "Nyx",
			"power": "Create and control shapes filled with poisonous gas. When disrupted, the gas bursts out into the surrounding area.",
			"fromCanon": "Nyx"
		},
		{
			"name": "Ogun",
			"power": "While remaining stationary, nearby areas start to transform into tinkertech. Works faster and more effectively if there are machines in the area.",
			"fromCanon": "Ogun"
		},
		{
			"name": "Oliver",
			"power": "Body gradually changes to fall in line with current perception of attractiveness. Quickly gain skills while focusing on any subject.",
			"fromCanon": "Oliver"
		},
		{
			"name": "Oni Lee",
			"power": "Teleport within line of sight, leaving a short-livid duplicate behind which can act independently and use equipment before it and itself vanish.",
			"fromCanon": "Oni Lee"
		},
		{
			"name": "Othala",
			"power": "Grant temporary powers on touch. Cannot empower self. Powers include pyrokinesis, invincibility, regeneration, flight, super speed, and super strength.",
			"fromCanon": "Othala"
		},
		{
			"name": "Othello",
			"power": "Gain a 'mirror self' which travels in another world. This mirror self is mostly intangible, but can make small cuts with concentration. Mirror and self can swap places.",
			"fromCanon": "Othello"
		},
		{
			"name": "Parian",
			"power": "Fine telekinetic control over lightweight materials. Works better with porous materials. Most effective on human skins.",
			"fromCanon": "Parian"
		},
		{
			"name": "Particulate",
			"power": "Tinker specialization of dust.",
			"fromCanon": "Particulate"
		},
		{
			"name": "Perdition",
			"power": "Cause any person or object in line of sight to be reverted to their state and location as of a few seconds earlier. Memory is not retained.",
			"fromCanon": "Perdition"
		},
		{
			"name": "Phir Sē",
			"power": "Create golden doorways that go back in time a few minutes in any perceived areas. Can use doorways to double and re-double light, charging blasts of energy.",
			"fromCanon": "Phir Sē"
		},
		{
			"name": "Pinpoint",
			"power": "Complex analysis of observed objects and individuals, including observation of past, present, future, physical composition, and weak points.",
			"fromCanon": "Pinpoint"
		},
		{
			"name": "Prancer",
			"power": "Breaker distortion or personal force-field allowing for greater agility, reflexes, and dodging bullets, but is easily broken, taking time to reassert itself.",
			"fromCanon": "Prancer"
		},
		{
			"name": "Pretender",
			"power": "Take over the bodies of others, with their powers still intact.",
			"fromCanon": "Pretender"
		},
		{
			"name": "Prin Hunlika",
			"power": "Generate an aversion field affecting all individuals within roughly 500 feet. Individuals too close when field activates may harm themselves when attempting to leave.",
			"fromCanon": "Prin Hunlika"
		},
		{
			"name": "Prism",
			"power": "Split self into three temporary clones. Live as long as one survives. Can reabsorb clones to enhance strength, speed, and durability for a few seconds.",
			"fromCanon": "Prism"
		},
		{
			"name": "Professor Haywire",
			"power": "Tinker specialization of interdimensional tech.",
			"fromCanon": "Professor Haywire"
		},
		{
			"name": "Prolapse",
			"power": "Biokinetically enhanced durability and size as well as the ability to turn individuals inside out with a touch.",
			"fromCanon": "Prolapse"
		},
		{
			"name": "Prophet",
			"power": "Regeneration.",
			"fromCanon": "Prophet"
		},
		{
			"name": "Psychosoma",
			"power": "Wrap individuals in semi-real illusions of controlled monsters. Victims are sedated while trapped.",
			"fromCanon": "Psychosoma"
		},
		{
			"name": "Purity",
			"power": "Recharge an internal supply of energy via sunlight, which can be used for high-speed flight, strong double-helix artillery beams, and glowing like a human firefly.",
			"fromCanon": "Purity"
		},
		{
			"name": "Pyrotechnical",
			"power": "Tinker specialization of flame manipulation, special effects, and guns.",
			"fromCanon": "Pyrotechnical"
		},
		{
			"name": "Quarrel",
			"power": "Attacks bend space to create perfect accuracy, never missing a target within range.",
			"fromCanon": "Quarrel"
		},
		{
			"name": "Queen of Swords",
			"power": "Create and manipulate lines of light connecting self to nearby capes, then form a blob that causes objects that enter it to gain effects of nearby cape powers.",
			"fromCanon": "Queen of Swords"
		},
		{
			"name": "Rail",
			"power": "Grant temporary invulnerability while moving touched targets or self a set distance.",
			"fromCanon": "Rail"
		},
		{
			"name": "Rattenfanger",
			"power": "Tinker specialization of mutation through music.",
			"fromCanon": "Rattenfanger"
		},
		{
			"name": "Ravager",
			"power": "Enhanced fighting ability. Imbue weapons, objects, and ammunition with the ability to inflict gradually worsening wounds, with an awareness of those wounded.",
			"fromCanon": "Ravager"
		},
		{
			"name": "Raymancer",
			"power": "Create innumerable energy blasts and beams, condensing and refining them to devastating effect using a controlled lens projection.",
			"fromCanon": "Raymancer"
		},
		{
			"name": "Reconciliation",
			"power": "Biomanipulation.",
			"fromCanon": "Reconciliation"
		},
		{
			"name": "Revel",
			"power": "Manipulate and capture diverse forms of energy with a lantern and use it to launch controlled energy orbs.",
			"fromCanon": "Revel"
		},
		{
			"name": "Rifle",
			"power": "Enhanced perceptions. Increase the range of projectile weapons.",
			"fromCanon": "Rifle"
		},
		{
			"name": "Rime",
			"power": "Flight. Create throwable ice fractals with controllable paths which expand explosively into glaciers on impact.",
			"fromCanon": "Rime"
		},
		{
			"name": "Rosary",
			"power": "Break non-living material into leaf-like fragments, control those fragments, and reconstitute them into the objects or parts of the object at a different location.",
			"fromCanon": "Rosary"
		},
		{
			"name": "Roulette",
			"power": "Shotgun precognition, viewing a spread of futures in a matter of moments with number of events and length of viewing periods depending on several factors.",
			"fromCanon": "Roulette"
		},
		{
			"name": "Rune",
			"power": "Attune objects on touch. Can telekinetically move attuned objects of up to several tons each.",
			"fromCanon": "Rune"
		},
		{
			"name": "Saltykov",
			"power": "Invert the personalities of anyone in range; they will love what they hate and hate what they love, arguably becoming their own evil twin.",
			"fromCanon": "Saltykov"
		},
		{
			"name": "Sanguine",
			"power": "Blood control. Can draw blood from people, clean it, and put it back in, and create blood clots to cover wounds.",
			"fromCanon": "Sanguine"
		},
		{
			"name": "Satyrical",
			"power": "Shift appearance to that of another person. With time, can split apart into multiple clones with their own shapeshifting abilities.",
			"fromCanon": "Satyrical"
		},
		{
			"name": "Scapegoat",
			"power": "Heal by shifting alternate possibilities into reality, transferring afflictions between self and target.",
			"fromCanon": "Scapegoat"
		},
		{
			"name": "Scion",
			"power": "Stilling; negate any kind of wavelength using golden light. Can be used to disintegrate matter, slow or stop motion, and negate the effects of specific powers.",
			"fromCanon": "Scion"
		},
		{
			"name": "Screamer",
			"power": "Manipulate and hear sound within roughly a mile's radius.",
			"fromCanon": "Screamer"
		},
		{
			"name": "Scroll",
			"power": "Create a cubic space of virtually any size which serves as six interlinked portals. Passage through one side of the portal can transport to the far side.",
			"fromCanon": "Scroll"
		},
		{
			"name": "Scrub",
			"power": "Create uncontrolled spherical holes in surroundings, cutting through anything they hit. Holes are replaced with a corresponding sphere on an alternate Earth.",
			"fromCanon": "Scrub"
		},
		{
			"name": "Seiunsho",
			"power": "Tinker specialization of giant robots with a focus on organization.",
			"fromCanon": "Seiunsho"
		},
		{
			"name": "Sere",
			"power": "Violently draw in moisture from environment, allowing for stunning or killing of targets.",
			"fromCanon": "Sere"
		},
		{
			"name": "Shadow Stalker",
			"power": "Shift self into a lightweight shadow state which allows for passing through walls. Can pass these attributes onto equipment.",
			"fromCanon": "Shadow Stalker"
		},
		{
			"name": "Shamrock",
			"power": "Subtle combination of microtelekinesis and similarly small-scale unconscious clairvoyance. Makes self seem extremely lucky.",
			"fromCanon": "Shamrock"
		},
		{
			"name": "Shatterbird",
			"power": "Manipulate silicon through high-frequency sounds, giving essentially perfect control over all glass, sand, and other siliceous compounds within multiple city blocks.",
			"fromCanon": "Shatterbird"
		},
		{
			"name": "Shén Yù",
			"power": "See incoming attacks through a form of pseudo-clairvoyance in theaters of conflict.",
			"fromCanon": "Shén Yù"
		},
		{
			"name": "Shuffle",
			"power": "Teleport sections of landscape and only landscape, such as hills or even power effects.",
			"fromCanon": "Shuffle"
		},
		{
			"name": "The Siberian",
			"power": "Create a projection unable to be affected by outside forces or abilities. Projection can bestow invulnerability on objects or people in physical contact.",
			"fromCanon": "The Siberian"
		},
		{
			"name": "Silk Road",
			"power": "Create paths of light that boost speed and lessen air resistance.",
			"fromCanon": "Silk Road"
		},
		{
			"name": "The Simurgh",
			"power": "Emit psychic scream that scans surroundings and alters behavior. Gain precognition which improves with use of scream. Telekinesis. Use nearby tinker powers.",
			"fromCanon": "The Simurgh"
		},
		{
			"name": "Skidmark",
			"power": "Create a deflector effect, a type of force field that push things with about as much force as a gusty wind. Can be layered multiple times.",
			"fromCanon": "Skidmark"
		},
		{
			"name": "Skinslip",
			"power": "Manipulate own skin and regenerate. Can extend this ability by flaying people and stitching or stapling their skin to self.",
			"fromCanon": "Skinslip"
		},
		{
			"name": "Skitter",
			"power": "Control and sense bugs and other arthropods in a large radius.",
			"fromCanon": "Skitter"
		},
		{
			"name": "Sleeper",
			"power": "Can subsume large areas. Affected areas appear as a storm of impossible colors.",
			"fromCanon": "Sleeper"
		},
		{
			"name": "Slingstone",
			"power": "Can shoot a single shot at a time of softball sized stones. Stones fly in straight lines at high velocities and are very good at shattering inorganic objects.",
			"fromCanon": "Slingstone"
		},
		{
			"name": "Snaptrap",
			"power": "Create gravity spheres that drag things into center on touch. Can give spheres a shredding or cutting exterior or use the interior to crush things.",
			"fromCanon": "Snaptrap"
		},
		{
			"name": "Snubnose",
			"power": "Generate sparks from skin, emanating in a cone. Sparks, on contact with a surface, imbue with antigravity effect and forcefully ricochet off surfaces already imbued.",
			"fromCanon": "Snubnose"
		},
		{
			"name": "Speaker of the House",
			"power": "Anyone who listens to voice causes energy to build up. Once released, energy stuns and deafens based on how much a given subject has heard. Resets on use.",
			"fromCanon": "Speaker of the House"
		},
		{
			"name": "Spitfire",
			"power": "Spew geysers of a napalm-like liquid chemical from mouth that ignite on contact with air, creating intense flame that can melt concrete, stone, and steel beams.",
			"fromCanon": "Spitfire"
		},
		{
			"name": "Sploosh",
			"power": "Take the form of a living being made out of condensation, drawing all available airborne or liquid moisture to self and reshaping form at will.",
			"fromCanon": "Sploosh"
		},
		{
			"name": "Spree",
			"power": "Produce a large amount of duplicates in a very short amount of time; roughly 15 clones every three seconds. The clones rapidly degrade after their creation.",
			"fromCanon": "Spree"
		},
		{
			"name": "Spruce",
			"power": "Create orbs or projections that have various effects, including disintegration.",
			"fromCanon": "Spruce"
		},
		{
			"name": "Spur",
			"power": "Precognition. Functions best when everyone in the area is at their worst, in the midst of chaos and heightened emotions.",
			"fromCanon": "Spur"
		},
		{
			"name": "Squealer",
			"power": "Tinker specialization of vehicles, with a focus on functionality over form.",
			"fromCanon": "Squealer"
		},
		{
			"name": "Starlet",
			"power": "Fire explosive darts of light.",
			"fromCanon": "Starlet"
		},
		{
			"name": "Stinger",
			"power": "Tinker specialization of propulsion, mainly jetpacks and missiles.",
			"fromCanon": "Stinger"
		},
		{
			"name": "Stormtiger",
			"power": "Aerokinesis. Condense air into hard ‘claws’ useful for close combat or for releasing as explosive blasts. Can draw sounds and smells toward self.",
			"fromCanon": "Stormtiger"
		},
		{
			"name": "Strider",
			"power": "Mass teleporation.",
			"fromCanon": "Strider"
		},
		{
			"name": "String Theory",
			"power": "All tinker tech trees, but a limitation of working on a countdown timer from the moment construction begins. Tech backfires if timer or resources aren't met.",
			"fromCanon": "String Theory"
		},
		{
			"name": "Subject 3016",
			"power": "Manifest body parts from different dimensions, leveraging every possible version of self and drawing them together into coordinated strikes.",
			"fromCanon": "Subject 3016"
		},
		{
			"name": "Sundancer",
			"power": "Create a miniature sun hundreds or thousands of degrees in temperature that can be manipulated at will, even while the orb is out of sight.",
			"fromCanon": "Sundancer"
		},
		{
			"name": "Tattletale",
			"power": "Extrapolate an incredible wealth of inference from the smallest trace of data.",
			"fromCanon": "Tattletale"
		},
		{
			"name": "Teacher",
			"power": "On touch, grant any of a wide array of thinker and tinker powers, with the recipient becoming susceptible to manipulation by self.",
			"fromCanon": "Teacher"
		},
		{
			"name": "Tecton",
			"power": "Tinker specialization of power armor suits. Intuition regarding architecture and geology.",
			"fromCanon": "Tecton"
		},
		{
			"name": "Thirteenth Hour",
			"power": "Cause self and opponents to pass out and fall into a trance in a flash of light. Jarring targets, including self, can wake them.",
			"fromCanon": "Thirteenth Hour"
		},
		{
			"name": "Toggle",
			"power": "Gain five shadowy silhouettes of self. Useful against inorganic threats.",
			"fromCanon": "Toggle"
		},
		{
			"name": "Tohu",
			"power": "Simulate the powers and visages of up to three capes at a time, alive or dead, no matter the distance.",
			"fromCanon": "Tohu"
		},
		{
			"name": "Tomcat",
			"power": "Enhanced durability. Create chainsaw rotations of telekinetic activity around hands.",
			"fromCanon": "Tomcat"
		},
		{
			"name": "Topsy",
			"power": "Alter the direction but not magnitude of gravitational pull on or by self, others, and objects within range.",
			"fromCanon": "Topsy"
		},
		{
			"name": "Toy Soldier",
			"power": "Tinker specialization of extremely large power suits.",
			"fromCanon": "Toy Soldier"
		},
		{
			"name": "Trainwreck",
			"power": "Energy generation, can power constructed devices. Can tinker with scrap and develop something that works surprisingly well from what should be inferior components.",
			"fromCanon": "Trainwreck"
		},
		{
			"name": "Trickster",
			"power": "Swap the locations of two objects with similar mass in line of sight, including self.",
			"fromCanon": "Trickster"
		},
		{
			"name": "Triumph",
			"power": "Mild healing factor and super strength. Can manipulate sound via shouting, controlling force and area of effect of sound blasts.",
			"fromCanon": "Triumph"
		},
		{
			"name": "Tunguska",
			"power": "Create large scale, powerful energy blasts that move at fifteen miles per hour and must be created four or more feet away.",
			"fromCanon": "Tunguska"
		},
		{
			"name": "Über",
			"power": "Gain a high level of skill at any attempted technique.",
			"fromCanon": "Über"
		},
		{
			"name": "Uppercrust",
			"power": "Tinker specialization of large-scale defense systems.",
			"fromCanon": "Uppercrust"
		},
		{
			"name": "Upperhand",
			"power": "Copy the general nature of powers within the vicinity that have any form of 'output', and throw powerful hypergravity spheres with that same output.",
			"fromCanon": "Upperhand"
		},
		{
			"name": "Ursa Aurora",
			"power": "Create animated forcefields in the rough shape of bears that look like ghostly images. Soft upper limit of three creations at a time.",
			"fromCanon": "Ursa Aurora"
		},
		{
			"name": "Usher",
			"power": "Grant single-target power immunity to a single target at range.",
			"fromCanon": "Usher"
		},
		{
			"name": "Valefor",
			"power": "Hypnotic stare that renders anyone who looks stunned and suggestible to commands. Can use on self.",
			"fromCanon": "Valefor"
		},
		{
			"name": "Vantage",
			"power": "Super strength and reflexes that scale up depending on the number of opponents with diminishing returns, as well as a two-to-three-foot teleport.",
			"fromCanon": "Vantage"
		},
		{
			"name": "Vellum",
			"power": "Flay individuals of their skin with a touch, absorbing it. Once skin has been absorbed, gain a permanent increase in own strength and durability.",
			"fromCanon": "Vellum"
		},
		{
			"name": "Velocity",
			"power": "Change states by altering the way time or physics work in relation to self, speeding up at the cost of reduced ability to effect the world.",
			"fromCanon": "Velocity"
		},
		{
			"name": "Velvet",
			"power": "Pink spores of dust accumulate over time in vicinity that act as vector for exerting greater strength, leverage and maneuverability of objects and persons over time.",
			"fromCanon": "Velvet"
		},
		{
			"name": "Vex",
			"power": "Fill empty spaces with hundreds of small, razor-sharp forcefields, with collective, cumulative resistance.",
			"fromCanon": "Vex"
		},
		{
			"name": "Victor",
			"power": "Absorb practical expertise by interacting with individuals. Greater levels of interaction increase breadth and depth of stolen skills.",
			"fromCanon": "Victor"
		},
		{
			"name": "Virago",
			"power": "Short range teleportation and disruption of electromagnetics.",
			"fromCanon": "Virago"
		},
		{
			"name": "Vista",
			"power": "Distort space (stretching, compressing, bending, etc.) by creating a series of events that modify the material. Living creatures interfere with ability.",
			"fromCanon": "Vista"
		},
		{
			"name": "Wanton",
			"power": "Turn into a localized telekinetic whirlwind, picking up debris and other untethered objects and putting them in orbit around a central point within the storm.",
			"fromCanon": "Wanton"
		},
		{
			"name": "Watch",
			"power": "Acute short-range clairvoyance, short-burst superspeed and phantom hands that can reach into people's bodies to do horrible internal damage to organs and/or nerves.",
			"fromCanon": "Watch"
		},
		{
			"name": "Weld",
			"power": "Gain a completely metallic physiology. Can alter shape and composition at will. Involuntarily bond with metal on contact.",
			"fromCanon": "Weld"
		},
		{
			"name": "Whirlygig",
			"power": "Telekinesis limited to a counter-clockwise rotation around self. Can create what is effectively a point-blank telekinetic cyclone around self.",
			"fromCanon": "Whirlygig"
		},
		{
			"name": "Winter",
			"power": "Dampening effect that causes bullets to lose their inertia, heat to seep out of areas, energy attacks to lose their fizzle, and humans to lose their will.",
			"fromCanon": "Winter"
		},
		{
			"name": "Ziggurat",
			"power": "Send out terrain altering pulses. Within scope, raise new buildings, restructure existing ones, or raze structures entirely.",
			"fromCanon": "Ziggurat"
		}
	]
}
var allWorm_serialized = JSON.stringify(allWorm);
localStorage.setItem("allWorm", allWorm_serialized);

//writes the data to the page.
function writeData(){
	//gets localStorage data
	let data = JSON.parse(localStorage.getItem("allWorm"));
	//gets elements to write to
	let ele = document.getElementById("data_from_storage");
	//starts table
	let myTable = "<table class=\"fl-table\"><tr><th>Name</th><th>Power</th><th>From</th><th>Action</th></tr>";
	//loops through data
	for(var i=0; i<data.length; i++){
		//adds new row, starts first column
		myTable += "<tr><td contentEditable>";
		//adds name
		myTable += data[i].name;
		//closes first column, adds second
		myTable += "</td><td contentEditable>";
		//adds power
		myTable += data[i].power;
		//closes second column, adds third
		myTable += "</td><td contentEditable>";
		//adds fromCanon
		myTable += data[i].fromCanon;
		//closes third column, adds fourth
		myTable += "</td><td>";
		//adds deletion button
		myTable += "<button class=\"deleteRowBtn\" onclick='deleteRow(";
		myTable += i;
		myTable += ")'>Delete</button>"
		//adds modify button
		myTable += "<button class=\"editRowBtn\" onclick='editRow(";
		myTable += i;
		myTable += ")'>Save Edit</button>"
		//closes column and row
		myTable += "</td></tr>";
	}
	//closes table
	myTable += "</table>";
	//writes completed table to the div (appends with +=, just = to replace)
	ele.innerHTML = myTable;
}

function deleteRow(rowNum){
	allWorm = JSON.parse(localStorage.getItem("allWorm"));
	allWorm.splice(rowNum, 1);
	allWorm_serialized = JSON.stringify(allWorm);
	localStorage.setItem("allWorm", allWorm_serialized);
	writeData();
}

function editRow(rowNum){
	allWorm = JSON.parse(localStorage.getItem("allWorm"));
	//add 1 for headers index
	var tds = document.querySelectorAll("tr")[rowNum + 1].childNodes;
	allWorm[rowNum].name = tds[0].textContent;
	allWorm[rowNum].power = tds[1].textContent;
	allWorm[rowNum].fromCanon = tds[2].textContent;
	allWorm_serialized = JSON.stringify(allWorm);
	localStorage.setItem("allWorm", allWorm_serialized);
}

function addRow(){
	//needs validation
	let name = document.getElementById("name").value
	let power = document.getElementById("power").value
	let data = JSON.parse(localStorage.getItem("allWorm"))
	data.push({
	"name": name,
	"power": power,
	"fromCanon": name
	},)
	allWorm_serialized = JSON.stringify(data);
	localStorage.setItem("allWorm", allWorm_serialized);
	writeData();
}

function numbersBtn(){
	window.location="https://docs.google.com/document/d/18rWBJFcUYfUkAaFHOeBOLHPBfDUCBbPxTE2TBnbL2mQ/edit?usp=sharing";
}

function ambianceBtn(){
	window.location="https://docs.google.com/document/d/1o5xl_57XFnM5Mw8ugM0zQmhhPjF4QLazPoZpuKDfrdQ/edit?usp=sharing";
}

function empireBtn(){
	window.location="https://docs.google.com/document/d/1YZJA3du3_YoQZezesnJhvvzyEsnN6cHRuzkwa1qYQAk/edit?usp=sharing";
}

function namelessBtn(){
	window.location="https://docs.google.com/document/d/1CErStLorsTNIGj41rOLKHXa70zIqcnfq5o_wzLzGrmY/edit?usp=sharing";
}

//calls table function, can be called through button or other user action
writeData();

document.getElementById("clearDataBtn").addEventListener("click", function(){
	clearData();
});

document.getElementById("shuffleBtn").addEventListener("click", function(){
	shuffle();
});

document.getElementById("downloadBtn").addEventListener("click", function(){
	download();
});

function clearData(){
	localStorage.clear();
	window.location.reload();
}

function download(){
	allWorm = JSON.parse(localStorage.getItem("allWorm"));
	allWorm_serialized = JSON.stringify(allWorm);
	
	//convert string to blob
	allWorm_serialized = [allWorm_serialized];
	var blob1 = new Blob(allWorm_serialized, {type: "text/plain;charset=utf-8"});
	
	var url = window.URL || window.webkitURL;
	link = url.createObjectURL(blob1);
	var a = document.createElement("a");
	a.download = "PowerSwap.txt";
	a.href = link;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function shuffle(){
	//see if box checked for duplicates
	//var samePower = document.getElementById("samePower");
	
	allWorm = JSON.parse(localStorage.getItem("allWorm"));
	
	var currentIndex = allWorm.length, temporaryValue, randomIndex;
	
	//while non-shuffled elements remain
	while(0 !== currentIndex){
		//pick remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
			
		//swap with current element
		temporaryValue = allWorm[currentIndex].power;
		allWorm[currentIndex].power = allWorm[randomIndex].power;
		allWorm[randomIndex].power = temporaryValue;
			
		temporaryValue = allWorm[currentIndex].fromCanon;
		allWorm[currentIndex].fromCanon = allWorm[randomIndex].fromCanon;
		allWorm[randomIndex].fromCanon = temporaryValue;
	}
	/*
	if(samePower.checked == true){
		
	}
	else{
		//while non-shuffled elements remain
		while(0 !== currentIndex){
			//pick remaining element
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			//disallow same power
			while(allWorm[randomIndex].name === allWorm[randomIndex].fromCanon){
				randomIndex = Math.floor(Math.random() * currentIndex);
				break;
			}
			
			//swap with current element
			temporaryValue = allWorm[currentIndex].power;
			allWorm[currentIndex].power = allWorm[randomIndex].power;
			allWorm[randomIndex].power = temporaryValue;
				
			temporaryValue = allWorm[currentIndex].fromCanon;
			allWorm[currentIndex].fromCanon = allWorm[randomIndex].fromCanon;
			allWorm[randomIndex].fromCanon = temporaryValue;
		}
	}
	*/
	allWorm_serialized = JSON.stringify(allWorm);
	localStorage.setItem("allWorm", allWorm_serialized);
	writeData();
}

/*
var newCape = {
	"name": "newCape name.",
	"power": "newCape power."
}
allWorm.push(newCape);
allWorm_serialized = JSON.stringify(allWorm);
localStorage.setItem("allWorm", allWorm_serialized);
allWorm_deserialized = JSON.parse(localStorage.getItem("allWorm"));
console.log(allWorm_deserialized);
*/