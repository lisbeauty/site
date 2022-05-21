exports.Env = {
    server: {
        port: process.env.API_PORT,
        host: process.env.API_HOST,
        protocol: process.env.API_PROTOCOL,
        version: process.env.API_VERSION,
        path: process.env.PWD
    },
    tel: {
        token: process.env.TELE,
        id: process.env.TELE_ID
    },
    db: {
        url: process.env.MONGO_URL,
        user: process.env.MONGO_USER,
        pwd: process.env.MONGO_PWD
    },
};