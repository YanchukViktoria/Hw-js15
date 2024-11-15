const users = [
    { name: "John", balance: 1000, friends: ["Alice", "Bob"], skills: ["JavaScript", "HTML", "CSS"] },
    { name: "Alice", balance: 500, friends: ["John", "Charlie"], skills: ["JavaScript", "React", "Node.js"] },
    { name: "Bob", balance: 700, friends: ["John"], skills: ["Python", "Django"] },
    { name: "Charlie", balance: 300, friends: ["Alice"], skills: ["JavaScript", "Angular"] }
];

/* 1.1 */

let total = 0;

function countBalance(user) {
    user.forEach((el) => total += el.balance);
    console.log(total);
}

countBalance(users);

/* 1.2 */

function isFriend(usesrs, friendName) {
    usesrs.map((user) => {if(user.friends.includes(friendName)) { console.log(user.name)} })
}

isFriend(users, "John");

/* 1.3 */

function numberOfFriends(users) {
    return users.slice().sort((a,b) => b.friends.length - a.friends.length ).map(user => user.name)
}

console.log(numberOfFriends(users));

/* 1.4 */

let skillsArr = [];

function sortSkills(users) {
    users.forEach((user) => {
        user.skills.forEach((skill) => {
            if (!skillsArr.includes(skill)){
                skillsArr.push(skill);
        }
    })
    })
    skillsArr.sort();
    console.log(skillsArr);
};

sortSkills(users)