const { io } = require('../config/config');
const notificationServices = require ('../Services/notificationServices');

function handleLike(req, res) {
    const {notification} = req.body;
    const data = notificationServices.handleLike(
        notification.id,
        notification.fromUser, 
        notification.toUser, 
        notification.post, 
        notification.dateTime,
        notification.message,
    );
    if (data) {
        io.to(data.toSocketid).emit('notification', data.notification);
        res.status(200).json({ message: 'Notification sent' });
    } else {
        res.status(400).json({ error: 'Unable to send notification' });
    }
}

function handleComment(req, res) {
    const {notification} = req.body;
    const data = notificationServices.handleComment(
        notification.id,
        notification.fromUser, 
        notification.toUser, 
        notification.comment, 
        notification.post, 
        notification.dateTime,
        notification.message
    );
    if (data) {
        io.to(data.toSocketid).emit('notification', data.notification);
        res.status(200).json({ message: 'Notification sent' });
    } else {
        res.status(400).json({ error: 'Unable to send notification' });
    }
}

function handleFollow(req, res) {
    const {notification} = req.body;
    const data = notificationServices.handleFollow(
        notification.id,
        notification.fromUser, 
        notification.toUser, 
        notification.dateTime,
        notification.message
    );
    if (data) {
        io.to(data.toSocketid).emit('notification', data.notification);
        res.status(200).json({ message: 'Notification sent' });
    } else {
        res.status(400).json({ error: 'Unable to send notification' });
    }
}

module.exports = {
    handleLike,
    handleComment,
    handleFollow
}