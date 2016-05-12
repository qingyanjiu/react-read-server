//socket服务端
var io = require('socket.io')();

io.on('connection', function (_socket) {
    console.log(_socket.id + ': connection');
    _socket.on('login', function (name) {
      console.log('用户登录了', name);
      //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
      _socket.name = name;
      _socket.broadcast.emit('login', name);
    });
});

exports.listen = function (_server) {
    return io.listen(_server);
};