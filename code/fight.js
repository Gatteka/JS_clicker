const enemy = {
    type: ''
};

/** initialize new fight with random enemy after button click **/
function newFight() {
    this.spawnRandomEnemy();
    document.getElementById('area').style.cssText = 'visibility: visible; width: 25%';
    reloadEnemyStats('healthEnemy');
    reloadEnemyStats('damageEnemy');
    reloadEnemyStats('nameEnemy');
    reloadEnemyStats('faceEnemy');
}

function personHit() {
    /** get random enemy **/
    let ha = attack(person);
    enemy.type.health -= ha;
    if (enemy.type.health <= 0) {
        this.enemyDefeated();
    } else {
        this.enemyHit();
        reloadEnemyStats('healthEnemy');
        console.log('You hitting ' + ha + ' damage');
    }
}

function enemyHit() {
    person.health -= enemy.type.damage + randomInteger(-3, 3);
    if (person.health <= 0) {
        person.health = 0;
        reloadStats('health');
        alert('You are dead!');
        location.reload();
    }
    reloadStats('health');
}

function runaway() {
    if (this.tryToRun()) {
        alert('You have been escaped!');
        this.hide('area');
    } else {
        alert('You have been failed!');
        this.enemyHit();
    }
}

function tryToRun() {
    if (this.randomInteger(0, 5 + enemy.type.lvl) < person.agility) {
        return 1;
    } else {
        return 0;
    }
}


function enemyDefeated() {
    enemy.type.health = 0;
    getDropFromEnemy();
    reloadEnemyStats('healthEnemy');
    alert(enemy.type.name + ' is dead! You gain ' + enemy.type.gainExp + ' experience.');
    this.levelUp();
    enemy.type = null;
    this.hide('area');
}


function getDropFromEnemy() {
    var availableDrop = [];
    objects.forEach(function (value, index, array) {
        if (enemy.type.dropLvl >= value.itemLvl) {
            availableDrop.push(value);
        }
    });
    var randomElement = availableDrop[randomInteger(0, availableDrop.length)];
    addToInventory(randomElement);
    console.log(availableDrop);
}

function levelUp() {
    person.exp += enemy.type.gainExp;
    // reloadStats('exp');
    if (person.exp >= person.expForNextLvl) {
        this.checkExp();
    }
    reloadStats('exp');

}

function checkExp() {
    if (person.exp >= person.expForNextLvl) {
        person.lvl++;
        person.health = person.maxHealth;
        reloadStats('health');
        epicName(person.lvl);
        person.exp -= person.expForNextLvl;
        person.expForNextLvl *= person.lvl;
        this.newStatAvailable();
        reloadStats('exp');
        reloadStats('lvl');
    }
}

