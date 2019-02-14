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
    switch (stat) {
        case 'health' :
            document.getElementById(stat).innerHTML = stat + "-" + " " + person[stat] + " / " + person['maxHealth'];
            break;
        case 'exp' :
            document.getElementById(stat).innerHTML = stat + "-" + " " + person[stat] + " / " + person['expForNextLvl'];
            break;
        case 'className' :
            document.getElementById(stat).innerHTML = person[stat];
            break;
        default:
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