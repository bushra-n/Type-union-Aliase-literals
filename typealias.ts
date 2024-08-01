//  topic#1              class 13        Type Alias
type StudentName = string

let studentName:StudentName = "Bushra"
// camel case second word 1st letter is capital, pascal case first and second words 1st letter is capital

type MainCourse = string []

let mainCourse : MainCourse = ["Biryani","Halwapori"]
console.log(mainCourse)

type ChattarPatter = string[]
 
let chattarPatter:ChattarPatter = ["nimco","juices","chips"]

console.log(chattarPatter)

type BooleanArray = boolean[]

// let isPresent : BooleanArray = [true,false,true]

// topic#2         Type Union          use vertical bar |
let rollNumber : string | number = 1234
console.log(rollNumber)

rollNumber = "786"
console.log(rollNumber)
//      Task                    string|boolean|number
let isPresent : string|boolean = "present"
console.log(isPresent)

isPresent = true;
console.log(isPresent)
//  topic#3  type literals      when developers knew the users inputs,he assign values as data type.
let size: "small"| "medium" | "large"
size = "small"
console.log(size)
size = "medium"
console.log(size)
size = "large"
console.log(size)

let trafficLights : "red" |"yellow" | "green"
trafficLights = "red"
console.log (trafficLights)

trafficLights = "yellow"
console.log (trafficLights)

trafficLights = "green"
console.log (trafficLights)
//  objects         key or property = value
let mycar : {
    make:string,model:number,variant:string,isAC: () => boolean ,maxSpeed: () => string
} = {
    make: "toyota",
    model:2024,
    variant:"1800cc",
    isAC: () => true,         // when single statement has to retun, no need to use return keywords and back tick
    maxSpeed: () => {
        return`200`
    }

}
console.log(mycar.make)
console.log(mycar.isAC())
console.log(mycar.maxSpeed())










