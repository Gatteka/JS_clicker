
var placesVisible = false;

/**
 *  testing* Show areas
 */
function showPlaces() {
    addToInventoryById("smallHillPotion");
    // addToInventory("superDrop");
    if (!placesVisible) {
        show('places');
        placesVisible = true;
        return;
    }
    hide('places');
    placesVisible = false;
}