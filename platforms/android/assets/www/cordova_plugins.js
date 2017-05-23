cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local",
            "plugin.notification.local"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Core",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-core.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Util",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-util.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-app-event": "1.2.0",
    "cordova-plugin-device": "1.1.5",
    "cordova-plugin-inappbrowser": "1.7.0",
    "cordova-plugin-whitelist": "1.3.2",
    "es6-promise-plugin": "4.1.0",
    "cordova-plugin-x-socialsharing": "5.1.8",
    "de.appplant.cordova.plugin.local-notification": "0.8.4"
};
// BOTTOM OF METADATA
});