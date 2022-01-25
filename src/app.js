const fastify = require('fastify');

const build = (opts = {}) => {
  const app = fastify(opts);

  app.get('/', async (req, res) => {
    res.code(200).send({ Hello: 'World' });
  });
  return app;
};

module.exports = build;
