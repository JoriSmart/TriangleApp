const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Triangle Functions', function() {
    it('1. The base length of the Triangle', function(done) {
        let t1 = new Triangle(3, 4);
        expect(t1.getBase()).to.equal(3);
        done();
    })});
    
    it('2. The height of the Triangle', function(done) {
        let t2 = new Triangle(5, 12);
        expect(t2.getHeight()).to.equal(12);
        done();
    });
    
    it('3. The area of the Triangle', function(done) {
        let t3 = new Triangle(6, 8);
        expect(t3.getArea()).to.equal(24);
        done();
    });