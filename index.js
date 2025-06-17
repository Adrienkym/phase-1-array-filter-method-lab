const findMatching = (drivers, search) =>
  drivers.filter((driver) =>
    driver.toLowerCase().includes(search.toLowerCase())
  );
//filter(...): loops through the list and only keeps names that match
//toLowerCase(): makes both the name in the array and the search term lowercase so the match ignores capital letters

const fuzzyMatch = (drivers, search) => {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(search.toLowerCase())
  );
};
//startsWith(): checks if the name starts with the search term, ignoring case
//filter(...): loops through the list and only keeps names that match

const matchName = (drivers, search) => {
  return drivers.filter((driver) => driver.name === search);
};
//filter(...): loops through the list and only keeps names that match
//===: checks if the name matches exactly, including case
