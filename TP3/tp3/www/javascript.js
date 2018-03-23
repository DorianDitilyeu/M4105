document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

   var element = document.getElementById('deviceProperties');

   var networkState = navigator.connection.type;

   var states = {};
   states[Connection.UNKNOWN]  = 'Unknown connection';
   states[Connection.ETHERNET] = 'Ethernet connection';
   states[Connection.WIFI]     = 'WiFi connection';
   states[Connection.CELL_2G]  = 'Cell 2G connection';
   states[Connection.CELL_3G]  = 'Cell 3G connection';
   states[Connection.CELL_4G]  = 'Cell 4G connection';
   states[Connection.CELL]     = 'Cell generic connection';
   states[Connection.NONE]     = 'No network connection';

   alert(   'Connection type: '   + states[networkState] +
            '\n\nDevice Name: '   + device.name     +
            '\nDevice Cordova: '  + device.cordova  +
            '\nDevice Platform: ' + device.platform +
            '\nDevice UUID: '     + device.uuid     +
            '\nDevice Version: '  + device.version);
   }
