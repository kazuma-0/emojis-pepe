const getFiles = require("node-recursive-directory");
const fs = require("fs");
// const repoName = "/emoji-pays/";
(async()=>{
    data = await getFiles("./emojis"); 
    // console.log(data)
    let newA = data.map(x=>{
        return  x.slice(x.indexOf("/emojis/"));
    })
    const writeArray = [];
    // console.log(newA)
    newA.forEach(element => {
        // console.log(element)
        writeArray.push({
            emoji: element
        })
    });
    // console.log(JSON.stringify(writeArray))
    fs.writeFileSync("./emojis.json", JSON.stringify(writeArray));
})()

