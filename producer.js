var fs = require('fs');
var kue = require('kue');
var jobs = kue.createQueue({prefix: 'history'});
var JSONStream = require('JSONStream');
var es = require('event-stream');
var fileName = 'production.json';

var getStream = function () {
  var jsonData = fileName,
    stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
    parser = JSONStream.parse('*');
  return stream.pipe(parser);
};

getStream()
  .pipe(es.mapSync(function (data) {
    var _data = {
      index: "index",
      type: "type",
      body: data
    };
    console.log("CREATED");
    jobs.create('import', _data)
      .delay(50)
      .removeOnComplete(true)
      .save();
  }));