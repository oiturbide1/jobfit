Template.talentviewsurvey.events({
	"submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      var wb = event.target.wlb.value;
      console.log(wb);

      var user = Meteor.userId;


      // Add skill info to profile
      PersonalSurvey.insert({
        'worklife_self': wb
      
			});




      // Get logic for entering current PersonalSurvey object into user's profile
      Meteor.users.update(
        {_id: Meteor.userId()}, 
        {$set: {
          "profile.personal_survey": PersonalSurvey
        } 
        });


  }


});




CollectionSchema = new SimpleSchema({
  wlb: {
    type: Number,
    label: 'Work Life Balance',
    optional: true,
    autoform: {
      afFieldInput: {
        type: "range",
        min: 1,
        max:5,
        steps: 1,
        value: 3,
        list: 'options'
      }
    }
  }
});

