let $ = document;

let navDesktop = $.querySelector(".nav__desktop");
let navMobile = $.querySelector(".nav__mobile");
let navBtn = $.querySelector(".nav-btns__line");
let navDesktopBtns = $.querySelector(".nav-desktop__btns");
let navOpen = false;
// Basket Section Vars
let basketBtn = $.querySelector(".nav-basket__btn");
let basketSection = $.querySelector(".basket__section");
let basketHolder = $.querySelector(".basket-section__holder")
let basketArrowBtn = $.querySelector(".basket-arrow__btn");
let basketSectionMiddle = $.querySelector(".basket__section-middle");
let basketSectionBottom = $.querySelector(".basket__section-bottom");
let basketTitleHolder = $.querySelector(".basket__title-holder");
let basketTitle = $.querySelector(".basket__title");
let basketTotalPrice = $.querySelector(".basket__total-price");
let basketPriceBtn = $.querySelector(".basket__totalprice-btn");
// Client Section Vars
let clientBoxContents = $.querySelector(".client-box__contents");
// Product Items Vars
let productListItem = $.querySelectorAll(".product-list__title");
let appetizersSection = $.querySelector("#appetizers");
let mainCourseSection = $.querySelector("#main-courses");
let drinksSection = $.querySelector("#drinks");
let coffeeSectionWrapper  = $.querySelector(".coffee-section__wrapper");
let rateBox = $.querySelector(".product-rate__box");
// client box previous and next buttons 
let prevBtn = $.querySelector("#prev-btn");
let nextBtn = $.querySelector("#next-btn");
// Message Box
let messageBox = $.querySelector(".message__box");
let messageBoxText = $.querySelector(".message__box-text");
// bottom nav basket
let bottomBasketNav = $.querySelector("#bottom__nav-basket");

let moveUpSection = $.querySelector(".moveup__section");
// All Products
let mainFoods = [
   {id:1,productCode:43562,name:"Butter bean",price:12.33,popularity:4,comment:"made with meat and sauce",imgSrc:"./images/main-images-icons/main-foods/Butter_Bean_Stew2.jpg",count:1},
   {id:2,productCode:43563,name:"Chicken fried",price:15.66,popularity:4.5,comment:"fried chicken",imgSrc:"./images/main-images-icons/main-foods/chicken-fried-steak-2.jpg",count:1},
   {id:3,productCode:43564,name:"Pepperoni pizza",price:17.88,popularity:4.8,comment:"deliciuos pizza pepperoni",imgSrc:"./images/main-images-icons/main-foods/pepperoni-pizza.jpg",count:1},
   {id:4,productCode:43565,name:"potato-cheese-balls",price:10.65,popularity:3.9,comment:"cheese with potato",imgSrc:"./images/main-images-icons/main-foods/5-ingredient-crispy-mashed-potato-cheese-balls-featured-720x720.jpg",count:1},
   {id:5,productCode:43566,name:"Jambalaya",price:15.55,popularity:4.2,comment:"deliciuos jambalaya",imgSrc:"./images/main-images-icons/main-foods/thumbnail-Jambalaya.jpg",count:1},
   {id:6,productCode:43567,name:"Paneer popcorn recipe",price:11.33,popularity:3.5,comment:"deliciuos popcorn recipe",imgSrc:"./images/main-images-icons/main-foods/Paneer-Popcorn-Recipe.jpg",count:1}
];
let appetizers = [
   {id:1,productCode:43568,name:"Buffalo Chicken",price:10.55,popularity:4,comment:"deliciuos buffalo chicken",imgSrc:"./images/main-images-icons/Appetizers/buffalo-chicken.jpg",count:1},
   {id:2,productCode:43569,name:"Anipasto",price:12.45,popularity:4.6,comment:"delicious anipasto",imgSrc:"./images/main-images-icons/Appetizers/anipasto.jpg",count:1},
   {id:3,productCode:43570,name:"Bacon wrapped",price:13.34,popularity:4.1,comment:"delicious bacon",imgSrc:"./images/main-images-icons/Appetizers/bacon=wrapped.jpg",count:1},
   {id:4,productCode:43571,name:"Beer dip",price:11.25,popularity:4,comment:"delicious beer dip",imgSrc:"./images/main-images-icons/Appetizers/beer-dip.jpg",count:1},
   {id:5,productCode:43572,name:"Blt dip",price:9.65,popularity:3.2,comment:"delicious blt dip",imgSrc:"./images/main-images-icons/Appetizers/blt-dip.jpg",count:1},
   {id:6,productCode:43573,name:"Cheese bread",price:20.55,popularity:4.9,comment:"delicious cheese bread",imgSrc:"./images/main-images-icons/Appetizers/party-cheese-bread.jpg",count:1},
   {id:7,productCode:43574,name:"Pimento cheese",price:12.36,popularity:3.9,comment:"delicious pimento",imgSrc:"./images/main-images-icons/Appetizers/pimento-chese.jpg",count:1},
   {id:8,productCode:43575,name:"Tortilla",price:15.66,popularity:4,comment:"delicious tortilla",imgSrc:"./images/main-images-icons/Appetizers/tortilla.jpg",count:1},
];
let drinks = [
   {id:1,productCode:43576,name:"Mojito",price:5.55,popularity:4,comment:"cool drink mojito",imgSrc:"./images/main-images-icons/drinks/mojito.jpg",count:1},
   {id:2,productCode:43577,name:"Icy lemon",price:4.56,popularity:4.1,comment:"cool drink",imgSrc:"./images/main-images-icons/drinks/1572356786983.jpeg",count:1},
   {id:3,productCode:43578,name:"Ghila",price:3.57,popularity:3.9,comment:"cool and awesome",imgSrc:"./images/main-images-icons/drinks/1620662479065.jpg",count:1},
   {id:4,productCode:43579,name:"Sevenup",price:6.54,popularity:4.6,comment:"cool and tasty",imgSrc:"./images/main-images-icons/drinks/18875.jpg",count:1},
   {id:5,productCode:43580,name:"Pepsi",price:3.78,popularity:4.8,comment:"cool drinking pepsi",imgSrc:"./images/main-images-icons/drinks/3f30bcd9-bc93-460d-a7d6-3f8673c8fce7.jpg",count:1},
   {id:6,productCode:43581,name:"Miranda",price:6.66,popularity:4.7,comment:"miranda best drink",imgSrc:"./images/main-images-icons/drinks/miranda.jpg",count:1},
   {id:7,productCode:43582,name:"Rueseo",price:5.66,popularity:3.2,comment:"cool and nice drink it",imgSrc:"./images/main-images-icons/drinks/w1gz32txo5wrq7gvkknx.jpg",count:1},
];
let coffies = [
   {id:1,productCode:43583,name:"Americano",price:10.55,comment:"americano best coffee and deliciuos",imgSrc:"./images/Coffee-images/Americano.jpg",count:1},
   {id:2,productCode:43584,name:"Cappuccino",price:6.56,comment:"cappuccino best coffee and deliciuos",imgSrc:"./images/Coffee-images/Cappuccino.jpg",count:1},
   {id:3,productCode:43585,name:"Caramel macchiato",price:9.57,comment:"caramel best coffee and deliciuos",imgSrc:"./images/Coffee-images/Caramel_Macchiato.jpg",count:1},
   {id:4,productCode:43586,name:"Espresso",price:7.54,comment:"espresso best coffee and deliciuos",imgSrc:"./images/Coffee-images/Espresso.jfif",count:1},
];
let userBasket = [];


