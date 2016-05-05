var elasticsearch = require('elasticsearch');
var kue = require('kue');
var jobs = kue.createQueue({prefix: 'history'});

var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });
jobs.process('import', 4, function (job, done) {
  var data = job.data;
  client.create(data, function (error, response) {
    if (error) {
      done(error)
      console.error(error);
      return;
    } else {
      done();
    }
  });
});
