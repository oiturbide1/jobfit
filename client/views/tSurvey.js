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
        {_id: Meteor.userId()}, {$set: {"profile.survey": [{"worklifebalance": balance},{"jobsecurity": security}]} }
      );


  }


});