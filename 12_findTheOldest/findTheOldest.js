const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let oldestAge = -Infinity;
    let oldestPerson = null;
  
    for (let person of people) {
      const birthYear = person.yearOfBirth;
      const deathYear = person.yearOfDeath || currentYear;
      const age = deathYear - birthYear;
  
      if (age > oldestAge) {
        oldestAge = age;
        oldestPerson = person;
      }
    }
  
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
