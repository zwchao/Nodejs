module.exports = {
    port: 3000,
    session: {
        secret: 'newbolg',
        key: 'newblog',
        maxAge:2592000000
    },
    mongodb: 'mongodb://localhost:27017/newblog'//newblog 为db名
}