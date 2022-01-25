const build = require('../../src/app');

let app;

describe('Root Route', () => {
  beforeEach(() => {
    app = build();
  });
  afterEach(() => {
    app.close();
  });

  it('The Code returned must be 200 while root route is running', async () => {
    const res = await app.inject({
      url: '/',
    });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ Hello: 'World' });
  });
});
