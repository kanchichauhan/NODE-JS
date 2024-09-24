const crypto = require('node:crypto');

/* wait for 0 ms - it will be offloaded to libuv
    it was offloaded to libuv and then the main thread (full code) is executed then this code will be pushed to V8 once the call stack will be empty
*/
setTimeout(() => {
    console.log('call me right now')
}, 0); // trust issues with timeout

// crypto also managed by libuv (offloaded to libuv)
crypto.pbkdf2Sync('password', 'salt', 5000, 50, 'sha512');
console.log('first key generated'); // choking the v8 engine

console.log('finished');
