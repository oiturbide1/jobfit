//schema to define companies
CurrentEmployerSurvey = new Meteor.Collection( 'currentemployersurvey' );

function filter20( value, type ){
  return value % 20 ? 2 : 1;
}


CESurveySchema = new SimpleSchema({
  company:
  {
    type: String,
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