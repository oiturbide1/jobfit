


PersonalInfo = new SimpleSchema({
	zip:
	{
		type: Number,
		label: 'Zip Code'
	},
    gender:
    {
        type: String,
        allowedValues: ['Male','Female'],
        optional: true,
        label: 'Gender',
        autoform: {
            options: [
            {
                label: 'Male',
                value: 'Male'
            },
            {
                label: 'Female',
                value: 'Female'
            }
            ]
        }
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



UserEducation = new SimpleSchema({
    school: {
        type: String,
        label: "School"
    },
    degree: {
        type: String,
        label: "Degree Earned",
        //allowedValues: ['B.A','B.S','Associates','M.S'],
        optional: true,
        autoform: {
            options: [
            {
                label: 'B.A',
                value: 'ba'
            },
            {
                label: 'B.S',
                value: 'bs'
            },
            {
                label: 'Associates',
                value: 'assoc'
            },
            {
                label: 'M.S',
                value: 'ms'
            }
            ]
        }
    },
    field: {
      type: String,
      label: "Field"
    },
    level: 
    {
        type: String,
        label: "Education Level",
        optional:true,
        autoform: {
            type: "select-radio",
            options: function () {
                return [
                    {label: 'Some High School', value: 'somehs'},
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





UserSkills = new SimpleSchema({
    skills:
	{
        type: Array,
        label: "Skills",
		optional: true,
        minCount: 1,
        maxCount: 5
    },
    'skills.$':
    {
        type: String
    }
    /*skill2: {
        type: String,
        label: 'Skill2',
        optional: true
    },
    skill3: {
        type: String,
        label: 'Skill3',
        optional: true
    }*/

});


UserCreds = new SimpleSchema({
    creds: {
        type: Array,
        label: 'Credentials',
        optional: true,
        minCount: 1,
        maxCount: 5
    },
    'creds.$':
    {
        type: String
    }

});


UserOccupation = new SimpleSchema({
    industry:
    {
        type: String,
        label: "Job Industry",
        optional: true
    },
    occupation:
    {
        type: String,
        label: "Occupation",
        optional: true
    },
    jobLevel:
    {
      type: String,
      label: "Job Level",
      optional: true
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
    job_info:
    {
        type: JobInfo,
        optional: true
    },
    status:
    {
        type: EmpStatus,
        optional: true
    },
    personal_survey:
    {
        type: Array,
        optional: true
    },
    'personal_survey.$':
    {
        type: String,
        optional: true
    },
    current_survey:
    {
        type: Array,
        optional: true
    },
    'current_survey.$':
    {
        type: String,
        optional: true
    },
    former_survey:
    {
        type: Array,
        optional: true
    },
    'former_survey.$':
    {
        type: String,
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
