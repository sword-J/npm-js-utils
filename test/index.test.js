'use strict';
const chai = require('chai');
const { getTreeObjValue } = require('../lib/index');

const expect = chai.expect;
const testData = {
  code: 0,
  data: {
    response: false,
    success: true,
  },
  message: 'success',
};

describe('input', () => {
  it('null', function() {
    expect(getTreeObjValue(null)).to.be.null;
  });
  it('undefind', function() {
    expect(getTreeObjValue(undefined)).to.be.undefined;
  });
  it('""', function() {
    expect(getTreeObjValue("")).to.be.equal("");
  });
  it('has value', function() {
    expect(getTreeObjValue(testData, ["code"])).to.be.equal(0);
  });
  it('has deep value', function() {
    expect(getTreeObjValue(testData, ["data", "response"])).to.be.false;
  });
  it('has not value', function() {
    expect(getTreeObjValue(testData, ["data", "response", "message"])).to.be.false;
  });
});
