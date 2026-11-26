const { test } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app');

test('GET /status deve retornar 200 e status ok', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/status`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.status, 'ok');
    assert.ok(body.timestamp);
  } finally {
    server.close();
  }
});
