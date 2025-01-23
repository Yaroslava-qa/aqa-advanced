const car1 = {
    brand: "BMW",
    model: "X5",
    year: 2008
  }
  const car2 = {
    brand: "BMW",
    model: "X6",
    owner: 2012
  }
  const car3 = {...car1,...car2}
  console.log(car3)