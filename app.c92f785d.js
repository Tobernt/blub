(function(e) {
    function t(t) {
        for (var r, l, i = t[0], s = t[1], u = t[2], m = 0, d = []; m < i.length; m++)
            l = i[m],
            Object.prototype.hasOwnProperty.call(n, l) && n[l] && d.push(n[l][0]),
            n[l] = 0;
        for (r in s)
            Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        c && c(t);
        while (d.length)
            d.shift()();
        return o.push.apply(o, u || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], r = !0, i = 1; i < a.length; i++) {
                var s = a[i];
                0 !== n[s] && (r = !1)
            }
            r && (o.splice(t--, 1),
            e = l(l.s = a[0]))
        }
        return e
    }
    var r = {}
      , n = {
        app: 0
    }
      , o = [];
    function l(t) {
        if (r[t])
            return r[t].exports;
        var a = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, l),
        a.l = !0,
        a.exports
    }
    l.m = e,
    l.c = r,
    l.d = function(e, t, a) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(e, t) {
        if (1 & t && (e = l(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (l.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                l.d(a, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return a
    }
    ,
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return l.d(t, "a", t),
        t
    }
    ,
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    l.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || []
      , s = i.push.bind(i);
    i.push = t,
    i = i.slice();
    for (var u = 0; u < i.length; u++)
        t(i[u]);
    var c = s;
    o.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("cd49")
    },
    "0229": function(e, t, a) {
        "use strict";
        a("806d")
    },
    "034f": function(e, t, a) {
        "use strict";
        a("85ec")
    },
    "072f": function(e, t, a) {
        "use strict";
        a("baa5")
    },
    "0ad1": function(e, t, a) {
        "use strict";
        a("c3ef")
    },
    "0d9d": function(e, t, a) {
        "use strict";
        a("741f")
    },
    "0eb9": function(e) {
        e.exports = JSON.parse('{"a":[{"anonymous":false,"inputs":[],"name":"RaidCompleted","type":"event"},{"anonymous":false,"inputs":[],"name":"RaidReset","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"character","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"weapon","type":"uint256"},{"indexed":false,"internalType":"uint24","name":"power","type":"uint24"}],"name":"RaiderJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"wepID","type":"uint256"}],"name":"WeaponWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"charID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"XpReward","type":"event"},{"inputs":[],"name":"getExpectedFinishTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRaiderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"character","type":"uint256"}],"name":"isRaider","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setExpectedFinishTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"gameContract","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"characterID","type":"uint256"},{"internalType":"uint256","name":"weaponID","type":"uint256"}],"name":"addRaider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"completeRaid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"trait","type":"uint8"}],"name":"setBossTrait","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTotalPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"addRewardWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"mintRewardWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"removeRewardWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getWeaponDrops","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"secs","type":"uint64"}],"name":"setStaminaDrainSeconds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getStaminaDrainSeconds","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"}]}')
    },
    1: function(e, t) {},
    10: function(e, t) {},
    "105f": function(e) {
        e.exports = JSON.parse('{"specialsingle":["Shadowfang","Azurewrath","HYPER POLYMAGIK","Forget Me Not","Red Obsidian","Abyssal Shard","Aetherius","Agatha","Alpha","Amnesia","Anduril","Anger\'s Tear","Apocalypse","Armageddon","Arondite","Ashrune","Betrayal","Betrayer","Blackest Heart","Blackout","Poly of a Thousand Cuts","Poly of the Grave","Blazefury","Blazeguard","Blight\'s Plight","Blind Justice","Blinkstrike","Bloodquench","Bloodweep","Broken Promise","Brutality","Cataclysm","Catastrophe","Celeste","Chaos","Cometfell","Convergence","Corruption","Darkheart","Darkness","Dawn","Dawn of Ruins","Dawnbreaker","Deathbringer","Deathraze","Decimation","Desolation","Despair","Destiny\'s Song","Devine","Devourer","Dirge","Divine Light","DoomPoly","Doombringer","Draughtbane","Due Diligence","Early Retirement","Echo","Piece Maker","Eclipse","Endbringer","Epilogue","Espada","Eternal Harmony","Eternal Rest","Extinction","Faithkeeper","Fallen Champion","Fate","Final Achievement","Fleshrender","Florance","Frenzy","Fury","Ghost Reaver","Ghostwalker","Gladius","Glimmer","Godslayer","Grasscutter","Grieving Poly","Gutrender","Hatred\'s Bite","Heartseeker","Heartstriker","Hell\'s Scream","Hellfire","Hellreaver","Hollow Silence","Honor\'s Call","Hope\'s End","Infamy","Interrogator","Justice","Justifier","King\'s Defender","King\'s Legacy","Kinslayer","Kikuichimonji","Klinge","Knight\'s Fall","Knightfall","Lament","Last Rites","Last Words","Lazarus","Life\'s Limit","Lifedrinker","Light\'s Bane","Lightbane","Lightbringer","Lightning","Limbo","Loyalty","Malice","Mangler","Massacre","Mercy","Misery\'s End","Morbid Doom","Morbid Will","MournPoly","Narcoleptic","Needle","Nethersbane","Night\'s Edge","Night\'s Fall","Nightbane","Nightcrackle","Nightfall","Nirvana","Oathbreaker","Oathkeeper","Oblivion","Omega","Orenmir","Peacekeeper","Perfect Storm","Persuasion","Prick","Purifier","Rage","Ragespike","Ragnarok","Reaper","Reaper\'s Toll","Reckoning","Reign of Misery","Remorse","Requiem","Requiem of the Lost","Retirement","Righteous Might","Rigormortis","Savagery","Scalpel","Scar","Seethe","Severance","Shadow Strike","Shadowsteel","Silence","Silencer","Silver Saber","Silverlight","Skullcrusher","Slice of Life","Soul Reaper","SoulPoly","Soulrapier","Spada","Spike","Spineripper","SpitePoly","Stalker","Starshatterer","Sting","Stinger","Storm","Storm Breaker","Stormbringer","Stormcaller","Storm-Weaver","Striker","Sun Strike","Suspension","Swan Song","The Ambassador","The Black Poly","The End","The Facelifter","The Light","The Oculus","The Stake","The Untamed","The Unyielding","The Void","Thorn","Thunder","Toothpick","Tranquility","Treachery","Trinity","Tyrhung","Unending Tyranny","Unholy Might","Valkyrie","Vanquisher","Vengeance","Venom","Venomshank","Warmonger","Widow Maker","Willbreaker","Winterthorn","Wit\'s End","Witherbrand","Wolf","Worldbreaker","Worldslayer"],"prefix":["Massive","Military","Amber-infused","Ancient","Anguish","Annihilation","Antique","Arcane","Arched","Assassination","Atuned","Oathkeeper\'s","Bandit\'s","Baneful","Banished","Barbarian","Barbaric","Battleworn","Blazefury","Blood-infused","Blood-Forged","Bloodcursed","Bloodied","Bloodlord\'s","Bloodsurge","Bloodvenom","Bone-crushing","Bonecarvin","Brutal","Brutality","Burnished","Captain\'s","Cataclysm","Cataclysmic","Cold-Forged","Corroded","Corrupted","Crazed","Crying","Cursed","Curved","Dancing","Decapitating","Defiled","Demonic","Deserted","Desire\'s","Desolation","Destiny\'s","Dire","Doom","Doom\'s","Dragon\'s","Dragonbreath","Ebon","Eerie","Enchanted","Engraved","Eternal","Executing","Exiled","Extinction","Faith\'s","Faithful","Fancy","Fearful","Feral","Fierce","Fiery","Fire-infused","Fireguard","Firesoul","Firestorm","Flaming","Flimsy","Forsaken","Fortune\'s","Fragile","Frail","Frenzied","Frost","Frozen","Furious","Fusion","Ghastly","Ghost-forged","Ghostly","Gladiator","Gladiator\'s","Gleaming","Glinting","Greedy","Grieving","Guard\'s","Guardian\'s","Hailstorm","Hateful","Haunted","Heartless","Hollow","Holy","Honed","Honor\'s","Hope\'s","Hopeless","Howling","Hungering","Improved","Incarnated","Infused","Inherited","Isolated","Jade Infused","Judgement","Knightly","Legionnaire\'s","Liar\'s","Lich","Lightning","Lonely","Loyal","Lustful","Lusting","Mage\'s","Malevolent","Malicious","Malignant","Mended","Mercenary","Misfortune\'s","Misty","Moonlit","Mourning","Nightmare","Ominous","Peacekeeper","Phantom","Polished","Possessed","Pride\'s","Prideful","Primitive","Promised","Protector\'s","Deluded","Proud","Recruit\'s","Reforged","Reincarnated","Relentless","Remorseful","Renewed","Renovated","Replica","Restored","Retribution","Ritual","Roaring","Ruby Infused","Rune-Forged","Rusty","Sailor\'s","Sapphire-infused","Savage","Shadow","Sharpened","Silent","Singed","Singing","Sinister","Skullforge","Skyfall","Smooth","Solitude\'s","Sorrow\'s","Soul","Soul-infused","Soul-Forged","Soulcursed","Soulless","Spectral","Spectral-forged","Spiteful","Storm","Storm-Forged","Stormfury","Stormguard","Terror","Thirsting","Thirsty","Thunder","Thunder-forged","Thunderfury","Thunderguard","Thundersoul","Thunderstorm","Timeworn","Tormented","Trainee\'s","Treachery\'s","Twilight","Twilight\'s","Twisted","Tyrannical","Undead","Unholy","Vengeance","Vengeful","Venom","Vicious","Vindication","Vindictive","Void","Volcanic","Vowed","War-forged","Warlord\'s","Warp","Warped","Whistling","Wicked","Wind\'s","Wind-forged","Windsong","Woeful","Wrathful","Wretched","Yearning","Zealous"],"material":["Adamantite","Bronze","Copper","Diamond","Glass","Gold","Iron","Mithril","Obsidian","Silver","Skeletal","Steel"],"type":["Poly","BroadPolymagic","Claymore","Defender","Deflector","DoomPoly","GreatPolymagic","Guardian","Katana","LongPolymagic","MagePoly","Protector","QuickPoly","Rapier","Reaver","Poly","Polymaxitar","ShortPolymagic","Slicer","SpellPoly","SwiftPoly","Polymagic","WarPoly","Skewer","Carver","Etcher","Sculptor","Razor","Crusader"],"specialtype":["Annihilator","Betrayer","Poly","Blessed Poly","Blood Poly","Bond","Boon","Breaker","Bringer","BroadPolymagic","Butcher","Call","Carver","Champion","Claymore","Conqueror","Crusader","Cry","Cunning","Dark Poly","Dawn","Defender","Defiler","Deflector","Destroyer","DoomPoly","Edge","Ender","Etcher","Executioner","Favor","Ferocity","Foe","Gift","Glory","GreatPolymagic","Guardian","Heirloom","Hope","Incarnation","Jaws","Katana","Last Hope","Last Stand","Legacy","LongPoly","LongPolymagic","MagePoly","Memory","Might","Oath","Pact","Pledge","Promise","Protector","QuickPoly","Rapier","Ravager","Razor","Reach","Reaper","Reaver","Runed Poly","Saber","Poly","Savagery","Polymaxitar","Sculptor","Secret","ShortPolymagic","Skewer","Slayer","Slicer","Soul","SpellPoly","Spine","SwiftPoly","Polymagic","Terror","Token","Tribute","Vengeance","Voice","WarPoly","Warglaive","Whisper","Wit"],"suffix":["of Agony","of Ancient Power","of Anguish","of Ashes","of Assassins","of Black Magic","of Blessed Fortune","of Blessings","of Blight","of Blood","of Bloodlust","of Broken Bones","of Broken Dreams","of Broken Families","of Burdens","of Chaos","of Closing Eyes","of Conquered Worlds","of Corruption","of Cruelty","of Cunning","of Dark Magic","of Dark Souls","of Darkness","of Decay","of Deception","of Degradation","of Delusions","of Denial","of Desecration","of Diligence","of Dismay","of Dragonsouls","of Due Diligence","of Echoes","of Ended Dreams","of Ending Hope","of Ending Misery","of Eternal Bloodlust","of Eternal Damnation","of Eternal Glory","of Eternal Justice","of Eternal Rest","of Eternal Sorrow","of Eternal Struggles","of Eternity","of Executions","of Faded Memories","of Fallen Souls","of Fools","of Frost","of Frozen Hells","of Fury","of Giants","of Giantslaying","of Grace","of Grieving Widows","of Hate","of Hatred","of Hell\'s Games","of Hellish Torment","of Heroes","of Holy Might","of Honor","of Hope","of Horrid Dreams","of Horrors","of Illuminated Dreams","of Illumination","of Immortality","of Inception","of Infinite Trials","of Insanity","of Invocation","of Justice","of Light\'s Hope","of Lost Comrades","of Lost Hope","of Lost Voices","of Lost Worlds","of Magic","of Mercy","of Misery","of Mountains","of Mourning","of Mystery","of Necromancy","of Nightmares","of Oblivion","of Perdition","of Phantoms","of Power","of Pride","of Pride\'s Fall","of Putrefaction","of Reckoning","of Redemption","of Regret","of Riddles","of Secrecy","of Secrets","of Shadow Strikes","of Shadows","of Shifting Sands","of Shifting Worlds","of Silence","of Slaughter","of Souls","of Stealth","of Storms","of Subtlety","of Suffering","of Suffering\'s End","of Summoning","of Terror","of Thunder","of Time-Lost Memories","of Timeless Battles","of Titans","of Torment","of Traitors","of Trembling Hands","of Trials","of Truth","of Twilight\'s End","of Twisted Visions","of Unholy Blight","of Unholy Might","of Vengeance","of Visions","of Wasted Time","of Widows","of Wizardry","of Woe","of Wraiths","of POLYBLADES","of the Ancients","of the Banished","of the Basilisk","of the Beast","of the Blessed","of the Breaking Storm","of the Brotherhood","of the Burning Sun","of the Caged Mind","of the Cataclysm","of the Champion","of the Claw","of the Corrupted","of the Covenant","of the Crown","of the Damned","of the Daywalker","of the Dead","of the Depth","of the Dreadlord","of the Earth","of the East","of the Emperor","of the Empty Void","of the End","of the Enigma","of the Fallen","of the Falling Sky","of the Flame","of the Forest","of the Forgotten","of the Forsaken","of the Gladiator","of the Harvest","of the Immortal","of the Incoming Storm","of the Insane","of the King","of the Lasting Night","of the Leviathan","of the Light","of the Lion","of the Lionheart","of the Lone Victor","of the Lone Wolf","of the Lost","of the Moon","of the Moonwalker","of the Night Sky","of the Night","of the Nightstalker","of the North","of the Occult","of the Oracle","of the Phoenix","of the Plague","of the Prince","of the Protector","of the Queen","of the Serpent","of the Setting Sun","of the Shadows","of the Sky","of the South","of the Stars","of the Storm","of the Summoner","of the Sun","of the Sunwalker","of the Talon","of the Undying","of the Victor","of the Void","of the West","of the Whispers","of the Wicked","of the Wind","of the Wolf","of the World","of the Wretched"],"specialprefix":["Aetherius","Agatha","Alpha","Amnesia","Anduril","Apocalypse","Armageddon","Arondite","Ashrune","Betrayal","Betrayer","Blackout","Blazefury","Blazeguard","Blinkstrike","Bloodquench","Bloodweep","Brutality","Celeste","Chaos","Cometfell","Convergence","Darkheart","Dawn","Dawnbreaker","Deathbringer","Deathraze","Decimation","Desolation","Destiny\'s Song","Dirge","DoomPoly","Doombringer","Draughtbane","Due Diligence","Echo","Eclipse","Endbringer","Epilogue","Espada","Extinction","Faithkeeper","Fate","Fleshrender","Florance","Frenzy","Fury","Ghost Reaver","Ghostwalker","Gladius","Glimmer","Godslayer","Grasscutter","Gutrender","Hatred\'s Bite","Heartseeker","Heartstriker","Hell\'s Scream","Hellfire","Piece Maker","Hellreaver","Honor\'s Call","Hope\'s End","Infamy","Interrogator","Justifier","Kinslayer","Klinge","Knightfall","Lament","Lazarus","Lifedrinker","Light\'s Bane","Lightbane","Lightbringer","Lightning","Limbo","Loyalty","Malice","Mangler","Massacre","Mercy","Misery","MournPoly","Narcoleptic","Needle","Nethersbane","Night\'s Edge","Night\'s Fall","Nightbane","Nightcrackle","Nightfall","Nirvana","Oathbreaker","Oathkeeper","Oblivion","Omega","Orenmir","Peacekeeper","Persuasion","Prick","Purifier","Rage","Ragespike","Ragnarok","Reckoning","Reign","Remorse","Requiem","Retirement","Rigormortis","Savagery","Scalpel","Scar","Seethe","Severance","Shadow Strike","Shadowsteel","Silence","Silencer","Silver Saber","Silverlight","Skullcrusher","Slice of Life","Soul Reaper","SoulPoly","Soulrapier","Spada","Spike","Spineripper","SpitePoly","Stalker","Starshatterer","Sting","Stinger","Storm","Storm Breaker","Stormbringer","Stormcaller","Story-Weaver","Striker","Sun Strike","Suspension","Swan Song","The Ambassador","The Black Poly","The End","The Facelifter","The Light","The Oculus","The Stake","The Untamed","The Unyielding","The Void","Thorn","Thunder","Toothpick","Tranquility","Treachery","Trinity","Tyrhung","Unending Tyranny","Unholy Might","Valkyrie","Vanquisher","Vengeance","Venom","Venomshank","Warmonger","Widow Maker","Willbreaker","Winterthorn","Wit\'s End","Witherbrand","Wolf","Worldbreaker","Worldslayer"]}')
    },
    11: function(e, t) {},
    1182: function(e, t, a) {},
    12: function(e, t) {},
    "12de": function(e) {
        e.exports = JSON.parse('{"a":{}}')
    },
    13: function(e, t) {},
    1314: function(e) {
        e.exports = JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"contract IERC721","name":"nftAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"nftID","type":"uint256"}],"name":"CancelledListing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"contract IERC721","name":"nftAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"nftID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"ListingPriceChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"contract IERC721","name":"nftAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"nftID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"NewListing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"contract IERC721","name":"nftAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"nftID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PurchasedListing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAME_ADMIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultTax","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTokenBanned","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isUserBanned","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"skillToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tax","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_skillToken","type":"address"},{"internalType":"address","name":"_taxRecipient","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Characters","name":"_charactersContract","type":"address"},{"internalType":"contract Weapons","name":"_weaponsContract","type":"address"}],"name":"migrateTo_a98a9ac","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"}],"name":"isTokenAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllowedTokenTypes","outputs":[{"internalType":"contract IERC721[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getSellerOfNftID","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultTaxAsRoundedPercentRoughEstimate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListedTokenTypes","outputs":[{"internalType":"contract IERC721[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"}],"name":"getListingIDs","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint8","name":"_limit","type":"uint8"},{"internalType":"uint256","name":"_pageNumber","type":"uint256"},{"internalType":"uint8","name":"_trait","type":"uint8"},{"internalType":"uint8","name":"_stars","type":"uint8"}],"name":"getWeaponListingIDsPage","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint8","name":"_limit","type":"uint8"},{"internalType":"uint256","name":"_pageNumber","type":"uint256"},{"internalType":"uint8","name":"_trait","type":"uint8"},{"internalType":"uint8","name":"_minLevel","type":"uint8"},{"internalType":"uint8","name":"_maxLevel","type":"uint8"}],"name":"getCharacterListingIDsPage","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_seller","type":"address"}],"name":"getNumberOfListingsBySeller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_seller","type":"address"}],"name":"getListingIDsBySeller","outputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"}],"name":"getNumberOfListingsForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint8","name":"_trait","type":"uint8"},{"internalType":"uint8","name":"_minLevel","type":"uint8"},{"internalType":"uint8","name":"_maxLevel","type":"uint8"}],"name":"getNumberOfCharacterListings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint8","name":"_trait","type":"uint8"},{"internalType":"uint8","name":"_stars","type":"uint8"}],"name":"getNumberOfWeaponListings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getSellerPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getFinalPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getTaxOnListing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addListing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"changeListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"cancelListing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_maxPrice","type":"uint256"}],"name":"purchaseListing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxRecipient","type":"address"}],"name":"setTaxRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int128","name":"_defaultTax","type":"int128"}],"name":"setDefaultTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numerator","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"setDefaultTaxAsRational","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setDefaultTaxAsPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"int128","name":"_newTax","type":"int128"}],"name":"setTaxOnTokenType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_numerator","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"setTaxOnTokenTypeAsRational","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setTaxOnTokenTypeAsPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"to","type":"bool"}],"name":"setUserBan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"}],"name":"allowToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_tokenAddress","type":"address"}],"name":"disallowToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverSkill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"}]}')
    },
    14: function(e, t) {},
    15: function(e, t) {},
    16: function(e, t) {},
    17: function(e, t) {},
    18: function(e, t) {},
    1824: function(e, t, a) {
        e.exports = a.p + "img/earning-potential-sword.d4d15f24.png"
    },
    "18a4": function(e, t, a) {
        "use strict";
        a("5c43")
    },
    19: function(e, t) {},
    "1bd7": function(e, t, a) {},
    "1f0d": function(e, t, a) {},
    2: function(e, t) {},
    20: function(e, t) {},
    21: function(e, t) {},
    "253e": function(e, t, a) {},
    "261b": function(e) {
        e.exports = JSON.parse('{"arm5_Armor5_Belt":{"model":"armor5/Armor5_Belt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_Main":{"model":"armor5/Armor5_Main.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_Pauldron1":{"model":"armor5/Armor5_Pauldron1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_Pauldron2":{"model":"armor5/Armor5_Pauldron2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_Pauldron_Belt":{"model":"armor5/Armor5_Pauldron_Belt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_Pouch_L":{"model":"armor5/Armor5_Pouch_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_Pouch_R":{"model":"armor5/Armor5_Pouch_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_ShoulderL":{"model":"armor5/Armor5_ShoulderL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_ShoulderR":{"model":"armor5/Armor5_ShoulderR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_SleeveL":{"model":"armor5/Armor5_SleeveL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_SleeveR":{"model":"armor5/Armor5_SleeveR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm5_Armor5_Waistwrap":{"model":"armor5/Armor5_Waistwrap.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor5/leather5_leather5_set_AlbedoOpacity.png","normal":"armor5/leather5_leather5_set_Normal.png","ao":null,"spec":"armor5/leather5_leather5_set_MetalAOHeightRough.png"},"arm2_Armor2_Big_Belt":{"model":"armor2/Armor2_Big_Belt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Chest_Fur":{"model":"armor2/Armor2_Chest_Fur.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Gorget":{"model":"armor2/Armor2_Gorget.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Main":{"model":"armor2/Armor2_Main.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Neckbelts":{"model":"armor2/Armor2_Neckbelts.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Pauldron_L1":{"model":"armor2/Armor2_Pauldron_L1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Pauldron_L2":{"model":"armor2/Armor2_Pauldron_L2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Pauldron_LFur":{"model":"armor2/Armor2_Pauldron_LFur.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Pauldron_R1":{"model":"armor2/Armor2_Pauldron_R1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Pauldron_R2":{"model":"armor2/Armor2_Pauldron_R2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Pauldron_RFur":{"model":"armor2/Armor2_Pauldron_RFur.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Tabbard":{"model":"armor2/Armor2_Tabbard.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Tabbard_Belt":{"model":"armor2/Armor2_Tabbard_Belt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Thigh_L1":{"model":"armor2/Armor2_Thigh_L1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Thigh_L1Fur":{"model":"armor2/Armor2_Thigh_L1Fur.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Thigh_L2":{"model":"armor2/Armor2_Thigh_L2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Thigh_L2Fur":{"model":"armor2/Armor2_Thigh_L2Fur.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Thigh_R1":{"model":"armor2/Armor2_Thigh_R1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Thigh_R1Fur":{"model":"armor2/Armor2_Thigh_R1Fur.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Thigh_R2":{"model":"armor2/Armor2_Thigh_R2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"arm2_Armor2_Thigh_R2Fur":{"model":"armor2/Armor2_Thigh_R2Fur.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Waist_FurMain":{"model":"armor2/Armor2_Waist_FurMain.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Waist_FurWrap":{"model":"armor2/Armor2_Waist_FurWrap.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_fur_set_AlbedoOpacity.png","normal":"armor2/Leather2_fur_set_Normal.png","ao":null,"spec":"armor2/Leather2_fur_set_MetalAOHeightRough.png"},"arm2_Armor2_Waistwrap":{"model":"armor2/Armor2_Waistwrap.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor2/Leather2_leather2_set_AlbedoOpacity.png","normal":"armor2/Leather2_leather2_set_Normal.png","ao":null,"spec":"armor2/Leather2_leather2_set_MetalAOHeightRough.png"},"hair_ElfHairLong":{"model":null,"maleModel":"hair/MaleElfHairLong.FBX","femaleModel":"hair/ElfHairLong.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_ElfHairLongBarbute":{"model":null,"maleModel":"hair/ElfHairLongBarbute.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_ElfHairShort":{"model":null,"maleModel":"hair/ElfHairShort.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_HumanMaleHairBuzz":{"model":null,"maleModel":"hair/HumanMaleHairBuzz.FBX","femaleModel":null,"color":"A18731FF","albedo":"hair/Hair_Buzz_diff.png","normal":"hair/Hair_Buzz_normals.png","ao":null,"spec":"hair/Hair_Buzz_spec.png"},"hair_HumanMaleHairLong":{"model":null,"maleModel":"hair/HumanMaleHairLong.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_HumanMaleHairShort":{"model":null,"maleModel":"hair/MaleHairShort.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_MaleElfHairLong":{"model":null,"maleModel":"hair/MaleElfHairLong.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_MaleHairShort":{"model":null,"maleModel":"hair/MaleHairShort.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_OrcMaleHairHood":{"model":null,"maleModel":"hair/OrcMaleHairHood.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_OrcMaleHairLong":{"model":null,"maleModel":"hair/OrcMaleHairLong.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_OrcMaleHairPonytail":{"model":null,"maleModel":"hair/OrcMaleHairPonytail.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_OrcMaleHairShort":{"model":null,"maleModel":"hair/OrcMaleHairShort.FBX","femaleModel":null,"color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"arm10_Armor10ArmwrapLeft":{"model":"armor10/Armor10ArmwrapLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10ArmwrapRight":{"model":"armor10/Armor10ArmwrapRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10BesagewLeft":{"model":"armor10/Armor10BesagewLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10BesagewRight":{"model":"armor10/Armor10BesagewRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10CouterLeft":{"model":"armor10/Armor10CouterLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10CouterRight":{"model":"armor10/Armor10CouterRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10CuisseLeft":{"model":"armor10/Armor10CuisseLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5C_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5C_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5C_mat_MetalAOHeightRough.png"},"arm10_Armor10CuisseRight":{"model":"armor10/Armor10CuisseRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5C_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5C_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5C_mat_MetalAOHeightRough.png"},"arm10_Armor10Curiass":{"model":"armor10/Armor10Curiass.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5B_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5B_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5B_mat_MetalAOHeightRough.png"},"arm10_Armor10Faulds":{"model":"armor10/Armor10Faulds.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5C_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5C_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5C_mat_MetalAOHeightRough.png"},"arm10_Armor10GauntletLeft":{"model":"armor10/Armor10GauntletLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavygauntlets_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavygauntlets_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavygauntlets_mat_MetalAOHeightRough.png"},"arm10_Armor10GauntletRight":{"model":"armor10/Armor10GauntletRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavygauntlets_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavygauntlets_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavygauntlets_mat_MetalAOHeightRough.png"},"arm10_Armor10GreaveLeft":{"model":"armor10/Armor10GreaveLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavyboots_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavyboots_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavyboots_mat_MetalAOHeightRough.png"},"arm10_Armor10GreaveRight":{"model":"armor10/Armor10GreaveRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavyboots_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavyboots_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavyboots_mat_MetalAOHeightRough.png"},"arm10_Armor10Helmet":{"model":"armor10/Armor10Helmet.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavyhelmet_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavyhelmet_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavyhelmet_mat_MetalAOHeightRough.png"},"arm10_Armor10KneewrapLeft":{"model":"armor10/Armor10KneewrapLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5C_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5C_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5C_mat_MetalAOHeightRough.png"},"arm10_Armor10KneewrapRight":{"model":"armor10/Armor10KneewrapRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5C_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5C_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5C_mat_MetalAOHeightRough.png"},"arm10_Armor10PauldronLeft":{"model":"armor10/Armor10PauldronLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10PauldronRight":{"model":"armor10/Armor10PauldronRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10PauldronStrapLeft":{"model":"armor10/Armor10PauldronStrapLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10PauldronStrapRight":{"model":"armor10/Armor10PauldronStrapRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_Armor10PoleynLeft":{"model":"armor10/Armor10PoleynLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavyboots_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavyboots_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavyboots_mat_MetalAOHeightRough.png"},"arm10_Armor10PoleynRight":{"model":"armor10/Armor10PoleynRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavyboots_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavyboots_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavyboots_mat_MetalAOHeightRough.png"},"arm10_Armor10SabatonLeft":{"model":"armor10/Armor10SabatonLeft.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavyboots_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavyboots_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavyboots_mat_MetalAOHeightRough.png"},"arm10_Armor10SabatonRight":{"model":"armor10/Armor10SabatonRight.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_heavyboots_mat_AlbedoHeight.png","normal":"armor10/Armor10A_heavyboots_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_heavyboots_mat_MetalAOHeightRough.png"},"arm10_Armor10Sleeves":{"model":"armor10/Armor10Sleeves.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor10A_platearmor5A_mat_AlbedoHeight.png","normal":"armor10/Armor10A_platearmor5A_mat_Normal.png","ao":null,"spec":"armor10/Armor10A_platearmor5A_mat_MetalAOHeightRough.png"},"arm10_UniversalTrousers":{"model":"armor10/UniversalTrousers.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor6A_TrousersSG1_AlbedoHeight.png","normal":"armor10/Armor6A_TrousersSG1_Normal.png","ao":null,"spec":"armor10/Armor6A_TrousersSG1_MetalAOHeightRough.png"},"arm10_UniversalCollar":{"model":"armor10/UniversalCollar.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor10/Armor6A_UniversalCollar_mat_AlbedoHeight.png","normal":"armor10/Armor6A_UniversalCollar_mat_Normal.png","ao":null,"spec":"armor10/Armor6A_UniversalCollar_mat_MetalAOHeightRough.png"},"arm4_Armor4_Main":{"model":"armor4/Armor4_Main.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor4/Leather4_leather4_set_AlbedoOpacity.png","normal":"armor4/Leather4_leather4_set_Normal.png","ao":null,"spec":"armor4/Leather4_leather4_set_MetalAOHeightRough.png"},"arm4_Armor4_Padding_Lower":{"model":"armor4/Armor4_Padding_Lower.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor4/Leather4_leather4_set_AlbedoOpacity.png","normal":"armor4/Leather4_leather4_set_Normal.png","ao":null,"spec":"armor4/Leather4_leather4_set_MetalAOHeightRough.png"},"arm4_Armor4_Padding_Mid":{"model":"armor4/Armor4_Padding_Mid.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor4/Leather4_leather4_set_AlbedoOpacity.png","normal":"armor4/Leather4_leather4_set_Normal.png","ao":null,"spec":"armor4/Leather4_leather4_set_MetalAOHeightRough.png"},"arm4_Armor4_Padding_Shoulder_L":{"model":"armor4/Armor4_Padding_Shoulder_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor4/Leather4_leather4_set_AlbedoOpacity.png","normal":"armor4/Leather4_leather4_set_Normal.png","ao":null,"spec":"armor4/Leather4_leather4_set_MetalAOHeightRough.png"},"arm4_Armor4_Padding_Shoulder_R":{"model":"armor4/Armor4_Padding_Shoulder_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor4/Leather4_leather4_set_AlbedoOpacity.png","normal":"armor4/Leather4_leather4_set_Normal.png","ao":null,"spec":"armor4/Leather4_leather4_set_MetalAOHeightRough.png"},"arm4_Armor4_Padding_Upper":{"model":"armor4/Armor4_Padding_Upper.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor4/Leather4_leather4_set_AlbedoOpacity.png","normal":"armor4/Leather4_leather4_set_Normal.png","ao":null,"spec":"armor4/Leather4_leather4_set_MetalAOHeightRough.png"},"arm4_Armor4_Stitches":{"model":"armor4/Armor4_Stitches.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor4/Leather4_leather4_set_AlbedoOpacity.png","normal":"armor4/Leather4_leather4_set_Normal.png","ao":null,"spec":"armor4/Leather4_leather4_set_MetalAOHeightRough.png"},"hair_ElfHairLongHooded":{"model":null,"maleModel":null,"femaleModel":"hair/ElfHairLongHooded.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_ElfHairPonytail":{"model":null,"maleModel":null,"femaleModel":"hair/ElfHairPonytail.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_ElfHairPonytailHooded":{"model":null,"maleModel":null,"femaleModel":"hair/ElfHairPonytailHooded.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_HumanHairLong":{"model":null,"maleModel":null,"femaleModel":"hair/HumanHairLong.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_HumanHairShort":{"model":null,"maleModel":null,"femaleModel":"hair/HumanHairShort.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_OrcHairLong":{"model":null,"maleModel":null,"femaleModel":"hair/OrcHairLong.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_OrcHairPonytail":{"model":null,"maleModel":null,"femaleModel":"hair/OrcHairPonytail.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"hair_OrcHairShort":{"model":null,"maleModel":null,"femaleModel":"hair/OrcHairShort.FBX","color":"652F14FF","albedo":"hair/Clumps1_color_w-alpha_03.png","normal":"hair/Clumps1_normal.png","ao":null,"spec":null},"arm6_Armor6Belt":{"model":"armor6/Armor6Belt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1b_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1b_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1b_mat_MetalAOHeightRough.png"},"arm6_Armor6CouterL":{"model":"armor6/Armor6CouterL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6CouterR":{"model":"armor6/Armor6CouterR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6CrusaderHelmet":{"model":"armor6/Armor6CrusaderHelmet.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_CrusaderHelm_mat_AlbedoHeight.png","normal":"armor6/Armor6A_CrusaderHelm_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_CrusaderHelm_mat_MetalAOHeightRough.png"},"arm6_Armor6Curiass":{"model":"armor6/Armor6Curiass.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1b_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1b_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1b_mat_MetalAOHeightRough.png"},"arm6_Armor6Faulds":{"model":"armor6/Armor6Faulds.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1b_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1b_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1b_mat_MetalAOHeightRough.png"},"arm6_Armor6PauldronL":{"model":"armor6/Armor6PauldronL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6PauldronR":{"model":"armor6/Armor6PauldronR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6PauldronStrapsL":{"model":"armor6/Armor6PauldronStrapsL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6PauldronStrapsR":{"model":"armor6/Armor6PauldronStrapsR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6PoleynL":{"model":"armor6/Armor6PoleynL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6PoleynR":{"model":"armor6/Armor6PoleynR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6RerebraceL":{"model":"armor6/Armor6RerebraceL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6RerebraceR":{"model":"armor6/Armor6RerebraceR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6Skirt":{"model":"armor6/Armor6Skirt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1b_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1b_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1b_mat_MetalAOHeightRough.png"},"arm6_Armor6Sleeves":{"model":"armor6/Armor6Sleeves.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6StandardBootL":{"model":"armor6/Armor6StandardBootL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_StandardBoot_mat_AlbedoHeight.png","normal":"armor6/Armor6A_StandardBoot_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_StandardBoot_mat_MetalAOHeightRough.png"},"arm6_Armor6StandardBootR":{"model":"armor6/Armor6StandardBootR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_StandardBoot_mat_AlbedoHeight.png","normal":"armor6/Armor6A_StandardBoot_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_StandardBoot_mat_MetalAOHeightRough.png"},"arm6_Armor6StandardGauntletL":{"model":"armor6/Armor6StandardGauntletL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_StandardGauntlet_mat_AlbedoHeight.png","normal":"armor6/Armor6A_StandardGauntlet_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_StandardGauntlet_mat_MetalAOHeightRough.png"},"arm6_Armor6StandardGauntletR":{"model":"armor6/Armor6StandardGauntletR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_StandardGauntlet_mat_AlbedoHeight.png","normal":"armor6/Armor6A_StandardGauntlet_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_StandardGauntlet_mat_MetalAOHeightRough.png"},"arm6_Armor6VambraceL":{"model":"armor6/Armor6VambraceL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_Armor6VambraceR":{"model":"armor6/Armor6VambraceR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_PlateArmor1a_mat_AlbedoHeight.png","normal":"armor6/Armor6A_PlateArmor1a_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_PlateArmor1a_mat_MetalAOHeightRough.png"},"arm6_UniversalCollar":{"model":"armor6/UniversalCollar.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_UniversalCollar_mat_AlbedoHeight.png","normal":"armor6/Armor6A_UniversalCollar_mat_Normal.png","ao":null,"spec":"armor6/Armor6A_UniversalCollar_mat_MetalAOHeightRough.png"},"arm6_UniversalTrousers":{"model":"armor6/UniversalTrousers.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor6/Armor6A_TrousersSG1_AlbedoHeight.png","normal":"armor6/Armor6A_TrousersSG1_Normal.png","ao":null,"spec":"armor6/Armor6A_TrousersSG1_MetalAOHeightRough.png"},"arm7_Armor7Curiass":{"model":"armor7/Armor7Curiass.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2b_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2b_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2b_mat_MetalAOHeightRough.png"},"arm7_Armor7CuriassWings":{"model":"armor7/Armor7CuriassWings.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2b_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2b_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2b_mat_MetalAOHeightRough.png"},"arm7_Armor7ElvenBootL":{"model":"armor7/Armor7ElvenBootL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_elvenboots_mat_AlbedoHeight.png","normal":"armor7/Armor7A_elvenboots_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_elvenboots_mat_MetalAOHeightRough.png"},"arm7_Armor7ElvenBootR":{"model":"armor7/Armor7ElvenBootR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_elvenboots_mat_AlbedoHeight.png","normal":"armor7/Armor7A_elvenboots_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_elvenboots_mat_MetalAOHeightRough.png"},"arm7_Armor7ElvenGauntletL":{"model":"armor7/Armor7ElvenGauntletL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_elvengauntlet_mat_AlbedoHeight.png","normal":"armor7/Armor7A_elvengauntlet_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_elvengauntlet_mat_MetalAOHeightRough.png"},"arm7_Armor7ElvenGauntletR":{"model":"armor7/Armor7ElvenGauntletR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_elvengauntlet_mat_AlbedoHeight.png","normal":"armor7/Armor7A_elvengauntlet_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_elvengauntlet_mat_MetalAOHeightRough.png"},"arm7_Armor7Faulds":{"model":"armor7/Armor7Faulds.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2a_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2a_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2a_mat_MetalAOHeightRough.png"},"arm7_Armor7LeatherVest":{"model":"armor7/Armor7LeatherVest.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2a_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2a_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2a_mat_MetalAOHeightRough.png"},"arm7_Armor7PauldronL":{"model":"armor7/Armor7PauldronL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2b_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2b_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2b_mat_MetalAOHeightRough.png"},"arm7_Armor7PauldronR":{"model":"armor7/Armor7PauldronR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2b_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2b_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2b_mat_MetalAOHeightRough.png"},"arm7_Armor7PoleynL":{"model":"armor7/Armor7PoleynL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2a_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2a_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2a_mat_MetalAOHeightRough.png"},"arm7_Armor7PoleynR":{"model":"armor7/Armor7PoleynR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2a_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2a_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2a_mat_MetalAOHeightRough.png"},"arm7_Armor7Sleeves":{"model":"armor7/Armor7Sleeves.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor7A_platearmor2b_mat_AlbedoHeight.png","normal":"armor7/Armor7A_platearmor2b_mat_Normal.png","ao":null,"spec":"armor7/Armor7A_platearmor2b_mat_MetalAOHeightRough.png"},"arm7_UniversalTrousers":{"model":"armor7/UniversalTrousers.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor6A_TrousersSG1_AlbedoHeight.png","normal":"armor7/Armor6A_TrousersSG1_Normal.png","ao":null,"spec":"armor7/Armor6A_TrousersSG1_MetalAOHeightRough.png"},"arm7_UniversalCollar":{"model":"armor7/UniversalCollar.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor7/Armor6A_UniversalCollar_mat_AlbedoHeight.png","normal":"armor7/Armor6A_UniversalCollar_mat_Normal.png","ao":null,"spec":"armor7/Armor6A_UniversalCollar_mat_MetalAOHeightRough.png"},"arm8_Armor8CouterL":{"model":"armor8/Armor8CouterL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3a_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3a_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3a_mat_MetalAOHeightRough.png"},"arm8_Armor8CouterR":{"model":"armor8/Armor8CouterR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3a_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3a_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3a_mat_MetalAOHeightRough.png"},"arm8_Armor8Curiass":{"model":"armor8/Armor8Curiass.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3b_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3b_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3b_mat_MetalAOHeightRough.png"},"arm8_Armor8Faulds":{"model":"armor8/Armor8Faulds.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3a_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3a_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3a_mat_MetalAOHeightRough.png"},"arm8_Armor8KneewrapL":{"model":"armor8/Armor8KneewrapL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3a_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3a_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3a_mat_MetalAOHeightRough.png"},"arm8_Armor8KneewrapR":{"model":"armor8/Armor8KneewrapR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3a_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3a_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3a_mat_MetalAOHeightRough.png"},"arm8_Armor8PaladinBootL":{"model":"armor8/Armor8PaladinBootL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_paladinboots_mat_AlbedoHeight.png","normal":"armor8/Armor8A_paladinboots_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_paladinboots_mat_MetalAOHeightRough.png"},"arm8_Armor8PaladinBootR":{"model":"armor8/Armor8PaladinBootR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_paladinboots_mat_AlbedoHeight.png","normal":"armor8/Armor8A_paladinboots_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_paladinboots_mat_MetalAOHeightRough.png"},"arm8_Armor8PaladinGauntletL":{"model":"armor8/Armor8PaladinGauntletL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_paladingauntlets_mat_AlbedoHeight.png","normal":"armor8/Armor8A_paladingauntlets_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_paladingauntlets_mat_MetalAOHeightRough.png"},"arm8_Armor8PaladinGauntletR":{"model":"armor8/Armor8PaladinGauntletR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_paladingauntlets_mat_AlbedoHeight.png","normal":"armor8/Armor8A_paladingauntlets_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_paladingauntlets_mat_MetalAOHeightRough.png"},"arm8_Armor8PaladinHelmet":{"model":"armor8/Armor8PaladinHelmet.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_paladinhelm_mat_AlbedoHeight.png","normal":"armor8/Armor8A_paladinhelm_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_paladinhelm_mat_MetalAOHeightRough.png"},"arm8_Armor8PauldronL":{"model":"armor8/Armor8PauldronL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3b_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3b_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3b_mat_MetalAOHeightRough.png"},"arm8_Armor8PauldronR":{"model":"armor8/Armor8PauldronR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3b_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3b_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3b_mat_MetalAOHeightRough.png"},"arm8_Armor8PoleynL":{"model":"armor8/Armor8PoleynL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3a_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3a_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3a_mat_MetalAOHeightRough.png"},"arm8_Armor8PoleynR":{"model":"armor8/Armor8PoleynR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3a_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3a_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3a_mat_MetalAOHeightRough.png"},"arm8_Armor8Sleeves":{"model":"armor8/Armor8Sleeves.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3a_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3a_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3a_mat_MetalAOHeightRough.png"},"arm8_Armor8Waistwrap":{"model":"armor8/Armor8Waistwrap.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor8A_platearmor3b_mat_AlbedoHeight.png","normal":"armor8/Armor8A_platearmor3b_mat_Normal.png","ao":null,"spec":"armor8/Armor8A_platearmor3b_mat_MetalAOHeightRough.png"},"arm8_UniversalTrousers":{"model":"armor8/UniversalTrousers.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor6A_TrousersSG1_AlbedoHeight.png","normal":"armor8/Armor6A_TrousersSG1_Normal.png","ao":null,"spec":"armor8/Armor6A_TrousersSG1_MetalAOHeightRough.png"},"arm8_UniversalCollar":{"model":"armor8/UniversalCollar.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor8/Armor6A_UniversalCollar_mat_AlbedoHeight.png","normal":"armor8/Armor6A_UniversalCollar_mat_Normal.png","ao":null,"spec":"armor8/Armor6A_UniversalCollar_mat_MetalAOHeightRough.png"},"humwar_Armband_L":{"model":null,"maleModel":"humanWardrobe/Armband_L.FBX","femaleModel":"humanWardrobe/F_Armband_L.FBX","color":null,"albedo":"humanWardrobe/Couter_albedoOpacity.png","normal":"humanWardrobe/Couter_normal.png","ao":"humanWardrobe/Couter_ambientOcclusion.png","spec":"humanWardrobe/Couter_metallicRoughness.png"},"humwar_Armband_R":{"model":null,"maleModel":"humanWardrobe/Armband_R.FBX","femaleModel":"humanWardrobe/F_Armband_R.FBX","color":null,"albedo":"humanWardrobe/Couter_albedoOpacity.png","normal":"humanWardrobe/Couter_normal.png","ao":"humanWardrobe/Couter_ambientOcclusion.png","spec":"humanWardrobe/Couter_metallicRoughness.png"},"humwar_Barbute":{"model":null,"maleModel":"humanWardrobe/Barbute.FBX","femaleModel":"humanWardrobe/F_Barbute.FBX","color":null,"albedo":"humanWardrobe/Barbute_albedoOpacity.png","normal":"humanWardrobe/Barbute_normal.png","ao":"humanWardrobe/Barbute_ambientOcclusion.png","spec":"humanWardrobe/Barbute_metallicRoughness.png"},"humwar_Belt_Sheathe":{"model":null,"maleModel":"humanWardrobe/Belt_Sheathe.FBX","femaleModel":"humanWardrobe/F_Belt_Sheathe.FBX","color":null,"albedo":"humanWardrobe/Faulds_albedoOpacity.png","normal":"humanWardrobe/Faulds_normal.png","ao":"humanWardrobe/Faulds_ambientOcclusion.png","spec":"humanWardrobe/Faulds_metallicRoughness.png"},"humwar_Boot_Flaps_Left":{"model":null,"maleModel":"humanWardrobe/Boot_Flaps_Left.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Boot_Flaps_Right":{"model":null,"maleModel":"humanWardrobe/Boot_Flaps_Right.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Boot_Left":{"model":null,"maleModel":"humanWardrobe/Boot_Left.FBX","femaleModel":"humanWardrobe/F_Boot_L.FBX","color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Boot_Right":{"model":null,"maleModel":"humanWardrobe/Boot_Right.FBX","femaleModel":"humanWardrobe/F_Boot_R.FBX","color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Bracer_L":{"model":null,"maleModel":"humanWardrobe/Bracer_L.FBX","femaleModel":"humanWardrobe/F_Bracer_L.FBX","color":null,"albedo":"humanWardrobe/Bracers_albedoOpacity.png","normal":"humanWardrobe/Bracers_normal.png","ao":"humanWardrobe/Bracers_ambientOcclusion.png","spec":"humanWardrobe/Bracers_metallicRoughness.png"},"humwar_Bracer_R":{"model":null,"maleModel":"humanWardrobe/Bracer_R.FBX","femaleModel":"humanWardrobe/F_Bracer_R.FBX","color":null,"albedo":"humanWardrobe/Bracers_albedoOpacity.png","normal":"humanWardrobe/Bracers_normal.png","ao":"humanWardrobe/Bracers_ambientOcclusion.png","spec":"humanWardrobe/Bracers_metallicRoughness.png"},"humwar_Cloth_Tasset":{"model":null,"maleModel":"humanWardrobe/Cloth_Tasset.FBX","femaleModel":"humanWardrobe/F_Cloth_Tasset.FBX","color":null,"albedo":"humanWardrobe/Skirt_albedoOpacity.png","normal":"humanWardrobe/Skirt_normal.png","ao":"humanWardrobe/Skirt_ambientOcclusion.png","spec":"humanWardrobe/Skirt_metallicRoughness.png"},"humwar_Couter_L":{"model":null,"maleModel":"humanWardrobe/Couter_L.FBX","femaleModel":"humanWardrobe/F_Couter_L.FBX","color":null,"albedo":"humanWardrobe/Couter_albedoOpacity.png","normal":"humanWardrobe/Couter_normal.png","ao":"humanWardrobe/Couter_ambientOcclusion.png","spec":"humanWardrobe/Couter_metallicRoughness.png"},"humwar_Couter_R":{"model":null,"maleModel":"humanWardrobe/Couter_R.FBX","femaleModel":"humanWardrobe/F_Couter_R.FBX","color":null,"albedo":"humanWardrobe/Couter_albedoOpacity.png","normal":"humanWardrobe/Couter_normal.png","ao":"humanWardrobe/Couter_ambientOcclusion.png","spec":"humanWardrobe/Couter_metallicRoughness.png"},"humwar_DaggerMesh":{"model":null,"maleModel":"humanWardrobe/Dagger.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Dagger_albedoOpacity.png","normal":"humanWardrobe/Dagger_normal.png","ao":"humanWardrobe/Dagger_ambientOcclusion.png","spec":"humanWardrobe/Dagger_metallicRoughness.png"},"humwar_Dagger_Pouch":{"model":null,"maleModel":"humanWardrobe/Dagger_Pouch.FBX","femaleModel":"humanWardrobe/F_Dagger_Pouch.FBX","color":null,"albedo":"humanWardrobe/Dagger_albedoOpacity.png","normal":"humanWardrobe/Dagger_normal.png","ao":"humanWardrobe/Dagger_ambientOcclusion.png","spec":"humanWardrobe/Dagger_metallicRoughness.png"},"humwar_Faulds":{"model":null,"maleModel":"humanWardrobe/Faulds.FBX","femaleModel":"humanWardrobe/F_Faulds.FBX","color":null,"albedo":"humanWardrobe/Faulds_albedoOpacity.png","normal":"humanWardrobe/Faulds_normal.png","ao":"humanWardrobe/Faulds_ambientOcclusion.png","spec":"humanWardrobe/Faulds_metallicRoughness.png"},"humwar_Gauntlet_L":{"model":null,"maleModel":"humanWardrobe/Gauntlet_L.FBX","femaleModel":"humanWardrobe/F_Gauntlet_L.FBX","color":null,"albedo":"humanWardrobe/Gauntlet_albedoOpacity.png","normal":"humanWardrobe/Gauntlet_normal.png","ao":"humanWardrobe/Gauntlet_ambientOcclusion.png","spec":"humanWardrobe/Gauntlet_metallicRoughness.png"},"humwar_Gauntlet_R":{"model":null,"maleModel":"humanWardrobe/Gauntlet_R.FBX","femaleModel":"humanWardrobe/F_Gauntlet_R.FBX","color":null,"albedo":"humanWardrobe/Gauntlet_albedoOpacity.png","normal":"humanWardrobe/Gauntlet_normal.png","ao":"humanWardrobe/Gauntlet_ambientOcclusion.png","spec":"humanWardrobe/Gauntlet_metallicRoughness.png"},"humwar_Gladiator_Belt":{"model":null,"maleModel":"humanWardrobe/Gladiator_Belt.FBX","femaleModel":"humanWardrobe/F_Gladiator_Belt.FBX","color":null,"albedo":"humanWardrobe/Gladiator_Belt_albedoOpacity.png","normal":"humanWardrobe/Gladiator_Belt_normal.png","ao":"humanWardrobe/Gladiator_Belt_ambientOcclusion.png","spec":"humanWardrobe/Gladiator_Belt_metallicRoughness.png"},"humwar_Glove_L":{"model":null,"maleModel":"humanWardrobe/Glove_L.FBX","femaleModel":"humanWardrobe/F_Glove_L.FBX","color":null,"albedo":"humanWardrobe/Gauntlet_albedoOpacity.png","normal":"humanWardrobe/Gauntlet_normal.png","ao":"humanWardrobe/Gauntlet_ambientOcclusion.png","spec":"humanWardrobe/Gauntlet_metallicRoughness.png"},"humwar_Glove_R":{"model":null,"maleModel":"humanWardrobe/Glove_R.FBX","femaleModel":"humanWardrobe/F_Glove_R.FBX","color":null,"albedo":"humanWardrobe/Gauntlet_albedoOpacity.png","normal":"humanWardrobe/Gauntlet_normal.png","ao":"humanWardrobe/Gauntlet_ambientOcclusion.png","spec":"humanWardrobe/Gauntlet_metallicRoughness.png"},"humwar_Kneepad_Left":{"model":null,"maleModel":"humanWardrobe/Kneepad_Left.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Poleyn_albedoOpacity.png","normal":"humanWardrobe/Poleyn_normal.png","ao":"humanWardrobe/Poleyn_ambientOcclusion.png","spec":"humanWardrobe/Poleyn_metallicRoughness.png"},"humwar_Kneepad_Right":{"model":null,"maleModel":"humanWardrobe/Kneepad_Right.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Poleyn_albedoOpacity.png","normal":"humanWardrobe/Poleyn_normal.png","ao":"humanWardrobe/Poleyn_ambientOcclusion.png","spec":"humanWardrobe/Poleyn_metallicRoughness.png"},"humwar_Loincloth":{"model":null,"maleModel":"humanWardrobe/Loincloth.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Loincloth_albedoOpacity.png","normal":"humanWardrobe/Loincloth_normal.png","ao":"humanWardrobe/Loincloth_ambientOcclusion.png","spec":"humanWardrobe/Loincloth_metallicRoughness.png"},"humwar_Loincloth_Under":{"model":null,"maleModel":"humanWardrobe/Loincloth_Under.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Loincloth_albedoOpacity.png","normal":"humanWardrobe/Loincloth_normal.png","ao":"humanWardrobe/Loincloth_ambientOcclusion.png","spec":"humanWardrobe/Loincloth_metallicRoughness.png"},"humwar_Manica":{"model":null,"maleModel":"humanWardrobe/Manica.FBX","femaleModel":"humanWardrobe/F_Manica.FBX","color":null,"albedo":"humanWardrobe/Manica_albedoOpacity.png","normal":"humanWardrobe/Manica_normal.png","ao":"humanWardrobe/Manica_ambientOcclusion.png","spec":"humanWardrobe/Manica_metallicRoughness.png"},"humwar_Pauldron_L":{"model":null,"maleModel":"humanWardrobe/Pauldron_L.FBX","femaleModel":"humanWardrobe/F_Pauldron_L.FBX","color":null,"albedo":"humanWardrobe/Pauldron_albedoOpacity.png","normal":"humanWardrobe/Pauldron_normal.png","ao":"humanWardrobe/Pauldron_ambientOcclusion.png","spec":"humanWardrobe/Pauldron_metallicRoughness.png"},"humwar_Pauldron_R":{"model":null,"maleModel":"humanWardrobe/Pauldron_R.FBX","femaleModel":"humanWardrobe/F_Pauldron_R.FBX","color":null,"albedo":"humanWardrobe/Pauldron_albedoOpacity.png","normal":"humanWardrobe/Pauldron_normal.png","ao":"humanWardrobe/Pauldron_ambientOcclusion.png","spec":"humanWardrobe/Pauldron_metallicRoughness.png"},"humwar_Poleyn_Left":{"model":null,"maleModel":"humanWardrobe/Poleyn_Left.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Poleyn_albedoOpacity.png","normal":"humanWardrobe/Poleyn_normal.png","ao":"humanWardrobe/Poleyn_ambientOcclusion.png","spec":"humanWardrobe/Poleyn_metallicRoughness.png"},"humwar_Poleyn_Right":{"model":null,"maleModel":"humanWardrobe/Poleyn_Right.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Poleyn_albedoOpacity.png","normal":"humanWardrobe/Poleyn_normal.png","ao":"humanWardrobe/Poleyn_ambientOcclusion.png","spec":"humanWardrobe/Poleyn_metallicRoughness.png"},"humwar_Pteruges":{"model":null,"maleModel":"humanWardrobe/Pteruges.FBX","femaleModel":"humanWardrobe/F_Pteruges.FBX","color":null,"albedo":"humanWardrobe/Gladiator_Belt_albedoOpacity.png","normal":"humanWardrobe/Gladiator_Belt_normal.png","ao":"humanWardrobe/Gladiator_Belt_ambientOcclusion.png","spec":"humanWardrobe/Gladiator_Belt_metallicRoughness.png"},"humwar_Sabatons_Left":{"model":null,"maleModel":"humanWardrobe/Sabatons_Left.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Sabatons_Right":{"model":null,"maleModel":"humanWardrobe/Sabatons_Right.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Schynbalds_Left":{"model":null,"maleModel":"humanWardrobe/Schynbalds_Left.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Schynbalds_Right":{"model":null,"maleModel":"humanWardrobe/Schynbalds_Right.FBX","femaleModel":null,"color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Skirt":{"model":null,"maleModel":"humanWardrobe/Skirt.FBX","femaleModel":"humanWardrobe/F_Skirt.FBX","color":null,"albedo":"humanWardrobe/Skirt_albedoOpacity.png","normal":"humanWardrobe/Skirt_normal.png","ao":"humanWardrobe/Skirt_ambientOcclusion.png","spec":"humanWardrobe/Skirt_metallicRoughness.png"},"humwar_Spaulder_Chest":{"model":null,"maleModel":"humanWardrobe/Spaulder_Chest.FBX","femaleModel":"humanWardrobe/F_Spaulder_Chest.FBX","color":null,"albedo":"humanWardrobe/Spaulder_albedoOpacity.png","normal":"humanWardrobe/Spaulder_normal.png","ao":"humanWardrobe/Spaulder_ambientOcclusion.png","spec":"humanWardrobe/Spaulder_metallicRoughness.png"},"humwar_Spaulder_L":{"model":null,"maleModel":"humanWardrobe/Spaulder_L.FBX","femaleModel":"humanWardrobe/F_Spaulder_L.FBX","color":null,"albedo":"humanWardrobe/Spaulder_albedoOpacity.png","normal":"humanWardrobe/Spaulder_normal.png","ao":"humanWardrobe/Spaulder_ambientOcclusion.png","spec":"humanWardrobe/Spaulder_metallicRoughness.png"},"humwar_Spaulder_R":{"model":null,"maleModel":"humanWardrobe/Spaulder_R.FBX","femaleModel":"humanWardrobe/F_Spaulder_R.FBX","color":null,"albedo":"humanWardrobe/Spaulder_albedoOpacity.png","normal":"humanWardrobe/Spaulder_normal.png","ao":"humanWardrobe/Spaulder_ambientOcclusion.png","spec":"humanWardrobe/Spaulder_metallicRoughness.png"},"humwar_Trousers":{"model":null,"maleModel":"humanWardrobe/Trousers.FBX","femaleModel":"humanWardrobe/F_Trousers.FBX","color":null,"albedo":"humanWardrobe/Trousers_albedoOpacity.png","normal":"humanWardrobe/Trousers_normal.png","ao":"humanWardrobe/Trousers_ambientOcclusion.png","spec":"humanWardrobe/Trousers_metallicRoughness.png"},"humwar_Vambrace_L":{"model":null,"maleModel":"humanWardrobe/Vambrace_L.FBX","femaleModel":"humanWardrobe/F_Vambrace_L.FBX","color":null,"albedo":"humanWardrobe/Bracers_albedoOpacity.png","normal":"humanWardrobe/Bracers_normal.png","ao":"humanWardrobe/Bracers_ambientOcclusion.png","spec":"humanWardrobe/Bracers_metallicRoughness.png"},"humwar_Vambrace_R":{"model":null,"maleModel":"humanWardrobe/Vambrace_R.FBX","femaleModel":"humanWardrobe/F_Vambrace_R.FBX","color":null,"albedo":"humanWardrobe/Bracers_albedoOpacity.png","normal":"humanWardrobe/Bracers_normal.png","ao":"humanWardrobe/Bracers_ambientOcclusion.png","spec":"humanWardrobe/Bracers_metallicRoughness.png"},"hfowar_Arm_Wrap_L":{"model":null,"maleModel":null,"femaleModel":"halfOrcWardrobe/Arm_Wrap_L.FBX","color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_MetalAOHeightRough.png"},"hfowar_Arm_Wrap_R":{"model":null,"maleModel":null,"femaleModel":"halfOrcWardrobe/Arm_Wrap_R.FBX","color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_MetalAOHeightRough.png"},"hfowar_Bicep_Wrap_L":{"model":"halfOrcWardrobe/Bicep_Wrap_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_MetalAOHeightRough.png"},"hfowar_Bicep_Wrap_R":{"model":"halfOrcWardrobe/Bicep_Wrap_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_MetalAOHeightRough.png"},"hfowar_Bracer_L":{"model":"halfOrcWardrobe/Bracer_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_MetalAOHeightRough.png"},"hfowar_Bracer_R":{"model":"halfOrcWardrobe/Bracer_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_MetalAOHeightRough.png"},"hfowar_Bracer_Spikes_L":{"model":"halfOrcWardrobe/Bracer_Spikes_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_MetalAOHeightRough.png"},"hfowar_Bracer_Spikes_R":{"model":"halfOrcWardrobe/Bracer_Spikes_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_bracers_set_MetalAOHeightRough.png"},"hfowar_Fur_Arm_L":{"model":"halfOrcWardrobe/Fur_Arm_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_MetalAOHeightRough.png"},"hfowar_Fur_Arm_R":{"model":"halfOrcWardrobe/Fur_Arm_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_MetalAOHeightRough.png"},"hfowar_Fur_Chest":{"model":null,"maleModel":null,"femaleModel":"halfOrcWardrobe/Fur_Chest.FBX","color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_MetalAOHeightRough.png"},"hfowar_Fur_Leg_L":{"model":"halfOrcWardrobe/Fur_Leg_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_MetalAOHeightRough.png"},"hfowar_Fur_Leg_R":{"model":"halfOrcWardrobe/Fur_Leg_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_MetalAOHeightRough.png"},"hfowar_Fur_Pauldron_L":{"model":"halfOrcWardrobe/Fur_Pauldron_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_MetalAOHeightRough.png"},"hfowar_Fur_Pauldron_R":{"model":"halfOrcWardrobe/Fur_Pauldron_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_MetalAOHeightRough.png"},"hfowar_Fur_Skirt":{"model":"halfOrcWardrobe/Fur_Skirt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_DevilFur_albedoOpacity_MetalAOHeightRough.png"},"hfowar_HalfOrcPants":{"model":"halfOrcWardrobe/HalfOrcPants.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_MetalAOHeightRough.png"},"hfowar_Jewelry_Ear_L":{"model":"halfOrcWardrobe/Jewelry_Ear_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_MetalAOHeightRough.png"},"hfowar_Jewelry_Ear_R":{"model":"halfOrcWardrobe/Jewelry_Ear_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_MetalAOHeightRough.png"},"hfowar_Jewelry_Nose":{"model":"halfOrcWardrobe/Jewelry_Nose.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_MetalAOHeightRough.png"},"hfowar_Legwrap_L":{"model":"halfOrcWardrobe/Legwrap_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_MetalAOHeightRough.png"},"hfowar_Legwrap_R":{"model":"halfOrcWardrobe/Legwrap_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_MetalAOHeightRough.png"},"hfowar_Pauldron_L":{"model":"halfOrcWardrobe/Pauldron_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_MetalAOHeightRough.png"},"hfowar_Pauldron_R":{"model":"halfOrcWardrobe/Pauldron_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_MetalAOHeightRough.png"},"hfowar_Pauldron_Spikes_L":{"model":"halfOrcWardrobe/Pauldron_Spikes_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_MetalAOHeightRough.png"},"hfowar_Pauldron_Spikes_R":{"model":"halfOrcWardrobe/Pauldron_Spikes_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_MetalAOHeightRough.png"},"hfowar_Poleyn_L":{"model":"halfOrcWardrobe/Poleyn_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_Poleyn_R":{"model":"halfOrcWardrobe/Poleyn_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_Poleyn_Spikes_L":{"model":"halfOrcWardrobe/Poleyn_Spikes_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_Poleyn_Spikes_R":{"model":"halfOrcWardrobe/Poleyn_Spikes_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_Shinguard_L":{"model":"halfOrcWardrobe/Shinguard_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_Shinguard_R":{"model":"halfOrcWardrobe/Shinguard_R.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_Shinguard_Spikes_L":{"model":"halfOrcWardrobe/Shinguard_Spikes_L.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_Shinguard_Spikes_R2":{"model":null,"maleModel":null,"femaleModel":"halfOrcWardrobe/Shinguard_Spikes_R.FBX","color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_ShoeL":{"model":"halfOrcWardrobe/ShoeL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_MetalAOHeightRough.png"},"hfowar_ShoeR":{"model":"halfOrcWardrobe/ShoeR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pants_shoes_set_MetalAOHeightRough.png"},"hfowar_Skirt":{"model":"halfOrcWardrobe/Skirt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_skirt_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_skirt_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_skirt_set_MetalAOHeightRough.png"},"hfowar_Skirt_Hangers":{"model":"halfOrcWardrobe/Skirt_Hangers.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_skirt_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_skirt_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_skirt_set_MetalAOHeightRough.png"},"hfowar_Thigh_Wrap_L":{"model":null,"maleModel":null,"femaleModel":"halfOrcWardrobe/Thigh_Wrap_L.FBX","color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_MetalAOHeightRough.png"},"hfowar_Thigh_Wrap_R":{"model":null,"maleModel":null,"femaleModel":"halfOrcWardrobe/Thigh_Wrap_R.FBX","color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_MetalAOHeightRough.png"},"hfowar_Vest":{"model":"halfOrcWardrobe/Vest.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_MetalAOHeightRough.png"},"hfowar_Vest_Belt_1":{"model":"halfOrcWardrobe/Vest_Belt_1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_MetalAOHeightRough.png"},"hfowar_Vest_Belt_2":{"model":"halfOrcWardrobe/Vest_Belt_2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_vest_set_MetalAOHeightRough.png"},"hfowar_Waist_Wrap":{"model":"halfOrcWardrobe/Waist_Wrap.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_MetalAOHeightRough.png"},"hfowar_Waistwrap_Loops":{"model":null,"maleModel":null,"femaleModel":"halfOrcWardrobe/Waistwrap_Loops.FBX","color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_MetalAOHeightRough.png"},"hfowar_X_Belt_1":{"model":"halfOrcWardrobe/X_Belt_1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_MetalAOHeightRough.png"},"hfowar_X_Belt_2":{"model":"halfOrcWardrobe/X_Belt_2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_MetalAOHeightRough.png"},"arm1_Armor1_Collar":{"model":"armor1/Armor1_Collar.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"arm1_Armor1_Main":{"model":"armor1/Armor1_Main.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"arm1_Armor1_Pauldron_L1":{"model":"armor1/Armor1_Pauldron_L1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"arm1_Armor1_Pauldron_L2":{"model":"armor1/Armor1_Pauldron_L2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"arm1_Armor1_Pauldron_R1":{"model":"armor1/Armor1_Pauldron_R1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"arm1_Armor1_Pauldron_R2":{"model":"armor1/Armor1_Pauldron_R2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"arm1_Armor1_Pouch":{"model":"armor1/Armor1_Pouch.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"arm1_Armor1_Straps":{"model":"armor1/Armor1_Straps.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"arm1_Armor1_Waistcloth":{"model":"armor1/Armor1_Waistcloth.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor1/Leather1_leather1_set_AlbedoOpacity.png","normal":"armor1/Leather1_leather1_set_Normal.png","ao":null,"spec":"armor1/Leather1_leather1_set_MetalAOHeightRough.png"},"elfwar_ArmArmorLeft":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/ArmArmorLeft.FBX","color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_ArmArmorRight":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/ArmArmorRight.FBX","color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_ArmsStrapsLeft":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/ArmsStrapsLeft.FBX","color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_ArmStrapsRight":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/ArmStrapsRight.FBX","color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_Belt_1":{"model":"elfWardrobe/Belt_1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_WaistArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_WaistArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_WaistArmor_MetalAOHeightRough.png"},"elfwar_Belt_2":{"model":"elfWardrobe/Belt_2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_WaistArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_WaistArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_WaistArmor_MetalAOHeightRough.png"},"elfwar_BootLeft":{"model":null,"maleModel":"elfWardrobe/BootL.FBX","femaleModel":"elfWardrobe/BootLeft.FBX","color":null,"albedo":"elfWardrobe/Elf_Boots_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Boots_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Boots_MetalAOHeightRough.png"},"elfwar_BootRight":{"model":null,"maleModel":"elfWardrobe/BootR.FBX","femaleModel":"elfWardrobe/BootRight.FBX","color":null,"albedo":"elfWardrobe/Elf_Boots_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Boots_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Boots_MetalAOHeightRough.png"},"elfwar_Curiass":{"model":"elfWardrobe/Curiass.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Curiass_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Curiass_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Curiass_MetalAOHeightRough.png"},"elfwar_ElfHangers":{"model":"elfWardrobe/ElfHangers.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_WaistArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_WaistArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_WaistArmor_MetalAOHeightRough.png"},"elfwar_ElfPants":{"model":"elfWardrobe/ElfPants.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Pants_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Pants_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Pants_MetalAOHeightRough.png"},"elfwar_ElfVest":{"model":"elfWardrobe/ElfVest.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Vest_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Vest_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Vest_MetalAOHeightRough.png"},"elfwar_Hip_Armor_1":{"model":"elfWardrobe/Hip_Armor_1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_WaistArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_WaistArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_WaistArmor_MetalAOHeightRough.png"},"elfwar_Hip_Armor_2":{"model":"elfWardrobe/Hip_Armor_2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_WaistArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_WaistArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_WaistArmor_MetalAOHeightRough.png"},"elfwar_Hood_1":{"model":"elfWardrobe/Hood_1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Hood_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Hood_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Hood_MetalAOHeightRough.png"},"elfwar_Hood_2":{"model":"elfWardrobe/Hood_2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Hood_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Hood_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Hood_MetalAOHeightRough.png"},"elfwar_Jewelry":{"model":"elfWardrobe/Jewelry.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Jewelry_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Jewelry_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Jewelry_MetalAOHeightRough.png"},"elfwar_LegArmor1Left":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/LegArmor1Left.FBX","color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegArmor1Right":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/LegArmor1Right.FBX","color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegArmor1StrapsLeft":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/LegArmor1StrapsLeft.FBX","color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegArmor1StrapsRight":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/LegArmor1StrapsRight.FBX","color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegArmor2Left":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/LegArmor2Left.FBX","color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegArmor2Right":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/LegArmor2Right.FBX","color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_ManicaLeft":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/ManicaLeft.FBX","color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_ManicaRight":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/ManicaRight.FBX","color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_Mask":{"model":"elfWardrobe/Mask.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Mask_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Mask_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Mask_MetalAOHeightRough.png"},"elfwar_PoleynLeft":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/PoleynLeft.FBX","color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_PoleynRight":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/PoleynRight.FBX","color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_Sash":{"model":null,"maleModel":null,"femaleModel":"elfWardrobe/Sash.FBX","color":null,"albedo":"elfWardrobe/Elf_WaistCloth_AlbedoOpacity.png","normal":"elfWardrobe/Elf_WaistCloth_Normal.png","ao":null,"spec":"elfWardrobe/Elf_WaistCloth_MetalAOHeightRough.png"},"elfwar_Shirt":{"model":"elfWardrobe/Shirt.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Shirt_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Shirt_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Shirt_MetalAOHeightRough.png"},"elfwar_Vest_Belts":{"model":"elfWardrobe/Vest_Belts.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Vest_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Vest_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Vest_MetalAOHeightRough.png"},"humwar_Boot_Flaps_L":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Boot_Flaps_L.FBX","color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Boot_Flaps_R":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Boot_Flaps_R.FBX","color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Dagger":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Dagger.FBX","color":null,"albedo":"humanWardrobe/Dagger_albedoOpacity.png","normal":"humanWardrobe/Dagger_normal.png","ao":"humanWardrobe/Dagger_ambientOcclusion.png","spec":"humanWardrobe/Dagger_metallicRoughness.png"},"humwar_Kneepad_L":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Kneepad_L.FBX","color":null,"albedo":"humanWardrobe/Poleyn_albedoOpacity.png","normal":"humanWardrobe/Poleyn_normal.png","ao":"humanWardrobe/Poleyn_ambientOcclusion.png","spec":"humanWardrobe/Poleyn_metallicRoughness.png"},"humwar_Kneepad_R":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Kneepad_R.FBX","color":null,"albedo":"humanWardrobe/Poleyn_albedoOpacity.png","normal":"humanWardrobe/Poleyn_normal.png","ao":"humanWardrobe/Poleyn_ambientOcclusion.png","spec":"humanWardrobe/Poleyn_metallicRoughness.png"},"humwar_Poleyn_L":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Poleyn_L.FBX","color":null,"albedo":"humanWardrobe/Poleyn_albedoOpacity.png","normal":"humanWardrobe/Poleyn_normal.png","ao":"humanWardrobe/Poleyn_ambientOcclusion.png","spec":"humanWardrobe/Poleyn_metallicRoughness.png"},"humwar_Poleyn_R":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Poleyn_R.FBX","color":null,"albedo":"humanWardrobe/Poleyn_albedoOpacity.png","normal":"humanWardrobe/Poleyn_normal.png","ao":"humanWardrobe/Poleyn_ambientOcclusion.png","spec":"humanWardrobe/Poleyn_metallicRoughness.png"},"humwar_Sabatons_L":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Sabatons_L.FBX","color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Sabatons_R":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Sabatons_R.FBX","color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Schynbalds_L":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Schynbalds_L.FBX","color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Schynbalds_R":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Schynbalds_R.FBX","color":null,"albedo":"humanWardrobe/Boots_albedoOpacity.png","normal":"humanWardrobe/Boots_normal.png","ao":"humanWardrobe/Boots_ambientOcclusion.png","spec":"humanWardrobe/Boots_metallicRoughness.png"},"humwar_Undergarment_Bottom_A":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Undergarment_Bottom_A.FBX","color":null,"albedo":"humanWardrobe/Loincloth_albedoOpacity.png","normal":"humanWardrobe/Loincloth_normal.png","ao":"humanWardrobe/Loincloth_ambientOcclusion.png","spec":"humanWardrobe/Loincloth_metallicRoughness.png"},"humwar_Undergarment_Bottom_B":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Undergarment_Bottom_B.FBX","color":null,"albedo":"humanWardrobe/Loincloth_albedoOpacity.png","normal":"humanWardrobe/Loincloth_normal.png","ao":"humanWardrobe/Loincloth_ambientOcclusion.png","spec":"humanWardrobe/Loincloth_metallicRoughness.png"},"humwar_Undergarment_Top":{"model":null,"maleModel":null,"femaleModel":"humanWardrobe/F_Undergarment_Top.FBX","color":null,"albedo":"humanWardrobe/Loincloth_albedoOpacity.png","normal":"humanWardrobe/Loincloth_normal.png","ao":"humanWardrobe/Loincloth_ambientOcclusion.png","spec":"humanWardrobe/Loincloth_metallicRoughness.png"},"hfowar_Armwrap_L":{"model":null,"maleModel":"halfOrcWardrobe/Armwrap_L.FBX","femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_MetalAOHeightRough.png"},"hfowar_Armwrap_R":{"model":null,"maleModel":"halfOrcWardrobe/Armwrap_R.FBX","femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_armwraps_set_MetalAOHeightRough.png"},"hfowar_Jewelry_Lip":{"model":null,"maleModel":"halfOrcWardrobe/Jewelry_Lip.FBX","femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_pauldron_facerings_set_MetalAOHeightRough.png"},"hfowar_Shinguard_Spikes_R":{"model":null,"maleModel":"halfOrcWardrobe/Shinguard_Spikes_R.FBX","femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_leg_armor_set_MetalAOHeightRough.png"},"hfowar_Thighwrap_L":{"model":null,"maleModel":"halfOrcWardrobe/Thighwrap_L.FBX","femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_MetalAOHeightRough.png"},"hfowar_Thighwrap_R":{"model":null,"maleModel":"halfOrcWardrobe/Thighwrap_R.FBX","femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_legwraps_set_MetalAOHeightRough.png"},"hfowar_Waist_Wrap_Loops":{"model":null,"maleModel":"halfOrcWardrobe/Waist_Wrap_Loops.FBX","femaleModel":null,"color":null,"albedo":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_AlbedoOpacity.png","normal":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_Normal.png","ao":null,"spec":"halfOrcWardrobe/HalfOrcWardrobePainter_torso_belts_set_MetalAOHeightRough.png"},"arm3_Armor3_Main1":{"model":"armor3/Armor3_Main1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm3_Armor3_Main2":{"model":"armor3/Armor3_Main2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm3_Armor3_Main3":{"model":"armor3/Armor3_Main3.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm3_Armor3_Pauldron_L1":{"model":"armor3/Armor3_Pauldron_L1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm3_Armor3_Pauldron_L2":{"model":"armor3/Armor3_Pauldron_L2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm3_Armor3_Pauldron_L3":{"model":"armor3/Armor3_Pauldron_L3.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm3_Armor3_Pauldron_R1":{"model":"armor3/Armor3_Pauldron_R1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm3_Armor3_Pauldron_R2":{"model":"armor3/Armor3_Pauldron_R2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm3_Armor3_Pauldron_R3":{"model":"armor3/Armor3_Pauldron_R3.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor3/Leather3_leather3_set_AlbedoOpacity.png","normal":"armor3/Leather3_leather3_set_Normal.png","ao":null,"spec":"armor3/Leather3_leather3_set_MetalAOHeightRough.png"},"arm9_Armor9BootL":{"model":"armor9/Armor9BootL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalboots_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalboots_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalboots_mat_MetalAOHeightRough.png"},"arm9_Armor9BootR":{"model":"armor9/Armor9BootR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalboots_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalboots_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalboots_mat_MetalAOHeightRough.png"},"arm9_Armor9Curiass":{"model":"armor9/Armor9Curiass.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4b_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4b_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4b_mat_MetalAOHeightRough.png"},"arm9_Armor9CuriassV":{"model":"armor9/Armor9CuriassV.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4b_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4b_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4b_mat_MetalAOHeightRough.png"},"arm9_Armor9Faulds1":{"model":"armor9/Armor9Faulds1.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4a_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4a_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4a_mat_MetalAOHeightRough.png"},"arm9_Armor9Faulds2":{"model":"armor9/Armor9Faulds2.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4a_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4a_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4a_mat_MetalAOHeightRough.png"},"arm9_Armor9GauntletL":{"model":"armor9/Armor9GauntletL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalgauntlets_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalgauntlets_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalgauntlets_mat_MetalAOHeightRough.png"},"arm9_Armor9GauntletR":{"model":"armor9/Armor9GauntletR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalgauntlets_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalgauntlets_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalgauntlets_mat_MetalAOHeightRough.png"},"arm9_Armor9GreavesL":{"model":"armor9/Armor9GreavesL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalboots_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalboots_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalboots_mat_MetalAOHeightRough.png"},"arm9_Armor9GreavesR":{"model":"armor9/Armor9GreavesR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalboots_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalboots_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalboots_mat_MetalAOHeightRough.png"},"arm9_Armor9Helmet":{"model":"armor9/Armor9Helmet.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalhelmet_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalhelmet_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalhelmet_mat_MetalAOHeightRough.png"},"arm9_Armor9HipL":{"model":"armor9/Armor9HipL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4a_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4a_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4a_mat_MetalAOHeightRough.png"},"arm9_Armor9HipR":{"model":"armor9/Armor9HipR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4a_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4a_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4a_mat_MetalAOHeightRough.png"},"arm9_Armor9PauldronL":{"model":"armor9/Armor9PauldronL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4b_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4b_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4b_mat_MetalAOHeightRough.png"},"arm9_Armor9PauldronR":{"model":"armor9/Armor9PauldronR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4b_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4b_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4b_mat_MetalAOHeightRough.png"},"arm9_Armor9PoleynL":{"model":"armor9/Armor9PoleynL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalboots_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalboots_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalboots_mat_MetalAOHeightRough.png"},"arm9_Armor9PoleynR":{"model":"armor9/Armor9PoleynR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_royalboots_mat_AlbedoHeight.png","normal":"armor9/Armor9A_royalboots_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_royalboots_mat_MetalAOHeightRough.png"},"arm9_Armor9Sleeves":{"model":"armor9/Armor9Sleeves.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4a_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4a_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4a_mat_MetalAOHeightRough.png"},"arm9_Armor9ThighbeltL":{"model":"armor9/Armor9ThighbeltL.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4a_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4a_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4a_mat_MetalAOHeightRough.png"},"arm9_Armor9ThighbeltR":{"model":"armor9/Armor9ThighbeltR.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor9A_platearmor4a_mat_AlbedoHeight.png","normal":"armor9/Armor9A_platearmor4a_mat_Normal.png","ao":null,"spec":"armor9/Armor9A_platearmor4a_mat_MetalAOHeightRough.png"},"arm9_UniversalTrousers":{"model":"armor9/UniversalTrousers.FBX","maleModel":null,"femaleModel":null,"color":null,"albedo":"armor9/Armor6A_TrousersSG1_AlbedoHeight.png","normal":"armor9/Armor6A_TrousersSG1_Normal.png","ao":null,"spec":"armor9/Armor6A_TrousersSG1_MetalAOHeightRough.png"},"elfwar_ArmArmorL":{"model":null,"maleModel":"elfWardrobe/ArmArmorL.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_ArmArmorR":{"model":null,"maleModel":"elfWardrobe/ArmArmorR.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_ArmStrapsL":{"model":null,"maleModel":"elfWardrobe/ArmStrapsL.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_ArmStrapsR":{"model":null,"maleModel":"elfWardrobe/ArmStrapsR.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_BootCuffL":{"model":null,"maleModel":"elfWardrobe/BootCuffL.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Boots_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Boots_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Boots_MetalAOHeightRough.png"},"elfwar_BootCuffR":{"model":null,"maleModel":"elfWardrobe/BootCuffR.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Boots_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Boots_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Boots_MetalAOHeightRough.png"},"elfwar_LegArmor1L":{"model":null,"maleModel":"elfWardrobe/LegArmor1L.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegArmor1R":{"model":null,"maleModel":"elfWardrobe/LegArmor1R.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegArmor2L":{"model":null,"maleModel":"elfWardrobe/LegArmor2L.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegArmor2R":{"model":null,"maleModel":"elfWardrobe/LegArmor2R.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegStrapsL":{"model":null,"maleModel":"elfWardrobe/LegStrapsL.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_LegStrapsR":{"model":null,"maleModel":"elfWardrobe/LegStrapsR.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_ManicaL":{"model":null,"maleModel":"elfWardrobe/ManicaL.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_ManicaR":{"model":null,"maleModel":"elfWardrobe/ManicaR.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_ArmArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_ArmArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_ArmArmor_MetalAOHeightRough.png"},"elfwar_PoleynL":{"model":null,"maleModel":"elfWardrobe/PoleynL.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_PoleynR":{"model":null,"maleModel":"elfWardrobe/PoleynR.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_LegArmor_AlbedoOpacity.png","normal":"elfWardrobe/Elf_LegArmor_Normal.png","ao":null,"spec":"elfWardrobe/Elf_LegArmor_MetalAOHeightRough.png"},"elfwar_Sleeves":{"model":null,"maleModel":"elfWardrobe/Sleeves.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_Shirt_AlbedoOpacity.png","normal":"elfWardrobe/Elf_Shirt_Normal.png","ao":null,"spec":"elfWardrobe/Elf_Shirt_MetalAOHeightRough.png"},"elfwar_Waistcloth":{"model":null,"maleModel":"elfWardrobe/Waistcloth.FBX","femaleModel":null,"color":null,"albedo":"elfWardrobe/Elf_WaistCloth_AlbedoOpacity.png","normal":"elfWardrobe/Elf_WaistCloth_Normal.png","ao":null,"spec":"elfWardrobe/Elf_WaistCloth_MetalAOHeightRough.png"}}')
    },
    "27a3": function(e, t, a) {},
    "27b3": function(e, t, a) {
        "use strict";
        a("650c")
    },
    "27fc": function(e) {
        e.exports = JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LIMIT_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WAX_BRIDGE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bnbLimitPerPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bnbLimitTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestWaxChainBlockNumberProcessed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalOwedBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"withdrawableBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getWithdrawnBnbDuringPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRemainingWithdrawableBnbDuringPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTimeUntilLimitExpires","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyBnbWeiLimit","type":"uint256"}],"name":"setDailyBnbWeiLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_latestWaxChainBlockNumberProcessed","type":"uint256"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_value","type":"uint256[]"}],"name":"processWaxConversions","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxAmount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]}')
    },
    "29bf": function(e, t, a) {},
    "2b91": function(e, t, a) {
        e.exports = a.p + "img/sword-placeholder-0.113b8c61.png"
    },
    "2bc9": function(e, t, a) {
        "use strict";
        a("8243")
    },
    "2bd3": function(e, t, a) {
        "use strict";
        a("d476")
    },
    3: function(e, t) {},
    "342c": function(e) {
        e.exports = JSON.parse('{"0":["hair_ElfHairLong"],"1":["hair_ElfHairShort","hair_ElfHairPonytail"],"2":["hair_HumanMaleHairLong","hair_HumanHairLong"],"3":["hair_HumanMaleHairShort","hair_HumanHairShort"],"4":["hair_OrcMaleHairLong","hair_OrcHairLong"],"5":["hair_OrcMaleHairShort","hair_OrcHairShort"],"6":["humwar_Barbute"],"7":["elfwar_Hood_1","elfwar_Hood_2"],"8":["elfwar_Hood_1","elfwar_Hood_2","elfwar_Mask"],"9":["arm6_Armor6CrusaderHelmet"],"10":["arm8_Armor8PaladinHelmet"],"11":["arm9_Armor9Helmet"],"12":["arm10_Armor10Helmet"]}')
    },
    "34ba": function(e, t, a) {
        "use strict";
        a("1182")
    },
    3602: function(e, t, a) {
        "use strict";
        a("685e")
    },
    "3ac1": function(e) {
        e.exports = JSON.parse('{"0":["humwar_Manica"],"1":["humwar_Manica","humwar_Glove_R"],"2":["humwar_Manica","humwar_Glove_R","humwar_Gauntlet_R","humwar_Glove_L"],"3":["humwar_Manica","humwar_Glove_R","humwar_Gauntlet_R","humwar_Glove_L","humwar_Gauntlet_L"],"4":["humwar_Manica","humwar_Glove_R","humwar_Gauntlet_R","humwar_Glove_L","humwar_Gauntlet_L","humwar_Vambrace_L","humwar_Vambrace_R"],"5":["humwar_Manica","humwar_Glove_R","humwar_Gauntlet_R","humwar_Glove_L","humwar_Gauntlet_L","humwar_Vambrace_L","humwar_Vambrace_R","humwar_Armband_L","humwar_Couter_L"],"6":["humwar_Glove_R","humwar_Glove_L","humwar_Armband_L","humwar_Armband_R"],"7":["humwar_Glove_R","humwar_Glove_L","humwar_Armband_L","humwar_Armband_R","humwar_Couter_L","humwar_Couter_R","humwar_Vambrace_L","humwar_Vambrace_R"],"8":["humwar_Glove_R","humwar_Glove_L","humwar_Armband_L","humwar_Armband_R","humwar_Couter_L","humwar_Couter_R","humwar_Vambrace_L","humwar_Vambrace_R","humwar_Gauntlet_L","humwar_Gauntlet_R"],"9":["humwar_Glove_R","humwar_Glove_L","humwar_Gauntlet_R","humwar_Vambrace_R"],"10":["humwar_Glove_R","humwar_Glove_L","humwar_Gauntlet_L","humwar_Vambrace_R","humwar_Armband_R","humwar_Couter_R"],"11":["humwar_Vambrace_L","humwar_Vambrace_R","humwar_Armband_L","humwar_Armband_R"],"12":["elfwar_ArmStrapsRight","elfwar_ArmsStrapsLeft"],"13":["elfwar_ArmArmorRight","elfwar_ArmStrapsRight"],"14":["elfwar_ArmArmorRight","elfwar_ArmStrapsRight","elfwar_ManicaLeft"],"15":["elfwar_ArmArmorRight","elfwar_ArmStrapsRight","elfwar_ArmArmorLeft","elfwar_ArmsStrapsLeft"],"16":["elfwar_ManicaRight"],"17":["elfwar_ManicaRight","elfwar_ManicaLeft"],"18":["elfwar_ManicaRight","elfwar_ArmArmorRight","elfwar_ManicaLeft","elfwar_ArmArmorLeft"],"19":["elfwar_ManicaRight","elfwar_ArmsStrapsLeft"],"20":["hfowar_Arm_Wrap_L","hfowar_Arm_Wrap_R"],"21":["hfowar_Arm_Wrap_L","hfowar_Arm_Wrap_R","hfowar_Bicep_Wrap_L","hfowar_Bicep_Wrap_R"],"22":["hfowar_Bracer_L","hfowar_Bracer_R"],"23":["hfowar_Bracer_L","hfowar_Bracer_R","hfowar_Bicep_Wrap_L","hfowar_Bicep_Wrap_R"],"24":["hfowar_Bracer_L","hfowar_Bracer_R","hfowar_Bracer_Spikes_L","hfowar_Bracer_Spikes_R"],"25":["hfowar_Bracer_L","hfowar_Bracer_R","hfowar_Bicep_Wrap_L","hfowar_Bicep_Wrap_R","hfowar_Bracer_Spikes_L","hfowar_Bracer_Spikes_R"],"26":["arm6_Armor6VambraceL","arm6_Armor6VambraceR"],"27":["arm6_Armor6VambraceL","arm6_Armor6VambraceR","arm6_Armor6CouterL","arm6_Armor6CouterR"],"28":["arm6_Armor6VambraceL","arm6_Armor6VambraceR","arm6_Armor6CouterL","arm6_Armor6CouterR","arm6_Armor6StandardGauntletL","arm6_Armor6StandardGauntletR"],"29":["arm6_Armor6VambraceL","arm6_Armor6VambraceR","arm6_Armor6StandardGauntletL","arm6_Armor6StandardGauntletR"],"30":["arm6_Armor6StandardGauntletL","arm6_Armor6StandardGauntletR"],"31":["arm6_Armor6StandardGauntletL","arm6_Armor6StandardGauntletR","arm6_Armor6CouterL","arm6_Armor6CouterR"],"32":["arm7_Armor7ElvenGauntletL","arm7_Armor7ElvenGauntletR"],"33":["arm7_Armor7ElvenGauntletR"],"34":["arm8_Armor8CouterL","arm8_Armor8CouterR"],"35":["arm8_Armor8PaladinGauntletL","arm8_Armor8PaladinGauntletR"],"36":["arm8_Armor8PaladinGauntletL","arm8_Armor8PaladinGauntletR","arm8_Armor8CouterL","arm8_Armor8CouterR"],"37":["arm8_Armor8CouterR","arm8_Armor8PaladinGauntletR"],"38":["arm9_Armor9GauntletL","arm9_Armor9GauntletR"],"39":["arm9_Armor9GauntletL"],"40":["arm9_Armor9GauntletR"],"41":["arm10_Armor10ArmwrapLeft","arm10_Armor10ArmwrapRight"],"42":["arm10_Armor10ArmwrapLeft","arm10_Armor10ArmwrapRight","arm10_Armor10CouterLeft","arm10_Armor10CouterRight"],"43":["arm10_Armor10ArmwrapLeft","arm10_Armor10ArmwrapRight","arm10_Armor10CouterLeft","arm10_Armor10CouterRight","arm10_Armor10GauntletRight","arm10_Armor10GauntletLeft"],"44":["arm10_Armor10ArmwrapLeft","arm10_Armor10ArmwrapRight","arm10_Armor10GauntletRight","arm10_Armor10GauntletLeft"]}')
    },
    "3c11": function(e, t, a) {
        "use strict";
        a("9216")
    },
    "3f60": function(e, t, a) {
        e.exports = a.p + "img/HumanMale_Knight.f4bd5b15.gif"
    },
    4: function(e, t) {},
    "46fc": function(e, t, a) {
        e.exports = a.p + "img/chara-2.b4199049.png"
    },
    4868: function(e, t, a) {
        e.exports = a.p + "img/addButton.4f914045.png"
    },
    "48b2": function(e, t, a) {
        "use strict";
        a("94cc")
    },
    4939: function(e, t, a) {
        e.exports = a.p + "img/chara-3.88c625be.png"
    },
    "4f9b": function(e, t, a) {
        "use strict";
        a("e99d")
    },
    "4fd7": function(e, t, a) {},
    5: function(e, t) {},
    5093: function(e, t, a) {},
    "53bb": function(e, t, a) {
        "use strict";
        a("253e")
    },
    "56f6": function(e, t, a) {
        e.exports = a.p + "img/sword-placeholder-4.855af001.png"
    },
    "5c43": function(e, t, a) {},
    6: function(e, t) {},
    "60ed": function(e, t, a) {},
    "650c": function(e, t, a) {},
    6539: function(e, t, a) {},
    "65a4": function(e, t, a) {},
    "66a1": function(e, t, a) {},
    "685e": function(e, t, a) {},
    "6aa4": function(e) {
        e.exports = JSON.parse('{"0":["humwar_Undergarment_Top","humwar_Pauldron_L"],"1":["humwar_Undergarment_Top","humwar_Pauldron_L","humwar_Pauldron_R"],"2":["humwar_Undergarment_Top","humwar_Pauldron_L","humwar_Spaulder_Chest"],"3":["humwar_Undergarment_Top","humwar_Pauldron_L","humwar_Spaulder_Chest","humwar_Spaulder_R"],"4":["humwar_Undergarment_Top","humwar_Spaulder_Chest","humwar_Spaulder_L","humwar_Spaulder_R"],"5":["elfwar_Curiass"],"6":["elfwar_Curiass","elfwar_Shirt","elfwar_Sleeves"],"7":["elfwar_Shirt","elfwar_Sleeves"],"8":["elfwar_Shirt","elfwar_Sleeves","elfwar_ElfVest","elfwar_Vest_Belts"],"9":["elfwar_ElfVest","elfwar_Vest_Belts"],"10":["hfowar_Fur_Chest","hfowar_Waist_Wrap","hfowar_Waistwrap_Loops","hfowar_X_Belt_1"],"11":["hfowar_Fur_Chest","hfowar_Waist_Wrap","hfowar_Waistwrap_Loops","hfowar_X_Belt_1","hfowar_Pauldron_R","hfowar_Pauldron_Spikes_R","hfowar_Fur_Pauldron_R"],"12":["hfowar_Fur_Chest","hfowar_Waist_Wrap","hfowar_Waistwrap_Loops","hfowar_X_Belt_2"],"13":["hfowar_Fur_Chest","hfowar_Waist_Wrap","hfowar_Waistwrap_Loops","hfowar_X_Belt_2","hfowar_Pauldron_L","hfowar_Pauldron_Spikes_L","hfowar_Fur_Pauldron_L"],"14":["hfowar_Fur_Chest","hfowar_Waist_Wrap","hfowar_Waistwrap_Loops","hfowar_X_Belt_1","hfowar_X_Belt_2","hfowar_Pauldron_R","hfowar_Pauldron_Spikes_R","hfowar_Fur_Pauldron_R","hfowar_Pauldron_L","hfowar_Pauldron_Spikes_L","hfowar_Fur_Pauldron_L"],"15":["hfowar_Fur_Chest","hfowar_X_Belt_1","hfowar_X_Belt_2"],"16":["hfowar_Fur_Chest","hfowar_X_Belt_1","hfowar_X_Belt_2","hfowar_Pauldron_R","hfowar_Pauldron_Spikes_R","hfowar_Fur_Pauldron_R","hfowar_Pauldron_L","hfowar_Pauldron_Spikes_L","hfowar_Fur_Pauldron_L"],"17":["hfowar_Vest","hfowar_Vest_Belt_1","hfowar_Vest_Belt_2","hfowar_X_Belt_2"],"18":["hfowar_Vest","hfowar_Vest_Belt_1","hfowar_Vest_Belt_2","hfowar_X_Belt_2","hfowar_Pauldron_L","hfowar_Pauldron_Spikes_L","hfowar_Fur_Pauldron_L"],"19":["hfowar_Vest","hfowar_Vest_Belt_1","hfowar_Vest_Belt_2","hfowar_X_Belt_2","hfowar_X_Belt_1"],"20":["hfowar_Vest","hfowar_Vest_Belt_1","hfowar_Vest_Belt_2","hfowar_X_Belt_2","hfowar_X_Belt_1","hfowar_Pauldron_L","hfowar_Pauldron_Spikes_L","hfowar_Fur_Pauldron_L","hfowar_Pauldron_R","hfowar_Pauldron_Spikes_R","hfowar_Fur_Pauldron_R"],"21":["arm1_Armor1_Main","arm1_Armor1_Collar"],"22":["arm1_Armor1_Main","arm1_Armor1_Collar","arm1_Armor1_Straps","arm1_Armor1_Pouch"],"23":["arm1_Armor1_Main","arm1_Armor1_Collar","arm1_Armor1_Waistcloth","arm1_Armor1_Pouch"],"24":["arm1_Armor1_Main","arm1_Armor1_Collar","arm1_Armor1_Pauldron_L1","arm1_Armor1_Pauldron_L2","arm1_Armor1_Pouch","arm1_Armor1_Straps","arm1_Armor1_Waistcloth"],"25":["arm1_Armor1_Main","arm1_Armor1_Collar","arm1_Armor1_Pauldron_L1","arm1_Armor1_Pauldron_L2","arm1_Armor1_Pauldron_R1","arm1_Armor1_Pauldron_R2","arm1_Armor1_Pouch","arm1_Armor1_Straps","arm1_Armor1_Waistcloth"],"26":["arm1_Armor1_Main","arm1_Armor1_Collar","arm1_Armor1_Pauldron_L1","arm1_Armor1_Pauldron_L2","arm1_Armor1_Pauldron_R1","arm1_Armor1_Pauldron_R2","arm1_Armor1_Straps"],"27":["arm2_Armor2_Main","arm2_Armor2_Gorget","arm2_Armor2_Neckbelts","arm2_Armor2_Chest_Fur","arm2_Armor2_Tabbard","arm2_Armor2_Tabbard_Belt"],"28":["arm2_Armor2_Main","arm2_Armor2_Gorget","arm2_Armor2_Neckbelts","arm2_Armor2_Chest_Fur","arm2_Armor2_Tabbard","arm2_Armor2_Tabbard_Belt","arm2_Armor2_Pauldron_L1","arm2_Armor2_Pauldron_L2","arm2_Armor2_Pauldron_LFur","arm2_Armor2_Pauldron_R1","arm2_Armor2_Pauldron_R2","arm2_Armor2_Pauldron_RFur"],"29":["arm2_Armor2_Main","arm2_Armor2_Gorget","arm2_Armor2_Chest_Fur","arm2_Armor2_Tabbard","arm2_Armor2_Tabbard_Belt","arm2_Armor2_Pauldron_L1","arm2_Armor2_Pauldron_L2","arm2_Armor2_Pauldron_LFur","arm2_Armor2_Pauldron_R1","arm2_Armor2_Pauldron_R2","arm2_Armor2_Pauldron_RFur"],"30":["arm4_Armor4_Main","arm4_Armor4_Padding_Shoulder_L","arm4_Armor4_Padding_Shoulder_R"],"31":["arm4_Armor4_Main","arm4_Armor4_Padding_Shoulder_L","arm4_Armor4_Padding_Shoulder_R","arm4_Armor4_Padding_Lower","arm4_Armor4_Padding_Mid","arm4_Armor4_Stitches"],"32":["arm4_Armor4_Main","arm4_Armor4_Padding_Shoulder_L","arm4_Armor4_Padding_Shoulder_R","arm4_Armor4_Padding_Lower","arm4_Armor4_Padding_Mid","arm4_Armor4_Stitches","arm4_Armor4_Padding_Upper"],"33":["arm5_Armor5_Main","arm5_Armor5_ShoulderL","arm5_Armor5_ShoulderR"],"34":["arm5_Armor5_Main","arm5_Armor5_ShoulderL","arm5_Armor5_ShoulderR","arm5_Armor5_SleeveL","arm5_Armor5_SleeveR"],"35":["arm5_Armor5_Main","arm5_Armor5_ShoulderL","arm5_Armor5_ShoulderR","arm5_Armor5_SleeveL","arm5_Armor5_SleeveR","arm5_Armor5_Pauldron_Belt","arm5_Armor5_Pauldron1"],"36":["arm5_Armor5_Main","arm5_Armor5_ShoulderL","arm5_Armor5_ShoulderR","arm5_Armor5_SleeveL","arm5_Armor5_SleeveR","arm5_Armor5_Pauldron_Belt","arm5_Armor5_Pauldron1","arm5_Armor5_Pauldron2"],"37":["arm6_Armor6Curiass","arm6_UniversalCollar","arm6_Armor6Belt"],"38":["arm6_Armor6Curiass","arm6_UniversalCollar","arm6_Armor6Belt","arm6_Armor6Sleeves"],"39":["arm6_Armor6Curiass","arm6_UniversalCollar","arm6_Armor6Belt","arm6_Armor6PauldronL","arm6_Armor6PauldronStrapsL","arm6_Armor6PauldronR","arm6_Armor6PauldronStrapsR"],"40":["arm6_Armor6Curiass","arm6_UniversalCollar","arm6_Armor6Belt","arm6_Armor6PauldronL","arm6_Armor6PauldronStrapsL","arm6_Armor6PauldronR","arm6_Armor6PauldronStrapsR","arm6_Armor6RerebraceL","arm6_Armor6RerebraceR"],"41":["arm6_Armor6Curiass","arm6_UniversalCollar","arm6_Armor6Belt","arm6_Armor6Sleeves","arm6_Armor6PauldronL","arm6_Armor6PauldronStrapsL","arm6_Armor6PauldronR","arm6_Armor6PauldronStrapsR"],"42":["arm6_Armor6Curiass","arm6_UniversalCollar","arm6_Armor6Belt","arm6_Armor6Sleeves","arm6_Armor6PauldronL","arm6_Armor6PauldronStrapsL","arm6_Armor6PauldronR","arm6_Armor6PauldronStrapsR","arm6_Armor6RerebraceL","arm6_Armor6RerebraceR"],"43":["arm7_Armor7Curiass","arm7_Armor7CuriassWings","arm6_UniversalCollar","arm7_Armor7LeatherVest"],"44":["arm7_Armor7Curiass","arm7_Armor7CuriassWings","arm6_UniversalCollar","arm7_Armor7LeatherVest","arm7_Armor7Sleeves"],"45":["arm7_Armor7Curiass","arm7_Armor7CuriassWings","arm6_UniversalCollar","arm7_Armor7LeatherVest","arm7_Armor7PauldronL","arm7_Armor7PauldronR"],"46":["arm7_Armor7Curiass","arm7_Armor7CuriassWings","arm6_UniversalCollar","arm7_Armor7LeatherVest","arm7_Armor7PauldronL","arm7_Armor7PauldronR","arm7_Armor7Sleeves"],"47":["arm8_Armor8Curiass"],"48":["arm8_Armor8Curiass","arm8_Armor8Sleeves"],"49":["arm8_Armor8Curiass","arm8_Armor8PauldronL","arm8_Armor8PauldronR"],"50":["arm8_Armor8Curiass","arm8_Armor8Sleeves","arm8_Armor8PauldronR"],"51":["arm8_Armor8Curiass","arm8_Armor8Sleeves","arm8_Armor8PauldronL"],"52":["arm8_Armor8Curiass","arm8_Armor8Sleeves","arm8_Armor8PauldronL","arm8_Armor8PauldronR"],"53":["arm9_Armor9Curiass","arm9_Armor9CuriassV"],"54":["arm9_Armor9Curiass","arm9_Armor9CuriassV","arm9_Armor9Sleeves"],"55":["arm9_Armor9Curiass","arm9_Armor9CuriassV","arm9_Armor9PauldronL","arm9_Armor9PauldronR"],"56":["arm9_Armor9Curiass","arm9_Armor9CuriassV","arm9_Armor9PauldronL","arm9_Armor9PauldronR","arm9_Armor9Sleeves"],"57":["arm10_Armor10Curiass","arm6_UniversalCollar","arm10_Armor10Sleeves"],"58":["arm10_Armor10Curiass","arm6_UniversalCollar","arm10_Armor10Sleeves","arm10_Armor10PauldronRight","arm10_Armor10PauldronStrapRight","arm10_Armor10BesagewRight"],"59":["arm10_Armor10Curiass","arm6_UniversalCollar","arm10_Armor10Sleeves","arm10_Armor10PauldronLeft","arm10_Armor10PauldronStrapLeft","arm10_Armor10BesagewLeft"],"60":["arm10_Armor10Curiass","arm6_UniversalCollar","arm10_Armor10Sleeves","arm10_Armor10PauldronLeft","arm10_Armor10PauldronStrapLeft","arm10_Armor10BesagewLeft","arm10_Armor10PauldronRight","arm10_Armor10PauldronStrapRight","arm10_Armor10BesagewRight"]}')
    },
    "6ca5": function(e, t, a) {
        e.exports = a.p + "img/sword-placeholder-6.c25b2e05.png"
    },
    "6dd8": function(e, t, a) {
        "use strict";
        a("9423")
    },
    "6df4": function(e, t, a) {},
    7: function(e, t) {},
    7143: function(e, t, a) {
        e.exports = a.p + "img/GoblinMale_Heavy.bb96d03f.gif"
    },
    7289: function(e) {
        e.exports = JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')
    },
    "73d0": function(e, t, a) {
        "use strict";
        a("29bf")
    },
    "741f": function(e, t, a) {},
    7461: function(e, t, a) {
        e.exports = a.p + "img/infoDivider.6ed3b66b.png"
    },
    7620: function(e, t, a) {},
    "7a43": function(e, t, a) {
        "use strict";
        a("b66d")
    },
    "7e9a": function(e) {
        e.exports = JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"character","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"level","type":"uint16"}],"name":"LevelUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"character","type":"uint256"},{"indexed":true,"internalType":"address","name":"minter","type":"address"}],"name":"NewCharacter","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAME_ADMIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NO_OWNED_LIMIT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_DOES_NOT_SET_TRANSFER_TIMESTAMP","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_COOLDOWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"characterLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastTransferTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStamina","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"promos","outputs":[{"internalType":"contract Promos","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secondsPerStamina","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_1ee400a","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_951a020","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Promos","name":"_promos","type":"address"}],"name":"migrateTo_ef994e2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_b627f23","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferCooldownEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferCooldownLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"get","outputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"currentLevel","type":"uint8"}],"name":"getRequiredXpForNextLevel","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPower","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"level","type":"uint8"}],"name":"getPowerAtLevel","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getTrait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getXp","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint16","name":"xp","type":"uint16"}],"name":"gainXp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStaminaTimestamp","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"setStaminaTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStaminaPoints","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"getStaminaPointsFromTimestamp","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"isStaminaFull","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStaminaMaxWait","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"amount","type":"uint8"}],"name":"getFightDataAndDrainStamina","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"max","type":"uint256"}],"name":"setCharacterLimit","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
    },
    8: function(e, t) {},
    "806d": function(e, t, a) {},
    8234: function(e) {
        e.exports = JSON.parse('{"a":{}}')
    },
    8243: function(e, t, a) {},
    "85ec": function(e, t, a) {},
    "88b4": function(e, t, a) {
        "use strict";
        a("65a4")
    },
    "8a3b": function(e, t, a) {
        e.exports = a.p + "img/sword-placeholder-3.fbce898f.png"
    },
    "8acc": function(e, t, a) {
        e.exports = a.p + "img/HumanMale_Bandit.4baa4e58.gif"
    },
    "8b55": function(e, t, a) {
        e.exports = a.p + "img/map.caee06d4.png"
    },
    "8f5d": function(e, t, a) {
        "use strict";
        a("66a1")
    },
    9: function(e, t) {},
    9012: function(e, t, a) {
        "use strict";
        a("27a3")
    },
    9216: function(e, t, a) {},
    9423: function(e, t, a) {},
    "94cc": function(e, t, a) {},
    "98c4": function(e, t, a) {
        e.exports = a.p + "img/GoblinFemale_Light.cf33f368.gif"
    },
    9938: function(e, t, a) {
        e.exports = a.p + "img/ElfFemale_Spearwoman.d873081f.gif"
    },
    "9bb2": function(e, t, a) {
        e.exports = a.p + "img/HumanFemale_Archer.3b8f47ff.gif"
    },
    "9d5a": function(e) {
        e.exports = JSON.parse('{"BLADE_1":{"name":"BLADE_1","sizeX":0.414657384,"sizeY":0.0288598128,"sizeZ":0.9678656,"top":0.9618797302246094,"bottom":-0.0059814453125},"BLADE_2":{"name":"BLADE_2","sizeX":0.160583824,"sizeY":0.03891659,"sizeZ":1.17626333,"top":1.1741218566894531,"bottom":-0.00214385986328125},"BLADE_3":{"name":"BLADE_3","sizeX":0.208377525,"sizeY":0.02782021,"sizeZ":0.930803239,"top":0.9236698150634766,"bottom":-0.00713348388671875},"BLADE_4":{"name":"BLADE_4","sizeX":0.104778647,"sizeY":0.033720158,"sizeZ":0.7576373,"top":0.016580581665039062,"bottom":-0.0019207000732421875},"BLADE_5":{"name":"BLADE_5","sizeX":0.299411356,"sizeY":0.04649955,"sizeZ":1.1289829,"top":0.13538742065429688,"bottom":-0.002349853515625},"BLADE_6":{"name":"BLADE_6","sizeX":0.151776835,"sizeY":0.103666976,"sizeZ":0.8224986,"top":0.7762851715087891,"bottom":-0.003875732421875},"BLADE_7":{"name":"BLADE_7","sizeX":0.112817228,"sizeY":0.0123241851,"sizeZ":0.6704325,"top":0.037586212158203125,"bottom":0.02362060546875},"BLADE_8":{"name":"BLADE_8","sizeX":0.153687686,"sizeY":0.02020016,"sizeZ":0.620840967,"top":-0.0023517608642578125,"bottom":-0.002353668212890625},"BLADE_9":{"name":"BLADE_9","sizeX":0.141547441,"sizeY":0.02879225,"sizeZ":0.8700421,"top":0.7009487152099609,"bottom":-0.0013427734375},"BLADE_10":{"name":"BLADE_10","sizeX":0.111349821,"sizeY":0.0255702287,"sizeZ":0.6244756,"top":0.06220245361328125,"bottom":0.03569221496582031},"BLADE_11":{"name":"BLADE_11","sizeX":0.149861291,"sizeY":0.016681768,"sizeZ":0.6375441,"top":0.5975513458251953,"bottom":-0.0021419525146484375},"BLADE_12":{"name":"BLADE_12","sizeX":0.0632445961,"sizeY":0.0100002084,"sizeZ":0.8513592,"top":0.80853271484375,"bottom":-0.001789093017578125},"BLADE_13":{"name":"BLADE_13","sizeX":0.2945311,"sizeY":0.06776026,"sizeZ":0.9331421,"top":0.8841609954833984,"bottom":-0.00246429443359375},"BLADE_14":{"name":"BLADE_14","sizeX":0.193883657,"sizeY":0.0109995911,"sizeZ":0.7915403,"top":0.6368064880371094,"bottom":-0.0042362213134765625},"BLADE_15":{"name":"BLADE_15","sizeX":0.175321668,"sizeY":0.0250001419,"sizeZ":0.712950051,"top":0.6727428436279297,"bottom":-0.0031986236572265625},"BLADE_16":{"name":"BLADE_16","sizeX":0.187759265,"sizeY":0.02000025,"sizeZ":1.19259822,"top":1.1810550689697266,"bottom":-0.000640869140625},"BLADE_17":{"name":"BLADE_17","sizeX":0.1857427,"sizeY":0.0153881721,"sizeZ":0.692489,"top":0.6480770111083984,"bottom":-0.00336456298828125},"BLADE_18":{"name":"BLADE_18","sizeX":0.146292776,"sizeY":0.0333433077,"sizeZ":0.9639457,"top":0.8636894226074219,"bottom":-0.00557708740234375},"BLADE_19":{"name":"BLADE_19","sizeX":0.09044376,"sizeY":0.0200011544,"sizeZ":0.701486051,"top":0.6948490142822266,"bottom":-0.00180816650390625},"BLADE_20":{"name":"BLADE_20","sizeX":0.177167833,"sizeY":0.0100002158,"sizeZ":0.894010365,"top":0.81243896484375,"bottom":-0.001758575439453125},"BLADE_21":{"name":"BLADE_21","sizeX":0.473751724,"sizeY":0.3348853,"sizeZ":1.31443739,"top":1.1887893676757812,"bottom":0.0000019073486328125},"BLADE_22":{"name":"BLADE_22","sizeX":0.451086253,"sizeY":0.151910454,"sizeZ":1.134221,"top":0.7568607330322266,"bottom":0},"BLADE_23":{"name":"BLADE_23","sizeX":0.181219622,"sizeY":0.08647808,"sizeZ":0.841614842,"top":0.7199993133544922,"bottom":0.0000019073486328125},"BLADE_24":{"name":"BLADE_24","sizeX":0.12345621,"sizeY":0.0197826028,"sizeZ":0.8561785,"top":0.06458473205566406,"bottom":0.0034656524658203125},"CROSSGUARD_1":{"name":"CROSSGUARD_1","sizeX":0.184211493,"sizeY":0.05800886,"sizeZ":0.100258529,"top":0.09434318542480469,"bottom":-0.0001850128173828125},"CROSSGUARD_2":{"name":"CROSSGUARD_2","sizeX":0.33247292,"sizeY":0.08814486,"sizeZ":0.0249999985,"top":0.024999618530273438,"bottom":0.0000019073486328125},"CROSSGUARD_3":{"name":"CROSSGUARD_3","sizeX":0.135180667,"sizeY":0.128987759,"sizeZ":0.18007569,"top":0.14220046997070312,"bottom":0.000003814697265625},"CROSSGUARD_4":{"name":"CROSSGUARD_4","sizeX":0.3915254,"sizeY":0.0344982743,"sizeZ":0.278879762,"top":0.19897842407226562,"bottom":-0.000278472900390625},"CROSSGUARD_5":{"name":"CROSSGUARD_5","sizeX":0.248255521,"sizeY":0.0499999933,"sizeZ":0.03751812,"top":0.029998779296875,"bottom":0},"CROSSGUARD_6":{"name":"CROSSGUARD_6","sizeX":0.179999992,"sizeY":0.0595988631,"sizeZ":0.04990444,"top":0.0440826416015625,"bottom":0.0000019073486328125},"CROSSGUARD_7":{"name":"CROSSGUARD_7","sizeX":0.126898348,"sizeY":0.05535075,"sizeZ":0.0345000029,"top":0.0345001220703125,"bottom":0},"CROSSGUARD_8":{"name":"CROSSGUARD_8","sizeX":0.156540722,"sizeY":0.161678344,"sizeZ":0.08189352,"top":0.01000213623046875,"bottom":-0.000003814697265625},"CROSSGUARD_9":{"name":"CROSSGUARD_9","sizeX":0.41666612,"sizeY":0.09014048,"sizeZ":0.169178575,"top":0.044376373291015625,"bottom":0},"CROSSGUARD_10":{"name":"CROSSGUARD_10","sizeX":0.118925564,"sizeY":0.0396809727,"sizeZ":0.115149423,"top":0.09250068664550781,"bottom":0.0000782012939453125},"CROSSGUARD_11":{"name":"CROSSGUARD_11","sizeX":0.135296643,"sizeY":0.135298759,"sizeZ":0.01363343,"top":0.007595062255859375,"bottom":-0.000003814697265625},"CROSSGUARD_12":{"name":"CROSSGUARD_12","sizeX":0.3775726,"sizeY":0.05523829,"sizeZ":0.232387289,"top":0.17493820190429688,"bottom":-0.0000019073486328125},"CROSSGUARD_13":{"name":"CROSSGUARD_13","sizeX":0.181624427,"sizeY":0.04,"sizeZ":0.05326556,"top":0.020000457763671875,"bottom":0},"CROSSGUARD_14":{"name":"CROSSGUARD_14","sizeX":0.471954733,"sizeY":0.0478332564,"sizeZ":0.07875073,"top":0.05999946594238281,"bottom":0},"CROSSGUARD_15":{"name":"CROSSGUARD_15","sizeX":0.249498323,"sizeY":0.059947364,"sizeZ":0.3230359,"top":0.04000091552734375,"bottom":0},"CROSSGUARD_16":{"name":"CROSSGUARD_16","sizeX":0.134698391,"sizeY":0.125948071,"sizeZ":0.144080758,"top":0.09000015258789062,"bottom":-0.0000019073486328125},"CROSSGUARD_17":{"name":"CROSSGUARD_17","sizeX":0.3118177,"sizeY":0.0481608957,"sizeZ":0.03999995,"top":0.034999847412109375,"bottom":0},"CROSSGUARD_18":{"name":"CROSSGUARD_18","sizeX":0.241868317,"sizeY":0.0497939065,"sizeZ":0.0741336644,"top":0.04607963562011719,"bottom":-0.0000400543212890625},"CROSSGUARD_19":{"name":"CROSSGUARD_19","sizeX":0.32117188,"sizeY":0.052,"sizeZ":0.0364160575,"top":0.030002593994140625,"bottom":-0.0000019073486328125},"CROSSGUARD_20":{"name":"CROSSGUARD_20","sizeX":0.127071068,"sizeY":0.06433434,"sizeZ":0.0475,"top":0.03750038146972656,"bottom":0},"CROSSGUARD_21":{"name":"CROSSGUARD_21","sizeX":0.2489596,"sizeY":0.115824789,"sizeZ":0.08496991,"top":0.06096458435058594,"bottom":-0.0000972747802734375},"CROSSGUARD_22":{"name":"CROSSGUARD_22","sizeX":0.1578426,"sizeY":0.108088486,"sizeZ":0.12972,"top":0.12972068786621094,"bottom":0},"CROSSGUARD_23":{"name":"CROSSGUARD_23","sizeX":0.101320513,"sizeY":0.07093239,"sizeZ":0.0889549255,"top":0.01157379150390625,"bottom":0},"CROSSGUARD_24":{"name":"CROSSGUARD_24","sizeX":0.1679657,"sizeY":0.16796568,"sizeZ":0.154395118,"top":0.13000106811523438,"bottom":-0.0000019073486328125},"GRIP_1":{"name":"GRIP_1","sizeX":0.0585625656,"sizeY":0.05856257,"sizeZ":0.190068677,"top":0.09000205993652344,"bottom":-0.10007095336914062},"GRIP_2":{"name":"GRIP_2","sizeX":0.052241,"sizeY":0.0522409938,"sizeZ":0.179999992,"top":0.09000205993652344,"bottom":-0.09000205993652344},"GRIP_3":{"name":"GRIP_3","sizeX":0.049999997,"sizeY":0.05224099,"sizeZ":0.179999992,"top":0.09000205993652344,"bottom":-0.09000205993652344},"GRIP_4":{"name":"GRIP_4","sizeX":0.049999997,"sizeY":0.049999997,"sizeZ":0.25,"top":0.12999725341796875,"bottom":-0.12000274658203125},"GRIP_5":{"name":"GRIP_5","sizeX":0.07030134,"sizeY":0.0402402729,"sizeZ":0.166858673,"top":0.0768585205078125,"bottom":-0.09000205993652344},"GRIP_6":{"name":"GRIP_6","sizeX":0.0608405769,"sizeY":0.0608405769,"sizeZ":0.3,"top":0.13000106811523438,"bottom":-0.17000198364257812},"GRIP_7":{"name":"GRIP_7","sizeX":0.049999997,"sizeY":0.0500000045,"sizeZ":0.174999982,"top":0.09000205993652344,"bottom":-0.08499717712402344},"GRIP_8":{"name":"GRIP_8","sizeX":0.0417988524,"sizeY":0.0367368124,"sizeZ":0.209999979,"top":0.10000419616699219,"bottom":-0.10999870300292969},"GRIP_9":{"name":"GRIP_9","sizeX":0.0404,"sizeY":0.0404,"sizeZ":0.149999991,"top":0.07500076293945312,"bottom":-0.07500076293945312},"GRIP_10":{"name":"GRIP_10","sizeX":0.0500000045,"sizeY":0.049999997,"sizeZ":0.175349444,"top":0.09739494323730469,"bottom":-0.07795906066894531},"GRIP_11":{"name":"GRIP_11","sizeX":0.0746078938,"sizeY":0.022,"sizeZ":0.3345894,"top":0.1556854248046875,"bottom":-0.14426231384277344},"GRIP_12":{"name":"GRIP_12","sizeX":0.100969031,"sizeY":0.0521244332,"sizeZ":0.136817724,"top":0.0643157958984375,"bottom":-0.07250022888183594},"GRIP_13":{"name":"GRIP_13","sizeX":0.0460974239,"sizeY":0.0460974276,"sizeZ":0.229999989,"top":0.11500167846679688,"bottom":-0.11500167846679688},"GRIP_14":{"name":"GRIP_14","sizeX":0.049999997,"sizeY":0.049999997,"sizeZ":0.13,"top":0.07500076293945312,"bottom":-0.05500030517578125},"GRIP_15":{"name":"GRIP_15","sizeX":0.07637055,"sizeY":0.07637055,"sizeZ":0.211499214,"top":0.11150169372558594,"bottom":-0.10000228881835938},"GRIP_16":{"name":"GRIP_16","sizeX":0.0478826463,"sizeY":0.0484999977,"sizeZ":0.115,"top":0.05500221252441406,"bottom":-0.05999946594238281},"GRIP_17":{"name":"GRIP_17","sizeX":0.049999997,"sizeY":0.049999997,"sizeZ":0.255,"top":0.12999916076660156,"bottom":-0.125},"GRIP_18":{"name":"GRIP_18","sizeX":0.052877672,"sizeY":0.052877672,"sizeZ":0.200000182,"top":0.10000228881835938,"bottom":-0.10000038146972656},"GRIP_19":{"name":"GRIP_19","sizeX":0.0621875152,"sizeY":0.0500893965,"sizeZ":0.178857177,"top":0.0800018310546875,"bottom":-0.09795761108398438},"GRIP_20":{"name":"GRIP_20","sizeX":0.049999997,"sizeY":0.049999997,"sizeZ":0.155304238,"top":0.08499908447265625,"bottom":-0.07030487060546875},"GRIP_21":{"name":"GRIP_21","sizeX":0.07244115,"sizeY":0.06307693,"sizeZ":0.137516111,"top":0.07737922668457031,"bottom":-0.05945587158203125},"GRIP_22":{"name":"GRIP_22","sizeX":0.055804994,"sizeY":0.05580501,"sizeZ":0.164999992,"top":0.08250236511230469,"bottom":-0.08250236511230469},"GRIP_23":{"name":"GRIP_23","sizeX":0.0498140864,"sizeY":0.0433012731,"sizeZ":0.24,"top":0.12000083923339844,"bottom":-0.12000083923339844},"GRIP_24":{"name":"GRIP_24","sizeX":0.0499999933,"sizeY":0.0299987067,"sizeZ":0.17,"top":0.08500099182128906,"bottom":-0.08500099182128906},"POMMEL_1":{"name":"POMMEL_1","sizeX":0.07959965,"sizeY":0.06210984,"sizeZ":0.07353102,"top":0,"bottom":-0.06875991821289062},"POMMEL_2":{"name":"POMMEL_2","sizeX":0.07449978,"sizeY":0.03722065,"sizeZ":0.1099932,"top":-0.08870506286621094,"bottom":-0.1097869873046875},"POMMEL_3":{"name":"POMMEL_3","sizeX":0.060999997,"sizeY":0.060999997,"sizeZ":0.03120496,"top":0.0000019073486328125,"bottom":-0.031206130981445312},"POMMEL_4":{"name":"POMMEL_4","sizeX":0.09109584,"sizeY":0.09109584,"sizeZ":0.0249999985,"top":0.0000019073486328125,"bottom":-0.02392578125},"POMMEL_5":{"name":"POMMEL_5","sizeX":0.09596167,"sizeY":0.08365951,"sizeZ":0.1326073,"top":0,"bottom":-0.13260650634765625},"POMMEL_6":{"name":"POMMEL_6","sizeX":0.0485121049,"sizeY":0.0485121049,"sizeZ":0.08277618,"top":0,"bottom":0},"POMMEL_7":{"name":"POMMEL_7","sizeX":0.0692945346,"sizeY":0.06929454,"sizeZ":0.07201126,"top":0,"bottom":-0.07201385498046875},"POMMEL_8":{"name":"POMMEL_8","sizeX":0.06343039,"sizeY":0.023786407,"sizeZ":0.0555277169,"top":-0.0000019073486328125,"bottom":-0.0555267333984375},"POMMEL_9":{"name":"POMMEL_9","sizeX":0.08031318,"sizeY":0.049999997,"sizeZ":0.02,"top":0,"bottom":-0.020000457763671875},"POMMEL_10":{"name":"POMMEL_10","sizeX":0.059,"sizeY":0.0510347039,"sizeZ":0.0750861242,"top":0.0000019073486328125,"bottom":-0.07508659362792969},"POMMEL_11":{"name":"POMMEL_11","sizeX":0.062640965,"sizeY":0.06264097,"sizeZ":0.07945695,"top":0.0000019073486328125,"bottom":-0.05560111999511719},"POMMEL_12":{"name":"POMMEL_12","sizeX":0.04905749,"sizeY":0.025216708,"sizeZ":0.03594631,"top":0,"bottom":-0.035945892333984375},"POMMEL_13":{"name":"POMMEL_13","sizeX":0.170097932,"sizeY":0.0506889448,"sizeZ":0.155965671,"top":0.0000019073486328125,"bottom":-0.15596389770507812},"POMMEL_14":{"name":"POMMEL_14","sizeX":0.0426649749,"sizeY":0.0426649749,"sizeZ":0.05408499,"top":0.0000019073486328125,"bottom":-0.05408668518066406},"POMMEL_15":{"name":"POMMEL_15","sizeX":0.07523571,"sizeY":0.0400002152,"sizeZ":0.08427166,"top":0.0000019073486328125,"bottom":-0.0842742919921875},"POMMEL_16":{"name":"POMMEL_16","sizeX":0.06921745,"sizeY":0.04705137,"sizeZ":0.0426586643,"top":0.0000019073486328125,"bottom":-0.042659759521484375},"POMMEL_17":{"name":"POMMEL_17","sizeX":0.0525095873,"sizeY":0.049999997,"sizeZ":0.148065776,"top":0,"bottom":0},"POMMEL_18":{"name":"POMMEL_18","sizeX":0.1514529,"sizeY":0.1514529,"sizeZ":0.05267316,"top":0.0000019073486328125,"bottom":-0.05267333984375},"POMMEL_19":{"name":"POMMEL_19","sizeX":0.06859539,"sizeY":0.0229832977,"sizeZ":0.0596821047,"top":-0.0000019073486328125,"bottom":-0.05968284606933594},"POMMEL_20":{"name":"POMMEL_20","sizeX":0.0456561148,"sizeY":0.0456561148,"sizeZ":0.07542508,"top":-0.06550788879394531,"bottom":-0.0754241943359375},"POMMEL_21":{"name":"POMMEL_21","sizeX":0.153801218,"sizeY":0.0618973672,"sizeZ":0.124310419,"top":0.0002193450927734375,"bottom":-0.11916542053222656},"POMMEL_22":{"name":"POMMEL_22","sizeX":0.0599316545,"sizeY":0.0599316545,"sizeZ":0.0981874242,"top":0,"bottom":-0.09804344177246094},"POMMEL_23":{"name":"POMMEL_23","sizeX":0.0583306774,"sizeY":0.0359905437,"sizeZ":0.067895405,"top":0.0000019073486328125,"bottom":-0.06385231018066406},"POMMEL_24":{"name":"POMMEL_24","sizeX":0.142063409,"sizeY":0.0548370667,"sizeZ":0.06499986,"top":0,"bottom":-0.04658699035644531}}')
    },
    "9e25": function(e, t, a) {},
    "9e38": function(e, t, a) {
        e.exports = a.p + "img/divider4.c5a0f1bf.png"
    },
    a1ac: function(e) {
        e.exports = JSON.parse('{"a":{}}')
    },
    a7f4: function(e) {
        e.exports = JSON.parse('{"a":{}}')
    },
    a99e: function(e) {
        e.exports = JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"character","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"weapon","type":"uint256"},{"indexed":false,"internalType":"uint32","name":"target","type":"uint32"},{"indexed":false,"internalType":"uint24","name":"playerRoll","type":"uint24"},{"indexed":false,"internalType":"uint24","name":"enemyRoll","type":"uint24"},{"indexed":false,"internalType":"uint16","name":"xpGain","type":"uint16"},{"indexed":false,"internalType":"uint256","name":"skillGain","type":"uint256"}],"name":"FightOutcome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"skillAmount","type":"uint256"}],"name":"InGameOnlyFundsGiven","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAME_ADMIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARDS_CLAIM_TAX_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARDS_CLAIM_TAX_MAX","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnWeaponFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"characters","outputs":[{"internalType":"contract Characters","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fightRewardBaseline","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fightRewardGasOffset","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fightTraitBonus","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fightXpGain","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"inGameOnlyFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintCharacterFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintWeaponFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oneFrac","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceOracleSkillPerUsd","outputs":[{"internalType":"contract IPriceOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"promos","outputs":[{"internalType":"contract Promos","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randoms","outputs":[{"internalType":"contract IRandoms","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refillStaminaFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reforgeWeaponFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reforgeWeaponWithDustFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"skillToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeFromGameImpl","outputs":[{"internalType":"contract IStakeFromGame","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInGameOnlyFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weapons","outputs":[{"internalType":"contract Weapons","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_skillToken","type":"address"},{"internalType":"contract Characters","name":"_characters","type":"address"},{"internalType":"contract Weapons","name":"_weapons","type":"address"},{"internalType":"contract IPriceOracle","name":"_priceOracleSkillPerUsd","type":"address"},{"internalType":"contract IRandoms","name":"_randoms","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Promos","name":"_promos","type":"address"}],"name":"migrateTo_ef994e2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IStakeFromGame","name":"_stakeFromGame","type":"address"}],"name":"migrateTo_23b3a8b","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_801f279","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverSkill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_inGameOnlyFunds","type":"uint256"},{"internalType":"uint256","name":"_tokenRewards","type":"uint256"},{"internalType":"uint256","name":"_skillNeeded","type":"uint256"}],"name":"getSkillToSubtract","outputs":[{"internalType":"uint256","name":"fromInGameOnlyFunds","type":"uint256"},{"internalType":"uint256","name":"fromTokenRewards","type":"uint256"},{"internalType":"uint256","name":"fromUserWallet","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"uint256","name":"skillNeeded","type":"uint256"}],"name":"getSkillNeededFromUserWallet","outputs":[{"internalType":"uint256","name":"skillNeededFromUserWallet","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyCharacters","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyWeapons","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint96","name":"playerData","type":"uint96"}],"name":"unpackFightData","outputs":[{"internalType":"uint8","name":"charTrait","type":"uint8"},{"internalType":"uint24","name":"basePowerLevel","type":"uint24"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"char","type":"uint256"},{"internalType":"uint256","name":"wep","type":"uint256"},{"internalType":"uint32","name":"target","type":"uint32"},{"internalType":"uint8","name":"fightMultiplier","type":"uint8"}],"name":"fight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint24","name":"playerBasePower","type":"uint24"},{"internalType":"int128","name":"wepMultiplier","type":"int128"},{"internalType":"uint24","name":"wepBonusPower","type":"uint24"},{"internalType":"uint64","name":"staminaTimestamp","type":"uint64"},{"internalType":"uint256","name":"hour","type":"uint256"},{"internalType":"uint32","name":"target","type":"uint32"}],"name":"verifyFight","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint32","name":"target","type":"uint32"}],"name":"getMonsterPower","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint24","name":"basePower","type":"uint24"},{"internalType":"int128","name":"weaponMultiplier","type":"int128"},{"internalType":"uint24","name":"bonusPower","type":"uint24"}],"name":"getPlayerPower","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint24","name":"traitsCWE","type":"uint24"}],"name":"getPlayerTraitBonusAgainst","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"char","type":"uint256"},{"internalType":"uint256","name":"wep","type":"uint256"}],"name":"getTargets","outputs":[{"internalType":"uint32[4]","name":"","type":"uint32[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"attacker","type":"uint8"},{"internalType":"uint8","name":"defender","type":"uint8"}],"name":"isTraitEffectiveAgainst","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"mintCharacter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"burnWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"burnIDs","type":"uint256[]"}],"name":"burnWeapons","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reforgeID","type":"uint256"},{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"reforgeWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reforgeID","type":"uint256"},{"internalType":"uint8","name":"amountLB","type":"uint8"},{"internalType":"uint8","name":"amount4B","type":"uint8"},{"internalType":"uint8","name":"amount5B","type":"uint8"}],"name":"reforgeWeaponWithDust","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IRandoms","name":"_newRandoms","type":"address"}],"name":"migrateRandoms","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"int128","name":"usdAmount","type":"int128"}],"name":"payContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"uint256","name":"convertedAmount","type":"uint256"}],"name":"payContractConverted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"int128","name":"baseAmount","type":"int128"}],"name":"payPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"uint256","name":"convertedAmount","type":"uint256"}],"name":"payPlayerConverted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"characterID","type":"uint256"},{"internalType":"address","name":"playerAddress","type":"address"}],"name":"approveContractCharacterFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weaponID","type":"uint256"},{"internalType":"address","name":"playerAddress","type":"address"}],"name":"approveContractWeaponFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setCharacterMintValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tenthcents","type":"uint256"}],"name":"setFightRewardBaselineValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setFightRewardGasOffsetValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setWeaponMintValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setBurnWeaponValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setReforgeWeaponValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setReforgeWeaponWithDustValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"points","type":"uint8"}],"name":"setStaminaCostFight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"points","type":"uint8"}],"name":"setDurabilityCostFight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"average","type":"uint256"}],"name":"setFightXpGain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"max","type":"uint256"}],"name":"setCharacterLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"skillAmount","type":"uint256"}],"name":"giveInGameOnlyFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"skillAmount","type":"uint256"}],"name":"giveInGameOnlyFundsFromContractBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int128","name":"usdAmount","type":"int128"}],"name":"usdToSkill","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentHour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokenRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeUnclaimedRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimXpRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTokenRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"char","type":"uint256"}],"name":"getXpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getTokenRewardsFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getTotalSkillOwnedBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwnRewardsClaimTax","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"}]}')
    },
    abe2: function(e) {
        e.exports = JSON.parse('{"a":[{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getRandomSeed","outputs":[{"internalType":"uint256","name":"seed","type":"uint256"}],"stateMutability":"view","type":"function"}]}')
    },
    ac01: function(e, t, a) {
        e.exports = a.p + "img/logo_Text_Source.35c61262.png"
    },
    add9: function(e, t, a) {
        e.exports = a.p + "img/chara-0.38d49d6e.png"
    },
    b66d: function(e, t, a) {},
    baa5: function(e, t, a) {},
    bab5: function(e, t, a) {
        e.exports = a.p + "img/sword-placeholder-5.ef350387.png"
    },
    bc27: function(e) {
        e.exports = JSON.parse('{"a":{}}')
    },
    bf5b: function(e, t, a) {
        "use strict";
        a("d6e4")
    },
    c000: function(e, t, a) {
        "use strict";
        a("60ed")
    },
    c3ef: function(e, t, a) {},
    c920: function(e, t, a) {
        "use strict";
        a("7620")
    },
    cc1e: function(e, t, a) {
        e.exports = a.p + "img/chara-1.3d517577.png"
    },
    cd49: function(e, t, a) {
        "use strict";
        a.r(t);
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var r = a("2b0e")
          , n = a("2f62")
          , o = a("8c4f")
          , l = a("e37d")
          , i = a("5f5b")
          , s = a("b1e0")
          , u = a("d7e4")
          , c = a.n(u)
          , m = a("99e5")
          , d = a.n(m)
          , p = a("3835")
          , h = a("1da1")
          , _ = a("15fd")
          , f = a("b85c")
          , g = a("5530")
          , b = (a("96cf"),
        a("4de4"),
        a("b64b"),
        a("d81d"),
        a("99af"),
        a("4d90"),
        a("d3b7"),
        a("25f0"),
        a("caad"),
        a("2532"),
        a("3ca3"),
        a("ddb0"),
        a("159b"),
        a("a630"),
        a("2ef0"))
          , y = a.n(b)
          , A = (a("b680"),
        a("bc3a"))
          , w = a.n(A)
          , v = a("901e")
          , C = a.n(v);
        C.a.config({
            ROUNDING_MODE: C.a.ROUND_DOWN
        }),
        C.a.config({
            EXPONENTIAL_AT: 100
        });
        var R, M = function(e) {
            var t = "string" === typeof e ? e : String(e);
            return new C.a(t)
        }, T = function() {
            return C.a.minimum.apply(C.a, arguments)
        }, k = function(e) {
            return new C.a(e).div("1000000000000000000").toFixed()
        }, S = a("7289"), O = a("8234"), x = a("bc27"), W = a("f9c9"), P = a("a1ac"), L = a("a7f4"), B = a("12de"), F = a("e709"), E = a("a99e"), I = a("0eb9"), H = a("7e9a"), N = a("e8c0"), D = a("abe2"), X = a("1314"), G = a("27fc");
        function j(e) {
            return (1e3 + 10 * e) * (Math.floor(e / 10) + 1)
        }
        function V(e) {
            for (var t = 16, a = 0; a < e; a++)
                t += t <= 112 ? Math.floor(t / 10) : Math.floor(a - 14 + 1);
            return t
        }
        (function(e) {
            e[e["Fire"] = 0] = "Fire",
            e[e["Earth"] = 1] = "Earth",
            e[e["Lightning"] = 2] = "Lightning",
            e[e["Water"] = 3] = "Water"
        }
        )(R || (R = {}));
        var U, z, K = ["skill", "skill2", "lp", "lp2"];
        function Y(e) {
            return K.includes(e)
        }
        function $(e, t, a) {
            var r = e;
            return t === a ? r = Math.floor(1.07 * r) : t === z.PWR && (r = Math.floor(1.03 * r)),
            r
        }
        function Z(e) {
            return .25 * e
        }
        function q(e, t) {
            return Z($(e.stat1Value, e.stat1Type, t))
        }
        function J(e, t) {
            return Z($(e.stat2Value, e.stat2Type, t))
        }
        function Q(e, t) {
            return Z($(e.stat3Value, e.stat3Type, t))
        }
        function ee(e, t) {
            return 1 + .01 * (q(e, t) + J(e, t) + Q(e, t))
        }
        (function(e) {
            e[e["Fire"] = 0] = "Fire",
            e[e["Ice"] = 1] = "Ice",
            e[e["Light"] = 2] = "Light",
            e[e["Dark"] = 3] = "Dark"
        }
        )(U || (U = {})),
        function(e) {
            e[e["STR"] = 0] = "STR",
            e[e["DEX"] = 1] = "DEX",
            e[e["CHA"] = 2] = "CHA",
            e[e["INT"] = 3] = "INT",
            e[e["PWR"] = 4] = "PWR"
        }(z || (z = {}));
        a("1276"),
        a("ac1f");
        var te = K;
        Object({
            NODE_ENV: "production",
            VUE_APP_STAKING_ONLY: "0",
            VUE_APP_FEATURE_FLAG_RAID: "0",
            VUE_APP_FEATURE_FLAG_REFORGING: "1",
            VUE_APP_FEATURE_FLAG_MARKET: "1",
            VUE_APP_FEATURE_FLAG_MARKET_USE_BLOCKCHAIN: "0",
            VUE_APP_FEATURE_FLAG_PORTAL: "1",
            VUE_APP_WAX_BRIDGE_WAX_WALLET_ADDRESS: "snoui.wam",
            VUE_APP_NETWORK_ID: "137",
            VUE_APP_EXPECTED_NETWORK_ID: "137",
            VUE_APP_EXPECTED_NETWORK_NAME: "Matic",
            VUE_APP_STAKE_TYPE_FOR_UNCLAIMED_REWARDS: "skill",
            VUE_APP_SKILL_TOKEN_CONTRACT_ADDRESS: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
            VUE_APP_SKILL2_TOKEN_CONTRACT_ADDRESS: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
            VUE_APP_LP_TOKEN_CONTRACT_ADDRESS: "0x79761C2f25836F55d8598c183B1Fc01e8A7BFd07",
            VUE_APP_LP_2_TOKEN_CONTRACT_ADDRESS: "0x0E9faFC0a89Be477808014bc926f2965480Fb472",
            VUE_APP_SKILL_STAKING_REWARDS_CONTRACT_ADDRESS: "0xF0CdA97345C75daaAE6d151D66B8A841491A5DF2",
            VUE_APP_SKILL2_STAKING_REWARDS_CONTRACT_ADDRESS: "",
            VUE_APP_LP_STAKING_REWARDS_CONTRACT_ADDRESS: "0x69b2Bc5c2D72B7Af11486B9673E7C1F02dA3906a",
            VUE_APP_LP_2_STAKING_REWARDS_CONTRACT_ADDRESS: "0x69b2Bc5c2D72B7Af11486B9673E7C1F02dA3906a",
            VUE_APP_CRYPTOBLADES_CONTRACT_ADDRESS: "0x84C5ce1AA909c187E23823538f2A9dD6EAACebcD",
            VUE_APP_RAID_CONTRACT_ADDRESS: "0xa09bC1A371b8D80A1f41F7016d0C78604991441D",
            VUE_APP_MARKET_CONTRACT_ADDRESS: "0x5b400939Ea022ec3edf3E548A933Dc5D060C3521",
            VUE_APP_WAX_BRIDGE_CONTRACT_ADDRESS: "0x94a4D2B2c5A6720598B41be1e020cC0c54Be8140",
            BASE_URL: "/"
        }).VUE_APP_STAKE_TYPES_AVAILABLE && (te = Object({
            NODE_ENV: "production",
            VUE_APP_STAKING_ONLY: "0",
            VUE_APP_FEATURE_FLAG_RAID: "0",
            VUE_APP_FEATURE_FLAG_REFORGING: "1",
            VUE_APP_FEATURE_FLAG_MARKET: "1",
            VUE_APP_FEATURE_FLAG_MARKET_USE_BLOCKCHAIN: "0",
            VUE_APP_FEATURE_FLAG_PORTAL: "1",
            VUE_APP_WAX_BRIDGE_WAX_WALLET_ADDRESS: "snoui.wam",
            VUE_APP_NETWORK_ID: "137",
            VUE_APP_EXPECTED_NETWORK_ID: "137",
            VUE_APP_EXPECTED_NETWORK_NAME: "Matic",
            VUE_APP_STAKE_TYPE_FOR_UNCLAIMED_REWARDS: "skill",
            VUE_APP_SKILL_TOKEN_CONTRACT_ADDRESS: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
            VUE_APP_SKILL2_TOKEN_CONTRACT_ADDRESS: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
            VUE_APP_LP_TOKEN_CONTRACT_ADDRESS: "0x79761C2f25836F55d8598c183B1Fc01e8A7BFd07",
            VUE_APP_LP_2_TOKEN_CONTRACT_ADDRESS: "0x0E9faFC0a89Be477808014bc926f2965480Fb472",
            VUE_APP_SKILL_STAKING_REWARDS_CONTRACT_ADDRESS: "0xF0CdA97345C75daaAE6d151D66B8A841491A5DF2",
            VUE_APP_SKILL2_STAKING_REWARDS_CONTRACT_ADDRESS: "",
            VUE_APP_LP_STAKING_REWARDS_CONTRACT_ADDRESS: "0x69b2Bc5c2D72B7Af11486B9673E7C1F02dA3906a",
            VUE_APP_LP_2_STAKING_REWARDS_CONTRACT_ADDRESS: "0x69b2Bc5c2D72B7Af11486B9673E7C1F02dA3906a",
            VUE_APP_CRYPTOBLADES_CONTRACT_ADDRESS: "0x84C5ce1AA909c187E23823538f2A9dD6EAACebcD",
            VUE_APP_RAID_CONTRACT_ADDRESS: "0xa09bC1A371b8D80A1f41F7016d0C78604991441D",
            VUE_APP_MARKET_CONTRACT_ADDRESS: "0x5b400939Ea022ec3edf3E548A933Dc5D060C3521",
            VUE_APP_WAX_BRIDGE_CONTRACT_ADDRESS: "0x94a4D2B2c5A6720598B41be1e020cC0c54Be8140",
            BASE_URL: "/"
        }).VUE_APP_STAKE_TYPES_AVAILABLE.split(",").filter(Y));
        var ae = {
            skill: {
                stakingRewardsAddress: "0xF0CdA97345C75daaAE6d151D66B8A841491A5DF2",
                stakingTokenAddress: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8"
            }
        };
        te.includes("skill2") && (ae.skill2 = {
            stakingRewardsAddress: "",
            stakingTokenAddress: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8"
        }),
        te.includes("lp") && (ae.lp = {
            stakingRewardsAddress: "0x69b2Bc5c2D72B7Af11486B9673E7C1F02dA3906a",
            stakingTokenAddress: "0x79761C2f25836F55d8598c183B1Fc01e8A7BFd07"
        }),
        te.includes("lp2") && (ae.lp2 = {
            stakingRewardsAddress: "0x69b2Bc5c2D72B7Af11486B9673E7C1F02dA3906a",
            stakingTokenAddress: "0x0E9faFC0a89Be477808014bc926f2965480Fb472"
        });
        var re, ne, oe, le, ie, se, ue = {
            skill: {
                stakeTokenName: "SKILL",
                rewardTokenName: "SKILL",
                stakeTitle: "WELCOME TO THE HUBER SECRET MAX PAGE",
                deprecated: !0
            },
            skill2: {
                stakeTokenName: "SKILL",
                rewardTokenName: "SKILL",
                stakeTitle: "Hello"
            },
            lp: {
                stakeTokenName: "SKILL-WBNB",
                rewardTokenName: "SKILL",
                stakeTitle: "MEGA ULTRA MAXI"
            },
            lp2: {
                stakeTokenName: "SKILL-BNB",
                rewardTokenName: "SKILL",
                stakeTitle: "HUBER SECRET MAX PAGE"
            }
        }, ce = ue, me = "skill", de = me && Y(me) ? me : "skill", pe = ["1", "true", "t"].includes("0".toLowerCase()), he = ["1", "true", "t"].includes("0".toLowerCase()), _e = ["1", "true", "t"].includes("1".toLowerCase()), fe = ["1", "true", "t"].includes("1".toLowerCase()), ge = ["1", "true", "t"].includes("0".toLowerCase()), be = ["1", "true", "t"].includes("1".toLowerCase()), ye = "137", Ae = {
            skill: {
                stakingRewardsAddress: null === (re = O["a"][ye]) || void 0 === re ? void 0 : re.address,
                stakingTokenAddress: null === (ne = P["a"][ye]) || void 0 === ne ? void 0 : ne.address
            },
            lp: {
                stakingRewardsAddress: null === (oe = x["a"][ye]) || void 0 === oe ? void 0 : oe.address,
                stakingTokenAddress: null === (le = L["a"][ye]) || void 0 === le ? void 0 : le.address
            },
            lp2: {
                stakingRewardsAddress: null === (ie = W["a"][ye]) || void 0 === ie ? void 0 : ie.address,
                stakingTokenAddress: null === (se = B["a"][ye]) || void 0 === se ? void 0 : se.address
            }
        };
        function we() {
            var e, t = {}, a = Object(f["a"])(Object.keys(ae).filter(Y));
            try {
                for (a.s(); !(e = a.n()).done; ) {
                    var r = e.value
                      , n = ae[r];
                    n.stakingRewardsAddress && n.stakingTokenAddress ? t[r] = {
                        stakingRewardsAddress: n.stakingRewardsAddress,
                        stakingTokenAddress: n.stakingTokenAddress
                    } : t[r] = Object.assign({}, n, Ae[r])
                }
            } catch (o) {
                a.e(o)
            } finally {
                a.f()
            }
            return t
        }
        function ve(e) {
            return Ce.apply(this, arguments)
        }
        function Ce() {
            return Ce = Object(h["a"])(regeneratorRuntime.mark((function e(t) {
                var a, r, n, o, l, i, s, u;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            a = we(),
                            r = {},
                            n = Object(f["a"])(Object.keys(a).filter(Y)),
                            e.prev = 3,
                            n.s();
                        case 5:
                            if ((o = n.n()).done) {
                                e.next = 13;
                                break
                            }
                            if (l = o.value,
                            i = a[l],
                            i.stakingRewardsAddress && i.stakingTokenAddress) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("continue", 11);
                        case 10:
                            r[l] = {
                                StakingRewards: new t.eth.Contract(F["a"],i.stakingRewardsAddress),
                                StakingToken: new t.eth.Contract(S["a"],i.stakingTokenAddress)
                            };
                        case 11:
                            e.next = 5;
                            break;
                        case 13:
                            e.next = 18;
                            break;
                        case 15:
                            e.prev = 15,
                            e.t0 = e["catch"](3),
                            n.e(e.t0);
                        case 18:
                            return e.prev = 18,
                            n.f(),
                            e.finish(18);
                        case 21:
                            return s = "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
                            u = new t.eth.Contract(S["a"],s),
                            e.abrupt("return", {
                                SkillToken: u,
                                staking: r
                            });
                        case 24:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 15, 18, 21]])
            }
            ))),
            Ce.apply(this, arguments)
        }
        function Re(e) {
            return Me.apply(this, arguments)
        }
        function Me() {
            return Me = Object(h["a"])(regeneratorRuntime.mark((function e(t) {
                var a, r, n, o, l, i, s, u, c, m, d, h, _, f, b, y, A;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            ve(t);
                        case 2:
                            if (a = e.sent,
                            !he) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", a);
                        case 5:
                            return r = "0x84C5ce1AA909c187E23823538f2A9dD6EAACebcD",
                            n = new t.eth.Contract(E["a"],r),
                            e.next = 9,
                            Promise.all([n.methods.characters().call(), n.methods.weapons().call(), n.methods.randoms().call()]);
                        case 9:
                            return o = e.sent,
                            l = Object(p["a"])(o, 3),
                            i = l[0],
                            s = l[1],
                            u = l[2],
                            c = new t.eth.Contract(D["a"],u),
                            m = new t.eth.Contract(H["a"],i),
                            d = new t.eth.Contract(N["a"],s),
                            h = {},
                            pe && (_ = "0xa09bC1A371b8D80A1f41F7016d0C78604991441D",
                            h.RaidBasic = new t.eth.Contract(I["a"],_)),
                            f = {},
                            fe && (b = "0x5b400939Ea022ec3edf3E548A933Dc5D060C3521",
                            f.NFTMarket = new t.eth.Contract(X["a"],b)),
                            y = "0x94a4D2B2c5A6720598B41be1e020cC0c54Be8140",
                            A = new t.eth.Contract(G["a"],y),
                            e.abrupt("return", Object(g["a"])(Object(g["a"])(Object(g["a"])(Object(g["a"])({}, a), {}, {
                                CryptoBlades: n,
                                Randoms: c,
                                Characters: m,
                                Weapons: d
                            }, h), f), {}, {
                                WaxBridge: A
                            }));
                        case 24:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Me.apply(this, arguments)
        }
        var Te = "0xe62e6974";
        function ke(e) {
            switch (e) {
            case U.Fire:
                return "Fire";
            case U.Ice:
                return "Ice";
            case U.Dark:
                return "Dark";
            case U.Light:
                return "Light";
            default:
                return "???"
            }
        }
        function Se(e) {
            switch (e) {
            case "Fire":
                return U.Fire;
            case "Ice":
                return U.Ice;
            case "Light":
                return U.Light;
            case "Dark":
                return U.Dark;
            default:
                return 255
            }
        }
        function Oe(e, t) {
            var a = t[0]
              , r = parseInt(t[1], 10)
              , n = t[2]
              , o = ke(+t[2])
              , l = t[3]
              , i = t[4]
              , s = t[5]
              , u = t[6]
              , c = t[7]
              , m = t[8]
              , d = t[9];
            return {
                id: +e,
                xp: a,
                level: r,
                trait: n,
                traitName: o,
                staminaTimestamp: l,
                head: i,
                arms: s,
                torso: u,
                legs: c,
                boots: m,
                race: d
            }
        }
        function xe(e) {
            return e >> 5 & 127
        }
        function We(e) {
            return e % 5
        }
        function Pe(e) {
            return Math.floor(e / 5) % 5
        }
        function Le(e) {
            return Math.floor(Math.floor(e / 5) / 5) % 5
        }
        function Be(e) {
            switch (e) {
            case z.CHA:
                return "CHA";
            case z.DEX:
                return "DEX";
            case z.INT:
                return "INT";
            case z.PWR:
                return "PWR";
            case z.STR:
                return "STR";
            default:
                return "???"
            }
        }
        function Fe(e) {
            return e >> 3 & 3
        }
        function Ee(e, t) {
            var a = t[0]
              , r = t[1]
              , n = t[2]
              , o = t[3]
              , l = +t[4]
              , i = t[5]
              , s = t[6]
              , u = t[7]
              , c = t[8]
              , m = +t[9]
              , d = +t[10]
              , p = +r
              , h = +n
              , _ = +o
              , f = xe(+a)
              , g = We(f)
              , b = Pe(f)
              , y = Le(f)
              , A = Fe(+a)
              , w = 255 & m
              , v = m >> 8 & 255
              , C = m >> 16 & 255
              , R = 7 & +a;
            return {
                id: +e,
                properties: a,
                element: ke(A),
                stat1: Be(g),
                stat1Value: p,
                stat1Type: g,
                stat2: Be(b),
                stat2Value: h,
                stat2Type: b,
                stat3: Be(y),
                stat3Value: _,
                stat3Type: y,
                level: l,
                blade: i,
                crossguard: s,
                grip: u,
                pommel: c,
                stars: R,
                lowStarBurnPoints: w,
                fourStarBurnPoints: v,
                fiveStarBurnPoints: C,
                bonusPower: d
            }
        }
        function Ie(e) {
            var t = parseInt(e, 10);
            return {
                original: e,
                power: 16777215 & t,
                trait: t >> 24
            }
        }
        var He = a("6125")
          , Ne = a.n(He)
          , De = a("f4b3")
          , Xe = a.t(De, 2)
          , Ge = De || Xe
          , je = function(e, t) {
            return t[Math.floor(e() * t.length)]
        }
          , Ve = function(e) {
            var t = Ne()(e.toString())
              , a = je(t, ["one", "two", "three", "more"])
              , r = je(t, ["one", "two", "three", "more"])
              , n = je(t, Ge[a])
              , o = je(t, Ge[r]);
            return "".concat(n, " ").concat(o)
        };
        function Ue(e, t, a) {
            return ze.apply(this, arguments)
        }
        function ze() {
            return ze = Object(h["a"])(regeneratorRuntime.mark((function e(t, a, r) {
                var n, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            r(t.methods).call(a);
                        case 2:
                            return n = e.sent,
                            e.next = 5,
                            t.methods.usdToSkill(n).call(a);
                        case 5:
                            return o = e.sent,
                            e.abrupt("return", o);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ze.apply(this, arguments)
        }
        function Ke(e, t, a, r, n, o, l) {
            return Ye.apply(this, arguments)
        }
        function Ye() {
            return Ye = Object(h["a"])(regeneratorRuntime.mark((function e(t, a, r, n, o, l, i) {
                var s, u, c, m, d;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return s = Object(g["a"])({
                                from: r
                            }, o),
                            u = Object(g["a"])({
                                from: r
                            }, l),
                            e.t0 = C.a,
                            e.next = 5,
                            Ue(t, s, i);
                        case 5:
                            return e.t1 = e.sent,
                            c = new e.t0(e.t1),
                            e.prev = 7,
                            e.next = 10,
                            t.methods.getSkillNeededFromUserWallet(r, c.toString()).call(s).then((function(e) {
                                return new C.a(e)
                            }
                            ));
                        case 10:
                            c = e.sent,
                            e.next = 18;
                            break;
                        case 13:
                            if (e.prev = 13,
                            e.t2 = e["catch"](7),
                            m = c.lte(n),
                            !m) {
                                e.next = 18;
                                break
                            }
                            return e.abrupt("return", null);
                        case 18:
                            return e.next = 20,
                            a.methods.allowance(r, t.options.address).call(s);
                        case 20:
                            if (d = e.sent,
                            !c.lte(d)) {
                                e.next = 23;
                                break
                            }
                            return e.abrupt("return", null);
                        case 23:
                            return e.next = 25,
                            a.methods.approve(t.options.address, c.toString()).send(u);
                        case 25:
                            return e.abrupt("return", e.sent);
                        case 26:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[7, 13]])
            }
            ))),
            Ye.apply(this, arguments)
        }
        var $e = function(e) {
            return {
                from: e.defaultAccount
            }
        };
        function Ze(e, t) {
            var a, r;
            return {
                StakingRewards: (null === (a = e.staking[t]) || void 0 === a ? void 0 : a.StakingRewards) || null,
                StakingToken: (null === (r = e.staking[t]) || void 0 === r ? void 0 : r.StakingToken) || null,
                RewardToken: e.SkillToken
            }
        }
        var qe = {
            ownBalance: "0",
            stakedBalance: "0",
            remainingCapacityForDeposit: "0",
            remainingCapacityForWithdraw: "0",
            contractBalance: "0",
            currentRewardEarned: "0",
            rewardMinimumStakeTime: 0,
            rewardDistributionTimeLeft: 0,
            unlockTimeLeft: 0
        }
          , Je = {
            rewardRate: "0",
            rewardsDuration: 0,
            totalSupply: "0",
            minimumStakeTime: 0
        };
        function Qe(e) {
            return new n["a"].Store({
                state: {
                    contracts: null,
                    eventSubscriptions: function() {
                        return []
                    },
                    accounts: [],
                    defaultAccount: null,
                    currentNetworkId: null,
                    fightGasOffset: "0",
                    fightBaseline: "0",
                    skillBalance: "0",
                    skillRewards: "0",
                    maxRewardsClaimTax: "0",
                    rewardsClaimTax: "0",
                    xpRewards: {},
                    inGameOnlyFunds: "0",
                    directStakeBonusPercent: 10,
                    ownedCharacterIds: [],
                    ownedWeaponIds: [],
                    maxStamina: 0,
                    currentCharacterId: null,
                    characters: {},
                    characterStaminas: {},
                    weapons: {},
                    currentWeaponId: null,
                    weaponDurabilities: {},
                    maxDurability: 0,
                    isInCombat: !1,
                    isCharacterViewExpanded: !localStorage.getItem("isCharacterViewExpanded") || "true" === localStorage.getItem("isCharacterViewExpanded"),
                    targetsByCharacterIdAndWeaponId: {},
                    characterTransferCooldowns: {},
                    staking: {
                        skill: Object(g["a"])({}, qe),
                        skill2: Object(g["a"])({}, qe),
                        lp: Object(g["a"])({}, qe),
                        lp2: Object(g["a"])({}, qe)
                    },
                    stakeOverviews: {
                        skill: Object(g["a"])({}, Je),
                        skill2: Object(g["a"])({}, Je),
                        lp: Object(g["a"])({}, Je),
                        lp2: Object(g["a"])({}, Je)
                    },
                    raid: {
                        expectedFinishTime: "0",
                        raiderCount: 0,
                        bounty: "0",
                        totalPower: "0",
                        weaponDrops: [],
                        staminaDrainSeconds: 0,
                        isOwnedCharacterRaidingById: {}
                    },
                    waxBridgeWithdrawableBnb: "0",
                    waxBridgeRemainingWithdrawableBnbDuringPeriod: "0",
                    waxBridgeTimeUntilLimitExpires: 0
                },
                getters: {
                    contracts: function(e) {
                        return y.a.isFunction(e.contracts) ? e.contracts() : null
                    },
                    availableStakeTypes: function(e) {
                        return Object.keys(e.contracts().staking).filter(Y)
                    },
                    hasStakedBalance: function(e) {
                        if (!e.contracts)
                            return !1;
                        var t, a = e.contracts().staking, r = Object(f["a"])(Object.keys(a).filter(Y));
                        try {
                            for (r.s(); !(t = r.n()).done; ) {
                                var n = t.value;
                                if ("0" !== e.staking[n].stakedBalance)
                                    return !0
                            }
                        } catch (o) {
                            r.e(o)
                        } finally {
                            r.f()
                        }
                        return !1
                    },
                    getTargetsByCharacterIdAndWeaponId: function(e) {
                        return function(t, a) {
                            var r, n = e.targetsByCharacterIdAndWeaponId[t];
                            return n && null !== (r = n[a]) && void 0 !== r ? r : []
                        }
                    },
                    getCharacterName: function() {
                        return function(e) {
                            return Ve(e)
                        }
                    },
                    getCharacterStamina: function(e) {
                        return function(t) {
                            return e.characterStaminas[t]
                        }
                    },
                    getCharacterUnclaimedXp: function(e) {
                        return function(t) {
                            return e.xpRewards[t]
                        }
                    },
                    getWeaponDurability: function(e) {
                        return function(t) {
                            return e.weaponDurabilities[t]
                        }
                    },
                    getExchangeUrl: function() {
                        return "https://quickswap.exchange/#/swap?outputCurrency=0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8"
                    },
                    ownCharacters: function(e, t) {
                        return t.charactersWithIds(e.ownedCharacterIds)
                    },
                    charactersWithIds: function(e) {
                        return function(t) {
                            var a = t.map((function(t) {
                                return e.characters[+t]
                            }
                            ));
                            return a.some((function(e) {
                                return null === e
                            }
                            )) ? [] : a.filter(Boolean)
                        }
                    },
                    ownWeapons: function(e, t) {
                        return t.weaponsWithIds(e.ownedWeaponIds)
                    },
                    weaponsWithIds: function(e) {
                        return function(t) {
                            var a = t.map((function(t) {
                                return e.weapons[+t]
                            }
                            ));
                            return a.some((function(e) {
                                return null === e
                            }
                            )) ? [] : a
                        }
                    },
                    currentWeapon: function(e) {
                        return null === e.currentWeaponId ? null : e.weapons[e.currentWeaponId]
                    },
                    transferCooldownOfCharacterId: function(e) {
                        return function(t) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                              , r = e.characterTransferCooldowns[+t];
                            if (!r)
                                return 0;
                            var n = null === a ? 0 : a - r.lastUpdatedTimestamp;
                            return Math.max(Math.floor(r.secondsLeft - n), 0)
                        }
                    },
                    currentCharacter: function(e) {
                        return null === e.currentCharacterId ? null : e.characters[e.currentCharacterId]
                    },
                    currentCharacterStamina: function(e) {
                        return null === e.currentCharacterId ? 0 : e.characterStaminas[e.currentCharacterId]
                    },
                    timeUntilCurrentCharacterHasMaxStamina: function(e, t) {
                        return t.timeUntilCharacterHasMaxStamina(e.currentCharacterId)
                    },
                    timeUntilCharacterHasMaxStamina: function(e, t) {
                        return function(a) {
                            var r = t.getCharacterStamina(a);
                            if (!r && 0 !== r)
                                return "";
                            var n = new Date;
                            return e.maxStamina !== r && n.setTime(n.getTime() + 3e5 * (e.maxStamina - r)),
                            "".concat((n.getMonth() + 1).toString().padStart(2, "0"), "/").concat(n.getDate().toString().padStart(2, "0"), "/").concat(n.getFullYear().toString().padStart(4, "0"), " ").concat(n.getHours().toString().padStart(2, "0"), ":").concat(n.getMinutes().toString().padStart(2, "0"), ":").concat(n.getSeconds().toString().padStart(2, "0"))
                        }
                    },
                    timeUntilWeaponHasMaxDurability: function(e, t) {
                        return function(a) {
                            var r = t.getWeaponDurability(a);
                            if (null === r || void 0 === r)
                                return "";
                            var n = new Date;
                            return e.maxDurability !== r && n.setTime(n.getTime() + 3e6 * (e.maxDurability - r)),
                            "".concat((n.getMonth() + 1).toString().padStart(2, "0"), "/").concat(n.getDate().toString().padStart(2, "0"), "/").concat(n.getFullYear().toString().padStart(4, "0"), " ").concat(n.getHours().toString().padStart(2, "0"), ":").concat(n.getMinutes().toString().padStart(2, "0"), ":").concat(n.getSeconds().toString().padStart(2, "0"))
                        }
                    },
                    allStaminas: function(e) {
						characterStaminas = 200;
                        return e.characterStaminas
                    },
                    maxRewardsClaimTaxAsFactorBN: function(e) {
                        return M(e.maxRewardsClaimTax).dividedBy(M(2).exponentiatedBy(64))
                    },
                    rewardsClaimTaxAsFactorBN: function(e) {
                        return M(e.rewardsClaimTax).dividedBy(M(2).exponentiatedBy(64))
                    },
                    stakeState: function(e) {
                        return function(t) {
                            return e.staking[t]
                        }
                    },
                    isOwnedCharacterRaiding: function(e) {
                        return !!pe && function(t) {
                            return e.raid.isOwnedCharacterRaidingById[t] || !1
                        }
                    },
                    fightGasOffset: function(e) {
                        return e.fightGasOffset
                    },
                    fightBaseline: function(e) {
                        return e.fightBaseline
                    },
                    getIsInCombat: function(e) {
                        return e.isInCombat
                    },
                    getIsCharacterViewExpanded: function(e) {
                        return e.isCharacterViewExpanded
                    },
                    waxBridgeAmountOfBnbThatCanBeWithdrawnDuringPeriod: function(e) {
                        return T(e.waxBridgeWithdrawableBnb, e.waxBridgeRemainingWithdrawableBnbDuringPeriod).toString()
                    }
                },
                mutations: {
                    setNetworkId: function(e, t) {
                        e.currentNetworkId = t
                    },
                    setAccounts: function(e, t) {
                        e.accounts = t.accounts,
                        t.accounts.length > 0 ? e.defaultAccount = t.accounts[0] : e.defaultAccount = null
                    },
                    setContracts: function(e, t) {
                        e.contracts = t
                    },
                    setEventSubscriptions: function(e, t) {
                        e.eventSubscriptions = t.eventSubscriptions
                    },
                    updateSkillBalance: function(e, t) {
                        var a = t.skillBalance;
                        e.skillBalance = a
                    },
                    updateSkillRewards: function(e, t) {
                        var a = t.skillRewards;
                        e.skillRewards = a
                    },
                    updateRewardsClaimTax: function(e, t) {
                        var a = t.maxRewardsClaimTax
                          , r = t.rewardsClaimTax;
                        e.maxRewardsClaimTax = a,
                        e.rewardsClaimTax = r
                    },
                    updateXpRewards: function(e, t) {
                        var a = t.xpRewards;
                        for (var n in a)
                            r["default"].set(e.xpRewards, n, a[n])
                    },
                    updateInGameOnlyFunds: function(e, t) {
                        var a = t.inGameOnlyFunds;
                        e.inGameOnlyFunds = a
                    },
                    updateFightGasOffset: function(e, t) {
                        var a = t.fightGasOffset;
                        e.fightGasOffset = a
                    },
                    updateFightBaseline: function(e, t) {
                        var a = t.fightBaseline;
                        e.fightBaseline = a
                    },
                    updateUserDetails: function(e, t) {
                        for (var a = ["ownedCharacterIds", "ownedWeaponIds", "maxStamina", "maxDurability"], n = 0, o = a; n < o.length; n++) {
                            var l = o[n];
                            Object.hasOwnProperty.call(t, l) && r["default"].set(e, l, t[l])
                        }
                        !(e.ownedCharacterIds.length > 0) || e.currentCharacterId && e.ownedCharacterIds.includes(e.currentCharacterId) ? 0 === e.ownedCharacterIds.length && (e.currentCharacterId = null) : e.currentCharacterId = e.ownedCharacterIds[0]
                    },
                    setCurrentCharacter: function(e, t) {
                        e.currentCharacterId = t
                    },
                    setIsInCombat: function(e, t) {
                        e.isInCombat = t
                    },
                    setIsCharacterViewExpanded: function(e, t) {
                        e.isCharacterViewExpanded = t,
                        localStorage.setItem("isCharacterViewExpanded", t ? "true" : "false")
                    },
                    addNewOwnedCharacterId: function(e, t) {
                        e.ownedCharacterIds.includes(t) || e.ownedCharacterIds.push(t)
                    },
                    addNewOwnedWeaponId: function(e, t) {
                        e.ownedWeaponIds.includes(t) || e.ownedWeaponIds.push(t)
                    },
                    updateCharacter: function(e, t) {
                        var a = t.characterId
                          , n = t.character;
                        r["default"].set(e.characters, a, n)
                    },
                    updateCharacterTransferCooldown: function(e, t) {
                        var a = t.characterId
                          , n = t.characterTransferCooldown;
                        r["default"].set(e.characterTransferCooldowns, a, n)
                    },
                    updateWeapon: function(e, t) {
                        var a = t.weaponId
                          , n = t.weapon;
                        r["default"].set(e.weapons, a, n)
                    },
                    setCurrentWeapon: function(e, t) {
                        e.currentWeaponId = t
                    },
                    updateWeaponDurability: function(e, t) {
                        var a = t.weaponId
                          , n = t.durability;
                        r["default"].set(e.weaponDurabilities, a, n)
                    },
                    updateCharacterStamina: function(e, t) {
                        var a = t.characterId
                          , n = t.stamina;
                        r["default"].set(e.characterStaminas, a, n)
                    },
                    updateTargets: function(e, t) {
                        var a = t.characterId
                          , n = t.weaponId
                          , o = t.targets;
                        e.targetsByCharacterIdAndWeaponId[a] || r["default"].set(e.targetsByCharacterIdAndWeaponId, a, {}),
                        r["default"].set(e.targetsByCharacterIdAndWeaponId[a], n, o)
                    },
                    updateStakeData: function(e, t) {
                        var a = t.stakeType
                          , n = Object(_["a"])(t, ["stakeType"]);
                        r["default"].set(e.staking, a, n)
                    },
                    updateStakeOverviewDataPartial: function(e, t) {
                        var a = t.stakeType
                          , n = Object(_["a"])(t, ["stakeType"]);
                        r["default"].set(e.stakeOverviews, a, n)
                    },
                    updateRaidData: function(e, t) {
                        e.raid.expectedFinishTime = t.expectedFinishTime,
                        e.raid.raiderCount = t.raiderCount,
                        e.raid.bounty = t.bounty,
                        e.raid.totalPower = t.totalPower,
                        e.raid.weaponDrops = t.weaponDrops,
                        e.raid.staminaDrainSeconds = t.staminaDrainSeconds
                    },
                    updateAllIsOwnedCharacterRaidingById: function(e, t) {
                        e.raid.isOwnedCharacterRaidingById = t
                    },
                    updateWaxBridgeDetails: function(e, t) {
                        e.waxBridgeWithdrawableBnb = t.waxBridgeWithdrawableBnb,
                        e.waxBridgeRemainingWithdrawableBnbDuringPeriod = t.waxBridgeRemainingWithdrawableBnbDuringPeriod,
                        e.waxBridgeTimeUntilLimitExpires = t.waxBridgeTimeUntilLimitExpires
                    }
                },
                actions: {
                    initialize: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.dispatch,
                                        t.next = 3,
                                        a("setUpContracts");
                                    case 3:
                                        return t.next = 5,
                                        a("setUpContractEvents");
                                    case 5:
                                        return t.next = 7,
                                        a("pollAccountsAndNetwork");
                                    case 7:
                                        return t.next = 9,
                                        a("setupCharacterStaminas");
                                    case 9:
                                        return t.next = 11,
                                        a("setupWeaponDurabilities");
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    pollAccountsAndNetwork: function(t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        return r = t.state,
                                        n = t.dispatch,
                                        o = t.commit,
                                        l = !1,
                                        a.next = 4,
                                        e.eth.net.getId();
                                    case 4:
                                        return i = a.sent,
                                        r.currentNetworkId !== i && (o("setNetworkId", i),
                                        l = !0),
                                        a.next = 8,
                                        e.eth.requestAccounts();
                                    case 8:
                                        if (s = a.sent,
                                        y.a.isEqual(r.accounts, s) || (o("setAccounts", {
                                            accounts: s
                                        }),
                                        l = !0),
                                        !l) {
                                            a.next = 13;
                                            break
                                        }
                                        return a.next = 13,
                                        Promise.all([n("setUpContractEvents"), n("fetchUserDetails")]);
                                    case 13:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    setUpContractEvents: function(e) {
                        var t = e.state
                          , a = e.dispatch
                          , r = e.commit;
                        t.eventSubscriptions().forEach((function(e) {
                            return e.unsubscribe()
                        }
                        ));
                        var n = {
                            eventSubscriptions: function() {
                                return []
                            }
                        };
                        if (r("setEventSubscriptions", n),
                        t.defaultAccount) {
                            var o = [];
                            if (!he) {
                                o.push(t.contracts().Characters.events.NewCharacter({
                                    filter: {
                                        minter: t.defaultAccount
                                    }
                                }, function() {
                                    var e = Object(h["a"])(regeneratorRuntime.mark((function e(t, n) {
                                        var o;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (!t) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return console.error(t, n),
                                                    e.abrupt("return");
                                                case 3:
                                                    return o = n.returnValues.character,
                                                    r("addNewOwnedCharacterId", o),
                                                    e.next = 7,
                                                    Promise.all([a("fetchCharacter", o), a("fetchSkillBalance"), a("fetchFightRewardSkill"), a("fetchFightRewardXp")]);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, a) {
                                        return e.apply(this, arguments)
                                    }
                                }())),
                                o.push(t.contracts().Weapons.events.NewWeapon({
                                    filter: {
                                        minter: t.defaultAccount
                                    }
                                }, function() {
                                    var e = Object(h["a"])(regeneratorRuntime.mark((function e(t, n) {
                                        var o;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (!t) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return console.error(t, n),
                                                    e.abrupt("return");
                                                case 3:
                                                    return o = n.returnValues.weapon,
                                                    r("addNewOwnedWeaponId", o),
                                                    e.next = 7,
                                                    Promise.all([a("fetchWeapon", o), a("fetchSkillBalance")]);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, a) {
                                        return e.apply(this, arguments)
                                    }
                                }())),
                                o.push(t.contracts().CryptoBlades.events.FightOutcome({
                                    filter: {
                                        owner: t.defaultAccount
                                    }
                                }, function() {
                                    var e = Object(h["a"])(regeneratorRuntime.mark((function e(t, r) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (!t) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return console.error(t, r),
                                                    e.abrupt("return");
                                                case 3:
                                                    return e.next = 5,
                                                    Promise.all([a("fetchCharacter", r.returnValues.character), a("fetchSkillBalance")]);
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, a) {
                                        return e.apply(this, arguments)
                                    }
                                }())),
                                o.push(t.contracts().CryptoBlades.events.InGameOnlyFundsGiven({
                                    filter: {
                                        to: t.defaultAccount
                                    }
                                }, function() {
                                    var e = Object(h["a"])(regeneratorRuntime.mark((function e(t, r) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (!t) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return console.error(t, r),
                                                    e.abrupt("return");
                                                case 3:
                                                    return e.next = 5,
                                                    Promise.all([a("fetchInGameOnlyFunds")]);
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, a) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                                var l = t.contracts()
                                  , i = l.NFTMarket;
                                i && o.push(i.events.PurchasedListing({
                                    filter: {
                                        seller: t.defaultAccount
                                    }
                                }, function() {
                                    var e = Object(h["a"])(regeneratorRuntime.mark((function e(t, r) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (!t) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return console.error(t, r),
                                                    e.abrupt("return");
                                                case 3:
                                                    return e.next = 5,
                                                    a("fetchSkillBalance");
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, a) {
                                        return e.apply(this, arguments)
                                    }
                                }()))
                            }
                            var s, u = t.contracts().staking, c = Object(f["a"])(Object.keys(u).filter(Y));
                            try {
                                for (c.s(); !(s = c.n()).done; ) {
                                    var m = s.value
                                      , d = u[m];
                                    _(m, d.StakingRewards)
                                }
                            } catch (g) {
                                c.e(g)
                            } finally {
                                c.f()
                            }
                            var p = {
                                eventSubscriptions: function() {
                                    return o
                                }
                            };
                            r("setEventSubscriptions", p)
                        }
                        function _(e, r) {
                            r && (o.push(r.events.RewardPaid({
                                filter: {
                                    user: t.defaultAccount
                                }
                            }, function() {
                                var t = Object(h["a"])(regeneratorRuntime.mark((function t(r, n) {
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                if (!r) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return console.error(r, n),
                                                t.abrupt("return");
                                            case 3:
                                                return t.next = 5,
                                                a("fetchStakeDetails", {
                                                    stakeType: e
                                                });
                                            case 5:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e, a) {
                                    return t.apply(this, arguments)
                                }
                            }())),
                            o.push(r.events.RewardAdded(function() {
                                var t = Object(h["a"])(regeneratorRuntime.mark((function t(r, n) {
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                if (!r) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return console.error(r, n),
                                                t.abrupt("return");
                                            case 3:
                                                return t.next = 5,
                                                a("fetchStakeDetails", {
                                                    stakeType: e
                                                });
                                            case 5:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e, a) {
                                    return t.apply(this, arguments)
                                }
                            }())),
                            o.push(r.events.RewardsDurationUpdated(function() {
                                var t = Object(h["a"])(regeneratorRuntime.mark((function t(r, n) {
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                if (!r) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return console.error(r, n),
                                                t.abrupt("return");
                                            case 3:
                                                return t.next = 5,
                                                a("fetchStakeDetails", {
                                                    stakeType: e
                                                });
                                            case 5:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e, a) {
                                    return t.apply(this, arguments)
                                }
                            }())))
                        }
                    },
                    setUpContracts: function(t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        return r = t.commit,
                                        a.next = 3,
                                        Re(e);
                                    case 3:
                                        n = a.sent,
                                        r("setContracts", (function() {
                                            return n
                                        }
                                        ));
                                    case 5:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchUserDetails: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.dispatch,
                                        r = [a("fetchSkillBalance"), a("fetchWaxBridgeDetails")],
                                        he || r.push(a("fetchUserGameDetails")),
                                        t.next = 5,
                                        Promise.all([r]);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchUserGameDetails: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i, s, u, c;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.dispatch,
                                        n = e.commit,
                                        !he) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5,
                                        Promise.all([a.contracts().CryptoBlades.methods.getMyCharacters().call($e(a)), a.contracts().CryptoBlades.methods.getMyWeapons().call($e(a)), a.contracts().Characters.methods.maxStamina().call($e(a)), a.contracts().Weapons.methods.maxDurability().call($e(a))]);
                                    case 5:
                                        return o = t.sent,
                                        l = Object(p["a"])(o, 4),
                                        i = l[0],
                                        s = l[1],
                                        u = l[2],
                                        c = l[3],
                                        n("updateUserDetails", {
                                            ownedCharacterIds: Array.from(i),
                                            ownedWeaponIds: Array.from(s),
                                            maxStamina: parseInt(u, 10),
                                            maxDurability: parseInt(c, 10)
                                        }),
                                        t.next = 14,
                                        Promise.all([r("fetchCharacters", i), r("fetchWeapons", s), r("fetchFightRewardSkill"), r("fetchFightRewardXp"), r("fetchFightGasOffset"), r("fetchFightBaseline")]);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    updateWeaponIds: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.dispatch,
                                        n = e.commit,
                                        !he) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5,
                                        a.contracts().CryptoBlades.methods.getMyWeapons().call($e(a));
                                    case 5:
                                        return o = t.sent,
                                        n("updateUserDetails", {
                                            ownedWeaponIds: Array.from(o)
                                        }),
                                        t.next = 9,
                                        r("fetchWeapons", o);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    updateCharacterIds: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.dispatch,
                                        n = e.commit,
                                        !he) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5,
                                        a.contracts().CryptoBlades.methods.getMyCharacters().call($e(a));
                                    case 5:
                                        return o = t.sent,
                                        n("updateUserDetails", {
                                            ownedCharacterIds: Array.from(o)
                                        }),
                                        t.next = 9,
                                        r("fetchCharacters", o);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchSkillBalance: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        n = e.dispatch,
                                        o = a.defaultAccount,
                                        o) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        Promise.all([Object(h["a"])(regeneratorRuntime.mark((function e() {
                                            var t;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        a.contracts().SkillToken.methods.balanceOf(o).call($e(a));
                                                    case 2:
                                                        t = e.sent,
                                                        a.skillBalance !== t && r("updateSkillBalance", {
                                                            skillBalance: t
                                                        });
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))(), n("fetchInGameOnlyFunds")]);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchInGameOnlyFunds: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        n = a.contracts(),
                                        o = n.CryptoBlades,
                                        o && a.defaultAccount) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        o.methods.inGameOnlyFunds(a.defaultAccount).call($e(a));
                                    case 6:
                                        l = t.sent,
                                        i = {
                                            inGameOnlyFunds: l
                                        },
                                        r("updateInGameOnlyFunds", i);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    addMoreSkill: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        !he) {
                                            a.next = 3;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 3:
                                        return a.next = 5,
                                        r.contracts().CryptoBlades.methods.recoverSkill(t).send({
                                            from: r.defaultAccount
                                        });
                                    case 5:
                                        return a.next = 7,
                                        n("fetchSkillBalance");
                                    case 7:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchCharacters: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        return r = e.dispatch,
                                        a.next = 3,
                                        Promise.all(t.map((function(e) {
                                            return r("fetchCharacter", e)
                                        }
                                        )));
                                    case 3:
                                        return a.next = 5,
                                        r("fetchOwnedCharacterRaidStatus");
                                    case 5:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchCharacter: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.commit,
                                        o = e.dispatch,
                                        l = r.contracts(),
                                        i = l.Characters,
                                        i) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 4:
                                        return a.next = 6,
                                        Promise.all([Object(h["a"])(regeneratorRuntime.mark((function e() {
                                            var a;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.t0 = Oe,
                                                        e.t1 = t,
                                                        e.next = 4,
                                                        i.methods.get("" + t).call($e(r));
                                                    case 4:
                                                        e.t2 = e.sent,
                                                        a = (0,
                                                        e.t0)(e.t1, e.t2),
                                                        n("updateCharacter", {
                                                            characterId: t,
                                                            character: a
                                                        });
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))(), o("fetchCharacterTransferCooldown", t)]);
                                    case 6:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchCharacterTransferCooldownForOwnCharacters: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.state,
                                        r = e.dispatch,
                                        t.next = 3,
                                        Promise.all(a.ownedCharacterIds.map((function(e) {
                                            return r("fetchCharacterTransferCooldown", e)
                                        }
                                        )));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchCharacterTransferCooldown: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.commit,
                                        o = r.contracts(),
                                        l = o.Characters,
                                        l) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 4:
                                        return a.next = 6,
                                        l.methods.supportsInterface(Te).call($e(r));
                                    case 6:
                                        if (i = a.sent,
                                        i) {
                                            a.next = 9;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 9:
                                        return s = Date.now(),
                                        a.next = 12,
                                        l.methods.transferCooldownLeft(t).call($e(r));
                                    case 12:
                                        u = a.sent,
                                        c = {
                                            characterId: +t,
                                            characterTransferCooldown: {
                                                lastUpdatedTimestamp: s,
                                                secondsLeft: +u
                                            }
                                        },
                                        y.a.isEqual(r.characterTransferCooldowns[+t], c) || n("updateCharacterTransferCooldown", c);
                                    case 15:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchWeapons: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        return r = e.dispatch,
                                        a.next = 3,
                                        Promise.all(t.map((function(e) {
                                            return r("fetchWeapon", e)
                                        }
                                        )));
                                    case 3:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchWeapon: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.commit,
                                        o = r.contracts(),
                                        l = o.Weapons,
                                        l) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 4:
                                        return a.next = 6,
                                        Promise.all([Object(h["a"])(regeneratorRuntime.mark((function e() {
                                            var a;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.t0 = Ee,
                                                        e.t1 = t,
                                                        e.next = 4,
                                                        l.methods.get("" + t).call($e(r));
                                                    case 4:
                                                        e.t2 = e.sent,
                                                        a = (0,
                                                        e.t0)(e.t1, e.t2),
                                                        n("updateWeapon", {
                                                            weaponId: t,
                                                            weapon: a
                                                        });
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))()]);
                                    case 6:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    setupWeaponDurabilities: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i, s, u;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.state,
                                        r = e.dispatch,
                                        t.next = 3,
                                        Promise.all([a.contracts().CryptoBlades.methods.getMyWeapons().call($e(a))]);
                                    case 3:
                                        n = t.sent,
                                        o = Object(p["a"])(n, 1),
                                        l = o[0],
                                        i = Object(f["a"])(l);
                                        try {
                                            for (i.s(); !(s = i.n()).done; )
                                                u = s.value,
                                                r("fetchWeaponDurability", u)
                                        } catch (c) {
                                            i.e(c)
                                        } finally {
                                            i.f()
                                        }
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchWeaponDurability: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.commit,
                                        !he) {
                                            a.next = 3;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 3:
                                        return a.next = 5,
                                        r.contracts().Weapons.methods.getDurabilityPoints("" + t).call($e(r));
                                    case 5:
                                        o = a.sent,
                                        l = parseInt(o, 10),
                                        r.weaponDurabilities[t] !== l && n("updateWeaponDurability", {
                                            weaponId: t,
                                            durability: l
                                        });
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    setupCharacterStaminas: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i, s, u;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.state,
                                        r = e.dispatch,
                                        t.next = 3,
                                        Promise.all([a.contracts().CryptoBlades.methods.getMyCharacters().call($e(a))]);
                                    case 3:
                                        n = t.sent,
                                        o = Object(p["a"])(n, 1),
                                        l = o[0],
                                        i = Object(f["a"])(l);
                                        try {
                                            for (i.s(); !(s = i.n()).done; )
                                                u = s.value,
                                                r("fetchCharacterStamina", u)
                                        } catch (c) {
                                            i.e(c)
                                        } finally {
                                            i.f()
                                        }
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchCharacterStamina: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.commit,
                                        !he) {
                                            a.next = 3;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 3:
                                        return a.next = 5,
                                        r.contracts().Characters.methods.getStaminaPoints("" + t).call($e(r));
                                    case 5:
                                        o = a.sent,
                                        l = parseInt(o, 10),
                                        r.characterStaminas[t] !== l && n("updateCharacterStamina", {
                                            characterId: t,
                                            stamina: l
                                        });
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    mintCharacter: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.dispatch,
                                        !he && a.defaultAccount) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5,
                                        Ke(a.contracts().CryptoBlades, a.contracts().SkillToken, a.defaultAccount, a.skillRewards, $e(a), $e(a), (function(e) {
                                            return e.mintCharacterFee()
                                        }
                                        ));
                                    case 5:
                                        return t.next = 7,
                                        a.contracts().CryptoBlades.methods.mintCharacter().send($e(a));
                                    case 7:
                                        return t.next = 9,
                                        Promise.all([r("fetchFightRewardSkill"), r("fetchFightRewardXp"), r("setupCharacterStaminas")]);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    mintWeapon: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.dispatch,
                                        !he && a.defaultAccount) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5,
                                        Ke(a.contracts().CryptoBlades, a.contracts().SkillToken, a.defaultAccount, a.skillRewards, $e(a), $e(a), (function(e) {
                                            return e.mintWeaponFee()
                                        }
                                        ));
                                    case 5:
                                        return t.next = 7,
                                        a.contracts().CryptoBlades.methods.mintWeapon().send({
                                            from: a.defaultAccount
                                        });
                                    case 7:
                                        return t.next = 9,
                                        Promise.all([r("fetchFightRewardSkill"), r("fetchFightRewardXp"), r("setupWeaponDurabilities")]);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    reforgeWeapon: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.burnWeaponId,
                                        l = t.reforgeWeaponId,
                                        !he && _e && r.defaultAccount) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 4:
                                        return a.next = 6,
                                        Ke(r.contracts().CryptoBlades, r.contracts().SkillToken, r.defaultAccount, r.skillRewards, $e(r), $e(r), (function(e) {
                                            return e.reforgeWeaponFee()
                                        }
                                        ));
                                    case 6:
                                        return a.next = 8,
                                        r.contracts().CryptoBlades.methods.reforgeWeapon(l, o).send({
                                            from: r.defaultAccount
                                        });
                                    case 8:
                                        return a.next = 10,
                                        Promise.all([n("updateWeaponIds"), n("fetchFightRewardSkill"), n("fetchFightRewardXp")]);
                                    case 10:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchTargets: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.commit,
                                        o = t.characterId,
                                        l = t.weaponId,
                                        !he) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 4:
                                        if (!Object(b["isUndefined"])(o) && !Object(b["isUndefined"])(l)) {
                                            a.next = 7;
                                            break
                                        }
                                        return n("updateTargets", {
                                            characterId: o,
                                            weaponId: l,
                                            targets: []
                                        }),
                                        a.abrupt("return");
                                    case 7:
                                        return a.next = 9,
                                        r.contracts().CryptoBlades.methods.getTargets(o, l).call($e(r));
                                    case 9:
                                        i = a.sent,
                                        n("updateTargets", {
                                            characterId: o,
                                            weaponId: l,
                                            targets: i.map(Ie)
                                        });
                                    case 11:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    doEncounter: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c, m, d, p, h;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.characterId,
                                        l = t.weaponId,
                                        i = t.targetString,
                                        s = t.fightMultiplier,
                                        !he) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 4:
                                        return a.next = 6,
                                        r.contracts().CryptoBlades.methods.fight(o, l, i, s).send({
                                            from: r.defaultAccount,
                                            gas: "500000"
                                        });
                                    case 6:
                                        return u = a.sent,
                                        a.next = 9,
                                        n("fetchTargets", {
                                            characterId: o,
                                            weaponId: l
                                        });
                                    case 9:
                                        return c = u.events.FightOutcome.returnValues,
                                        m = c.playerRoll,
                                        d = c.enemyRoll,
                                        p = c.xpGain,
                                        h = c.skillGain,
                                        a.next = 12,
                                        n("fetchWeaponDurability", l);
                                    case 12:
                                        return a.abrupt("return", [parseInt(m, 10) >= parseInt(d, 10), m, d, p, h]);
                                    case 13:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchStakeOverviewData: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.getters,
                                        r = e.dispatch,
                                        t.next = 3,
                                        Promise.all(a.availableStakeTypes.map((function(e) {
                                            return r("fetchStakeOverviewDataPartial", {
                                                stakeType: e
                                            })
                                        }
                                        )));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchStakeOverviewDataPartial: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c, m, d, h, _;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.commit,
                                        o = t.stakeType,
                                        l = Ze(r.contracts(), o),
                                        i = l.StakingRewards,
                                        i) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        Promise.all([i.methods.rewardRate().call($e(r)), i.methods.rewardsDuration().call($e(r)), i.methods.totalSupply().call($e(r)), i.methods.minimumStakeTime().call($e(r))]);
                                    case 7:
                                        s = a.sent,
                                        u = Object(p["a"])(s, 4),
                                        c = u[0],
                                        m = u[1],
                                        d = u[2],
                                        h = u[3],
                                        _ = {
                                            rewardRate: c,
                                            rewardsDuration: parseInt(m, 10),
                                            totalSupply: d,
                                            minimumStakeTime: parseInt(h, 10)
                                        },
                                        n("updateStakeOverviewDataPartial", Object(g["a"])({
                                            stakeType: o
                                        }, _));
                                    case 15:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchStakeDetails: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c, m, d, h, _, f, g, b, y, A, w;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.commit,
                                        o = t.stakeType,
                                        r.defaultAccount) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 4:
                                        if (l = Ze(r.contracts(), o),
                                        i = l.StakingRewards,
                                        s = l.StakingToken,
                                        i && s) {
                                            a.next = 7;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 7:
                                        return a.next = 9,
                                        Promise.all([s.methods.balanceOf(r.defaultAccount).call($e(r)), i.methods.balanceOf(r.defaultAccount).call($e(r)), Promise.resolve(null), i.methods.totalSupply().call($e(r)), s.methods.balanceOf(i.options.address).call($e(r)), i.methods.earned(r.defaultAccount).call($e(r)), i.methods.minimumStakeTime().call($e(r)), i.methods.getStakeRewardDistributionTimeLeft().call($e(r)), i.methods.getStakeUnlockTimeLeft().call($e(r))]);
                                    case 9:
                                        u = a.sent,
                                        c = Object(p["a"])(u, 9),
                                        m = c[0],
                                        d = c[1],
                                        h = c[2],
                                        _ = c[3],
                                        f = c[4],
                                        g = c[5],
                                        b = c[6],
                                        y = c[7],
                                        A = c[8],
                                        w = {
                                            stakeType: o,
                                            ownBalance: m,
                                            stakedBalance: d,
                                            remainingCapacityForDeposit: h,
                                            remainingCapacityForWithdraw: _,
                                            contractBalance: f,
                                            currentRewardEarned: g,
                                            rewardMinimumStakeTime: parseInt(b, 10),
                                            rewardDistributionTimeLeft: parseInt(y, 10),
                                            unlockTimeLeft: parseInt(A, 10)
                                        },
                                        n("updateStakeData", w);
                                    case 22:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    stake: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.amount,
                                        l = t.stakeType,
                                        i = Ze(r.contracts(), l),
                                        s = i.StakingRewards,
                                        u = i.StakingToken,
                                        s && u) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        u.methods.approve(s.options.address, o).send({
                                            from: r.defaultAccount
                                        });
                                    case 7:
                                        return a.next = 9,
                                        s.methods.stake(o).send({
                                            from: r.defaultAccount
                                        });
                                    case 9:
                                        return a.next = 11,
                                        n("fetchStakeDetails", {
                                            stakeType: l
                                        });
                                    case 11:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    unstake: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.amount,
                                        l = t.stakeType,
                                        i = Ze(r.contracts(), l),
                                        s = i.StakingRewards,
                                        s) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        s.methods.withdraw(o).send({
                                            from: r.defaultAccount
                                        });
                                    case 7:
                                        return a.next = 9,
                                        n("fetchStakeDetails", {
                                            stakeType: l
                                        });
                                    case 9:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    stakeUnclaimedRewards: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.stakeType,
                                        o === de) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 4:
                                        if (l = r.contracts(),
                                        i = l.CryptoBlades,
                                        i) {
                                            a.next = 7;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 7:
                                        return a.next = 9,
                                        i.methods.stakeUnclaimedRewards().send($e(r));
                                    case 9:
                                        return a.next = 11,
                                        Promise.all([n("fetchSkillBalance"), n("fetchStakeDetails", {
                                            stakeType: o
                                        }), n("fetchFightRewardSkill")]);
                                    case 11:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    claimReward: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.stakeType,
                                        l = Ze(r.contracts(), o),
                                        i = l.StakingRewards,
                                        i) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        i.methods.getReward().send({
                                            from: r.defaultAccount
                                        });
                                    case 7:
                                        return a.next = 9,
                                        n("fetchStakeDetails", {
                                            stakeType: o
                                        });
                                    case 9:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchRaidData: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i, s, u, c, m, d, h;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        !he && pe) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return n = a.contracts().RaidBasic,
                                        t.next = 6,
                                        Promise.all([n.methods.getExpectedFinishTime().call($e(a)), n.methods.getRaiderCount().call($e(a)), Promise.resolve("0"), n.methods.getTotalPower().call($e(a)), n.methods.getWeaponDrops().call($e(a)), n.methods.getStaminaDrainSeconds().call($e(a))]);
                                    case 6:
                                        o = t.sent,
                                        l = Object(p["a"])(o, 6),
                                        i = l[0],
                                        s = l[1],
                                        u = l[2],
                                        c = l[3],
                                        m = l[4],
                                        d = l[5],
                                        h = {
                                            expectedFinishTime: i,
                                            raiderCount: parseInt(s, 10),
                                            bounty: u,
                                            totalPower: c,
                                            weaponDrops: m,
                                            staminaDrainSeconds: parseInt(d, 10)
                                        },
                                        r("updateRaidData", h);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchOwnedCharacterRaidStatus: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        !he && pe) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return n = a.contracts().RaidBasic,
                                        o = y.a.clone(a.ownedCharacterIds),
                                        t.next = 7,
                                        Promise.all(o.map((function(e) {
                                            return n.methods.isRaider("" + e).call($e(a))
                                        }
                                        )));
                                    case 7:
                                        l = t.sent,
                                        i = y.a.fromPairs(y.a.zip(o, l)),
                                        r("updateAllIsOwnedCharacterRaidingById", i);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchAllMarketNftIds: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = r.contracts(),
                                        l = o.NFTMarket,
                                        l) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        l.methods.getListingIDs(n).call($e(r));
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchNumberOfWeaponListings: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.trait,
                                        l = t.stars,
                                        i = r.contracts(),
                                        s = i.NFTMarket,
                                        s) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        s.methods.getNumberOfWeaponListings(n, o, l).call($e(r));
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchNumberOfCharacterListings: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.trait,
                                        l = t.minLevel,
                                        i = t.maxLevel,
                                        s = r.contracts(),
                                        u = s.NFTMarket,
                                        u) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        u.methods.getNumberOfCharacterListings(n, o, l, i).call($e(r));
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchAllMarketCharacterNftIdsPage: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c, m;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.limit,
                                        l = t.pageNumber,
                                        i = t.trait,
                                        s = t.minLevel,
                                        u = t.maxLevel,
                                        c = r.contracts(),
                                        m = c.NFTMarket,
                                        m) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        m.methods.getCharacterListingIDsPage(n, o, l, i, s, u).call($e(r));
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchAllMarketWeaponNftIdsPage: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.limit,
                                        l = t.pageNumber,
                                        i = t.trait,
                                        s = t.stars,
                                        u = r.contracts(),
                                        c = u.NFTMarket,
                                        c) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        c.methods.getWeaponListingIDsPage(n, o, l, i, s).call($e(r));
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchMarketNftIdsBySeller: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.sellerAddr,
                                        l = r.contracts(),
                                        i = l.NFTMarket,
                                        i) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        i.methods.getListingIDsBySeller(n, o).call($e(r));
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchMarketNftPrice: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.tokenId,
                                        l = r.contracts(),
                                        i = l.NFTMarket,
                                        i) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        i.methods.getFinalPrice(n, o).call($e(r));
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchMarketTax: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = r.contracts(),
                                        l = o.NFTMarket,
                                        l) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        l.methods.tax(n).call($e(r));
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    checkMarketItemOwnership: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.tokenId,
                                        l = r.contracts(),
                                        i = l.NFTMarket,
                                        s = l.Weapons,
                                        u = l.Characters,
                                        i && s && u) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return c = n === s.options.address ? s : u,
                                        a.next = 8,
                                        c.methods.ownerOf(o).call($e(r));
                                    case 8:
                                        return a.abrupt("return", a.sent);
                                    case 9:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    addMarketListing: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c, m, d, p, h, _, f;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.nftContractAddr,
                                        l = t.tokenId,
                                        i = t.price,
                                        s = r.contracts(),
                                        u = s.NFTMarket,
                                        c = s.Weapons,
                                        m = s.Characters,
                                        u && c && m) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return d = o === c.options.address ? c : m,
                                        a.next = 8,
                                        d.methods.approve(u.options.address, l).send($e(r));
                                    case 8:
                                        return a.next = 10,
                                        u.methods.addListing(o, l, i).send({
                                            from: r.defaultAccount
                                        });
                                    case 10:
                                        if (p = a.sent,
                                        o !== c.options.address) {
                                            a.next = 16;
                                            break
                                        }
                                        return a.next = 14,
                                        n("updateWeaponIds");
                                    case 14:
                                        a.next = 19;
                                        break;
                                    case 16:
                                        if (o !== m.options.address) {
                                            a.next = 19;
                                            break
                                        }
                                        return a.next = 19,
                                        n("updateCharacterIds");
                                    case 19:
                                        return h = p.events.NewListing.returnValues,
                                        _ = h.seller,
                                        f = h.nftID,
                                        a.abrupt("return", {
                                            seller: _,
                                            nftID: f,
                                            price: i
                                        });
                                    case 21:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    changeMarketListingPrice: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c, m, d;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.tokenId,
                                        l = t.newPrice,
                                        i = r.contracts(),
                                        s = i.NFTMarket,
                                        s) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        s.methods.changeListingPrice(n, o, l).send({
                                            from: r.defaultAccount
                                        });
                                    case 7:
                                        return u = a.sent,
                                        c = u.events.ListingPriceChange.returnValues,
                                        m = c.seller,
                                        d = c.nftID,
                                        a.abrupt("return", {
                                            seller: m,
                                            nftID: d,
                                            newPrice: l
                                        });
                                    case 10:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    cancelMarketListing: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c, m, d, p, h;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.nftContractAddr,
                                        l = t.tokenId,
                                        i = r.contracts(),
                                        s = i.NFTMarket,
                                        u = i.Weapons,
                                        c = i.Characters,
                                        s && u && c) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        s.methods.cancelListing(o, l).send({
                                            from: r.defaultAccount
                                        });
                                    case 7:
                                        if (m = a.sent,
                                        o !== u.options.address) {
                                            a.next = 13;
                                            break
                                        }
                                        return a.next = 11,
                                        n("updateWeaponIds");
                                    case 11:
                                        a.next = 16;
                                        break;
                                    case 13:
                                        if (o !== c.options.address) {
                                            a.next = 16;
                                            break
                                        }
                                        return a.next = 16,
                                        n("updateCharacterIds");
                                    case 16:
                                        return d = m.events.CancelledListing.returnValues,
                                        p = d.seller,
                                        h = d.nftID,
                                        a.abrupt("return", {
                                            seller: p,
                                            nftID: h
                                        });
                                    case 18:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    purchaseMarketListing: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s, u, c, m, d, p, h, _, f, g;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = e.dispatch,
                                        o = t.nftContractAddr,
                                        l = t.tokenId,
                                        i = t.maxPrice,
                                        s = r.contracts(),
                                        u = s.SkillToken,
                                        c = s.NFTMarket,
                                        m = s.Weapons,
                                        d = s.Characters,
                                        c && m && d) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        u.methods.approve(c.options.address, i).send($e(r));
                                    case 7:
                                        return a.next = 9,
                                        c.methods.purchaseListing(o, l, i).send({
                                            from: r.defaultAccount
                                        });
                                    case 9:
                                        if (p = a.sent,
                                        o !== m.options.address) {
                                            a.next = 15;
                                            break
                                        }
                                        return a.next = 13,
                                        n("updateWeaponIds");
                                    case 13:
                                        a.next = 18;
                                        break;
                                    case 15:
                                        if (o !== d.options.address) {
                                            a.next = 18;
                                            break
                                        }
                                        return a.next = 18,
                                        n("updateCharacterIds");
                                    case 18:
                                        return h = p.events.PurchasedListing.returnValues,
                                        _ = h.seller,
                                        f = h.nftID,
                                        g = h.price,
                                        a.abrupt("return", {
                                            seller: _,
                                            nftID: f,
                                            price: g
                                        });
                                    case 20:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchSellerOfNft: function(e, t) {
                        return Object(h["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, o, l, i, s;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (r = e.state,
                                        n = t.nftContractAddr,
                                        o = t.tokenId,
                                        l = r.contracts(),
                                        i = l.NFTMarket,
                                        i) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 5:
                                        return a.next = 7,
                                        i.methods.getSellerOfNftID(n, o).call($e(r));
                                    case 7:
                                        return s = a.sent,
                                        a.abrupt("return", s);
                                    case 9:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))()
                    },
                    fetchFightGasOffset: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        n = a.contracts(),
                                        o = n.CryptoBlades,
                                        o) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        Ue(o, $e(a), (function(e) {
                                            return e.fightRewardGasOffset()
                                        }
                                        ));
                                    case 6:
                                        return l = t.sent,
                                        r("updateFightGasOffset", {
                                            fightGasOffset: l
                                        }),
                                        t.abrupt("return", l);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchFightBaseline: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        n = a.contracts(),
                                        o = n.CryptoBlades,
                                        o) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        Ue(o, $e(a), (function(e) {
                                            return e.fightRewardBaseline()
                                        }
                                        ));
                                    case 6:
                                        return l = t.sent,
                                        r("updateFightBaseline", {
                                            fightBaseline: l
                                        }),
                                        t.abrupt("return", l);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchFightRewardSkill: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i, s, u;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        n = e.dispatch,
                                        o = a.contracts(),
                                        l = o.CryptoBlades,
                                        l) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        Promise.all([Object(h["a"])(regeneratorRuntime.mark((function e() {
                                            var t;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        l.methods.getTokenRewards().call($e(a));
                                                    case 2:
                                                        return t = e.sent,
                                                        r("updateSkillRewards", {
                                                            skillRewards: t
                                                        }),
                                                        e.abrupt("return", t);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))(), n("fetchRewardsClaimTax")]);
                                    case 6:
                                        return i = t.sent,
                                        s = Object(p["a"])(i, 1),
                                        u = s[0],
                                        t.abrupt("return", u);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchRewardsClaimTax: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i, s, u;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        n = a.contracts(),
                                        o = n.CryptoBlades,
                                        o) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        Promise.all([o.methods.getOwnRewardsClaimTax().call($e(a)), o.methods.REWARDS_CLAIM_TAX_MAX().call($e(a))]);
                                    case 6:
                                        l = t.sent,
                                        i = Object(p["a"])(l, 2),
                                        s = i[0],
                                        u = i[1],
                                        r("updateRewardsClaimTax", {
                                            maxRewardsClaimTax: u,
                                            rewardsClaimTax: s
                                        });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchFightRewardXp: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        n = a.contracts(),
                                        o = n.CryptoBlades,
                                        o) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        Promise.all(a.ownedCharacterIds.map(function() {
                                            var e = Object(h["a"])(regeneratorRuntime.mark((function e(t) {
                                                var r;
                                                return regeneratorRuntime.wrap((function(e) {
                                                    while (1)
                                                        switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                            o.methods.getXpRewards(t).call($e(a));
                                                        case 2:
                                                            return r = e.sent,
                                                            e.abrupt("return", [t, r]);
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                        }
                                                }
                                                ), e)
                                            }
                                            )));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 6:
                                        return l = t.sent,
                                        r("updateXpRewards", {
                                            xpRewards: y.a.fromPairs(l)
                                        }),
                                        t.abrupt("return", l);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    claimTokenRewards: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.dispatch,
                                        n = a.contracts(),
                                        o = n.CryptoBlades,
                                        o) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        o.methods.claimTokenRewards().send({
                                            from: a.defaultAccount
                                        });
                                    case 6:
                                        return t.next = 8,
                                        Promise.all([r("fetchSkillBalance"), r("fetchFightRewardSkill")]);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    claimXpRewards: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.dispatch,
                                        n = a.contracts(),
                                        o = n.CryptoBlades,
                                        o) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        o.methods.claimXpRewards().send({
                                            from: a.defaultAccount
                                        });
                                    case 6:
                                        return t.next = 8,
                                        Promise.all([r("fetchCharacters", a.ownedCharacterIds), r("fetchFightRewardXp")]);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    fetchWaxBridgeDetails: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o, l, i, s, u, c, m;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.commit,
                                        n = a.contracts(),
                                        o = n.WaxBridge,
                                        o && a.defaultAccount) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        Promise.all([o.methods.withdrawableBnb(a.defaultAccount).call($e(a)), o.methods.getRemainingWithdrawableBnbDuringPeriod().call($e(a)), o.methods.getTimeUntilLimitExpires().call($e(a))]);
                                    case 6:
                                        l = t.sent,
                                        i = Object(p["a"])(l, 3),
                                        s = i[0],
                                        u = i[1],
                                        c = i[2],
                                        m = {
                                            waxBridgeWithdrawableBnb: s,
                                            waxBridgeRemainingWithdrawableBnbDuringPeriod: u,
                                            waxBridgeTimeUntilLimitExpires: +c
                                        },
                                        r("updateWaxBridgeDetails", m);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    withdrawBnbFromWaxBridge: function(e) {
                        return Object(h["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state,
                                        r = e.dispatch,
                                        n = a.contracts(),
                                        o = n.WaxBridge,
                                        o && a.defaultAccount) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                        o.methods.withdraw(a.waxBridgeWithdrawableBnb).send($e(a));
                                    case 6:
                                        return t.next = 8,
                                        r("fetchWaxBridgeDetails");
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    }
                }
            })
        }
        var et = a("2909")
          , tt = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [0 === e.ownCharacters.length ? a("div", {
                staticClass: "blank-slate"
            }, [e._m(0), a("big-button", {
                staticClass: "button",
                attrs: {
                    mainText: "Summon Hero for " + e.recruitCost + " SICKLE",
                    tagname: "recruit_character"
                },
                on: {
                    click: e.onMintCharacter
                }
            }), e.formatSkill() < e.recruitCost ? a("div", [a("br"), e._v(" You can buy more SICKLE from "), a("a", {
                attrs: {
                    href: "" + e.getExchangeUrl,
                    target: "_blank"
                }
            }, [e._v("here")]), e._v(". ")]) : e._e()], 1) : e._e(), e.ownCharacters.length > 0 ? a("div", {
                staticClass: "row mt-3"
            }, [a("div", {
                staticClass: "col"
            }, [e.ownCharacters.length > 0 ? a("div", [a("div", {
                staticClass: "d-flex justify-content-space-between"
            }, [a("h1", [e._v("Heroes (" + e._s(e.ownCharacters.length) + " / 4)")]), e.ownCharacters.length < 4 ? a("b-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Summon Hero",
                    expression: "'Summon Hero'"
                }],
                staticClass: "ml-auto gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "recruit_character"
                },
                on: {
                    click: e.onMintCharacter
                }
            }, [e._v(" Summon (" + e._s(e.recruitCost) + " SICKLE) "), a("i", {
                staticClass: "fas fa-plus"
            })]) : e._e()], 1), a("character-list", {
                attrs: {
                    value: e.currentCharacterId
                },
                on: {
                    input: e.setCurrentCharacter
                }
            })], 1) : e._e()])]) : e._e()])
        }
          , at = [function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "current-promotion"
            }, [r("div", {
                staticClass: "tob-bg-img promotion-decoration"
            }, [r("img", {
                staticClass: "vertical-decoration bottom",
                attrs: {
                    src: a("e8bb")
                }
            })]), r("strong", {
                staticClass: "upper-text"
            }, [e._v("Start your adventure today!")]), r("div", {
                staticClass: "bot-bg-img promotion-decoration"
            }, [r("img", {
                attrs: {
                    src: a("e8bb")
                }
            })])])
        }
        ]
          , rt = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("b-button", {
                staticClass: "button main-font dark-bg-text",
                attrs: {
                    variant: "primary",
                    disabled: e.disabled
                },
                on: {
                    click: function(t) {
                        return e.$emit("click")
                    }
                }
            }, [a("h1", [e._v(e._s(e.mainText))]), a("h2", [e._v(e._s(e.subText))])])
        }
          , nt = []
          , ot = {
            props: ["mainText", "subText", "disabled"]
        }
          , lt = ot
          , it = (a("18a4"),
        a("2877"))
          , st = Object(it["a"])(lt, rt, nt, !1, null, null, null)
          , ut = st.exports
          , ct = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.showFilters ? a("div", {
                staticClass: "filters row mt-2 pl-2"
            }, [a("div", {
                staticClass: "col-2"
            }, [a("strong", [e._v("Level")]), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.levelFilter,
                    expression: "levelFilter"
                }],
                staticClass: "form-control",
                on: {
                    change: [function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.levelFilter = t.target.multiple ? a : a[0]
                    }
                    , function(t) {
                        return e.saveFilters()
                    }
                    ]
                }
            }, e._l(["", 1, 11, 21, 31, 41, 51, 61, 71, 81, 91], (function(t) {
                return a("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(" " + e._s(t ? t + " - " + (t + 9) : "Any") + " ")])
            }
            )), 0)]), a("div", {
                staticClass: "col-2"
            }, [a("strong", [e._v("Element")]), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.elementFilter,
                    expression: "elementFilter"
                }],
                staticClass: "form-control",
                on: {
                    change: [function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.elementFilter = t.target.multiple ? a : a[0]
                    }
                    , function(t) {
                        return e.saveFilters()
                    }
                    ]
                }
            }, e._l(["", "Ice", "Fire", "Light", "Dark"], (function(t) {
                return a("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(e._s(t || "Any"))])
            }
            )), 0)]), e.isMarket ? a("div", {
                staticClass: "col-2"
            }, [a("strong", [e._v("Sort")]), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.priceSort,
                    expression: "priceSort"
                }],
                staticClass: "form-control",
                on: {
                    change: [function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.priceSort = t.target.multiple ? a : a[0]
                    }
                    , function(t) {
                        return e.saveFilters()
                    }
                    ]
                }
            }, e._l(e.sorts, (function(t) {
                return a("option", {
                    key: t.dir,
                    domProps: {
                        value: t.dir
                    }
                }, [e._v(e._s(t.name || "Any"))])
            }
            )), 0)]) : e._e(), a("b-button", {
                staticClass: "ml-3 clear-filters-button",
                attrs: {
                    variant: "primary"
                },
                on: {
                    click: e.clearFilters
                }
            }, [a("span", [e._v(" Clear Filters ")])])], 1) : e._e(), a("ul", {
                staticClass: "character-list"
            }, e._l(e.filteredCharacters, (function(t) {
                return a("li", {
                    key: t.id,
                    staticClass: "character",
                    class: {
                        selected: e.value === t.id
                    },
                    on: {
                        click: function(a) {
                            return e.$emit("input", t.id)
                        }
                    }
                }, [e.$slots.above || e.$scopedSlots.above ? a("div", {
                    staticClass: "above-wrapper"
                }, [e._t("above", null, {
                    character: t
                })], 2) : e._e(), e._t("sold", null, {
                    character: t
                }), a("div", {
                    staticClass: "art"
                }, [a("CharacterArt", {
                    attrs: {
                        character: t,
                        isMarket: e.isMarket
                    }
                })], 1)], 2)
            }
            )), 0)])
        }
          , mt = []
          , dt = (a("a9e3"),
        a("fb6a"),
        a("add9"))
          , pt = a.n(dt)
          , ht = a("cc1e")
          , _t = a.n(ht)
          , ft = a("46fc")
          , gt = a.n(ft)
          , bt = a("4939")
          , yt = a.n(bt)
          , At = [pt.a, _t.a, gt.a, yt.a];
        function wt(e) {
            return e ? At[e.id % At.length] : null
        }
        var vt = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.tooltipHtml(e.character),
                    expression: "tooltipHtml(character)"
                }],
                ref: "el",
                staticClass: "character-art"
            }, [e.portrait ? e._e() : a("div", {
                staticClass: "trait"
            }, [a("span", {
                class: e.trait.toLowerCase() + "-icon circle-element"
            })]), a("div", {
                staticClass: "placeholder d-flex align-items-start justify-content-center p-1"
            }, [a("div", {
                staticClass: "w-100",
                class: {
                    "h-100": !e.isMarket,
                    "h-75": e.isMarket
                },
                style: {
                    "background-image": "url(" + e.getCharacterArt(e.character) + ")"
                }
            })]), e.allLoaded ? e._e() : a("div", {
                staticClass: "loading-container"
            }, [a("i", {
                staticClass: "fas fa-spinner fa-spin"
            })]), a("div", {
                staticClass: "name-lvl-container"
            }, [e.portrait ? e._e() : a("div", {
                staticClass: "name black-outline"
            }, [e._v(e._s(e.getCharacterName(e.character.id)) + " ")]), e.portrait ? e._e() : a("div", [e._v("Lv."), a("span", {
                staticClass: "white"
            }, [e._v(e._s(e.character.level + 1))])])]), a("div", {
                staticClass: "score-id-container"
            }, [e.portrait ? e._e() : a("div", {
                staticClass: "black-outline"
            }, [e._v("ID "), a("span", {
                staticClass: "white"
            }, [e._v(e._s(e.character.id))])]), e.portrait ? e._e() : a("div", {
                staticClass: "black-outline"
            })]), !e.portrait && e.isMarket ? a("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: e.staminaToolTipHtml(e.timeUntilCharacterHasMaxStamina(e.character.id)),
                    expression: "staminaToolTipHtml(timeUntilCharacterHasMaxStamina(character.id))",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "small-stamina-char",
                style: "--staminaReady: " + e.timestampToStamina(e.character.staminaTimestamp) / e.maxStamina * 100 + "%;"
            }, [a("div", {
                staticClass: "stamina-text black-outline"
            }, [e._v("MANA " + e._s(e.timestampToStamina(e.character.staminaTimestamp)) + " / 200")])]) : e._e(), e.portrait ? e._e() : a("div", {
                staticClass: "xp"
            }, [a("b-progress", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "Claimable XP " + this.getCharacterUnclaimedXp(e.character.id),
                    expression: "`Claimable XP ${this.getCharacterUnclaimedXp(character.id)}`",
                    modifiers: {
                        bottom: !0
                    }
                }],
                attrs: {
                    max: e.RequiredXp(e.character.level),
                    variant: "success"
                }
            }, [a("strong", {
                staticClass: "outline xp-text"
            }, [e._v(e._s(e.character.xp || 0) + " / " + e._s(e.RequiredXp(e.character.level)) + " XP")]), a("b-progress-bar", {
                attrs: {
                    value: e.character.xp || 0
                }
            })], 1)], 1)])
        }
          , Ct = []
          , Rt = a("5a89")
          , Mt = a("8710")
          , Tt = a("261b")
          , kt = a("342c")
          , St = a("3ac1")
          , Ot = a("6aa4")
          , xt = a("f9f7")
          , Wt = a("ed13")
          , Pt = 13
          , Lt = 45
          , Bt = 61
          , Ft = 41
          , Et = 22
          , It = .01;
        function Ht(e) {
            e.getObjectByName("Base_HumanRUpperarm1").rotation.y += 75 / 180 * Math.PI,
            e.getObjectByName("Base_HumanLUpperarm1").rotation.y -= 75 / 180 * Math.PI,
            e.scale.set(It, It, It)
        }
        var Nt = {
            props: ["character", "portrait", "isMarket"],
            components: {},
            watch: {
                character: function() {
                    this.clearScene(),
                    this.setupModel()
                }
            },
            data: function() {
                return {
                    allLoaded: !1,
                    allLoadStarted: !1,
                    camera: null,
                    scene: null,
                    renderer: null,
                    baseMaterial: null,
                    loadCount: 0,
                    loadCountTotal: 0,
                    modelLoader: null,
                    textureLoader: null,
                    body: null,
                    trait: R[this.character.trait],
                    showPlaceholder: !1,
                    heroScore: 0
                }
            },
            computed: Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["maxStamina"])), Object(n["c"])(["getCharacterName", "transferCooldownOfCharacterId", "getCharacterUnclaimedXp", "timeUntilCharacterHasMaxStamina"])),
            methods: {
                RequiredXp: V,
                tooltipHtml: function(e) {
                    if (!e)
                        return "";
                    var t = this.transferCooldownOfCharacterId(this.character.id);
                    return t ? 86400 === t ? "May not be traded for: 1 day" : "May not be traded for: ".concat(new Date(1e3 * t).toISOString().substr(11, 8)) : ""
                },
                staminaToolTipHtml: function(e) {
                    return "Regenerates 1 point every 5 minutes, mana  will be full at: " + e
                },
                timestampToStamina: function(e) {
                    return e > Math.floor(Date.now() / 1e3) ? 0 : +Math.min((Math.floor(Date.now() / 1e3) - e) / 300, 200).toFixed(0)
                },
                getCharacterArt: wt,
                init: function() {
                    var e = this
                      , t = this.$refs.el;
                    if (this.camera = new Rt["F"](70,t.clientWidth / t.clientHeight,.01,1e3),
                    this.camera.position.z = 1.65,
                    this.scene = new Rt["L"],
                    this.renderer = new Rt["V"]({
                        antialias: !0,
                        alpha: !0
                    }),
                    this.renderer.setPixelRatio(window.devicePixelRatio),
                    this.renderer.setClearColor(0, 0),
                    this.renderer.setSize(t.clientWidth, t.clientHeight),
                    this.renderer.getContext().canvas.addEventListener("webglcontextlost", (function(t) {
                        t.preventDefault(),
                        e.setupModel()
                    }
                    ), !1),
                    t.appendChild(this.renderer.domElement),
                    null === this.baseMaterial) {
                        this.baseMaterial = new Rt["B"],
                        this.baseMaterial.skinning = !0,
                        this.baseMaterial.aoMapIntensity = 1,
                        this.baseMaterial.envMapIntensity = 1,
                        this.baseMaterial.metalness = .25,
                        this.baseMaterial.roughness = .5;
                        var a = new Rt["h"];
                        a.load(["textures/cubemap/001_studioHDRI.hdr_Rig.png", "textures/cubemap/001_studioHDRI.hdr_Lef.png", "textures/cubemap/001_studioHDRI.hdr_Top.png", "textures/cubemap/001_studioHDRI.hdr_Bot.png", "textures/cubemap/001_studioHDRI.hdr_Fro.png", "textures/cubemap/001_studioHDRI.hdr_Bak.png"], (function(t) {
                            e.baseMaterial.envMap = t
                        }
                        ), void 0, (function(e) {
                            console.error(e)
                        }
                        ))
                    }
                    this.setupModel()
                },
                clearScene: function() {
                    void 0 !== this.scene && null !== this.scene && (this.scene.clear(),
                    this.renderer.render(this.scene, this.camera))
                },
                setupLighting: function() {
                    var e = new Rt["j"](16777215,1.5);
                    e.position.x = -.375,
                    e.position.y = 1.375,
                    e.position.z = 2,
                    this.scene.add(e);
                    var t = new Rt["a"](2105376);
                    this.scene.add(t)
                },
                setupModel: function() {
                    var e = this;
                    this.setupLighting(),
                    this.allLoaded = !1,
                    this.allLoadStarted = !1,
                    this.loadCount = 0,
                    this.loadCountTotal = 0,
                    this.group = new Rt["p"],
                    this.group.rotation.y = -Math.PI / 8,
                    this.group.rotation.x = Math.PI / 16,
                    this.group.position.y = -1,
                    this.scene.add(this.group),
                    this.portrait && (this.camera.position.z = .7,
                    this.camera.position.y = .65,
                    this.group.rotation.y = Math.PI / 8);
                    var t = this.character.race % 2 === 1 ? "female" : "male";
                    this.modelLoader = new Mt["a"],
                    this.modelLoader.setPath("models/characters/" + t + "/"),
                    this.textureLoader = new Rt["Q"],
                    this.textureLoader.setPath("textures/characters/"),
                    this.loadCountTotal++,
                    this.modelLoader.load("body/Body_" + t + ".FBX", (function(a) {
                        Ht(a),
                        e.body = a,
                        e.group.add(a);
                        var r = e.baseMaterial.clone();
                        r.metalness = 0,
                        e.loadCountTotal++,
                        e.textureLoader.load("body/Body_" + t + "_Albedo.png", (function(t) {
                            r.map = t,
                            e.loadingProgress()
                        }
                        ), void 0, (function(e) {
                            console.error(e)
                        }
                        )),
                        e.loadCountTotal++,
                        e.textureLoader.load("body/Body_" + t + "_Normal.png", (function(t) {
                            r.normalMap = t,
                            e.loadingProgress()
                        }
                        ), void 0, (function(e) {
                            console.error(e)
                        }
                        ));
                        var n = e.baseMaterial.clone();
                        n.metalness = 0,
                        e.loadCountTotal++,
                        e.textureLoader.load("body/Head_" + t + "_Albedo.png", (function(t) {
                            n.map = t,
                            e.loadingProgress()
                        }
                        ), void 0, (function(e) {
                            console.error(e)
                        }
                        )),
                        e.loadCountTotal++,
                        e.textureLoader.load("body/Head_" + t + "_Normal.png", (function(t) {
                            n.normalMap = t,
                            e.loadingProgress()
                        }
                        ), void 0, (function(e) {
                            console.error(e)
                        }
                        ));
                        var o = new Rt["y"];
                        o.color = new Rt["g"](5782053),
                        o.opacity = .825,
                        o.transparent = !0;
                        var l = new Rt["y"];
                        l.color = new Rt["g"](0);
                        var i = [r, n, null, o, l];
                        e.body.traverse((function(e) {
                            e.isMesh && (e.material = i)
                        }
                        )),
                        e.loadingProgress()
                    }
                    ), void 0, (function(e) {
                        console.error(e)
                    }
                    ));
                    for (var a = 0; a < kt[this.character.head % Pt].length; a++)
                        void 0 !== Tt[kt[this.character.head % Pt][a]] && null !== Tt[kt[this.character.head % Pt][a]] || console.error("missing prefab: " + kt[this.character.head % Pt][a]),
                        this.loadModel(Tt[kt[this.character.head % Pt][a]]);
                    for (var r = 0; r < St[this.character.arms % Lt].length; r++)
                        void 0 !== Tt[St[this.character.arms % Lt][r]] && null !== Tt[St[this.character.arms % Lt][r]] || console.error("missing prefab: " + St[this.character.arms % Lt][r]),
                        this.loadModel(Tt[St[this.character.arms % Lt][r]]);
                    for (var n = 0; n < Ot[this.character.torso % Bt].length; n++)
                        void 0 !== Tt[Ot[this.character.torso % Bt][n]] && null !== Tt[Ot[this.character.torso % Bt][n]] || console.error("missing prefab: " + Ot[this.character.torso % Bt][n]),
                        this.loadModel(Tt[Ot[this.character.torso % Bt][n]]);
                    for (var o = 0; o < xt[this.character.legs % Ft].length; o++)
                        void 0 !== Tt[xt[this.character.legs % Ft][o]] && null !== Tt[xt[this.character.legs % Ft][o]] || console.error("missing prefab: " + xt[this.character.legs % Ft][o]),
                        this.loadModel(Tt[xt[this.character.legs % Ft][o]]);
                    for (var l = 0; l < Wt[this.character.boots % Et].length; l++)
                        void 0 !== Tt[Wt[this.character.boots % Et][l]] && null !== Tt[Wt[this.character.boots % Et][l]] || console.error("missing prefab: " + Wt[this.character.boots % Et][l]),
                        this.loadModel(Tt[Wt[this.character.boots % Et][l]]);
                    this.allLoadStarted = !0
                },
                loadModel: function(e) {
                    var t = this
                      , a = e.model;
                    if ((void 0 === a || null === a) && this.character.race % 2 === 1) {
                        if (void 0 === e.femaleModel || null === e.femaleModel)
                            return;
                        a = e.femaleModel
                    }
                    if ((void 0 === a || null === a) && this.character.race % 2 === 0) {
                        if (void 0 === e.maleModel || null === e.maleModel)
                            return;
                        a = e.maleModel
                    }
                    this.loadCountTotal++,
                    this.modelLoader.load(a, (function(r) {
                        Ht(r);
                        var n = t.baseMaterial.clone();
                        if ((a.includes("fur") || a.includes("Fur") || a.includes("hair") || a.includes("Hair")) && (n.transparent = !0,
                        n.side = Rt["k"]),
                        r.traverse((function(e) {
                            e.isMesh && (e.material = n)
                        }
                        )),
                        null !== e.color && void 0 !== e.color) {
                            var o = "#" + e.color.substring(0, 6);
                            n.color = new Rt["g"](o)
                        }
                        null !== e.albedo && void 0 !== e.albedo && (t.loadCountTotal++,
                        t.textureLoader.load(e.albedo, (function(e) {
                            n.map = e,
                            t.loadingProgress()
                        }
                        ), void 0, (function(t) {
                            console.error("ALBEDO TEXTURE " + e.albedo + " : " + t)
                        }
                        ))),
                        null !== e.normal && void 0 !== e.normal && (t.loadCountTotal++,
                        t.textureLoader.load(e.normal, (function(e) {
                            n.normalMap = e,
                            t.loadingProgress()
                        }
                        ), void 0, (function(t) {
                            console.error("NORMAL TEXTURE " + e.normal + " : " + t)
                        }
                        ))),
                        null !== e.ao && void 0 !== e.ao && (t.loadCountTotal++,
                        t.textureLoader.load(e.ao, (function(e) {
                            n.aoMap = e,
                            t.loadingProgress()
                        }
                        ), void 0, (function(t) {
                            console.error("AO TEXTURE " + e.ao + " : " + t)
                        }
                        ))),
                        null !== e.spec && void 0 !== e.spec && (t.loadCountTotal++,
                        t.textureLoader.load(e.spec, (function(e) {
                            n.roughnessMap = e,
                            n.metalnessMap = e,
                            t.loadingProgress()
                        }
                        ), void 0, (function(t) {
                            console.error("SPEC TEXTURE " + e.spec + " : " + t)
                        }
                        ))),
                        t.group.add(r),
                        t.loadingProgress()
                    }
                    ), void 0, (function(t) {
                        console.error("MODEL " + e.model + " / " + e.maleModel + " / " + e.femaleModel + " : " + t),
                        console.error("MODELDATA: " + e)
                    }
                    ))
                },
                loadingProgress: function() {
                    ++this.loadCount >= this.loadCountTotal && this.allLoadStarted && this.loadingFinished()
                },
                loadingFinished: function() {
                    this.renderer.render(this.scene, this.camera),
                    this.allLoaded = !0
                },
                animate: function() {
                    requestAnimationFrame(this.animate),
                    this.allLoaded && (this.group.rotation.y += .02,
                    this.renderer.render(this.scene, this.camera))
                },
                fetchScore: function() {
                    return Object(h["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            },
            mounted: function() {
                if (this.fetchScore(),
                "false" === localStorage.getItem("useGraphics"))
                    return this.allLoaded = !0,
                    void (this.showPlaceholder = !0);
                this.init()
            }
        }
          , Dt = Nt
          , Xt = (a("0d9d"),
        Object(it["a"])(Dt, vt, Ct, !1, null, "5b142bae", null))
          , Gt = Xt.exports
          , jt = [{
            name: "Any",
            dir: ""
        }, {
            name: "Price: Low -> High",
            dir: 1
        }, {
            name: "Price: High -> Low",
            dir: -1
        }]
          , Vt = {
            props: {
                value: {},
                showGivenCharacterIds: {
                    type: Boolean,
                    default: !1
                },
                showFilters: {
                    type: Boolean,
                    default: !1
                },
                characterIds: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                showLimit: {
                    type: Number,
                    default: 0
                },
                isMarket: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    levelFilter: "",
                    elementFilter: "",
                    priceSort: "",
                    sorts: jt
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["maxStamina", "ownedCharacterIds"])), Object(n["c"])(["getCharacterName", "allStaminas", "charactersWithIds"])), {}, {
                characterIdsToDisplay: function() {
                    return this.showGivenCharacterIds ? this.characterIds : this.ownedCharacterIds
                },
                displayCharacters: function() {
                    return this.charactersWithIds(this.characterIdsToDisplay).filter(Boolean)
                },
                filteredCharacters: function() {
                    var e = this
                      , t = this.displayCharacters;
                    return this.showFilters && (this.elementFilter && (t = t.filter((function(t) {
                        return t.traitName.includes(e.elementFilter)
                    }
                    ))),
                    this.levelFilter && (t = t.filter((function(t) {
                        return t.level >= e.levelFilter - 1 && t.level <= e.levelFilter + 8
                    }
                    ))),
                    this.showLimit > 0 && t.length > this.showLimit && (t = t.slice(0, this.showLimit))),
                    t
                }
            }),
            watch: {
                characterIdsToDisplay: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.fetchCharacters(e);
                                case 2:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                }
            },
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["fetchCharacters"])), {}, {
                getCharacterArt: wt,
                saveFilters: function() {
                    sessionStorage.setItem("character-levelfilter", this.levelFilter),
                    sessionStorage.setItem("character-elementfilter", this.elementFilter),
                    this.isMarket && sessionStorage.setItem("character-price-order", this.priceSort),
                    this.$emit("character-filters-changed")
                },
                clearFilters: function() {
                    sessionStorage.removeItem("character-levelfilter"),
                    sessionStorage.removeItem("character-elementfilter"),
                    this.isMarket && sessionStorage.removeItem("character-price-order"),
                    this.elementFilter = "",
                    this.levelFilter = "",
                    this.priceSort = "",
                    this.$emit("character-filters-changed")
                }
            }),
            components: {
                CharacterArt: Gt
            },
            mounted: function() {
                this.levelFilter = localStorage.getItem("character-levelfilter") || "",
                this.elementFilter = localStorage.getItem("character-elementfilter") || "",
                this.isMarket && (this.priceSort = sessionStorage.getItem("character-price-order") || "")
            }
        }
          , Ut = Vt
          , zt = (a("88b4"),
        Object(it["a"])(Ut, ct, mt, !1, null, "2b6eb35c", null))
          , Kt = zt.exports
          , Yt = {
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["characters", "maxStamina", "currentCharacterId", "defaultAccount", "skillBalance"])), Object(n["c"])(["contracts", "ownCharacters", "ownWeapons", "currentCharacter", "currentCharacterStamina", "getCharacterName", "getExchangeUrl"])), {}, {
                character: function() {
                    if (!this.currentCharacter)
                        return {
                            id: null,
                            name: "???",
                            level: -1,
                            experience: -1
                        };
                    var e = this.currentCharacter;
                    return {
                        id: e.id,
                        name: this.getCharacterName(e.id),
                        level: e.level,
                        experience: e.xp
                    }
                }
            }),
            created: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a, r;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.contracts.CryptoBlades.methods.mintCharacterFee().call({
                                    from: e.defaultAccount
                                });
                            case 2:
                                return a = t.sent,
                                t.next = 5,
                                e.contracts.CryptoBlades.methods.usdToSkill(a).call();
                            case 5:
                                r = t.sent,
                                e.recruitCost = C()(r).div(C()(10).pow(18)).toFixed(4);
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            data: function() {
                return {
                    recruitCost: this.recruitCost
                }
            },
            methods: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["d"])(["setCurrentCharacter"])), Object(n["b"])(["mintCharacter"])), {}, {
                onMintCharacter: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    e.mintCharacter();
                                case 3:
                                    t.next = 8;
                                    break;
                                case 5:
                                    t.prev = 5,
                                    t.t0 = t["catch"](0),
                                    e.$dialog.notify.error("Could not summon hero: insufficient funds or transaction denied.");
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 5]])
                    }
                    )))()
                },
                formatSkill: function() {
                    return k(this.skillBalance)
                }
            }),
            components: {
                BigButton: ut,
                CharacterList: Kt
            }
        }
          , $t = Yt
          , Zt = (a("3602"),
        Object(it["a"])($t, tt, at, !1, null, "677566a8", null))
          , qt = Zt.exports
          , Jt = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [0 === e.ownWeapons.length ? a("div", {
                staticClass: "blank-slate"
            }, [e._v(" You do not currently have any weapons. "), a("br"), e._v(" You can forge one by clicking the button below. "), a("br"), a("br"), a("big-button", {
                staticClass: "button",
                attrs: {
                    mainText: "Forge weapon for " + e.forgeCost + " SICKLE"
                },
                on: {
                    click: e.onForgeWeapon
                }
            })], 1) : e._e(), e.ownWeapons.length > 0 ? a("div", {
                staticClass: "row mt-3"
            }, [a("div", {
                staticClass: "col"
            }, [a("div", {
                staticClass: "d-flex justify-content-space-between"
            }, [a("h1", [e._v("Weapons (" + e._s(e.ownWeapons.length) + ")")]), a("div", {
                staticClass: "d-flex justify-content-flex-end ml-auto"
            }, [null !== e.reforgeWeaponId && e.ownWeapons.length > 0 ? a("b-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Burn weapons to buff selected weapon",
                    expression: "'Burn weapons to buff selected weapon'"
                }],
                attrs: {
                    variant: "primary",
                    tagname: "reforge_weapon"
                },
                on: {
                    click: function(t) {
                        e.showReforge = !0
                    }
                }
            }, [e._v(" Reforge ")]) : e._e(), a("b-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Forge new weapon",
                    expression: "'Forge new weapon'"
                }],
                staticClass: "ml-3",
                attrs: {
                    variant: "primary",
                    disabled: e.disableForge
                },
                on: {
                    click: e.onForgeWeapon
                }
            }, [e.disableForge ? a("span", [e._v(" Cooling forge... ")]) : e._e(), e.disableForge ? e._e() : a("span", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "forge_weapon"
                }
            }, [e._v(" Forge (" + e._s(e.forgeCost) + " SICKLE) "), a("i", {
                staticClass: "fas fa-plus"
            })])]), a("b-icon-question-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "Click for forge percentages",
                    expression: "'Click for forge percentages'",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "centered-icon",
                attrs: {
                    scale: "1.5"
                },
                on: {
                    click: e.onShowForgeDetails
                }
            }), a("b-modal", {
                ref: "forge-details-modal",
                attrs: {
                    "hide-footer": "",
                    title: "Forge Percentages"
                }
            }, [a("div", [e._v(" 5+ star @ 1% chance. Estimated cost " + e._s(Number.parseFloat(100 * e.forgeCost).toFixed(2)) + " SICKLE. ")]), a("div", [e._v(" 4+ star @ 6% chance. Estimated cost " + e._s(Number.parseFloat(e.forgeCost * (1 / .06)).toFixed(2)) + " SICKLE. ")]), a("div", [e._v(" 3+ star @ 21% chance. Estimated cost " + e._s(Number.parseFloat(e.forgeCost * (1 / .21)).toFixed(2)) + " SICKLE. ")]), a("div", [e._v(" 2+ star @ 56% chance. Estimated cost " + e._s(Number.parseFloat(e.forgeCost * (1 / .56)).toFixed(2)) + " SICKLE. ")]), a("div", [e._v(" 1+ star @ 100% chance. ")])])], 1)]), a("weapon-grid", {
                model: {
                    value: e.reforgeWeaponId,
                    callback: function(t) {
                        e.reforgeWeaponId = t
                    },
                    expression: "reforgeWeaponId"
                }
            })], 1), e.showReforge ? a("div", {
                staticClass: "col-6"
            }, [a("div", {
                staticClass: "d-flex justify-content-space-between"
            }, [a("h1", [e._v("Choose Burn Weapon")]), a("div", {
                staticClass: "d-flex justify-content-flex-end ml-auto"
            }, [a("b-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Forge new weapon",
                    expression: "'Forge new weapon'"
                }],
                staticClass: "ml-3",
                attrs: {
                    variant: "primary",
                    tagname: "confirm_forge_weapon",
                    disabled: e.canReforge
                },
                on: {
                    click: e.showReforgeConfirmation
                }
            }, [e._v(" Confirm Reforge (" + e._s(e.reforgeCost) + " SICKLE) ")])], 1)]), a("b-modal", {
                ref: "reforge-confirmation-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Reforge Confirmation"
                },
                on: {
                    ok: e.onReforgeWeapon
                }
            }, [a("div", {
                staticClass: "text-center",
                domProps: {
                    textContent: e._s("Are you sure you want to reforge with this weapon?")
                }
            }), a("div", {
                staticClass: "weapon",
                attrs: {
                    hidden: null == e.burnWeaponId
                }
            }, [e.$slots.above || e.$scopedSlots.above ? a("div", {
                staticClass: "above-wrapper"
            }, [e._t("above", null, {
                weapon: e.getWeaponToBurn()
            })], 2) : e._e(), a("div", {
                staticClass: "weapon-icon-wrapper"
            }, [a("weapon-icon", {
                staticClass: "weapon-icon",
                attrs: {
                    weapon: e.getWeaponToBurn()
                }
            })], 1)]), a("div", {
                staticClass: "text-center",
                attrs: {
                    hidden: null == e.burnWeaponId || !e.isWeaponRare()
                }
            }, [a("b-icon", {
                attrs: {
                    icon: "exclamation-circle",
                    variant: "danger"
                }
            }), e._v(" This is a rare weapon! ")], 1), a("div", {
                staticClass: "text-center",
                attrs: {
                    hidden: null == e.burnWeaponId || !e.isWeaponReforged()
                }
            }, [a("b-icon", {
                attrs: {
                    icon: "exclamation-circle",
                    variant: "danger"
                }
            }), e._v(" This item has been previously reforged and only half of each LBs will carry over! ")], 1)]), a("weapon-grid", {
                attrs: {
                    ignore: e.reforgeWeaponId,
                    showReforgedWeaponsDefVal: !1,
                    showFavoriteWeaponsDefVal: !1
                },
                model: {
                    value: e.burnWeaponId,
                    callback: function(t) {
                        e.burnWeaponId = t
                    },
                    expression: "burnWeaponId"
                }
            })], 1) : e._e()]) : e._e()])
        }
          , Qt = []
          , ea = (a("7db0"),
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("div", {
                staticClass: "filters row mt-2 pl-2"
            }, [a("div", {
                staticClass: "col-sm-6 col-md-4 stars-elem"
            }, [a("strong", [e._v("Stars")]), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.starFilter,
                    expression: "starFilter"
                }],
                staticClass: "form-control",
                on: {
                    change: [function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.starFilter = t.target.multiple ? a : a[0]
                    }
                    , function(t) {
                        return e.saveFilters()
                    }
                    ]
                }
            }, e._l(["", 1, 2, 3, 4, 5], (function(t) {
                return a("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(e._s(t || "Any"))])
            }
            )), 0)]), a("div", {
                staticClass: "col-sm-6 col-md-4 stars-elem"
            }, [a("strong", [e._v("Element")]), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.elementFilter,
                    expression: "elementFilter"
                }],
                staticClass: "form-control",
                on: {
                    change: [function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.elementFilter = t.target.multiple ? a : a[0]
                    }
                    , function(t) {
                        return e.saveFilters()
                    }
                    ]
                }
            }, e._l(["", "Ice", "Fire", "Light", "Dark"], (function(t) {
                return a("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(e._s(t || "Any"))])
            }
            )), 0)]), e.isMarket ? a("div", {
                staticClass: "col-2"
            }, [a("strong", [e._v("Sort")]), a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.priceSort,
                    expression: "priceSort"
                }],
                staticClass: "form-control",
                on: {
                    change: [function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.priceSort = t.target.multiple ? a : a[0]
                    }
                    , function(t) {
                        return e.saveFilters()
                    }
                    ]
                }
            }, e._l(e.sorts, (function(t) {
                return a("option", {
                    key: t.dir,
                    domProps: {
                        value: t.dir
                    }
                }, [e._v(e._s(t.name || "Any"))])
            }
            )), 0)]) : e._e(), e.showReforgedToggle ? a("div", {
                staticClass: "show-reforged"
            }, [a("b-check", {
                staticClass: "show-reforged-checkbox",
                model: {
                    value: e.showReforgedWeapons,
                    callback: function(t) {
                        e.showReforgedWeapons = t
                    },
                    expression: "showReforgedWeapons"
                }
            }), a("strong", [e._v("Show reforged")])], 1) : e._e(), e.showFavoriteToggle ? a("div", {
                staticClass: "show-reforged show-favorite"
            }, [a("b-check", {
                staticClass: "show-reforged-checkbox",
                model: {
                    value: e.showFavoriteWeapons,
                    callback: function(t) {
                        e.showFavoriteWeapons = t
                    },
                    expression: "showFavoriteWeapons"
                }
            }), a("strong", [e._v("Show Favorite")])], 1) : e._e(), a("b-button", {
                staticClass: "ml-3 clear-filters-button",
                class: {
                    "mb-4": e.showReforgedToggle && e.showFavoriteToggle
                },
                attrs: {
                    variant: "primary"
                },
                on: {
                    click: e.clearFilters
                }
            }, [a("span", [e._v(" Clear Filters ")])])], 1), a("ul", {
                staticClass: "weapon-grid"
            }, e._l(e.nonIgnoredWeapons, (function(t) {
                return a("li", {
                    key: t.id,
                    staticClass: "weapon",
                    class: {
                        selected: null !== e.highlight && t.id === e.highlight
                    },
                    on: {
                        click: function(a) {
                            (!e.checkForDurability || e.getWeaponDurability(t.id) > 0) && e.onWeaponClick(t.id)
                        },
                        contextmenu: function(a) {
                            e.canFavorite && e.toggleFavorite(a, t.id)
                        }
                    }
                }, [a("div", {
                    staticClass: "weapon-icon-wrapper"
                }, [a("weapon-icon", {
                    staticClass: "weapon-icon",
                    attrs: {
                        weapon: t,
                        favorite: e.isFavorite(t.id)
                    }
                })], 1), e.$slots.above || e.$scopedSlots.above ? a("div", {
                    staticClass: "above-wrapper"
                }, [e._t("above", null, {
                    weapon: t
                })], 2) : e._e(), e._t("sold", null, {
                    weapon: t
                })], 2)
            }
            )), 0)])
        }
        )
          , ta = []
          , aa = (a("c740"),
        a("a434"),
        new r["default"])
          , ra = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {
                        content: e.tooltipHtml,
                        trigger: e.isMobile() ? "click" : "hover"
                    },
                    expression: "{ content: tooltipHtml , trigger: (isMobile() ? 'click' : 'hover') }"
                }],
                staticClass: "weapon-icon",
                class: [0 === e.getWeaponDurability(e.weapon.id) ? "no-durability" : ""],
                on: {
                    mouseover: function(t) {
                        e.hover = !e.isMobile() || !0
                    },
                    mouseleave: function(t) {
                        e.hover = !e.isMobile()
                    }
                }
            }, [e.allLoaded ? e._e() : a("div", {
                staticClass: "loading-container"
            }, [a("i", {
                staticClass: "fas fa-spinner fa-spin"
            })]), a("div", {
                ref: "el",
                staticClass: "glow-container",
                class: ["glow-" + (e.weapon.stars || 0)]
            }, [e.showPlaceholder ? a("img", {
                staticClass: "placeholder",
                attrs: {
                    src: e.getWeaponArt(e.weapon)
                }
            }) : e._e(), a("div", {
                staticClass: "trait"
            }, [a("span", {
                class: e.weapon.element.toLowerCase() + "-icon"
            }), e.favorite ? a("b-icon", {
                staticClass: "favorite-star",
                attrs: {
                    icon: "star-fill",
                    variant: "warning"
                }
            }) : e._e()], 1), a("div", {
                staticClass: "name"
            }, [e._v(" " + e._s(e.getWeaponNameFromSeed(e.weapon.id, e.weapon.stars)) + " ")]), a("div", {
                staticClass: "bonus-power"
            }, [e.weapon.lowStarBurnPoints > 0 ? a("div", [a("span", [e._v(e._s(e.weapon.lowStarBurnPoints) + " LB")])]) : e._e(), e.weapon.fourStarBurnPoints > 0 ? a("div", [a("span", [e._v(e._s(e.weapon.fourStarBurnPoints) + " 4B")])]) : e._e(), e.weapon.fiveStarBurnPoints > 0 ? a("div", [a("span", [e._v(e._s(e.weapon.fiveStarBurnPoints) + " 5B")])]) : e._e()]), a("div", [a("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "Durability: " + e.getWeaponDurability(e.weapon.id) + "/" + e.maxDurability + "<br>\n        Repairs 1 point every 50 minutes, durability will be full at: " + e.timeUntilWeaponHasMaxDurability(e.weapon.id),
                    expression: "`Durability: ${getWeaponDurability(weapon.id)}/${maxDurability}<br>\n        Repairs 1 point every 50 minutes, durability will be full at: ${timeUntilWeaponHasMaxDurability(weapon.id)}`",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "small-durability-bar",
                style: "--durabilityReady: " + e.getWeaponDurability(e.weapon.id) / e.maxDurability * 100 + "%;"
            })])]), a("div", {
                staticClass: "id"
            }, [e._v("ID " + e._s(e.weapon.id))]), a("div", {
                staticClass: "stats"
            }, [e.weapon.stat1Value ? a("div", [a("span", {
                staticClass: "mr-1 icon",
                class: e.weapon.stat1.toLowerCase() + "-icon"
            }), a("span", {
                class: e.weapon.stat1.toLowerCase()
            }, [e._v(e._s(e.weapon.stat1) + " +" + e._s(e.weapon.stat1Value))])]) : e._e(), e.weapon.stat2Value ? a("div", [a("span", {
                staticClass: "mr-1 icon",
                class: e.weapon.stat2.toLowerCase() + "-icon"
            }), a("span", {
                class: e.weapon.stat2.toLowerCase()
            }, [e._v(e._s(e.weapon.stat2) + " +" + e._s(e.weapon.stat2Value))])]) : e._e(), e.weapon.stat3Value ? a("div", [a("span", {
                staticClass: "mr-1 icon",
                class: e.weapon.stat3.toLowerCase() + "-icon"
            }), a("span", {
                class: e.weapon.stat3.toLowerCase()
            }, [e._v(e._s(e.weapon.stat3) + " +" + e._s(e.weapon.stat3Value))])]) : e._e()])])
        }
          , na = []
          , oa = (a("a15b"),
        a("cb29"),
        a("5319"),
        a("2b91"))
          , la = a.n(oa)
          , ia = a("ddb4")
          , sa = a.n(ia)
          , ua = a("ed9e")
          , ca = a.n(ua)
          , ma = a("8a3b")
          , da = a.n(ma)
          , pa = a("56f6")
          , ha = a.n(pa)
          , _a = a("bab5")
          , fa = a.n(_a)
          , ga = a("6ca5")
          , ba = a.n(ga)
          , ya = [la.a, sa.a, ca.a, da.a, ha.a, fa.a, ba.a];
        function Aa(e) {
            return e ? ya[e.id % ya.length] : null
        }
        var wa = a("105f")
          , va = a.t(wa, 2)
          , Ca = wa || va
          , Ra = function(e, t) {
            return t[Math.floor(e() * t.length)]
        }
          , Ma = function(e) {
            return Ra(e, Ca.type)
        }
          , Ta = function(e) {
            var t = Ra(e, Ca.prefix)
              , a = Ra(e, Ca.type);
            return "".concat(t, " ").concat(a)
        }
          , ka = function(e) {
            var t = Ra(e, Ca.prefix)
              , a = Ra(e, Ca.type)
              , r = Ra(e, Ca.material);
            return "".concat(t, " ").concat(r, " ").concat(a)
        }
          , Sa = function(e) {
            return Ra(e, Ca.specialtype)
        }
          , Oa = function(e) {
            var t = Ra(e, Ca.specialprefix)
              , a = Ra(e, Ca.specialtype)
              , r = Ra(e, Ca.suffix);
            return "".concat(t, " ").concat(a, " ").concat(r)
        }
          , xa = function(e, t) {
            var a = Ne()(e.toString())
              , r = Math.floor(100 * a());
            return 1 === t ? Ma(a) : t <= 3 ? r <= 25 ? ka(a) : Ta(a) : 4 === t ? r <= 1 ? Sa(a) : r <= 50 ? ka(a) : Ta(a) : 5 === t ? r <= 75 ? Sa(a) : Oa(a) : t > 5 ? Oa(a) : Ma(a)
        }
          , Wa = a("9d5a")
          , Pa = "\n#ifdef USE_MAP\n    vec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tfloat lum = texelColor.r + texelColor.g + texelColor.b;\n\tdiffuseColor.rgb *= (texelColor.r * maskR + texelColor.g * maskG + texelColor.b * maskB) / lum;\n#endif\n";
        r["default"].mixin({
            methods: {
                isMobile: function() {
                    return screen.width <= 576
                }
            }
        });
        var La = 24
          , Ba = 24
          , Fa = 24
          , Ea = 24
          , Ia = .01
          , Ha = -Math.PI / 2
          , Na = 0
          , Da = 0
          , Xa = new Rt["g"](8026746)
          , Ga = new Rt["g"](4276033)
          , ja = new Rt["g"](11491362)
          , Va = new Rt["g"](16777215);
        function Ua(e, t) {
            e.scale.set(Ia, Ia, Ia),
            e.rotation.set(Ha, Na, Da),
            e.position.y = t
        }
        var za = {
            props: ["weapon", "favorite"],
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["maxDurability"])), Object(n["c"])(["currentCharacter", "getWeaponDurability", "timeUntilWeaponHasMaxDurability"])), {}, {
                tooltipHtml: function() {
                    if (!this.weapon)
                        return "";
                    var e = function(e, t) {
                        return '<span class="'.concat(e.toLowerCase(), '">').concat(t, '</span><span class="').concat(e.toLowerCase() + "-icon", '"></span>')
                    }
                      , t = function(e, t) {
                        return '<span class="'.concat(e.toLowerCase(), '">').concat(t, "</span>")
                    }
                      , a = "\n        ID: ".concat(this.weapon.id, "\n        <br>\n        ").concat(Array(this.weapon.stars + 1).fill("★").join(""), "\n      ");
                    return this.weapon.level > 0 && (a += "<br>Level ".concat(this.weapon.level + 1)),
                    this.weapon.element && (a += "<br>Element: ".concat(e(this.weapon.element, this.weapon.element))),
                    this.weapon.stat1Value && (a += "<br>".concat(e(this.weapon.stat1, this.weapon.stat1), ": +").concat(this.weapon.stat1Value),
                    this.currentCharacter && (a += " (".concat(t(this.currentCharacter.traitName, "+" + q(this.weapon, +this.currentCharacter.trait) + "%"), ")"))),
                    this.weapon.stat2Value && (a += "<br>".concat(e(this.weapon.stat2, this.weapon.stat2), ": +").concat(this.weapon.stat2Value),
                    this.currentCharacter && (a += " (".concat(t(this.currentCharacter.traitName, "+" + J(this.weapon, +this.currentCharacter.trait) + "%"), ")"))),
                    this.weapon.stat3Value && (a += "<br>".concat(e(this.weapon.stat3, this.weapon.stat3), ": +").concat(this.weapon.stat3Value),
                    this.currentCharacter && (a += " (".concat(t(this.currentCharacter.traitName, "+" + Q(this.weapon, +this.currentCharacter.trait) + "%"), ")"))),
                    this.weapon.lowStarBurnPoints > 0 && (a += "<br>LB: ".concat(this.weapon.lowStarBurnPoints, "/100")),
                    this.weapon.fourStarBurnPoints > 0 && (a += "<br>4B: ".concat(this.weapon.fourStarBurnPoints, "/25")),
                    this.weapon.fiveStarBurnPoints > 0 && (a += "<br>5B: ".concat(this.weapon.fiveStarBurnPoints, "/10")),
                    this.weapon.bonusPower > 0 && (a += "<br>Bonus power: ".concat(this.weapon.bonusPower)),
                    a
                }
            }),
            data: function() {
                return {
                    hover: !1,
                    allLoaded: !1,
                    allLoadStarted: !1,
                    camera: null,
                    scene: null,
                    renderer: null,
                    baseMaterial: null,
                    loadCount: 0,
                    loadCountTotal: 0,
                    pommel: null,
                    grip: null,
                    crossGuard: null,
                    blade: null,
                    group: null,
                    bladeMaskTexture: null,
                    bladeNormalTexture: null,
                    bladeAOTexture: null,
                    crossGuardNormalTexture: null,
                    crossGuardAOTexture: null,
                    gripMaskTexture: null,
                    gripNormalTexture: null,
                    gripAOTexture: null,
                    pommelNormalTexture: null,
                    pommelAOTexture: null,
                    showPlaceholder: !1
                }
            },
            methods: {
                getWeaponNameFromSeed: xa,
                getWeaponArt: Aa,
                init: function() {
                    var e = this
                      , t = this.$refs.el;
                    this.camera = new Rt["F"](70,t.clientWidth / t.clientHeight,.01,1e3),
                    this.camera.position.z = .6,
                    this.camera.rotation.z = Math.PI / 4,
                    this.scene = new Rt["L"];
                    var a = new Rt["j"](16777215,.75);
                    a.position.x = -.375,
                    a.position.y = 1.375,
                    a.position.z = 2,
                    this.scene.add(a);
                    var r = new Rt["j"](16777215,.375);
                    if (r.position.x = -.075,
                    r.position.y = -1.375,
                    r.position.z = 2,
                    this.scene.add(r),
                    this.renderer = new Rt["V"]({
                        antialias: !0,
                        alpha: !0
                    }),
                    this.renderer.setPixelRatio(window.devicePixelRatio),
                    this.renderer.setClearColor(0, 0),
                    this.renderer.setSize(t.clientWidth, t.clientHeight),
                    this.renderer.getContext().canvas.addEventListener("webglcontextlost", (function(t) {
                        t.preventDefault(),
                        e.setupModel()
                    }
                    ), !1),
                    t.appendChild(this.renderer.domElement),
                    void 0 === this.baseMaterial || null === this.baseMaterial) {
                        this.baseMaterial = new Rt["B"],
                        this.baseMaterial.aoMapIntensity = .375,
                        this.baseMaterial.envMapIntensity = 1,
                        this.baseMaterial.metalness = 1,
                        this.baseMaterial.roughness = .5;
                        var n = new Rt["h"];
                        n.load(["textures/cubemap/001_studioHDRI.hdr_Rig.png", "textures/cubemap/001_studioHDRI.hdr_Lef.png", "textures/cubemap/001_studioHDRI.hdr_Top.png", "textures/cubemap/001_studioHDRI.hdr_Bot.png", "textures/cubemap/001_studioHDRI.hdr_Fro.png", "textures/cubemap/001_studioHDRI.hdr_Bak.png"], (function(t) {
                            e.baseMaterial.envMap = t,
                            e.loadingProgress()
                        }
                        ))
                    }
                    this.setupModel()
                },
                setupModel: function() {
                    var e = this;
                    this.allLoaded = !1,
                    this.allLoadStarted = !1,
                    this.loadCount = 0,
                    this.loadCountTotal = 15;
                    var t = this.weapon.blade % La + 1
                      , a = this.weapon.crossguard % Ba + 1
                      , r = this.weapon.grip % Fa + 1
                      , n = this.weapon.pommel % Ea + 1
                      , o = Wa["BLADE_" + t].sizeZ + Wa["CROSSGUARD_" + a].sizeZ + Wa["GRIP_" + a].sizeZ + Wa["POMMEL_" + a].sizeZ;
                    this.camera.position.y = (o / 2 - Wa["POMMEL_" + n].sizeZ + Wa["GRIP_" + r].bottom) * (1 / o),
                    this.group = new Rt["p"],
                    this.group.scale.set(1 / o, 1 / o, 1 / o),
                    this.scene.add(this.group);
                    var l = new Mt["a"]
                      , i = new Rt["Q"];
                    this.bladeMaskTexture = i.load("textures/swords/blades/Txt_Blade_" + t + "_Mask.png", this.loadingProgress()),
                    this.bladeNormalTexture = i.load("textures/swords/blades/Txt_Blade_" + t + "_Normal.png", this.loadingProgress()),
                    this.bladeAOTexture = i.load("textures/swords/blades/Txt_Blade_" + t + "_AO.png", this.loadingProgress()),
                    this.crossGuardNormalTexture = i.load("textures/swords/crossguards/Txt_CrossGuard_" + a + "_Normal.png", this.loadingProgress()),
                    this.crossGuardAOTexture = i.load("textures/swords/crossguards/Txt_CrossGuard_" + a + "_AO.png", this.loadingProgress()),
                    this.gripMaskTexture = i.load("textures/swords/grips/Txt_Grip_" + r + "_Mask.png", this.loadingProgress()),
                    this.gripNormalTexture = i.load("textures/swords/grips/Txt_Grip_" + r + "_Normal.png", this.loadingProgress()),
                    this.gripAOTexture = i.load("textures/swords/grips/Txt_Grip_" + r + "_AO.png", this.loadingProgress()),
                    this.pommelNormalTexture = i.load("textures/swords/pommels/Txt_Pommel_" + n + "_Normal.png", this.loadingProgress()),
                    this.pommelAOTexture = i.load("textures/swords/pommels/Txt_Pommel_" + n + "_AO.png", this.loadingProgress()),
                    l.load("models/blades/Blade_" + t + ".FBX", (function(t) {
                        Ua(t, Wa["GRIP_" + r].top + (Wa["CROSSGUARD_" + a].top - Wa["CROSSGUARD_" + a].bottom)),
                        e.blade = t,
                        e.group.add(t),
                        e.loadingProgress()
                    }
                    ), void 0, (function(e) {
                        console.error(e)
                    }
                    )),
                    l.load("models/crossguards/CrossGuard_" + a + ".FBX", (function(t) {
                        Ua(t, Wa["GRIP_" + r].top),
                        e.crossGuard = t,
                        e.group.add(t),
                        e.loadingProgress()
                    }
                    ), void 0, (function(e) {
                        console.error(e)
                    }
                    )),
                    l.load("models/grips/Grip_" + r + ".FBX", (function(t) {
                        Ua(t, 0),
                        e.grip = t,
                        e.group.add(t),
                        e.loadingProgress()
                    }
                    ), void 0, (function(e) {
                        console.error(e)
                    }
                    )),
                    l.load("models/pommels/Pommel_" + n + ".FBX", (function(t) {
                        Ua(t, Wa["GRIP_" + r].bottom),
                        e.pommel = t,
                        e.group.add(t),
                        e.loadingProgress()
                    }
                    ), void 0, (function(e) {
                        console.error(e)
                    }
                    )),
                    this.allLoadStarted = !0
                },
                patchShader: function(e, t, a, r) {
                    e.userData.maskR = {
                        value: t
                    },
                    e.userData.maskG = {
                        value: a
                    },
                    e.userData.maskB = {
                        value: r
                    },
                    e.onBeforeCompile = function(t) {
                        t.uniforms.maskR = e.userData.maskR,
                        t.uniforms.maskG = e.userData.maskG,
                        t.uniforms.maskB = e.userData.maskB,
                        t.fragmentShader = "uniform vec3 maskR;\nuniform vec3 maskG;\nuniform vec3 maskB;\n" + t.fragmentShader,
                        t.fragmentShader = t.fragmentShader.replace("#include <map_fragment>", Pa)
                    }
                    ,
                    this.allLoaded && this.renderer.render(this.scene, this.camera)
                },
                loadingProgress: function() {
                    ++this.loadCount >= this.loadCountTotal && this.allLoadStarted && this.loadingFinished()
                },
                loadingFinished: function() {
                    var e = this.baseMaterial.clone()
                      , t = this.baseMaterial.clone()
                      , a = this.baseMaterial.clone()
                      , r = this.baseMaterial.clone();
                    this.patchShader(e, Xa, Ga, ja),
                    this.patchShader(t, Xa, Va, Va),
                    this.patchShader(a, Xa, Ga, ja),
                    this.patchShader(r, Xa, Va, Va),
                    e.map = this.bladeMaskTexture,
                    e.normalMap = this.bladeNormalTexture,
                    e.aoMap = this.bladeAOTexture,
                    this.blade.traverse((function(t) {
                        t.isMesh && (t.material = e)
                    }
                    )),
                    t.normalMap = this.crossGuardNormalTexture,
                    t.aoMap = this.crossGuardAOTexture,
                    this.crossGuard.traverse((function(e) {
                        e.isMesh && (e.material = t)
                    }
                    )),
                    a.map = this.gripMaskTexture,
                    a.normalMap = this.gripNormalTexture,
                    a.aoMap = this.gripAOTexture,
                    this.grip.traverse((function(e) {
                        e.isMesh && (e.material = a)
                    }
                    )),
                    r.normalMap = this.pommelNormalTexture,
                    r.aoMap = this.pommelAOTexture,
                    this.pommel.traverse((function(e) {
                        e.isMesh && (e.material = r)
                    }
                    )),
                    this.renderer.render(this.scene, this.camera),
                    this.allLoaded = !0
                },
                animate: function() {
                    requestAnimationFrame(this.animate),
                    this.hover ? (this.group.rotation.y += .02,
                    this.renderer.render(this.scene, this.camera)) : 0 !== this.group.rotation.y && (this.group.rotation.y = 0,
                    this.renderer.render(this.scene, this.camera))
                }
            },
            mounted: function() {
                if ("false" === localStorage.getItem("useGraphics"))
                    return this.allLoaded = !0,
                    void (this.showPlaceholder = !0);
                this.init(),
                this.animate()
            }
        }
          , Ka = za
          , Ya = (a("c000"),
        Object(it["a"])(Ka, ra, na, !1, null, "341de180", null))
          , $a = Ya.exports
          , Za = [{
            name: "Any",
            dir: ""
        }, {
            name: "Price: Low -> High",
            dir: 1
        }, {
            name: "Price: High -> Low",
            dir: -1
        }]
          , qa = r["default"].extend({
            model: {
                prop: "highlight",
                event: "choose-weapon"
            },
            props: {
                highlight: {
                    validator: function(e) {
                        return !0
                    },
                    default: null
                },
                ignore: {
                    validator: function(e) {
                        return !0
                    },
                    default: null
                },
                showGivenWeaponIds: {
                    type: Boolean,
                    default: !1
                },
                weaponIds: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                showLimit: {
                    type: Number,
                    default: 0
                },
                showReforgedToggle: {
                    type: Boolean,
                    default: !0
                },
                showReforgedWeaponsDefVal: {
                    type: Boolean,
                    default: !0
                },
                showFavoriteToggle: {
                    type: Boolean,
                    default: !0
                },
                showFavoriteWeaponsDefVal: {
                    type: Boolean,
                    default: !0
                },
                canFavorite: {
                    type: Boolean,
                    default: !0
                },
                isMarket: {
                    type: Boolean,
                    default: !1
                },
                checkForDurability: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    starFilter: "",
                    elementFilter: "",
                    favorites: {},
                    priceSort: "",
                    sorts: Za,
                    showReforgedWeapons: this.showReforgedWeaponsDefVal,
                    showFavoriteWeapons: this.showFavoriteWeaponsDefVal
                }
            },
            components: {
                WeaponIcon: $a
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["ownedWeaponIds"])), Object(n["c"])(["weaponsWithIds", "getWeaponDurability"])), {}, {
                weaponIdsToDisplay: function() {
                    var e;
                    return this.showGivenWeaponIds ? this.weaponIds : null === (e = this.ownedWeaponIds) || void 0 === e ? void 0 : e.map((function(e) {
                        return e.toString()
                    }
                    ))
                },
                displayWeapons: function() {
                    return this.weaponsWithIds(this.weaponIdsToDisplay).filter(Boolean)
                },
                nonIgnoredWeapons: function() {
                    var e = this
                      , t = [];
                    this.displayWeapons.forEach((function(e) {
                        return t.push(e)
                    }
                    ));
                    var a = [];
                    if (this.ignore && a.push((this.ignore || "").toString()),
                    !this.showFavoriteWeapons)
                        for (var r in this.favorites)
                            a.push(r);
                    t = t.filter((function(e) {
                        return a.findIndex((function(t) {
                            return t === e.id.toString()
                        }
                        )) < 0
                    }
                    )),
                    this.starFilter && (t = t.filter((function(t) {
                        return t.stars === +e.starFilter - 1
                    }
                    ))),
                    this.elementFilter && (t = t.filter((function(t) {
                        return t.element.includes(e.elementFilter)
                    }
                    ))),
                    this.showReforgedWeapons || (t = t.filter((function(e) {
                        return 0 === e.bonusPower
                    }
                    ))),
                    this.showLimit > 0 && t.length > this.showLimit && (t = t.slice(0, this.showLimit));
                    var n = []
                      , o = function(e) {
                        var a = t.findIndex((function(t) {
                            return t.id === +e
                        }
                        ));
                        -1 !== a && (n.push(t[a]),
                        t.splice(a, 1))
                    };
                    for (var l in this.favorites)
                        o(l);
                    return n.concat(t)
                }
            }),
            watch: {
                weaponIdsToDisplay: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.fetchWeapons(e);
                                case 2:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                }
            },
            methods: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["fetchWeapons"])), Object(n["d"])(["setCurrentWeapon"])), {}, {
                saveFilters: function() {
                    this.isMarket ? (sessionStorage.setItem("market-weapon-starfilter", this.starFilter),
                    sessionStorage.setItem("market-weapon-elementfilter", this.elementFilter),
                    sessionStorage.setItem("market-weapon-price-order", this.priceSort)) : (sessionStorage.setItem("weapon-starfilter", this.starFilter),
                    sessionStorage.setItem("weapon-elementfilter", this.elementFilter)),
                    this.$emit("weapon-filters-changed")
                },
                toggleFavorite: function(e, t) {
                    e.preventDefault(),
                    this.favorites[t] ? this.$delete(this.favorites, t) : this.$set(this.favorites, t, !0),
                    localStorage.setItem("favorites", this.getFavoritesString(this.favorites)),
                    aa.$emit("weapon:newFavorite", {
                        value: t
                    })
                },
                getFavoritesString: function(e) {
                    return JSON.stringify(e)
                },
                getFavoritesMap: function(e) {
                    if (!e)
                        return {};
                    var t = {};
                    return e.split(",").forEach((function(e) {
                        return t[+e] = !0
                    }
                    )),
                    t
                },
                isFavorite: function(e) {
                    return this.favorites[e]
                },
                clearFilters: function() {
                    this.isMarket ? (sessionStorage.removeItem("market-weapon-starfilter"),
                    sessionStorage.removeItem("market-weapon-elementfilter"),
                    sessionStorage.removeItem("market-weapon-price-order")) : (sessionStorage.removeItem("weapon-starfilter"),
                    sessionStorage.removeItem("weapon-elementfilter")),
                    this.elementFilter = "",
                    this.starFilter = "",
                    this.priceSort = "",
                    this.$emit("weapon-filters-changed")
                },
                onWeaponClick: function(e) {
                    this.setCurrentWeapon(e),
                    this.$emit("choose-weapon", e)
                },
                checkStorageFavorite: function() {
                    var e = localStorage.getItem("favorites");
                    e && (this.favorites = JSON.parse(e))
                }
            }),
            mounted: function() {
                var e = this;
                this.checkStorageFavorite(),
                aa.$on("weapon:newFavorite", (function() {
                    return e.checkStorageFavorite()
                }
                )),
                this.isMarket ? (this.starFilter = sessionStorage.getItem("market-weapon-starfilter") || "",
                this.elementFilter = sessionStorage.getItem("market-weapon-elementfilter") || "",
                this.priceSort = sessionStorage.getItem("market-weapon-price-order") || "") : (this.starFilter = sessionStorage.getItem("weapon-starfilter") || "",
                this.elementFilter = sessionStorage.getItem("weapon-elementfilter") || "")
            }
        })
          , Ja = qa
          , Qa = (a("dd58"),
        Object(it["a"])(Ja, ea, ta, !1, null, "015628fc", null))
          , er = Qa.exports
          , tr = {
            data: function() {
                return {
                    showReforge: !1,
                    reforgeWeaponId: null,
                    burnWeaponId: null,
                    forgeCost: 0,
                    reforgeCost: 0,
                    disableForge: !1
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["defaultAccount"])), Object(n["c"])(["contracts", "ownWeapons"])), {}, {
                canReforge: function() {
                    return null === this.reforgeWeaponId || null === this.burnWeaponId || this.reforgeWeaponId === this.burnWeaponId
                }
            }),
            watch: {
                reforgeWeaponId: function() {
                    this.showReforge = !1,
                    this.burnWeaponId = null
                }
            },
            created: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a, r, n, o;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.contracts.CryptoBlades.methods.mintWeaponFee().call({
                                    from: e.defaultAccount
                                });
                            case 2:
                                return a = t.sent,
                                t.next = 5,
                                e.contracts.CryptoBlades.methods.usdToSkill(a).call();
                            case 5:
                                return r = t.sent,
                                e.forgeCost = C()(r).div(C()(10).pow(18)).toFixed(4),
                                t.next = 9,
                                e.contracts.CryptoBlades.methods.reforgeWeaponFee().call({
                                    from: e.defaultAccount
                                });
                            case 9:
                                return n = t.sent,
                                t.next = 12,
                                e.contracts.CryptoBlades.methods.usdToSkill(n).call();
                            case 12:
                                o = t.sent,
                                e.reforgeCost = C()(o).div(C()(10).pow(18)).toFixed(4);
                            case 14:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["mintWeapon", "reforgeWeapon"])), {}, {
                onForgeWeapon: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.disableForge) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return e.disableForge = !0,
                                    setTimeout((function() {
                                        e.disableForge = !1
                                    }
                                    ), 1e4),
                                    t.prev = 4,
                                    t.next = 7,
                                    e.mintWeapon();
                                case 7:
                                    t.next = 13;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t["catch"](4),
                                    console.error(t.t0),
                                    e.$dialog.notify.error("Could not forge sword: insuffucient funds or transaction denied.");
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[4, 9]])
                    }
                    )))()
                },
                onShowForgeDetails: function() {
                    this.$refs["forge-details-modal"].show()
                },
                showReforgeConfirmation: function() {
                    this.$refs["reforge-confirmation-modal"].show()
                },
                isWeaponRare: function() {
                    return this.getWeaponToBurn().stars >= 3
                },
                isWeaponReforged: function() {
                    return this.getWeaponToBurn().bonusPower > 0
                },
                getWeaponToBurn: function() {
                    var e = this;
                    return this.ownWeapons.find((function(t) {
                        return t.id === e.burnWeaponId
                    }
                    ))
                },
                onReforgeWeapon: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    e.reforgeWeapon({
                                        burnWeaponId: e.burnWeaponId,
                                        reforgeWeaponId: e.reforgeWeaponId
                                    });
                                case 3:
                                    e.burnWeaponId = null,
                                    t.next = 10;
                                    break;
                                case 6:
                                    t.prev = 6,
                                    t.t0 = t["catch"](0),
                                    console.error(t.t0),
                                    e.$dialog.notify.error("Could not forge sword: insuffucient funds or transaction denied.");
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 6]])
                    }
                    )))()
                }
            }),
            components: {
                WeaponGrid: er,
                BigButton: ut,
                WeaponIcon: $a
            }
        }
          , ar = tr
          , rr = (a("4f9b"),
        Object(it["a"])(ar, Jt, Qt, !1, null, "9d154bba", null))
          , nr = rr.exports
          , or = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "body main-font"
            }, [e.ownWeapons.length > 0 && e.ownCharacters.length > 0 ? r("div", [null !== e.error ? r("div", {
                staticClass: "row"
            }, [r("div", {
                staticClass: "col error"
            }, [e._v("Error: " + e._s(e.error))])]) : e._e(), r("b-modal", {
                attrs: {
                    id: "fightResultsModal",
                    "hide-footer": "",
                    title: "Fight Results"
                }
            }, [e.resultsAvailable ? r("CombatResults", {
                attrs: {
                    results: e.fightResults
                }
            }) : e._e(), r("b-button", {
                staticClass: "mt-3",
                attrs: {
                    variant: "primary",
                    block: ""
                },
                on: {
                    click: function(t) {
                        return e.$bvModal.hide("fightResultsModal")
                    }
                }
            }, [e._v("Close")])], 1), r("div", {
                staticClass: "row"
            }, [r("div", {
                staticClass: "col"
            }, [e.currentCharacter ? e._e() : r("div", {
                staticClass: "message-box"
            }, [e._v("You need to select a character to do battle.")]), r("div", {
                staticClass: "row"
            }, [r("div", {
                staticClass: "col-12 col-md-2 offset-md-5"
            }, [e.currentCharacter && e.currentCharacterStamina < e.staminaPerFight ? r("div", {
                staticClass: "message-box"
            }, [e._v(" You need " + e._s(e.staminaPerFight) + " mana to do battle. "), r("h4", [e._v("Mana Cost Per Fight")]), r("b-form-select", {
                staticClass: "ml-3",
                on: {
                    change: function(t) {
                        return e.setFightMultiplier()
                    }
                },
                model: {
                    value: e.fightMultiplier,
                    callback: function(t) {
                        e.fightMultiplier = t
                    },
                    expression: "fightMultiplier"
                }
            }, [r("b-form-select-option", {
                attrs: {
                    value: null,
                    disabled: ""
                }
            }, [e._v("Please select Mana to expend per cast")]), r("b-form-select-option", {
                attrs: {
                    value: "1"
                }
            }, [e._v("40 - Normal Magika")]), r("b-form-select-option", {
                attrs: {
                    value: "2"
                }
            }, [e._v("80 - Super Magika")]), r("b-form-select-option", {
                attrs: {
                    value: "3"
                }
            }, [e._v("120 - Mega Makiga")]), r("b-form-select-option", {
                attrs: {
                    value: "4"
                }
            }, [e._v("160 - Grand Magika ")]), r("b-form-select-option", {
                attrs: {
                    value: "5"
                }
            }, [e._v("200 - Hyper Magika")])], 1)], 1) : e._e()])]), e.selectedWeaponId && !e.weaponHasDurability(e.selectedWeaponId) ? r("div", {
                staticClass: "message-box"
            }, [e._v("This weapon does not have enough durability.")]) : e._e(), 59 === e.timeMinutes && e.timeSeconds >= 30 ? r("div", {
                staticClass: "message-box"
            }, [e._v("You cannot do battle during the last 30 seconds of the hour. Stand fast!")]) : e._e()])]), r("img", {
                staticClass: "info-divider enemy-divider",
                attrs: {
                    src: a("f825")
                }
            }), e.currentCharacterStamina >= e.staminaPerFight ? r("div", {
                staticClass: "row"
            }, [r("div", {
                staticClass: "col"
            }, [r("div", {
                staticClass: "row"
            }, [r("div", {
                staticClass: "col"
            }, [e.waitingResults ? r("div", {
                staticClass: "waiting",
                attrs: {
                    margin: "auto"
                }
            }, [r("i", {
                staticClass: "fas fa-spinner fa-spin"
            }), e._v(" Waiting for fight results... ")]) : e._e()])]), r("div", {
                staticClass: "combat-enemy-container"
            }, [r("div", {
                staticClass: "col weapon-selection"
            }, [r("div", {
                staticClass: "header-row"
            }, [r("div", {
                staticClass: "row mb-3 mt-3"
            }, [r("div", {
                staticClass: "col-12 col-md-2 offset-md-5"
            }, [r("h4", [e._v("Mana Cost per Fight")]), r("b-form-select", {
                on: {
                    change: function(t) {
                        return e.setFightMultiplier()
                    }
                },
                model: {
                    value: e.fightMultiplier,
                    callback: function(t) {
                        e.fightMultiplier = t
                    },
                    expression: "fightMultiplier"
                }
            }, [r("b-form-select-option", {
                attrs: {
                    value: null,
                    disabled: ""
                }
            }, [e._v("Please select Mana Cost per Cast")]), r("b-form-select-option", {
                attrs: {
                    value: "1"
                }
            }, [e._v("40 - Normal Magika")]), r("b-form-select-option", {
                attrs: {
                    value: "2"
                }
            }, [e._v("80 - Super Magika")]), r("b-form-select-option", {
                attrs: {
                    value: "3"
                }
            }, [e._v("120 - Mega Magika")]), r("b-form-select-option", {
                attrs: {
                    value: "4"
                }
            }, [e._v("160 - Grand Magika")]), r("b-form-select-option", {
                attrs: {
                    value: "5"
                }
            }, [e._v("200 - Hyper Magika")])], 1)], 1)]), r("div", {
                staticClass: "header-row weapon-header"
            }, [r("b", [e._v("Choose a weapon")]), r("Hint", {
                attrs: {
                    text: "Your weapon multiplies your power<br>\n                  <br>+Stats determine the multiplier\n                  <br>Stat element match with character gives greater bonus"
                }
            })], 1), e.selectedWeaponId ? r("div", {
                staticClass: "weapon-icon-wrapper"
            }, [r("weapon-icon", {
                staticClass: "weapon-icon",
                attrs: {
                    weapon: e.selectedWeapon
                }
            })], 1) : e._e(), e.selectedWeaponId ? r("b-button", {
                staticClass: "ml-3",
                attrs: {
                    variant: "primary",
                    id: "gtag-link-others",
                    tagname: "choose_weapon"
                },
                on: {
                    click: function(t) {
                        e.selectedWeaponId = null
                    }
                }
            }, [e._v(" Choose New Weapon ")]) : e._e()], 1), e.selectedWeaponId ? e._e() : r("weapon-grid", {
                attrs: {
                    checkForDurability: !0
                },
                model: {
                    value: e.selectedWeaponId,
                    callback: function(t) {
                        e.selectedWeaponId = t
                    },
                    expression: "selectedWeaponId"
                }
            })], 1), e.targets.length > 0 ? r("div", {
                staticClass: "row mb-3 flex-column enemy-container"
            }, [r("div", {
                staticClass: "row"
            }, [r("div", {
                staticClass: "col text-center"
            }, [r("div", {
                staticClass: "combat-hints"
            }, [r("span", {
                staticClass: "fire-icon"
            }), e._v(" » "), r("span", {
                staticClass: "earth-icon"
            }), e._v(" » "), r("span", {
                staticClass: "lightning-icon"
            }), e._v(" » "), r("span", {
                staticClass: "water-icon"
            }), e._v(" » "), r("span", {
                staticClass: "fire-icon"
            }), r("Hint", {
                attrs: {
                    text: "The elements affect power:<br>\n                    <br>Character vs Enemy: bonus or penalty as shown above\n                    <br>Character and Weapon match gives bonus"
                }
            })], 1)])]), r("div", {
                staticClass: "enemy-list"
            }, e._l(e.targets, (function(t, a) {
                return r("div", {
                    key: a,
                    staticClass: "col-lg-3 col-md-6 col-sm-12 col-xs-12 encounter"
                }, [r("div", {
                    staticClass: "encounter-container"
                }, [r("div", {
                    staticClass: "enemy-character"
                }, [r("div", {
                    staticClass: "encounter-element"
                }, [r("span", {
                    class: e.getCharacterTrait(t.trait).toLowerCase() + "-icon"
                })]), r("div", {
                    staticClass: "mobile-divider mobile-img-adjustment"
                }, [r("img", {
                    staticClass: "mr-auto ml-auto enemy-img",
                    attrs: {
                        src: e.getEnemyArt(t.power),
                        alt: "Enemy"
                    }
                })]), r("div", {
                    staticClass: "encounter-power"
                }, [e._v(e._s(t.power) + " Power")]), r("div", {
                    staticClass: "xp-gain"
                }, [e._v("+" + e._s(e.getPotentialXp(t)) + " XP")])]), r("div", {
                    staticClass: "victory-chance"
                }, [e._v(e._s(e.getWinChance(t.power, t.trait)) + " !")]), r("big-button", {
                    staticClass: "encounter-button btn-styled",
                    attrs: {
                        mainText: "Fight!",
                        disabled: 59 === e.timeMinutes && e.timeSeconds >= 30 || e.waitingResults
                    },
                    on: {
                        click: function(a) {
                            return e.onClickEncounter(t)
                        }
                    }
                }), e.isLoadingTargets ? r("p", [e._v("Loading...")]) : e._e()], 1)])
            }
            )), 0)]) : e._e()])])]) : e._e(), r("div")], 1) : e._e(), 0 === e.ownWeapons.length || 0 === e.ownCharacters.length ? r("div", {
                staticClass: "blank-slate"
            }, [0 === e.ownWeapons.length ? r("div", [e._v("You do not currently have any weapons. You can forge one at the Blacksmith.")]) : e._e(), 0 === e.ownCharacters.length ? r("div", [e._v("You do not currently have any characters. You can summon one at the Village.")]) : e._e()]) : e._e()])
        }
          , lr = []
          , ir = a("9938")
          , sr = a.n(ir)
          , ur = a("98c4")
          , cr = a.n(ur)
          , mr = a("7143")
          , dr = a.n(mr)
          , pr = a("d814")
          , hr = a.n(pr)
          , _r = a("9bb2")
          , fr = a.n(_r)
          , gr = a("8acc")
          , br = a.n(gr)
          , yr = a("3f60")
          , Ar = a.n(yr)
          , wr = a("f1ba")
          , vr = a.n(wr)
          , Cr = [sr.a, cr.a, dr.a, hr.a, fr.a, br.a, Ar.a, vr.a];
        function Rr(e) {
            return Cr[e % Cr.length]
        }
        var Mr = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.tooltipHtml,
                    expression: "tooltipHtml"
                }],
                staticClass: "hint"
            }, [a("i", {
                staticClass: "far fa-question-circle hint"
            })])
        }
          , Tr = []
          , kr = {
            props: ["text"],
            computed: {
                tooltipHtml: function() {
                    return this.text
                }
            }
        }
          , Sr = kr
          , Or = (a("ee65"),
        Object(it["a"])(Sr, Mr, Tr, !1, null, null, null))
          , xr = Or.exports
          , Wr = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "results-panel"
            }, [a("span", {
                staticClass: "outcome"
            }, [e._v(e._s(e.getSuccessText()))]), a("span", {
                staticClass: "roll"
            }, [e._v(e._s("Damage dealt: " + e.results[1] + "! , Enemy damage: " + e.results[2] + "!"))]), e.results[0] ? a("span", {
                staticClass: "reward"
            }, [e._v(" " + e._s("You earned " + e.results[3] + " xp") + " "), a("br"), a("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.convertWei(e.results[4]) + " SICKLE",
                    expression: "convertWei(results[4])+' SICKLE'"
                }]
            }, [e._v(e._s("and " + e.formattedSkill))]), a("Hint", {
                attrs: {
                    text: "SICKLE earned is based on gas costs of the network plus a factor of your power"
                }
            })], 1) : e._e()])
        }
          , Pr = []
          , Lr = {
            props: ["results"],
            computed: {
                formattedSkill: function() {
                    var e = k(this.results[4]);
                    return "".concat(M(e).toFixed(6), " SICKLE")
                }
            },
            methods: {
                getSuccessText: function() {
                    return this.results[0] ? "Victory!" : "You got slained!"
                },
                convertWei: function(e) {
                    return k(e)
                }
            },
            components: {
                Hint: xr
            }
        }
          , Br = Lr
          , Fr = (a("d604"),
        Object(it["a"])(Br, Wr, Pr, !1, null, null, null))
          , Er = Fr.exports
          , Ir = {
            data: function() {
                return {
                    selectedWeaponId: null,
                    error: null,
                    waitingResults: !1,
                    resultsAvailable: !1,
                    fightResults: null,
                    intervalSeconds: null,
                    intervalMinutes: null,
                    timeSeconds: null,
                    timeMinutes: null,
                    fightXpGain: 32,
                    selectedWeapon: null,
                    fightMultiplier: Number(localStorage.getItem("fightMultiplier")),
                    staminaPerFight: 40
                }
            },
            created: function() {
                var e = this;
                this.intervalSeconds = setInterval((function() {
                    return e.timeSeconds = (new Date).getSeconds()
                }
                ), 5e3),
                this.intervalMinutes = setInterval((function() {
                    return e.timeMinutes = (new Date).getMinutes()
                }
                ), 2e4),
                this.staminaPerFight = 40 * Number(localStorage.getItem("fightMultiplier"))
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["currentCharacterId"])), Object(n["c"])(["getTargetsByCharacterIdAndWeaponId", "ownCharacters", "ownWeapons", "currentCharacter", "currentCharacterStamina", "getWeaponDurability", "fightGasOffset", "fightBaseline"])), {}, {
                targets: function() {
                    return this.getTargetsByCharacterIdAndWeaponId(this.currentCharacterId, this.selectedWeaponId)
                },
                isLoadingTargets: function() {
                    return 0 === this.targets.length && this.currentCharacterId && this.selectedWeaponId
                },
                selections: function() {
                    return [this.currentCharacterId, this.selectedWeaponId]
                },
                updateResults: function() {
                    return [this.fightResults, this.error]
                }
            }),
            watch: {
                selections: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, o;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = Object(p["a"])(e, 2),
                                    n = r[0],
                                    o = r[1],
                                    t.ownWeapons.filter(Boolean).find((function(e) {
                                        return e.id === o
                                    }
                                    )) || (t.selectedWeaponId = null),
                                    a.next = 4,
                                    t.fetchTargets({
                                        characterId: n,
                                        weaponId: o
                                    });
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                updateResults: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, o;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    r = Object(p["a"])(e, 2),
                                    n = r[0],
                                    o = r[1],
                                    t.resultsAvailable = null !== n,
                                    t.waitingResults = null === n && null === o,
                                    t.setIsInCombat(t.waitingResults),
                                    t.resultsAvailable && t.$bvModal.show("fightResultsModal");
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                }
            },
            methods: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["fetchTargets", "doEncounter", "fetchFightRewardSkill", "fetchFightRewardXp", "getXPRewardsIfWin"])), Object(n["d"])(["setIsInCombat"])), {}, {
                getEnemyArt: Rr,
                weaponHasDurability: function(e) {
                    return this.getWeaponDurability(e) >= this.fightMultiplier
                },
                getCharacterTrait: function(e) {
                    return R[e]
                },
                getWinChance: function(e, t) {
                    var a = this
                      , r = j(this.currentCharacter.level)
                      , n = parseInt(this.currentCharacter.trait, 10)
                      , o = this.ownWeapons.filter(Boolean).find((function(e) {
                        return e.id === a.selectedWeaponId
                    }
                    ));
                    this.selectedWeapon = o;
                    var l = parseInt(U[o.element], 10)
                      , i = ee(o, n)
                      , s = r * i + o.bonusPower
                      , u = 1 + .075 * (l === n ? 1 : 0) + .075 * this.getElementAdvantage(n, t)
                      , c = s * u * .9
                      , m = s * u * 1.1
                      , d = m - c
                      , p = .9 * e
                      , h = 1.1 * e
                      , _ = h - p
                      , f = 0;
                    return c > h ? "Very Easy" : m < p ? "Ver Hard" : (c >= p ? (f = (c - p) / _,
                    f += (m - h) / d * (1 - f),
                    f += .5 * (1 - f)) : (f = (p - c) / d,
                    f += (h - m) / _ * (1 - f),
                    f += .5 * (1 - f),
                    f = 1 - f),
                    f <= .3 ? "Hard" : f <= .5 ? "Normal" : f <= .7 ? "Easy" : "Very Easy")
                },
                getElementAdvantage: function(e, t) {
                    return (e + 1) % 4 === t ? 1 : (t + 1) % 4 === e ? -1 : 0
                },
                onClickEncounter: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (null !== t.selectedWeaponId && null !== t.currentCharacterId) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return a.next = 4,
                                    t.fetchTargets({
                                        characterId: t.currentCharacterId,
                                        weaponId: t.selectedWeaponId
                                    });
                                case 4:
                                    if (t.targets.find((function(t) {
                                        return t.original === e.original
                                    }
                                    ))) {
                                        a.next = 6;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 6:
                                    return t.fightResults = null,
                                    t.error = null,
                                    t.waitingResults = !0,
                                    t.setIsInCombat(t.waitingResults),
                                    a.prev = 10,
                                    a.next = 13,
                                    t.doEncounter({
                                        characterId: t.currentCharacterId,
                                        weaponId: t.selectedWeaponId,
                                        targetString: e.original,
                                        fightMultiplier: t.fightMultiplier
                                    });
                                case 13:
                                    return r = a.sent,
                                    t.fightResults = r,
                                    a.next = 17,
                                    t.fetchFightRewardSkill();
                                case 17:
                                    return a.next = 19,
                                    t.fetchFightRewardXp();
                                case 19:
                                    t.error = null,
                                    a.next = 26;
                                    break;
                                case 22:
                                    a.prev = 22,
                                    a.t0 = a["catch"](10),
                                    console.error(a.t0),
                                    t.error = a.t0.message;
                                case 26:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a, null, [[10, 22]])
                    }
                    )))()
                },
                formattedSkill: function(e) {
                    var t = k(e, "ether");
                    return "".concat(M(t).toFixed(6), " SICKLE")
                },
                getPotentialXp: function(e) {
                    var t = this
                      , a = j(this.currentCharacter.level)
                      , r = parseInt(this.currentCharacter.trait, 10)
                      , n = this.ownWeapons.filter(Boolean).find((function(e) {
                        return e.id === t.selectedWeaponId
                    }
                    ))
                      , o = ee(n, r)
                      , l = a * o + n.bonusPower;
                    return Math.floor(e.power / l * this.fightXpGain) * this.fightMultiplier
                },
                setFightMultiplier: function() {
                    localStorage.setItem("fightMultiplier", this.fightMultiplier.toString())
                }
            }),
            components: {
                BigButton: ut,
                WeaponGrid: er,
                Hint: xr,
                CombatResults: Er,
                WeaponIcon: $a
            }
        }
          , Hr = Ir
          , Nr = (a("7a43"),
        Object(it["a"])(Hr, or, lr, !1, null, "e63a2d54", null))
          , Dr = Nr.exports
          , Xr = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [e.isKnownStakeType ? a("staking", {
                staticClass: "staking",
                attrs: {
                    stakeType: e.stakeType
                }
            }) : a("h1", [e._v("Unknown stake type, please try again.")])], 1)
        }
          , Gr = []
          , jr = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "stake"
            }, [a("div", {
                staticClass: "staker"
            }, [a("div", {
                staticClass: "reward-claim-section medium-dark-bg",
                class: {
                    "height-minimized": !e.showRewardClaimSection
                }
            }, [a("div", {
                staticClass: "reward-claim-inner-wrapper"
            }, [a("h1", {
                staticClass: "no-margin center-text"
            }, [e._v("Rewards are available!")]), a("p", {
                staticClass: "center-text"
            }, [e._v("You have:")]), a("p", {
                staticClass: "center-text selectable"
            }, [e._v(" " + e._s(e.currentRewardEarned.toFixed(18)) + " SKILL ")]), a("p", {
                staticClass: "center-text"
            }, [e._v("to be claimed.")]), a("button", {
                staticClass: "StakeButton claim-button",
                class: {
                    switch_active: "ok" === e.rewardClaimState
                },
                on: {
                    click: e.onClaimReward
                }
            }, [e._v(" " + e._s(e.claimRewardButtonLabel) + " ")])])]), a("div", {
                staticClass: "chooser"
            }, [a("div", {
                staticClass: "navbar-staking"
            }, [a("button", {
                staticClass: "switch",
                class: {
                    switch_active: e.isDeposit
                },
                on: {
                    click: function(t) {
                        e.isDeposit = !0
                    }
                }
            }, [a("span", [e._v("Stake")])]), a("button", {
                staticClass: "switch",
                class: {
                    switch_active: !e.isDeposit
                },
                on: {
                    click: function(t) {
                        e.isDeposit = !1
                    }
                }
            }, [a("span", [e._v("Unstake")])])])]), a("div", {
                staticClass: "stakePage medium-dark-bg"
            }, [a("div", {
                staticClass: "sPElement input"
            }, [a("div", {
                staticClass: "inputBody"
            }, [a("div", {
                staticClass: "flex_row"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.textAmount,
                    expression: "textAmount"
                }],
                staticClass: "token-amount-input",
                attrs: {
                    inputmode: "decimal",
                    title: "Token Amount",
                    autocomplete: "off",
                    autocorrect: "off",
                    type: "text",
                    pattern: "^[0-9]*[.,]?[0-9]*$",
                    placeholder: "0.0",
                    minlength: "1",
                    maxlength: "39",
                    spellcheck: "false",
                    value: ""
                },
                domProps: {
                    value: e.textAmount
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.textAmount = t.target.value)
                    }
                }
            }), a("div", {
                staticClass: "ant-col"
            }, [e._v(e._s(e.stakingTokenName))])]), a("div", {
                staticClass: "balance",
                attrs: {
                    id: "balance"
                },
                on: {
                    click: e.onMAX
                }
            }, [e._v(" wallet: " + e._s(e.inputSideBalance) + " ")])])]), a("div", {
                staticClass: "down-arrow-spacer"
            }), a("div", {
                staticClass: "sPElement input"
            }, [a("div", {
                staticClass: "inputBody"
            }, [a("div", {
                staticClass: "flex_row"
            }, [a("input", {
                staticClass: "token-amount-input",
                attrs: {
                    inputmode: "decimal",
                    title: "Token Amount",
                    autocomplete: "off",
                    autocorrect: "off",
                    type: "text",
                    pattern: "^[0-9]*[.,]?[0-9]*$",
                    placeholder: "0.0",
                    minlength: "1",
                    maxlength: "39",
                    spellcheck: "false",
                    readonly: ""
                },
                domProps: {
                    value: e.bigNumberAmount.div(1e18)
                }
            }), a("div", {
                staticClass: "ant-col"
            }, [e._v(" " + e._s(e.stakingTokenName) + " ")])]), a("div", {
                staticClass: "balance",
                attrs: {
                    id: "balance"
                },
                on: {
                    click: e.onMAX
                }
            }, [e._v(" wallet: " + e._s(e.outputSideBalance) + " ")])])]), e.isDeposit && e.stakeData.rewardMinimumStakeTime > 0 ? a("p", {
                staticClass: "no-margin spacing-top"
            }, [a("span", {
                staticClass: "bold"
            }, [e._v("NOTE")]), e._v(": You will not be able to unstake or claim rewards until " + e._s(e.minimumStakeTimeFormatted) + " has passed since your initial stake. ")]) : e._e(), a("button", {
                staticClass: "btn btn-primary spacing-top",
                attrs: {
                    disabled: !(!e.loading && "ok" === e.currentState),
                    tagname: "stake"
                },
                on: {
                    click: e.onSubmit
                }
            }, [e.loading ? a("span", [e._v(" Loading... ")]) : a("span", {
                staticClass: "gold-text"
            }, [e._v(" " + e._s(e.submitButtonLabel) + " "), e.tryingToUnstake ? a("b-icon-exclamation-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Unstaking will lock remaining funds for another " + e.minimumStakeTimeFormatted,
                    expression: "`Unstaking will lock remaining funds for another ${minimumStakeTimeFormatted}`"
                }],
                staticClass: "centered-icon",
                attrs: {
                    scale: "0.9"
                }
            }) : e._e()], 1)]), e.stakeUnclaimedRewardsButtonShown ? a("button", {
                staticClass: "btn btn-primary spacing-top",
                attrs: {
                    disabled: !e.canStakeUnclaimedRewards,
                    tagname: "stake"
                },
                on: {
                    click: e.onStakeUnclaimedRewards
                }
            }, [e.loading ? a("span", [e._v(" Loading... ")]) : e.canStakeUnclaimedRewards ? a("span", {
                staticClass: "gold-text"
            }, [e._v(" Stake all of unclaimed rewards (" + e._s(e.formattedSkillRewards) + " SKILL) ")]) : a("span", {
                staticClass: "gold-text"
            }, [e._v(" No unclaimed rewards to stake ")])]) : e._e()])])])
        }
          , Vr = []
          , Ur = 60
          , zr = 60 * Ur
          , Kr = 24 * zr;
        function Yr(e, t) {
            return e.toFixed(0) + " " + ("1" === e.toFixed(0) ? t[0] : t[1])
        }
        function $r(e) {
            return e / Kr >= 1 ? Yr(e / Kr, ["day", "days"]) : e / zr >= 1 ? Yr(e / zr, ["hour", "hours"]) : e / Ur >= 1 ? Yr(e / Ur, ["minute", "minutes"]) : Yr(e, ["second", "seconds"])
        }
        function Zr(e) {
            var t = Math.floor(e / 86400)
              , a = Math.floor(e / 3600 % 24)
              , r = Math.floor(e / 60) % 60
              , n = e % 60;
            return "".concat(0 !== t && ("0" + t).slice(-2) + "d " || "") + "".concat(0 !== a && ("0" + a).slice(-2) + "h " || "") + "".concat(0 !== r && ("0" + r).slice(-2) + "m " || "") + "".concat(0 !== n && ("0" + n).slice(-2) + "s" || "")
        }
        var qr = "Connect to wallet ↗"
          , Jr = "Amount is too big"
          , Qr = "Contract is Full"
          , en = "Enter an amount"
          , tn = "Insufficient balance"
          , an = "Not enough funds in Exit Pool"
          , rn = "Waiting..."
          , nn = "Stake"
          , on = "Unstake"
          , ln = {
            props: {
                stakeType: {
                    type: String,
                    validator: function(e) {
                        return Y(e)
                    }
                }
            },
            data: function() {
                return {
                    textAmount: "",
                    isDeposit: !0,
                    loading: !1,
                    errorWhenUpdating: null,
                    rewardClaimLoading: !1,
                    stakeUnlockTimeLeftCurrentEstimate: 0,
                    stakeRewardDistributionTimeLeftCurrentEstimate: 0
                }
            },
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.fetchData();
                            case 2:
                                e.stakeUnlockTimeLeftCurrentEstimate = e.unlockTimeLeftInternal,
                                e.stakeRewardDistributionTimeLeftCurrentEstimate = e.rewardDistributionTimeLeftInternal,
                                e.stakeRewardProgressInterval = setInterval(Object(h["a"])(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                e.fetchStakeDetails({
                                                    stakeType: e.stakeType
                                                });
                                            case 2:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                ))), 1e4),
                                e.secondsInterval = setInterval((function() {
                                    e.updateEstimates()
                                }
                                ), 1e3);
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            beforeDestroy: function() {
                clearInterval(this.stakeRewardProgressInterval)
            },
            computed: Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["defaultAccount", "staking", "skillRewards"])), {}, {
                stakeData: function() {
                    return this.staking[this.stakeType]
                },
                rewardDistributionTimeLeftInternal: function() {
                    return this.stakeData.rewardDistributionTimeLeft
                },
                unlockTimeLeftInternal: function() {
                    return this.stakeData.unlockTimeLeft
                },
                stakingTokenName: function() {
                    return "skill" === this.stakeType || "skill2" === this.stakeType ? "SKILL" : "SKILL-WBNB"
                },
                minimumStakeTimeFormatted: function() {
                    return $r(this.stakeData.rewardMinimumStakeTime)
                },
                estimatedUnlockTimeLeftFormatted: function() {
                    return Zr(this.stakeUnlockTimeLeftCurrentEstimate)
                },
                showRewardClaimSection: function() {
                    return "loading" === this.rewardClaimState || this.currentRewardEarned.gt(0)
                },
                walletBalance: function() {
                    return M(this.stakeData.ownBalance)
                },
                stakedBalance: function() {
                    return M(this.stakeData.stakedBalance)
                },
                currentRewardEarned: function() {
                    return M(this.stakeData.currentRewardEarned).dividedBy(1e18)
                },
                remainingCapacityForDeposit: function() {
                    return this.stakeData.remainingCapacityForDeposit ? M(this.stakeData.remainingCapacityForDeposit) : null
                },
                remainingCapacityForWithdraw: function() {
                    return M(this.stakeData.remainingCapacityForWithdraw)
                },
                contractBalance: function() {
                    return M(this.stakeData.contractBalance)
                },
                validator: function() {
                    return null
                },
                inputSideBalance: function() {
                    var e = this.isDeposit ? this.walletBalance : this.stakedBalance;
                    return e.dividedBy(1e18).toFixed(6)
                },
                outputSideBalance: function() {
                    var e = this.isDeposit ? this.stakedBalance : this.walletBalance;
                    return e.dividedBy(1e18).toFixed(6)
                },
                currentState: function() {
                    if (!this.defaultAccount || this.errorWhenUpdating)
                        return "connectWallet";
                    if (!this.isDeposit && this.unlockTimeLeftInternal > 0)
                        return "stakeLocked";
                    if (this.remainingCapacityForDeposit && this.remainingCapacityForDeposit.eq(0) && this.isDeposit)
                        return "contractFull";
                    if (this.remainingCapacityForDeposit && this.bigNumberAmount.gt(this.remainingCapacityForDeposit) && this.isDeposit)
                        return "amountIsTooBig";
                    if ("." === this.textAmount[this.textAmount.length - 1])
                        return "waiting";
                    if (this.textAmount <= 0)
                        return "inputIsZero";
                    var e = this.isDeposit ? this.walletBalance.gte(this.bigNumberAmount) : this.stakedBalance.gte(this.bigNumberAmount);
                    return e ? this.bigNumberAmount.gt(this.contractBalance) && !this.isDeposit || this.bigNumberAmount.gt(this.remainingCapacityForWithdraw) && !this.isDeposit ? "notEnoughFundsInExitPool" : "ok" : "insufficientBalance"
                },
                submitButtonLabel: function() {
                    switch (this.currentState) {
                    case "ok":
                        return this.isDeposit ? nn : on;
                    case "contractFull":
                        return Qr;
                    case "amountIsTooBig":
                        return Jr;
                    case "waiting":
                        return rn;
                    case "inputIsZero":
                        return en;
                    case "insufficientBalance":
                        return tn;
                    case "notEnoughFundsInExitPool":
                        return an;
                    case "stakeLocked":
                        return "Sorry, stake is still locked; please wait about ".concat(this.estimatedUnlockTimeLeftFormatted);
                    default:
                        return qr
                    }
                },
                tryingToUnstake: function() {
                    return "ok" === this.currentState && !this.isDeposit
                },
                rewardClaimState: function() {
                    return this.rewardClaimLoading ? "loading" : this.unlockTimeLeftInternal > 0 ? "rewardLocked" : "ok"
                },
                claimRewardButtonLabel: function() {
                    switch (this.rewardClaimState) {
                    case "loading":
                        return "Loading...";
                    case "rewardLocked":
                        return "Sorry, reward is still locked; please wait about ".concat(this.estimatedUnlockTimeLeftFormatted);
                    default:
                        return "Claim reward"
                    }
                },
                bigNumberAmount: {
                    get: function() {
                        return this.textAmount ? M(this.textAmount).multipliedBy(1e18) : M(0)
                    },
                    set: function(e) {
                        this.textAmount = e.dividedBy(1e18)
                    }
                },
                stakeUnclaimedRewardsButtonShown: function() {
                    return de === this.stakeType && this.isDeposit
                },
                canStakeUnclaimedRewards: function() {
                    return !this.loading && M(this.skillRewards).gt(0)
                },
                formattedSkillRewards: function() {
                    var e = M(this.skillRewards);
                    return e.dividedBy(1e18).toFixed(4)
                }
            }),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["fetchStakeDetails", "stake", "unstake", "stakeUnclaimedRewards", "claimReward"])), {}, {
                updateEstimates: function() {
                    this.stakeUnlockTimeLeftCurrentEstimate > 0 && this.stakeUnlockTimeLeftCurrentEstimate--,
                    this.stakeRewardDistributionTimeLeftCurrentEstimate > 0 && this.stakeRewardDistributionTimeLeftCurrentEstimate--
                },
                onMAX: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.isDeposit) {
                                        t.next = 7;
                                        break
                                    }
                                    if (!e.remainingCapacityForDeposit || !e.remainingCapacityForDeposit.eq(0)) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    e.bigNumberAmount = e.walletBalance,
                                    e.remainingCapacityForDeposit && e.bigNumberAmount.gt(e.remainingCapacityForDeposit) && (e.bigNumberAmount = M(e.remainingCapacityForDeposit)),
                                    t.next = 10;
                                    break;
                                case 7:
                                    e.bigNumberAmount = e.stakedBalance,
                                    e.bigNumberAmount.gt(e.remainingCapacityForWithdraw) && (e.bigNumberAmount = e.remainingCapacityForWithdraw),
                                    e.bigNumberAmount.gt(e.contractBalance) && (e.bigNumberAmount = e.contractBalance);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onSubmit: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.loading && "ok" === e.currentState) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (a = e.bigNumberAmount.toString(),
                                    t.prev = 3,
                                    e.loading = !0,
                                    !e.isDeposit) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 8,
                                    e.stake({
                                        amount: a,
                                        stakeType: e.stakeType
                                    });
                                case 8:
                                    t.next = 12;
                                    break;
                                case 10:
                                    return t.next = 12,
                                    e.unstake({
                                        amount: a,
                                        stakeType: e.stakeType
                                    });
                                case 12:
                                    t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14,
                                    t.t0 = t["catch"](3),
                                    console.error(t.t0);
                                case 17:
                                    return t.prev = 17,
                                    e.loading = !1,
                                    t.finish(17);
                                case 20:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[3, 14, 17, 20]])
                    }
                    )))()
                },
                onStakeUnclaimedRewards: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.loading && e.canStakeUnclaimedRewards) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.prev = 2,
                                    e.loading = !0,
                                    t.next = 6,
                                    e.stakeUnclaimedRewards({
                                        stakeType: e.stakeType
                                    });
                                case 6:
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8,
                                    t.t0 = t["catch"](2),
                                    console.error(t.t0);
                                case 11:
                                    return t.prev = 11,
                                    e.loading = !1,
                                    t.finish(11);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 8, 11, 14]])
                    }
                    )))()
                },
                onClaimReward: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("ok" === e.rewardClaimState) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.prev = 2,
                                    e.rewardClaimLoading = !0,
                                    t.next = 6,
                                    e.claimReward({
                                        stakeType: e.stakeType
                                    });
                                case 6:
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8,
                                    t.t0 = t["catch"](2),
                                    console.error(t.t0);
                                case 11:
                                    return t.prev = 11,
                                    e.rewardClaimLoading = !1,
                                    t.finish(11);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 8, 11, 14]])
                    }
                    )))()
                },
                fetchData: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    e.errorWhenUpdating = null,
                                    e.loading = !0,
                                    t.next = 5,
                                    e.fetchStakeDetails({
                                        stakeType: e.stakeType
                                    });
                                case 5:
                                    t.next = 11;
                                    break;
                                case 7:
                                    t.prev = 7,
                                    t.t0 = t["catch"](0),
                                    e.errorWhenUpdating = t.t0.message,
                                    console.log(t.t0);
                                case 11:
                                    return t.prev = 11,
                                    e.loading = !1,
                                    t.finish(11);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 7, 11, 14]])
                    }
                    )))()
                }
            }),
            watch: {
                rewardDistributionTimeLeftInternal: function(e, t) {
                    e !== t && (this.stakeRewardDistributionTimeLeftCurrentEstimate = e)
                },
                unlockTimeLeftInternal: function(e, t) {
                    e !== t && (this.stakeUnlockTimeLeftCurrentEstimate = e)
                },
                textAmount: function(e, t) {
                    e.length > 40 ? this.textAmount = t : 0 !== e[e.length - 1] ? "." === e[e.length - 1] && "." !== e[e.length - 2] || (isNaN(e) ? this.textAmount = t : e || (this.textAmount = 0)) : this.textAmount = e
                },
                isDeposit: function() {
                    this.textAmount = ""
                },
                defaultAccount: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (!e) {
                                        a.next = 3;
                                        break
                                    }
                                    return a.next = 3,
                                    t.fetchData();
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                }
            }
        }
          , sn = ln
          , un = (a("73d0"),
        Object(it["a"])(sn, jr, Vr, !1, null, "17e89a98", null))
          , cn = un.exports
          , mn = {
            props: {
                stakeType: {
                    type: String,
                    validator: function(e) {
                        return Y(e)
                    }
                }
            },
            computed: Object(g["a"])(Object(g["a"])({}, Object(n["c"])(["availableStakeTypes"])), {}, {
                isKnownStakeType: function() {
                    return this.availableStakeTypes.includes(this.stakeType)
                }
            }),
            components: {
                Staking: cn
            }
        }
          , dn = mn
          , pn = (a("bf5b"),
        Object(it["a"])(dn, Xr, Gr, !1, null, "45d6796f", null))
          , hn = pn.exports
          , _n = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [a("ul", {
                staticClass: "stake-select-list"
            }, e._l(e.entries, (function(t) {
                return a("li", {
                    key: t.stakeType,
                    staticClass: "stake-select-item"
                }, [a("stake-selector-item", {
                    attrs: {
                        stakeTitle: t.stakeTitle,
                        stakeTokenName: t.stakeTokenName,
                        rewardTokenName: t.rewardTokenName,
                        stakeType: t.stakeType,
                        minimumStakeTime: e.stakeOverviews[t.stakeType].minimumStakeTime,
                        estimatedYield: e.estimatedYields[t.stakeType],
                        deprecated: t.deprecated
                    }
                })], 1)
            }
            )), 0)])
        }
          , fn = []
          , gn = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "container"
            }, [e._m(0), a("h1", {
                staticClass: "stake-type-title"
            }, [e._v(e._s(e.stakeTitle))]), a("div", {
                staticClass: "table-wrapper"
            }, [a("table", {
                staticClass: "stake-data-table"
            }, [a("tr", [a("th", {
                staticClass: "bold"
            }, [e._v(" Stake ")]), a("td", {
                staticClass: "align-right"
            }, [e._v(" " + e._s(e.stakeTokenName) + " ")])]), a("tr", [a("th", {
                staticClass: "bold"
            }), a("td", {
                staticClass: "align-right"
            }, [e._v(" " + e._s(e.rewardTokenName) + " ")])]), e.estimatedYield ? a("tr", {
                attrs: {
                    title: "Estimated yield per year and token."
                }
            }, [a("th", {
                staticClass: "bold"
            }), a("td", {
                staticClass: "align-right"
            }, [e._v(" " + e._s(e.estimatedYield.multipliedBy(100).toFixed(2)) + "% ")])]) : e._e(), 0 !== e.minimumStakeTime ? a("tr", [a("th", {
                staticClass: "bold"
            }), a("td", {
                staticClass: "align-right"
            }, [e._v(" " + e._s(e.minimumStakeTimeFormatted) + " ")])]) : e._e()])]), a("router-link", {
                staticClass: "stake-select-button button dark-bg-text",
                class: {
                    deprecated: e.deprecated
                },
                attrs: {
                    to: {
                        name: "stake",
                        params: {
                            stakeType: e.stakeType
                        }
                    }
                }
            }, [e.deprecated ? a("b-icon-question-circle-fill", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "This stake pool has been deprecated, and should not be staked in anymore.\n        You can still pull tokens out or stake at your own risk, but it is not recommended, and it cannot be reversed.",
                    expression: "`This stake pool has been deprecated, and should not be staked in anymore.\n        You can still pull tokens out or stake at your own risk, but it is not recommended, and it cannot be reversed.`"
                }]
            }) : e._e()], 1)], 1)
        }
          , bn = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "stake-icon-wrapper"
            }, [a("img", {
                staticClass: "stake-type-icon",
                attrs: {
                    src: "https://seiyria.com/gameicons-font/svg/two-coins.svg",
                    alt: ""
                }
            })])
        }
        ]
          , yn = {
            props: ["stakeTitle", "stakeTokenName", "rewardTokenName", "stakeType", "minimumStakeTime", "estimatedYield", "deprecated"],
            computed: {
                minimumStakeTimeFormatted: function() {
                    return $r(this.minimumStakeTime)
                }
            }
        }
          , An = yn
          , wn = (a("f725"),
        Object(it["a"])(An, gn, bn, !1, null, "4e72ed66", null))
          , vn = wn.exports;
        C.a.config({
            ROUNDING_MODE: C.a.ROUND_DOWN
        }),
        C.a.config({
            EXPONENTIAL_AT: 100
        });
        var Cn, Rn = {
            components: {
                StakeSelectorItem: vn
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["stakeOverviews"])), Object(n["c"])(["availableStakeTypes"])), {}, {
                entries: function() {
                    return this.availableStakeTypes.map((function(e) {
                        return Object(g["a"])({
                            stakeType: e
                        }, ce[e])
                    }
                    ))
                },
                estimatedYields: function() {
                    var e = this;
                    return y.a.fromPairs(this.availableStakeTypes.map((function(t) {
                        return [t, e.calculateEstimatedYield(t)]
                    }
                    )))
                }
            }),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["fetchStakeOverviewData"])), {}, {
                calculateEstimatedYield: function(e) {
                    var t = this.stakeOverviews[e].rewardRate
                      , a = this.stakeOverviews[e].totalSupply
                      , r = C()(t).multipliedBy(31556736)
                      , n = C()(a)
                      , o = r.dividedBy(n);
                    return "lp" === e || "lp2" === e ? o.multipliedBy(.102) : o
                }
            }),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.fetchStakeOverviewData();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }, Mn = Rn, Tn = (a("27b3"),
        Object(it["a"])(Mn, _n, fn, !1, null, "73c34a5d", null)), kn = Tn.exports, Sn = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [e._m(0), a("div", {
                staticClass: "right-side fill-space raid-signup"
            }, [a("div", {
                staticClass: "chooser"
            }, [a("div", {
                staticClass: "left-side"
            }, [a("character-list")], 1), a("div", {
                staticClass: "right-side"
            }, [a("weapon-grid")], 1)]), a("div", {
                staticClass: "signup"
            }, [a("div", {
                staticClass: "warning"
            }, [e._v(" Joining will cost 12h stamina ")]), e._m(1), a("div", {
                staticClass: "total-power"
            }, [e._v(" Total power: 12300 ")]), a("div", {
                staticClass: "action"
            }, [a("big-button", {
                staticClass: "button",
                attrs: {
                    mainText: "Sign up"
                }
            })], 1)])])])
        }, On = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "left-side fill-space raid-info"
            }, [a("div", {
                staticClass: "left-side"
            }, [a("div", {
                staticClass: "finish"
            }, [a("span", {
                staticClass: "title"
            }, [e._v("Finishes on")]), a("br"), e._v(" May 4th, 2021 ")]), a("div", {
                staticClass: "raiders"
            }, [a("span", {
                staticClass: "title"
            }, [e._v("Raiders")]), e._v(" 69 "), a("br"), a("span", {
                staticClass: "title"
            }, [e._v("Total Power")]), e._v(" 69k "), a("br"), a("span", {
                staticClass: "title"
            }, [e._v("Bounty")]), e._v(" 10 SKILL ")]), a("div", {
                staticClass: "drops"
            }, [a("span", {
                staticClass: "title"
            }, [e._v("Drops")]), a("br"), e._v(" items ")])]), a("div", {
                staticClass: "right-side raid-boss"
            }, [a("div", {
                staticClass: "raid-title"
            }, [a("span", {
                staticClass: "title"
            }, [e._v("Raid title")])]), a("div", {
                staticClass: "image"
            }, [e._v(" image here ")]), a("div", {
                staticClass: "about-raid"
            }, [a("span", {
                staticClass: "title"
            }, [e._v("Raid Name")]), a("br"), a("span", {
                staticClass: "lightning"
            }, [e._v("Lightning")])])])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "power"
            }, [a("div", {
                staticClass: "left-side"
            }, [e._v("Character Power: 10000")]), a("div", {
                staticClass: "right-side"
            }, [e._v("Weapon Multiplier: x1.23")])])
        }
        ], xn = {
            computed: Object(g["a"])({}, Object(n["c"])(["ownCharacters", "ownWeapons"])),
            props: {},
            methods: Object(g["a"])({}, Object(n["b"])(["fetchRaidData", "fetchOwnedCharacterRaidStatus"])),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Promise.all([e.fetchRaidData(), e.fetchOwnedCharacterRaidStatus()]);
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            components: {
                BigButton: ut,
                CharacterList: Kt,
                WeaponGrid: er
            }
        }, Wn = xn, Pn = (a("d854"),
        Object(it["a"])(Wn, Sn, On, !1, null, "7bab172a", null)), Ln = Pn.exports, Bn = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [a("b-tabs", {
                attrs: {
                    justified: ""
                }
            }, [a("b-tab", {
                on: {
                    click: function(t) {
                        e.clearData(),
                        e.browseTabActive = !0
                    }
                },
                scopedSlots: e._u([{
                    key: "title",
                    fn: function() {
                        return [e._v(" Browse NFTs "), a("hint", {
                            staticClass: "hint",
                            attrs: {
                                text: "NFT stands for Non Fungible Token.<br>Weapons and Characters are NFTs of the ERC721 standard"
                            }
                        })]
                    },
                    proxy: !0
                }])
            }, [a("div", {
                staticClass: "row mt-3"
            }, [a("div", {
                staticClass: "col"
            }, [a("div", {
                staticClass: "row button-row"
            }, [a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "browse_characters"
                },
                on: {
                    click: function(t) {
                        return e.searchAllCharacterListings(e.currentPage - 1)
                    }
                }
            }, [e._v("Browse Characters")])], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "browse_weapons"
                },
                on: {
                    click: function(t) {
                        return e.searchAllWeaponListings(e.currentPage - 1)
                    }
                }
            }, [e._v("Browse Weapons")])], 1), a("div", {
                staticClass: "col"
            })]), a("div", {
                staticClass: "search-results"
            }, [a("b-pagination", {
                directives: [{
                    name: "visible",
                    rawName: "v-visible",
                    value: e.allSearchResults && e.allSearchResults.length > 0,
                    expression: "allSearchResults && allSearchResults.length > 0"
                }],
                staticClass: "customPagination",
                attrs: {
                    align: "center",
                    "total-rows": e.allListingsAmount,
                    "per-page": "weapon" === e.activeType ? e.weaponShowLimit : e.characterShowLimit,
                    "first-number": "",
                    "last-number": ""
                },
                nativeOn: {
                    click: function(t) {
                        "weapon" == e.activeType && e.searchAllWeaponListings(e.currentPage - 1) || e.searchAllCharacterListings(e.currentPage - 1)
                    }
                },
                model: {
                    value: e.currentPage,
                    callback: function(t) {
                        e.currentPage = t
                    },
                    expression: "currentPage"
                }
            }), "weapon" === e.activeType ? a("weapon-grid", {
                attrs: {
                    showGivenWeaponIds: !0,
                    weaponIds: e.allSearchResults,
                    showLimit: e.weaponShowLimit,
                    showReforgedToggle: !1,
                    showFavoriteToggle: !1,
                    canFavorite: !1,
                    isMarket: !0
                },
                on: {
                    "weapon-filters-changed": function(t) {
                        return e.searchAllWeaponListings(0)
                    }
                },
                scopedSlots: e._u([{
                    key: "above",
                    fn: function(t) {
                        var r = t.weapon.id;
                        return [a("div", {
                            staticClass: "d-flex flex-column align-items-center justify-content-center m-top-negative-5"
                        }, [e.nftPricesById[r] ? a("span", {
                            staticClass: "d-block text-center fix-h24"
                        }, ["0" !== e.convertWeiToSkill(e.nftPricesById[r]) ? a("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top",
                                value: {
                                    content: e.maxPrecisionSkill(e.nftPricesById[r]),
                                    trigger: e.isMobile() ? "click" : "hover"
                                },
                                expression: "{ content: maxPrecisionSkill(nftPricesById[id]) , trigger: (isMobile() ? 'click' : 'hover') }",
                                modifiers: {
                                    top: !0
                                }
                            }],
                            on: {
                                mouseover: function(t) {
                                    e.hover = !e.isMobile() || !0
                                },
                                mouseleave: function(t) {
                                    e.hover = !e.isMobile()
                                }
                            }
                        }, [a("strong", [e._v("Price")]), e._v(": " + e._s(e._f("dynamicDecimals")(e.convertWeiToSkill(e.nftPricesById[r]), 2, 4)) + " SICKLE ")]) : e._e()]) : a("span", {
                            staticClass: "d-block text-center"
                        }, [e._v("Loading price...")]), a("b-button", {
                            staticClass: "gtag-link-others",
                            attrs: {
                                hidden: "0" === e.convertWeiToSkill(e.nftPricesById[r]),
                                variant: "primary"
                            },
                            on: {
                                click: function(t) {
                                    e.selectedNftId = r,
                                    e.purchaseNft()
                                }
                            }
                        }, [e._v(" " + e._s("0" !== e.convertWeiToSkill(e.nftPricesById[r]) ? "Purchase" : "Sold") + " ")])], 1)]
                    }
                }, {
                    key: "sold",
                    fn: function(t) {
                        var r = t.weapon.id;
                        return [e.nftPricesById[r] && "0" === e.convertWeiToSkill(e.nftPricesById[r]) ? a("div", {
                            staticClass: "sold"
                        }, [a("span", [e._v("sold")])]) : e._e()]
                    }
                }], null, !1, 546591839),
                model: {
                    value: e.selectedNftId,
                    callback: function(t) {
                        e.selectedNftId = t
                    },
                    expression: "selectedNftId"
                }
            }) : e._e(), "character" === e.activeType ? a("character-list", {
                attrs: {
                    showFilters: !0,
                    showGivenCharacterIds: !0,
                    characterIds: e.allSearchResults,
                    showLimit: e.characterShowLimit,
                    isMarket: !0
                },
                on: {
                    "character-filters-changed": function(t) {
                        return e.searchAllCharacterListings(0)
                    }
                },
                scopedSlots: e._u([{
                    key: "above",
                    fn: function(t) {
                        var r = t.character.id;
                        return [a("div", {
                            staticClass: "token-price d-flex flex-column align-items-center justify-content-center m-top-negative-50"
                        }, [e.nftPricesById[r] ? a("span", {
                            staticClass: "d-block text-center fix-h24"
                        }, ["0" !== e.convertWeiToSkill(e.nftPricesById[r]) ? a("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top",
                                value: {
                                    content: e.maxPrecisionSkill(e.nftPricesById[r]),
                                    trigger: e.isMobile() ? "click" : "hover"
                                },
                                expression: "{ content: maxPrecisionSkill(nftPricesById[id]) , trigger: (isMobile() ? 'click' : 'hover') }",
                                modifiers: {
                                    top: !0
                                }
                            }],
                            on: {
                                mouseover: function(t) {
                                    e.hover = !e.isMobile() || !0
                                },
                                mouseleave: function(t) {
                                    e.hover = !e.isMobile()
                                }
                            }
                        }, [e._v(" " + e._s(e._f("dynamicDecimals")(e.convertWeiToSkill(e.nftPricesById[r]), 2, 4)) + " SICKLE ")]) : e._e()]) : a("span", {
                            staticClass: "d-block text-center"
                        }, [e._v("Loading price...")]), a("b-button", {
                            staticClass: "gtag-link-others",
                            class: [e.canPurchase ? "" : "disabled-button"],
                            attrs: {
                                hidden: "0" === e.convertWeiToSkill(e.nftPricesById[r]),
                                variant: "primary",
                                tagname: "confirm_purchase"
                            },
                            on: {
                                click: function(t) {
                                    e.selectedNftId = r,
                                    e.canPurchase && e.purchaseNft()
                                }
                            }
                        }, [e._v(" " + e._s("0" !== e.convertWeiToSkill(e.nftPricesById[r]) ? "Purchase" : "Sold") + " "), e.canPurchase ? e._e() : a("b-icon-question-circle", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.bottom",
                                value: "You already have max amount of characters (4).",
                                expression: "'You already have max amount of characters (4).'",
                                modifiers: {
                                    bottom: !0
                                }
                            }]
                        })], 1)], 1)]
                    }
                }, {
                    key: "sold",
                    fn: function(t) {
                        var r = t.character.id;
                        return [e.nftPricesById[r] && "0" === e.convertWeiToSkill(e.nftPricesById[r]) ? a("div", {
                            staticClass: "sold"
                        }, [a("span", [e._v("sold")])]) : e._e()]
                    }
                }], null, !1, 2691152435),
                model: {
                    value: e.selectedNftId,
                    callback: function(t) {
                        e.selectedNftId = t
                    },
                    expression: "selectedNftId"
                }
            }) : e._e(), e.allSearchResults && e.allSearchResults.length > 0 ? a("b-pagination", {
                staticClass: "customPagination",
                attrs: {
                    align: "center",
                    "total-rows": e.allListingsAmount,
                    "per-page": "weapon" === e.activeType ? e.weaponShowLimit : e.characterShowLimit,
                    "first-number": "",
                    "last-number": ""
                },
                nativeOn: {
                    click: function(t) {
                        "weapon" == e.activeType && e.searchAllWeaponListings(e.currentPage - 1) || e.searchAllCharacterListings(e.currentPage - 1)
                    }
                },
                model: {
                    value: e.currentPage,
                    callback: function(t) {
                        e.currentPage = t
                    },
                    expression: "currentPage"
                }
            }) : e._e()], 1)])]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col"
            }, [e.waitingMarketOutcome ? a("div", {
                staticClass: "outcome"
            }, [a("i", {
                staticClass: "fas fa-spinner fa-spin"
            }), e._v(" Loading... ")]) : e._e(), null !== e.marketOutcome ? a("div", {
                staticClass: "outcome"
            }, [e._v(e._s(e.marketOutcome))]) : e._e()])])]), a("b-tab", {
                on: {
                    click: function(t) {
                        e.clearData(),
                        e.browseTabActive = !1
                    }
                },
                scopedSlots: e._u([{
                    key: "title",
                    fn: function() {
                        return [e._v(" Search NFTs "), a("hint", {
                            staticClass: "hint",
                            attrs: {
                                text: "NFT stands for Non Fungible Token.<br>Weapons and Characters are NFTs of the ERC721 standard"
                            }
                        })]
                    },
                    proxy: !0
                }])
            }, [a("div", {
                staticClass: "row mt-3"
            }, [a("div", {
                staticClass: "col"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col"
            }), a("div", {
                staticClass: "col"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.search,
                    expression: "search",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "form-control search",
                attrs: {
                    type: "text",
                    placeholder: "Seller Address, NFT ID"
                },
                domProps: {
                    value: e.search
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.search = t.target.value.trim())
                    },
                    blur: function(t) {
                        return e.$forceUpdate()
                    }
                }
            })]), a("div", {
                staticClass: "col"
            })]), a("div", {
                staticClass: "row buttons-row mt-3"
            }, [a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    disabled: !e.search,
                    tagname: "search_character_id"
                },
                on: {
                    click: function(t) {
                        return e.searchListingsByNftId("character")
                    }
                }
            }, [e._v("Search Character ID")])], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    disabled: !e.search,
                    tagname: "search_weapon_id"
                },
                on: {
                    click: function(t) {
                        return e.searchListingsByNftId("weapon")
                    }
                }
            }, [e._v("Search Weapon ID")])], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    disabled: !e.search,
                    tagname: "weapons_seller"
                },
                on: {
                    click: function(t) {
                        return e.searchListingsBySeller("weapon")
                    }
                }
            }, [e._v("Weapons by Seller")])], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    disabled: !e.search,
                    tagname: "characters_seller"
                },
                on: {
                    click: function(t) {
                        return e.searchListingsBySeller("character")
                    }
                }
            }, [e._v("Characters by Seller")])], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "search_own_weapons"
                },
                on: {
                    click: function(t) {
                        return e.searchOwnListings("weapon")
                    }
                }
            }, [e._v("Search My Weapons")])], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "search_own_characters"
                },
                on: {
                    click: function(t) {
                        return e.searchOwnListings("character")
                    }
                }
            }, [e._v("Search My Characters")])], 1), a("div", {
                staticClass: "col"
            }, [e.ownListedNftSelected ? a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "change_price"
                },
                on: {
                    click: function(t) {
                        return e.showListingSetupModal(!0)
                    }
                }
            }, [e._v("Change Price")]) : e._e()], 1), a("div", {
                staticClass: "col"
            }, [e.ownListedNftSelected ? a("b-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Cancelled sales cannot be re-listed for 24 hours!",
                    expression: "'Cancelled sales cannot be re-listed for 24 hours!'"
                }],
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "cancel_listing"
                },
                on: {
                    click: function(t) {
                        return e.cancelNftListing()
                    }
                }
            }, [e._v("Cancel Listing")]) : e._e()], 1)]), a("div", {
                staticClass: "search-results"
            }, ["weapon" === e.activeType ? a("weapon-grid", {
                attrs: {
                    showGivenWeaponIds: !0,
                    showReforgedToggle: !1,
                    showFavoriteToggle: !1,
                    canFavorite: !1,
                    weaponIds: e.searchResults,
                    isMarket: !0
                },
                scopedSlots: e._u([{
                    key: "above",
                    fn: function(t) {
                        var r = t.weapon.id;
                        return [a("div", {
                            staticClass: "d-flex flex-column align-items-center justify-content-center m-top-negative-5"
                        }, [e.nftPricesById[r] ? a("span", {
                            staticClass: "d-block text-center fix-h24"
                        }, ["0" !== e.convertWeiToSkill(e.nftPricesById[r]) ? a("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top",
                                value: {
                                    content: e.maxPrecisionSkill(e.nftPricesById[r]),
                                    trigger: e.isMobile() ? "click" : "hover"
                                },
                                expression: "{ content: maxPrecisionSkill(nftPricesById[id]) , trigger: (isMobile() ? 'click' : 'hover') }",
                                modifiers: {
                                    top: !0
                                }
                            }],
                            on: {
                                mouseover: function(t) {
                                    e.hover = !e.isMobile() || !0
                                },
                                mouseleave: function(t) {
                                    e.hover = !e.isMobile()
                                }
                            }
                        }, [a("strong", [e._v("Price")]), e._v(": " + e._s(e._f("dynamicDecimals")(e.convertWeiToSkill(e.nftPricesById[r]), 2, 4)) + " SICKLE ")]) : e._e()]) : a("span", {
                            staticClass: "d-block text-center"
                        }, [e._v("Loading price...")]), null === r || e.searchResultsOwned ? e._e() : a("b-button", {
                            staticClass: "gtag-link-others",
                            attrs: {
                                hidden: "0" === e.convertWeiToSkill(e.nftPricesById[r]),
                                variant: "primary"
                            },
                            on: {
                                click: function(t) {
                                    e.selectedNftId = r,
                                    e.purchaseNft()
                                }
                            }
                        }, [e._v(" " + e._s("0" !== e.convertWeiToSkill(e.nftPricesById[r]) ? "Purchase" : "Sold") + " ")])], 1)]
                    }
                }, {
                    key: "sold",
                    fn: function(t) {
                        var r = t.weapon.id;
                        return [e.nftPricesById[r] && "0" === e.convertWeiToSkill(e.nftPricesById[r]) ? a("div", {
                            staticClass: "sold"
                        }, [a("span", [e._v("sold")])]) : e._e()]
                    }
                }], null, !1, 1564484437),
                model: {
                    value: e.selectedNftId,
                    callback: function(t) {
                        e.selectedNftId = t
                    },
                    expression: "selectedNftId"
                }
            }) : e._e(), "character" === e.activeType ? a("character-list", {
                attrs: {
                    showFilters: !0,
                    showGivenCharacterIds: !0,
                    characterIds: e.searchResults,
                    isMarket: !0
                },
                scopedSlots: e._u([{
                    key: "above",
                    fn: function(t) {
                        var r = t.character.id;
                        return [a("div", {
                            staticClass: "token-price d-flex flex-column align-items-center justify-content-center m-top-negative-50"
                        }, [e.nftPricesById[r] ? a("span", {
                            staticClass: "d-block text-center fix-h24"
                        }, ["0" !== e.convertWeiToSkill(e.nftPricesById[r]) ? a("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top",
                                value: {
                                    content: e.maxPrecisionSkill(e.nftPricesById[r]),
                                    trigger: e.isMobile() ? "click" : "hover"
                                },
                                expression: "{ content: maxPrecisionSkill(nftPricesById[id]) , trigger: (isMobile() ? 'click' : 'hover') }",
                                modifiers: {
                                    top: !0
                                }
                            }],
                            on: {
                                mouseover: function(t) {
                                    e.hover = !e.isMobile() || !0
                                },
                                mouseleave: function(t) {
                                    e.hover = !e.isMobile()
                                }
                            }
                        }, [e._v(" " + e._s(e._f("dynamicDecimals")(e.convertWeiToSkill(e.nftPricesById[r]), 2, 4)) + " SICKLE ")]) : e._e()]) : a("span", {
                            staticClass: "d-block text-center"
                        }, [e._v("Loading price...")]), null === r || e.searchResultsOwned ? e._e() : a("b-button", {
                            staticClass: "gtag-link-others",
                            class: [e.canPurchase ? "" : "disabled-button"],
                            attrs: {
                                hidden: "0" === e.convertWeiToSkill(e.nftPricesById[r]),
                                variant: "primary",
                                tagname: "confirm_purchase"
                            },
                            on: {
                                click: function(t) {
                                    e.selectedNftId = r,
                                    e.canPurchase && e.purchaseNft()
                                }
                            }
                        }, [e._v(" " + e._s("0" !== e.convertWeiToSkill(e.nftPricesById[r]) ? "Purchase" : "Sold") + " "), e.canPurchase ? e._e() : a("b-icon-question-circle", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.bottom",
                                value: "You already have max amount of characters (4).",
                                expression: "'You already have max amount of characters (4).'",
                                modifiers: {
                                    bottom: !0
                                }
                            }]
                        })], 1)], 1)]
                    }
                }, {
                    key: "sold",
                    fn: function(t) {
                        var r = t.character.id;
                        return [e.nftPricesById[r] && "0" === e.convertWeiToSkill(e.nftPricesById[r]) ? a("div", {
                            staticClass: "sold"
                        }, [a("span", [e._v("sold")])]) : e._e()]
                    }
                }], null, !1, 2958101913),
                model: {
                    value: e.selectedNftId,
                    callback: function(t) {
                        e.selectedNftId = t
                    },
                    expression: "selectedNftId"
                }
            }) : e._e()], 1)])]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col"
            }, [e.waitingMarketOutcome ? a("div", {
                staticClass: "outcome"
            }, [a("i", {
                staticClass: "fas fa-spinner fa-spin"
            }), e._v(" Loading... ")]) : e._e(), null !== e.marketOutcome ? a("div", {
                staticClass: "outcome"
            }, [e._v(e._s(e.marketOutcome))]) : e._e()])])]), a("b-tab", {
                on: {
                    click: function(t) {
                        e.clearData(),
                        e.loadMarketTaxes(),
                        e.browseTabActive = !1
                    }
                },
                scopedSlots: e._u([{
                    key: "title",
                    fn: function() {
                        return [e._v(" List NFTs "), a("hint", {
                            staticClass: "hint",
                            attrs: {
                                text: "When you list an NFT for sale, it is transferred to the<br>market until someone buys it or you cancel the sale"
                            }
                        })]
                    },
                    proxy: !0
                }])
            }, [a("div", {
                staticClass: "row mt-3"
            }, [a("div", {
                staticClass: "col"
            }, [a("div", {
                staticClass: "row button-row"
            }, [a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "show_weapons_market"
                },
                on: {
                    click: function(t) {
                        e.activeType = "weapon"
                    }
                }
            }, [e._v("Show Weapons")])], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "show_characters_market"
                },
                on: {
                    click: function(t) {
                        e.activeType = "character"
                    }
                }
            }, [e._v("Show Characters")])], 1), a("div", {
                staticClass: "col"
            }, ["weapon" === e.activeType ? a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "add_listing_weapon",
                    disabled: null === e.selectedNftId || e.selectedNftOnCooldown
                },
                on: {
                    click: function(t) {
                        return e.showListingSetupModal()
                    }
                }
            }, [e._v("List Weapon "), a("b-icon-question-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: e.weaponMarketTax + "% tax (paid by the buyer) will be added to the final price.",
                    expression: "weaponMarketTax + '% tax (paid by the buyer) will be added to the final price.'",
                    modifiers: {
                        bottom: !0
                    }
                }],
                attrs: {
                    hidden: !e.weaponMarketTax
                }
            })], 1) : e._e(), "character" === e.activeType ? a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    disabled: null === e.selectedNftId || e.selectedNftOnCooldown,
                    tagname: "add_listing_character"
                },
                on: {
                    click: function(t) {
                        return e.showListingSetupModal()
                    }
                }
            }, [e._v("List Character "), a("b-icon-question-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: e.characterMarketTax + "% tax (paid by the buyer) will be added to the final price.",
                    expression: "characterMarketTax + '% tax (paid by the buyer) will be added to the final price.'",
                    modifiers: {
                        bottom: !0
                    }
                }],
                attrs: {
                    hidden: !e.characterMarketTax
                }
            })], 1) : e._e(), a("b-modal", {
                ref: "listing-setup-modal",
                staticClass: "centered-modal",
                on: {
                    ok: function(t) {
                        e.priceChangeModal ? e.updateNftListingPrice() : e.addListingForNft()
                    }
                },
                scopedSlots: e._u([{
                    key: "modal-title",
                    fn: function() {
                        return [e._v(" " + e._s(e.priceChangeModal ? "Change " + e.activeType + " price" : "Sell " + e.activeType) + " ")]
                    },
                    proxy: !0
                }])
            }, [a("b-form-input", {
                staticClass: "modal-input",
                attrs: {
                    type: "number",
                    max: 1e4,
                    placeholder: "Sell Price (SICKLE)"
                },
                model: {
                    value: e.listingSellPrice,
                    callback: function(t) {
                        e.listingSellPrice = t
                    },
                    expression: "listingSellPrice"
                }
            }), e.listingSellPrice ? a("span", [e._v("Do you want to sell your " + e._s(e.activeType) + " for " + e._s(Math.min(+e.listingSellPrice, 1e4)) + " SICKLE?"), a("br"), a("i", [e._v("The buyer will pay an extra " + e._s(e.activeListingMarketTax()) + "% market fee for a total of " + e._s(e.calculatedBuyerCost(Math.min(+e.listingSellPrice, 1e4))) + " SICKLE")])]) : e._e()], 1)], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "show_weapons_sold"
                },
                on: {
                    click: function(t) {
                        return e.showWeaponsSoldModal()
                    }
                }
            }, [e._v(" Weapons Sold "), a("b-icon-question-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "View weapons you have sold.",
                    expression: "'View weapons you have sold.'",
                    modifiers: {
                        bottom: !0
                    }
                }]
            })], 1), a("b-modal", {
                ref: "weapons-sold-modal",
                staticClass: "centered-modal ",
                scopedSlots: e._u([{
                    key: "modal-header",
                    fn: function() {
                        return [a("div", {
                            staticClass: "transaction-history-header-text"
                        }, [e._v(" Weapon Transaction History ")])]
                    },
                    proxy: !0
                }, {
                    key: "modal-footer",
                    fn: function() {
                        return [a("b-button", {
                            staticClass: "mt-3",
                            attrs: {
                                block: ""
                            },
                            on: {
                                click: function(t) {
                                    return e.resetTransactionHistoryValues("weapons-sold-modal")
                                }
                            }
                        }, [e._v("Ok")])]
                    },
                    proxy: !0
                }])
            }, [e.historyCounter > 0 ? a("div", [a("b-table", {
                staticClass: "transaction-history-text",
                attrs: {
                    items: e.weaponTransactionHistoryData,
                    fields: e.weaponTransactionHistoryHeader
                }
            })], 1) : e._e(), 0 === e.historyCounter ? a("div", [a("p", [e._v("It's seems like there's nothing here.")]), a("p", [e._v("For tips on how to list NFTs, you may click this "), a("strong", [a("a", {
                attrs: {
                    href: "https://cryptoblades.gitbook.io/wiki/market/marketplace#list-nfts",
                    target: "_blank"
                }
            }, [e._v("link")])])])]) : e._e()])], 1), a("div", {
                staticClass: "col"
            }, [a("b-button", {
                staticClass: "gtag-link-others",
                attrs: {
                    variant: "primary",
                    tagname: "show_characters_sold"
                },
                on: {
                    click: function(t) {
                        return e.showCharactersSoldModal()
                    }
                }
            }, [e._v(" Characters Sold "), a("b-icon-question-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "View characters you have sold.",
                    expression: "'View characters you have sold.'",
                    modifiers: {
                        bottom: !0
                    }
                }]
            })], 1), a("b-modal", {
                ref: "characters-sold-modal",
                staticClass: "centered-modal ",
                scopedSlots: e._u([{
                    key: "modal-header",
                    fn: function() {
                        return [a("div", {
                            staticClass: "transaction-history-header-text"
                        }, [e._v(" Character Transaction History ")])]
                    },
                    proxy: !0
                }, {
                    key: "modal-footer",
                    fn: function() {
                        return [a("b-button", {
                            staticClass: "mt-3",
                            attrs: {
                                block: ""
                            },
                            on: {
                                click: function(t) {
                                    return e.resetTransactionHistoryValues("characters-sold-modal")
                                }
                            }
                        }, [e._v("Ok")])]
                    },
                    proxy: !0
                }])
            }, [e.historyCounter > 0 ? a("div", [a("b-table", {
                staticClass: "transaction-history-text",
                attrs: {
                    items: e.characterTransactionHistoryData,
                    fields: e.characterTransactionHistoryHeader
                }
            })], 1) : e._e(), 0 === e.historyCounter ? a("div", [a("p", [e._v("It's seems like there's nothing here.")]), a("p", [e._v("For tips on how to list NFTs, you may click this "), a("strong", [a("a", {
                attrs: {
                    href: "https://cryptoblades.gitbook.io/wiki/market/marketplace#list-nfts",
                    target: "_blank"
                }
            }, [e._v("link")])])])]) : e._e()])], 1), a("div", {
                staticClass: "col"
            })]), "weapon" === e.activeType ? a("div", {
                staticClass: "sell-grid"
            }, [a("weapon-grid", {
                attrs: {
                    showReforgedWeaponsDefVal: !1,
                    showFavoriteWeaponsDefVal: !1,
                    canFavorite: !1
                },
                model: {
                    value: e.selectedNftId,
                    callback: function(t) {
                        e.selectedNftId = t
                    },
                    expression: "selectedNftId"
                }
            })], 1) : e._e(), "character" === e.activeType ? a("div", {
                staticClass: "sell-grid"
            }, [a("character-list", {
                attrs: {
                    showFilters: !0
                },
                model: {
                    value: e.selectedNftId,
                    callback: function(t) {
                        e.selectedNftId = t
                    },
                    expression: "selectedNftId"
                }
            })], 1) : e._e()])]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col"
            }, [e.waitingMarketOutcome ? a("div", {
                staticClass: "outcome"
            }, [a("i", {
                staticClass: "fas fa-spinner fa-spin"
            }), e._v(" Loading... ")]) : e._e(), null !== e.marketOutcome ? a("div", {
                staticClass: "outcome"
            }, [e._v(e._s(e.marketOutcome))]) : e._e()])])])], 1)], 1)
        }, Fn = [], En = (a("841c"),
        a("2b3d"),
        a("f654")), In = a.n(En), Hn = 40, Nn = r["default"].extend({
            components: {
                CharacterList: Kt,
                WeaponGrid: er,
                Hint: xr
            },
            data: function() {
                return {
                    activeType: "weapon",
                    search: "",
                    searchResults: [],
                    allSearchResults: [],
                    searchResultsOwned: !1,
                    selectedNftId: null,
                    marketOutcome: null,
                    waitingMarketOutcome: !1,
                    nftPricesById: {},
                    characterMarketTax: "",
                    weaponMarketTax: "",
                    characterShowLimit: 40,
                    weaponShowLimit: 60,
                    allListingsAmount: 0,
                    currentPage: 1,
                    browseTabActive: !0,
                    listingSellPrice: "",
                    priceChangeModal: !1,
                    weaponTransactionHistoryData: [],
                    weaponTransactionHistoryHeader: [],
                    characterTransactionHistoryData: [],
                    characterTransactionHistoryHeader: [],
                    historyCounter: 0
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["defaultAccount", "weapons", "characters", "ownedCharacterIds", "ownedWeaponIds"])), Object(n["c"])(["contracts", "ownCharacters"])), Object(n["c"])(["transferCooldownOfCharacterId"])), {}, {
                Weapons: function() {
                    return this.contracts.Weapons
                },
                Characters: function() {
                    return this.contracts.Characters
                },
                contractAddress: function() {
                    return "weapon" === this.activeType ? this.Weapons.options.address : this.Characters.options.address
                },
                buyableNftSelected: function() {
                    return null !== this.selectedNftId && !this.searchResultsOwned
                },
                ownListedNftSelected: function() {
                    return null !== this.selectedNftId && this.searchResultsOwned
                },
                selectedNftOnCooldown: function() {
                    return null !== this.selectedNftId && "weapon" !== this.activeType && this.transferCooldownOfCharacterId(+this.selectedNftId) > 0
                },
                canPurchase: function() {
                    return "weapon" === this.activeType || this.ownCharacters.length < 4
                }
            }),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["fetchAllMarketNftIds", "fetchAllMarketCharacterNftIdsPage", "fetchAllMarketWeaponNftIdsPage", "fetchNumberOfWeaponListings", "fetchNumberOfCharacterListings", "fetchMarketNftIdsBySeller", "fetchMarketNftPrice", "fetchMarketTax", "checkMarketItemOwnership", "addMarketListing", "changeMarketListingPrice", "cancelMarketListing", "purchaseMarketListing", "fetchSellerOfNft"])), {}, {
                clearData: function() {
                    this.activeType = "weapon",
                    this.search = "",
                    this.searchResults = [],
                    this.allSearchResults = [],
                    this.searchResultsOwned = !1,
                    this.selectedNftId = null,
                    this.marketOutcome = null,
                    this.waitingMarketOutcome = !1,
                    this.nftPricesById = {},
                    this.allListingsAmount = 0,
                    this.currentPage = 1,
                    this.listingSellPrice = ""
                },
                loadMarketTaxes: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.characterMarketTax) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 3,
                                    e.getMarketTax(e.Characters.options.address);
                                case 3:
                                    a = t.sent,
                                    e.characterMarketTax = e.convertMarketTax(a);
                                case 5:
                                    if (e.weaponMarketTax) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 8,
                                    e.getMarketTax(e.Weapons.options.address);
                                case 8:
                                    r = t.sent,
                                    e.weaponMarketTax = e.convertMarketTax(r);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                convertMarketTax: function(e) {
                    return new C.a(e).div(new C.a(2).pow(64)).multipliedBy(100).integerValue(C.a.ROUND_CEIL).toString()
                },
                getMarketTax: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (e) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return a.next = 4,
                                    t.fetchMarketTax({
                                        nftContractAddr: e
                                    });
                                case 4:
                                    return a.abrupt("return", a.sent);
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                lookupNftPrice: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (t.contractAddress) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return a.next = 4,
                                    t.fetchMarketNftPrice({
                                        nftContractAddr: t.contractAddress,
                                        tokenId: e
                                    });
                                case 4:
                                    return a.abrupt("return", a.sent);
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                fetchNftPrices: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (t.contractAddress) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return a.next = 4,
                                    Promise.all(e.map(function() {
                                        var e = Object(h["a"])(regeneratorRuntime.mark((function e(a) {
                                            var r;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        t.lookupNftPrice(a);
                                                    case 2:
                                                        r = e.sent,
                                                        t.nftPricesById[a] = r;
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                addListingForNft: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.marketOutcome = null,
                                    null !== e.selectedNftId) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    if (e.listingSellPrice) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    if (a = Math.min(+e.listingSellPrice, 1e4),
                                    !(a <= 0 || !a || isNaN(a))) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    return e.waitingMarketOutcome = !0,
                                    t.next = 11,
                                    e.addMarketListing({
                                        nftContractAddr: e.contractAddress,
                                        tokenId: e.selectedNftId,
                                        price: e.convertSkillToWei(a.toString())
                                    });
                                case 11:
                                    r = t.sent,
                                    e.selectedNftId = null,
                                    e.waitingMarketOutcome = !1,
                                    e.marketOutcome = "Successfully listed " + e.activeType + " " + r.nftID + " for " + e.convertWeiToSkill(r.price) + " SICKLE";
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                updateNftListingPrice: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.marketOutcome = null,
                                    null !== e.selectedNftId) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    if (a = Math.min(+e.listingSellPrice, 1e4),
                                    !(a <= 0 || !a || isNaN(a))) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 6:
                                    return e.waitingMarketOutcome = !0,
                                    t.next = 9,
                                    e.changeMarketListingPrice({
                                        nftContractAddr: e.contractAddress,
                                        tokenId: e.selectedNftId,
                                        newPrice: e.convertSkillToWei(a.toString())
                                    });
                                case 9:
                                    r = t.sent,
                                    e.selectedNftId = null,
                                    e.waitingMarketOutcome = !1,
                                    e.marketOutcome = "Successfully changed price for " + e.activeType + " " + r.nftID + " to " + e.convertWeiToSkill(r.newPrice) + " SICKLE";
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                purchaseNft: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r, n, o, l;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.marketOutcome = null,
                                    null !== e.selectedNftId) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5,
                                    e.lookupNftPrice(e.selectedNftId);
                                case 5:
                                    if (a = t.sent,
                                    a) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    if (r = e.convertStringToDecimal(e.convertWeiToSkill(a), 2),
                                    n = e.convertStringToDecimal(e.convertWeiToSkill(e.nftPricesById[e.selectedNftId]), 2),
                                    r === n) {
                                        t.next = 13;
                                        break
                                    }
                                    return e.$dialog.notify.error("The price of the listing has changed. Please refresh listing and try again"),
                                    t.abrupt("return");
                                case 13:
                                    return e.waitingMarketOutcome = !0,
                                    t.next = 16,
                                    e.purchaseMarketListing({
                                        nftContractAddr: e.contractAddress,
                                        tokenId: e.selectedNftId,
                                        maxPrice: a
                                    });
                                case 16:
                                    return o = t.sent,
                                    t.next = 19,
                                    e.fetchAllMarketNftIds({
                                        nftContractAddr: e.contractAddress
                                    });
                                case 19:
                                    l = t.sent,
                                    e.allSearchResults = l,
                                    e.allSearchResults = Array.from(e.allSearchResults).filter((function(t) {
                                        return t.id !== e.selectedNftId
                                    }
                                    )),
                                    e.waitingMarketOutcome = !1,
                                    e.marketOutcome = "Successfully purchased " + e.activeType + " " + o.nftID + " for " + e.convertWeiToSkill(o.price) + " SICKLE from " + o.seller;
                                case 24:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                cancelNftListing: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.marketOutcome = null,
                                    null !== e.selectedNftId) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return e.waitingMarketOutcome = !0,
                                    t.next = 6,
                                    e.cancelMarketListing({
                                        nftContractAddr: e.contractAddress,
                                        tokenId: e.selectedNftId
                                    });
                                case 6:
                                    return a = t.sent,
                                    e.waitingMarketOutcome = !1,
                                    e.marketOutcome = "Successfully taken " + e.activeType + " " + a.nftID + " off the market.",
                                    t.next = 11,
                                    e.searchOwnListings(e.activeType);
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                searchAllCharacterListings: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (t.activeType = "character",
                                    t.marketOutcome = null,
                                    t.waitingMarketOutcome = !0,
                                    t.currentPage = e + 1,
                                    !ge) {
                                        a.next = 9;
                                        break
                                    }
                                    return a.next = 7,
                                    t.searchAllCharacterListingsThroughChain(e);
                                case 7:
                                    a.next = 11;
                                    break;
                                case 9:
                                    return a.next = 11,
                                    t.searchAllCharacterListingsThroughAPI(e);
                                case 11:
                                    t.searchResultsOwned = !1,
                                    t.waitingMarketOutcome = !1,
                                    t.marketOutcome = null;
                                case 14:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchAllCharacterListingsThroughAPI: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, o, l;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = new URL("https://api.cryptoblades.io/static/market/character"),
                                    n = {
                                        element: "" + t.characterTraitFilter(),
                                        minLevel: "" + t.characterMinLevelFilter(),
                                        maxLevel: "" + t.characterMaxLevelFilter(),
                                        sortBy: "" + t.characterPriceOrder() ? "price" : "",
                                        sortDir: "" + t.characterPriceOrder(),
                                        pageSize: "" + (t.characterShowLimit || Hn),
                                        pageNum: "" + e
                                    },
                                    r.search = new URLSearchParams(n).toString(),
                                    a.next = 5,
                                    fetch(r.toString());
                                case 5:
                                    return o = a.sent,
                                    a.next = 8,
                                    o.json();
                                case 8:
                                    l = a.sent,
                                    t.allListingsAmount = l.page.total,
                                    t.allSearchResults = l.idResults;
                                case 11:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchAllCharacterListingsThroughChain: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.fetchNumberOfCharacterListings({
                                        nftContractAddr: t.contractAddress,
                                        trait: Se(t.characterTraitFilter()),
                                        minLevel: t.characterMinLevelFilter(),
                                        maxLevel: t.characterMaxLevelFilter()
                                    });
                                case 2:
                                    return t.allListingsAmount = a.sent,
                                    a.next = 5,
                                    t.fetchAllMarketCharacterNftIdsPage({
                                        nftContractAddr: t.contractAddress,
                                        limit: t.characterShowLimit || Hn,
                                        pageNumber: e,
                                        trait: Se(t.characterTraitFilter()),
                                        minLevel: t.characterMinLevelFilter(),
                                        maxLevel: t.characterMaxLevelFilter()
                                    });
                                case 5:
                                    t.allSearchResults = a.sent;
                                case 6:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchAllWeaponListings: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (t.activeType = "weapon",
                                    t.marketOutcome = null,
                                    t.waitingMarketOutcome = !0,
                                    t.currentPage = e + 1,
                                    !0 !== ge) {
                                        a.next = 9;
                                        break
                                    }
                                    return a.next = 7,
                                    t.searchAllWeaponListingsThroughChain(e);
                                case 7:
                                    a.next = 11;
                                    break;
                                case 9:
                                    return a.next = 11,
                                    t.searchAllWeaponListingsThroughAPI(e);
                                case 11:
                                    t.searchResultsOwned = !1,
                                    t.waitingMarketOutcome = !1,
                                    t.marketOutcome = null;
                                case 14:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchAllWeaponListingsThroughChain: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = 0 !== t.weaponStarFilter() ? t.weaponStarFilter() - 1 : 255,
                                    a.next = 3,
                                    t.fetchNumberOfWeaponListings({
                                        nftContractAddr: t.contractAddress,
                                        trait: Se(t.weaponTraitFilter()),
                                        stars: r
                                    });
                                case 3:
                                    return t.allListingsAmount = a.sent,
                                    a.next = 6,
                                    t.fetchAllMarketWeaponNftIdsPage({
                                        nftContractAddr: t.contractAddress,
                                        limit: t.weaponShowLimit || Hn,
                                        pageNumber: e,
                                        trait: Se(t.weaponTraitFilter()),
                                        stars: r
                                    });
                                case 6:
                                    t.allSearchResults = a.sent;
                                case 7:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchAllWeaponListingsThroughAPI: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, o, l;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = new URL("https://api.cryptoblades.io/static/market/weapon"),
                                    n = {
                                        element: "" + t.weaponTraitFilter(),
                                        minStars: "" + t.weaponStarFilter(),
                                        maxStars: "" + t.weaponStarFilter(),
                                        sortBy: "" + t.weaponPriceOrder() ? "price" : "",
                                        sortDir: "" + t.weaponPriceOrder(),
                                        pageSize: "" + (t.weaponShowLimit || Hn),
                                        pageNum: "" + e
                                    },
                                    r.search = new URLSearchParams(n).toString(),
                                    a.next = 5,
                                    fetch(r.toString());
                                case 5:
                                    return o = a.sent,
                                    a.next = 8,
                                    o.json();
                                case 8:
                                    l = a.sent,
                                    t.allListingsAmount = l.page.total,
                                    t.allSearchResults = l.idResults;
                                case 11:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchListingsByNftId: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return t.activeType = e,
                                    t.marketOutcome = null,
                                    t.waitingMarketOutcome = !0,
                                    a.next = 5,
                                    t.fetchSellerOfNft({
                                        nftContractAddr: t.contractAddress,
                                        tokenId: t.search
                                    });
                                case 5:
                                    return r = a.sent,
                                    t.searchResultsOwned = r === t.defaultAccount,
                                    a.next = 9,
                                    t.lookupNftPrice(t.search);
                                case 9:
                                    n = a.sent,
                                    t.searchResults = "0" !== n ? [t.search] : [],
                                    t.waitingMarketOutcome = !1,
                                    t.marketOutcome = null;
                                case 13:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchListingsBySeller: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (t.activeType = e,
                                    t.marketOutcome = null,
                                    t.waitingMarketOutcome = !0,
                                    a.prev = 3,
                                    !ge) {
                                        a.next = 9;
                                        break
                                    }
                                    return a.next = 7,
                                    t.searchListingsBySellerThroughChain();
                                case 7:
                                    a.next = 11;
                                    break;
                                case 9:
                                    return a.next = 11,
                                    t.searchListingsBySellerThroughAPI();
                                case 11:
                                    a.next = 18;
                                    break;
                                case 13:
                                    a.prev = 13,
                                    a.t0 = a["catch"](3),
                                    t.searchResultsOwned = !1,
                                    t.waitingMarketOutcome = !1,
                                    t.searchResults = [];
                                case 18:
                                    t.waitingMarketOutcome = !1;
                                case 19:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a, null, [[3, 13]])
                    }
                    )))()
                },
                searchListingsBySellerThroughChain: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.fetchMarketNftIdsBySeller({
                                        nftContractAddr: e.contractAddress,
                                        sellerAddr: e.search
                                    });
                                case 2:
                                    e.searchResults = t.sent,
                                    e.searchResultsOwned = e.search === e.defaultAccount;
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                searchListingsBySellerThroughAPI: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("weapon" !== e.activeType) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3,
                                    e.searchWeaponListingsBySeller(e.search);
                                case 3:
                                    t.t0 = t.sent,
                                    t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8,
                                    e.searchCharacterListingsBySeller(e.search);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    e.searchResults = t.t0,
                                    e.searchResultsOwned = !1;
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                searchOwnListings: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (t.marketOutcome = null,
                                    t.activeType = e,
                                    t.defaultAccount) {
                                        a.next = 5;
                                        break
                                    }
                                    return t.searchResults = [],
                                    a.abrupt("return");
                                case 5:
                                    if (t.waitingMarketOutcome = !0,
                                    !ge) {
                                        a.next = 11;
                                        break
                                    }
                                    return a.next = 9,
                                    t.searchOwnListingsThroughChain();
                                case 9:
                                    a.next = 13;
                                    break;
                                case 11:
                                    return a.next = 13,
                                    t.searchOwnListingsThroughAPI();
                                case 13:
                                    t.searchResultsOwned = !0,
                                    t.waitingMarketOutcome = !1;
                                case 15:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchOwnListingsThroughChain: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.fetchMarketNftIdsBySeller({
                                        nftContractAddr: e.contractAddress,
                                        sellerAddr: e.defaultAccount
                                    });
                                case 2:
                                    e.searchResults = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                searchOwnListingsThroughAPI: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("weapon" !== e.activeType) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3,
                                    e.searchWeaponListingsBySeller(e.defaultAccount);
                                case 3:
                                    t.t0 = t.sent,
                                    t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8,
                                    e.searchCharacterListingsBySeller(e.defaultAccount);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    e.searchResults = t.t0;
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                searchCharacterListingsBySeller: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, o, l;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = new URL("https://api.cryptoblades.io/static/market/character"),
                                    n = {
                                        element: "" + t.characterTraitFilter(),
                                        minLevel: "" + t.characterMinLevelFilter(),
                                        maxLevel: "" + t.characterMaxLevelFilter(),
                                        sortBy: "" + t.characterPriceOrder() ? "price" : "",
                                        sortDir: "" + t.characterPriceOrder(),
                                        sellerAddress: "" + e
                                    },
                                    r.search = new URLSearchParams(n).toString(),
                                    a.next = 5,
                                    fetch(r.toString());
                                case 5:
                                    return o = a.sent,
                                    a.next = 8,
                                    o.json();
                                case 8:
                                    return l = a.sent,
                                    a.abrupt("return", l.idResults);
                                case 10:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchWeaponListingsBySeller: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, o, l;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = new URL("https://api.cryptoblades.io/static/market/weapon"),
                                    n = {
                                        element: "" + t.weaponTraitFilter(),
                                        minStars: "" + t.weaponStarFilter(),
                                        maxStars: "" + t.weaponStarFilter(),
                                        sortBy: "" + t.weaponPriceOrder() ? "price" : "",
                                        sortDir: "" + t.weaponPriceOrder(),
                                        pageSize: "" + (t.weaponShowLimit || Hn),
                                        sellerAddress: "" + e
                                    },
                                    r.search = new URLSearchParams(n).toString(),
                                    a.next = 5,
                                    fetch(r.toString());
                                case 5:
                                    return o = a.sent,
                                    a.next = 8,
                                    o.json();
                                case 8:
                                    return l = a.sent,
                                    a.abrupt("return", l.idResults);
                                case 10:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                searchItemsSoldBySeller: function(e) {
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return a = new URL("https://api.cryptoblades.io/static/market/transactions/" + e),
                                    t.next = 3,
                                    fetch(a.toString());
                                case 3:
                                    return r = t.sent,
                                    t.next = 6,
                                    r.json();
                                case 6:
                                    return n = t.sent,
                                    t.abrupt("return", n.results);
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                showWeaponsSoldModal: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.searchItemsSoldBySeller(e.defaultAccount);
                                case 2:
                                    if (a = t.sent,
                                    e.weaponTransactionHistoryHeader = [{
                                        key: "weaponId",
                                        sortable: !0,
                                        label: "Weapon ID"
                                    }, {
                                        key: "weaponName",
                                        sortable: !0,
                                        label: "Name"
                                    }, {
                                        key: "weaponPrice",
                                        label: "Price",
                                        sortable: !0
                                    }],
                                    e.characterTransactionHistoryHeader = [{
                                        key: "charId",
                                        sortable: !0,
                                        label: "Character ID"
                                    }, {
                                        key: "charName",
                                        sortable: !0,
                                        label: "Name"
                                    }, {
                                        key: "charPrice",
                                        label: "Price",
                                        sortable: !0
                                    }],
                                    0 === a.length)
                                        e.historyCounter = 0;
                                    else
                                        for (e.historyCounter = a.length,
                                        r = 0; r < a.length; ++r)
                                            "weapon" === a[r].type && void 0 !== a && (n = {
                                                weaponId: a[r].weaponId,
                                                weaponName: xa(parseInt(a[r].weaponId, 10), a[r].weaponStars),
                                                weaponPrice: a[r].price
                                            },
                                            e.weaponTransactionHistoryData.push(n));
                                    e.$refs["weapons-sold-modal"].show();
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                showCharactersSoldModal: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.searchItemsSoldBySeller(e.defaultAccount);
                                case 2:
                                    if (a = t.sent,
                                    e.characterTransactionHistoryHeader = [{
                                        key: "charId",
                                        sortable: !0,
                                        label: "Character ID"
                                    }, {
                                        key: "charName",
                                        sortable: !0,
                                        label: "Name"
                                    }, {
                                        key: "charPrice",
                                        label: "Price",
                                        sortable: !0
                                    }],
                                    0 === a.length)
                                        e.historyCounter = 0;
                                    else
                                        for (e.historyCounter = a.length,
                                        r = 0; r < a.length; ++r)
                                            "character" === a[r].type && void 0 !== a && (n = {
                                                charId: a[r].charId,
                                                charName: Ve(parseInt(a[r].charId, 10)),
                                                charPrice: a[r].price
                                            },
                                            e.characterTransactionHistoryData.push(n));
                                    e.$refs["characters-sold-modal"].show();
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                resetTransactionHistoryValues: function(e) {
                    this.characterTransactionHistoryData = [],
                    this.weaponTransactionHistoryData = [],
                    this.$refs[e].hide()
                },
                showListingSetupModal: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.clearInputs(),
                    this.priceChangeModal = e,
                    this.$refs["listing-setup-modal"].show()
                },
                clearInputs: function() {
                    this.listingSellPrice = ""
                },
                convertWeiToSkill: function(e) {
                    return k(e)
                },
                convertSkillToWei: function(e) {
                    return d.a.utils.toWei(e)
                },
                characterMinLevelFilter: function() {
                    return sessionStorage.getItem("character-levelfilter") ? +sessionStorage.getItem("character-levelfilter") - 1 : 0
                },
                characterMaxLevelFilter: function() {
                    return sessionStorage.getItem("character-levelfilter") ? +sessionStorage.getItem("character-levelfilter") + 8 : 255
                },
                characterTraitFilter: function() {
                    return sessionStorage.getItem("character-elementfilter") ? sessionStorage.getItem("character-elementfilter").toLowerCase() : ""
                },
                characterPriceOrder: function() {
                    return sessionStorage.getItem("character-price-order") ? sessionStorage.getItem("character-price-order") : ""
                },
                weaponTraitFilter: function() {
                    return sessionStorage.getItem("market-weapon-elementfilter") ? sessionStorage.getItem("market-weapon-elementfilter").toLowerCase() : ""
                },
                weaponStarFilter: function() {
                    return sessionStorage.getItem("market-weapon-starfilter") ? +sessionStorage.getItem("market-weapon-starfilter") : 0
                },
                weaponPriceOrder: function() {
                    return sessionStorage.getItem("market-weapon-price-order") ? sessionStorage.getItem("market-weapon-price-order") : ""
                },
                convertStringToDecimal: function(e, t) {
                    return new C.a(e).toFixed(t)
                },
                activeListingMarketTax: function() {
                    return "weapon" === this.activeType ? this.weaponMarketTax : "character" === this.activeType ? this.characterMarketTax : "0"
                },
                calculatedBuyerCost: function(e) {
                    return (.01 * e * (100 + parseFloat(this.activeListingMarketTax()))).toFixed(8).replace(/(\.0+|0+)$/, "")
                },
                maxPrecisionSkill: function(e) {
                    return this.convertStringToDecimal(this.convertWeiToSkill(e), 8)
                }
            }),
            watch: {
                searchResults: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return t.selectedNftId = null,
                                    a.next = 3,
                                    t.fetchNftPrices(e);
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                allSearchResults: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return t.selectedNftId = null,
                                    a.next = 3,
                                    t.fetchNftPrices(e);
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                }
            },
            filters: {
                maxDecimals: function(e, t) {
                    return new C.a(e).toFixed(t)
                },
                dynamicDecimals: function(e, t, a) {
                    var r = new C.a(e);
                    if (r < new C.a(Math.pow(10, -a)))
                        return "< " + Math.pow(10, -a).toFixed(a);
                    for (var n = a - 1; n >= t; n--)
                        if (r < new C.a(Math.pow(10, -n)))
                            return new C.a(e).toFixed(n + 1);
                    return new C.a(e).toFixed(t)
                }
            },
            mounted: function() {
                In.a.ok(this.contracts.Weapons && this.contracts.Characters, "Expected required contracts to be available")
            }
        }), Dn = Nn, Xn = (a("c920"),
        Object(it["a"])(Dn, Bn, Fn, !1, null, "7ab7ee67", null)), Gn = Xn.exports, jn = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [a("b-card", {
                attrs: {
                    "no-body": ""
                }
            }, [e.waitingLeaderboardOutcome ? a("div", {
                staticClass: "outcome"
            }, [a("i", {
                staticClass: "fas fa-spinner fa-spin"
            }), e._v(" Loading... ")]) : e._e(), a("b-tabs", {
                attrs: {
                    pills: "",
                    card: "",
                    vertical: ""
                }
            }, e._l(e.leaderboards, (function(t) {
                return a("b-tab", {
                    key: t.key,
                    attrs: {
                        title: t.key
                    }
                }, [a("b-card-text", [a("div", {
                    staticClass: "offset-md-2 col-md-8 col-sm-12 col-xs-12"
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-12"
                }, [a("h3", {
                    staticClass: "text-center"
                }, [e._v(e._s(t.key))])])]), e._l(t.leaderboard, (function(r, n) {
                    return a("div", {
                        key: r.name,
                        staticClass: "row mt-2"
                    }, [a("div", {
                        staticClass: "col-7"
                    }, [a("strong", {
                        staticClass: "mr-2 position-marker"
                    }, [e._v("#" + e._s(n + 1))]), e._v(" " + e._s(r.name) + " "), e.matchesCharIdOrWallet(r.name) ? a("b-icon", {
                        attrs: {
                            icon: "star-fill"
                        }
                    }) : e._e()], 1), a("div", {
                        staticClass: "col-5 text-right"
                    }, [e._v(" " + e._s(r.value) + " " + e._s(t.units) + " ")])])
                }
                ))], 2)])], 1)
            }
            )), 1)], 1)], 1)
        }, Vn = [], Un = {
            data: function() {
                return {
                    leaderboards: [],
                    waitingLeaderboardOutcome: !1
                }
            },
            created: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a, r;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return e.waitingLeaderboardOutcome = !0,
                                t.next = 3,
                                fetch("https://api.cryptoblades.io/static/leaderboard");
                            case 3:
                                return a = t.sent,
                                t.next = 6,
                                a.json();
                            case 6:
                                r = t.sent,
                                e.leaderboards = r.leaderboard,
                                e.waitingLeaderboardOutcome = !1;
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            methods: {
                matchesCharIdOrWallet: function(e) {
                    return e.includes(this.defaultAcccount) || this.ownedCharacterIds.some((function(t) {
                        return e.includes("(ID ".concat(t, ")"))
                    }
                    ))
                }
            },
            computed: Object(g["a"])({}, Object(n["e"])(["defaultAccount", "ownedCharacterIds"]))
        }, zn = Un, Kn = (a("9012"),
        Object(it["a"])(zn, jn, Vn, !1, null, "3faaa910", null)), Yn = Kn.exports, $n = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [a("div", {
                staticClass: "blank-slate"
            }, [e._v(" Portal "), e._m(0), a("br"), null == e.transactionResults || e.waitingResults ? e._e() : a("div", {
                staticClass: "sub-container"
            }, [e._v(" We'll get your BNB to you ASAP! ")]), e.waitingResults ? a("div", {
                staticClass: "loading-container waiting"
            }, [a("i", {
                staticClass: "fas fa-spinner fa-spin"
            }), e._v(" Waiting for transaction results... ")]) : e._e(), null !== e.userAccount || e.has5SkillBalance ? e._e() : a("div", {
                staticClass: "blank-slate"
            }, [e._v(" In order to use the Portal, you will need at least "), a("b", [e._v("5 SKILL!")]), e._v(" Please add some here: "), a("a", {
                attrs: {
                    href: "" + e.getExchangeUrl,
                    target: "_blank"
                }
            }, [e._v("Swap SKILL/BNB")])]), null === e.userAccount && e.has5SkillBalance ? a("div", {
                staticClass: "blank-slate"
            }, [e._v(" Connect WAX wallet "), a("br"), null === e.userAccount ? a("big-button", {
                staticClass: "button",
                attrs: {
                    mainText: "WAX Login"
                },
                on: {
                    click: e.waxLogin
                }
            }) : e._e()], 1) : e._e(), null != e.userAccount ? a("div", {
                staticClass: "blank-slate"
            }, [e._v(" How much WAX do you want to transfer? You have: " + e._s(e.waxBalance) + ". "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.WAXAmount,
                    expression: "WAXAmount"
                }],
                attrs: {
                    placeholder: "How much WAX?"
                },
                domProps: {
                    value: e.WAXAmount
                },
                on: {
                    input: [function(t) {
                        t.target.composing || (e.WAXAmount = t.target.value)
                    }
                    , function(t) {
                        return e.change(t)
                    }
                    ],
                    change: function(t) {
                        return e.change(t)
                    }
                }
            }), e.isValid ? e._e() : a("div", {
                staticClass: "error"
            }, [e._v('Invalid WAX amount. Please use the format: "X.xxxxxxxx" (8 decimals).')]), a("br"), null != e.userAccount ? a("big-button", {
                staticClass: "button",
                attrs: {
                    disabled: !e.isValid,
                    mainText: "Submit"
                },
                on: {
                    click: e.sign
                }
            }) : e._e()], 1) : e._e()])])
        }, Zn = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e._v(" The portal allows you to convert your other currencies to BNB. Currently, the portal supports "), a("a", {
                attrs: {
                    href: "https://on.wax.io/wax-io/",
                    target: "_blank"
                }
            }, [e._v("WAX")]), e._v(". ")])
        }
        ], qn = a("1985e"), Jn = new qn["WaxJS"]("https://wax.greymass.com",null,null,!1), Qn = {
            data: function() {
                return {
                    userAccount: null,
                    publicKey: null,
                    WAXAmount: null,
                    regex: /^\d+\.\d{8}$/,
                    transactionResults: null,
                    waitingResults: !1,
                    waxBalance: 0,
                    isValid: null
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["defaultAccount", "skillBalance", "inGameOnlyFunds", "skillRewards"])), Object(n["c"])(["getExchangeUrl", "hasStakedBalance"])), {}, {
                has5SkillBalance: function() {
                    return M(k(this.skillBalance)).plus(M(k(this.skillRewards))).gte(5)
                }
            }),
            methods: {
                connectWaxWallet: function() {
                    return Object(h["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                waxLogin: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Jn.login();
                                case 2:
                                    e.userAccount = t.sent,
                                    e.publicKey = Jn.pubKeys,
                                    e.getWaxBalance();
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                sign: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (Jn.api) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", document.getElementById("response").append("* Login first *"));
                                case 2:
                                    return t.prev = 2,
                                    e.waitingResults = !0,
                                    t.next = 6,
                                    Jn.api.transact({
                                        actions: [{
                                            account: "eosio.token",
                                            name: "transfer",
                                            authorization: [{
                                                actor: Jn.userAccount,
                                                permission: "active"
                                            }],
                                            data: {
                                                from: Jn.userAccount,
                                                to: "snoui.wam",
                                                quantity: M(e.WAXAmount).toFixed(8) + " WAX",
                                                memo: e.defaultAccount
                                            }
                                        }]
                                    }, {
                                        blocksBehind: 3,
                                        expireSeconds: 30
                                    });
                                case 6:
                                    a = t.sent,
                                    e.transactionResults = a,
                                    e.waitingResults = !1,
                                    e.error = null,
                                    t.next = 16;
                                    break;
                                case 12:
                                    t.prev = 12,
                                    t.t0 = t["catch"](2),
                                    console.error(t.t0),
                                    e.error = t.t0.message;
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 12]])
                    }
                    )))()
                },
                change: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    r = e.target.value,
                                    t.isNumberValid(r);
                                case 2:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                isNumberValid: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    t.isValid = t.regex.test(e);
                                case 1:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getWaxBalance: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Jn.api.rpc.get_currency_balance("eosio.token", e.userAccount, "WAX");
                                case 2:
                                    e.waxBalance = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            },
            components: {
                BigButton: ut
            }
        }, eo = Qn, to = (a("e135"),
        Object(it["a"])(eo, $n, Zn, !1, null, "de71f17e", null)), ao = to.exports, ro = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [a("div", {
                staticClass: "container"
            }, [e._m(0), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col"
            }, [a("b-list-group", {
                staticClass: "dark-bg"
            }, [a("b-list-group-item", {
                staticClass: "d-flex justify-content-between align-items-center"
            }), a("b-list-group-item", {
                staticClass: "d-flex justify-content-between align-items-center"
            }, [a("h4", [e._v("Hide Rewards Bar")]), a("b-form-checkbox", {
                attrs: {
                    size: "lg",
                    checked: e.hideRewards,
                    switch: ""
                },
                on: {
                    change: function(t) {
                        return e.toggleRewards()
                    }
                }
            }, [a("b", {
                staticClass: "float-left"
            }, [e._v(e._s(e.hideRewards ? "On" : "Off"))])])], 1), a("b-list-group-item", {
                staticClass: "d-flex justify-content-between align-items-center"
            }, [a("h4", [e._v("Hide Wallet Warning")]), a("b-form-checkbox", {
                attrs: {
                    size: "lg",
                    checked: e.hideWalletWarning,
                    switch: ""
                },
                on: {
                    change: function(t) {
                        return e.toggleHideWalletWarning()
                    }
                }
            }, [a("b", {
                staticClass: "float-left"
            }, [e._v(e._s(e.hideWalletWarning ? "On" : "Off"))])])], 1), a("b-list-group-item", {
                staticClass: "d-flex justify-content-between align-items-center"
            }, [a("h4", [e._v("Mana Cost per Fight")]), a("b-form-select", {
                attrs: {
                    size: "lg"
                },
                on: {
                    change: function(t) {
                        return e.setFightMultiplier()
                    }
                },
                model: {
                    value: e.fightMultiplier,
                    callback: function(t) {
                        e.fightMultiplier = t
                    },
                    expression: "fightMultiplier"
                }
            }, [a("b-form-select-option", {
                attrs: {
                    value: null,
                    disabled: ""
                }
            }, [e._v("Please select Mana Cost per Cast")]), a("b-form-select-option", {
                attrs: {
                    value: "1"
                }
            }, [e._v("40")]), a("b-form-select-option", {
                attrs: {
                    value: "2"
                }
            }, [e._v("80")]), a("b-form-select-option", {
                attrs: {
                    value: "3"
                }
            }, [e._v("120")]), a("b-form-select-option", {
                attrs: {
                    value: "4"
                }
            }, [e._v("160")]), a("b-form-select-option", {
                attrs: {
                    value: "5"
                }
            }, [e._v("200")])], 1)], 1)], 1)], 1), e._m(1)])])])
        }, no = [function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "row"
            }, [r("div", {
                staticClass: "col text-center"
            }, [r("div", {
                staticClass: "tob-bg-img"
            }, [r("img", {
                staticClass: "vertical-decoration bottom",
                attrs: {
                    src: a("e8bb")
                }
            })]), r("hr", {
                staticClass: "header-border header-border-top"
            }), r("h2", {
                staticClass: "linear-wipe"
            }, [e._v("Options")]), r("hr", {
                staticClass: "header-border header-border-bot"
            })])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "bot-bg-img"
            }, [r("img", {
                staticClass: "bottom-border",
                attrs: {
                    src: a("e8bb")
                }
            })])
        }
        ];
        (function(e) {
            e[e["WaxBridge"] = 0] = "WaxBridge",
            e[e["Stake"] = 1] = "Stake",
            e[e["Claim"] = 2] = "Claim"
        }
        )(Cn || (Cn = {}));
        var oo = r["default"].extend({
            created: function() {
                this.showGraphics = "true" === localStorage.getItem("useGraphics"),
                this.hideRewards = "true" === localStorage.getItem("hideRewards"),
                this.hideAdvanced = "true" === localStorage.getItem("hideAdvanced"),
                this.hideWalletWarning = "true" === localStorage.getItem("hideWalletWarning"),
                this.fightMultiplier = Number(localStorage.getItem("fightMultiplier"))
            },
            data: function() {
                return {
                    showGraphics: !1,
                    hideRewards: !1,
                    hideAdvanced: !1,
                    hideWalletWarning: !1,
                    fightMultiplier: 1,
                    checked: !1,
                    ClaimStage: Cn
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["skillRewards", "directStakeBonusPercent"])), Object(n["c"])(["rewardsClaimTaxAsFactorBN", "maxRewardsClaimTaxAsFactorBN"])), {}, {
                formattedSkillReward: function() {
                    var e = k(this.skillRewards);
                    return "".concat(M(e).toFixed(4))
                },
                formattedTaxAmount: function() {
                    var e = k((parseFloat(this.skillRewards) * parseFloat(String(this.rewardsClaimTaxAsFactorBN))).toString());
                    return "".concat(M(e).toFixed(4))
                },
                formattedRewardsClaimTax: function() {
                    var e = "0" === this.skillRewards ? this.maxRewardsClaimTaxAsFactorBN : this.rewardsClaimTaxAsFactorBN;
                    return "".concat(e.multipliedBy(100).decimalPlaces(0, C.a.ROUND_HALF_UP), "%")
                },
                formattedBonusLost: function() {
                    var e = k((parseFloat(this.skillRewards) * this.directStakeBonusPercent / 100).toString());
                    return "".concat(M(e).toFixed(4))
                },
                canClaimTokens: function() {
                    return !M(this.skillRewards).lte(0)
                }
            }),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["claimTokenRewards"])), {}, {
                toggleGraphics: function() {
                    this.showGraphics = !this.showGraphics,
                    this.showGraphics ? localStorage.setItem("useGraphics", "true") : localStorage.setItem("useGraphics", "false"),
                    aa.$emit("setting:useGraphics", {
                        value: this.showGraphics
                    })
                },
                toggleRewards: function() {
                    this.hideRewards = !this.hideRewards,
                    this.hideRewards ? localStorage.setItem("hideRewards", "true") : localStorage.setItem("hideRewards", "false"),
                    aa.$emit("setting:hideRewards", {
                        value: this.hideRewards
                    })
                },
                toggleAdvanced: function() {
                    this.hideAdvanced = !this.hideAdvanced,
                    this.hideAdvanced ? localStorage.setItem("hideAdvanced", "true") : localStorage.setItem("hideAdvanced", "false"),
                    aa.$emit("setting:hideAdvanced", {
                        value: this.hideAdvanced
                    })
                },
                onClaimTokens: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.canClaimTokens) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3,
                                    e.claimTokenRewards();
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                claimSkill: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    e === Cn.WaxBridge && t.$refs["need-gas-modal"].show(),
                                    e === Cn.Stake && t.$refs["stake-suggestion-modal"].show(),
                                    e === Cn.Claim && (t.$refs["stake-suggestion-modal"].hide(),
                                    t.$refs["claim-confirmation-modal"].show());
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                toggleHideWalletWarning: function() {
                    this.hideWalletWarning = !this.hideWalletWarning,
                    this.hideWalletWarning ? localStorage.setItem("hideWalletWarning", "true") : localStorage.setItem("hideWalletWarning", "false"),
                    aa.$emit("setting:hideWalletWarning", {
                        value: this.hideWalletWarning
                    })
                },
                setFightMultiplier: function() {
                    localStorage.setItem("fightMultiplier", this.fightMultiplier.toString()),
                    aa.$emit("setting:fightMultiplier", {
                        value: this.fightMultiplier
                    })
                }
            })
        })
          , lo = oo
          , io = (a("072f"),
        Object(it["a"])(lo, ro, no, !1, null, null, null))
          , so = io.exports
          , uo = function() {
            var e = this
              , t = e.$createElement;
            e._self._c;
            return e._m(0)
        }
          , co = [function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "body main-font"
            }, [r("h1", {
                staticClass: "text-center"
            }, [e._v("This is the new adventure!")]), r("img", {
                staticClass: "align-center",
                attrs: {
                    src: a("8b55")
                }
            })])
        }
        ]
          , mo = {}
          , po = Object(it["a"])(mo, uo, co, !1, null, null, null)
          , ho = po.exports;
        function _o() {
            if (he)
                return new o["a"]({
                    routes: [{
                        path: "/",
                        redirect: "stake"
                    }, {
                        path: "/stake",
                        name: "select-stake-type",
                        component: kn
                    }, {
                        path: "/stake/:stakeType",
                        name: "stake",
                        component: hn,
                        props: !0
                    }]
                });
            var e = [];
            fe && (e = [{
                path: "/market",
                name: "market",
                component: Gn
            }]);
            var t = new o["a"]({
                routes: [{
                    path: "/",
                    name: "plaza",
                    component: qt
                }, {
                    path: "/blacksmith",
                    name: "blacksmith",
                    component: nr
                }, {
                    path: "/combat",
                    name: "combat",
                    component: Dr
                }, {
                    path: "/leaderboard",
                    name: "leaderboard",
                    component: Yn
                }].concat(Object(et["a"])(e), [{
                    path: "/stake",
                    name: "select-stake-type",
                    component: kn
                }, {
                    path: "/maps",
                    name: "maps",
                    component: ho
                }, {
                    path: "/stake/:stakeType",
                    name: "stake",
                    component: hn,
                    props: !0
                }, {
                    path: "/options",
                    name: "options",
                    component: so
                }])
            });
            return pe && t.addRoute({
                path: "/raid/",
                name: "raid",
                component: Ln
            }),
            be && t.addRoute({
                path: "/portal",
                name: "portal",
                component: ao
            }),
            t
        }
        var fo, go = _o, bo = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "app"
            }, [r("nav-bar"), e.featureFlagStakeOnly || null === e.currentCharacterId ? e._e() : r("character-bar"), r("div", {
                staticClass: "content dark-bg-text"
            }, [e.canShowApp ? r("router-view") : e._e()], 1), e.hideWalletWarning || !e.showMetamaskWarning && !e.showNetworkError ? e._e() : r("div", {
                staticClass: "fullscreen-warning"
            }, [r("div", {
                staticClass: "starter-panel"
            }, [r("span", {
                staticClass: "starter-panel-heading"
            }, [e._v("Metamask Not Detected Or Incorrect Network")]), r("div", {
                staticClass: "center"
            }, [e.showMetamaskWarning ? r("big-button", {
                staticClass: "button",
                attrs: {
                    mainText: "Add MetaMask"
                },
                on: {
                    click: e.startOnboarding
                }
            }) : e._e(), e.showNetworkError ? r("big-button", {
                staticClass: "button",
                attrs: {
                    mainText: "Switch to Matic Network"
                },
                on: {
                    click: e.configureMetaMask
                }
            }) : e._e(), r("small-button", {
                staticClass: "button",
                attrs: {
                    text: "Hide Warning"
                },
                on: {
                    click: e.toggleHideWalletWarning
                }
            })], 1)])]), e.hideWalletWarning || e.showMetamaskWarning || !e.errorMessage && (0 !== e.ownCharacters.length || "0" !== e.skillBalance || e.hasStakedBalance) ? e._e() : r("div", {
                staticClass: "fullscreen-warning"
            }, [r("div", {
                staticClass: "starter-panel"
            }, [r("img", {
                staticClass: "mini-icon-starter",
                attrs: {
                    src: a("6ca5"),
                    alt: "",
                    srcset: ""
                }
            }), r("span", {
                staticClass: "starter-panel-heading"
            }, [e._v(e._s(e.errorMessage || "Get Started With PolyBlades"))]), r("img", {
                staticClass: "mini-icon-starter",
                attrs: {
                    src: a("6ca5"),
                    alt: "",
                    srcset: ""
                }
            }), r("div", [r("big-button", {
                staticClass: "button mm-button",
                attrs: {
                    mainText: "Configure MetaMask"
                },
                on: {
                    click: e.configureMetaMask
                }
            }), r("big-button", {
                staticClass: "button mm-button",
                class: [e.isConnecting ? "disabled" : ""],
                attrs: {
                    mainText: "Connect to MetaMask"
                },
                on: {
                    click: e.connectMetamask
                }
            })], 1), r("div", {
                staticClass: "seperator"
            }), r("div", {
                staticClass: "instructions-list"
            }, [r("p", [e._v(" Get started now! To summon your first character you need " + e._s(e.recruitCost) + " SICKLE and .001 MATIC for gas. You will also need .0015 MATIC to do your first few battles, but don't worry, you earn the battle fees back in SICKLE rewards immediately! ")]), e._m(0), e._m(1), e._m(2)]), r("div", {
                staticClass: "seperator"
            }), r("small-button", {
                staticClass: "button",
                attrs: {
                    text: "Hide Warning"
                },
                on: {
                    click: e.toggleHideWalletWarning
                }
            })], 1)])], 1)
        }, yo = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", [e._v(" If you have any questions, please join our Discord: "), a("a", {
                attrs: {
                    href: "https://discord.com/invite/TCkYqkkynU",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e._v("https://discord.com/invite/TCkYqkkynU")])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", [e._v(" TG: "), a("a", {
                attrs: {
                    href: "https://t.me/PolyBlades",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e._v("https://t.me/PolyBlades")])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", [e._v(" Follow us on Twitter!: "), a("a", {
                attrs: {
                    href: "https://twitter.com/PolyBlades",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e._v("https://twitter.com/PolyBlades")])])
        }
        ], Ao = (a("b0c0"),
        a("9911"),
        a("5526")), wo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("button", {
                staticClass: "button main-font dark-bg-text",
                attrs: {
                    disabled: e.disabled
                },
                on: {
                    click: function(t) {
                        return e.$emit("click")
                    }
                }
            }, [e._v(" " + e._s(e.text) + " ")])
        }, vo = [], Co = {
            props: ["text", "disabled"]
        }, Ro = Co, Mo = (a("48b2"),
        Object(it["a"])(Ro, wo, vo, !1, null, null, null)), To = Mo.exports, ko = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "main-nav-div"
            }, [r("b-navbar", {
                staticClass: "main-nav",
                attrs: {
                    toggleable: "sm",
                    type: "dark",
                    variant: "dark"
                }
            }, [r("b-navbar-brand", {
                staticClass: "nav-logo",
                attrs: {
                    href: "#"
                }
            }, [r("img", {
                staticClass: "logo d-inline-block align-top",
                attrs: {
                    src: a("ac01"),
                    alt: "Logo"
                }
            })]), r("view-links", {
                staticClass: "view-links"
            }), r("skill-balance-display", {
                staticClass: "ml-auto d-none d-sm-flex"
            }), e.canShowRewardsBar ? e._e() : r("claim-rewards"), r("options", {
                staticClass: "d-none d-sm-flex"
            }), r("div", {
                staticClass: "d-flex d-sm-none"
            }, [r("skill-balance-display", {
                staticClass: "skill-display-mobile"
            }), r("options", {
                staticClass: "options-display-mobile"
            })], 1)], 1), e.canShowRewardsBar ? r("claim-rewards-bar") : e._e(), r("div", {
                staticClass: "container_row"
            }, [r("img", {
                staticClass: "expander-divider",
                attrs: {
                    src: a("9e38")
                }
            }), e.ownCharacters.length > 0 ? r("b-button", {
                staticClass: "expander-button",
                on: {
                    click: e.toggleCharacterView
                }
            }, [e.getIsCharacterViewExpanded ? e._e() : r("b-icon-arrows-expand", {
                staticClass: "expand-collapse-icon"
            }), e.getIsCharacterViewExpanded ? r("b-icon-arrows-collapse", {
                staticClass: "expand-collapse-icon",
                attrs: {
                    "aria-hidden": "true"
                }
            }) : e._e()], 1) : e._e()], 1)], 1)
        }, So = [], Oo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("b-navbar-nav", [e.featureFlagStakeOnly ? e._e() : a("router-link", {
                staticClass: "nav-link",
                attrs: {
                    to: {
                        name: "plaza"
                    },
                    exact: ""
                }
            }, [a("li", {
                staticClass: "nav-item nav-top-links"
            }, [a("span", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "plaza_screen"
                }
            }, [e._v("Village")])])]), e.featureFlagStakeOnly ? e._e() : a("router-link", {
                staticClass: "nav-link",
                attrs: {
                    to: {
                        name: "blacksmith"
                    },
                    exact: ""
                }
            }, [a("li", {
                staticClass: "nav-item nav-top-links"
            }, [a("span", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "blacksmith_screen"
                }
            }, [e._v("Forge")])])]), e.featureFlagStakeOnly ? e._e() : a("router-link", {
                staticClass: "nav-link",
                attrs: {
                    to: {
                        name: "combat"
                    },
                    exact: ""
                }
            }, [a("li", {
                staticClass: "nav-item nav-top-links"
            }, [a("span", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "combat_screen"
                }
            }, [e._v("Monster Lair")])])]), !e.featureFlagStakeOnly && e.featureFlagRaid ? a("router-link", {
                staticClass: "nav-link",
                attrs: {
                    to: {
                        name: "raid"
                    },
                    exact: ""
                }
            }, [a("li", {
                staticClass: "nav-item nav-top-links"
            }, [a("span", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "raid_screen"
                }
            }, [e._v("Raid")])])]) : e._e(), !e.featureFlagStakeOnly && e.featureFlagMarket ? a("router-link", {
                staticClass: "nav-link",
                attrs: {
                    to: {
                        name: "market"
                    },
                    exact: ""
                }
            }, [a("li", {
                staticClass: "nav-item nav-top-links"
            }, [a("span", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "market_screen"
                }
            }, [e._v("Market")])])]) : e._e(), a("router-link", {
                staticClass: "nav-link",
                attrs: {
                    to: {
                        name: "maps"
                    },
                    exact: ""
                }
            }, [a("li", {
                staticClass: "nav-item nav-top-links"
            }, [a("span", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "maps_screen"
                }
            }, [e._v("World map")])])])], 1)
        }, xo = [], Wo = {
            inject: ["featureFlagStakeOnly", "featureFlagRaid"],
            computed: {
                featureFlagMarket: function() {
                    return fe
                },
                featureFlagPortal: function() {
                    return be
                }
            }
        }, Po = Wo, Lo = (a("53bb"),
        Object(it["a"])(Po, Oo, xo, !1, null, "42af923e", null)), Bo = Lo.exports, Fo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [a("b-navbar-nav", [a("b-nav-item-dropdown", {
                attrs: {
                    right: ""
                },
                scopedSlots: e._u([{
                    key: "button-content",
                    fn: function() {
                        return [a("i", {
                            staticClass: "fa fa-bars"
                        })]
                    },
                    proxy: !0
                }])
            }, [a("b-dropdown-group", [a("b-dropdown-header", [e._v("Links")]), a("b-dropdown-item", {
                on: {
                    click: function(t) {
                        return e.claimSkill(e.ClaimStage.WaxBridge)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-coins mr-2"
            }), e._v("Claim SICKLE ")]), a("b-dropdown-item", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "leaderboard_screen"
                },
                nativeOn: {
                    click: function(t) {
                        return e.$router.push("leaderboard")
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-trophy mr-2"
            }), e._v("Leaderboard ")]), a("b-dropdown-item", {
                attrs: {
                    href: "https://polyblades.gitbook.io/polyblades/",
                    target: "_blank"
                }
            }, [a("i", {
                staticClass: "fa fa-book mr-2"
            }), e._v("Wiki "), a("b-icon", {
                attrs: {
                    scale: "0.8",
                    icon: "question-circle"
                }
            })], 1)], 1), a("hr", {
                staticClass: "border-light"
            }), a("b-dropdown-group", {
                staticClass: "mb-2"
            }, [a("b-dropdown-item", {
                nativeOn: {
                    click: function(t) {
                        return e.$router.push("options")
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-cog mr-2"
            }), e._v("Options ")])], 1)], 1)], 1), a("b-modal", {
                ref: "need-gas-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Need Withdraw?",
                    "ok-title": "Next",
                    "cancel-title": "Go to WAX Portal"
                },
                on: {
                    ok: function(t) {
                        return e.claimSkill(e.ClaimStage.Stake)
                    },
                    cancel: function(t) {
                        return e.$router.push({
                            name: "portal"
                        })
                    }
                }
            }, [e._v(" Claim your Rewards Here! "), a("div", {
                staticClass: "text-center"
            }, [a("hr", {
                staticClass: "hr-divider"
            }), e._v(" Hold Reminder:"), a("br"), e._v(" A percentage of your earning goes back to the community,"), a("br"), a("u", [e._v("if you withdraw early")]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-5"
            }, [e._v("Your early withdraw tax")]), a("div", {
                staticClass: "col-2"
            }, [a("span", {
                staticClass: "text-danger font-weight-bold"
            }, [e._v(e._s(e.formattedRewardsClaimTax))])]), a("div", {
                staticClass: "col-5 text-left"
            }, [e._v("Reduces 1% per day"), a("br"), e._v(" Reset to 15% after withdraw")])])])]), a("b-modal", {
                ref: "stake-suggestion-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Claim SICKLE",
                    "ok-only": "",
                    "ok-title": "Claim!"
                },
                on: {
                    ok: function(t) {
                        return e.claimSkill(e.ClaimStage.Claim)
                    }
                }
            }, [e._v(" Are you sure? Do you want to HODL? "), a("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(t) {
                        return e.claimSkill(e.ClaimStage.Claim)
                    }
                }
            }, [a("br"), e._v("No thanks, I'd rather " + e._s(this.rewardsClaimTaxAsFactorBN > 0 ? "pay " + this.formattedTaxAmount + " in taxes and " : "") + "continue playing ")])]), a("b-modal", {
                ref: "claim-confirmation-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Claim Rewards",
                    "ok-title": "I am sure"
                },
                on: {
                    ok: function(t) {
                        return e.onClaimTokens()
                    }
                }
            }, [e._v(" You are about to " + e._s(this.rewardsClaimTaxAsFactorBN > 0 ? "pay " + e.formattedRewardsClaimTax + " tax for early withdrawal, costing you " + this.formattedTaxAmount + " SICKLE. You will also " : "") + " miss out on " + e._s(e.formattedBonusLost) + " bonus SICKLE. Are you sure you wish to continue? "), a("b", [e._v("This action cannot be undone.")])])], 1)
        }, Eo = [];
        (function(e) {
            e[e["WaxBridge"] = 0] = "WaxBridge",
            e[e["Stake"] = 1] = "Stake",
            e[e["Claim"] = 2] = "Claim"
        }
        )(fo || (fo = {}));
        var Io, Ho = r["default"].extend({
            created: function() {
                this.showGraphics = "true" === localStorage.getItem("useGraphics"),
                this.hideRewards = "true" === localStorage.getItem("hideRewards"),
                this.hideWalletWarning = "true" === localStorage.getItem("hideWalletWarning")
            },
            data: function() {
                return {
                    showGraphics: !1,
                    hideRewards: !1,
                    hideWalletWarning: !1,
                    ClaimStage: fo
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["skillRewards", "directStakeBonusPercent"])), Object(n["c"])(["rewardsClaimTaxAsFactorBN", "maxRewardsClaimTaxAsFactorBN"])), {}, {
                formattedSkillReward: function() {
                    var e = k(this.skillRewards);
                    return "".concat(M(e).toFixed(4))
                },
                formattedTaxAmount: function() {
                    var e = k(parseFloat(String(parseFloat(this.skillRewards) * parseFloat(String(this.rewardsClaimTaxAsFactorBN)))) + "");
                    return "".concat(M(e).toFixed(4))
                },
                formattedRewardsClaimTax: function() {
                    var e = "0" === this.skillRewards ? this.maxRewardsClaimTaxAsFactorBN : this.rewardsClaimTaxAsFactorBN;
                    return "".concat(e.multipliedBy(100).decimalPlaces(0, C.a.ROUND_HALF_UP), "%")
                },
                formattedBonusLost: function() {
                    var e = k(parseFloat(String(parseFloat(this.skillRewards) * this.directStakeBonusPercent / 100)).toString());
                    return "".concat(M(e).toFixed(4))
                },
                canClaimTokens: function() {
                    return !M(this.skillRewards).lte(0)
                }
            }),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["claimTokenRewards"])), {}, {
                toggleGraphics: function() {
                    this.showGraphics = !this.showGraphics,
                    this.showGraphics ? localStorage.setItem("useGraphics", "true") : localStorage.setItem("useGraphics", "false"),
                    aa.$emit("setting:useGraphics", {
                        value: this.showGraphics
                    })
                },
                toggleRewards: function() {
                    this.hideRewards = !this.hideRewards,
                    this.hideRewards ? localStorage.setItem("hideRewards", "true") : localStorage.setItem("hideRewards", "false"),
                    aa.$emit("setting:hideRewards", {
                        value: this.hideRewards
                    })
                },
                onClaimTokens: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.canClaimTokens) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3,
                                    e.claimTokenRewards();
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                claimSkill: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    e === fo.WaxBridge && t.$refs["need-gas-modal"].show(),
                                    e === fo.Stake && t.$refs["stake-suggestion-modal"].show(),
                                    e === fo.Claim && (t.$refs["stake-suggestion-modal"].hide(),
                                    t.$refs["claim-confirmation-modal"].show());
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                toggleHideWalletWarning: function() {
                    this.hideWalletWarning = !this.hideWalletWarning,
                    this.hideWalletWarning ? localStorage.setItem("hideWalletWarning", "true") : localStorage.setItem("hideWalletWarning", "false"),
                    aa.$emit("setting:hideWalletWarning", {
                        value: this.hideWalletWarning
                    })
                }
            })
        }), No = Ho, Do = Object(it["a"])(No, Fo, Eo, !1, null, "0abee3be", null), Xo = Do.exports, Go = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "skill-balance-display"
            }, [r("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Buy SICKLE",
                    expression: "'Buy SICKLE'"
                }],
                staticClass: "my-2 my-sm-0 mr-3",
                attrs: {
                    size: "sm",
                    variant: "primary"
                },
                on: {
                    click: e.onBuySkill
                }
            }, [r("img", {
                staticClass: "add-button gtag-link-others",
                attrs: {
                    src: a("4868"),
                    tagname: "buy_skill"
                }
            })]), r("div", {
                staticClass: "balance-container"
            }, [r("strong", {
                staticClass: "mr-2 balance-text"
            }, [e._v("Total Balance")]), r("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {
                        content: e.totalSkillTooltipHtml,
                        trigger: e.isMobile() ? "click" : "hover"
                    },
                    expression: "{ content: totalSkillTooltipHtml , trigger: (isMobile() ? 'click' : 'hover') }"
                }],
                staticClass: "balance",
                on: {
                    mouseover: function(t) {
                        e.hover = !e.isMobile() || !0
                    },
                    mouseleave: function(t) {
                        e.hover = !e.isMobile()
                    }
                }
            }, [e._v(e._s(e.formattedTotalSkillBalance) + " "), e.hasInGameSkill ? r("b-icon-gift-fill", {
                attrs: {
                    scale: "1",
                    variant: "success"
                }
            }) : e._e()], 1)]), e.hasBnbAvailableToWithdraw ? r("div", {
                staticClass: "bnb-withdraw-container mx-3"
            }, [r("b-icon-diamond-half", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: e.bnbClaimTooltip,
                    expression: "bnbClaimTooltip",
                    modifiers: {
                        bottom: !0
                    }
                }],
                class: e.canWithdrawBnb ? "pointer" : null,
                attrs: {
                    scale: "1.2",
                    variant: e.canWithdrawBnb ? "success" : "warning"
                },
                on: {
                    click: e.onWithdrawBNB
                }
            })], 1) : e._e()])
        }, jo = [], Vo = r["default"].extend({
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["skillRewards", "skillBalance", "inGameOnlyFunds", "waxBridgeWithdrawableBnb", "waxBridgeTimeUntilLimitExpires"])), Object(n["c"])({
                availableBNB: "waxBridgeAmountOfBnbThatCanBeWithdrawnDuringPeriod",
                getExchangeUrl: "getExchangeUrl"
            })), {}, {
                formattedTotalSkillBalance: function() {
                    var e = k(C.a.sum(M(this.skillBalance), M(this.inGameOnlyFunds), M(this.skillRewards)));
                    return "".concat(M(e).toFixed(4), " SICKLE")
                },
                formattedSkillBalance: function() {
                    var e = k(this.skillBalance);
                    return "".concat(M(e).toFixed(4), " SICKLE")
                },
                hasBnbAvailableToWithdraw: function() {
                    return M(this.waxBridgeWithdrawableBnb).gt(0)
                },
                canWithdrawBnb: function() {
                    return M(this.availableBNB).gt(0)
                },
                formattedBnbThatCanBeWithdrawn: function() {
                    return this.formatBnb(this.availableBNB)
                },
                formattedTotalAvailableBnb: function() {
                    return this.formatBnb(this.waxBridgeWithdrawableBnb)
                },
                durationUntilLimitPeriodOver: function() {
                    return $r(this.waxBridgeTimeUntilLimitExpires)
                },
                bnbClaimTooltip: function() {
                    return this.canWithdrawBnb ? "".concat(this.formattedBnbThatCanBeWithdrawn, " of ").concat(this.formattedTotalAvailableBnb, " withdrawable from the portal") : "\n          You have reached your limit for withdrawing MATIC from the portal for this period,\n          please wait about ".concat(this.durationUntilLimitPeriodOver, "\n          (").concat(this.formattedTotalAvailableBnb, " left)\n        ")
                },
                formattedInGameOnlyFunds: function() {
                    var e = k(this.inGameOnlyFunds);
                    return "".concat(M(e).toFixed(4), " SICKLE")
                },
                totalSkillTooltipHtml: function() {
                    var e = k(this.inGameOnlyFunds)
                      , t = k(this.skillRewards)
                      , a = k(this.skillBalance)
                      , r = M(a).toFixed(4) + " SICKLE";
                    return 0 !== parseFloat(t) && (r += "<br>+ WITHDRAWABLE " + M(t).toFixed(4) + " SICKLE"),
                    0 !== parseFloat(e) && (r += "<br>+ IN GAME ONLY " + M(e).toFixed(4) + " SICKLE"),
                    r
                },
                hasInGameSkill: function() {
                    var e = k(this.inGameOnlyFunds);
                    return 0 !== parseFloat(e)
                }
            }),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["addMoreSkill", "withdrawBnbFromWaxBridge"])), {}, {
                formatBnb: function(e) {
                    var t = k(e);
                    return "".concat(M(t).toFixed(4), " BNB")
                },
                onBuySkill: function() {
                    window.open(this.getExchangeUrl, "_blank")
                },
                onWithdrawBNB: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.canWithdrawBnb) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4,
                                    e.withdrawBnbFromWaxBridge();
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }),
            components: {}
        }), Uo = Vo, zo = (a("e7f3"),
        Object(it["a"])(Uo, Go, jo, !1, null, "7644db05", null)), Ko = zo.exports, Yo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [a("b-navbar-nav", [a("b-icon-exclamation-circle-fill", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "Rewards ready to claim!",
                    expression: "'Rewards ready to claim!'",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "rewards-claimable-icon",
                attrs: {
                    scale: "1.2",
                    variant: "success",
                    hidden: !e.canClaimTokens && !e.canClaimXp
                }
            }), a("b-nav-item-dropdown", {
                attrs: {
                    right: ""
                },
                scopedSlots: e._u([{
                    key: "button-content",
                    fn: function() {
                        return [e._v(" Rewards ")]
                    },
                    proxy: !0
                }])
            }, [a("b-dropdown-item", {
                staticClass: "gtag-link-others",
                attrs: {
                    disabled: !e.canClaimTokens,
                    tagname: "claim_skill"
                },
                on: {
                    click: function(t) {
                        return e.claimSkill(e.ClaimStage.WaxBridge)
                    }
                }
            }, [e._v(" SICKLE "), a("div", {
                staticClass: "pl-3"
            }, [e._v(e._s(e.formattedSkillReward))]), a("div", {
                staticClass: "pl-3"
            }, [e._v(" Early withdraw tax: " + e._s(e.formattedRewardsClaimTax) + " "), a("b-icon-question-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "Tax is being reduced by 1% per day",
                    expression: "'Tax is being reduced by 1% per day'",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "centered-icon",
                attrs: {
                    scale: "0.8"
                }
            })], 1), a("div", {
                staticClass: "pl-3"
            }, [e._v("Time since last withdraw: n/a")])]), a("b-dropdown-item", {
                staticClass: "gtag-link-others",
                attrs: {
                    disabled: !e.canClaimXp,
                    tagname: "claim_xp"
                },
                on: {
                    click: e.onClaimXp
                }
            }, [e._v(" XP "), e._l(e.formattedXpRewards, (function(t, r) {
                return a("div", {
                    key: r,
                    staticClass: "pl-3"
                }, [e._v(e._s(t))])
            }
            ))], 2)], 1)], 1), a("b-modal", {
                ref: "need-gas-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Need Withdraw?",
                    "ok-title": "Next",
                    "cancel-title": "Go to WAX Portal"
                },
                on: {
                    ok: function(t) {
                        return e.claimSkill(e.ClaimStage.Stake)
                    },
                    cancel: function(t) {
                        return e.$router.push({
                            name: "portal"
                        })
                    }
                }
            }, [e._v(" Claim your rewards!! "), a("div", {
                staticClass: "text-center"
            }, [a("hr", {
                staticClass: "hr-divider"
            }), e._v(" Hold Reminder:"), a("br"), e._v(" A percentage of your earning goes back to the community,"), a("br"), a("u", [e._v("if you withdraw early")]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-5"
            }, [e._v("Your early withdraw tax")]), a("div", {
                staticClass: "col-2"
            }, [a("span", {
                staticClass: "text-danger font-weight-bold"
            }, [e._v(e._s(e.formattedRewardsClaimTax))])]), a("div", {
                staticClass: "col-5 text-left"
            }, [e._v("Reduces 1% per day"), a("br"), e._v(" Reset to 15% after withdraw")])])])]), a("b-modal", {
                ref: "stake-suggestion-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Claim SICKLE",
                    "ok-only": "",
                    "ok-title": "Claim!"
                },
                on: {
                    ok: function(t) {
                        return e.claimSkill(e.ClaimStage.Claim)
                    }
                }
            }, [e._v(" Are you sure? Do you want to HODL? "), a("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(t) {
                        return e.claimSkill(e.ClaimStage.Claim)
                    }
                }
            }, [a("br"), e._v("No thanks, I'll " + e._s(this.rewardsClaimTaxAsFactorBN > 0 ? "pay " + this.formattedTaxAmount + " in taxes and " : "") + "continue playing ")])]), a("b-modal", {
                ref: "claim-confirmation-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Claim SICKLE",
                    "ok-title": "I am sure"
                },
                on: {
                    ok: function(t) {
                        return e.onClaimTokens()
                    }
                }
            }, [e._v(" You are about to " + e._s(this.rewardsClaimTaxAsFactorBN > 0 ? "pay " + e.formattedRewardsClaimTax + " tax for early withdrawal, costing you " + this.formattedTaxAmount + " SICKLE. You will also " : "") + " miss some profits " + e._s(e.formattedBonusLost) + ". Are you sure you wish to continue? "), a("b", [e._v("This action cannot be undone.")])])], 1)
        }, $o = [];
        (function(e) {
            e[e["WaxBridge"] = 0] = "WaxBridge",
            e[e["Stake"] = 1] = "Stake",
            e[e["Claim"] = 2] = "Claim"
        }
        )(Io || (Io = {}));
        var Zo, qo = r["default"].extend({
            data: function() {
                return {
                    ClaimStage: Io
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["skillRewards", "xpRewards", "ownedCharacterIds", "directStakeBonusPercent"])), Object(n["c"])(["ownCharacters", "maxRewardsClaimTaxAsFactorBN", "rewardsClaimTaxAsFactorBN"])), {}, {
                formattedSkillReward: function() {
                    var e = k(this.skillRewards);
                    return "".concat(M(e).toFixed(4))
                },
                xpRewardsForOwnedCharacters: function() {
                    var e = this;
                    return this.ownedCharacterIds.map((function(t) {
                        return e.xpRewards[t] || "0"
                    }
                    ))
                },
                formattedXpRewards: function() {
                    var e = this;
                    return this.xpRewardsForOwnedCharacters.map((function(t, a) {
                        return e.ownCharacters[a] ? "".concat(Ve(e.ownCharacters[a].id), " ").concat(t) : t
                    }
                    ))
                },
                canClaimTokens: function() {
                    return !M(this.skillRewards).lte(0)
                },
                formattedTaxAmount: function() {
                    var e = k(M(parseFloat(this.skillRewards) * parseFloat(String(this.rewardsClaimTaxAsFactorBN))).toString());
                    return "".concat(M(e).toFixed(4))
                },
                formattedBonusLost: function() {
                    var e = k(M(parseFloat(this.skillRewards) * this.directStakeBonusPercent / 100).toString());
                    return "".concat(M(e).toFixed(4))
                },
                formattedRewardsClaimTax: function() {
                    var e = "0" === this.skillRewards ? this.maxRewardsClaimTaxAsFactorBN : this.rewardsClaimTaxAsFactorBN;
                    return "".concat(e.multipliedBy(100).decimalPlaces(0, C.a.ROUND_HALF_UP), "%")
                },
                canClaimXp: function() {
                    var e = this.xpRewardsForOwnedCharacters.every((function(e) {
                        return M(e).lte(0)
                    }
                    ));
                    return !e
                }
            }),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["addMoreSkill", "claimTokenRewards", "claimXpRewards"])), {}, {
                onClaimTokens: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.canClaimTokens) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3,
                                    e.claimTokenRewards();
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onClaimXp: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.canClaimXp) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3,
                                    e.claimXpRewards();
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                claimSkill: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    e === Io.WaxBridge && t.$refs["need-gas-modal"].show(),
                                    e === Io.Stake && t.$refs["stake-suggestion-modal"].show(),
                                    e === Io.Claim && (t.$refs["stake-suggestion-modal"].hide(),
                                    t.$refs["claim-confirmation-modal"].show());
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                }
            })
        }), Jo = qo, Qo = (a("2bd3"),
        Object(it["a"])(Jo, Yo, $o, !1, null, "dd86bbfa", null)), el = Qo.exports, tl = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "body main-font"
            }, [a("b-navbar", [a("b-icon-exclamation-circle-fill", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "Rewards ready to claim!",
                    expression: "'Rewards ready to claim!'",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "rewards-claimable-icon",
                attrs: {
                    scale: "1.2",
                    variant: "success",
                    hidden: !e.canClaimTokens && !e.canClaimXp
                }
            }), a("b-nav-item", {
                attrs: {
                    disabled: ""
                }
            }, [a("strong", [e._v("Rewards")])]), a("b-nav-item", {
                staticClass: "ml-3",
                attrs: {
                    disabled: !e.canClaimTokens
                },
                on: {
                    click: function(t) {
                        return e.claimSkill(e.ClaimStage.WaxBridge)
                    }
                }
            }, [a("span", {
                staticClass: "gtag-link-others",
                attrs: {
                    tagname: "claim_skill"
                }
            }, [a("strong", [e._v("SICKLE")]), e._v(" " + e._s(e.formattedSkillReward) + " "), a("strong", [e._v("Early Withdraw Tax")]), e._v(" " + e._s(e.formattedRewardsClaimTax) + " "), a("b-icon-question-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "Tax is being reduced by 1% per day",
                    expression: "'Tax is being reduced by 1% per day'",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "centered-icon",
                attrs: {
                    scale: "0.8"
                }
            })], 1)]), a("b-nav-item", {
                staticClass: "ml-3",
                attrs: {
                    disabled: !e.canClaimXp
                },
                on: {
                    click: e.onClaimXp
                }
            }, [a("div", {
                staticClass: "gtag-link-others",
                domProps: {
                    innerHTML: e._s("<strong>XP</strong> " + e.formattedXpRewards)
                }
            })])], 1), a("b-modal", {
                ref: "need-gas-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Need Withdraw?",
                    "ok-title": "Sure!"
                },
                on: {
                    ok: function(t) {
                        return e.claimSkill(e.ClaimStage.Stake)
                    }
                }
            }, [e._v(" Claim your rewards!! "), a("div", {
                staticClass: "text-center"
            }, [a("hr", {
                staticClass: "hr-divider"
            }), e._v(" Hold Reminder:"), a("br"), e._v(" A percentage of your earning goes back to the community,"), a("br"), a("u", [e._v("if you withdraw early")]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-5"
            }, [e._v("Your early withdraw tax")]), a("div", {
                staticClass: "col-2"
            }, [a("span", {
                staticClass: "text-danger font-weight-bold"
            }, [e._v(e._s(e.formattedRewardsClaimTax))])]), a("div", {
                staticClass: "col-5 text-left"
            }, [e._v("Reduces 1% per day"), a("br"), e._v(" Reset to 15% after withdraw")])])])]), a("b-modal", {
                ref: "stake-suggestion-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Claim SICKLE",
                    "ok-only": "",
                    "ok-title": "Claim!"
                },
                on: {
                    ok: function(t) {
                        return e.claimSkill(e.ClaimStage.Claim)
                    }
                }
            }, [e._v(" Are your really sure you want to withdraw?? "), a("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(t) {
                        return e.claimSkill(e.ClaimStage.Claim)
                    }
                }
            }, [a("br"), e._v("YES, I'd rather " + e._s(this.rewardsClaimTaxAsFactorBN > 0 ? "pay " + this.formattedTaxAmount + " in taxes and " : "") + "keep on playing ")])]), a("b-modal", {
                ref: "claim-confirmation-modal",
                staticClass: "centered-modal",
                attrs: {
                    title: "Claim SICKLE",
                    "ok-title": "I am sure"
                },
                on: {
                    ok: function(t) {
                        return e.onClaimTokens()
                    }
                }
            }, [e._v(" You are about to " + e._s(this.rewardsClaimTaxAsFactorBN > 0 ? "pay " + e.formattedRewardsClaimTax + " tax for early withdrawal, costing you " + this.formattedTaxAmount + " SICKLE. You will also " : "") + " miss out on " + e._s(e.formattedBonusLost) + " SICKLE. Are you sure you wish to continue? "), a("b", [e._v("This action cannot be undone.")]), a("div", {
                staticClass: "text-center"
            }, [a("hr", {
                staticClass: "hr-divider"
            }), e._v(" Hold Reminder:"), a("br"), e._v(" A percentage of your earning goes back to the community,"), a("br"), a("u", [e._v("if you withdraw early")]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-5"
            }, [e._v("Your early withdraw tax")]), a("div", {
                staticClass: "col-2"
            }, [a("span", {
                staticClass: "text-danger font-weight-bold"
            }, [e._v(e._s(e.formattedRewardsClaimTax))])]), a("div", {
                staticClass: "col-5 text-left"
            }, [e._v("Reduces 1% per day"), a("br"), e._v(" Reset to 15% after withdraw")])])])])], 1)
        }, al = [];
        (function(e) {
            e[e["WaxBridge"] = 0] = "WaxBridge",
            e[e["Stake"] = 1] = "Stake",
            e[e["Claim"] = 2] = "Claim"
        }
        )(Zo || (Zo = {}));
        var rl = r["default"].extend({
            data: function() {
                return {
                    ClaimStage: Zo
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["skillRewards", "xpRewards", "ownedCharacterIds", "directStakeBonusPercent"])), Object(n["c"])(["ownCharacters", "currentCharacter", "maxRewardsClaimTaxAsFactorBN", "rewardsClaimTaxAsFactorBN"])), {}, {
                formattedSkillReward: function() {
                    var e = k(this.skillRewards);
                    return "".concat(M(e).toFixed(4))
                },
                formattedTaxAmount: function() {
                    var e = k((parseFloat(this.skillRewards) * parseFloat(String(this.rewardsClaimTaxAsFactorBN))).toString());
                    return "".concat(M(e).toFixed(4))
                },
                formattedBonusLost: function() {
                    var e = k((parseFloat(this.skillRewards) * this.directStakeBonusPercent / 100).toString());
                    return "".concat(M(e).toFixed(4))
                },
                formattedRewardsClaimTax: function() {
                    var e = "0" === this.skillRewards ? this.maxRewardsClaimTaxAsFactorBN : this.rewardsClaimTaxAsFactorBN;
                    return "".concat(e.multipliedBy(100).decimalPlaces(0, C.a.ROUND_HALF_UP), "%")
                },
                xpRewardsForOwnedCharacters: function() {
                    var e = this;
                    return this.ownedCharacterIds.map((function(t) {
                        return e.xpRewards[t] || "0"
                    }
                    ))
                },
                formattedXpRewards: function() {
                    var e = this;
                    return this.xpRewardsForOwnedCharacters.map((function(t, a) {
                        var r = e.currentCharacter || {
                            id: null
                        };
                        return e.ownCharacters[a] ? "".concat(e.ownCharacters[a].id === r.id ? "<b>" : "") + "".concat(e.ownCharacters[a].xp + e.xpRewards[e.ownCharacters[a].id] > V(e.ownCharacters[a].level) ? "<u>" : "") + "".concat(Ve(e.ownCharacters[a].id), " ").concat(t) + "".concat(e.ownCharacters[a].xp + e.xpRewards[e.ownCharacters[a].id] > V(e.ownCharacters[a].level) ? "</u>" : "") + "".concat(e.ownCharacters[a].id === r.id ? "</b>" : "") : "".concat(t)
                    }
                    )).join(", ")
                },
                canClaimTokens: function() {
                    return !M(this.skillRewards).lte(0)
                },
                canClaimXp: function() {
                    var e = this.xpRewardsForOwnedCharacters.every((function(e) {
                        return M(e).lte(0)
                    }
                    ));
                    return !e
                }
            }),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["b"])(["addMoreSkill", "claimTokenRewards", "claimXpRewards"])), {}, {
                onClaimTokens: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.canClaimTokens) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3,
                                    e.claimTokenRewards();
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onClaimXp: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.canClaimXp) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3,
                                    e.claimXpRewards();
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                claimSkill: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    e === Zo.WaxBridge && t.$refs["need-gas-modal"].show(),
                                    e === Zo.Stake && t.$refs["stake-suggestion-modal"].show(),
                                    e === Zo.Claim && (t.$refs["stake-suggestion-modal"].hide(),
                                    t.$refs["claim-confirmation-modal"].show());
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                }
            })
        })
          , nl = rl
          , ol = (a("0229"),
        Object(it["a"])(nl, tl, al, !1, null, "d4228a60", null))
          , ll = ol.exports
          , il = r["default"].extend({
            components: {
                ViewLinks: Bo,
                SkillBalanceDisplay: Ko,
                ClaimRewards: el,
                ClaimRewardsBar: ll,
                Options: Xo
            },
            data: function() {
                return {
                    canShowRewardsBar: !0
                }
            },
            computed: Object(g["a"])({}, Object(n["c"])(["getIsCharacterViewExpanded", "ownCharacters"])),
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["d"])(["setIsCharacterViewExpanded"])), {}, {
                checkStorage: function() {
                    this.canShowRewardsBar = "false" === localStorage.getItem("hideRewards")
                },
                toggleCharacterView: function() {
                    this.setIsCharacterViewExpanded(!this.getIsCharacterViewExpanded),
                    localStorage.setItem("isCharacterViewExpanded", this.getIsCharacterViewExpanded ? "true" : "false")
                }
            }),
            mounted: function() {
                var e = this;
                this.checkStorage(),
                aa.$on("setting:hideRewards", (function() {
                    return e.checkStorage()
                }
                ))
            }
        })
          , sl = il
          , ul = (a("34ba"),
        a("0ad1"),
        Object(it["a"])(sl, ko, So, !1, null, "5e9603ad", null))
          , cl = ul.exports
          , ml = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "character-bar"
            }, [r("character-display"), r("img", {
                staticClass: "info-divider",
                attrs: {
                    src: a("7461")
                }
            })], 1)
        }
          , dl = []
          , pl = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "character-display-container"
            }, [a("transition", {
                attrs: {
                    name: "slide-fade"
                }
            }, [e.getIsCharacterViewExpanded ? a("div", {
                staticClass: "root main-font"
            }, [a("div", {
                staticClass: "character-portrait"
            }, [e.isLoadingCharacter ? e._e() : a("CharacterArt", {
                attrs: {
                    character: e.currentCharacter,
                    portrait: !0
                }
            }), e.isLoadingCharacter ? a("span", {
                staticStyle: {
                    position: "relative"
                }
            }, [a("div", {
                staticClass: "loading-container"
            }, [a("i", {
                staticClass: "fas fa-spinner fa-spin"
            })])]) : e._e()], 1), a("div", {
                staticClass: "character-data-column dark-bg-text"
            }, [e.isLoadingCharacter ? e._e() : a("span", {
                staticClass: "name bold character-name"
            }, [e._v(e._s(e.getCharacterName(e.currentCharacterId)) + " "), a("span", {
                class: e.traits[e.currentCharacter.trait].toLowerCase() + "-icon trait-icon"
            })]), e.isLoadingCharacter ? a("span", {
                staticClass: "name bold"
            }, [e._v("Loading...")]) : e._e(), e.isLoadingCharacter ? e._e() : a("span", {
                staticClass: "subtext subtext-stats"
            }, [a("b", [e._v("Level")]), e._v(" "), a("span", [e._v(e._s(e.currentCharacter.level + 1) + " (" + e._s(e.currentCharacter.xp) + " / " + e._s(e.RequiredXp(e.currentCharacter.level).toLocaleString()) + " XP) ")]), a("b", [e._v("Power:")]), e._v(" "), a("span", [e._v(e._s(e.CharacterPower(e.currentCharacter.level).toLocaleString()))]), a("Hint", {
                staticClass: "power-hint",
                attrs: {
                    text: "Power increases by 10 every level up,\n            <br>and multiplied every 10 level ups\n            <br>Level 1: 1000\n            <br>Level 10: 1090\n            <br>Level 11: 2200\n            <br>Level 20: 2380\n            <br>Level 21: 3600"
                }
            })], 1)]), a("earnings-calculator")], 1) : e._e()]), e.isMobile() ? e._e() : a("div", {
                staticClass: "character-full-list"
            }, [a("ul", {
                staticClass: "character-list",
                class: [e.getIsInCombat ? "disabled-li" : "", e.getIsCharacterViewExpanded ? "" : "centered-list"]
            }, e._l(e.filteredCharactersForList, (function(t) {
                return a("li", {
                    key: t.id,
                    class: "" + e.setListClassForSelChar(t.id, e.currentCharacterId),
                    style: "--staminaReady: " + e.getCharacterStamina(t.id) / e.maxStamina * 100 + "%;",
                    on: {
                        click: function(a) {
                            !e.getIsInCombat && e.setCurrentCharacter(t.id) && e.alert(t.id)
                        }
                    }
                }, [a("div", {
                    staticClass: "name-list"
                }, [e._v(" " + e._s(e.getCharacterName(t.id)) + " Lv." + e._s(t.level + 1) + " ")]), a("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: e.toolTipHtml(e.timeUntilCharacterHasMaxStamina(t.id)),
                        expression: "toolTipHtml(timeUntilCharacterHasMaxStamina(c.id))",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "small-stamina-char",
                    style: "--staminaReady: " + e.getCharacterStamina(t.id) / e.maxStamina * 100 + "%;"
                }, [a("div", {
                    staticClass: "stamina-text black-outline"
                }, [e._v("MANA " + e._s(e.getCharacterStamina(t.id)) + " / 200")])])])
            }
            )), 0)]), e.isMobile() ? a("div", {
                staticClass: "character-list-mobile"
            }, [a("ul", e._l(e.filteredCharactersForList, (function(t) {
                return a("li", {
                    key: t.id,
                    staticClass: "{selectedCharactersLiClass}",
                    on: {
                        click: function(a) {
                            !e.getIsInCombat && e.setCurrentCharacter(t.id)
                        }
                    }
                }, [a("div", {
                    staticClass: "name-list"
                }, [e._v(e._s(e.getCharacterName(t.id)) + " Lv." + e._s(t.level + 1) + " "), e.isLoadingCharacter ? e._e() : a("small-bar", {
                    attrs: {
                        showMinimalVersion: !0,
                        current: e.getCharacterStamina(t.id),
                        max: e.maxStamina
                    }
                })], 1)])
            }
            )), 0)]) : e._e()], 1)
        }
          , hl = []
          , _l = function() {
            var e, t = this, a = t.$createElement, r = t._self._c || a;
            return t.showMinimalVersion ? r("span", [t._v("(" + t._s(t.current) + " / " + t._s(t.max) + ")")]) : r("div", {
                staticClass: "bar-section",
                attrs: {
                    title: t.altText
                }
            }, [r("i", {
                staticClass: "icon fas",
                class: (e = {},
                e[t.faIcon] = !0,
                e),
                style: {
                    color: t.primaryColor
                }
            }), r("div", {
                staticClass: "bar-wrapper"
            }, [r("div", {
                staticClass: "bar",
                style: {
                    width: t.percent,
                    background: t.primaryColor
                }
            })]), r("span", {
                staticClass: "bar-text"
            }, [t._v(t._s(t.current) + " / " + t._s(t.max))])])
        }
          , fl = []
          , gl = {
            props: ["current", "max", "faIcon", "primaryColor", "altText", "showMinimalVersion"],
            computed: {
                factor: function() {
                    return Math.min(1, this.current / this.max)
                },
                percent: function() {
                    return 100 * this.factor + "%"
                }
            }
        }
          , bl = gl
          , yl = (a("3c11"),
        Object(it["a"])(bl, _l, fl, !1, null, "02a83793", null))
          , Al = yl.exports
          , wl = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", [e.isLoadingCharacter ? e._e() : r("div", {
                staticClass: "character-earning-potential dark-bg-text"
            }, [e._m(0), r("div", {
                staticClass: "milestone-details"
            }, [e._v(" Get "), r("span", {
                staticClass: "bonus-text"
            }, [e._v(e._s(e.getNextMilestoneBonus(e.currentCharacter.level)) + "%")]), e._v(" more rewards at"), r("br"), r("div", {
                staticClass: "calculator-icon-div"
            }, [r("span", {
                staticClass: "milestone-lvl-text"
            }, [e._v("LVL " + e._s(e.getNextMilestoneLevel(e.currentCharacter.level)))]), r("br"), r("b-button", {
                staticClass: "btn btn-primary btn-small",
                on: {
                    click: e.onShowEarningsCalculator
                }
            }, [e._v(" Earnings Calculator ")]), r("b-modal", {
                ref: "earnings-calc-modal",
                attrs: {
                    "hide-footer": "",
                    size: "xl",
                    title: "Earnings Calculator"
                }
            }, [r("div", {
                staticClass: "calculator"
            }, [r("div", {
                staticClass: "calculator-character"
            }, [r("span", {
                staticClass: "calculator-subheader"
            }, [e._v("Character")]), r("img", {
                staticClass: "char-placeholder",
                attrs: {
                    src: a("add9")
                }
            }), r("span", [e._v("Element")]), r("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.characterElementValue,
                    expression: "characterElementValue"
                }],
                staticClass: "form-control wep-trait-form",
                on: {
                    change: function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.characterElementValue = t.target.multiple ? a : a[0]
                    }
                }
            }, e._l(["Ice", "Fire", "Light", "Dark"], (function(t) {
                return r("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(e._s(t))])
            }
            )), 0), r("span", [e._v("Level")]), r("div", {
                staticClass: "slider-input-div"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.levelSliderValue,
                    expression: "levelSliderValue"
                }],
                staticClass: "stat-slider",
                attrs: {
                    type: "range",
                    min: "1",
                    max: "255"
                },
                domProps: {
                    value: e.levelSliderValue
                },
                on: {
                    __r: function(t) {
                        e.levelSliderValue = t.target.value
                    }
                }
            }), r("b-form-input", {
                staticClass: "stat-input",
                attrs: {
                    type: "number",
                    min: 1,
                    max: 255
                },
                model: {
                    value: e.levelSliderValue,
                    callback: function(t) {
                        e.levelSliderValue = t
                    },
                    expression: "levelSliderValue"
                }
            })], 1)]), r("div", {
                staticClass: "calculator-earnings"
            }, [r("div", {
                staticClass: "coin-price-inputs"
            }, [r("span", {
                staticClass: "calculator-subheader"
            }, [e._v("Current prices (USD)")]), r("div", {
                staticClass: "prices-div"
            }, [r("div", {
                staticClass: "token-price-div"
            }, [e._v(" MATIC: "), r("b-form-input", {
                staticClass: "price-input",
                attrs: {
                    type: "number"
                },
                model: {
                    value: e.bnbPrice,
                    callback: function(t) {
                        e.bnbPrice = t
                    },
                    expression: "bnbPrice"
                }
            })], 1), r("div", {
                staticClass: "token-price-div"
            }, [e._v(" SICKLE: "), r("b-form-input", {
                staticClass: "price-input",
                attrs: {
                    type: "number"
                },
                model: {
                    value: e.skillPrice,
                    callback: function(t) {
                        e.skillPrice = t
                    },
                    expression: "skillPrice"
                }
            })], 1)])]), r("div", {
                staticClass: "results"
            }, [r("strong", [e._v("Earnings (USD)")]), r("div", {
                staticClass: "earnings-grid"
            }, [r("b-row", [r("b-col", [r("strong", [e._v("Wins # per day")])]), r("b-col", [r("strong", [e._v("Daily profit")]), r("br"), e._v("(1 character)")]), r("b-col", [r("strong", [e._v("Daily profit")]), r("br"), e._v("(4 characters)")]), r("b-col", [r("strong", [e._v("Monthly profit")]), r("br"), e._v("(4 characters)")])], 1), e._l(7, (function(t) {
                return r("b-row", {
                    key: t,
                    staticClass: "earnings-row"
                }, [r("b-col", [e._v(e._s(8 - t) + " (" + e._s(t - 1) + " lost)")]), r("b-col", {
                    class: [e.getColoringClass(8 - t - 1)]
                }, [e._v(" $" + e._s(e.calculationResults.length && e.calculationResults[8 - t - 1][0].toFixed(2) || 0) + " ")]), r("b-col", {
                    class: [e.getColoringClass(8 - t - 1)]
                }, [e._v(" $" + e._s(e.calculationResults.length && e.calculationResults[8 - t - 1][1].toFixed(2) || 0) + " ")]), r("b-col", {
                    class: [e.getColoringClass(8 - t - 1)]
                }, [e._v(" $" + e._s(e.calculationResults.length && e.calculationResults[8 - t - 1][2].toFixed(2) || 0) + " ")])], 1)
            }
            ))], 2)]), r("div", {
                staticClass: "button-div"
            }, [r("b-button", {
                staticClass: "btn btn-primary",
                on: {
                    click: e.onReset
                }
            }, [e._v(" Reset ")]), r("b-button", {
                staticClass: "btn btn-primary",
                class: [e.canCalculate() ? "" : "disabled disabled-button"],
                on: {
                    click: e.calculateEarnings
                }
            }, [e._v(" Calculate ")]), r("b-icon-question-circle", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: "Earnings on victory: " + this.stringFormattedSkill(this.fightGasOffset) + " gas offset +\n                  " + this.stringFormattedSkill(this.fightBaseline) + " per square root of power/1000",
                    expression: "`Earnings on victory: ${this.stringFormattedSkill(this.fightGasOffset)} gas offset +\n                  ${this.stringFormattedSkill(this.fightBaseline)} per square root of power/1000`",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "centered-icon",
                attrs: {
                    scale: "1.5"
                }
            })], 1)]), r("div", {
                staticClass: "calculator-weapon"
            }, [r("span", {
                staticClass: "calculator-subheader"
            }, [e._v("Weapon")]), r("img", {
                staticClass: "wep-placeholder",
                attrs: {
                    src: a("2b91")
                }
            }), r("span", [e._v("Stars")]), r("b-form-rating", {
                staticClass: "stars-picker",
                attrs: {
                    variant: "warning",
                    size: "sm"
                },
                on: {
                    change: e.refreshWeaponStats
                },
                model: {
                    value: e.starsValue,
                    callback: function(t) {
                        e.starsValue = t
                    },
                    expression: "starsValue"
                }
            }), r("span", [e._v("Element")]), r("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.wepElementValue,
                    expression: "wepElementValue"
                }],
                staticClass: "form-control wep-trait-form",
                on: {
                    change: function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.wepElementValue = t.target.multiple ? a : a[0]
                    }
                }
            }, e._l(["Ice", "Fire", "Light", "Dark"], (function(t) {
                return r("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(e._s(t))])
            }
            )), 0), r("span", [e._v("Stats")]), r("div", [r("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.wepFirstStatElementValue,
                    expression: "wepFirstStatElementValue"
                }],
                staticClass: "form-control wep-trait-form",
                on: {
                    change: function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.wepFirstStatElementValue = t.target.multiple ? a : a[0]
                    }
                }
            }, e._l(["STR", "DEX", "CHA", "INT", "PWR"], (function(t) {
                return r("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(e._s(t))])
            }
            )), 0), r("div", {
                staticClass: "slider-input-div"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.wepFirstStatSliderValue,
                    expression: "wepFirstStatSliderValue"
                }],
                staticClass: "stat-slider",
                attrs: {
                    type: "range",
                    min: e.getMinRoll(e.starsValue),
                    max: e.getMaxRoll(e.starsValue)
                },
                domProps: {
                    value: e.wepFirstStatSliderValue
                },
                on: {
                    __r: function(t) {
                        e.wepFirstStatSliderValue = t.target.value
                    }
                }
            }), r("b-form-input", {
                staticClass: "stat-input",
                attrs: {
                    type: "number",
                    min: e.getMinRoll(e.starsValue),
                    max: e.getMaxRoll(e.starsValue)
                },
                model: {
                    value: e.wepFirstStatSliderValue,
                    callback: function(t) {
                        e.wepFirstStatSliderValue = t
                    },
                    expression: "wepFirstStatSliderValue"
                }
            })], 1)]), e.starsValue > 3 ? r("div", [r("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.wepSecondStatElementValue,
                    expression: "wepSecondStatElementValue"
                }],
                staticClass: "form-control wep-trait-form",
                on: {
                    change: function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.wepSecondStatElementValue = t.target.multiple ? a : a[0]
                    }
                }
            }, e._l(["STR", "DEX", "CHA", "INT", "PWR"], (function(t) {
                return r("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(e._s(t))])
            }
            )), 0), r("div", {
                staticClass: "slider-input-div"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.wepSecondStatSliderValue,
                    expression: "wepSecondStatSliderValue"
                }],
                staticClass: "stat-slider",
                attrs: {
                    type: "range",
                    min: e.getMinRoll(e.starsValue),
                    max: e.getMaxRoll(e.starsValue)
                },
                domProps: {
                    value: e.wepSecondStatSliderValue
                },
                on: {
                    __r: function(t) {
                        e.wepSecondStatSliderValue = t.target.value
                    }
                }
            }), r("b-form-input", {
                staticClass: "stat-input",
                attrs: {
                    type: "number",
                    min: e.getMinRoll(e.starsValue),
                    max: e.getMaxRoll(e.starsValue)
                },
                model: {
                    value: e.wepSecondStatSliderValue,
                    callback: function(t) {
                        e.wepSecondStatSliderValue = t
                    },
                    expression: "wepSecondStatSliderValue"
                }
            })], 1)]) : e._e(), e.starsValue > 4 ? r("div", [r("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.wepThirdStatElementValue,
                    expression: "wepThirdStatElementValue"
                }],
                staticClass: "form-control wep-trait-form",
                on: {
                    change: function(t) {
                        var a = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.wepThirdStatElementValue = t.target.multiple ? a : a[0]
                    }
                }
            }, e._l(["STR", "DEX", "CHA", "INT", "PWR"], (function(t) {
                return r("option", {
                    key: t,
                    domProps: {
                        value: t
                    }
                }, [e._v(e._s(t))])
            }
            )), 0), r("div", {
                staticClass: "slider-input-div"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.wepThirdStatSliderValue,
                    expression: "wepThirdStatSliderValue"
                }],
                staticClass: "stat-slider",
                attrs: {
                    type: "range",
                    min: e.getMinRoll(e.starsValue),
                    max: e.getMaxRoll(e.starsValue)
                },
                domProps: {
                    value: e.wepThirdStatSliderValue
                },
                on: {
                    __r: function(t) {
                        e.wepThirdStatSliderValue = t.target.value
                    }
                }
            }), r("b-form-input", {
                staticClass: "stat-input",
                attrs: {
                    type: "number",
                    min: e.getMinRoll(e.starsValue),
                    max: e.getMaxRoll(e.starsValue)
                },
                model: {
                    value: e.wepThirdStatSliderValue,
                    callback: function(t) {
                        e.wepThirdStatSliderValue = t
                    },
                    expression: "wepThirdStatSliderValue"
                }
            })], 1)]) : e._e(), r("span", [e._v("Bonus power")]), r("div", {
                staticClass: "slider-input-div"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.wepBonusPowerSliderValue,
                    expression: "wepBonusPowerSliderValue"
                }],
                staticClass: "stat-slider",
                attrs: {
                    type: "range",
                    min: 0,
                    max: 2500
                },
                domProps: {
                    value: e.wepBonusPowerSliderValue
                },
                on: {
                    __r: function(t) {
                        e.wepBonusPowerSliderValue = t.target.value
                    }
                }
            }), r("b-form-input", {
                staticClass: "power-input",
                attrs: {
                    type: "number",
                    min: e.getMinRoll(e.starsValue),
                    max: e.getMaxRoll(e.starsValue)
                },
                model: {
                    value: e.wepBonusPowerSliderValue,
                    callback: function(t) {
                        e.wepBonusPowerSliderValue = t
                    },
                    expression: "wepBonusPowerSliderValue"
                }
            })], 1)], 1)])])], 1)])])])
        }
          , vl = [function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "milestone-header"
            }, [r("img", {
                staticClass: "sword-left",
                attrs: {
                    src: a("1824")
                }
            }), r("span", {
                staticClass: "milestone-text"
            }, [e._v("Next Stage")]), r("img", {
                staticClass: "sword-right",
                attrs: {
                    src: a("1824")
                }
            })])
        }
        ]
          , Cl = r["default"].extend({
            computed: Object(g["a"])(Object(g["a"])({}, Object(n["c"])(["currentCharacter", "currentWeapon", "fightGasOffset", "fightBaseline"])), {}, {
                isLoadingCharacter: function() {
                    return !this.currentCharacter
                }
            }),
            data: function() {
                return {
                    characterElementValue: "",
                    levelSliderValue: 1,
                    starsValue: 1,
                    wepElementValue: "",
                    wepFirstStatElementValue: "",
                    wepSecondStatElementValue: "",
                    wepThirdStatElementValue: "",
                    wepFirstStatSliderValue: 4,
                    wepSecondStatSliderValue: 4,
                    wepThirdStatSliderValue: 4,
                    wepBonusPowerSliderValue: 0,
                    bnbPrice: 0,
                    skillPrice: 0,
                    calculationResults: []
                }
            },
            methods: {
                onShowEarningsCalculator: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return null !== e.currentCharacter && (e.characterElementValue = R[e.currentCharacter.trait],
                                    e.levelSliderValue = e.currentCharacter.level + 1),
                                    null !== e.currentWeapon && (e.starsValue = e.currentWeapon.stars + 1,
                                    e.wepElementValue = e.currentWeapon.element,
                                    e.wepFirstStatSliderValue = e.currentWeapon.stat1Value,
                                    e.wepSecondStatSliderValue = e.starsValue > 3 && e.currentWeapon.stat2Value,
                                    e.wepThirdStatSliderValue = e.starsValue > 4 && e.currentWeapon.stat3Value,
                                    e.wepFirstStatElementValue = e.currentWeapon.stat1,
                                    e.wepSecondStatElementValue = e.starsValue > 3 && e.currentWeapon.stat2,
                                    e.wepThirdStatElementValue = e.starsValue > 4 && e.currentWeapon.stat3,
                                    e.wepBonusPowerSliderValue = e.currentWeapon.bonusPower),
                                    t.next = 4,
                                    e.fetchPrices();
                                case 4:
                                    e.$refs["earnings-calc-modal"].show();
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onReset: function() {
                    this.characterElementValue = "",
                    this.levelSliderValue = 1,
                    this.starsValue = 1,
                    this.wepElementValue = "",
                    this.wepFirstStatElementValue = "",
                    this.wepSecondStatElementValue = "",
                    this.wepThirdStatElementValue = "",
                    this.wepFirstStatSliderValue = 4,
                    this.wepSecondStatSliderValue = 4,
                    this.wepThirdStatSliderValue = 4,
                    this.wepBonusPowerSliderValue = 0,
                    this.calculationResults = []
                },
                getMinRoll: function(e) {
                    switch (e) {
                    case 2:
                        return 180;
                    case 3:
                        return 280;
                    case 4:
                        return 200;
                    case 5:
                        return 268;
                    default:
                        return 4
                    }
                },
                getMaxRoll: function(e) {
                    switch (e) {
                    case 1:
                        return 200;
                    case 2:
                        return 300;
                    default:
                        return 400
                    }
                },
                fetchPrices: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    w.a.get("https://api.coingecko.com/api/v3/simple/price?ids=cryptoblades,matic-network&vs_currencies=usd");
                                case 2:
                                    a = t.sent,
                                    r = a.data,
                                    e.skillPrice = null === r || void 0 === r ? void 0 : r.cryptoblades.usd,
                                    e.bnbPrice = 1.4,
                                    e.skillPrice = 1;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                canCalculate: function() {
                    return !(!this.characterElementValue || !this.wepElementValue) && (!(this.starsValue < 4 && !this.wepFirstStatElementValue) && (!!(4 !== this.starsValue || this.wepFirstStatElementValue && this.wepSecondStatElementValue) && !!(5 !== this.starsValue || this.wepFirstStatElementValue && this.wepSecondStatElementValue && this.wepThirdStatElementValue)))
                },
                calculateEarnings: function() {
                    if (this.canCalculate()) {
                        this.calculationResults = [];
                        for (var e = 7e-4 * this.bnbPrice, t = this.getWeapon(), a = R[this.characterElementValue], r = ee(t, a), n = this.getTotalPower(j(this.levelSliderValue - 1), r, this.wepBonusPowerSliderValue), o = this.getAverageRewardForPower(n), l = o * this.skillPrice - e, i = 1; i < 8; i++) {
                            var s = l * i - (7 - i) * e
                              , u = 4 * s
                              , c = 30 * u;
                            this.calculationResults.push([s, u, c])
                        }
                    }
                },
                getWeapon: function() {
                    var e = {
                        stat1Type: z[this.wepFirstStatElementValue],
                        stat2Type: z[this.wepSecondStatElementValue],
                        stat3Type: z[this.wepThirdStatElementValue],
                        stat1Value: this.wepFirstStatSliderValue,
                        stat2Value: this.starsValue > 3 && this.wepSecondStatSliderValue || 0,
                        stat3Value: this.starsValue > 4 && this.wepThirdStatSliderValue || 0
                    };
                    return e
                },
                getTotalPower: function(e, t, a) {
                    return e * t + Number(a)
                },
                getAverageRewardForPower: function(e) {
                    return this.formattedSkill(this.fightGasOffset) + this.formattedSkill(this.fightBaseline) * Math.sqrt(e / 1e3)
                },
                getNextMilestoneBonus: function(e) {
                    var t = this.getNextMilestoneLevel(e);
                    return this.getRewardDiffBonus(e, t)
                },
                getNextMilestoneLevel: function(e) {
                    return 10 * (Math.floor(e / 10) + 1) + 1
                },
                getAverageRewardAtLevel: function(e) {
                    return this.formattedSkill(this.fightGasOffset) + this.formattedSkill(this.fightBaseline) * Math.sqrt(j(e - 1) / 1e3)
                },
                getRewardDiffBonus: function(e, t) {
                    return (this.getAverageRewardAtLevel(t) / this.getAverageRewardAtLevel(e + 1) * 100 - 100).toFixed(2)
                },
                formattedSkill: function(e) {
                    var t = k(e.toString());
                    return M(t).toNumber()
                },
                stringFormattedSkill: function(e) {
                    var t = k(e.toString());
                    return M(t).toFixed(6)
                },
                getColoringClass: function(e) {
                    return this.calculationResults.length && 0 !== this.calculationResults[e][0] ? this.calculationResults[e][0] < 0 ? "negative-value" : "positive-value" : ""
                },
                refreshWeaponStats: function(e) {
                    this.wepFirstStatSliderValue = this.getMinRoll(e),
                    this.wepSecondStatSliderValue = this.getMinRoll(e),
                    this.wepThirdStatSliderValue = this.getMinRoll(e)
                }
            }
        })
          , Rl = Cl
          , Ml = (a("6dd8"),
        Object(it["a"])(Rl, wl, vl, !1, null, "69ddb9f2", null))
          , Tl = Ml.exports
          , kl = r["default"].extend({
            components: {
                CharacterArt: Gt,
                SmallBar: Al,
                Hint: xr,
                EarningsCalculator: Tl
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["maxStamina", "currentCharacterId", "ownedCharacterIds"])), Object(n["c"])(["currentCharacter", "currentCharacterStamina", "getCharacterName", "getCharacterStamina", "charactersWithIds", "ownCharacters", "timeUntilCharacterHasMaxStamina", "getIsInCombat", "getIsCharacterViewExpanded", "fightGasOffset", "fightBaseline"])), {}, {
                isLoadingCharacter: function() {
                    return !this.currentCharacter
                },
                filteredCharactersForList: function() {
                    var e = this.ownCharacters;
                    return e
                }
            }),
            data: function() {
                return {
                    traits: R,
                    isPlaza: !1
                }
            },
            methods: Object(g["a"])(Object(g["a"])({}, Object(n["d"])(["setCurrentCharacter"])), {}, {
                getCharacterArt: wt,
                CharacterPower: j,
                RequiredXp: V,
                setListClassForSelChar: function(e, t) {
                    return e === t ? "character-highlight" : "character"
                },
                toolTipHtml: function(e) {
                    return "Regenerates 1 point every 5 minutes, mana will be full at: " + e
                },
                formattedSkill: function(e) {
                    var t = k(e.toString());
                    return M(t).toNumber()
                }
            })
        })
          , Sl = kl
          , Ol = (a("2bc9"),
        Object(it["a"])(Sl, pl, hl, !1, null, "579daf0a", null))
          , xl = Ol.exports
          , Wl = {
            components: {
                CharacterDisplay: xl
            }
        }
          , Pl = Wl
          , Ll = (a("8f5d"),
        Object(it["a"])(Pl, ml, dl, !1, null, "7b175f78", null))
          , Bl = Ll.exports;
        r["default"].directive("visible", (function(e, t) {
            e.style.visibility = t.value ? "visible" : "hidden"
        }
        ));
        var Fl = {
            inject: ["web3", "featureFlagStakeOnly", "expectedNetworkId", "expectedNetworkName"],
            components: {
                NavBar: cl,
                CharacterBar: Bl,
                BigButton: ut,
                SmallButton: To
            },
            data: function() {
                return {
                    errorMessage: "",
                    hideWalletWarning: !1,
                    isConnecting: !1,
                    recruitCost: ""
                }
            },
            computed: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["e"])(["skillBalance", "defaultAccount", "currentNetworkId", "currentCharacterId", "staking"])), Object(n["c"])(["contracts", "ownCharacters", "getExchangeUrl", "availableStakeTypes", "hasStakedBalance"])), {}, {
                canShowApp: function() {
                    return null !== this.contracts && !y.a.isEmpty(this.contracts) && !this.showNetworkError
                },
                showMetamaskWarning: function() {
                    return !this.web3.currentProvider
                },
                showNetworkError: function() {
                    return this.expectedNetworkId && null !== this.currentNetworkId && this.currentNetworkId !== this.expectedNetworkId
                }
            }),
            watch: {
                defaultAccount: function(e) {
                    this.web3.eth.defaultAccount = e
                },
                currentCharacterId: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.updateCharacterStamina(e.currentCharacterId);
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                $route: function(e) {
                    window.gtag("event", "page_view", {
                        page_title: e.name,
                        page_location: e.fullPath,
                        page_path: e.path,
                        send_to: "G-C5RLX74PEW"
                    })
                }
            },
            methods: Object(g["a"])(Object(g["a"])(Object(g["a"])({}, Object(n["b"])({
                initializeStore: "initialize"
            })), Object(n["b"])(["fetchCharacterStamina", "pollAccountsAndNetwork", "fetchCharacterTransferCooldownForOwnCharacters", "setupWeaponDurabilities", "fetchStakeDetails", "fetchWaxBridgeDetails", "fetchRewardsClaimTax"])), {}, {
                updateCharacterStamina: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (!t.featureFlagStakeOnly) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    if (null === e) {
                                        a.next = 5;
                                        break
                                    }
                                    return a.next = 5,
                                    t.fetchCharacterStamina(e);
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                checkStorage: function() {
                    this.hideWalletWarning = "true" === localStorage.getItem("hideWalletWarning")
                },
                initializeRecruitCost: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.contracts.CryptoBlades.methods.mintCharacterFee().call({
                                        from: e.defaultAccount
                                    });
                                case 2:
                                    return a = t.sent,
                                    t.next = 5,
                                    e.contracts.CryptoBlades.methods.usdToSkill(a).call();
                                case 5:
                                    r = t.sent,
                                    e.recruitCost = C()(r).div(C()(10).pow(18)).toFixed(4);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                data: function() {
                    return {
                        recruitCost: this.recruitCost
                    }
                },
                startOnboarding: function() {
                    return Object(h["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    t = new Ao["a"],
                                    t.startOnboarding();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                configureMetaMask: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (a = e.web3.currentProvider,
                                    137 !== e.currentNetworkId) {
                                        t.next = 27;
                                        break
                                    }
                                    return t.prev = 2,
                                    t.next = 5,
                                    a.request({
                                        method: "wallet_switchEthereumChain",
                                        params: [{
                                            chainId: "80001"
                                        }]
                                    });
                                case 5:
                                    t.next = 17;
                                    break;
                                case 7:
                                    return t.prev = 7,
                                    t.t0 = t["catch"](2),
                                    t.prev = 9,
                                    t.next = 12,
                                    a.request({
                                        method: "wallet_addEthereumChain",
                                        params: [{
                                            chainId: "80001",
                                            chainName: "Mumbai Testnet",
                                            nativeCurrency: {
                                                name: "tMatic",
                                                symbol: "tMATIC",
                                                decimals: 18
                                            },
                                            rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
                                            blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                                        }]
                                    });
                                case 12:
                                    t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14,
                                    t.t1 = t["catch"](9),
                                    console.error(t.t1);
                                case 17:
                                    return t.prev = 17,
                                    t.next = 20,
                                    a.request({
                                        method: "wallet_watchAsset",
                                        params: {
                                            type: "ERC20",
                                            options: {
                                                address: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
                                                symbol: "SICKLE",
                                                decimals: 18,
                                                image: "<%= BASE_URL %>/android-chrome-512x512.png"
                                            }
                                        }
                                    });
                                case 20:
                                    t.next = 25;
                                    break;
                                case 22:
                                    t.prev = 22,
                                    t.t2 = t["catch"](17),
                                    console.error(t.t2);
                                case 25:
                                    t.next = 50;
                                    break;
                                case 27:
                                    return t.prev = 27,
                                    t.next = 30,
                                    a.request({
                                        method: "wallet_switchEthereumChain",
                                        params: [{
                                            chainId: "137"
                                        }]
                                    });
                                case 30:
                                    t.next = 42;
                                    break;
                                case 32:
                                    return t.prev = 32,
                                    t.t3 = t["catch"](27),
                                    t.prev = 34,
                                    t.next = 37,
                                    a.request({
                                        method: "wallet_addEthereumChain",
                                        params: [{
                                            chainId: "137",
                                            chainName: "Matic Mainnet",
                                            nativeCurrency: {
                                                name: "Matic",
                                                symbol: "MATIC",
                                                decimals: 18
                                            },
                                            rpcUrls: ["https://rpc-mainnet.matic.network"],
                                            blockExplorerUrls: ["https://polygonscan.com/"]
                                        }]
                                    });
                                case 37:
                                    t.next = 42;
                                    break;
                                case 39:
                                    t.prev = 39,
                                    t.t4 = t["catch"](34),
                                    console.error(t.t4);
                                case 42:
                                    return t.prev = 42,
                                    t.next = 45,
                                    a.request({
                                        method: "wallet_watchAsset",
                                        params: {
                                            type: "ERC20",
                                            options: {
                                                address: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
                                                symbol: "SICKLE",
                                                decimals: 18,
                                                image: "<%= BASE_URL %>/android-chrome-512x512.png"
                                            }
                                        }
                                    });
                                case 45:
                                    t.next = 50;
                                    break;
                                case 47:
                                    t.prev = 47,
                                    t.t5 = t["catch"](42),
                                    console.error(t.t5);
                                case 50:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 7], [9, 14], [17, 22], [27, 32], [34, 39], [42, 47]])
                    }
                    )))()
                },
                connectMetamask: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    a = e.web3.currentProvider,
                                    e.isConnecting = !0,
                                    e.errorMessage = "Connecting to MetaMask...",
                                    a.request({
                                        method: "eth_requestAccounts"
                                    }).then((function() {
                                        e.errorMessage = "Success: MetaMask connected.",
                                        e.isConnecting = !1
                                    }
                                    )).catch((function() {
                                        e.errorMessage = "Error: MetaMask could not get permissions.",
                                        e.isConnecting = !1
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                toggleHideWalletWarning: function() {
                    this.hideWalletWarning = !this.hideWalletWarning,
                    this.hideWalletWarning ? localStorage.setItem("hideWalletWarning", "true") : localStorage.setItem("hideWalletWarning", "false"),
                    aa.$emit("setting:hideWalletWarning", {
                        value: this.hideWalletWarning
                    })
                },
                showWarningDialog: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    new Promise((function(e) {
                                        return setTimeout(e, 7500)
                                    }
                                    ));
                                case 2:
                                    e.hideWalletWarning && !e.showMetamaskWarning && (e.errorMessage || e.showNetworkError || 0 === e.ownCharacters.length && "0" === e.skillBalance && !e.hasStakedBalance) && e.$dialog.notify.warning("Welcome to PolyBlades!", {
                                        timeout: 0
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                checkNotifications: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, r, n, o;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    fetch("https://api.cryptoblades.io/static/notifications");
                                case 2:
                                    return a = t.sent,
                                    t.next = 5,
                                    a.json();
                                case 5:
                                    r = t.sent,
                                    n = localStorage.getItem("lastnotification"),
                                    o = !0,
                                    r.forEach((function(t) {
                                        o && (n !== t.hash ? e.$dialog.notify.warning("".concat(t.title, '\n          <br>\n          <a href="').concat(t.link, '" target="_blank">Check it out!</a>\n          '), {
                                            timeout: 3e5
                                        }) : o = !1)
                                    }
                                    )),
                                    localStorage.setItem("lastnotification", r[0].hash);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }),
            mounted: function() {
                var e = this;
                this.checkStorage(),
                aa.$on("setting:hideRewards", (function() {
                    return e.checkStorage()
                }
                )),
                aa.$on("setting:useGraphics", (function() {
                    return e.checkStorage()
                }
                )),
                aa.$on("setting:hideWalletWarning", (function() {
                    return e.checkStorage()
                }
                )),
                document.body.addEventListener("click", (function(e) {
                    var t = e.target.getAttribute("tagname");
                    t && ("BUTTON" === e.target.nodeName && window.gtag("event", "button_clicked", {
                        value: t
                    }),
                    e.target.className.includes("gtag-link-others") && window.gtag("event", "nav", {
                        event_category: "navigation",
                        event_label: "navbar",
                        value: t
                    }))
                }
                )),
                this.showWarningDialog()
            },
            created: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                e.initializeStore();
                            case 3:
                                t.next = 11;
                                break;
                            case 5:
                                throw t.prev = 5,
                                t.t0 = t["catch"](0),
                                e.errorMessage = "Welcome to PolyBlades. Here is how you can get started.",
                                4001 === t.t0.code && (e.errorMessage = "Error: MetaMask could not get permissions."),
                                console.error(t.t0),
                                t.t0;
                            case 11:
                                e.pollCharactersStaminaIntervalId = setInterval(Object(h["a"])(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                e.ownCharacters.forEach(function() {
                                                    var t = Object(h["a"])(regeneratorRuntime.mark((function t(a) {
                                                        return regeneratorRuntime.wrap((function(t) {
                                                            while (1)
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2,
                                                                    e.updateCharacterStamina(a.id);
                                                                case 2:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }
                                                        ), t)
                                                    }
                                                    )));
                                                    return function(e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }());
                                            case 1:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                ))), 3e3),
                                e.availableStakeTypes.forEach((function(t) {
                                    e.fetchStakeDetails({
                                        stakeType: t
                                    })
                                }
                                )),
                                e.slowPollIntervalId = setInterval(Object(h["a"])(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                Promise.all([e.fetchCharacterTransferCooldownForOwnCharacters(), e.setupWeaponDurabilities(), e.fetchWaxBridgeDetails(), e.fetchRewardsClaimTax()]);
                                            case 2:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                ))), 1e4),
                                e.doPollAccounts = !0,
                                a = function() {
                                    var t = Object(h["a"])(regeneratorRuntime.mark((function t() {
                                        return regeneratorRuntime.wrap((function(t) {
                                            while (1)
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (e.doPollAccounts) {
                                                        t.next = 2;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 2:
                                                    return t.prev = 2,
                                                    t.next = 5,
                                                    e.pollAccountsAndNetwork();
                                                case 5:
                                                    t.next = 10;
                                                    break;
                                                case 7:
                                                    t.prev = 7,
                                                    t.t0 = t["catch"](2),
                                                    console.error(t.t0);
                                                case 10:
                                                    setTimeout(a, 200);
                                                case 11:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t, null, [[2, 7]])
                                    }
                                    )));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                a(),
                                localStorage.getItem("useGraphics") || localStorage.setItem("useGraphics", "false"),
                                localStorage.getItem("hideRewards") || localStorage.setItem("hideRewards", "false"),
                                localStorage.getItem("hideWalletWarning") || localStorage.setItem("hideWalletWarning", "false"),
                                localStorage.getItem("fightMultiplier") || localStorage.setItem("fightMultiplier", "1"),
                                e.checkNotifications(),
                                e.initializeRecruitCost();
                            case 23:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 5]])
                }
                )))()
            },
            beforeDestroy: function() {
                this.doPollAccounts = !1,
                clearInterval(this.pollCharacterStaminaIntervalId),
                clearInterval(this.slowPollIntervalId)
            }
        }
          , El = Fl
          , Il = (a("034f"),
        a("d9d7"),
        Object(it["a"])(El, bo, yo, !1, null, "45738f01", null))
          , Hl = Il.exports
          , Nl = (a("f9e3"),
        a("2dd8"),
        null);
        Nl = parseInt("137", 10);
        var Dl = "Matic"
          , Xl = new d.a(d.a.givenProvider || Object({
            NODE_ENV: "production",
            VUE_APP_STAKING_ONLY: "0",
            VUE_APP_FEATURE_FLAG_RAID: "0",
            VUE_APP_FEATURE_FLAG_REFORGING: "1",
            VUE_APP_FEATURE_FLAG_MARKET: "1",
            VUE_APP_FEATURE_FLAG_MARKET_USE_BLOCKCHAIN: "0",
            VUE_APP_FEATURE_FLAG_PORTAL: "1",
            VUE_APP_WAX_BRIDGE_WAX_WALLET_ADDRESS: "snoui.wam",
            VUE_APP_NETWORK_ID: "137",
            VUE_APP_EXPECTED_NETWORK_ID: "137",
            VUE_APP_EXPECTED_NETWORK_NAME: "Matic",
            VUE_APP_STAKE_TYPE_FOR_UNCLAIMED_REWARDS: "skill",
            VUE_APP_SKILL_TOKEN_CONTRACT_ADDRESS: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
            VUE_APP_SKILL2_TOKEN_CONTRACT_ADDRESS: "0x2dF507f3A084C3e053d57EF418802f56CC1B7CF8",
            VUE_APP_LP_TOKEN_CONTRACT_ADDRESS: "0x79761C2f25836F55d8598c183B1Fc01e8A7BFd07",
            VUE_APP_LP_2_TOKEN_CONTRACT_ADDRESS: "0x0E9faFC0a89Be477808014bc926f2965480Fb472",
            VUE_APP_SKILL_STAKING_REWARDS_CONTRACT_ADDRESS: "0xF0CdA97345C75daaAE6d151D66B8A841491A5DF2",
            VUE_APP_SKILL2_STAKING_REWARDS_CONTRACT_ADDRESS: "",
            VUE_APP_LP_STAKING_REWARDS_CONTRACT_ADDRESS: "0x69b2Bc5c2D72B7Af11486B9673E7C1F02dA3906a",
            VUE_APP_LP_2_STAKING_REWARDS_CONTRACT_ADDRESS: "0x69b2Bc5c2D72B7Af11486B9673E7C1F02dA3906a",
            VUE_APP_CRYPTOBLADES_CONTRACT_ADDRESS: "0x84C5ce1AA909c187E23823538f2A9dD6EAACebcD",
            VUE_APP_RAID_CONTRACT_ADDRESS: "0xa09bC1A371b8D80A1f41F7016d0C78604991441D",
            VUE_APP_MARKET_CONTRACT_ADDRESS: "0x5b400939Ea022ec3edf3E548A933Dc5D060C3521",
            VUE_APP_WAX_BRIDGE_CONTRACT_ADDRESS: "0x94a4D2B2c5A6720598B41be1e020cC0c54Be8140",
            BASE_URL: "/"
        }).VUE_APP_WEB3_FALLBACK_PROVIDER);
        r["default"].config.productionTip = !1,
        r["default"].use(n["a"]),
        r["default"].use(o["a"]),
        r["default"].use(l["a"]),
        r["default"].use(i["a"]),
        r["default"].use(c.a),
        r["default"].use(s["a"]);
        var Gl = Qe(Xl)
          , jl = go();
        new r["default"]({
            render: function(e) {
                return e(Hl)
            },
            router: jl,
            store: Gl,
            provide: {
                web3: Xl,
                featureFlagStakeOnly: he,
                featureFlagRaid: pe,
                featureFlagReforging: _e,
                expectedNetworkId: Nl,
                expectedNetworkName: Dl
            }
        }).$mount("#app")
    },
    cd50: function(e, t, a) {},
    d476: function(e, t, a) {},
    d604: function(e, t, a) {
        "use strict";
        a("9e25")
    },
    d6e4: function(e, t, a) {},
    d814: function(e, t, a) {
        e.exports = a.p + "img/GoblinMale_Light.b32b2b33.gif"
    },
    d854: function(e, t, a) {
        "use strict";
        a("6539")
    },
    d9d7: function(e, t, a) {
        "use strict";
        a("6df4")
    },
    dd58: function(e, t, a) {
        "use strict";
        a("cd50")
    },
    ddb4: function(e, t, a) {
        e.exports = a.p + "img/sword-placeholder-1.909565f2.png"
    },
    e135: function(e, t, a) {
        "use strict";
        a("4fd7")
    },
    e709: function(e) {
        e.exports = JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMinimumStakeTime","type":"uint256"}],"name":"MinimumStakeTimeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"RewardsDurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeRewardDistributionTimeLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeUnlockTimeLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
    },
    e7f3: function(e, t, a) {
        "use strict";
        a("1f0d")
    },
    e8bb: function(e, t, a) {
        e.exports = a.p + "img/border-element.901c67c6.png"
    },
    e8c0: function(e) {
        e.exports = JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"burned","type":"uint256"}],"name":"Burned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"weapon","type":"uint256"},{"indexed":true,"internalType":"address","name":"minter","type":"address"}],"name":"NewWeapon","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"reforged","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"burned","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"lowPoints","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fourPoints","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fivePoints","type":"uint8"}],"name":"Reforged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"reforged","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"lowDust","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fourDust","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fiveDust","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"lowPoints","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fourPoints","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fivePoints","type":"uint8"}],"name":"ReforgedWithDust","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAME_ADMIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_DOES_NOT_SET_TRANSFER_TIMESTAMP","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnPointMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fiveStarBurnPowerPerPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fourStarBurnPowerPerPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastTransferTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lowStarBurnPowerPerPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDurability","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oneFrac","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"powerMultPerPointBasic","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"powerMultPerPointMatching","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"powerMultPerPointPWR","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secondsPerDurability","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_e55d8c5","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_aa9da90","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_951a020","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"get","outputs":[{"internalType":"uint16","name":"_properties","type":"uint16"},{"internalType":"uint16","name":"_stat1","type":"uint16"},{"internalType":"uint16","name":"_stat2","type":"uint16"},{"internalType":"uint16","name":"_stat3","type":"uint16"},{"internalType":"uint8","name":"_level","type":"uint8"},{"internalType":"uint8","name":"_blade","type":"uint8"},{"internalType":"uint8","name":"_crossguard","type":"uint8"},{"internalType":"uint8","name":"_grip","type":"uint8"},{"internalType":"uint8","name":"_pommel","type":"uint8"},{"internalType":"uint24","name":"_burnPoints","type":"uint24"},{"internalType":"uint24","name":"_bonusPower","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"stars","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"mintWeaponWithStars","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint16","name":"properties","type":"uint16"},{"internalType":"uint16","name":"stat1","type":"uint16"},{"internalType":"uint16","name":"stat2","type":"uint16"},{"internalType":"uint16","name":"stat3","type":"uint16"},{"internalType":"uint256","name":"cosmeticSeed","type":"uint256"}],"name":"performMintWeapon","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"getRandomProperties","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint16","name":"minRoll","type":"uint16"},{"internalType":"uint16","name":"maxRoll","type":"uint16"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"seed2","type":"uint256"}],"name":"getRandomStat","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"seed2","type":"uint256"},{"internalType":"uint8","name":"limit","type":"uint8"}],"name":"getRandomCosmetic","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"}],"name":"getStatMinRoll","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"}],"name":"getStatMaxRoll","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"}],"name":"getStatCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getProperties","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStars","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"properties","type":"uint16"}],"name":"getStarsFromProperties","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getTrait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"properties","type":"uint16"}],"name":"getTraitFromProperties","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStatPattern","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"properties","type":"uint16"}],"name":"getStatPatternFromProperties","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint8","name":"statPattern","type":"uint8"}],"name":"getStat1Trait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint8","name":"statPattern","type":"uint8"}],"name":"getStat2Trait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint8","name":"statPattern","type":"uint8"}],"name":"getStat3Trait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStat1","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStat2","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStat3","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPowerMultiplier","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"properties","type":"uint16"},{"internalType":"uint16","name":"stat1","type":"uint16"},{"internalType":"uint16","name":"stat2","type":"uint16"},{"internalType":"uint16","name":"stat3","type":"uint16"},{"internalType":"uint8","name":"trait","type":"uint8"}],"name":"getPowerMultiplierForTrait","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"}],"name":"getDustSupplies","outputs":[{"internalType":"uint32[]","name":"","type":"uint32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"_calculateBurnValues","outputs":[{"internalType":"uint8[]","name":"","type":"uint8[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reforgeID","type":"uint256"},{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"reforge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reforgeID","type":"uint256"},{"internalType":"uint8","name":"amountLB","type":"uint8"},{"internalType":"uint8","name":"amount4B","type":"uint8"},{"internalType":"uint8","name":"amount5B","type":"uint8"}],"name":"reforgeWithDust","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getBonusPower","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"level","type":"uint8"}],"name":"getBonusPowerForFight","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"charTrait","type":"uint8"}],"name":"getFightData","outputs":[{"internalType":"int128","name":"","type":"int128"},{"internalType":"int128","name":"","type":"int128"},{"internalType":"uint24","name":"","type":"uint24"},{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"amount","type":"uint8"}],"name":"drainDurability","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplier","type":"uint256"}],"name":"setBurnPointMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"powerPerBurnPoint","type":"uint256"}],"name":"setLowStarBurnPowerPerPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"powerPerBurnPoint","type":"uint256"}],"name":"setFourStarBurnPowerPerPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"powerPerBurnPoint","type":"uint256"}],"name":"setFiveStarBurnPowerPerPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getDurabilityTimestamp","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"setDurabilityTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getDurabilityPoints","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"getDurabilityPointsFromTimestamp","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"isDurabilityFull","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDurabilityMaxWait","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"pure","type":"function"}]}')
    },
    e99d: function(e, t, a) {},
    ed13: function(e) {
        e.exports = JSON.parse('{"0":["humwar_Boot_Left","humwar_Boot_Right"],"1":["humwar_Boot_Left","humwar_Boot_Right","humwar_Boot_Flaps_Left","humwar_Boot_Flaps_Right"],"2":["humwar_Sabatons_Left","humwar_Sabatons_Right","humwar_Schynbalds_Left","humwar_Schynbalds_Right","humwar_Boot_Left","humwar_Boot_Right"],"3":["humwar_Sabatons_Left","humwar_Sabatons_Right","humwar_Schynbalds_Left","humwar_Schynbalds_Right","humwar_Boot_Left","humwar_Boot_Right","humwar_Boot_Flaps_Left","humwar_Boot_Flaps_Right"],"4":["elfwar_BootLeft","elfwar_BootRight","elfwar_BootCuffL","elfwar_BootCuffR"],"5":["elfwar_BootLeft","elfwar_BootRight","elfwar_BootCuffL","elfwar_BootCuffR","elfwar_LegArmor1Left","elfwar_LegArmor1StrapsLeft","elfwar_LegArmor1Right","elfwar_LegArmor1StrapsRight"],"6":["elfwar_BootLeft","elfwar_BootRight","elfwar_BootCuffL","elfwar_BootCuffR","elfwar_LegArmor1Left","elfwar_LegArmor1StrapsLeft","elfwar_LegArmor2Left","elfwar_LegArmor1Right","elfwar_LegArmor1StrapsRight","elfwar_LegArmor2Right"],"7":["elfwar_BootLeft","elfwar_BootRight","elfwar_BootCuffL","elfwar_BootCuffR","elfwar_LegArmor1Left","elfwar_LegArmor1StrapsLeft","elfwar_LegArmor2Left","elfwar_LegArmor1Right","elfwar_LegArmor1StrapsRight","elfwar_LegArmor2Right","elfwar_PoleynLeft","elfwar_PoleynRight"],"8":["hfowar_ShoeL","hfowar_ShoeR","hfowar_Shinguard_L","hfowar_Shinguard_Spikes_L","hfowar_Fur_Leg_L","hfowar_Shinguard_R","hfowar_Shinguard_Spikes_R","hfowar_Fur_Leg_R"],"9":["hfowar_ShoeL","hfowar_ShoeR","hfowar_Shinguard_L","hfowar_Shinguard_Spikes_L","hfowar_Shinguard_R","hfowar_Shinguard_Spikes_R","hfowar_Poleyn_L","hfowar_Poleyn_Spikes_L","hfowar_Poleyn_R","hfowar_Poleyn_Spikes_R"],"10":["hfowar_ShoeL","hfowar_ShoeR","hfowar_Shinguard_L","hfowar_Shinguard_R","hfowar_Poleyn_L","hfowar_Poleyn_Spikes_L","hfowar_Poleyn_R","hfowar_Poleyn_Spikes_R"],"11":["hfowar_ShoeL","hfowar_ShoeR","hfowar_Shinguard_L","hfowar_Shinguard_Spikes_L","hfowar_Shinguard_R","hfowar_Shinguard_Spikes_R","hfowar_Poleyn_L","hfowar_Poleyn_R"],"12":["arm6_Armor6StandardBootL","arm6_Armor6StandardBootR"],"13":["arm6_Armor6StandardBootL","arm6_Armor6StandardBootR","arm6_Armor6PoleynL","arm6_Armor6PoleynR"],"14":["arm7_Armor7ElvenBootL","arm7_Armor7ElvenBootR"],"15":["arm7_Armor7ElvenBootL","arm7_Armor7ElvenBootR","arm7_Armor7PoleynL","arm7_Armor7PoleynR"],"16":["arm8_Armor8PaladinBootL","arm8_Armor8PaladinBootR"],"17":["arm8_Armor8PaladinBootL","arm8_Armor8PaladinBootR","arm8_Armor8PoleynL","arm8_Armor8PoleynR"],"18":["arm9_Armor9BootL","arm9_Armor9BootR","arm9_Armor9GreavesL","arm9_Armor9GreavesR"],"19":["arm9_Armor9BootL","arm9_Armor9BootR","arm9_Armor9GreavesL","arm9_Armor9GreavesR","arm9_Armor9PoleynL","arm9_Armor9PoleynR"],"20":["arm10_Armor10SabatonLeft","arm10_Armor10SabatonRight","arm10_Armor10GreaveLeft","arm10_Armor10GreaveRight"],"21":["arm10_Armor10SabatonLeft","arm10_Armor10SabatonRight","arm10_Armor10GreaveLeft","arm10_Armor10GreaveRight","arm10_Armor10PoleynLeft","arm10_Armor10PoleynRight"]}')
    },
    ed9e: function(e, t, a) {
        e.exports = a.p + "img/sword-placeholder-2.903e6914.png"
    },
    ee65: function(e, t, a) {
        "use strict";
        a("1bd7")
    },
    f1ba: function(e, t, a) {
        e.exports = a.p + "img/OrcMale_Warrior.175259e3.gif"
    },
    f4b3: function(e) {
        e.exports = JSON.parse('{"one":["Acanth","Ach","Achat","Acin","Act","Aeg","Aepyc","Ail","Ailur","Aj","Al","Alc","Alcel","All","Amb","Amphipr","An","Ang","Anis","Anth","Ap","Apat","Apod","Apten","Ar","Arachn","Arct","Arctoc","Ard","Arv","Astr","Atel","Balaen","Balsen","Barb","Bett","Bis","Blatt","Bomb","Bos","Br","Brach","Bub","Buf","But","Cac","Cael","Caim","Call","Cam","Can","Capr","Car","Carch","Cas","Cast","Caud","Cav","Ceb","Cephal","Cer","Cerat","Cet","Cett","Chaetod","Chamael","Chel","Chelon","Chil","Chinch","Chiropt","Chlam","Chlamyd","Chlor","Choer","Chol","Cichl","Cirr","Civett","Cnid","Coccin","Coleopt","Connoch","Corac","Cot","Croc","Crocod","Crypt","Cuon","Cygn","Das","Dasyp","Daubent","Delph","Demosp","Dendrob","Dendrobr","Derm","Desmod","Dic","Dicer","Did","Diom","Dipl","Dipt","Drac","Drom","Dug","Dyn","Echin","Electr","Eleph","Eleuther","Emyd","Enh","Ephem","Eq","Ereth","Erith","Erythr","Es","Eud","Eupt","Falcon","Fel","Formic","Frat","Freg","Fun","Galeoc","Gall","Gallin","Gav","Gekkon","Geoch","Gerb","Gerr","Ginglym","Gir","Glir","Goph","Gor","Gruid","Gul","Gynnid","Halich","Hel","Heleiop","Helod","Helog","Hemig","Heter","Hier","Hipp","Hippop","Holoth","Hom","Hydr","Hydrod","Hyl","Hylob","Hymen","Iguan","Indr","Ins","Isopt","Labr","Lac","Lacert","Lag","Lagenorh","Lam","Larv","Latr","Lem","Lemm","Leontop","Leop","Lep","Lepis","Lept","Limul","Liss","Lit","Lophol","Loxod","Lucan","Lusc","Lutr","Lyc","Lynx","Mac","Macr","Mammuth","Mandr","Mant","Megad","Megapt","Meleagr","Melops","Meph","Mer","Mesobatr","Mesocr","Met","Microc","Mir","Mol","Muraen","Must","Myrmec","Nand","Nas","Nectophr","Neof","Nephr","Numid","Nycter","Ochot","Octop","Odob","Odoc","Okap","Onisc","Ophis","Orc","Oriol","Ornithorh","Oryct","Osteol","Ostr","Otar","Ov","Pag","Pagur","Pan","Panth","Pap","Papilion","Parach","Paradis","Paradox","Paral","Pass","Pav","Pec","Pelec","Peloph","Peram","Phacoch","Phaeth","Phal","Phalanger","Pharom","Phas","Phascol","Phasmat","Phoc","Phoenic","Phycod","Phys","Physign","Pic","Platan","Poec","Pog","Pomac","Pong","Prion","Prist","Proc","Prot","Protor","Pseud","Psitt","Pter","Pterom","Pygoc","Pygosc","Ramph","Ran","Rang","Raph","Ratt","Recurv","Rhinc","Rhinoc","Rhinocer","Rhinod","Rupic","Sag","Saim","Sarcoph","Sciur","Scorp","Sep","Serp","Set","Silurif","Sim","Smil","Spermoph","Sph","Sphen","Sphyr","Squal","Stegost","Strig","Strix","Struth","Sul","Suric","Sus","Symph","Sync","Tachyg","Talp","Tam","Tap","Tars","Tax","Tetraod","Tetraon","Teuth","Threskiorn","Thyl","Tragel","Trem","Trich","Trid","Troch","Trogl","Turs","Tyt","Uroch","Uropl","Urs","Var","Vesp","Viv","Vomb","Vulp","Xenop"],"two":["aatus","aca","acal","achia","achrus","acine","acna","acus","ae","aeidae","aemus","aena","aenidae","aetes","affa","ailurus","aius","aja","ajao","ale","alis","alus","amalis","ambulus","anchiata","anger","aninae","anta","anthidae","antulus","anus","aon","aphinae","aphus","apra","aptera","arctos","ardus","arhinus","ari","aria","arodon","as","astes","astos","ata","athus","atidae","atina","atus","aurus","avia","easter","ebus","echus","ecta","edeidae","eidae","eirodon","ela","eles","elis","ella","ellidae","elone","elphis","elus","emus","entes","entrus","enus","eo","eonidae","ephalinae","era","ercula","erdo","eridae","erix","erma","eroptera","eros","erra","erta","erus","es","eter","eus","eutes","ia","ialis","ianus","ias","icetus","ichthys","icola","ictis","ida","idae","idea","ifer","ifera","iforme","igator","iida","iidae","iiformes","ilia","ilidae","illa","illinae","illus","ilotis","ilus","ina","inae","ini","inia","inidia","inoidea","inus","io","ioidea","iones","ioninae","iops","ipedia","iri","irostra","irus","is","iscus","istoidea","ithecus","ithidae","ithodes","ithrix","itis","ittacus","ius","izon","lossus","o","obius","ocampa","ocampus","ocebus","och","ochelys","ochoerus","odactylus","odea","odectus","odidae","odon","odontus","odytes","oepus","oerus","ogale","oidea","oileus","ois","olagus","oma","omorpha","on","ona","ong","ongiae","onia","onix","onta","ontidae","ontinae","onyx","opex","ophaga","ophorus","ophrys","opidae","opoda","oprocta","ops","opsis","optera","opterus","opus","or","ordata","orhinus","oria","ormes","orus","oryx","osaurus","osteidae","ostoma","otamus","otherium","othrix","otidae","otriton","ouatta","ounga","ox","ozoa","ua","uarius","uinus","uis","ula","uma","ur","ura","urga","uridae","urnix","uroidea","urus","us","uta","uus","yatis","ydra","ydridae","yini","ylax","ylus","ynchus","yne","ynnis","yon","ypelma","yphorus","ypius","yptes","yptula","yrna","ysodon","ystoma","yura","yurus"],"three":["abel","acanth","acul","acutor","adel","aeg","afr","agass","agil","aj","al","alb","albiv","alc","alism","alp","alt","amblyrh","amoyens","amphib","anat","ang","antip","ar","arct","arg","as","atr","aur","axelr","bactr","barb","bengal","ber","bic","bin","bint","bir","bison","born","brach","bub","buf","but","cab","caff","camel","camelop","cap","capuc","car","carch","catesb","catt","centr","chrys","cin","cirr","civ","colch","conc","corb","cot","crist","croc","cucull","cunic","cuv","cycl","darw","delic","delph","dem","derb","diehl","ding","diph","domest","dors","dromed","dug","electr","eleg","eq","erm","escul","europ","euryc","falcon","famil","fasc","fascic","fer","forst","frag","franc","ful","fulg","fur","fusc","gall","ganget","geoffr","gig","gigant","glam","gor","grauer","grev","grunn","gryp","guian","gul","habropt","harr","herc","herm","hirc","hoffm","horr","humb","hydroch","ib","iguan","imm","imper","ind","indr","ir","jacks","johnst","jub","king","komod","laev","lag","lagotr","lanig","larv","latr","lemm","lept","less","leuc","liber","lot","lum","lup","lutr","lynx","ma","macroc","macul","magarh","magell","mal","man","mand","mandt","mar","maxill","maxim","mel","melan","mend","meph","mid","min","monach","mul","mur","muscul","nas","natt","neb","nghetinh","niv","nod","novaeangl","obscur","occid","oedip","onc","or","orc","orn","palm","pan","pap","pard","parv","pat","patag","phys","pic","pict","platyrh","popul","porc","prim","procyon","punct","put","pyger","pygm","quagg","radiat","ratt","retic","ridib","robust","ros","rosm","rubec","ruf","rupic","sap","scand","scr","scyph","serv","sim","sond","sph","spilog","splend","str","streps","sulfur","sum","sumatr","suric","susp","sylv","taj","tang","tar","taur","tax","tempor","tetr","tibet","tigr","toc","trid","trogl","trunc","typ","undul","unic","ursin","vin","vitt","vitul","viverr","volit","vulg","vulp","zebr","zerd","zyg"],"more":["acal","actyla","acu","aea","aena","aeris","aeus","agrus","aica","aicus","aja","al","alia","alis","allus","alunga","alus","ampus","an","andus","ani","anicus","ans","anus","apra","ardalis","aria","arias","arinia","aris","arius","arum","arus","as","aspis","aster","ata","aticus","ator","atrae","atta","atu","atum","atus","aum","ayanus","ea","eatus","ectum","eensis","eiana","elia","ellus","engei","ens","ensis","entalis","enteus","entris","entus","eo","ephalus","er","era","ereri","ereus","eri","eria","ersus","erus","es","etta","etti","eus","iacus","iae","ianus","iaris","ias","iatum","iatus","iblis","ica","iceps","iceros","icha","iculus","icus","idus","iens","iensis","ier","ies","igenius","ii","ilis","illa","ilus","ina","inea","inii","inosa","inum","inus","inx","iol","iosa","is","isci","iscus","isii","itimus","itis","ius","izii","o","ocome","odes","odi","oditus","odytes","oensis","ofa","oides","oldti","oleuca","olophus","olor","on","onae","one","oni","onicus","onii","onyx","opus","or","orius","ornis","os","ostrata","ostris","osus","otata","otis","oura","ouxii","ox","oyi","ozoa","ua","uco","ues","uinus","ula","ularis","ulata","ules","ulosa","ulus","um","undus","urnix","urong","us","uta","uus","yanus","yi","ynchos","ythrus","yurus"]}')
    },
    f725: function(e, t, a) {
        "use strict";
        a("5093")
    },
    f825: function(e, t, a) {
        e.exports = a.p + "img/divider7.ec5ad85d.png"
    },
    f9c9: function(e) {
        e.exports = JSON.parse('{"a":{}}')
    },
    f9f7: function(e) {
        e.exports = JSON.parse('{"0":["humwar_Trousers"],"1":["humwar_Trousers","humwar_Belt_Sheathe","humwar_Dagger_Pouch"],"2":["humwar_Trousers","humwar_Gladiator_Belt"],"3":["humwar_Trousers","humwar_Gladiator_Belt","humwar_Pteruges"],"4":["humwar_Trousers","humwar_Faulds"],"5":["humwar_Trousers","humwar_Faulds","humwar_Belt_Sheathe","humwar_Dagger_Pouch"],"6":["humwar_Skirt","humwar_Gladiator_Belt"],"7":["humwar_Skirt","humwar_Gladiator_Belt","humwar_Pteruges"],"8":["humwar_Skirt","humwar_Faulds"],"9":["humwar_Skirt","humwar_Faulds","humwar_Pteruges"],"10":["humwar_Skirt","humwar_Faulds","humwar_Belt_Sheathe","humwar_Dagger_Pouch"],"11":["humwar_Skirt","humwar_Faulds","humwar_Pteruges","humwar_Belt_Sheathe","humwar_Dagger_Pouch"],"12":["elfwar_ElfPants"],"13":["elfwar_ElfPants","elfwar_Belt_2","elfwar_Belt_1"],"14":["elfwar_ElfPants","elfwar_Belt_2","elfwar_Belt_1","elfwar_Hip_Armor_1","elfwar_Hip_Armor_2"],"15":["elfwar_ElfPants","elfwar_Belt_2","elfwar_Belt_1","elfwar_Hip_Armor_1","elfwar_Hip_Armor_2","elfwar_ElfHangers"],"16":["elfwar_ElfPants","elfwar_Sash","elfwar_Waistcloth"],"17":["elfwar_ElfPants","elfwar_Sash","elfwar_Waistcloth","elfwar_ElfHangers"],"18":["elfwar_ElfPants","elfwar_Sash","elfwar_Waistcloth","elfwar_Hip_Armor_1","elfwar_Hip_Armor_2"],"19":["elfwar_ElfPants","elfwar_Sash","elfwar_Waistcloth","elfwar_Hip_Armor_1","elfwar_Hip_Armor_2","elfwar_ElfHangers"],"20":["hfowar_HalfOrcPants"],"21":["hfowar_HalfOrcPants","hfowar_Skirt","hfowar_Skirt_Hangers","hfowar_Fur_Skirt"],"22":["hfowar_Skirt","hfowar_Skirt_Hangers","hfowar_Fur_Skirt"],"23":["humwar_Trousers","arm2_Armor2_Big_Belt","arm2_Armor2_Waistwrap"],"24":["humwar_Trousers","arm2_Armor2_Big_Belt","arm2_Armor2_Waistwrap","arm2_Armor2_Thigh_L2","arm2_Armor2_Thigh_L2Fur","arm2_Armor2_Thigh_R2","arm2_Armor2_Thigh_R2Fur"],"25":["humwar_Trousers","arm2_Armor2_Big_Belt","arm2_Armor2_Waistwrap","arm2_Armor2_Thigh_L2","arm2_Armor2_Thigh_L2Fur","arm2_Armor2_Thigh_R2","arm2_Armor2_Thigh_R2Fur","arm2_Armor2_Thigh_L1","arm2_Armor2_Thigh_L1Fur","arm2_Armor2_Thigh_R1","arm2_Armor2_Thigh_R1Fur"],"26":["humwar_Trousers","arm5_Armor5_Belt","arm5_Armor5_Waistwrap"],"27":["humwar_Trousers","arm5_Armor5_Belt","arm5_Armor5_Waistwrap","arm5_Armor5_Pouch_L","arm5_Armor5_Pouch_R"],"28":["arm6_UniversalTrousers","arm6_Armor6Faulds"],"29":["arm6_UniversalTrousers","arm6_Armor6Faulds","arm6_Armor6Skirt"],"30":["arm6_UniversalTrousers","arm7_Armor7Faulds"],"31":["arm6_UniversalTrousers","arm8_Armor8Faulds"],"32":["arm6_UniversalTrousers","arm8_Armor8Waistwrap"],"33":["arm6_UniversalTrousers","arm8_Armor8Faulds","arm8_Armor8Waistwrap"],"34":["arm6_UniversalTrousers","arm9_Armor9Faulds1","arm9_Armor9Faulds2"],"35":["arm6_UniversalTrousers","arm9_Armor9Faulds1","arm9_Armor9Faulds2","arm9_Armor9HipL","arm9_Armor9HipR"],"36":["arm6_UniversalTrousers","arm10_Armor10Faulds"],"37":["arm6_UniversalTrousers","arm10_Armor10CuisseLeft","arm10_Armor10CuisseRight"],"38":["arm6_UniversalTrousers","arm10_Armor10CuisseLeft","arm10_Armor10CuisseRight","arm10_Armor10KneewrapLeft","arm10_Armor10KneewrapRight"],"39":["arm6_UniversalTrousers","arm10_Armor10CuisseLeft","arm10_Armor10CuisseRight","arm10_Armor10Faulds"],"40":["arm6_UniversalTrousers","arm10_Armor10CuisseLeft","arm10_Armor10CuisseRight","arm10_Armor10Faulds","arm10_Armor10KneewrapLeft","arm10_Armor10KneewrapRight"]}')
    }
});
//# sourceMappingURL=app.c92f785d.js.map
