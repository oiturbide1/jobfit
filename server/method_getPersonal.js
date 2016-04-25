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
});
