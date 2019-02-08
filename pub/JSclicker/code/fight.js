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
    if (this.randomInteger(0, 10 + enemy.type.lvl) < person.agility) {
        return 1;
    } else {
        return 0;
    }
}

function reloadEnemyStats(stat) {
    let enemyStatId = stat.split('Enemy')[0];
    if (enemyStatId === 'name' || enemyStatId === 'face') {
        document.getElementById(stat).innerHTML = enemy.type[enemyStatId];
    } else {
        document.getElementById(stat).innerHTML = enemyStatId + "-" + " " + enemy.type[enemyStatId];
    }
}

function enemyDefeated() {
    enemy.type.health = 0;
    reloadEnemyStats('healthEnemy');
    alert(enemy.type.name + ' is dead! You gain ' + enemy.type.gainExp + ' experience.');
    this.levelUp();
    enemy.type = null;
    this.hide('area');
}

function hide(element) {
    document.getElementById(element).style.cssText = 'visibility: hidden';
}

function spawnRandomEnemy() {
    enemy.type = Object.assign({}, enemies[getRandomInt(0, enemies.length)]);
}
