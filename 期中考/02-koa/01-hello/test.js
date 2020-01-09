<<<<<<< HEAD
const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe('Hello World', function() {
  after(function() {
    server.close();
  });

  it('should say "Hello World"', function(done) {
    request
    .get('/')
    .expect(200)
    .expect('Hello World', done);
  });
});
=======
const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe('Hello World', function() {
  after(function() {
    server.close();
  });

  it('should say "Hello World"', function(done) {
    request
    .get('/')
    .expect(200)
    .expect('Hello World', done);
  });
});
>>>>>>> bbd52c73514bd042927b914e78759aac4eb0911f
