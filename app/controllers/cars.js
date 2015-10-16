
// Convert the model and make into a title property
function transform(model) {
	// Need to convert the model to a JSON object
	var carObject = model.toJSON();
	return {
		"title" : carObject.model + " by " + carObject.make, 
		"id" : model.cid
	};
}

// show only cars made by Honda
function filter(collection) {
	return collection.where ({
		make : 'Ford'
	});
}

//Free model-view data binding resources whn this 
// view-controller closes
$.mainWindow.addEventListener('close', function() {
	$.distroy();
});