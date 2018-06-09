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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Quantimodo) {
      root.Quantimodo = {};
    }
    root.Quantimodo.Measurement = factory(root.Quantimodo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Measurement model module.
   * @module model/Measurement
   * @version 5.8.112511
   */

  /**
   * Constructs a new <code>Measurement</code>.
   * @alias module:model/Measurement
   * @class
   * @param sourceName {String} Application or device used to record the measurement values
   * @param startTimeString {String} Start Time for the measurement event in UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @param unitAbbreviatedName {String} Abbreviated name for the unit of measurement
   * @param value {Number} Converted measurement value in requested unit
   * @param variableName {String} Name of the variable for which we are creating the measurement records
   */
  var exports = function(sourceName, startTimeString, unitAbbreviatedName, value, variableName) {
    var _this = this;




















    _this['sourceName'] = sourceName;


    _this['startTimeString'] = startTimeString;

    _this['unitAbbreviatedName'] = unitAbbreviatedName;














    _this['value'] = value;





    _this['variableName'] = variableName;

  };

  /**
   * Constructs a <code>Measurement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Measurement} obj Optional instance to populate.
   * @return {module:model/Measurement} The populated <code>Measurement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('connectorId')) {
        obj['connectorId'] = ApiClient.convertToType(data['connectorId'], 'Number');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('displayValueAndUnitString')) {
        obj['displayValueAndUnitString'] = ApiClient.convertToType(data['displayValueAndUnitString'], 'String');
      }
      if (data.hasOwnProperty('iconIcon')) {
        obj['iconIcon'] = ApiClient.convertToType(data['iconIcon'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('inputType')) {
        obj['inputType'] = ApiClient.convertToType(data['inputType'], 'String');
      }
      if (data.hasOwnProperty('ionIcon')) {
        obj['ionIcon'] = ApiClient.convertToType(data['ionIcon'], 'String');
      }
      if (data.hasOwnProperty('manualTracking')) {
        obj['manualTracking'] = ApiClient.convertToType(data['manualTracking'], 'Boolean');
      }
      if (data.hasOwnProperty('maximumAllowedValue')) {
        obj['maximumAllowedValue'] = ApiClient.convertToType(data['maximumAllowedValue'], 'Number');
      }
      if (data.hasOwnProperty('minimumAllowedValue')) {
        obj['minimumAllowedValue'] = ApiClient.convertToType(data['minimumAllowedValue'], 'Number');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('noteObject')) {
        obj['noteObject'] = ApiClient.convertToType(data['noteObject'], Object);
      }
      if (data.hasOwnProperty('noteHtml')) {
        obj['noteHtml'] = ApiClient.convertToType(data['noteHtml'], Object);
      }
      if (data.hasOwnProperty('originalUnitId')) {
        obj['originalUnitId'] = ApiClient.convertToType(data['originalUnitId'], 'Number');
      }
      if (data.hasOwnProperty('originalValue')) {
        obj['originalValue'] = ApiClient.convertToType(data['originalValue'], 'Number');
      }
      if (data.hasOwnProperty('pngPath')) {
        obj['pngPath'] = ApiClient.convertToType(data['pngPath'], 'String');
      }
      if (data.hasOwnProperty('pngUrl')) {
        obj['pngUrl'] = ApiClient.convertToType(data['pngUrl'], 'String');
      }
      if (data.hasOwnProperty('productUrl')) {
        obj['productUrl'] = ApiClient.convertToType(data['productUrl'], 'String');
      }
      if (data.hasOwnProperty('sourceName')) {
        obj['sourceName'] = ApiClient.convertToType(data['sourceName'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
      }
      if (data.hasOwnProperty('startTimeEpoch')) {
        obj['startTimeEpoch'] = ApiClient.convertToType(data['startTimeEpoch'], 'Number');
      }
      if (data.hasOwnProperty('startTimeString')) {
        obj['startTimeString'] = ApiClient.convertToType(data['startTimeString'], 'String');
      }
      if (data.hasOwnProperty('svgUrl')) {
        obj['svgUrl'] = ApiClient.convertToType(data['svgUrl'], 'String');
      }
      if (data.hasOwnProperty('unitAbbreviatedName')) {
        obj['unitAbbreviatedName'] = ApiClient.convertToType(data['unitAbbreviatedName'], 'String');
      }
      if (data.hasOwnProperty('unitCategoryId')) {
        obj['unitCategoryId'] = ApiClient.convertToType(data['unitCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('unitCategoryName')) {
        obj['unitCategoryName'] = ApiClient.convertToType(data['unitCategoryName'], 'String');
      }
      if (data.hasOwnProperty('unitId')) {
        obj['unitId'] = ApiClient.convertToType(data['unitId'], 'Number');
      }
      if (data.hasOwnProperty('unitName')) {
        obj['unitName'] = ApiClient.convertToType(data['unitName'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('userVariableUnitAbbreviatedName')) {
        obj['userVariableUnitAbbreviatedName'] = ApiClient.convertToType(data['userVariableUnitAbbreviatedName'], 'String');
      }
      if (data.hasOwnProperty('userVariableUnitCategoryId')) {
        obj['userVariableUnitCategoryId'] = ApiClient.convertToType(data['userVariableUnitCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('userVariableUnitCategoryName')) {
        obj['userVariableUnitCategoryName'] = ApiClient.convertToType(data['userVariableUnitCategoryName'], 'String');
      }
      if (data.hasOwnProperty('userVariableUnitId')) {
        obj['userVariableUnitId'] = ApiClient.convertToType(data['userVariableUnitId'], 'Number');
      }
      if (data.hasOwnProperty('userVariableUnitName')) {
        obj['userVariableUnitName'] = ApiClient.convertToType(data['userVariableUnitName'], 'String');
      }
      if (data.hasOwnProperty('userVariableVariableCategoryId')) {
        obj['userVariableVariableCategoryId'] = ApiClient.convertToType(data['userVariableVariableCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('userVariableVariableCategoryName')) {
        obj['userVariableVariableCategoryName'] = ApiClient.convertToType(data['userVariableVariableCategoryName'], 'String');
      }
      if (data.hasOwnProperty('valence')) {
        obj['valence'] = ApiClient.convertToType(data['valence'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('variableCategoryId')) {
        obj['variableCategoryId'] = ApiClient.convertToType(data['variableCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('variableCategoryImageUrl')) {
        obj['variableCategoryImageUrl'] = ApiClient.convertToType(data['variableCategoryImageUrl'], 'String');
      }
      if (data.hasOwnProperty('variableCategoryName')) {
        obj['variableCategoryName'] = ApiClient.convertToType(data['variableCategoryName'], 'String');
      }
      if (data.hasOwnProperty('variableDescription')) {
        obj['variableDescription'] = ApiClient.convertToType(data['variableDescription'], 'String');
      }
      if (data.hasOwnProperty('variableId')) {
        obj['variableId'] = ApiClient.convertToType(data['variableId'], 'Number');
      }
      if (data.hasOwnProperty('variableName')) {
        obj['variableName'] = ApiClient.convertToType(data['variableName'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Example: quantimodo
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * Example: 13
   * @member {Number} connectorId
   */
  exports.prototype['connectorId'] = undefined;
  /**
   * Example: 2017-07-30 21:08:36
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Examples: 3/5, $10, or 1 count
   * @member {String} displayValueAndUnitString
   */
  exports.prototype['displayValueAndUnitString'] = undefined;
  /**
   * Example: ion-sad-outline
   * @member {String} iconIcon
   */
  exports.prototype['iconIcon'] = undefined;
  /**
   * Example: 1051466127
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Example: value
   * @member {String} inputType
   */
  exports.prototype['inputType'] = undefined;
  /**
   * Example: ion-ios-medkit-outline
   * @member {String} ionIcon
   */
  exports.prototype['ionIcon'] = undefined;
  /**
   * Example: 1
   * @member {Boolean} manualTracking
   */
  exports.prototype['manualTracking'] = undefined;
  /**
   * Example: 5
   * @member {Number} maximumAllowedValue
   */
  exports.prototype['maximumAllowedValue'] = undefined;
  /**
   * Example: 1
   * @member {Number} minimumAllowedValue
   */
  exports.prototype['minimumAllowedValue'] = undefined;
  /**
   * Note of measurement
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * Additional meta data for the measurement
   * @member {Object} noteObject
   */
  exports.prototype['noteObject'] = undefined;
  /**
   * Embeddable HTML with message hyperlinked with associated url
   * @member {Object} noteHtml
   */
  exports.prototype['noteHtml'] = undefined;
  /**
   * Example: 23
   * @member {Number} originalUnitId
   */
  exports.prototype['originalUnitId'] = undefined;
  /**
   * Original value as originally submitted
   * @member {Number} originalValue
   */
  exports.prototype['originalValue'] = undefined;
  /**
   * Example: img/variable_categories/treatments.png
   * @member {String} pngPath
   */
  exports.prototype['pngPath'] = undefined;
  /**
   * Example: https://app.quantimo.do/ionic/Modo/www/img/variable_categories/treatments.png
   * @member {String} pngUrl
   */
  exports.prototype['pngUrl'] = undefined;
  /**
   * Link to associated product for purchase
   * @member {String} productUrl
   */
  exports.prototype['productUrl'] = undefined;
  /**
   * Application or device used to record the measurement values
   * @member {String} sourceName
   */
  exports.prototype['sourceName'] = undefined;
  /**
   * Example: 2014-08-27
   * @member {String} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Seconds between the start of the event measured and 1970 (Unix timestamp)
   * @member {Number} startTimeEpoch
   */
  exports.prototype['startTimeEpoch'] = undefined;
  /**
   * Start Time for the measurement event in UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} startTimeString
   */
  exports.prototype['startTimeString'] = undefined;
  /**
   * Example: https://app.quantimo.do/ionic/Modo/www/img/variable_categories/treatments.svg
   * @member {String} svgUrl
   */
  exports.prototype['svgUrl'] = undefined;
  /**
   * Abbreviated name for the unit of measurement
   * @member {String} unitAbbreviatedName
   */
  exports.prototype['unitAbbreviatedName'] = undefined;
  /**
   * Example: 6
   * @member {Number} unitCategoryId
   */
  exports.prototype['unitCategoryId'] = undefined;
  /**
   * Example: Miscellany
   * @member {String} unitCategoryName
   */
  exports.prototype['unitCategoryName'] = undefined;
  /**
   * Example: 23
   * @member {Number} unitId
   */
  exports.prototype['unitId'] = undefined;
  /**
   * Example: Count
   * @member {String} unitName
   */
  exports.prototype['unitName'] = undefined;
  /**
   * Example: 2017-07-30 21:08:36
   * @member {String} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * Link to associated Facebook like or Github commit, for instance
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Example: count
   * @member {String} userVariableUnitAbbreviatedName
   */
  exports.prototype['userVariableUnitAbbreviatedName'] = undefined;
  /**
   * Example: 6
   * @member {Number} userVariableUnitCategoryId
   */
  exports.prototype['userVariableUnitCategoryId'] = undefined;
  /**
   * Example: Miscellany
   * @member {String} userVariableUnitCategoryName
   */
  exports.prototype['userVariableUnitCategoryName'] = undefined;
  /**
   * Example: 23
   * @member {Number} userVariableUnitId
   */
  exports.prototype['userVariableUnitId'] = undefined;
  /**
   * Example: Count
   * @member {String} userVariableUnitName
   */
  exports.prototype['userVariableUnitName'] = undefined;
  /**
   * Example: 13
   * @member {Number} userVariableVariableCategoryId
   */
  exports.prototype['userVariableVariableCategoryId'] = undefined;
  /**
   * Example: Treatments
   * @member {String} userVariableVariableCategoryName
   */
  exports.prototype['userVariableVariableCategoryName'] = undefined;
  /**
   * Example: negative
   * @member {String} valence
   */
  exports.prototype['valence'] = undefined;
  /**
   * Converted measurement value in requested unit
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Example: 13
   * @member {Number} variableCategoryId
   */
  exports.prototype['variableCategoryId'] = undefined;
  /**
   * Example: https://maxcdn.icons8.com/Color/PNG/96/Healthcare/pill-96.png
   * @member {String} variableCategoryImageUrl
   */
  exports.prototype['variableCategoryImageUrl'] = undefined;
  /**
   * Example: Treatments
   * @member {String} variableCategoryName
   */
  exports.prototype['variableCategoryName'] = undefined;
  /**
   * Example: negative
   * @member {String} variableDescription
   */
  exports.prototype['variableDescription'] = undefined;
  /**
   * Example: 5956846
   * @member {Number} variableId
   */
  exports.prototype['variableId'] = undefined;
  /**
   * Name of the variable for which we are creating the measurement records
   * @member {String} variableName
   */
  exports.prototype['variableName'] = undefined;
  /**
   * Example: Trader Joe's Bedtime Tea
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;



  return exports;
}));

