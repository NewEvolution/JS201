define(["jquery", "lodash", "firebase"], 
  function($, _, _firebase){
    return {
      add: function(firebaseRef) {
        var famObject = {};
        famObject.name = $("#name").val();
        famObject.age = $("#age").val();
        famObject.gender = $("#gender > option:selected").val();
        famObject.skills = $("#skills").val().split(", ");
        console.log(famObject);
        firebaseRef.child("family").push(famObject, function() {
          $('#add-form').each(function() {
            this.reset();
          });
        });
      }
    };
});