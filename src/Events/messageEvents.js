const userServices = require('../Services/userServices');
const { io } = require('../config/config');

const handleMessageEvents = (socket) => {
    socket.on('message', (data) => {
        const toSocketid = userServices.getSocketid(data.toUser);
        if (toSocketid) {
            io.to(toSocketid).emit('message', data);
        }
        else {
            console.log(`Receiver ${data.toUser} is not online`);
        }
    });
    socket.on('chatroom', (data) => {
        const toSocketid = userServices.getSocketid(data.users[1].id);
        if (toSocketid) {
            io.to(toSocketid).emit('chatroom', data);
        }
        else {
            console.log(`Receiver ${data.users[1].id} is not online`);
        }
    });
    socket.on('chatroomRemoved', (data) => {
        const toSocketid = userServices.getSocketid(data.toUser);
        if (toSocketid) {
            io.to(toSocketid).emit('chatroomRemoved', data.chatroomid);
        } 
        else {
            console.log(`Receiver ${data.toUser} is not online`);
        }
    });
}

module.exports = handleMessageEvents;