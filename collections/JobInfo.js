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