// Add 3 diffrent products to dom
mainFoods.forEach(function(item){
   mainCourseSection.insertAdjacentHTML('beforeend',`<div class="product__items"><div class="product-image__holder"><img class="product__img" src="${item.imgSrc}" alt=""></div><div class="product-details__holder"><div class="product-name__detail"><p class="product__name">${item.name}</p><span class="product__price">${item.price}</span></div><div><hr/></div><div class="product-rate__box"><div class="product-comments__box"><p class="product__comments">${item.comment}</p><span style="${item.popularity < 4 ? "background:" + "red;" : "background:" + "green;" && item.popularity === 4 ? "background:" + "#fdcb6e" : "background:" + "green;" }" class="product__rate">${item.popularity}</span></div><button class="product__btn" onclick="addFoodsInBasket(${item.productCode},mainFoods)">Add To Basket</button></div></div></div>`);
});

appetizers.forEach(function(item){
   appetizersSection.insertAdjacentHTML('beforeend',`<div class="product__items"><div class="product-image__holder"><img class="product__img" src="${item.imgSrc}" alt=""></div><div class="product-details__holder"><div class="product-name__detail"><p class="product__name">${item.name}</p><span class="product__price">${item.price}</span></div><div><hr/></div><div class="product-rate__box"><div class="product-comments__box"><p class="product__comments">${item.comment}</p><span style="${item.popularity < 4 ? "background:" + "red;" : "background:" + "green;" && item.popularity === 4 ? "background:" + "#fdcb6e" : "background:" + "green;" }" class="product__rate">${item.popularity}</span></div><button class="product__btn" onclick="addFoodsInBasket(${item.productCode},appetizers)">Add To Basket</button></div></div></div>`);
});

