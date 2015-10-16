//create cars collection of data.
Alloy.Collections.instance("cars");

//create the cars controller for the controller / view pair that will display the results.
var carsController = Alloy.createController("cars");


// add the data to the collection AFTER the controller is opened.  
Alloy.Collections.cars.reset ([{
	"make" : "Honda", 
	"model" : "Civic"
}, {
	"make" : "Honda", 
	"model" : "Accord"
}, {
	"make" : "Ford", 
	"model" : "Escape"
}, {
	"make" : "Ford", 
	"model" : "Mustang"
}, {
	"make" : "Nissan", 
	"model" : "Altima"
}]);

carsController.mainWindow.open();
