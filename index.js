const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(addingBattery, 0)


                       //(accumulator, element, index, array)
function addingBattery(accumulator, element){
    const value = accumulator + element
        return value 
}