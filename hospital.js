let doctors = document.querySelectorAll(".team");
let card = document.querySelectorAll(".serviceCard");

let count = 0;

doctors.forEach(function(card, index){
    card.style.left=`${index*100}%`
})

function myFun(){
    doctors.forEach(function(curValue){
        curValue.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == doctors.length){
        count=0;
    }
    myFun()
}, 3000)


// service Card

const cards = document.querySelectorAll('.serviceCard');

cards.forEach(function(curCard) {
    curCard.addEventListener("click", function() {
        console.log(curCard);
        let div = document.createElement("div");
        div.classList.add("detailCard");
        let image = curCard.querySelector('img').src;
        let title = curCard.querySelector('h3') ? curCard.querySelector('h3').innerHTML : curCard.querySelector('p').innerHTML;
        let text = '';
        let link = '';
        if (title === 'Chest and Respiratory') {
            text = 'Our chest and respiratory department is equipped with state-of-the-art equipment and staffed by experienced specialists.';
            link = 'https://www.maxhealthcare.in/our-specialities/cardiology';
        } else if (title === 'laboratory') {
            text = 'Our laboratory is equipped with the latest technology and staffed by experienced technicians.';
            link = 'https://www.maxlab.co.in/';
        } else if (title === 'Physiotherapy') {
            text = 'Our physiotherapy department is staffed by experienced physiotherapists who can help you recover from injury or illness.';
            link = 'https://www.maxhealthcare.in/our-specialities/physiotherapy';
        } else if (title === 'nutrition') {
            text = 'Our nutrition department can provide you with personalized dietary advice and meal planning.';
            link = 'https://www.healthline.com/nutrition';
        }
        div.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
            <img src=${image} alt="1">
            <h2>${title}</h2>
            <p>${text}</p>
            <a href=${link}>Read More</a>   
        `;
        document.querySelector("body").appendChild(div);
        let icon = div.querySelector('i');
        icon.addEventListener("click", function() {
            div.remove()
        })
    })
})

// Get the modal container and close button
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

// Get the submit button
const submitBtn = document.getElementById('submit-btn');

// Add an event listener to the submit button
submitBtn.addEventListener('click', () => {
  // Show the modal
  modal.style.display = 'block';
});

// Add an event listener to the close button
closeModalBtn.addEventListener('click', () => {
  // Hide the modal
  modal.style.display = 'none';
});

submitBtn.addEventListener('click', () => {
    // Show the modal
    document.getElementById('modal').style.display = 'block';
  
    // Clear the form fields
    formFields.forEach(field => {
      field.value = '';
    });
  
    // Close the modal after 3 seconds
    setTimeout(() => {
      document.getElementById('modal').style.display = 'none';
    }, 3000);
  });
