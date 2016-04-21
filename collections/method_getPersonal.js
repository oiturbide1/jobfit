//console.log(Items.find().count());





Meteor.methods({
	'createEmployerSurvey' : function(name,street,city,state,cur_form){
		var inserted = Employers.insert({
			"cur_or_form" : cur_form, 
    		"jobsec_cur" : 0, 
    		"worklife_cur" : null, 
    		"workload_cur" : null, 
    		"careerpath_cur" :null, 
    		"td_cur" : null, 
		    "promo_cur" : null, 
		    "goodsup_cur" : null, 
		    "auton_cur" : null, 
		    "promocrit_cur" : null, 
		    "salary_cur" : null, 
		    "flex_cur" : null, 
		    "rewperf_cur" : null, 
		    "mission_cur" : null, 
		    "health_cur" : null, 
		    "rewrecog_cur" : null, 
		    "workspace_cur" : null, 
		    "poorperfs_cur" : null, 
		    "jobsat" : null, 
		    "commit" : null, 
		    "itl" : null, 
		    "values" : null, 
		    "jobperf" : null, 
		    "coop" :null, 
		    "help" : null, 
		    "court" : null, 
		    "cur_emp_name" : name, 
		    "cur_state" : state, 
		    "cur_town" : city, 
		    "curr_city_country" : street, 
		    "cur_ten_years" : null, 
		    "cur_ten_mos" : null, 
		    "hours_per_week_work" : null, 
		    "comments" : null, 
		    "timeStamp" : null
		});
		return inserted; 
	},
	'createJobExplorer' : function(){
		var inserted = Items.insert({
			'personalSurveys' : [],
			'employerSurveys' : [],
			'IC' : 0,
			'occupation' : '',
			'joblevel' : '',
			'joblevel_other' : null,
			'expertise' : null,
			'education' : 0,
			'education_other' : null,
			'gender' : 0
		});

		return inserted


	},
	'updateViewsJobExpl' : function(survey,id){
		Items.update(
		{_id: id},
		{'worklife_cur' : survey.worklife_self,
		 'jobsec_cur' : survey.jobsec_self,
		 'td_cur' : survey.td_self,
		 'workload_cur' : survey.workload_self,
		 'careerpath_cur' : survey.careerpath_self,
		 'promocrit_cur' : survey.promocrit_self,
		 'auton_cur' : survey.auton_self,
		 'salary_cur' : survey.salary_self,
		 'goodsup_cur' : survey.goodsup_self,
		});
	},
	'updateGenJobExpl' : function(data, id){
		Items.update(
      		{_id: id },
      		{$set:
       	 	{
          		'gender' : data
        	}
      	});
	},
	'updateEducJobExpl' : function(data, field, id){
		Items.update(
			{_id: id},
			{$set:
			{
				'education' :data,
				'education_other' : field
			}
		});
	},
	'updateExpJobExpl' : function(creds, id){
		Items.update(
			{_id:id},
			{$set:{
				'expertise' : creds
			}});
	},
	'updateOccuJobExpl' : function(industry, occu, level, id){
		Items.update(
			{_id: id},
			{$set:
				{
					'joblevel_other' : industry,
					'occupation' : occu,
					'joblevel' : level
		}});

	},
	'insertSurvey' : function(surveyType, surveyID, expId){
		//Personal Surveys
		if(surveyType == 0){
			Items.update(
			{_id: expId},
			{$push: 
				{'personalSurvey': surveyID }
			});
			return 1;
		}else if(surveyType == 1){
			Items.update(
			{_id: expId},
			{$push:
				{'employerSurvey': surveyID}
			});
			return 1;
		}
		return 0;
	},
	'findExplorer' : function (expId){
		return Items.find({_id : expId}).fetch();
	},
	'getPersonalSurvey': function(value){
		//var id = new Meteor.Collection.ObjectID("56bf8474e7ebfe1d2cb334fe");
		var id = new Meteor.Collection.ObjectID(value);
		var pes = Surveys.findOne(id);//({_id: ObjectId("56bf8474e7ebfe1d2cb334fe")})//Surveys.findOne(id);
		//console.log(pes.worklife_self);
		var returnType = { worklife: 0, jobsec: 0,
td: 0, workload: 0, careerpath: 0, promocrit: 0,
promo: 0, auton: 0, salary: 0, goodsup: 0,
flex: 0, rewperf: 0, mission: 0, health: 0,
rewrecog: 0, workspace: 0, poorperfs: 0};

		returnType.worklife = pes.worklife_self;
		returnType.jobsec = pes.jobsec_self;
		returnType.td = pes.td_self;
		returnType.workload = pes.workload_self;
		returnType.careerpath = pes.careerpath_self;
		returnType.promocrit = pes.promocrit_self;
		returnType.promo = pes.promo_self;
		returnType.auton = pes.auton_self;
		returnType.salary = pes.salary_self;
		returnType.goodsup = pes.goodsup_self;
		returnType.flex = pes.flex_self;
		returnType.rewperf = pes.rewperf_self;
		returnType.mission = pes.mission_self;
		returnType.health = pes.health_self;
		returnType.rewrecog = pes.rewrecog_self;
		returnType.workspace = pes.workspace_self;
		returnType.poorperfs = pes.poorperfs_self;
		for (var key in returnType) {
    	// skip loop if the property is from prototype
    		if (!returnType.hasOwnProperty(key)) continue;
    		returnType[key] *= 20;
    		
		}
		//console.log(returnType.jobsec);
		
		return returnType;
	},
	/*
	'findMismatch' : function(user, emps){
		var allMatches = [];
		for(var i = 0; i < emps.length; i++){
			//var temp = emps[i];
			allMatches.push(getRank(user,emps[i]);
		}

	}
	*/

	'getEmployers' : function(){
		var emps = Employers.find().fetch();
		//var emps = Employers.find( distinct: "cur_emp_name" );
		return emps;
	},
	
	'lastPersonalSurvey' :function(value){
		var id = new Meteor.Collection.ObjectID(value);
		var je = Items.findOne(id);
		var len = je.personalSurveys.length;
		if(len < 1)
			return null;
		id = new Meteor.Collection.ObjectID(je.personalSurveys[len-1]._str);
		var ps = Surveys.findOne(id);
		return ps;

	},
	'checkSurveyDate' : function(value, num){
		var id = new Meteor.Collection.ObjectID(value);
		var surv;
		//Personal Survey
		if(num == 0){
			surv = Surveys.findOne(id);
			//console.log(surv.timeStamp);
		}
		//Employer
		else if(num == 1){
			surv = Employers.findOne(id);
		}else {return false;}
		if(surv == null)
			return false;
		var date = new Date(surv.timeStamp);
		var newdate = new Date(new Date(surv.timeStamp).setMonth(date.getMonth() + 6));
		if(new Date() > newdate)
			return true;
		return false;

	},
	'sumEmployers' : function(value){
		var as = Employers.find({}).fetch();
		var emps = [];
		if(as == null)
			return emps;		
    	var temp = { name : as[0].cur_emp_name, count: 1
    				, jobsec: as[0].jobsec_cur, worklife: as[0].worklife_cur, workload: as[0].workload_cur
    				,careerpath: as[0].careerpath_cur, td: as[0].td_cur,   promocrit: as[0].promocrit_cur,
promo: as[0].promo_cur, auton: as[0].auton_cur, salary: as[0].salary_cur, goodsup: as[0].goodsup_cur,
flex: as[0].flex_cur, rewperf: as[0].rewperf_cur, mission: as[0].mission_cur, health: as[0].health_cur,
rewrecog: as[0].rewrecog_cur, workspace: as[0].workspace_cur, poorperfs: as[0].poorperfs_cur};
		emps.push(temp);
    	var k = 0;
    	var ent;
    	
		for (var key in as) {
			k++;
			if(k == 1){
				continue;
			}
			ent = false;
    	// skip loop if the property is from prototype
    		if (!as.hasOwnProperty(key)) continue;
    		for(var i = 0; i < emps.length; i++){
    			if(emps[i].name == as[key].cur_emp_name){

    				emps[i].count++;
    				var ct = emps[i].count;
    				var oct = emps[i].count - 1;
    				emps[i].jobsec = ((oct * emps[i].jobsec) + as[key].jobsec_cur)/ct;
    				emps[i].worklife = ((oct * emps[i].worklife) + as[key].worklife_cur)/ct;
    				emps[i].workload = ((oct * emps[i].workload) + as[key].workload_cur)/ct;
    				emps[i].careerpath = ((oct * emps[i].careerpath) + as[key].careerpath_cur)/ct;
    				emps[i].td = (oct * emps[i].td) + as[key].td_cur;
    				emps[i].td /= ct;
    				emps[i].promocrit = (oct * emps[i].promocrit) + as[key].promocrit_cur;
    				emps[i].promocrit /= ct;
					emps[i].promo = (oct * emps[i].promo) + as[key].promo_cur; 
					emps[i].promo /= ct;
					emps[i].auton = (oct * emps[i].auton ) + as[key].auton_cur;
					emps[i].auton /= ct;
					emps[i].salary = (oct * emps[i].salary) + as[key].salary_cur;
					emps[i].salary /= ct;
					emps[i].goodsup = (oct * emps[i].goodsup) + as[key].goodsup_cur;
					emps[i].goodsup /= ct;
					emps[i].flex = (oct * emps[i].flex) + as[key].flex_cur;
					emps[i].flex /= ct;
					emps[i].rewperf = (emps[i].rewperf * oct) + as[key].rewperf_cur;
					emps[i].rewperf /= ct;
					emps[i].mission = (emps[i].mission * oct ) + as[key].mission_cur;
					emps[i].mission /= ct;
					emps[i].health = (emps[i].health * oct) + as[key].health_cur;
					emps[i].health /= ct;
					emps[i].rewrecog = (emps[i].rewrecog * oct) + as[key].rewrecog_cur;
					emps[i].rewrecog /=ct;
					emps[i].workspace = (oct * emps[i].workspace) + as[key].workspace_cur;
					emps[i].workspace /= ct;
					emps[i].poorperfs = (oct * emps[i].workspace) +  as[key].poorperfs_cur;
					emps[i].poorperfs /= ct;

					/*for(var j = 2; j < emps[i].length; j++){
						emps[i][j] /= emps[i].count;
					}*/
					ent = true;
					break;
    			}
    			
    			
    		}
    		if(ent == false){
    			var x;
    			x = { name : as[key].cur_emp_name, count: 1
    				, jobsec: as[key].jobsec_cur, worklife: as[key].worklife_cur, workload: as[key].workload_cur
    				,careerpath: as[key].careerpath_cur, td: as[key].td_cur,   promocrit: as[key].promocrit_cur,
promo: as[key].promo_cur, auton: as[key].auton_cur, salary: as[key].salary_cur, goodsup: as[key].goodsup_cur,
flex: as[key].flex_cur, rewperf: as[key].rewperf_cur, mission: as[key].mission_cur, health: as[key].health_cur,
rewrecog: as[key].rewrecog_cur, workspace: as[key].workspace_cur, poorperfs: as[key].poorperfs_cur};
    			emps.push(x);
    		}
    		
    			
    		
		}
		
		
		return emps;
	}


});
/*
//Matching Algorithm
var userinfo;
var businesses;
Meteor.call('getPersonalSurvey', "56bf8474e7ebfe1d2cb334fe", function(error, result){
	if(error){
		console.log(error);
	}else{
		console.log("I have a result");
		for (var key in result) {
    	// skip loop if the property is from prototype
    		if (!result.hasOwnProperty(key)) continue;
    		var obj = result[key];
    		//console.log(obj);
    		
		}
		userinfo = result;
	}
});


Meteor.call('sumEmployers', function(error, result){
	if(error)
		console.log(error);
	else
		businesses = result;

});
//console.log(businesses);
var last_list = [];
for(var i = 0; i < businesses.length; i++){
	Meteor.call('getRank', userinfo, businesses[i], function(error, result){
		if(error)
			console.log(error);
		else{
			last_list.push(result);
		}

	});
}
last_list.sort(function(a,b){return a.rank - b.rank});
console.log(last_list);
*/


