
const random = require('./App');
(async () => {
  const data = await random('nodejs', 'node', 0, process.env.GHTOKEN)
  console.log(data)
})()
