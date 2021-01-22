require("mocha");

const expect = require('chai').expect; // we need the expect command from chai
const server = require('../server'); 

console.log('running test: against server.js');

describe('title: This is the title of the test', () => {//describe the thing it is testing (title)
    it('this simple test checks equality for a string', () => { // function that executes the test
        expect('Test with Travis').to.equal('Test CI with Travis');//this is the epectation. expected outcome
    });
    // process.exit();
});
