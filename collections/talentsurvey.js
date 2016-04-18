
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
        optional: true,
        label: 'Supporting a flexible work schedule',
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
    rewperf_self:
    {
    	type: Number,
        optional: true,
        label: 'Rewarding employees based on their performance',
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
    mission_self:
    {
    	type: Number,
        optional: true,
        label: 'A clear mission',
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
    health_self:
    {
    	type: Number,
        optional: true,
        label: 'Providing good health benefits',
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
    rewrecog_self:
    {
    	type: Number,
        optional: true,
        label: 'Providing rewards and recognition',
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
    workspace_self:
    {
    	type: Number,
        optional: true,
        label: 'My own private office or work space',
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
    poorperfs_self:
    {
    	type: Number,
        optional: true,
        label: 'That my employer takes actions to deal with poor performers',
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
    }
});

PersonalSurvey.attachSchema(PersonalSurveySchema);
