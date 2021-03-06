/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var ServiceClient = msRest.ServiceClient;

var models = require('./models');
var operations = require('./operations');

/**
 * @class
 * Initializes a new instance of the FooClient class.
 * @constructor
 *
 * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 */
function FooClient(credentials, baseUri, options) {
  if (credentials === null || credentials === undefined) {
    throw new Error('\'credentials\' cannot be null.');
  }

  if (!options) options = {};

  FooClient['super_'].call(this, credentials, options);
  this.baseUri = baseUri;
  if (!this.baseUri) {
    this.baseUri = 'https://api.powerbi.com';
  }
  this.credentials = credentials;

  this.widget = new operations.Widget(this);
  this.models = models;
  msRest.addSerializationMixin(this);
}

util.inherits(FooClient, ServiceClient);

module.exports = FooClient;