drinks.forEach(function(item){
   drinksSection.insertAdjacentHTML('beforeend',`<div class="product__items"><div class="product-image__holder"><img class="product__img" src="${item.imgSrc}" alt=""></div><div class="product-details__holder"><div class="product-name__detail"><p class="product__name">${item.name}</p><span class="product__price">${item.price}</span></div><div><hr/></div><div class="product-rate__box"><div class="product-comments__box"><p class="product__comments">${item.comment}</p><span style="${item.popularity < 4 ? "background:" + "red;" : "background:" + "green;" && item.popularity === 4 ? "background:" + "#fdcb6e" : "background:" + "green;" }" class="product__rate">${item.popularity}</span></div><button class="product__btn" onclick="addFoodsInBasket(${item.productCode},drinks)">Add To Basket</button></div></div></div>`);
});
coffies.forEach(function(item){
   coffeeSectionWrapper.insertAdjacentHTML('beforeend',`<div class="coffee-section__contents"><div class="coffee__image"><img class="coffee__img" src="${item.imgSrc}" alt=""></div><p class="coffee__name">${item.name}</p><p class="coffee__comments">${item.comment}</p><div class="coffee__price-box"><span class="coffee-price__text">Coffee Price :</span><span class="coffee__price">${item.price}</span></div><button onclick="addFoodsInBasket(${item.productCode},coffies)" class="coffee__btn">Add to basket</button></div>`);
});

 function addFoodsInBasket (productCode,prdcList) {
   let clickedProduct = prdcList.find(function(item){
    return item.productCode === productCode;
   });

  let checkInUserBasket = userBasket.some(function(item){
    return item.productCode === productCode;
  });

//   checking basket
  if(checkInUserBasket === false){
     userBasket.push(clickedProduct);
     calcTotalPrice(userBasket);
     addBasketToDom(userBasket);
     setTolocal(userBasket);
     messageBox.style.top = "2%";
     messageBox.style.backgroundColor = "#2ecc71";
     messageBoxText.innerHTML = "Successfully added in basket!";
     hideMessageBox();
  }else{
     messageBox.style.top = "2%";
     messageBox.style.backgroundColor = "#ff6b6b";
     messageBoxText.innerHTML = "It has already exist in your basket!";
     hideMessageBox();
  }
 }

 function addBasketToDom (userBasketList) {
       basketSectionMiddle.innerHTML = "";
       userBasketList.forEach(function(item){
         basketSectionMiddle.insertAdjacentHTML('beforeend',`<div class="basket-cart__details">
         <div class="basket-product__image">
          <img class="basket-product__img" src="${item.imgSrc}" alt="">
         </div>
         <p class="basket-product__name">${item.name}</p>
         <p class="basket-product__details">${item.comment}</p>
         <div class="basket-price__box">
           <span class="basket-price__text">Product Price :</span>
           <span class="basket-product__price">${item.price}</span>
          </div>
         <div class="basket-btn__operations">
          <input min="0" value="${item.count}" onchange="changeQuantityOfProduct(${item.id},value)" class="basket-product__btn" type="number">
          <button onclick="removeProductFromBasket(${item.productCode})" class="basket-cancel__btn">Cancel</button>
         </div>
        </div>`);
       });
 }

  //  calc the price
  function calcTotalPrice (userBasket) {
    let totalPrice = 0;
    let toFixedPrice ;
    userBasket.forEach(function(item){
      totalPrice += item.price * item.count;
    });
    toFixedPrice = totalPrice.toFixed(2);
   basketTotalPrice.innerHTML = toFixedPrice + "$";
  }

  // Set into the local 
    function setTolocal (userBasket) {
      localStorage.setItem("user-basket",JSON.stringify(userBasket));
    }  

  // Get From local   
    function getFromLocal () {
      let getBasket = JSON.parse(localStorage.getItem("user-basket"));
  
      if(getBasket === null){
        userBasket = [];
        basketTitle.innerHTML = "There is no products!!";
      }else{
          userBasket = getBasket;
          calcTotalPrice(userBasket);
          addBasketToDom(userBasket);
      }
  }

  //  remove from local
  function removeItemFromLocal () {
   localStorage.removeItem(removeOption);
  }

  //  hide messagebox
  function hideMessageBox () {
   setTimeout(function(){
      messageBox.style.top = "-10%";
     },2000);
  } 

  // change quantity   
  function changeQuantityOfProduct (productId,count) {
    userBasket.forEach(function(item){
      if(item.id === productId){
         item.count = count;
      }
    });
    calcTotalPrice(userBasket);
  }

 // remove product   
  function removeProductFromBasket (productCode) {
     let removedProduct = userBasket.findIndex(function(item){
      return item.productCode === productCode;
    });
    userBasket.splice(removedProduct,1);
    addBasketToDom(userBasket);
    calcTotalPrice(userBasket);
    setTolocal(userBasket);
    if(userBasket.length === 0){
      basketTitle.innerHTML = "There is no products!!";
    }
  }

