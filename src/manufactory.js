// make('Nissan') is a car
// model('Pathfinder') is a make
// Pathfinder is a 

function Car() {
	this.manufactured_date = new Date().toString();
}

function Make(maker) {
	this.manufactuer = maker;
}
Make.prototype = new Car();

function YourFavoriteMake(name) {
	this.modelName = name;
}
YourFavoriteMake.prototype = new Make('nissan');

var pathFinder = new YourFavoriteMake('Pathfinder');

function YourFavoriteModel(plate) {
	this.licensePlate = plate;
}
YourFavoriteModel.prototype = new YourFavoriteMake('PathFinder');

var plates = ['JKH-893', 'UH7-II2', 'MNL-I45'];

console.log(plates.map((plate) => new YourFavoriteModel(plate)));

