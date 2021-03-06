/**
 * quantimodo
 * We make it easy to retrieve and analyze normalized user data from a wide array of devices and applications. Check out our [docs and sdk's](https://github.com/QuantiModo/docs) or [contact us](https://help.quantimo.do).
 *
 * OpenAPI spec version: 5.8.112511
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Variable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Variable'));
  } else {
    // Browser globals (root is window)
    if (!root.Quantimodo) {
      root.Quantimodo = {};
    }
    root.Quantimodo.PostMeasurementsDataResponse = factory(root.Quantimodo.ApiClient, root.Quantimodo.Variable);
  }
}(this, function(ApiClient, Variable) {
  'use strict';




  /**
   * The PostMeasurementsDataResponse model module.
   * @module model/PostMeasurementsDataResponse
   * @version 5.8.112511
   */

  /**
   * Constructs a new <code>PostMeasurementsDataResponse</code>.
   * @alias module:model/PostMeasurementsDataResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PostMeasurementsDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostMeasurementsDataResponse} obj Optional instance to populate.
   * @return {module:model/PostMeasurementsDataResponse} The populated <code>PostMeasurementsDataResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userVariables')) {
        obj['userVariables'] = ApiClient.convertToType(data['userVariables'], [Variable]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Variable>} userVariables
   */
  exports.prototype['userVariables'] = undefined;



  return exports;
}));


