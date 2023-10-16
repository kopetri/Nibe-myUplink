module.exports = ({ router, loxberry }) => {
  router.get('/', async (req, res) => {
    const pluginData = await loxberry.system.pluginData();
    const path = await loxberry.system.expressPath();
    return res.render('index', { path, title: pluginData.title });
  });

  return router;
};
