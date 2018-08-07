// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, hometown) {
  const driversFromHometown = drivers.filter(function (driver) {
    return hometown === driver.hometown;});
  return logDriverNames(driversFromHometown);
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
    return (driver1.name).localeCompare(driver2.name);
  })
}

function totalRevenue(drivers) {
  const driverRevenues = function (accumulator, driver) {
    return accumulator + driver.revenue;
  }
  return drivers.reduce(driverRevenues, 0);
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers) / drivers.length)
}


//
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
//
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10
//
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15
