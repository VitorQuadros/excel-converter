const Reader = require("./classes/Reader");
const Processor = require("./classes/Processor");
const Table = require("./classes/Table");
const HtmlParser = require ("./classes/HtmlParser");

const reader = new Reader();


async function main() {
    const data = await reader.read("./test.csv");
    const processedData = Processor.process(data);
    const table = new Table(processedData);
    const html = await HtmlParser.parse(table);
    console.log(html);
    
}

main();