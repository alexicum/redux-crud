var reducer         = require('./start');
var test            = require('tape-catch');
var SI              = require('seamless-immutable');
var config          = {
  key:           'id',
  resourcesName: 'users',
}
var subject     = 'createStart: ';

function getCurrent() {
  return SI([
    {
      id: 1,
      name: 'Blue'
    },{
      id: 2,
      name: 'Red'
    }
  ]);
}


test(subject + 'returns current', function(t) {
  var curr    = getCurrent();
  var created = [{
    name: 'Green'
  }];
  var updated = reducer(config, curr, created);

  t.equal(updated, curr);
  t.end();
});

test(subject + 'can take one record', function(t) {
  var curr    = getCurrent();
  var created = {
    name: 'Green'
  };
  var updated = reducer(config, curr, created);

  t.equal(updated, curr);
  t.end();
});