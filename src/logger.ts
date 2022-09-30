export type Logger = {
    log: (msg: any) => void
}

export class SimpleLogger {
    log(msg: any) {
        console.log(`${new Date().toISOString()} ${msg}`)
    } 
}

export class StructuredLogger {
    constructor(private keys: Record<string, string>) {}

    log(msg: any) {
        console.log({ ...this.keys, timestamp: new Date().toISOString(), message: msg, });
    }
}