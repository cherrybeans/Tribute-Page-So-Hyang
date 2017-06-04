$(document).ready(function() {
    $("a").addClass("class-link text-warning");
  });

 function calculate_age(birth_month,birth_day,birth_year){ 
  today_date = new Date(); 
  today_year = today_date.getYear(); 
  today_month = today_date.getMonth(); 
  today_day = today_date.getDate(); 
  age = (today_year + 1900) - birth_year;
  if ( today_month < (birth_month - 1)) 
    { age--; } if (((birth_month - 1) == today_month) && (today_day < birth_day)) 
    { age--; } 
  if (age > 1900) 
  	{ age -= 1900; } 
  return age;
}

var age = calculate_age(4,5,1978);
document.getElementById("age").innerHTML = age; 

var veteran = calculate_age(1,1,1996);
document.getElementById("veteran").innerHTML = veteran; 