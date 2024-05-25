const userServices = require('../Services/userServices');

const handleUserEvents = (socket) => {
    socket.on('login', (userid) => {
        userServices.handleLogin(userid, socket.id);
    });

    socket.on('logout', (userid) => {
        userServices.handleDisconnect(userid);
    });
};

module.exports = handleUserEvents;