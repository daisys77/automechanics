

//initializing the firebase app
function initApp() {
    console.log('initializing the repair app');
    initFirebase();
}
//initializing the firebase
function initFirebase() {
    // Shortcuts to Firebase SDK features.
    auth = firebase.auth();
    database = firebase.database();
    storage = firebase.storage();

    // Initiates Firebase auth and listen to auth state changes.

};


//making a signup with email id and password
function signUp() {

    var email = $('#usernameSignup').val();
    var password = $('#PasswordSignup').val();
    initFirebase()
    auth.createUserWithEmailAndPassword(email, password).then(
        function(user) {
            console.log(user)
            console.log(user.email)
            loginUsrEmail = user.email
            getData(user.email)
        },
        function(error) {
            console.log(error)
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("" + errorMessage)
        });

};

//making signin with  email and password
function signIn() {
    var email = $('#username').val();
    var password = $('#Password').val();

    initFirebase()
    auth.signInWithEmailAndPassword(email, password).then(
        function(user) {
            console.log(user)
            loginUsrEmail = user.email
            console.log(user.email)
            getData(loginUsrEmail)
        },
        function(error) {
            console.log(error)
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("" + errorMessage)


        });

};

//method for signout
function signOut(email, password) {

    auth.signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });

};
//gets data from firebase mongo db database
function getData(emailOfUserLoggedIn) {
    listUlHtml = '';
    // TODO(DEVELOPER): Load and listens for new messages.
    // Reference to the /notes/ database path.

    notesRef = database.ref('notes').orderByChild("email").equalTo(emailOfUserLoggedIn);
    // Make sure we remove all previous listeners.
    notesRef.off();

    // Loads the notes and listen for new ones.
    var getDataFromFirebase = function(data) {

        var val = data.val();
        $.each(val, function(index, value) {
            var li1 = BookLi.replaceAll('{{item.image}}', value.img);
            var li2 = li1.replaceAll('{{item.title}}', value.title);
            var li3 = li2.replaceAll('{{item.body}}', value.body);
            var li4 = li3.replaceAll('{{item.index}}', index);
            var li5 = li4.replaceAll('item.image', value.img.trim());
            var li6 = li5.replaceAll('item.title', value.title.trim());
            var li7 = li6.replaceAll('item.body', value.body.trim());
            var li = li7.replaceAll('item.index', index);
            listUlHtml += li
        });
        $('#pgBookList').html(listUlHtml) /*.listview('refresh')*/ ;

    };
    notesRef.on('value', getDataFromFirebase);
    location.href = "#pgBook"
};


// --------------CONTACT US FORM  ----------------------------------------------


// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDjiDpL0irJtns86M9Pgrl0mDSgk_eZNTQ",
    authDomain: "auto-mechanic-bd801.firebaseapp.com",
    databaseURL: "https://auto-mechanic-bd801.firebaseio.com",
    projectId: "auto-mechanic-bd801",
    storageBucket: "auto-mechanic-bd801.appspot.com",
    messagingSenderId: "1039756298738"
};
firebase.initializeApp(config);






