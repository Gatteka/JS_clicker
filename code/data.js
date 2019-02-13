var person = {
    name: '',
    health: 100,
    maxHealth: 100,
    lvl: 1,
    exp: 0,
    expForNextLvl: 20,
    strength: 10,
    agility: 1,
    stamina: 1,
    stealth: 1,
    weapon: null,
    weaponView: this.weapon.weaponView,
    armor: null,
    attackPower: this.weapon.damage,
    protection: 0,
    inventory: []
};

var enemies = [
    orc = {
        name: 'orc',
        damage: 40,
        criticalChance: 10,
        health: 200,
        lvl: 5,
        gainExp: 100,
        face: '(U^---^U)',
    },
    zombie = {
        name: 'zombie',
        damage: 20,
        criticalChance: 15,
        health: 70,
        lvl: 4,
        gainExp: 35,
        face: '|-_-|',
    },
    troll = {
        name: 'troll',
        damage: 22,
        criticalChance: 5,
        health: 60,
        lvl: 3,
        gainExp: 25,
        face: '|U - U|',
    },
    elf = {
        name: 'elf',
        damage: 16,
        health: 75,
        criticalChance: 5,
        lvl: 2,
        gainExp: 12,
        face: '<( 0_0 )>',
    },
    goblin = {
        name: 'goblin',
        damage: 12,
        health: 50,
        criticalChance: 5,
        lvl: 1,
        gainExp: 8,
        face: '<(J_J)>',
    }
];


var guns = [
    sword = {
        name: 'sword',
        damage: 20,
        criticalChance: 10,
        itemLvl: 1,
        weaponView: 'o====||___________ 7'
    },
    catana = {
        name: 'catana',
        damage: 45,
        criticalChance: 15,
        itemLvl: 3,
        weaponView: '[]n=n=n=||_______________________/'
    },
    axe = {
        name: 'axe',
        damage: 35,
        criticalChance: 15,
        itemLvl: 2,
        weaponView: '=-=-=-=||^^^^||>'
    },
    dagger = {
        name: 'dagger',
        damage: 15,
        criticalChance: 25,
        itemLvl: 2,
        weaponView: '[]===(|}________7'
    },

];

var faces = [
    face1 = {
        view: "(0 l 0)"
    },
    face2 = {
        view: "|o l o|"
    },
    face3 = {
        view: "|U l U|"
    },
    face4 = {
        view: "(- l -)"
    },

];

var classes = [
    warrior = {
        name: 'warrior',
        strength: 10,
        agility: 3,
        stamina: 5,
        stealth: 1,
        weapon: null,
        armor: null,
        inventory: []
    },
    mage = {
        name: 'mage',
        strength: 2,
        agility: 3,
        stamina: 4,
        stealth: 2,
        weapon: null,
        armor: null,
        inventory: []
    },
    rogue = {
        name: 'rogue',
        strength: 3,
        agility: 8,
        stamina: 2,
        stealth: 8,
        weapon: null,
        armor: null,
        inventory: []
    }
];
