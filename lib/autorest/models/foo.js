/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Foo class.
 * @constructor
 * Foo
 * @member {string} [fooId] The foo id
 * 
 */
function Foo() {
}

/**
 * Defines the metadata of Foo
 *
 * @returns {object} metadata of Foo
 *
 */
Foo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'foo',
    type: {
      name: 'Composite',
      className: 'Foo',
      modelProperties: {
        fooId: {
          required: false,
          serializedName: 'fooId',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Foo;