function hide(element) {
    document.getElementById(element).style.cssText = 'visibility: hidden;';
}

function show(element) {
    document.getElementById(element).style.cssText = 'visibility: visible;';
}

function spawnRandomEnemy() {
    enemy.type = Object.assign({}, enemies[getRandomInt(0, enemies.length)]);
}

function reloadEnemyStats(stat) {
    let enemyStatId = stat.split('Enemy')[0];
    if (enemyStatId === 'name' || enemyStatId === 'face') {
        document.getElementById(stat).innerHTML = enemy.type[enemyStatId];
    } else {
        document.getElementById(stat).innerHTML = enemyStatId + "-" + " " + enemy.type[enemyStatId];
    }
}

function reloadStats(stat) {
    if (stat === 'health') {
        document.getElementById(stat).innerHTML = stat + "-" + " " + person[stat] + " / " + person['maxHealth'];
    } else if (stat ==='exp'){
        document.getElementById(stat).innerHTML = stat + "-" + " " + person[stat] + " / " + person['expForNextLvl']
    }
    else {
        document.getElementById(stat).innerHTML = stat + "-" + " " + person[stat];
    }
}

var placesVisible = false;

function showPlaces() {
    if (!placesVisible) {
        show('places');
        placesVisible = true;
    } else {
        hide('places');
        placesVisible = false;
    }
}



function newStatAvailable() {
    document.getElementById('stat-button-area').style.cssText = 'visibility: visible;';
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}