'use strict';

const apickli = require('apickli');
const { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Before }) {
    Before(function() {
        this.apickli = new apickli.Apickli('http', 'seikhsahajahanalli89-trial-test.apigee.net');
        this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    });
});