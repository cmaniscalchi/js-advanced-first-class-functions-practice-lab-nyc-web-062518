function logDriverNames(drivers) {
  return drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  return logDriverNames(drivers.filter(driver => driver.hometown === hometown))
}

function driversByRevenue(drivers) {
  return drivers.slice().sort((a, b) => a.revenue - b.revenue)
}

function driversByName(drivers) {
  return drivers.slice().sort((a, b) => (a.name).localeCompare(b.name))
}

function totalRevenue(drivers) {
  return drivers.reduce((accumulator, driver) => (accumulator + driver.revenue), 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
