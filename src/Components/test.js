const shoes = [
  {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 150,
    size: [7, 8, 9, 10, 11],
    color: "Black/White",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 180,
    size: [6, 7, 8, 9, 10],
    color: "White",
  },
  {
    id: 3,
    name: "Puma RS-X³ Puzzle",
    brand: "Puma",
    price: 110,
    size: [8, 9, 10, 11, 12],
    color: "Multi",
  },
  {
    id: 4,
    name: "New Balance 574",
    brand: "New Balance",
    price: 90,
    size: [6, 7, 8, 9],
    color: "Grey",
  },
  {
    id: 5,
    name: "Converse Chuck Taylor",
    brand: "Converse",
    price: 60,
    size: [5, 6, 7, 8, 9, 10],
    color: "Black",
  }
];


 const newShoe=  [...shoes].sort((a,b)=> a.price-b.price)
console.log(newShoe)

console.log(shoes)