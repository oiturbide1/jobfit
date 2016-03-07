Template.talentviewsurvey.events({
	"submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      var wb = event.target.wlb.value;
      console.log(wb);

      var wlb = template.find('input:radio[name=wlBalance]:checked');
      var balance = $(wlb).val();
	  console.log(balance);

	  var js = template.find('input:radio[name=security]:checked');
	  var security = $(js).val();
	  console.log(security);

      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {
					"profile.personal_survey.worklife_self": balance,
					"profile.personal_survey.jobsec_self": security
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

Template.slidertest.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      var wlb = AutoForm.getFieldValue('wlb','foo');
      console.log(wlb);
     



  }


});
