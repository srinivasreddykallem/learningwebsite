// Page loading Script //

(function(){
    try {
        console.log(document.title + 'page loaded');
        
    } catch (error) {
        console.log('Error loading' + document.title + 'page:', error);
        
    }
})();

// side bar script- to open side bar and close //


function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("navbar").style.display = "none";
    console.log('sidebar opened');
    
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("navbar").style.display = "flex";


    console.log('sidebar closed');
    
}



// chat bot script (optional)//

//bot setup script 
function toggleChatbot() {
    var chatbot = document.getElementById("chatbot");
    if (chatbot.style.display === "none" || chatbot.style.display === "") {
        chatbot.style.display = "block";
    } else {
        chatbot.style.display = "none";
    }
    console.log('clicked on bot');
}

document.getElementById("send-btn").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage("You: " + userInput);
        document.getElementById("user-input").value = "";
        
        addMessage("Diya is typing...");
        
       
        setTimeout(function() {
            var messagesDiv = document.getElementById("messages");
            messagesDiv.lastChild.textContent = "Diya: " + getBotResponse(userInput);
            console.log('Bot has replied');
        }, 3000);
    }

    console.log('question by user');
});

function addMessage(message) {
    var messagesDiv = document.getElementById("messages");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Bot reply script
function getBotResponse(input) {
    // Convert input to lowercase to make the comparison case-insensitive
    input = input.toLowerCase();

    if (input.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (input.includes("course")) {
        return "We offer a variety of courses. Which one are you interested in?";
    } else if (input.includes("hi")) {
        return "Hi! How are you? Im Bot Assistant For E-Learning Page";
    } else if (input.includes("data science")) {
        return "Data science is a 2-month course. If you want to enroll in Data Science, please visit the Courses page.";
    } else if (input.includes("web development")) {
        return "Web Development is a 3-month course. If you want to enroll in Web Development, please visit the Courses page.";
    } else if (input.includes("python")) {
        return "Python is a 3-month course. If you want to enroll in Python, please visit the Courses page.";
    } else if (input.includes("digital marketing")) {
        return "Digital marketing is a 2-month course. If you want to enroll in Digital Marketing, please visit the Courses page.";
    } else if (input.includes("machine learning")) {
        return "Machine learning is a 3-month course. If you want to enroll in Machine Learning, please visit the Courses page.";
    } else if (input.includes("node.js")) {
        return "Node.js is a 3-month course. If you want to enroll in Node.js, please visit the Courses page.";
    } else {
        return "Sorry, not recognized! Feel free to reach out to us for more assistance.";
    }   
}




//course script for viewing more details or less details about courses//

function toggleContent(dotsId, moreId, btnId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);
    var btnText = document.getElementById(btnId);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        console.log('view less clicked');
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        console.log('view more clicked');
    }

    
    
}


//enroll form for courses users choice //

function openForm(formId) {
    console.log(`Attempting to open form: ${formId}`);

    
    document.querySelectorAll('.form-popup').forEach(form => {
      
        form.style.display = 'none';
    });

   
    const formElement = document.getElementById(formId);
    if (formElement) {
        formElement.style.display = 'block';
        console.log(`Opened form: ${formId}`);
    } else {
        console.error(`Form with ID ${formId} not found.`);
    }
}

// Function to close a specific form
function closeForm(formId) {
    const formElement = document.getElementById(formId);
    if (formElement) {
        formElement.style.display = 'none';
        console.log(`Closed form: ${formId}`);
    } else {
        console.error(`Form with ID ${formId} not found.`);
    }
}

// Function to handle form submission
function submitForm(formId) {
    const form = document.getElementById(formId).querySelector('form');
    const formContent = document.getElementById(`${formId}-content`);
    const thankYouMessage = document.getElementById(`${formId}-thank-you`);

    // Check form validity
    if (!form.checkValidity()) {
        console.log(`Form ${formId} is invalid.`);
        form.reportValidity();
        return false;
    }

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(`Enrollment Details for ${formId}:`, data);

    if (formContent) {
        formContent.style.display = 'none';
    }
    if (thankYouMessage) {
        thankYouMessage.style.display = 'block';
    }

    setTimeout(() => {
        if (thankYouMessage) {
            thankYouMessage.style.display = 'none';
        }

        if (formContent) {
            formContent.style.display = 'block';
        }
    
        closeForm(formId);
    }, 3000); 

    // Form Reset after submission for new inputs
    form.reset();
    console.log('Form reset done');

    // Prevent form submission
    return false;
}





// Contact page email submission script//



document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const submissionMessage = document.createElement("div");

    submissionMessage.style.marginTop = "10px";
    submissionMessage.style.color = "green";
    submissionMessage.style.fontWeight = "bold";
    submissionMessage.textContent = "Your application submitted successfully!";
    submissionMessage.style.display = "none";

    form.appendChild(submissionMessage);
    

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const comments = document.getElementById("comments").value;

        if (name.trim() === "" || email.trim() === "") {
            alert("Please fill  the required fields.");
            return;
        }

        const formData = {
            name: name,
            email: email,
            comments: comments
        };
        console.log("Form Data:", formData);
        console.log("your application submited");
        
       
        submissionMessage.style.display = "block"; 

        form.reset();

        console.log('form reset done');
        
        
    });
});


// youtube video setup for courses//

document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail) {
    
    thumbnail.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.width = "560";
        iframe.height = "315";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        console.log(videoId);
       // console.log(iframe);
        console.log(iframe.src);
        console.log("playing video");
        
        
        
        
        
        this.innerHTML = ''; 
        this.appendChild(iframe); 
    });
});