/*
Meteor.call('checkSurveyDate', "56bf8474e7ebfe1d2cb334fe", 0, function(error, result){
	if(error)
		console.log(error);
	else
		console.log(result);

});



Meteor.call('lastPersonalSurvey', "56bf8474e7ebfe1d2cb33500", function(error, result){
	if(error)
		console.log(error);
	else{
		
		var date = new Date(result.timeStamp);
		var newdate = new Date(new Date(result.timeStamp).setMonth(date.getMonth() + 6));
		console.log(newdate);
		console.log(new Date());
		if(new Date() > newdate){
			console.log("Change it");
		}
	}
		
});
//Retrieve Employers


var user_rating;
var emps;
Meteor.call('getPersonalSurvey', "56bf8474e7ebfe1d2cb334fe", function(error, result){
	if(error){
		console.log(error);
	}else{
		//console.log("I have a result");
		user_rating = result;
	}
});



Meteor.call('getEmployers', function(error, result){
	if(error){
		console.log("first error")
		console.log(error);
	}
	else{
		Meteor.call('getRank',user_rating, result[0],  function(err, res){
			if(err){ 
				console.log("sec error");
				console.log(err);
		}
		
			else{
				console.log("I have an answer");
				console.log(res.rank);
				console.log(res.emp.cur_emp_name)
			}
		});
	
	}
		
});

*/
/*function(error, result)){
	if(error){
		console.log(error);
	}else{
		console.log("I have a value");
	}


});


Meteor.call('getPersonalSurvey', "56bf8474e7ebfe1d2cb334fe", function(error, result){
	if(error){
		console.log(error);
	}else{
		console.log("I have a result");
		for (var key in result) {
    	// skip loop if the property is from prototype
    		if (!result.hasOwnProperty(key)) continue;
    		var obj = result[key];
    		console.log(obj);
    		
		}
	}
});*/
