const userServices = require('../Services/userServices');

function handleLike(id, fromUser, toUser, post, dateTime, message) {
    const toSocketid = userServices.getSocketid(toUser);
    if (toSocketid) {
        return { 
            toSocketid: toSocketid,
            notification: {
                id: id,
                fromUser: fromUser,
                post: post,
                dateTime: dateTime,
                message: message
            }
        };
    }
    else {
        console.log(`Receiver ${toUser} is not online`);
        return null;
    }
}

function handleComment(id, fromUser, toUser, comment, post, dateTime, message) {
    const toSocketid = userServices.getSocketid(toUser);
    if (toSocketid) {
        return {
            toSocketid: toSocketid,
            notification: {
                id: id,
                fromUser: fromUser,
                comment: comment,
                post: post,
                dateTime: dateTime,
                message: message
            }
        };
    }
    else {
        console.log(`Receiver ${toUser} is not online`);
        return null;
    }
}

function handleFollow(id, fromUser, toUser, dateTime, message) {
    const toSocketid = userServices.getSocketid(toUser);
    if (toSocketid) {
        return {
            toSocketid: toSocketid,
            notification: {
                id: id,
                fromUser: fromUser,
                dateTime: dateTime,
                message: message
            }
        };
    }
    else {
        console.log(`Receiver ${toUser} is not online`);
        return null;
    }
}

module.exports = {
    handleLike,
    handleComment,
    handleFollow
}