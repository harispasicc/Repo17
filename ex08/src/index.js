var users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 24,
        gender: 'male'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 5,
        gender: 'female'
    },
    {
        firstName: 'Jim',
        lastName: 'Carrey',
        age: 54,
        gender: 'male'
    },
    {
        firstName: 'Kate',
        lastName: 'Winslet',
        age: 40,
        gender: 'female'
    }
];

function getUsers(){
    var output = "";
    output=users.map(function(user){
        return `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
    }
    )
    console.log(output)

    return output;
}

function findUser(lastName, gender) {
    try {
        var user = users.map(function(user){
            return `${user.lastName} ${user.gender}`;
        });
        console.log(user);
        var isFindUser = `${firstName} is ${age}, ${gender} `;
        console.log(isFindUser)
        return isFindUser;
    } catch (error) {
        console.error("Cannot read property 'firstName' of undefined")
    }
}

getUsers();
findUser();

module.exports = findUser;