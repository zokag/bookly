window.onscroll = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else{
        document.querySelector('.header .header2').classList.remove('active');
    }
}

window.onload = () =>{
  if(window.scrollY > 80){
      document.querySelector('.header .header2').classList.add('active');
  }
  else{
      document.querySelector('.header .header2').classList.remove('active');
  }
}

//loginform start
let loginForm = document.querySelector('.login-form-container')
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}
//loginform end

//cart start
const openShopping = document.querySelector(".cart");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

// cart.addEventListener("click",()=>{
//   body.classList.add("active")
// })
//   closeShopping.addEventListener("click",()=>{
//   body.classList.remove("active")
// })




//navigation start
var navigationItems = [
    { title: 'Home', url: 'index.html#home' },
    { title: 'Featured', url: 'index.html#featured' },
    { title: 'Arrivals', url: 'index.html#arrivals' },
    { title: 'Contact', url: 'index.html#contact' },
    { title: 'Author', url: 'author.html' }
  ];
  
  function createNavigation() {
    var nav = document.getElementById('navbar');
  
    navigationItems.forEach(function(item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.textContent = item.title;
      a.href = item.url;
      li.appendChild(a);
      nav.appendChild(li);
    });
  }

  createNavigation();
//navigation end

  // dynamic blocks start
var blocksData = [
    { title: 'Free Shipping', iconClass: 'fas', iconType: 'fa-truck-fast', text: 'Order over $100' },
    { title: 'Secure Payment', iconClass: 'fas', iconType: 'fa-lock', text: '100 secure payment' },
    { title: 'Easy Returns', iconClass: 'fas', iconType: 'fa-rotate-left', text: '10 days returns' },
    { title: '24/7 Support', iconClass: 'fas', iconType: 'fa-headphones', text: 'Call us anytime' }
  ];
  

  function createBlocks() {
    var blocksContainer = document.getElementById('blocksContainer');
  
    blocksData.forEach(function(block) {
      var blockDiv = document.createElement('div');
      blockDiv.classList.add('col-12', 'block');
      blockDiv.classList.add('col-md-6');
      blockDiv.classList.add('col-lg-2');
  
      var iconElement = document.createElement('i');
      iconElement.classList.add(block.iconClass, block.iconType, 'mr-3');
  
      var titleElement = document.createElement('h3');
      titleElement.textContent = block.title;
  
      var text = document.createElement('p');
      text.textContent = block.text;
  
      blockDiv.appendChild(iconElement);
      blockDiv.appendChild(titleElement);
      blockDiv.appendChild(text);
      blocksContainer.appendChild(blockDiv);
    });
   
  }
   createBlocks();
  
// dynamic blocks end

//product slider start
let productsHTML = '';
const products = [{
  id: "12hshd-46fgjjs",
  image:'assets/img/book1.jpeg',
  price:{
    priceCents: 1599,
    priceCents2: 2099
  } ,
 }, {
  id: "13hdhd-47fzzgs",
  image:'assets/img/book2.jpeg',
  price:{
    priceCents: 1399,
    priceCents2: 1799
  } ,
 },
  {
    id: "14hfgd-48fggfss",
    image:'assets/img/book3.jpeg',
    price:{
      priceCents: 1099,
      priceCents2: 1599
    } ,
},{
  id: "15seerd-49ffgg",
  image:'assets/img/book4.jpeg',
  price:{
    priceCents: 1799,
    priceCents2: 2299
  } ,
},{
  id: "16hddsghd-50fhgs",
  image:'assets/img/book5.jpeg',
  price:{
    priceCents: 1999,
    priceCents2: 2599
  } ,
},{
  id: "17hghdhd-51fghgs",
  image:'assets/img/book7.jpg',
  price:{
    priceCents: 1499,
    priceCents2: 1899
  } ,
},{
  id: "18hghdhd-52dhhs",
  image:'assets/img/book8.jpg',
  price:{
    priceCents: 1699,
    priceCents2: 1999
  } ,
}
]
let listCarts = [];

products.forEach((product) => {
  productsHTML += `
  <div class="swiper-slide box d-flex ">
   <div class="icons">
      <a href="#" class="fas fa-search"></a>
      <a href="#" class="fas fa-heart"></a>
      <a href="#" class="fas fa-eye"></a>
  </div>
     <div class="image">
        <img src="${product.image}" alt="book">
    </div>
     <div class="content2">
         <h3>featured books</h3>
          <div class="price pb-4">$${product.price.priceCents / 100} <span>$${product.price.priceCents2 / 100}</span></div>
           <button class="btn3 js-add-to-cart" data-product-id="${product.id}">add to cart</button>  
           </div>  
    </div>
  `;

})
document.querySelector('.js-products').innerHTML = productsHTML;


//product slider end



  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    clearErrors();

    const name = document.getElementById('name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const loginEmail = document.getElementById('login-email');
    const pass = document.getElementById('pass');
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message');
    document.getElementById("sign-in-button").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission to check errors first

      // Reset previous error messages
      document.getElementById("email2Error").textContent = "";
      document.getElementById("passwordError").textContent = "";

      // Retrieve input values
      email = document.getElementById("email").value;
      pass = document.getElementById("pass").value;

      // Validation checks
      if (loginEmail.trim() === "") {
          document.getElementById("email2Error").textContent = "Please enter your email.";
          return;
      }

      if (pass.trim() === "") {
          document.getElementById("passwordError").textContent = "Please enter your password.";
          return;
      }
  
      if (loginEmail === "example@example.com" && pass === "password123") {
        // Close the login form
        var loginForm = document.querySelector(".login-form-container");
        loginForm.style.display = "none";
    } else {
        // If email or password are incorrect, show an error message (this is a simplified example)
        alert("Invalid email or password. Please try again.");
    }
  });

    if (name.value.trim() === '') {
        displayError('nameError', 'Please enter your name (at least 3 characters)');
    } else if (name.value.trim().length < 3) {
        displayError('nameError', 'Name should be at least 3 characters');
    }
    if (lastName.value.trim() === '') {
      displayError('lastNameError', 'Please enter your last name (at least 3 characters)');
  } else if (lastName.value.trim().length < 3) {
      displayError('lastNameError', 'Last name should be at least 3 characters');
  }
    if (email.value.trim() === '') {
      displayError('emailError', 'Please enter your email address');
  } else if (!validateEmail(email.value.trim())) {
      displayError('emailError', 'Please enter a valid email address');
  }
    if (!gender) {
        displayError('genderError', 'Please select a gender');
    }

    if (message.value.trim() === '') {
        displayError('messageError', 'Please enter your message (at least 10 characters)');
    } else if (message.value.trim().length < 10) {
        displayError('messageError', 'Message should be at least 10 characters');
    }

    if (!document.querySelectorAll('.error-message:not(:empty)').length) {
        console.log('Form submitted successfully!');
    }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(gmail.com|yahoo.com)$/;
  return re.test(email);
}
function validateEmail(loginEmail) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(gmail.com|yahoo.com)$/;
  return re.test(loginEmail);
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
}

 





//swiper-slide start
var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      450: {
        slidesPerView: 2,
        
      },
     768: {
        slidesPerView: 3,
       
      },
    1024: {
        slidesPerView: 4,
      },

      
    },
  });
// swiper-slide end

