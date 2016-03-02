PersonalSurvey = new Meteor.Collection('personal_survey');

PersonalSurveySchema = new SimpleSchema({
    timeStamp: 
    {
        type: Date,
        autoValue: function() {
            if ( this.isInsert ) {
                return new Date;
     }
   }
    },
    worklife_self:
    {
        type: Number
    },
    jobsec_self: 
    {
        type: Number
    }, 
    td_self: 
    {
        type: Number
    },
    workload_self:
    {
        type: Number
    }, 
    careerpath_self:
    {
        type: Number
    }, 
    promocrit_self: 
    {
        type: Number
    }, 
    promo_self: 
    {
        type: Number
    }, 
    auton_self: 
    {
        type: Number
    }, 
    salary_self: 
    {
        type: Number
    }, 
    goodsup_self: 
    {
        type: Number
    }
});

PersonalSurvey.attachSchema(PersonalSurveySchema);




PersonalInfo = new SimpleSchema({
	email:
	{
		type:String,
		label: 'Email',
		optional:true
	},

	zip:
	{
		type: Number,
		label: 'Zip Code'
	}
});


UserEducation = new SimpleSchema({
    school: {
        type: String,
        label: "School"
    },
    degree: {
        type: String,
        label: "Degree Earned"
    },
    field: {
      type: String,
      label: "Field"
    },
    educationLevel: {
      type: String,
      label: "Education Level",
      optional:true
    }

});


UserSkills = new SimpleSchema({
    skill1:
		{
        type: String,
        label: "Skill1",
		optional: true
        },
    skill2: {
        type: String,
        label: 'Skill2',
        optional: true
    },
    skill3: {
        type: String,
        label: 'Skill3',
        optional: true
    }

});


UserCreds = new SimpleSchema({
    certificate:
        {
        type: String,
        label: "Certificate",
        optional: true
        },
    creds: {
        type: String,
        label: 'Credentials',
        optional: true
    }

});


UserOccupation = new SimpleSchema({
    industry: {
        type: String,
        label: "Job Industry"
    },
    occupation: {
        type: String,
        label: "Occupation"
    },
    jobLevel: {
      type: String,
      label: "Job Level"
    }

});



UserProfile = new SimpleSchema({
		info:
		{
		  type: PersonalInfo,
          optional: true
		},
        education:
        {
            type: UserEducation,
            optional: true
        },
        skills:
        {
            type: UserSkills,
            optional: true
        },
        credentials:
        {
            type: UserCreds,
            optional: true
        },
		occupation_info:
		{
			type: UserOccupation,
            optional: true
		},
        personal_survey:
        {
            type: [PersonalSurvey],
            optional: true
        }
});


User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.

    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    created:
    {
        type: Date,
        autoValue: function() 
        {
            if ( this.isInsert ) 
            {
                return new Date;
            }
        }
    },
    profile:
    {
        type: UserProfile,
		optional:true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    /* Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
		*/
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true,
				blackbox: true,
				allowedValues: ['talent','rep', 'admin']
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});


Meteor.users.attachSchema(User);