// open and close sidebar nav
navBtn.addEventListener("click",function(){
 navMobile.classList.toggle("open");

 if(navOpen){
    navBtn.classList.remove("nav__btn--open");
    navOpen = false;
 }else{
    navBtn.classList.add("nav__btn--open");
    navOpen = true;
 }
});
// end 

// open basket and close it
basketBtn.addEventListener("click",function(){
   basketSection.classList.add("basket__section--open");
});

basketArrowBtn.addEventListener("click",function(){
   if(basketSection.classList.contains("basket__section--open")){
      basketSection.classList.remove("basket__section--open");
   }
});

bottomBasketNav.addEventListener("click",function(e){
  e.preventDefault();
  basketSection.classList.toggle("basket__section--open")
});
// 


// MoveUp Button
document.addEventListener("scroll",function(){
   if(document.documentElement.scrollTop > 620){
      moveUpSection.style.display = "block";
      moveUpSection.addEventListener("click",function(){
      document.documentElement.scrollTo(0,0);
      });
   }else{
      moveUpSection.style.display = "none";
   }
});
// End

//Switching sections
let datasetId ; 
productListItem.forEach(function(item){
  item.addEventListener("click",function(){
     $.querySelector(".active-border").classList.remove("active-border");
     $.querySelector(".show").classList.remove("show");
     item.parentElement.classList.add("active-border");
     let dataId = item.parentElement.getAttribute("data-id");
     $.querySelector(dataId).classList.add("show");
  });
});
// End 

//  Client Box Details
let clientDetails = [
   {id:1,name:"Adriana",imgSrc:"./images/Clients/testimonial-1.jpg",comment:"sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam em itsed firgim mosted postg fd",rating:3},
   {id:2,name:"Steven",imgSrc:"./images/Clients/testimonial-2.jpg",comment:"Diam amet eirmod eos labore diam soonmed forde lorem ipsum some thing hsdafdgsa dfbh",rating:4},
   {id:3,name:"Gerrard",imgSrc:"./images/Clients/testimonial-3.jpg",comment:"labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam mest if tigner",rating:3},
   {id:4,name:"Ariana",imgSrc:"./images/Clients/testimonial-4.jpg",comment:"its great mesqi wirkd dksss erling ddss monteh djdk loopinhs gerge foolmes tom dek funkjddgdg",rating:4},
];
let clientDetailCounter = 0;
function showDetailsInDom () {
   clientBoxContents.insertAdjacentHTML("beforeend",'<p class="client-box__comment">'+clientDetails[clientDetailCounter].comment+'</p><div class="client-box__details"><div class="client-image__holder"><img class="client__img" src="'+ clientDetails[clientDetailCounter].imgSrc +'" alt=""></div><div class="client-details__box"><p class="client__title">'+ clientDetails[clientDetailCounter].name +'</p><div class="client__rate"><img src="images/icons8-star-48.png" class="client-rate__img" alt=""><img src="images/icons8-star-48.png" class="client-rate__img" alt=""><img src="images/icons8-star-48.png" class="client-rate__img" alt=""><img src="images/icons8-star-48.png" class="client-rate__img" alt=""></div></div></div>');
}
function prevButton () {
   clientDetailCounter--;
   if(clientDetailCounter < 0){
      clientDetailCounter = clientDetails.length - 1;
   }
   clientBoxContents.innerHTML = "";
   showDetailsInDom();
}
function nextButton () {
   clientDetailCounter++;
   if(clientDetailCounter > clientDetails.length - 1){
      clientDetailCounter = 0;
   }
   clientBoxContents.innerHTML = "";
   showDetailsInDom();
}
setInterval(nextButton,5000);
prevBtn.addEventListener("click",prevButton);
nextBtn.addEventListener("click",nextButton);
// End


// Get User Data
  let getDatas = JSON.parse(localStorage.getItem("Users"));
  let loggedUsers = [];
  loggedUsers = getDatas;
  console.log(loggedUsers);
let findUser = loggedUsers.find(function(user){
  return user;
});
if(findUser){
   console.log("Find User");
   loggedUsers.forEach(function(user){
   navDesktopBtns.style.display = "none";
   navDesktop.insertAdjacentHTML('beforeend',`<div class="user__title-holder"><p class="user__title">Welcome ${user.name} !!</p></div>`)});
}else{
   console.log("not find");
}

basketPriceBtn.addEventListener("click", () => {
   window.location.href = "file:/C:/Users/daneshjo/Desktop/Shop/dashboard.html";
});

window.addEventListener("load",getFromLocal);



