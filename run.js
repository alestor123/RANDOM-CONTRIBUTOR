
const random = require('./App');
(async () => {
  const data = await random('nodejs', 'node')
  console.log(await data)
})()
