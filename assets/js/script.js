let ageForm = document.getElementById('age_form');


ageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let day =document.getElementById('day');
    let month =document.getElementById('month');
    let year =document.getElementById('year');
    const d = new Date();
    let Y = d.getFullYear();

   
        
   
        function dayError(){
            if (day.value=="") {
                document.getElementById("err_msg_day").innerHTML = "This field is required";
                document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById("day_label").style.color = "hsl(0, 100%, 67%)";
                
                return true;
                
            }
            else{
            
                document.getElementById("err_msg_day").innerHTML = "";
                document.getElementById("day").style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById("day_label").style.color = "hsl(0, 1%, 44%)";
        
                
            }
        
            if (day.value > 31 || day.value <= 0) {
                document.getElementById("err_msg_day").innerHTML = "Invalid Day";
                document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById("day_label").style.color = "hsl(0, 100%, 67%)";
                
               return true;
                
            }
            else{
                document.getElementById("err_msg_day").innerHTML = "";
                document.getElementById("day").style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById("day_label").style.color = "hsl(0, 1%, 44%)";
                
            }
        
        }
        dayError();

        function monthError(){
            if (month.value=="") {
                document.getElementById("err_msg_month").innerHTML = "This field is required";
                document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById("month_label").style.color = "hsl(0, 100%, 67%)";
                
               return true;
                
            }
            else{
                document.getElementById("err_msg_month").innerHTML = "";
                document.getElementById("month").style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById("month_label").style.color = "hsl(0, 1%, 44%)";

            }
        
            if (month.value > 12 || month.value <= 0) {
                document.getElementById("err_msg_month").innerHTML = "Invalid month";
                document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById("month_label").style.color = "hsl(0, 100%, 67%)";
                
               return true;
                
            }
            else{
                document.getElementById("err_msg_month").innerHTML = "";
                document.getElementById("month").style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById("month_label").style.color = "hsl(0, 1%, 44%)";
                
            }

            // check for months with only 30days
            if (month.value == 4 || month.value == 6 || month.value == 9 ||month.value == 11) {
                if (day.value > 30) {
                    document.getElementById("err_msg_day").innerHTML = "A 30days month ";
                    document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
                    document.getElementById("day_label").style.color = "hsl(0, 100%, 67%)";
                
                return true;
                }
                else{
                    document.getElementById("err_msg_day").innerHTML = "";
                    document.getElementById("day").style.borderColor = "hsl(0, 0%, 86%)";
                    document.getElementById("day_label").style.color = "hsl(0, 1%, 44%)";
                
                }
            }
            // check for months with only 28days
            if (month.value == 2) {
                if (day.value > 28) {
                    document.getElementById("err_msg_day").innerHTML = "A 28days month";
                    document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
                    document.getElementById("day_label").style.color = "hsl(0, 100%, 67%)";
                
                return true;
                }
                else{
                    document.getElementById("err_msg_day").innerHTML = "";
                    document.getElementById("day").style.borderColor = "hsl(0, 0%, 86%)";
                    document.getElementById("day_label").style.color = "hsl(0, 1%, 44%)";
                
                }
            }
        
        }
        monthError();

        function yearError(){
            if (year.value=="") {
                document.getElementById("err_msg_year").innerHTML = "This field is required";
                document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById("year_label").style.color = "hsl(0, 100%, 67%)";
                
               return true;
                
            }
            else{
                document.getElementById("err_msg_year").innerHTML = "";
                document.getElementById("year").style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById("year_label").style.color = "hsl(0, 1%, 44%)";
            }
        
            if (year.value > Y || year.value < 1000) {
                document.getElementById("err_msg_year").innerHTML = "Invalid year";
                document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById("year_label").style.color = "hsl(0, 100%, 67%)";
               return true;
                
            }
            else{
                document.getElementById("err_msg_year").innerHTML = "";
                document.getElementById("year").style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById("year_label").style.color = "hsl(0, 1%, 44%)";
            }
        
        }
        yearError();

        if (dayError()!==true & monthError()!==true & yearError()!==true) {

            let birth = month.value + "/" + day.value + "/" + year.value;
            let modBirth = new Date(birth);
            let today = Date.now();
            
            
            
            if (modBirth > today) {
                document.getElementById("err_msg").innerHTML = "Date cannot be a future date";

                document.getElementById("day_label").style.color = "hsl(0, 100%, 67%)";
                document.getElementById("month_label").style.color = "hsl(0, 100%, 67%)";
                document.getElementById("year_label").style.color = "hsl(0, 100%, 67%)";

                document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
               return ;
            }
            else{
                document.getElementById("err_msg").innerHTML = "";

                document.getElementById("day_label").style.color = "hsl(0, 1%, 44%)";
                document.getElementById("month_label").style.color = "hsl(0, 1%, 44%)";
                document.getElementById("year_label").style.color = "hsl(0, 1%, 44%)";

                document.getElementById("day").style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById("month").style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById("year").style.borderColor = "hsl(0, 0%, 86%)";
                let msAge = today - modBirth;
                let age = new Date(msAge);
               
                let ageYear = age.getUTCFullYear() - 1970;
                let ageMonth = age.getUTCMonth();
                let ageDay = age.getUTCDate()- 1;
                localStorage.setItem("yearAge", ageYear);
                localStorage.setItem("monthAge", ageMonth);
                localStorage.setItem("dayAge", ageDay);
                

                document.getElementById("year_result").innerHTML = localStorage.getItem("yearAge");
                document.getElementById("month_result").innerHTML = localStorage.getItem("monthAge");
                document.getElementById("day_result").innerHTML = localStorage.getItem("dayAge");

                const inputs = document.querySelectorAll('#day, #month, #year');

                inputs.forEach(input => {
                    input.value = '';
                });
                
            }
        }

       
        
});
if (localStorage.getItem("yearAge") !== null) {
    document.getElementById("year_result").innerHTML = localStorage.getItem("yearAge");
}

if (localStorage.getItem("monthAge") !== null) { 
    document.getElementById("month_result").innerHTML = localStorage.getItem("monthAge");    
}

if (localStorage.getItem("dayAge") !== null) {
    document.getElementById("day_result").innerHTML = localStorage.getItem("dayAge");
}

function clearStorage(){

    localStorage.clear();
    location.reload();
}

