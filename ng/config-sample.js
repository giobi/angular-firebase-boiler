(function() {
    'use strict';

    var firebaseconfig = {
        apiKey: '<your-api-key>',
        authDomain: '<your-auth-domain>',
        databaseURL: '<your-database-url>',
        storageBucket: '<your-storage-bucket>'
    };
    firebase.initializeApp(firebaseconfig);

})();