Meteor.startup(function () {
 process.env.MAIL_URL = 'smtp://postmaster@sandboxbf71083cbdc44a4c9ebcfd82601ba1d2.mailgun.org:c28807c983f8c2566445a9f4ab57cfa2@smtp.mailgun.org:587';});

//get object type
 function get_type(thing){
     if(thing===null)return "[object Null]"; // special case
     return Object.prototype.toString.call(thing);
 }



Meteor.methods(
{

  'addUser'(email, password, type)
  {
    Accounts.createUser(
      {
      email: email,
      password: password
      },
      function(error)
      {
        if(error)
        {
          console.log(error);
          if(error.reason == '"Email already exists."'){
            validator.showErrors({
              email: 'That email is already in the system'
            });
          }

        }
        else
        {
            Router.go("/information");

            var userId = Meteor.userId();
            Roles.addUsersToRoles(userId,type);
        }

      });


  },



  'insert_company'(company)
  {
  	var inserted = Company.insert(company);
  	return inserted;
  },

  'insert_survey'(company, remote, curr_form, user_type)
  {
    var inserted = EmployerSurvey.insert({
      'company': company,
      'remote': remote,
      'cur_or_form': curr_form,
      'user_type': user_type
    });
    return inserted;

  },


  'update_Emp_Survey'(id, survey)
  {
    EmployerSurvey.update(
      {_id: id},
      {$set:
        {
          "work_life_balance": survey[0],
          'job_security': survey[1],
          'development_opportunities': survey[2],
          'workload': survey[3],
          'career_path': survey[4],
          'promotion_criteria': survey[5],
          'promotion_opportunities': survey[6],
          'freedom': survey[7],
          'salary': survey[8],
          'good_sup': survey[9],
          'flex': survey[16],
          'rew_perf': survey[17],
          'mission': survey[11],
          'health': survey[12],
          'rewrecog': survey[14],
          'workspace': survey[13],
          'poor_perfs': survey[15],
          'careless': survey[10]
        }
      });
  },

  'add_Personal_Survey'(survey)
  {
    var inserted = PersonalSurvey.insert({
      "worklife_self": survey[0],
      'jobsec_self': survey[1],
      'td_self': survey[2],
      'workload_self': survey[3],
      'careerpath_self': survey[4],
      'promocrit_self': survey[5],
      'promotion_opportunities': survey[6],
      'auton_self': survey[7],
      'salary_self': survey[8],
      'goodsup_self': survey[9],
      'flex_self': survey[10],
      'rewperf_self': survey[11],
      'mission_self': survey[12],
      'health_self': survey[13],
      'rewrecog_self': survey[14],
      'workspace_self': survey[15],
      'poorperfs_self': survey[16],
      'careless_self': survey[17]

      });
    return inserted;
  },

  'update_userSurvey'(objectID, survey_type)
  {

    if (survey_type == 'personal')
    {
      Meteor.users.update(
        {_id: Meteor.userId()},
        {$push:
          {
            "profile.personal_survey": objectID
          }
        });
    }
    else if (survey_type == 'employer')
    {
      Meteor.users.update(
        {_id: Meteor.userId()},
        {$push:
          {
            "profile.employer_survey": objectID
          }
        });
    }



  },

  'add_job_info'(surveyID, info)
  {
      EmployerSurvey.update(
      {_id: surveyID},
      {$set:
        {
          "job_title": info[0],
          'start_date': info[1],
          'promoted': info[2],
          'promo_date': info[3]
        }
      });


  },


  'sendEmail'(email)
  {
      // send the email!
      Email.send({to:email, from:'empMatch@gmail.com', subject:'Thank you for signing up for our project', text:'We will share with you some news about us in a near future. See you soon!'});
  },

  'sendVerificationLink'()
  {
    var userId = Meteor.userId();
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  },

  'checkSurveyDate'(type)
  {
		var surv;
    var user = Meteor.user();
		//Personal Survey
		if(type == 'personal'){
      var survey_array = user.profile.personal_survey;
      if (survey_array == null)
      {
        return true;
      }
			var survCheck = survey_array.length - 1;
      if (survCheck < 0){
        return false;
      }
      surv = user.profile.personal_survey[survCheck];
      var temp = PersonalSurvey.findOne(surv).timeStamp;

			//console.log(temp);
		}
		//Employer
		else if(type == 'employer'){
			surv = EmployerSurvey.findOne(id);
		}else {return false;}
		if(surv == null)
			return false;

		var date = new Date(temp);
    console.log(date);
		var newdate = new Date(new Date(temp).setMonth(date.getMonth() + 6));
    console.log(newdate);
		if(new Date() > newdate)
    {
			return true;
      //good to edit
    }
		return false;
 }

 /*
 'isAdmin'()
 {
    var user = this.userId;
    console.log(user);
    var foundUser = Meteor.users.find({'_id': user});
    //console.log(foundUser);
    var role = foundUser.roles;
    //console.log(role);
 }
  */


});
