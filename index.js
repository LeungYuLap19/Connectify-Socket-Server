const { app, server, io } = require('./src/config/config');
const notificationRoutes = require('./src/Routes/notificationRoutes');
const handleUserEvents = require('./src/Events/userEvents');
const handleMessageEvents = require('./src/Events/messageEvents');

app.use('/notifications', notificationRoutes);

io.on('connection', (socket) => {
    handleUserEvents(socket);
    handleMessageEvents(socket);
});

server.listen(3001, () => {
    console.log(`Server is running on http://localhost:${3001}`);
});
