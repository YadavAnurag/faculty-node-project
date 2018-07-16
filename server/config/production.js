module.exports = {
  //disable logging for production
  logging: false,
  db: {
    url: process.env.MONGOLAB_URI || "mongodb://localhost:27017/dssir"
  }
}
