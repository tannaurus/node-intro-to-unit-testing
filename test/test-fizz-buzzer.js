'use strict';
const fizzBuzzer = require('../fizzBuzzer');
const should = require('chai').should();

describe('fizzBuzzer', function(){
  it('should return fizz-buzz when number is % 15', function(){
    const normalCases = [{input: 15, expected: 'fizz-buzz'}, {input: 30, expected: 'fizz-buzz'}];
    normalCases.forEach(function(testCase){
      const answer = fizzBuzzer(testCase.input);
      answer.should.equal(testCase.expected);
    });
  });
  it('should return buzz when number is % 5', function(){
    const normalCases = [{input: 5, expected: 'buzz'}, {input: 10, expected: 'buzz'}];
    normalCases.forEach(function(testCase){
      const answer = fizzBuzzer(testCase.input);
      answer.should.equal(testCase.expected);
    });
  });
  it('should return fizz when number is % 3', function(){
    const normalCases = [{input: 3, expected: 'fizz'}, {input: 6, expected: 'fizz'}];
    normalCases.forEach(function(testCase){
      const answer = fizzBuzzer(testCase.input);
      answer.should.equal(testCase.expected);
    });
  });
  it('should return a number if the number is not % 3, 5, or 15', function(){
    const normalCases = [{input: 7, expected: 7}, {input: 14, expected: 14}];
    normalCases.forEach(function(testCase){
      const answer = fizzBuzzer(testCase.input);
      answer.should.equal(testCase.expected);
    });
  });
  it('should return an error if input is not a number', function(){
    const badInputs = ['hello', null, '1', {number: 4}];
    badInputs.forEach(function(testCase){
      (function() {
        fizzBuzzer(testCase);
      }).should.throw(Error);
    });
  });
});