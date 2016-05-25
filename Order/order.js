$.ajaxSetup({
global: false,
type: "POST"
});
$( "body" ).on( "click", "#submitRoomOrder", function() {
console.log("Success");

var data = {	
	ChekinDate:'2016-05-02',
	CheckoutDate:'2016-05-03',
	BookingCount:'1',
	PeopleCount:'2',
	HouseID:'26',
	IsInvoices:"Y",
	InvoiceName:"aaa",
	InvoicesReceiver:"aaaaa",
	CustomerName: "xiaoxixi",
	CustomerMobile: "158472761234",
	CustomerEmail: "xuwenfei886@gmail.com",

};

$.ajax({
method: "POST",
url: "//",
dataType: "jsonp",
data: { ChekinDate: "John", CheckoutDate: "Boston" ,PeopleCount:"",IsInvoices:"",OrderUserPhone:"",OrderDiscount:"",OrderDeposit:"",HouseID:"",OrderUserID:"",OrderUserName:"",OrderUserMail:""}
})
.done(function( msg ) {
alert( "Data Saved: " + msg );
});
});