// schemas for field objects
wlbSchema = new SimpleSchema({
  work_life_balance: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

securitySchema = new SimpleSchema({
  security: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

developmentSchema = new SimpleSchema({
  development: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

workloadSchema = new SimpleSchema({
  workload: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

pathSchema = new SimpleSchema({
  career_path: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

criteriaSchema = new SimpleSchema({
  promotion_criteria: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

opportunitiesSchema = new SimpleSchema({
  promotion_opportunities: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

freedomSchema = new SimpleSchema({
  freedom: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

salarySchema = new SimpleSchema({
  salary: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});

managementSchema = new SimpleSchema({
  management: 
  {
    type: Number,
    max: 100,
    min: 0,
  },
  count:
  {
    type: Number
  }
  
});



//schema to define companies
Company = new Meteor.Collection( 'company' );

CompanySchema = new SimpleSchema({
  companyName:
  {
   type: String,
   label: "Company Name"
  },
  remote:
  {
    type: Boolean,
    label: 'Work Remotely?',
    optional: true,
    autoform:
    {
      type: 'boolean-radios',
      trueLabel: 'Yes',
      falseLabel: 'No',
      value: false
    }
  },
 address:
 {
   type: String,
   label: "Street Address"
 },
 city:
 {
   type: String,
   label: "City"
 },
 state:
 {
   type: String,
   label: "State"
 },
 zip:
 {
   type: Number,
   label: "Zip Code"
 },
 curr_or_form:
  {
    type: Boolean,
    label: 'Current or Former Employer',
    optional: true,
    autoform:
    {
      type: 'boolean-radios',
      trueLabel: 'Current',
      falseLabel: 'Former',
      value: false
    }
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
 },
 work_life_balance:
 {
    type: wlbSchema,
    optional: true 
 },
 job_security:
 {
    type: securitySchema,
    optional: true
 },
 development_opportunities:
 {
    type: developmentSchema,
    optional: true
 },
 workload:
 {
    type: workloadSchema,
    optional: true
 },
 career_path:
 {
    type: pathSchema,
    optional: true
 },
 promotion_criteria:
 {
    type: criteriaSchema,
    optional: true
 },
 promotion_opportunities:
 {
    type: opportunitiesSchema,
    optional: true
 },
 freedom:
 {
    type: freedomSchema,
    optional: true
 },
 salary:
 {
    type: salarySchema,
    optional: true
 },
 management:
 {
    type: managementSchema,
    optional: true
 }


});

Company.attachSchema(CompanySchema);


/*
Company.allow(
{
  insert() 
  {
    if ( Meteor.user() ) 
    {
      return true;
    } 
    else 
    {
      return false;
      console.log('not logged in');
    }
  },
  update() 
  {
    // When we will ALLOW updates on the client.
  },
  remove() 
  {
    // When we will ALLOW removes on the client.
  }
});


Company.deny(
{
  insert() 
  {
    if ( Meteor.user() ) 
    {
      return false;
    } 
    else 
    {
      return true;
    }
  },
  update() 
  {
    // When we will ALLOW updates on the client.
  },
  remove() 
  {
    // When we will ALLOW removes on the client.
  }
});
*/


