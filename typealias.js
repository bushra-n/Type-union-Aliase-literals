"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let studentName = "Bushra";
let mainCourse = ["Biryani", "Halwapori"];
console.log(mainCourse);
let chattarPatter = ["nimco", "juices", "chips"];
console.log(chattarPatter);
// let isPresent : BooleanArray = [true,false,true]
// topic#2         Type Union          use vertical bar |
let rollNumber = 1234;
console.log(rollNumber);
rollNumber = "786";
console.log(rollNumber);
//      Task                    string|boolean|number
let isPresent = "present";
console.log(isPresent);
isPresent = true;
console.log(isPresent);
//  topic#3  type literals      when developers knew the users inputs,he assign values as data type.
let size;
size = "small";
console.log(size);
size = "medium";
console.log(size);
size = "large";
console.log(size);
let trafficLights;
trafficLights = "red";
console.log(trafficLights);
trafficLights = "yellow";
console.log(trafficLights);
trafficLights = "green";
console.log(trafficLights);
//  objects         key or property = value
let mycar = {
    make: "toyota",
    model: 2024,
    variant: "1800cc",
    isAC: () => true, // when single statement has to retun, no need to use return keywords and back tick
    maxSpeed: () => {
        return `200`;
    }
};
console.log(mycar.make);
console.log(mycar.isAC());
console.log(mycar.maxSpeed());
