// Work Experience Field Dynamic 
function addNewWEField(){
    let newNode = document.createElement("textarea") // Creating a New Element
    newNode.classList.add('form-control') // Adding className (bootstrap)
    newNode.classList.add('weField') // Adding className (Custom)
    newNode.classList.add('inputBox') // Adding className (Custom)
    newNode.classList.add('m-2') // Adding className (Bootstrap)
    newNode.setAttribute('placeholder','Enter here') // Setting Attribute (Bootstrap)

    let weOb = document.getElementById('we')
    let weAddButtonOb = document.getElementById('weAddButton') 

    weOb.insertBefore(newNode, weAddButtonOb)
}

// Academic Qualification Field Dynamic
function addNewAQField(){
    let newNode = document.createElement("textarea") // Creating a New Element
    newNode.classList.add('form-control') // Adding className (bootstrap)
    newNode.classList.add('aqField') // Adding className (Custom)
    newNode.classList.add('inputBox') // Adding className (Custom)
    newNode.classList.add('m-2') // Adding className (Bootstrap)
    newNode.setAttribute('placeholder','Enter here') // Setting Attribute (Bootstrap)

    let aqOb = document.getElementById('aq')
    let aqAddButtonOb = document.getElementById('aqAddButton') 

    aqOb.insertBefore(newNode, aqAddButtonOb)
}

// Generating CV 

function generateCV(){
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML = nameField;

    // Direct or short-cut method
    document.getElementById('nameT2').innerHTML = nameField

    // Contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    // Email
    let emailField = document.getElementById('emailField').value;
    let emailT = document.getElementById('emailT')
    emailT.innerHTML = emailField;

     // Address
    let addressField = document.getElementById('addressField').value;
    let addressT = document.getElementById('addressT')
    addressT.innerHTML = addressField;

     // linkedin
    document.getElementById('linkedInT').innerHTML = document.getElementById('linkedinField').value;

    // Github
    document.getElementById('githubT').innerHTML = document.getElementById('githubField').value;

    // Objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    // Work Experience
    let We = document.getElementsByClassName('weField');

    let str = ''
    
    for(WorkExp of We){
        str = str + `<li> ${WorkExp.value} </li>`
    }

    document.getElementById('weT').innerHTML = str

    // Academic Qualification
    let Aq = document.getElementsByClassName('aqField');

    let str1 = ''

    for(AcademicQ of Aq){
        str1 = str1 + `<li> ${AcademicQ.value} </li>`
    }

    document.getElementById('aqT').innerHTML = str1

    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'
}

// Print CV
function printCV(){
    window.print();
}