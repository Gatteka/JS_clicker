var person = {
    name: '',
    health: 100,
    lvl: 1,
    exp: 0,
    strength: 10,
    agility: 1,
    stamina: 1,
    stealth: 1,
    weapon: null,
    weaponView: this.weapon.view,
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
        face: '(O^---^O)',
    },
    zombie = {
        name: 'zombie',
        damage: 20,
        criticalChance: 15,
        health: 70,
        lvl: 4,
        gainExp: 45,
        face: '|-_-|',
    },
    troll = {
        name: 'troll',
        damage: 22,
        criticalChance: 5,
        health: 60,
        lvl: 3,
        gainExp: 30,
        face: '|U - U |',
    },
    elf = {
        name: 'elf',
        damage: 16,
        health: 75,
        criticalChance: 5,
        lvl: 2,
        gainExp: 10,
        face: '<(0_0 )>',
    },
    goblin = {
        name: 'goblin',
        damage: 12,
        health: 50,
        criticalChance: 5,
        lvl: 1,
        gainExp: 5,
        face: '(:-|)',
    }
];


var guns = [
    sword = {
        name: 'sword',
        damage: 20,
        criticalChance: 10,
        itemLvl: 1,
        weaponView: '===|__________ 7'
    },
    catana = {
        name: 'catana',
        damage: 45,
        criticalChance: 15,
        itemLvl: 3,
        weaponView: '[]n-n-n-||_______________________/'
    },
    axe = {
        name: 'axe',
        damage: 35,
        criticalChance: 15,
        itemLvl: 2,
        weaponView: '========|^^^^|>'
    },
    dagger = {
        name: 'dagger',
        damage: 15,
        criticalChance: 25,
        itemLvl: 2,
        weaponView: '[]===(|}__________7'
    },

];

