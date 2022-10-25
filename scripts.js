// var liczba = 1
// liczba=3

// let liczba = 3
// liczba = 8

// const liczba = 10
// liczba = 6 - nie wolno nadawać innych wartości stałym "const". Jest to błąd

// let my_Variable = 'STRING' - zmienna typu string

// let my_Variable = [1, 2, 'a', 'b']

// let my_Variable = {first_name: 'Mateusz', last_name: 'Kuska', age: 28}
// alert('The winne is '+ my_Variable.first_name+' '+my_Variable.last_name)

// let my_Variable = {"firstName": "Mateusz", "lastName": "Kuska", "age": 28}
// console.log(my_Variable.firstName+my_Variable.lastName+my_Variable.age);   // typ Jason

// let my_Variable = [
//     {"firstName": "Mateusz", "lastName": "Kuska", "age": 28},
//     {"firstName": "Mikołaj", "lastName": "Kuska", "age": 1}]

// console.log(my_Variable[0].firstName)
// console.log(my_Variable[1].firstName)

// let my_Variable = {
//     "people": [
//         {"firstName": "Mateusz", "secondName": "Kuska"},
//         {"firstName": "Mikołaj", "secondName": "Kuska"},
//         {"firstName": "Nikodem", "secondName": "Kuska"}
//     ],
//     "another": "somebody",
//     "text": "Wiem, że nic nie wiem"
// }

// console.log(my_Variable.people[0])


// function my_function(somethink){
//     alert(somethink)
// }

// my_function('yoyoy')

// function multiplication(a, b){

//     return a*b
// }
// let result = multiplication(3,3)
// console.log(result)

// let multiplication = (a, b) => {
//     return a*b
// }

// let multiplication = (a, b) => a * b

// console.log(multiplication(3,4))

// let my_object = {
//     name: 'my_object',
//     multiplication: function(a,b){
//         return a*b
//     },
//     crazy_multiplication: function(a,b){
//         return this.multiplication(a,b)*100
//     }
// }

// console.log(my_object.name)
// console.log(my_object.crazy_multiplication(4,4))

// var my_object = {
//     multiplication: function(a,b){
//         return a*b
//     },
//     multiplication2: (a,b) => {
//         return window.my_object.multiplication (a,b)*100
//     }
// }
// console.log(my_object.multiplication(3,4))
// console.log(my_object.multiplication2(3,4))


// ---------------------------------------------------------


// let cat = 'Adam has a cat'

// console.log(cat.length)
// console.log(cat.search('cat'))
// console.log(cat.replace('cat', 'dog', ))
// console.log(cat.toLocaleLowerCase())
// console.log(cat.toUpperCase())
// console.log(cat.split(' '))


// let ar = ['a','b','c']

// console.log(ar.push('d'), ar) - dodaje na końcu tablicy 
// console.log(ar.shift(), ar) - usowa pierwszy element tablicy
// console.log(ar.unshift('x'), ar) - dodaje element na początku tablicy
// console.log(ar.push('d'), ar)

// let new_Array = ar.forEach((x,y) => {
//     console.log(x, y)
// })

// let newArray = ar.map((x,y) => {
//     return `${x}x`
// })

// console.log(newArray)

// let ar1 = [1,2,3]
// let result1 = ar1.filter((x) => {
//     return x > 1
// })

// console.log(result1)

// let ar = [1,2,3,4]
// let result = ar.reduce((x,y) => x+y
// )

// console.log(result)
