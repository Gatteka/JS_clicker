/**
 * Hide element by id
 * @param element
 */
function hide(element) {
    document.getElementById(element).style.cssText = 'visibility: hidden;';
}

/**
 * Delete element by id
 * @param element
 */
function deleteElement(id) {
    let elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
}

function show(element) {
    document.getElementById(element).style.cssText = 'visibility: visible;';
}

/**
 * Spawn random random enemy
 */
function spawnRandomEnemy() {
    enemy.type = Object.assign({}, enemies[getRandomInt(0, enemies.length)]);
}

/**
 * Reload HTML for enemies by id
 * @param stat
 */
function reloadEnemyStats(stat) {
    let enemyStatId = stat.split('Enemy')[0];
    if (enemyStatId === 'name' || enemyStatId === 'face') {
        document.getElementById(stat).innerHTML = enemy.type[enemyStatId];
    } else {
        document.getElementById(stat).innerHTML = enemyStatId + "-" + " " + enemy.type[enemyStatId];
    }
}

/**
 * Reload HTML by id
 * @param stat
 */
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

/**
 *  testing* Show areas
 */
// function showPlaces() {
//     addToInventoryById("smallHillPotion");
//     // addToInventory("superDrop");
//     if (!placesVisible) {
//         show('places');
//         placesVisible = true;
//         return;
//     }
//     hide('places');
//     placesVisible = false;
// }

var objIncrement = 0;

/**
 *
 * @param item
 */
function addToInventoryById(id) {
    objects.forEach(function (inventoryObject, index, array) {
        if (inventoryObject.realName === id) {
            if (document.getElementById('inventory').getElementsByTagName("p").length > 6) {
                return;
            }
            document.getElementById('inventory').innerHTML += '<p id="' + inventoryObject.realName + '-' + objIncrement + '" onclick="useObjectFromInventory(this.id)">' + inventoryObject.name + '  ' + inventoryObject.objectView + '</p>';
            objIncrement++;
        }
    });
}

/**
 *
 * @param item
 */
function addToInventory(item) {
    if (document.getElementById('inventory').getElementsByTagName("p").length > 6) {
        return;
    }
    document.getElementById('inventory').innerHTML += '<p id="' + item.realName + '-' + objIncrement + '" onclick="useObjectFromInventory(this.id)">' + item.name + '  ' + item.objectView + '</p>';
    objIncrement++;

}

/**
 *
 * @param realId
 */
function useObjectFromInventory(realId) {
    let realName = realId.split('-')[0];
    objects.forEach(function (obj, index, array) {
        if (obj.realName === realName) {
            let action = obj.use.split('-')[0];
            let stat = obj.use.split('-')[1];
            if (person.health >= person.maxHealth) {
                return;
            }
            if (action === 'restore') {
                switch (stat) {
                    case 'both':
                        person.health += obj.restoreHp;
                        // person.manna += obj.restoreManna;
                        //document.getElementById(realId).innerHTML = '';
                        deleteElement(realId);
                        break;
                    case 'health':
                        person.health += obj.restoreHp;
                        if (person.health > person.maxHealth) {
                            person.health = person.maxHealth;
                        }
                        deleteElement(realId);
                        //document.getElementById(realId).innerHTML = '';
                        break;
                }
            }
        }
    });
    reloadStats('health');
}

/**
 *
 * @param id
 */
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