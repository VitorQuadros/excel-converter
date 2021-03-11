const Reader = require("./classes/Reader");
const Processor = require("./classes/Processor");
const Table = require("./classes/Table");

const reader = new Reader();


async function main() {
    const data = await reader.read("./test.csv");
    const processedData = Processor.process(data);
    const table = new Table(processedData);
    console.log(table.rows);
}

main();