## Basics
This project works with the MoovSDK.

See detailed documentation for the MoovSDK at http://beta.moovweb.com

## Domains
Remember to put all domains you're going to hit in your etc/hosts
or to run your server with the `-auto-hosts=true` option.

    127.0.0.1 	mlocal.serteller.com

## Description

This project is meant to be a wrapper for a tracker application.

It uses HTML5 geolocation and Cordova integration with native alerts.

Some features of this project will run in a browser however it's meant to be run inside an app.

It tracks your location and shows a message when you get to some place.

So it show location specific popups, coupons etc.

## How to use

Clone the project

Make sure Cordova points to external links (ex: mlocal.xyz.com)

You can do this by making sure 

creating this field in to the Cordova.plist file
<key>ExternalHosts</key>
<array>
<string>*</string>
</array>

Make sure you have the plugins you wish to use in your app.
These can be added by adding them to the Cordova.plist file under
<key>Plugins</key>
<dict>
	<key>Device</key>
	<string>CDVDevice</string>
	.
	.
	.
	

## Future Thoughts

Many a Cordova features may be called this way.
