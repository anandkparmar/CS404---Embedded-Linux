// Parmar Anandkumar K
// B12021
// CSE, 4th year

#!/usr/bin/env node

var b = require('bonescript');
var port = '/dev/i2c-2'; 
var command = 0x68;
var time = 1000; 

b.i2cOpen(port, command);
b.i2cWriteBytes(port, 0x6b, [0]);

setInterval(read_sensor, time)

function read_sensor() {
	b.i2cReadBytes(port, 0x3b, 14, shifting);
}

function shifting(x) {
	var gyro;
	if(x.event === 'return') 
	{
		gyro = {
			temp:{
    			x: (((x.return[6]<<8 | x.return[7])<<16)>>16)
			}
		}
	};
	console.log(gyro);
}