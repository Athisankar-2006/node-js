const fs=require('fs')


const readstream= fs.createReadStream('./docs/hugefile.txt',{encoding: 'utf8'})
const writeFile=fs.createWriteStream('./docs/copyhugefile.txt')



// readstream.on('data', (buffer) =>{
//     writeFile.write('\n new buffer \n')
//     writeFile.write(buffer);

// })

readstream.pipe(writeFile)