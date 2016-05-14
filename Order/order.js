$.ajaxSetup({
global: false,
type: "POST"
});
$( "body" ).on( "click", "#submitRoomOrder", function() {
console.log("Success");

$.ajax({
method: "POST",
url: "//",
dataType: "jsonp",
data: { ChekinDate: "John", CheckoutDate: "Boston" ,PeopleCount:"",IsInvoices:"",OrderUserPhone:"",OrderDiscount:"",OrderDeposit:"",HouseID:"",OrderUserID:"",OrderUserName:"",OrderUserMail:""}
});
.done(function( msg ) {
alert( "Data Saved: " + msg );
});
});