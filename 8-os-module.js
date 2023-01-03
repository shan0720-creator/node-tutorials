// GLOBALS - NO WINDOW
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env  where the program is being executed

//console.log(__dirname)
//setInterval(()=>{
  //  console.log('hello world')
//},1000)

const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user);
// method returns the system update in second
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)