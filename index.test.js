const holaMundo = require('./index');

test('Comprobacion del mensaje de saludo', () => {
  expect(holaMundo()).toBe('holaMundo');
});
