const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
batteryBatches;

const totalBatteries = batteryBatches.reduce((batteryCounter, battery) => batteryCounter + battery, 0)



//let totalBatteries= batteryBatches.reduce((acc,val) => acc + val ,0)