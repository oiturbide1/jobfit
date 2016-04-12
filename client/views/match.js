


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

var id = "56bf8474e7ebfe1d2cb334fe"//Meteor.users.find().count();//Meteor.users.find({}, {skip: 0limit: 1}).fetch();
var ps;

var user = Meteor.userId();
console.log(user);
console.log(Meteor.call('sumEmployers'));
Meteor.call('sumEmployers', function(error, result){
	if(error)
		console.log(error);
	else
		Meteor.call('getPersonalSurvey', id, function(err, res){
			if(err){
				console.log(err);
			}else{
				//console.log(result);
				ps = res;
				last_list = [];
				var temp;
				for(var i = 0; i < result.length; i++){
					temp = getRank(ps, result[i]);
					last_list.push(temp);
					//console.log(last_list[i].emp.name);
				}
				last_list.sort(function(a,b){a.rank - b.rank});
				//console.log(last_list);
				//userinfo = result;
			}
		});
});
//console.log(result);
/*
console.log(businesses);

Meteor.call('getPersonalSurvey', id, function(error, res){
	if(error){
		console.log(err);
	}else{
		//console.log(result);
		ps = res;
	//userinfo = result;
	}
});
console.log(ps);
var last_list = [];
for (var key in businesses) {
   	// skip loop if the property is from prototype
	if (!businesses.hasOwnProperty(key)) continue;
	var obj = result[key];
	console.log(obj);
  		
}*/
	
	


/*Template.match.helper({
	'matchAlg' : function(){
		var id = Meteor.userId;
	}
	//console.log(id);
	//Meteor.Users.Profile	
});*/
/*
Meteor.call('sumEmployers', function(error, result){
	if(error)
		console.log(error);
	else
		console.log(result);

});*/
