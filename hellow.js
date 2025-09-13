console.log("hellow world")


const haii=(hname)=>{
    console.log(`name is ${hname}`)
}

// console.log(haii(athi))

//gllobal object 

console.log(global)

setTimeout(()=>{
    console.log("this is a time function")
    clearInterval(intfunc)
},5000)

const intfunc=setInterval(()=>{
    console.log("this is a time function")
},1000)