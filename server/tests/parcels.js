import chai from "chai";
import chaiHttp from "chai-http";
import server from "../src/app.js";

const { should } = chai.should();
chai.use(chaiHttp);



describe('/GET parcels', () => {
    it('it should GET all the parcels', (done) => {
          chai.request(server)
          .get('/api/v1/parcels')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});

describe('/POST parcels', () => {
    it('it should create parcels', (done) => {
          chai.request(server)
          .post('/api/v1/parcels')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});

describe('/GET a parcel', () => {
    it('it should create parcels', (done) => {
          chai.request(server)
          .get('/api/v1/parcels/1')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});

describe('/PUT a parcel', () => {
    it('it should update a parcel', (done) => {
          chai.request(server)
          .put('/api/v1/parcels/1/update')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});

describe('/DELETE a parcel', () => {
    it('it should delete a parcel', (done) => {
          chai.request(server)
          .delete('/api/v1/parcels/1/cancel')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});
