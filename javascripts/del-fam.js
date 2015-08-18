define(["jquery", "lodash", "firebase"], 
  function($, _, _firebase){
    return {
      del: function(firebaseRef, clickedElement) {
        var famKey = $(clickedElement).parents(".family-member").attr("key");
        firebaseRef.child("family").child(famKey).set(null);
      }
    };
});