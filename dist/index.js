"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const console_1 = require("console");
// Get the current uptime of the app in milliseconds
const uptime = process.uptime();
// Convert the uptime to seconds
const uptimeInSeconds = uptime * 1000;
// Get the current system load
const load = os_1.default.loadavg();
// Get the total memory available on the system
const totalMemory = os_1.default.totalmem();
// Get the amount of free memory on the system
const freeMemory = os_1.default.freemem();
// Calculate the percentage of free memory
const freeMemoryPercentage = (freeMemory / totalMemory) * 100;
//netmask   -   netmask address
//family    -   IPv4 or IPv6
//internal  -   true or false, if the address is internal or not
//Network infos
const networkInterfaces = os_1.default.networkInterfaces();
//stringify the object and get the ip address
const ipAddress = JSON.stringify(networkInterfaces.lo0 ? networkInterfaces.lo0[0].address : "Localhost");
console.log(`------------------------------------`);
console.log(`IP Address: ${ipAddress} `);
//Clustering info
const cpus = os_1.default.cpus();
const numCPUs = cpus.length;
console.log(`------------------------------------`);
console.log(`Number of CPUs: ${numCPUs} `);
console.log(`------------------------------------`);
//array of those values
const data = [
    { 'Uptime': `${uptimeInSeconds} ms` },
    { 'Load': load },
    { 'Free Memory': `${freeMemoryPercentage.toFixed(2)} % ` },
];
// Print the data to the console
(0, console_1.table)(data);
