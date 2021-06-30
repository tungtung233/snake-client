const net = require("net");
const { IP, PORT, nickname } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('data', (data) => {
    console.log('Message from client: ', data)
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write(`Name: ${nickname}`)
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

connect()


module.exports = {
  connect
}


// stdin.on('data', (message) => {
//   setInterval(() => {conn.write(`Move: ${message}`)}, 500)
// })
