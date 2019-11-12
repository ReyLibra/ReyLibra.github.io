var currYear = new Date();

function getAge() {
  
  var year;  
  var age = prompt("What is your age?");
  
  if (age == null || age == "") {
    year = "No number was entered! :(";
  } else {
    year = "You were born in " + (currYear.getFullYear() - age);
	if (year == "You were born in NaN") {
		year = "No number was entered! :(";
	};
  };
  
  document.getElementById("calculated").innerHTML = year;
  
};