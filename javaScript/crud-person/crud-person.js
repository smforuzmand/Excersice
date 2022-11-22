const persons = [];


const createPerson = (person) => {

    persons.push(person)
}

const printAll = () => {
    console.log(persons)
}

const finfdById = (id) => {
    return persons.find((person) => person.id === id)
}


const deleteById = (id) => {

    const index = persons.findIndex((person) => person.id === id);
    if (index >= 0) {
        persons.splice(index)
    } else {
        throw new Error("idd not found")
    }



}


const person1 = {
    id: "1",
    name: "Simon",
    lastName: "Elbrink",
    email: "simon@lexicon.se",
    title: "Teacher"
}

const person2 = {
    id: "2",
    name: "Marcus",
    lastName: "Gudmunsson",
    email: "marcus@lexicon.se",
    title: "Administrator"
}

createPerson(person1)
createPerson({
    id: "2",
    name: "Marcus",
    lastName: "Gudmunsson",
    email: "marcus@lexicon.se",
    title: "Administrator"
})

// printAll();
// console.log(finfdById("2"))

// deleteById("211");
try {
    deleteById(14231532)
} catch (e) {
    console.log(e);
}



printAll();