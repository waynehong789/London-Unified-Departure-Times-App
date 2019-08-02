import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
let should = chai.should();

describe('Station API Testing', () => {

    let busLineID: string = "469";
    let stationID: string = "490001001D"

    beforeEach(async () => {

    });

    it('(GET) Looking for bus line stations list, should return respond status code 200, status is success', async () => {
        return chai.request('http://localhost:4200').get('/api/lines/' + busLineID + '/stations').then(res => {
                
                res.should.have.status(200);
                chai.expect(res.body.status).to.eql("success");
            })
    });

    it('(GET) Looking for bus line station time table, should return respond status code 200, status is success', async () => {
        return chai.request('http://localhost:4200').get('/api/lines/' + busLineID + '/stations/'+ stationID + '/timeTable').then(res => {
                res.should.have.status(200);
                chai.expect(res.body.status).to.eql("success");
            })
    });

})