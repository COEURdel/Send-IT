import { expect } from 'chai';
import request from 'supertest';
import app from '../app';

let token;
let token2;

describe('Test for parcels', () => {
  it('should throw an error if header is available', (done) => {
    request(app)
      .post('/api/v1/users/parcels')
      .end((err, res) => {
        expect(res.status).to.equal(403);
      });
    done();
  });
  it('should throw an error if no valid token is available', (done) => {
    request(app)
      .post('/api/v1/users/parcels')
      .set('authorization', 'bigisaiah')
      .end((err, res) => {
        expect(res.status).to.equal(401);
      });
    done();
  });
});
describe('POST create new parcel', () => {
  it('should return error when passed empty parcel data', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .post('/api/v1/users/parcels')
          .send({
            location: '',
            destination: '',
            departure: '',
            price: '',
          })
          .set('Authorization', `Bearer ${token}`)
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(res.status).to.equal(400);
            done();
          });
      });
  });
  it('should return error when passed no location ride data', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .post('/api/v1/users/parcels')
          .send({
            location: '     ',
            destination: 'Kigali',
            departure: '28-11-2018',
            price: '3000',
          })
          .set('Authorization', `Bearer ${token}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.message).to.equal('parcel location is required');
          });
      });
    done();
  });
  it('should return error when passed no destination parcel data', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .post('/api/v1/users/parcels')
          .send({
            location: 'Musanze',
            destination: '  ',
            departure: '28-11-2018',
            price: '3000',
          })
          .set('Authorization', `Bearer ${token}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.message).to.equal('Parcel destination is required');
            done();
          });
      });
  });
  it('should return error when passed no departure date parcel data', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .post('/api/v1/users/parcels')
          .send({
            location: 'Musanze',
            destination: 'Kigali',
            departure: ' ',
            seats: '3',
          })
          .set('Authorization', `Bearer ${token}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.message).to.equal('Departure time is required');
            done();
          });
      });
  });
  it('should return error when passed invalid parcel price data', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .post('/api/v1/users/rides')
          .send({
            location: 'Musanze',
            destination: 'Kigali',
            departure: '28-11-2018',
            seats: ' ',
          })
          .set('Authorization', `Bearer ${token}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.message).to.equal('Price is required');
            done();
          });
      });
  });
  it('should return a new parcel order', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .post('/api/v1/users/parcels')
          .send({
            location: 'Musanze',
            destination: 'Kigali',
            departure: '28-11-2018',
            seats: '3000',
          })
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body.message).to.equal('Parcel order created successfully');
            done();
          });
      });
  });
});

describe('GET all parcels', () => {
  it('should get a list of all available parcels order', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .get('/api/v1/rides')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
  });
});

describe('GET a specific parcel', () => {
  it('should get details of a parcel', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .get('/api/v1/parcels/2')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
  });
  it('should get details of a parcel', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        ({ token } = res.body);
        request(app)
          .get('/api/v1/parcels/104346')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.status).to.equal(404);
            done();
          });
      });
  });
});

describe('POST request to create order', () => {
  it('should make a request to create an order', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'runoro@mail.com',
        password: '191010',
      })
      .end((err, res) => {
        token2 = res.body.token;
        request(app)
          .post('/api/v1/parcels/4/orders')
          .set('Authorization', `Bearer ${token2}`)
          .end((err, res) => {
            expect(res.status).to.equal(201);
            done();
          });
      });
  });
  it('should throw an error when you make an order', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        token2 = res.body.token;
        request(app)
          .post('/api/v1/parcels/4/orders')
          .set('Authorization', `Bearer ${token2}`)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            done();
          });
      });
  });
});

describe('GET all parcel"s delivery orders', () => {
  it('should get all parcel orders', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        // ({ token2 } = res.body.token);
        token2 = res.body.token;
        request(app)
          .get('/api/v1/users/parcels/6/orders')
          .set('Authorization', `Bearer ${token2}`)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
  });
  it('should throw an error when no parcel order is available', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        // ({ token2 } = res.body.token);
        token2 = res.body.token;
        request(app)
          .get('/api/v1/users/parcels/0/orders')
          .set('Authorization', `Bearer ${token2}`)
          .end((err, res) => {
            expect(res.status).to.equal(404);
            done();
          });
      });
  });
});

describe('UPDATE Accept or reject a parcels order', () => {
  it('should either accept or reject a parcels order', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'isaiahrjr7@mail.com',
        password: '191011',
      })
      .end((err, res) => {
        token = res.body.token;
        request(app)
          .put('/api/v1/users/parcels/6/orders/2')
          .set('Authorization', `Bearer ${token}`)
          .send({
            status: 'accepted',
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
  });
});
