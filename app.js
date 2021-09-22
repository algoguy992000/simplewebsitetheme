//JavaScript tries to be friendly, make your code work, and provide you with a solution, even if the result should be an error. To override this behavior, you can activate strict mode, which reduces silent errors, improves performance and provides you with more warnings and fewer unsafe features.
//Always end JS code with ;

'use strict'

//get the button reference.
const switcher = document.querySelector('.btn');

//add a listener for the click event. The function passed into the event listener is actual event handler.
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    //what you write in the console will show up in the browser developer tools.
    console.log('current class name: ' + className);

});

