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
    },
    flex_self:
    {
    	type: Number
    },
    rewperf_self:
    {
    	type: Number
    },
    mission_self:
    {
    	type: Number
    },
    health_self:
    {
    	type: Number
    },
    rewrecog_self:
    {
    	type: Number
    },
    workspace_self:
    {
    	type: Number
    },
    poorperfs_self:
    {
    	type: Number
    }
});

PersonalSurvey.attachSchema(PersonalSurveySchema);

