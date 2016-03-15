JobInfo = new SimpleSchema({
	title:
	{
		type: String,
		label: 'Job Title'
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
        allowedValues: ['Yes','No']
    },
    promo_times:
    {
        type: Number,
        label: 'How many times have you been promoted?',
        optional: true
    },
    promo_date:
    {
        type: Array,
        optional: true,
        label: 'Promotion Date',
        minCount: 1,
        custom: function(){
            maxCount = AutoForm.getFieldValue('promo_times');
        }
        
    },
    'promo_date.$':
    {
        type: Date,
        optional: true
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
        label: 'Other',
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