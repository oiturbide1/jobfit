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
        type: Number,
        optional: true
    },
    td_self:
    {
        type: Number,
        optional: true
    },
    workload_self:
    {
        type: Number,
        optional: true
    },
    careerpath_self:
    {
        type: Number,
        optional: true
    },
    promocrit_self:
    {
        type: Number,
        optional: true
    },
    promo_self:
    {
        type: Number,
        optional: true
    },
    auton_self:
    {
        type: Number,
        optional: true
    },
    salary_self:
    {
        type: Number,
        optional: true
    },
    goodsup_self:
    {
        type: Number,
        optional: true
    },
    flex_self:
    {
    	type: Number,
        optional: true
    },
    rewperf_self:
    {
    	type: Number,
        optional:true
    },
    mission_self:
    {
    	type: Number,
        optional: true
    },
    health_self:
    {
    	type: Number,
        optional: true
    },
    rewrecog_self:
    {
    	type: Number,
        optional: true
    },
    workspace_self:
    {
    	type: Number,
        optional:true
    },
    poorperfs_self:
    {
    	type: Number,
        optional: true
    }
});

PersonalSurvey.attachSchema(PersonalSurveySchema);

