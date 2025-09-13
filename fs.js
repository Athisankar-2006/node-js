// fs- file system

const fs=require('fs')

//mkdir (create a folder )

// if (! fs.existsSync('./docs')){


// fs.mkdir('./docs',(err)=>{
//     if (err){
//         console.log(err.message)
//     }
//     else{
//       console.log("folder created")  
//     }
    
// })

// }


//this function should has 3 argument (create a file inside the folder and write in that)

// fs.writeFile('./docs/file.txt','this is second argument',(err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log('file written')
//     }
// })


//read the file (call back function must)

// if (fs.existsSync('./docs/file.txt')){

//     fs.readFile('./docs/file.txt',(err,data)=>{
//     if(err){
//         console.log(err,message)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// }


//delete  a file

if(fs.existsSync('./docs/file.txt')){
    fs.unlink('./docs/file.txt',(err)=>{
        if (err){
            console.log(err)
        }
        else{
            console.log("file deleted")
        }
    })
}

//delete a folder

if (fs.existsSync('./docs')){

fs.rmdir('./docs',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("folder deleted")
    }
})

}

