let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let rangePool = [requiredRange1, requiredRange2, requiredRange3];

for (let i = 0; i < rangePool.length; i++) {
    console.log("choice", i, "from", rangePool[i][0], "to", rangePool[i][1]);
}

const readline = require('readline');
let x = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
x.question("What's your choice: ", function(choice) {
    for (i = 0; i < courses.length; i ++) {
        if (courses[i].prices[0] >= rangePool[choice][0] && 
            courses[i].prices[1] <= rangePool[choice][1]) {

            console.log(courses[i])
        };
    };
    x.close();
});
