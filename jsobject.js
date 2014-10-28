function Car(make, model){
 this.make = make;
 this.model = model;
 this.to_s = to_s
}

function to_s() {
  var result = "";
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
        result += i + " = " + this[i] + "\n";
    }
  }
  return result;
}

var myCar = new Car("Totoya", "Camry");
console.log(myCar.to_s());
