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
    root.Quantimodo.User = factory(root.Quantimodo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 5.8.112511
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @param accessToken {String} User access token
   * @param administrator {Boolean} Is user administrator
   * @param displayName {String} User display name
   * @param email {String} User email
   * @param id {Number} User id
   * @param loginName {String} User login name
   */
  var exports = function(accessToken, administrator, displayName, email, id, loginName) {
    var _this = this;

    _this['accessToken'] = accessToken;


    _this['administrator'] = administrator;






    _this['displayName'] = displayName;

    _this['email'] = email;





    _this['id'] = id;




    _this['loginName'] = loginName;




















  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('accessTokenExpires')) {
        obj['accessTokenExpires'] = ApiClient.convertToType(data['accessTokenExpires'], 'String');
      }
      if (data.hasOwnProperty('accessTokenExpiresAtMilliseconds')) {
        obj['accessTokenExpiresAtMilliseconds'] = ApiClient.convertToType(data['accessTokenExpiresAtMilliseconds'], 'Number');
      }
      if (data.hasOwnProperty('administrator')) {
        obj['administrator'] = ApiClient.convertToType(data['administrator'], 'Boolean');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('avatarImage')) {
        obj['avatarImage'] = ApiClient.convertToType(data['avatarImage'], 'String');
      }
      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = ApiClient.convertToType(data['capabilities'], 'String');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('combineNotifications')) {
        obj['combineNotifications'] = ApiClient.convertToType(data['combineNotifications'], 'Boolean');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('earliestReminderTime')) {
        obj['earliestReminderTime'] = ApiClient.convertToType(data['earliestReminderTime'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('getPreviewBuilds')) {
        obj['getPreviewBuilds'] = ApiClient.convertToType(data['getPreviewBuilds'], 'Boolean');
      }
      if (data.hasOwnProperty('hasAndroidApp')) {
        obj['hasAndroidApp'] = ApiClient.convertToType(data['hasAndroidApp'], 'Boolean');
      }
      if (data.hasOwnProperty('hasChromeExtension')) {
        obj['hasChromeExtension'] = ApiClient.convertToType(data['hasChromeExtension'], 'Boolean');
      }
      if (data.hasOwnProperty('hasIosApp')) {
        obj['hasIosApp'] = ApiClient.convertToType(data['hasIosApp'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('lastFour')) {
        obj['lastFour'] = ApiClient.convertToType(data['lastFour'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('lastSmsTrackingReminderNotificationId')) {
        obj['lastSmsTrackingReminderNotificationId'] = ApiClient.convertToType(data['lastSmsTrackingReminderNotificationId'], 'String');
      }
      if (data.hasOwnProperty('latestReminderTime')) {
        obj['latestReminderTime'] = ApiClient.convertToType(data['latestReminderTime'], 'String');
      }
      if (data.hasOwnProperty('loginName')) {
        obj['loginName'] = ApiClient.convertToType(data['loginName'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('phoneVerificationCode')) {
        obj['phoneVerificationCode'] = ApiClient.convertToType(data['phoneVerificationCode'], 'String');
      }
      if (data.hasOwnProperty('pushNotificationsEnabled')) {
        obj['pushNotificationsEnabled'] = ApiClient.convertToType(data['pushNotificationsEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('refreshToken')) {
        obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], 'String');
      }
      if (data.hasOwnProperty('sendPredictorEmails')) {
        obj['sendPredictorEmails'] = ApiClient.convertToType(data['sendPredictorEmails'], 'Boolean');
      }
      if (data.hasOwnProperty('sendReminderNotificationEmails')) {
        obj['sendReminderNotificationEmails'] = ApiClient.convertToType(data['sendReminderNotificationEmails'], 'Boolean');
      }
      if (data.hasOwnProperty('shareAllData')) {
        obj['shareAllData'] = ApiClient.convertToType(data['shareAllData'], 'Boolean');
      }
      if (data.hasOwnProperty('smsNotificationsEnabled')) {
        obj['smsNotificationsEnabled'] = ApiClient.convertToType(data['smsNotificationsEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('stripeActive')) {
        obj['stripeActive'] = ApiClient.convertToType(data['stripeActive'], 'Boolean');
      }
      if (data.hasOwnProperty('stripeId')) {
        obj['stripeId'] = ApiClient.convertToType(data['stripeId'], 'String');
      }
      if (data.hasOwnProperty('stripePlan')) {
        obj['stripePlan'] = ApiClient.convertToType(data['stripePlan'], 'String');
      }
      if (data.hasOwnProperty('stripeSubscription')) {
        obj['stripeSubscription'] = ApiClient.convertToType(data['stripeSubscription'], 'String');
      }
      if (data.hasOwnProperty('subscriptionEndsAt')) {
        obj['subscriptionEndsAt'] = ApiClient.convertToType(data['subscriptionEndsAt'], 'String');
      }
      if (data.hasOwnProperty('subscriptionProvider')) {
        obj['subscriptionProvider'] = ApiClient.convertToType(data['subscriptionProvider'], 'String');
      }
      if (data.hasOwnProperty('timeZoneOffset')) {
        obj['timeZoneOffset'] = ApiClient.convertToType(data['timeZoneOffset'], 'Number');
      }
      if (data.hasOwnProperty('trackLocation')) {
        obj['trackLocation'] = ApiClient.convertToType(data['trackLocation'], 'Boolean');
      }
      if (data.hasOwnProperty('userRegistered')) {
        obj['userRegistered'] = ApiClient.convertToType(data['userRegistered'], 'String');
      }
      if (data.hasOwnProperty('userUrl')) {
        obj['userUrl'] = ApiClient.convertToType(data['userUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * User access token
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;
  /**
   * Example: 2018-08-08 02:41:19
   * @member {String} accessTokenExpires
   */
  exports.prototype['accessTokenExpires'] = undefined;
  /**
   * Example: 1533696079000
   * @member {Number} accessTokenExpiresAtMilliseconds
   */
  exports.prototype['accessTokenExpiresAtMilliseconds'] = undefined;
  /**
   * Is user administrator
   * @member {Boolean} administrator
   */
  exports.prototype['administrator'] = undefined;
  /**
   * Example: https://lh6.googleusercontent.com/-BHr4hyUWqZU/AAAAAAAAAAI/AAAAAAAIG28/2Lv0en738II/photo.jpg?sz=50
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * Example: https://lh6.googleusercontent.com/-BHr4hyUWqZU/AAAAAAAAAAI/AAAAAAAIG28/2Lv0en738II/photo.jpg?sz=50
   * @member {String} avatarImage
   */
  exports.prototype['avatarImage'] = undefined;
  /**
   * Example: a:1:{s:13:\"administrator\";b:1;}
   * @member {String} capabilities
   */
  exports.prototype['capabilities'] = undefined;
  /**
   * Example: quantimodo
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * Example: 118444693184829555362
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * Example: 1
   * @member {Boolean} combineNotifications
   */
  exports.prototype['combineNotifications'] = undefined;
  /**
   * User display name
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * Earliest time user should get notifications. Example: 05:00:00
   * @member {String} earliestReminderTime
   */
  exports.prototype['earliestReminderTime'] = undefined;
  /**
   * User email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Example: Mike
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Example: false
   * @member {Boolean} getPreviewBuilds
   */
  exports.prototype['getPreviewBuilds'] = undefined;
  /**
   * Example: false
   * @member {Boolean} hasAndroidApp
   */
  exports.prototype['hasAndroidApp'] = undefined;
  /**
   * Example: false
   * @member {Boolean} hasChromeExtension
   */
  exports.prototype['hasChromeExtension'] = undefined;
  /**
   * Example: false
   * @member {Boolean} hasIosApp
   */
  exports.prototype['hasIosApp'] = undefined;
  /**
   * User id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Example: 2009
   * @member {String} lastFour
   */
  exports.prototype['lastFour'] = undefined;
  /**
   * Example: Sinn
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Example: 1
   * @member {String} lastSmsTrackingReminderNotificationId
   */
  exports.prototype['lastSmsTrackingReminderNotificationId'] = undefined;
  /**
   * Latest time user should get notifications. Example: 23:00:00
   * @member {String} latestReminderTime
   */
  exports.prototype['latestReminderTime'] = undefined;
  /**
   * User login name
   * @member {String} loginName
   */
  exports.prototype['loginName'] = undefined;
  /**
   * Example: PASSWORD
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * Example: 618-391-0002
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * Example: 1234
   * @member {String} phoneVerificationCode
   */
  exports.prototype['phoneVerificationCode'] = undefined;
  /**
   * Example: 1
   * @member {Boolean} pushNotificationsEnabled
   */
  exports.prototype['pushNotificationsEnabled'] = undefined;
  /**
   * Example: 6e99b113d85586de1f92468433f2df1e666647cb
   * @member {String} refreshToken
   */
  exports.prototype['refreshToken'] = undefined;
  /**
   * Example: [\"admin\"]
   * @member {String} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * Example: 1
   * @member {Boolean} sendPredictorEmails
   */
  exports.prototype['sendPredictorEmails'] = undefined;
  /**
   * Example: 1
   * @member {Boolean} sendReminderNotificationEmails
   */
  exports.prototype['sendReminderNotificationEmails'] = undefined;
  /**
   * Share all studies, charts, and measurement data with all other users
   * @member {Boolean} shareAllData
   */
  exports.prototype['shareAllData'] = undefined;
  /**
   * Example: false
   * @member {Boolean} smsNotificationsEnabled
   */
  exports.prototype['smsNotificationsEnabled'] = undefined;
  /**
   * Example: 1
   * @member {Boolean} stripeActive
   */
  exports.prototype['stripeActive'] = undefined;
  /**
   * Example: cus_A8CEmcvl8jwLhV
   * @member {String} stripeId
   */
  exports.prototype['stripeId'] = undefined;
  /**
   * Example: monthly7
   * @member {String} stripePlan
   */
  exports.prototype['stripePlan'] = undefined;
  /**
   * Example: sub_ANTx3nOE7nzjQf
   * @member {String} stripeSubscription
   */
  exports.prototype['stripeSubscription'] = undefined;
  /**
   * UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} subscriptionEndsAt
   */
  exports.prototype['subscriptionEndsAt'] = undefined;
  /**
   * Example: google
   * @member {String} subscriptionProvider
   */
  exports.prototype['subscriptionProvider'] = undefined;
  /**
   * Example: 300
   * @member {Number} timeZoneOffset
   */
  exports.prototype['timeZoneOffset'] = undefined;
  /**
   * Example: 1
   * @member {Boolean} trackLocation
   */
  exports.prototype['trackLocation'] = undefined;
  /**
   * Example: 2013-12-03 15:25:13 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} userRegistered
   */
  exports.prototype['userRegistered'] = undefined;
  /**
   * Example: https://plus.google.com/+MikeSinn
   * @member {String} userUrl
   */
  exports.prototype['userUrl'] = undefined;



  return exports;
}));


