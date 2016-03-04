Template.talentviewsurvey.events({
	"submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

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



UserEducationLevel = new SimpleSchema({ 
    education_level: {
        type: String,
        label: "Education Level",
        optional:true,
        autoform: {
            type: 'select-radio',
            options: function (){
                return [
                    {label: 'Some High School', value: 'some hs'},
                    {label: 'High School Diploma', value: 'hs_diploma'},
                    {label: 'Associates Degree', value: 'assoc'},
                    {label: 'Bachelors Degree', value: 'ba'},
                    {label: 'Some Graduate', value: 'somegr'},
                    {label: 'Masters Degree', value: 'ms'},
                    {label: 'All but differation doctoral work', value: 'diff'},
                    {label: 'Juris Doctor Degree', value: 'jd'},
                    {label: 'PhD Degree', value: 'phd'},
                    {label: 'Other: ', value: 'other'}
            ];
        }
      }
    }

});
