const moment = require('moment')
const xxx = require('./sample')

jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z') 
});

it('test date', () => {
  //const xxx = require('./sample') //ここで読み込むとうまくいかない
  expect(xxx()).toBe(1577836800) // `date +%s -d '2020-01-01T00:00:00Z'`

  // ここまでのrequireによる読込キャッシュを削除する
  jest.resetModules()
  // jest.mockによる定義を削除する
  jest.unmock('moment')

  const xxx2 = require('./sample')
  expect(xxx2()).not.toBe(1577836800)
})

