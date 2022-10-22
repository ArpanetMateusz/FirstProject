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

let my_Variable = {
    "people": [
        {"firstName": "Mateusz", "secondName": "Kuska"},
        {"firstName": "Mikołaj", "secondName": "Kuska"},
        {"firstName": "Nikodem", "secondName": "Kuska"}
    ],
    "another": "somebody",
    "text": "Wiem, że nic nie wiem"
}

console.log(my_Variable.people[0])