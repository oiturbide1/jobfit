
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
        type: Number,
        label: 'Work Life Balance',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    jobsec_self:
    {
        type: Number,
        optional: true,
        label: 'Job Security',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    td_self:
    {
        type: Number,
        optional: true,
        label: 'Training and development opportunities',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    workload_self:
    {
        type: Number,
        optional: true,
        label: 'A Manageable Workload',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    careerpath_self:
    {
        type: Number,
        optional: true,
        label: 'A clear career path at my employer',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    promocrit_self:
    {
        type: Number,
        optional: true,
        label: 'Clear promotion criteria',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    promo_self:
    {
        type: Number,
        optional: true,
        label: 'Opportunities for promotion',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    auton_self:
    {
        type: Number,
        optional: true,
        label: 'The freedoom to perform my job in the way that i think is best',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    salary_self:
    {
        type: Number,
        optional: true,
        label: 'A high salary',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
    },
    goodsup_self:
    {
        type: Number,
        optional: true,
        label: 'Good supervisors and managers',
        max: 5,
        min: 1,
        optional: true,
        autoform: {
          type: "noUiSlider",
          step: 1,    
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
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
