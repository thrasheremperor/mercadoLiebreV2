/* const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/productsdb.json', 'utf-8')); */


const fs=require('fs');
const path=require('path');

const parsingFile=(filePath)=>JSON.parse(fs.readFileSync(filePath,'utf-8'));

const productsPath=path.join(__dirname, './productsdb.json');

module.exports={
	getProducts:()=> parsingFile(productsPath)
};