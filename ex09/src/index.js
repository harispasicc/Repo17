var users =[ 
    {   id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 24,
        gender: 'male'
    },
    {   id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 5,
        gender: 'female'
    },
    {   id: 3,
        firstName: 'Jim',
        lastName: 'Carrey',
        age: 54,
        gender: 'male'
    },
    {   id: 4,
        firstName: 'Kate',
        lastName: 'Winslet',
        age: 40,
        gender: 'female'
    }
]

function getUsers(){
    var output = "";
    output=users.map(function(user){
        return `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
    }
    )
    console.log(output)

    return output;
}

function findUserById(id) {
    try {
        var user = t;
        var isFindUser = `${id} - ${firstName} is ${age}, ${gender} `;
        console.log(isFindUser)
        return isFindUser;
    } catch (error) {
        console.error("Cannot read property 'id'")
    }
}

getUsers();
findUserById();

module.exports = findUserById;