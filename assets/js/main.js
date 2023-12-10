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




//navigation start
var navigationItems = [
    { title: 'Home', url: 'index.html' },
    { title: 'About', url: 'index.html#about' },
    { title: 'Featured', url: 'index.html#featured' },
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

//read more/less
function prikaziDodatniTekst() {
  $('#dodatniTekst').show();
  $('#readMore').hide();
  $('#tekstNastavak').show();
}

function sakrijDodatniTekst() {
  $('#dodatniTekst').hide();
  $('#readMore').show();
  $('#tekstNastavak').hide();
}
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
           <button class="btn3 js-add-to-cart" data-product-id="${product.id}">Buy now</button>  
           </div>  
    </div>
  `;

})
document.querySelector('.js-products').innerHTML = productsHTML;


//product slider end

//sign-in form start
document.getElementById('signIn').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const userName = document.getElementById('login-name').value;
  const password = document.getElementById('pass').value;

  var isValid = true; 


  var regUserName = /^(?=.*\d)[a-z\d]{5,}$/;
if(!regUserName.test(userName)){
  document.getElementById('userNameError').textContent = "Username must have minimal 5 characters(all lowercase) and at least one digit (0-9)";
  isValid = false;
}
else {
  document.getElementById('userNameError').textContent = "";
}
var regPass = /^(?=.*[0-9])[a-z\d]{8,}$/;
if(!regPass.test(password)){
  document.getElementById('passwordError').textContent = "Your password must contain at least 8 characters, including only lowercase letters and at least one digit (0-9).";
  isValid = false;
}
else {
  document.getElementById('passwordError').textContent = "";
}

  
  if (isValid) {
      // If valid, deleting values
      document.getElementById('login-name').value = '';
      document.getElementById('pass').value = '';


      document.getElementById('success-message').textContent = "Successfully signed in!";
  }
});



//sign-in form end

//contact form start
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('message').value;

  var isValid = true; 

  var regName = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{4,20})?$/;
  if (!regName.test(name)) {
      document.getElementById('nameError').textContent = "Name must start with a capital and have minimal 3 letters!";
      isValid = false;
  } else {
      document.getElementById('nameError').textContent = "";
  }
  
  var regLastName = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{4,20})?$/;
  if (!regLastName.test(lastName)) {
      document.getElementById('lastNameError').textContent = "Last name must start with a capital and have minimal 3 letters!";
      isValid = false;
  } else {
      document.getElementById('lastNameError').textContent = ""; 
  }

  var SignUpReg = /^[a-z]{4,}[0-9]*@(gmail\.com|yahoo\.com|ict\.edu\.rs)$/;
  if (!SignUpReg.test(email)) {
      document.getElementById('emailError').textContent = "Use lowercase letters, without '.' and '@gmail.com' or @yahoo.com or '@ict.edu.rs' at the end.";
      isValid = false;
  } else {
      document.getElementById('emailError').textContent = ""; 
  }

  if (!gender || !gender.value) { 
      document.getElementById('genderError').textContent = 'Please select a gender';
      isValid = false;
  } else {
      document.getElementById('genderError').textContent = ""; 
  }

  if (message.length < 10) {
      document.getElementById('messageError').textContent = "Message should be at least 10 characters long.";
      isValid = false;
  } else {
      document.getElementById('messageError').textContent = ""; 
  }

  if (isValid) {
      // If valid, deleting values
      document.getElementById('name').value = '';
      document.getElementById('last-name').value = '';
      document.getElementById('email').value = '';
      gender.checked = false;
      document.getElementById('message').value = '';


      document.getElementById('success-message2').textContent = "Form successfully submitted!";
  }
});


//contact form end




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


//futer
var footerItems = [
  { title: 'Home', url: 'index.html' },
    { title: 'About', url: 'index.html#about' },
    { title: 'Featured', url: 'index.html#featured' },
    { title: 'Contact', url: 'index.html#contact' },
    { title: 'Author', url: 'author.html' }
];

function createFooter() {
  var footer = document.querySelector('#footer');
  var nav = document.getElementById('navigation');
  
  navigationItems.forEach(function(item) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = item.title;
    a.href = item.url;
    li.appendChild(a);
    nav.appendChild(li);
  });

  var socialMediaIcons = ['facebook', 'twitter', 'instagram']; // Popis društvenih mreža

  function createSocialIcons() {
      var socialIconsDiv = document.getElementById('socialIcons');
  
      socialMediaIcons.forEach(function(icon) {
          var iconElement = document.createElement('i');
          iconElement.classList.add('fab', 'fa-' + icon);
  
          var link = document.createElement('a');
          var socialUrl = ''; 
  
          if (icon === 'facebook') {
              socialUrl = 'https://www.facebook.com/';
          } else if (icon === 'twitter') {
              socialUrl = 'https://www.twitter.com/';
          } else if (icon === 'instagram') {
              socialUrl = 'https://www.instagram.com/';
          }
  
          link.href = socialUrl;
          link.target = '_blank'; 
          link.appendChild(iconElement);
          socialIconsDiv.appendChild(link);
      });
  }
  
  createSocialIcons();
  
iconDiv.appendChild(navigationUl);
}

createFooter();

