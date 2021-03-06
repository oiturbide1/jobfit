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



//Schema = {};

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



UserProfile = new SimpleSchema({
    role: 
    {
        type: String
    },
    zipCode: {
        type: Number,
        optional: true
    }
    //information:
    //{
        //type: PersonalInfo
    //}
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
    /* Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    */
    createdAt: {
      type: Date,
      label: "Date user Added",
      autoValue: function() {
        if ( this.isInsert ) {
          return new Date;
        }
      }
    },
    //profile:
    //{
        //type: UserProfile,
        //optional: true
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
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true
    },
    */
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});


Meteor.users.attachSchema(User);
