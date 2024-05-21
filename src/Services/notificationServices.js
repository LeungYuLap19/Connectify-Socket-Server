const userServices = require('../Services/userServices');

function getSocketid(userid) {
    if(userServices.onlineUsers.hasOwnProperty(userid)) {
        return userServices.onlineUsers[userid];
    }
    return null;
}

function handleLike(fromUser, toUser, post, dateTime) {
    const toSocketid = getSocketid(toUser);
    if (toSocketid) {
        return { 
            toSocketid: toSocketid,
            notification: {
                fromUser: fromUser,
                post: post,
                dateTime: dateTime,
            }
        };
    }
    else {
        console.log(`Receiver ${toUser} is not online`);
        return null;
    }
}

function handleComment(fromUser, toUser, comment, post, dateTime) {
    const toSocketid = getSocketid(toUser);
    if (toSocketid) {
        return {
            toSocketid: toSocketid,
            notification: {
                fromUser: fromUser,
                comment: comment,
                post: post,
                dateTime: dateTime,
            }
        };
    }
    else {
        console.log(`Receiver ${toUser} is not online`);
        return null;
    }
}

function handleFollow(fromUser, toUser, dateTime) {
    const toSocketid = getSocketid(toUser);
    if (toSocketid) {
        return {
            toSocketid: toSocketid,
            notification: {
                fromUser: fromUser,
                dateTime: dateTime,
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