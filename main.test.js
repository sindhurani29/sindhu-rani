QUnit.module('myFunction MODULE', {})

QUnit.test('TEST myFunction (aysnc)', async assert => {
  assert.expect(2) // expect two async tests
  const ans = await myFunction()
  
  console.info(`FETCHED ${cel} characters: ${ans}`)
  assert.notEqual(0, cel, 'celcius is not zero')
  assert.notEqual(far, 'No value for you', 'wrong answer')
})