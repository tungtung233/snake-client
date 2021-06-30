let connection; //everything inside of conn

const setupInput = function (conn /*conn contains all files from "connect" in client.js */ ) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (data) { //data is the user's keystroke
  if (data === '\u0003') {
    process.exit();
  } else if (data === 's') {
    connection.write(`Move: down`)
  } else if (data === 'w') {
    connection.write(`Move: up`)
  } else if (data === 'a') {
    connection.write(`Move: left`)
  } else if (data === 'd') {
    connection.write(`Move: right`)
  } else if (data === '1') {
    connection.write('Say: WEEEEEE')
  } else if (data === '2') {
    connection.write('Say: Look at me goooo')
  } else if (data === '3') {
    connection.write('Say: YAY!')
  }
}


module.exports = {
  setupInput
}