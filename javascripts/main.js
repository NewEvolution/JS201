// Pull in all the various javascript libraries
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

// The main function requiring all our anciliary scripts
requirejs(["jquery", "lodash", "firebase", "hbs", "bootstrap", "q", "add-fam", "del-fam", "hb-templates"], 
  function($, _, _firebase, Handlebars, bootstrap, Q, addFam, delFam, template){
    var firebaseRef = new Firebase("https://nss-rjt-family.firebaseio.com/");
    firebaseRef.child("family").on("value", function(snapshot) {
      var familyObj = snapshot.val();
      $("#content").html(template.family(familyObj));
    });
  $("#submit").click(function(e) {
    e.preventDefault();
    addFam.add(firebaseRef);
  });
  $("#content").on("click", ".delete", function(e) {
    e.preventDefault();
    delFam.del(firebaseRef, $(this));
  });
});