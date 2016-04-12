JobExplorer = new Meteor.Collection( 'jobexplorer' );

JExplorer = new SimpleSchema({
  personalSurvey:
  {
    type: Array,
    optional: true
  },
  'personalSurvey.$':
  {
    type: String,
    optional: true
  },
  employerSurveys:
  {
    type: Array,
    optional: true
  },
  'employerSurveys.$':
  {
    type: String,
    optional: true
  },
  IC:
  {
    type: Number,
    optional: true
  },
  occupation:
  {
    type: String,
    optional: true

  },
  joblevel:
  {
    type: String,
    optional:true
  },
  joblevel_other:
  {
    type: String,
    optional: true
  },
  expertise:
  {
    type: String,
    optional: true
  },
  education:
  {
    type: String,
    optional: true
  },
  education_other:
  {
    type: String,
    optional: true
  },
  gender:
  {
    type: String,
    optional: true
  }
});


JobExplorer.attachSchema(JExplorer);
