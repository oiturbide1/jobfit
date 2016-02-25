Company = new Meteor.Collection( 'company' );

CompanySchema = new SimpleSchema({
  "name":
  {
   type: String,
   label: "Company Name"
  },
 "address":
 {
   type: String,
   label: "Company Address"
 },
 "city":
 {
   type: String,
   label: "City"
 },
 "state":
 {
   type: String,
   label: "State"
 },
 "zip":
 {
   type: Number,
   label: "Zip Code"
 },
 "created":
 {
   type: Date,
   label: "Date Company Added",
   autoValue: function() {
     if ( this.isInsert ) {
       return new Date;
     }
   }
 },
 "updated":
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


Company.insert({name: "Duke", address: "55 main st"}, function(error, result) {
  //The insert will fail, error will be set,
  //and result will be undefined or false because "copies" is required.
  //
  //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
});
