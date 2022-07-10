const ex1 = () => {
    const array = [1, '2', 3,'test', 1.2];
    console.log(countNumbers(array));
}
const ex2 = () => {
    const array = [12, 55, "2", 22, 11, true];
    console.log(minNumber(array));

}
 const ex3 = () => {
    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));
    
 }
 const ex4 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
    
 }
 const ex5 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    countIt(array);

 }
 const ex6 = () => {
  let array = ["this", "is", 1, 3, 2.1, "a", "test"];
  let result = countItems(array);
  console.log("Number of Integers: " + result.numIntegers)
  console.log("Number of Decimal Numbers: " + result.numDecimals)
  console.log("Number of Strings: " + result.numStrings)
 }
 const ex7 = () => {
  let person1 = { name: "Alice", age: 22 }
  let person2 = { name: "Bob", age: 21 }
  let person3 = { name: "Charlie", age: 23 }
  const person = [];
  person.push(person1);
  person.push(person2);
  person.push(person3);
  person.sort(function(a,b)  {return a.age - b.age});
  console.table(person);
 }
 const ex8 = () => {
console.log(countOver20(personArray)) 
}
  class person {
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
  }
  const p1 = new person("Alice", 11)
  const p2= new person("Bob", 22)
  const p3 = new person("Charlie",33)
  let personArray = [];
  personArray.push(p1);
  personArray.push(p2)
  personArray.push(p3)

countOver20 = (personArray) =>{
  let retval=0;
  for(const Person of personArray){
   //for(let i=0; i< personArray.length;i++){
  if(Person.age>20){
    retval++
  }
}
  return retval
}
const ex9 = () => {
  let item1 = { quantity: 1, cost: 1.00 }
  let item2 = { quantity: 2, cost: 2.00 }
  let item3 = { quantity: 3, cost: 3.00 }

 let array = [];
  array.push(item1);
  array.push(item2);
  array.push(item3);
  console.log(calculateTotal(array))
}
  const calculateTotal = (array) => {
    let total = 0;
    for (const item of array) {
      total += item.quantity * item.cost
    }
    return total;
  }
  const ex10 = () => {
    let usageData = [
      { userId: 1111, minutes: 10.0 },
      { userId: 2222, minutes: 20.0 },
      { userId: 3333, minutes: 30.0 }
  ]
  
  let person = { userId: 3333, fullName: "Charlie" }
  let result = calcCellBillForPerson(usageData, person)
  console.log(result)
  }
  const calcCellBillForPerson = (array, obj) =>{
    let perMinCharge = 0.1;
    let result = 0;
     for(let i of array) {
       if(i.userId = obj.userId) {
         result = {
          'userId': i.userId,
          'fullName': obj.fullName,
          'minutes': i.minutes,
          'perMinuteCharge': perMinCharge,
          'charge': (i.minutes * perMinCharge)
        }
         }
       }
       return result;
     }
 //ex:1
const countNumbers = (array) => {
    let retval = 0;
         for(let i = 0; i < array.length; i++){
         if(typeof(array[i])=='number')
         if(array[i]%1 !=0 )
         retval++;
         }
    return retval;
 }
 //ex:2
 const minNumber = (array) => {
     let number = array[0]
     for(let i = 0; i < array.length; i++){
     if(typeof(array[i])=='number')
     if(array[i]<number)
     return array[i];
 }
 }
//ex.3
 const shortestString = (array) => {
        let shortestString = array[0];
        for(let i = 0; i < array.length; i++) {
        if(array[i].length < shortestString.length)
        shortestString = array[i]
        }
        return shortestString;
    }
    //ex.4
        const countLetters = (string) => {
        const newArr = string.map(charFunction);
        const count = newArr.reduce(countChar, 0);
 
        function charFunction(num) {
          return num.toString();
        }
       function countChar(total, num) {
         return total  + num.length;
       }
     return count;
     }
//ex:5
   const countIt = (array) => {
      console.log(countIntegerNumbers (array));
      console.log(countDecimalnumbers(array));
      console.log(countStrings(array));
   }
    const countIntegerNumbers = (array) => {
     let retval=0;
     for(let i=0; i< array.length; i++){
      if(typeof(array[i]) == 'number' && array[i] % 1 ==0)
       retval++
     }
     return retval;
   }
    const countDecimalnumbers = (array) => {
      let retval = 0;
     for (let i of array)
     if (typeof i === "number" && !Number.isInteger(i)) {
      retval++;
    }
    return retval;
}
      const countStrings = (array) => {
        let strings = 0;
        for (let i of array)
          if (typeof i === "string") {
            strings++;
          }
        return strings;
      }
//ex:6 
      const countItems = (array) => {
        let resultObj = { numStrings:0, numIntegerNumbers:0, numDecimalNumbers:0}
        resultObj.numIntegers = countIntegerNumbers(array);
        resultObj.numDecimals = countDecimalnumbers(array);
        resultObj.numStrings = countStrings(array);
        return resultObj;
      }
         
 const main = async () => {
    
//ex1();
//ex2();
//ex3();
//ex4();
//ex5();
//ex6();
//ex7();
//ex8();
//ex9();
ex10();
}

main();
