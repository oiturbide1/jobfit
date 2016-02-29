PersonalInfo = new Mongo.Collection('personalinfo');

PersonalInfo.attachSchema(new SimpleSchema({
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

}));



Schema = {};

//UserEducation = new Mongo.Collection('usereducation');

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
    skills:
		{
        type: Array,
        label: "Skills",
				optional: true,
				minCount: 1,
				maxCount:4
    },
		'skills.$':
		{
			type: String
		}



});



Schema.UserProfile = new SimpleSchema({
		UserProfile:
		{
				type: Object
		},
    'UserProfile.role':
    {
        type: String
    },

		UserProfileInfo:
		{
				type: Object
		},
    'UserProfileInfo.zipcode': {
        type: Number,
				maxCount: 5
    }
    //education:
    //{
        //type: UserEducation,
        //optional: true
    //}
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
    createdAt:
    {
      type: Date
    },
    //profile:
    //{
        //type: Schema.UserProfile,
				//optional:true
    //},
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
