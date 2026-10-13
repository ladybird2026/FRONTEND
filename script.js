
const form =
document.getElementById('form');
const email = 
document.getElementById('email');
const password = 
document.getElementById('password');
const checkbox = 
document.getElementById('checkbox');
const message =document.getElementById('message');

form.addEventListener('submit', function(event) {event.preventDefault();
    const emailValue = email.value.trim();
    const passwordvalue = password.value;
    

    if (email.value === '' || password.value === ''){message.textContent="please fill in both email and password fields!";
        message.style.color= "red";return;
        }  if (
            !emailValue.includes('@') || !emailValue.includes('.')) {message.textContent="please enter a valid email address!";
        message.style.color="red";return;

        }if(!checkbox.checked){message.textContent="please tick remember me !";
            message.style.color= "red";return;}

        message.textContent="Your form has been submitted successfully!";
            
            message.style.color="green";
        }
     
    );      
    


    
    



