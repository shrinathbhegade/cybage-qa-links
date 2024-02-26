/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var isDeviceOnline;

var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
    app.receivedEvent('deviceready');
},
    // Update DOM on a Received Event
receivedEvent: function(id) {
    
    //checking device network status
    isDeviceOnline = app.isOnline();
    
    // The event fires when an application goes online, and the device is connected to the Internet.
    document.addEventListener("online", app.ifDeviceOnline, false);
    
    // The event fires when an application goes off-line, and the device is not connected to the Internet.
    document.addEventListener("offline", app.ifDeviceOffline, false);
    
    //https://cordova.apache.org/docs/en/latest/cordova/events/events.html
    
    document.addEventListener("resume", app.onResume, false);
    
    //disable email button when device is offline
    if (!isDeviceOnline) {
        $('.email_button').addClass('disabled');
    }
    
},
    
ifDeviceOnline: function () {
    // isDeviceOnline to true
    isDeviceOnline = true;
    $('.email_button').removeClass('disabled');
},
    
ifDeviceOffline: function () {
    // isDeviceOnline to false
    isDeviceOnline = false;
    $('.email_button').addClass('disabled');
},
    
    // checking if device is online
isOnline: function () {
    var networkState = navigator.connection.type;
    return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
},
    
    onResume : function() {
        
        //checking device network status
        isDeviceOnline = app.isOnline();
        
        //disable email button when device is offline
        if (!isDeviceOnline) {
            $('.email_button').addClass('disabled');
        }
    },
};

app.initialize();
