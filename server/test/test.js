import chai from "chai";

const expect = chai.expect();

const url = "http://localhost:3000/api/v1/parcels/";
const url_1= "http://localhost:3000/api/v1/parcels/:id"

describe("Parcels delivery orders", () => {

         it("it shows all parcels delivery order", (done) => {
             request.get(url, (error, response, body) => {
             expect(response.statusCode).toBe(200);
             done();
         	});
    	});

         it("it retrieve a single order", (done) => {
             request.get(url_1, (error, response, body) => {
             expect(response.statusCode).toBe(200);
             done();
         	});
    	});

         it("it updates an order", (done) => {
             request.put(url_1, (error, response, body) => {
             expect(response.statusCode).toBe(200);
             done();
         	});
    	});

         it("it will create an order", (done) => {
             request.post(url, (error, response, body) => {
             expect(response.statusCode).toBe(200);
             done();
         	});
    	});
});

export default request;