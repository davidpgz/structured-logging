export default class Logger {
    log(msg: any) {
        console.log(`${new Date().toISOString()} ${msg}`)
    } 
}