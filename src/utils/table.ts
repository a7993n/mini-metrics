const { Console } = require('console');
const { Transform } = require('stream');

export function table(input: any) {
    const ts = new Transform({ transform(chunk: any, enc: any, cb: (arg0: null, arg1: any) => void) { cb(null, chunk) } })
    const logger = new Console({ stdout: ts })
    logger.table(input)
    const table = (ts.read() || '').toString()
    let result = '';
    for (let row of table.split(/[\r\n]+/)) {
        let r = row.replace(/[^┬]*┬/, '┌');
        r = r.replace(/^├─*┼/, '├');
        r = r.replace(/│[^│]*/, '');
        r = r.replace(/^└─*┴/, '└');
        r = r.replace(/'/g, ' ');
        result += `${r}\n`;
        result = result.replace(/(\d+)(\s+)(\S+)/g, '$3');

    }

    console.log(result);
}