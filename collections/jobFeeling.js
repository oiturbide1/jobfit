feelingSchema = new SimpleSchema({
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
        mode: 'steps',
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
        mode: 'steps',
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
        mode: 'steps',
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
        mode: 'steps',
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
        mode: 'steps',
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
        mode: 'steps',
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
        mode: 'steps',
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
        mode: 'steps',
        density: 5
      }
    }
  }
});