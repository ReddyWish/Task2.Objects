const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

function giveTalonsInOrder(people, ordersArr) {
    let result = []

    for (let i = 0; i < people.length; i++) {
        result[ordersArr.indexOf(people[i].id)] = people[i]
    }
    return[result]


}
console.log(giveTalonsInOrder(people, ordersArr))


