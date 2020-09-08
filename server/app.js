const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const converter = (name, text, id) => ({name, text, id})

io.on('connection', socket => {

  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback('Данные некорректны')
    }
    socket.join(data.room)
    callback({userId: socket.id})
    socket.emit('newMessage', converter('admin', `Добро пожаловать, ${data.name}!`))
    socket.broadcast.to(data.room).emit('newMessage', converter('admin', `Пользователь ${data.name} в здании!`))
  })
})

module.exports = {
  app,
  server
}
