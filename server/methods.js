Meteor.startup(function () {
 process.env.MAIL_URL = 'smtp://postmaster@sandboxbf71083cbdc44a4c9ebcfd82601ba1d2.mailgun.org:c28807c983f8c2566445a9f4ab57cfa2@smtp.mailgun.org:587';});


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

  'insert_survey'(company, remote, curr_form)
  {
    var inserted = EmployerSurvey.insert({
      'company': company,
      'remote': remote,
      'cur_or_form': curr_form
    });
    return inserted;

  },


  'add_Survey'(id, survey)
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

  'update_userSurvey'(object)
  {
    Meteor.users.update(
      {_id: Meteor.userId()},
      {$push:
        {
          "profile.employer_survey": object
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
  }
 



});
