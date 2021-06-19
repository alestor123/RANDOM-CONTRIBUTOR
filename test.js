const tap = require('tap')
const random = require('./App')

tap.test('main', async t => {
  for (let index = 0; index < 30; index++) t.equal(typeof await random('nodejs', 'node', 0, process.env.GHTOKEN), 'object')
}
)
