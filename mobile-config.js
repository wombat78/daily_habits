// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.example.bplim.dailyhabit',
  name: 'daily_habits',
  description: 'Productivity Tool for building powerful habits',
  author: 'wombat',
  email: 'boonpang.lim@gmail.com',
  website: 'http://example.com'
});
// Set up resources such as icons and launch screens.
App.icons({
  'iphone_2x': 'icons/icon-60@2x.png',
  'iphone_3x': 'icons/icon-60@3x.png',
  // More screen sizes and platforms...
});
App.launchScreens({
  'iphone_2x': 'splash/dailyhabits.png',
  'iphone5': 'splash/dailyhabits.png'
  // More screen sizes and platforms...
});
// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
// Pass preferences for a particular PhoneGap/Cordova plugin.
//App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//  APP_ID: '1234567890',
//  API_KEY: 'supersecretapikey'
//});
// Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
// generated config.xml. 'Universal Links' is shown as an example here.
//App.appendToConfig(`
//  <universal-links>
//    <host name="localhost:3000" />
//  </universal-links>
//`);
