const Reader = require("./classes/Reader");

const reader = new Reader();

async function main() {
    const data = await reader.read("./test.csv");
    console.log(data);
}

main();