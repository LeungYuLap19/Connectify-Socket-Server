const onlineUsers = {};

function handleLogin(userid, socketid) {
    onlineUsers[userid] = socketid;
    console.log(`User ${userid} ${socketid} connected and added to online users`);
}

function handleDisconnect(userid) {
    if (onlineUsers[userid]) {
        delete onlineUsers[userid];
        console.log(`User ${userid} disconnected`);
    }
}

module.exports = {
    onlineUsers,
    handleLogin,
    handleDisconnect,
}