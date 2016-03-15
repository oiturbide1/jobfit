//schema to define companies
CurrentEmployerSurvey = new Meteor.Collection( 'currentemployersurvey' );

CESurveySchema = new SimpleSchema({
  company:
  {
    type: String,
    optional: true
  },
  job_security:
  {
   type: Number,
   optional: true
  },
  work_life_balance:
  {
    type: Number,
    optional: true,
    label: 'Supporting Work Life Balance'
  },
 workload:
 {
   type: Number,
   optional: true
 },
 development_opportunities:
 {
   type: Number,
   optional: true
 },
 career_path:
 {
   type: Number,
   optional: true
 },
 promotion_criteria:
 {
   type: Number,
   optional: true
 },
 promotion_opportunities:
 {
    type: Number,
    optional: true
 },
 freedom:
 {
    type: Number,
    optional: true
 },
 salary:
 {
    type: Number,
    optional: true
 },
 good_sup:
 {
    type: Number,
    optional: true
 },
 created:
 {
   type: Date,
   autoValue: function() {
     if ( this.isInsert ) {
       return new Date;
     }
   }
 },
 updated:
 {
   type: Date,
   optional:true,
   autoValue: function() {
     if ( this.isUpdate ) {
       return new Date;
     }
   }
 }


});

CurrentEmployerSurvey.attachSchema(CESurveySchema);