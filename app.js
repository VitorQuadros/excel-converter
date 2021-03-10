const Reader = require("./classes/Reader");
const Processor = require("./classes/Processor");

const reader = new Reader();

async function main() {
    const data = await reader.read("./test.csv");
    const processedData = Processor.process(data);
}

main();