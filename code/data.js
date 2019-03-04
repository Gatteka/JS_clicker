var person = {
    name: '',
    health: 100,
    maxHealth: 100,
    class: null,
    className: null,
    lvl: 1,
    exp: 0,
    expForNextLvl: 20,
    strength: 1,
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
        dropLvl: 5
    },
    zombie = {
        name: 'zombie',
        damage: 20,
        criticalChance: 15,
        health: 70,
        lvl: 4,
        gainExp: 35,
        face: '|-_-|',
        dropLvl: 2
    },
    troll = {
        name: 'troll',
        damage: 22,
        criticalChance: 5,
        health: 60,
        lvl: 3,
        gainExp: 25,
        face: '|U - U|',
        dropLvl: 1
    },
    elf = {
        name: 'elf',
        damage: 16,
        health: 75,
        criticalChance: 5,
        lvl: 2,
        gainExp: 12,
        face: '<( 0_0 )>',
        dropLvl: 2
    },
    goblin = {
        name: 'goblin',
        damage: 12,
        health: 50,
        criticalChance: 5,
        lvl: 1,
        gainExp: 8,
        face: '<(J_J)>',
        dropLvl: 2
    },
    vampire = {
        name: 'vampire',
        damage: 25,
        health: 95,
        criticalChance: 18,
        lvl: 5,
        gainExp: 128,
        face: '{0 (> <) 0}',
        dropLvl: 3
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

var objects = [
    smallHillPotion = {
        realName: 'smallHillPotion',
        name: 'Small hill potion',
        restoreHp: 50,
        cost: 5,
        restoreManna: 0,
        use: 'restore-health',
        itemLvl: 1,
        objectView: '(~)'
    },
    smallMannaPotion = {
        realName: 'smallMannaPotion',
        name: 'Small manna potion',
        restoreHp: 10,
        cost: 2,
        restoreManna: 50,
        use: 'restore-both',
        itemLvl: 1,
        objectView: '[~]'
    },
    ultimatePotion = {
        realName: 'ultimatePotion',
        name: 'Super-mega potion',
        restoreHp: 120,
        restoreManna: 50,
        cost: 15,
        use: 'restore-both',
        itemLvl: 3,
        objectView: '{~~~}'
    },
    superDrop = {
        realName: 'superDrop',
        name: 'Rare monster drop',
        restoreHp: 0,
        restoreManna: 0,
        use: 'loot-loot',
        cost: 35,
        itemLvl: 5,
        objectView: '/-/-/-/'
    },

];

// var faces = [
//     face1 = {
//         view: "(0 l 0)"
//     },
//     face2 = {
//         view: "|o l o|"
//     },
//     face3 = {
//         view: "|U l U|"
//     },
//     face4 = {
//         view: "(- l -)"
//     },
//     face4 = {
//         view: "|0[|] 0 |"
//     },
// ];

var classes = [
    warrior = {
        name: 'warrior',
        strength: 10,
        agility: 1,
        stamina: 6,
        stealth: 1,
        weapon: null,
        armor: null,
        inventory: []
    },
    mage = {
        name: 'mage',
        strength: 2,
        agility: 3,
        stamina: 6,
        stealth: 2,
        weapon: null,
        armor: null,
        inventory: []
    },
    rogue = {
        name: 'rogue',
        strength: 3,
        agility: 8,
        stamina: 5,
        stealth: 8,
        weapon: null,
        armor: null,
        inventory: [
            objects[smallHillPotion],
            objects[ultimatePotion]
        ]
    }
];
