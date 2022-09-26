const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(process.cwd(),"/src/data/contents.json")

async function postNewContent(data){
	const contentData = await fs.readFile(filePath, "utf8");
	const parsedContent = JSON.parse(contentData);
	parsedContent.push(data);
	await fs.writeFile(filePath, JSON.stringify(parsedContent));
}



module.exports = {
    postNewContent,
    
}
