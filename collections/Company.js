Company = new Meteor.Collection( 'company' );

CompanySchema = new SimpleSchema({
  companyName:
  {
   type: String,
   label: "Company Name"
  },
 address:
 {
   type: String,
   label: "Company Address"
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
    type: Number,
    optional: true 
 },
 job_security:
 {
    type: Number,
    optional: true
 },
 development_opportunities:
 {
    type: Number,
    optional: true
 },
 workload:
 {
    type: Number,
    optional: true
 },
 career_path:
 {
    type: Number,
    optional: true
 },
 promotion_criteria:
 {
    type: Number,
    optional: true
 },
 promotion_opportunities:
 {
    type: Number,
    optional: true
 },
 freedom:
 {
    type: Number,
    optional: true
 },
 salary:
 {
    type: Number,
    optional: true
 },
 management:
 {
    type: Number,
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


CollectionSchema = new SimpleSchema({
  slider: {
    type: Number,
    max: 150,
    min: 30,
    autoform: {
      type: "noUiSlider",
      step: 10,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
  }
});