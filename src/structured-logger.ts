export default class StructuredLogger {
    constructor(private keys: Record<string, string>) {}

    log(msg: any) {
        const message = typeof msg === 'string' ? msg : JSON.parse(msg);
        console.log({ ...this.keys, message, });
    }
}