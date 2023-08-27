const messageMiddleware = (req, res, next) => {
    const time = new Date();
    console.log(req.headers);
    const sender = req.headers.sender ;
    const reciever = req.headers.reciever ;
    console.log(new Date().toLocaleString(time.getMinutes()));
    console.log(`x-sender=${sender}`);
    console.log(`x-reciever=${reciever}`);

    req.user = sender

    next();
}

module.exports = messageMiddleware;