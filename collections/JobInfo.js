JobInfo = new SimpleSchema({
	title:
	{
		type: String,
		autoform: {label:false}
	},
    start_date:
    {
        type: Date,
        optional: true,
        autoform: {label:false}
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
        allowedValues: ['Full Time', 'Part Time', 'Other']
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
        autoform:{label:false}
    }
});

EmpStatus = new SimpleSchema({
    status:
    {
        type: String,
        label: 'Status',
        allowedValues: ['Full Time', 'Part Time', 'Other']
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
        label: 'Average Hours'
    }
});


Reasons = new SimpleSchema({
    choice:
    {
        type: String,
        label: 'Did you leave by choice?',
        allowedValues: ['Yes', 'No']
    },
    yes_reasons:
    {
        type: [String],
        label: 'Reasons for leaving',
        optional: true,
        allowedValues: [
            'Found a higher paying job',
            'Found a more challenging job',
            'Made a career change',
            'Conflict with supervisor',
            'conflict with coworkers',
            'Lack of career opportunities for advancement',
            'Left due to family responibilities',
            'Geographically relocated in order',
            'Other'
            ]
        
    },
    no_reasons:
    {
        type: [String],
        label: 'Reasons for leaving',
        optional: true,
        allowedValues: [
            'Poor performance',
            'Conflit with supervisor',
            'Conflict with coworkers',
            'Organization closed or went out of business',
            'My job was eliminated due to downsizing, merger, and/or restructuring',
            'Other: please explain'
            ]
    },
    other:
    {
        type: String,
        label: 'Please explain',
        optional: true
    }
});


Job_Feelings = new SimpleSchema({
  job_satisfaction:
  {
    type: Number,
    label: 'Overall, I am satisfied with my current job',
    max: 100,
    min: 0,
    optional: true,
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
  performance: {
    type: Number,
    label: 'I perform my job well',
    max: 100,
    min: 0,
    optional: true,
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
  career: {
    type: Number,
    label: 'I would be glad to spend my whole career with my current employer',
    max: 100,
    min: 0,
    optional: true,
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
  leaving: {
    type: Number,
    label: 'I often think about leaving my current employer',
    max: 100,
    min: 0,
    optional: true,
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
  values: {
    type: Number,
    label: 'My current employer and I share the same values',
    max: 100,
    min: 0,
    optional: true,
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
  cooperate: {
    type: Number,
    label: 'I cooperate with my coworkers',
    max: 100,
    min: 0,
    optional: true,
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
  assist: {
    type: Number,
    label: 'I assist my coworkers when they need help',
    max: 100,
    min: 0,
    optional: true,
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
  actions: {
    type: Number,
    label: 'I think about how my actions affect my coworkers',
    max: 100,
    min: 0,
    optional: true,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'positions',
        values: [20,40,60,80,100],
        density: 5
      }
    }
  }
});
