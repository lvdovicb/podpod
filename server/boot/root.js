'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

  
};
module.exports = function(app) {
  
  var mysqlDs = app.dataSources.MysqlDb;
  var listener = app.models.listener;
  var favorites = app.models.favorites;
  

  // first autoupdate the `Author` model to avoid foreign key constraint failure
  mysqlDs.autoupdate('listener', function(err) {
    if (err) throw err;
    console.log('\nAutoupdated table `listener`.');

    mysqlDs.autoupdate('favorites', function(err) {
      if (err) throw err;
      console.log('\nAutoupdated table `favorites`.');
      // at this point the database table `Book` should have one foreign key `authorId` integrated
    });
  });

};