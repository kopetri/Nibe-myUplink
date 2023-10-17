const path = require('path');
module.exports = ({ router, expressStatic, loxberry }) => {
  router.get('/', async (req, res) => {
    const pluginData = await loxberry.system.pluginData();
    const path = await loxberry.system.expressPath();
    console.log("auth express");
    return res.render('admin', { path, title: pluginData.title });
  });

  router.get('/auth', async (req, res) => {
    const pluginData = await loxberry.system.pluginData();
    const path = await loxberry.system.expressPath();
    console.log("auth express");
    return res.render('oauth', { path, title: pluginData.title });
  });

  router.use('/assets', expressStatic(path.resolve(__dirname, 'assets')));
  return router;
};
