const PORT = process.env.PORT || 5000;
const server = require('./src/app')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});

const a = 10;

const start = async (req, res) => {
  try {
    await server.listen(PORT);
  } catch (err) {
    server.log.error(err);
  }
};

start();
