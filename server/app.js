const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const users = require('./users')()

const converter = (name, text, id) => ({name, text, id})

io.on('connection', socket => {

  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback('Данные некорректны')
    }
    socket.join(data.room)
    users.remove(socket.id)
    users.add({
      id: socket.id,
      name: data.name,
      room: data.room,
    })
    callback({userId: socket.id})
    socket.emit('newMessage', converter('admin', `Добро пожаловать, ${data.name}!`))
    socket.broadcast.to(data.room).emit('newMessage', converter('admin', `Пользователь ${data.name} в здании!`))
  })

  socket.on('createMessage', (data, callback) => {
    if (!data.text) return callback('Текст сообщение не может быть пустым')
    const user = users.get(data.id)
    if (user) {
      io.to(user.room).emit('newMessage', converter(user.name, data.text, data.id) )
    }
    callback()
  })
})

module.exports = {
  app,
  server
}
