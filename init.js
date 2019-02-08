const gameStartActions = [
    person.name = window.prompt('What is your name?', 'Hero')
];


var availableStatsCount = 1;


function attack(person) {
    if (person.weapon) {
        return (countDamage(person) + getRandomInt(-2, 2)) * criticalChance(person.weapon.criticalChance, person.agility);
    } else {
        return countDamage(person);
    }
}

function countDamage(person) {
    if (person.weapon) {
        return (person.strength) * 3 + (person.agility) + person.weapon.damage;
    } else {
        return (person.strength) * 2;
    }
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function criticalChance(criticalChance, agility) {
    if (this.randomInteger(0, 100) < (criticalChance + agility)) {
        return 2;
    } else {
        return 1;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


person.attackPower = countDamage(person);

let buttons = document.getElementById('buttons');


console.log(buttons);
document.getElementById('name').innerHTML = String(gameStartActions);

reloadStats('lvl');
reloadStats('exp');
reloadStats('strength');
reloadStats('agility');
reloadStats('stamina');
reloadStats('stealth');
reloadStats('attackPower');
reloadStats('health');


function getGun(id) {
    alert(id);
    guns.forEach(function (element) {
        if (element.name === id) {
            document.getElementById('weapon').innerHTML = id;
            document.getElementById('weaponView').innerHTML = element.weaponView;
            person.weapon = element;
            person.attackPower = person.weapon.damage;
            reloadStats('attackPower')
        }
    });
    console.log(person);
}

function riseStat(id) {
    let realId = id.split('-');
    let property;
    for (property in person) {
        if (realId['0'] === property) {
            if (person.lvl > availableStatsCount) {
                person[property]++;
                availableStatsCount++;
                if (person.lvl === availableStatsCount) {
                    hide('stat-button-area');
                    // availableStatsCount = 0;
                }
                reloadStats(property);
                console.log(property);
                if (property === 'stamina') {
                    person.health += 20;
                    reloadStats('health')
                }
            } else {
                hide('stat-button-area');
                // availableStatsCount = 0;
            }
        }
    }
}

function levelUp() {
    person.exp += enemy.type.gainExp;
    reloadStats('exp');
    this.checkExp();
    let requiredExp = 20 * person.lvl;
    let realExp = person.exp;
    while ((realExp - requiredExp) >= requiredExp){
        this.checkExp();
    }
    // if (person.exp >= requiredExp) {
    //     person.lvl++;
    //     epicName(person.lvl);
    //     person.exp =- requiredExp;
    //     this.newStatAvailable();
    //     reloadStats('exp');
    //     reloadStats('lvl');
    // }
}

function checkExp() {
    let requiredExp = 20 * person.lvl;
    if (person.exp >= requiredExp) {
        person.lvl++;
        // person.health = 100;
        epicName(person.lvl);
        person.exp -= requiredExp;
        this.newStatAvailable();
        reloadStats('exp');
        reloadStats('lvl');
    }
}


function newStatAvailable() {
    document.getElementById('stat-button-area').style.cssText = 'visibility: visible;';
}

function reloadStats(stat) {
    document.getElementById(stat).innerHTML = stat + "-" + " " + person[stat];
}

function epicName(level) {
    switch (level) {
        case 2 :
            document.getElementById('name').style.cssText = 'color: blue;';
            break;
        case 3 :
            document.getElementById('name').style.cssText = 'color: red;';
            break;
        case 5 :
            document.getElementById('name').style.cssText = 'color: green;';
            break;
        case 10 :
            document.getElementById('name').style.cssText = 'color: navy;';
            break;
    }
}


