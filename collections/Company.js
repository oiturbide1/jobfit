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
   label: "Date Company Added",
   autoValue: function() {
     if ( this.isInsert ) {
       return new Date;
     }
   }
 },
 updated:
 {
   type: Date,
   label: "Date Company Updated",
   optional:true,
   autoValue: function() {
     if ( this.isUpdate ) {
       return new Date;
     }
   }
 }
});

Company.attachSchema(CompanySchema);



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