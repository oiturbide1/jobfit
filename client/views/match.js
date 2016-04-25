
var last_list;
var empInfo;
Template.matchAlg.helpers({
	'matches': function(){
		var id = "56bf8474e7ebfe1d2cb334fe";
		var temp = Meteor.call('sumEmployers', function(error,result){
			if(error)
				console.log(error);
			else{

				Session.set('temp', result);
			}

		});
		var temp2 = Meteor.call('getPersonalSurvey',id,function(err, res){
			if(err)
				console.log(err);
			else{
				Session.set('surv', res);
			}
		});
		return false;

		//return temp.length;
	}



});

Template.match.helpers({
	'foundUser': function() {
		if(Session.get('surv') != null){
			//console.log(Session.get('temp').length);
    		return Session.get('temp');
		}
		return null;

  	}

});
Template.result.helpers({
	'resultSet': function(){
		last_list = [];
		var temp;
		var mySurvey = Session.get('surv');
		var myEmps = Session.get('temp');
		for(var i = 0; i < myEmps.length; i++){
			temp = getRank(mySurvey, myEmps[i]);
			last_list.push(temp);
			//console.log(temp.emp.name);
			//console.log(last_list[i].emp.name);
		}
		last_list.sort(function(a,b){a.rank - b.rank});
		return last_list;
		}
});

Template.match.helpers({
	'employer' : function(){
		return Session.get('employerInfo');
	}
})

Template.info.helpers({
	'texts' : function(){
		return Session.get('employerInfo');
	}
})

Template.match.events({
	'click' :function(event){
		if(event.target.id == "returned"){
			var str = event.target.innerHTML.trim();
			var i;
			var emps = Session.get('temp');
			for(i = 0; i < emps.length; i++){
				if(emps[i].name == str){
					//console.log(emps[i]);
					Session.set('employerInfo', emps[i]);
					break;
				}

			}



		}
		return false;
		//console.log(event.target.id);
	}
});



function getRank(user, emp){
		var rank = {emp: null, rank: 0.0};


		if (user.length != emp.length){
			return 0;
		}
		var matchAvg = 0;

		matchAvg += Math.abs(user.worklife - emp.worklife);
		matchAvg += Math.abs(user.jobsec - emp.jobsec);
		matchAvg += Math.abs(user.td - emp.td);
		matchAvg += Math.abs(user.workload - emp.workload);
		matchAvg += Math.abs(user.careerpath - emp.careerpath);
		matchAvg += Math.abs(user.promocrit - emp.promocrit);
		matchAvg += Math.abs(user.promo - emp.promo);
		matchAvg += Math.abs(user.auton - emp.auton);
		matchAvg += Math.abs(user.salary - emp.salary);
		matchAvg += Math.abs(user.goodsup - emp.goodsup);
		matchAvg += Math.abs(user.flex - emp.flex);
		matchAvg += Math.abs(user.rewperf - emp.rewperf);
		matchAvg += Math.abs(user.mission - emp.mission);
		matchAvg += Math.abs(user.health - emp.health);
		matchAvg += Math.abs(user.rewrecog - emp.rewrecog);
		matchAvg += Math.abs(user.workspace - emp.workspace);
		matchAvg += Math.abs(user.poorperfs - emp.poorperfs);

		matchAvg = matchAvg / 17;
		rank.emp = emp;
		rank.rank = matchAvg;
		return rank;

}
