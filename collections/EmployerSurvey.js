//schema to define companies
EmployerSurvey = new Meteor.Collection( 'employersurvey' );

function filter20( value, type ){
  return value % 20 ? 2 : 1;
}


ESurvey = new SimpleSchema({
  company:
  {
    type: String,
    optional: true
  },
  cur_or_form:
  {
    type: Number,
    optional: true
  },
  job_security:
  {
   type: Number,
   optional: true,
   label: 'Providing Job Security',
   max: 100,
   min: 0,
   autoform: {
    type: "noUiSlider",
    step: 1,    
    noUiSlider_pipsOptions: {
      mode: 'positions',
      values: [20,40,60,80,100],
      density: 5
      }
    }
  },
  work_life_balance:
  {
    type: Number,
    optional: true,
    label: 'Supporting Work Life Balance',
    max: 100,
    min: 0,
    autoform: {
     type: "noUiSlider",
     step: 1,    
     noUiSlider_pipsOptions: {
       mode: 'positions',
       values: [20,40,60,80,100],
       density: 5
      }
    }
  },
 workload:
 {
   type: Number,
   optional: true,
   label: 'Providing a Manageable Workload',
   max: 100,
   min: 0,
   autoform: {
    type: "noUiSlider",
    step: 1,    
    noUiSlider_pipsOptions: {
      mode: 'positions',
      values: [20,40,60,80,100],
      density: 5
      }
    }
 },
 development_opportunities:
 {
   type: Number,
   optional: true,
   label: 'Providing Training and Development Opportunities',
   max: 100,
   min: 0,
   autoform: {
    type: "noUiSlider",
    step: 1,    
    noUiSlider_pipsOptions: {
      mode: 'positions',
      values: [20,40,60,80,100],
      density: 5
      }
    }
 },
 career_path:
 {
   type: Number,
   optional: true,
   label: 'Providing a Clear Career Path at My Employer',
   max: 100,
   min: 0,
   autoform: {
    type: "noUiSlider",
    step: 1,    
    noUiSlider_pipsOptions: {
      mode: 'positions',
      values: [20,40,60,80,100],
      density: 5
      }
    }
 },
 promotion_criteria:
 {
   type: Number,
   optional: true,
   label: 'Providing Clear Promotion Criteria',
   max: 100,
   min: 0,
   autoform: {
    type: "noUiSlider",
    step: 1,    
    noUiSlider_pipsOptions: {
      mode: 'positions',
      values: [20,40,60,80,100],
      density: 5
      }
    }
 },
 promotion_opportunities:
 {
    type: Number,
    optional: true,
    label: 'Providing Opportunities for Promotion',
    max: 100,
    min: 0,
    autoform: {
     type: "noUiSlider",
     step: 1,    
     noUiSlider_pipsOptions: {
       mode: 'positions',
       values: [20,40,60,80,100],
       density: 5
      }
    }
 },
 freedom:
 {
    type: Number,
    optional: true,
    label: 'Providing Employees with the Freedom to Perform My Job in the Way that I Think is Best',
    max: 100,
    min: 0,
    autoform: {
     type: "noUiSlider",
     step: 1,    
     noUiSlider_pipsOptions: {
       mode: 'positions',
       values: [20,40,60,80,100],
       density: 5
      }
    }
 },
 salary:
 {
    type: Number,
    optional: true,
    label: 'Providing A High Salary',
    max: 100,
    min: 0,
    autoform: {
     type: "noUiSlider",
     step: 1,    
     noUiSlider_pipsOptions: {
       mode: 'positions',
       values: [20,40,60,80,100],
       density: 5
      }
    }
 },
 good_sup:
 {
    type: Number,
    optional: true,
    label: 'Providing Good Supervisors and Managers',
    max: 100,
    min: 0,
    autoform: {
     type: "noUiSlider",
     step: 1,    
     noUiSlider_pipsOptions: {
       mode: 'positions',
       values: [20,40,60,80,100],
       density: 5
      }
    }
 },
 remote:
 {
    type: String,
    optional: true
 },
 job_title:
 {
    type: String,
    label: 'Job Title',
    optional: true
  },
  start_date:
  {
    type: Date,
    optional: true,
    label: 'Start Date'
  },
  promoted:
  {
    type: String,
    label: 'Have you been promoted?',
    optional: true,
    allowedValues: ['Yes','No']
  },
  promo_date:
  {
    type: Array,
    optional: true,
    label: 'Please enter your dates of promotion',
    minCount: 1,
    maxCount: 5
      
  },
  'promo_date.$':
  {
    type: Date,
    optional: true
  }, 
  status:
  {
    type: String,
    label: 'Status',
    allowedValues: ['Full Time', 'Part Time', 'Other'],
    optional: true
  },
  other:
  {
    type: String,
    label: 'Other: Please Explain',
    optional: true
  },
  hours:
  {
    type: Number,
    label: 'Average Hours',
    optional: true
  },
  //job_feelings:
  //{
    //type: Job_Feelings,
    //optional: true
  //},
  //reasons_left:
  //{
    //type: Reasons,
    //optional:true
  //},
  timeStamp:
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
  },
  comments:
  {
   type: String,
   optional: true
  }


});

EmployerSurvey.attachSchema(ESurvey);