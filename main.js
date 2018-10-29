//primative types
let myFavColor = "green" //string
let myFavNum = 22 //number
let isMale = true // bool

//reference types
let jake = {
  name: "Jake",
  age: 32,
  favoriteColor: "green",
  male: true,
  friends: [],
  // eyes: {
  //   left: {
  //     color: "brown",
  //     vision: "20/20"
  //   },
  //   right: {
  //     color: "brown",
  //     vision: "20/20"
  //   }
  // }
}

let porter = {
  name: "Porter",
  age: 84,
  favoriteColor: "blue",
  male: true,
  friends: [jake]
} // object

//array (aka lists or collections)
let humans = [
  jake,
  porter,
  {
    name: "Mark",
    age: 14,
    favoriteColor: "red",
    male: true,
    friends: [jake, porter]
  }, {
    name: "Maddi",
    age: 17,
    favoriteColor: "Yellow",
    male: false,
    friends: [jake, porter],
    pets: [
      { name: "fido", speak: "woof", type: "dog" },
      { name: "garfield", speak: "lasagna", type: "cat" }
    ]
  }]

humans["3"].friends.push(humans["2"])

let story1 = `my name is ${humans["3"].name} and my favorite color is ${humans["3"].favoriteColor}`

let story2 = "my name is " + jake.name + " and my favorite color is " + jake.favoriteColor
console.log(story1)