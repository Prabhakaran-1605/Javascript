let cars = [{"car_make":"Eagle","car_model":"Vision","car_model_year":1993,"color":"Fuscia"},
{"car_make":"Kia","car_model":"Sportage","car_model_year":2012,"color":"Red"},
{"car_make":"Dodge","car_model":"Ram 1500","car_model_year":2003,"color":"Pink"},
{"car_make":"Mercedes-Benz","car_model":"M-Class","car_model_year":2002,"color":"Blue"},
{"car_make":"Mazda","car_model":"MPV","car_model_year":2006,"color":"Aquamarine"},
{"car_make":"Chevrolet","car_model":"Venture","car_model_year":2004,"color":"Khaki"},
{"car_make":"Chevrolet","car_model":"Monte Carlo","car_model_year":1996,"color":"Yellow"},
{"car_make":"Mazda","car_model":"626","car_model_year":1983,"color":"Khaki"},
{"car_make":"Toyota","car_model":"Tercel","car_model_year":1993,"color":"Puce"},
{"car_make":"Chevrolet","car_model":"Bel Air","car_model_year":1967,"color":"Mauv"}]

let new_Cars = cars.filter( (car)=> {
    return car.car_model_year >= 1990
    //return car.color == "White"
    //return car.brand == "Maruthi"

})
console.log(new_Cars)
