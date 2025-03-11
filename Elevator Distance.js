function elevatorDistance(array) {
    let totalDistance = 0;

    // Loop through the floors array and calculate the distance between consecutive floors
    for (let i = 1; i < array.length; i++) {
        totalDistance += Math.abs(array[i] - array[i - 1]);
    }

    return totalDistance;
}