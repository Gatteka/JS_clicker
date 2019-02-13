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

function criticalChance(criticalChance, agility) {
    if (this.randomInteger(0, 100) < (criticalChance + agility)) {
        return 2;
    } else {
        return 1;
    }
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
                }
                reloadStats(property);
                console.log(property);
                if (property === 'stamina') {
                    person.maxHealth += 10 * person.stamina;
                    // person.health = person.maxHealth;
                     reloadStats('health')
                }
            } else {
                hide('stat-button-area');
            }
        }
    }
}

function levelUp() {
    person.exp += enemy.type.gainExp;
    reloadStats('exp');
    this.checkExp();
    let requiredExp = person.expForNextLvl * person.lvl;
    person.expForNextLvl = requiredExp;
    reloadStats('exp');
    let realExp = person.exp;
    while ((realExp - requiredExp) >= requiredExp) {
        this.checkExp();
    }
}

function checkExp() {
    let requiredExp = 20 * person.lvl;
    if (person.exp >= requiredExp) {
        person.lvl++;
        person.health = person.maxHealth;
        reloadStats('health');
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


function selectClass(id) {
    let className = id.split('-')[1];
    classes.forEach(function (value, index, array) {
        if (className === value.name){
            person.class = value;
            console.log(person.class);
        }
    });



}




