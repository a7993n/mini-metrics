"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const { Console } = require('console');
const { Transform } = require('stream');
function table(input) {
    const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk); } });
    const logger = new Console({ stdout: ts });
    logger.table(input);
    const table = (ts.read() || '').toString();
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
exports.table = table;
