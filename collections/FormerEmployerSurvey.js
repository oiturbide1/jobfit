//schema to define former employer survey
FormerEmployerSurvey = new Meteor.Collection( 'formeremployersurvey' );


FESurveySchema = new SimpleSchema({
  company:
  {
    type: String,
    optional: true
  },
  job_security:
  {
   type: Number,
   optional: true,
   label: 'Providing Job Security'
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
   optional: true,
   label: 'Providing a Manageable Workload'
 },
 development_opportunities:
 {
   type: Number,
   optional: true,
   label: 'Providing Training and Development Opportunities'
 },
 career_path:
 {
   type: Number,
   optional: true,
   label: 'Providing a Clear Career Path at My Employer'
 },
 promotion_criteria:
 {
   type: Number,
   optional: true,
   label: 'Providing Clear Promotion Criteria'
 },
 promotion_opportunities:
 {
    type: Number,
    optional: true,
    label: 'Providing Opportunities for Promotion'
 },
 freedom:
 {
    type: Number,
    optional: true,
    label: 'Providing Employees with the Freedom to Perform My Job in the Way that I Think is Best'
 },
 salary:
 {
    type: Number,
    optional: true,
    label: 'Providing A High Salary'
 },
 good_sup:
 {
    type: Number,
    optional: true,
    label: 'Providing Good Supervisors and Managers'
 },
 remote:
 {
    type: String,
    optional: true
 },
 left_by_choice:
 {
    type: String,
    optional: true
 },
 reasons_left:
 {
    type: Array,
    optional: true
 },
 'reasons_left.$':
 {
    type: String,
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

FormerEmployerSurvey.attachSchema(FESurveySchema);