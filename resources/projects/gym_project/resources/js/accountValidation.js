// function Account(firstName,lastName,phoneNumber,email,cardHolder,cardNumber,cardExpirationMonth,cardExpirationYear,cardCode){
//     this.membership = document.querySelector('input[name="Service"]:checked').value; 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
//     this.cardHolder = cardHolder;
//     this.cardNumber = cardNumber;
//     this.cardExpirationMonth = cardExpirationMonth;
//     this.cardExpirationYear = cardExpirationYear;
//     this.cardCode = cardCode;
// }

function CreateAccount(){
    // * test
    var names = /^[a-zA-Z]{1,20}$/;
    var phoneNumbers = /^[0-9]{10}$/;
    var emails = /^\S+@\S+\.\S+$/;
    var full_names = /^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}$/;
    var cardNumbers = /^[0-9]{16}$/;
    var cardExpirations = /^[0-9]{2}$/;
    var cardSecurity = /^[0-9]{3}$/;

    // * values
    var membership = document.querySelector('input[name="Service"]:checked').value;  
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var phoneNumber = document.getElementById('phoneNumber');
    var email = document.getElementById('email');
    var cardHolder = document.getElementById('cardHolder');
    var cardNumber = document.getElementById('cardNumber');
    var cardExpirationMonth = document.getElementById('cardExpirationMonth');
    var cardExpirationYear = document.getElementById('cardExpirationYear');
    var cardCode = document.getElementById('cardCode');



    if(firstName.value.match(names)){
        if(lastName.value.match(names)){
            if(phoneNumber.value.match(phoneNumbers)){
                if(email.value.match(emails)){
                    if(cardHolder.value.match(full_names)){
                        if(cardNumber.value.match(cardNumbers)){
                            if(cardExpirationMonth.value.match(cardExpirations)){
                                if(cardExpirationYear.value.match(cardExpirations)){
                                    if(cardCode.value.match(cardSecurity)){
                                        return true;
                                    } else{
                                        alert('Please make sure your card security code is entered correctly');
                                        return false;
                                    }
                                } else {
                                    alert('Please make sure the expiration year of your card is double digits, (22)');
                                    return false;
                                }
                            } else{
                                alert('Please make sure the expiration month of your card is double digits, (02)');
                                return false;
                            }
                        } else{
                            alert('Please makes sure the card number is correct with no spaces');
                            return false;
                        }
                    } else {
                        alert('Please makes the card holder\'s full name is correct and is the same as on the card');
                        return false;
                    }
                } else{
                    alert('Please enter a valid email');
                    return false;
                }
            } else{
                alert('Please enter phone number correctly with no dashes');
                return false;
            }
        } else {
            alert('Please enter last name with no spaces or numbers');
            return false;
        }
    } else{
        alert('Please enter first name with no spaces or numbers');
        return false;
    };
}

const validateObject = document.querySelector('form');

// validateObject.onsubmit = (e) => {
//     e.preventDefault();
//     return CreateAccount(firstName,lastName,phoneNumber,email,cardHolder,cardNumber,cardExpirationMonth,cardExpirationYear,cardCode);
// }

