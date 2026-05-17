const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req , res , next) => {

    const authHeader = req.headers['authorization'];

    console.log('Headers Recevied : ', req.headers);

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
       return res.status(401).json({ message : "No Token provided" })
    }

    const token = authHeader.split(' ')[1];

    if(!token) {
       return res.status(401).json({ message : "Invalid token format" });
    }
    
    try{
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch(err){
        console.error(err.message);
        return res.status(401).json({ message : "Token is invalid or expired" });
    }
};

module.exports = verifyToken;