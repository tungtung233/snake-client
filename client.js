const net = require("net");
const stdin = process.stdin

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  conn.on('data', (data) => {
    console.log('Message from client: ', data)
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
  });

  stdin.on('data', function (message){
    conn.write(`Name: ${message}`)
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect