const { app, server, io } = require('./src/config/config');
const notificationRoutes = require('./src/Routes/notificationRoutes');
const userServices = require('./src/Services/userServices');

app.use('/notifications', notificationRoutes);

io.on('connection', (socket) => {
    socket.on('login', (userid) => {
        userServices.handleLogin(userid, socket.id);
    });

    socket.on('logout', (userid) => {
        userServices.handleDisconnect(userid);
    });
});

server.listen(3001, () => {
    console.log(`Server is running on http://localhost:${3001}`);
});
