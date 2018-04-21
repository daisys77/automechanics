var config = {
    apiKey: "AIzaSyDQlX3Z9AwgM8JwdDlIyRm90mzsDPPJc00",
    authDomain: "auto-mechanics.firebaseapp.com",
    databaseURL: "https://auto-mechanics.firebaseio.com",
    projectId: "auto-mechanics",
    storageBucket: "auto-mechanics.appspot.com",
    messagingSenderId: "867018785554"
};
firebase.initializeApp(config);

//create firebase database reference
var dbRef = firebase.database();
var contactsRef = dbRef.ref('contacts');



