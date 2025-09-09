const getId = (id) => document.getElementById(id);

function menuFunction() {
  const toggleMenu = getId("toggleMenu");
  toggleMenu.classList.toggle("flex");
  toggleMenu.classList.toggle("hidden");
}

function showSmallCart() {
  getId("smallCartSec").classList.toggle("hidden");
}

const loadAllCategory = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCategory(data.categories));

  // e.classList.add("active");
};

const showCategory = datas => {
  const categoryDiv = getId("categoryDiv");

  categoryDiv.innerHTML = `<span onclick="loadAllProducts(this)" class="text-lg hover:!bg-green-800 hover:!text-white px-3 py-1 rounded-sm block cursor-pointer active">All Trees</span>`;

  datas.forEach((data) => {
    categoryDiv.innerHTML += `<span onclick="loadCategoryProduct(${data.id},this)" class="text-lg hover:!bg-green-800 hover:!text-white px-3 py-1 rounded-sm block cursor-pointer">${data.category_name}</span>`;
  });
};

const loadingFun = status => {
  if(status === true){
    getId("productsDiv").innerHTML = `
    <div class="col-span-full text-center p-10">
            <span class="text-2xl">Loading<span class="loading loading-dots loading-xl"></span></span>
          </div>
    `;
  }
}

const loadAllProducts = (e = "") => {
  loadingFun(true);
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((datas) => showProducts(datas.plants));

  if (e.tagName == "SPAN") {
    const elements = e.parentNode.children;

    for (const element of elements) {
      element.classList.remove("active");
    }

    e.classList.add("active");
  }  
};

const loadCategoryProduct = (catId, e) => {
  loadingFun(true);
  const url = `https://openapi.programming-hero.com/api/category/${catId}`;
  fetch(url)
    .then((res) => res.json())
    .then((datas) => showProducts(datas.plants));

  const elements = e.parentNode.children;

  for (const element of elements) {
    element.classList.remove("active");
  }

  e.classList.add("active");
};

const showProducts = datas => {
  loadingFun(false);
  const productsDiv = getId("productsDiv");
  productsDiv.innerHTML = "";

  datas.forEach((data) => {
    productsDiv.innerHTML += `
    <div class="bg-white p-2 rounded-lg grid gap-2 ">
          <div class="">
            <img class="rounded-lg h-56 w-full object-cover object-center"
              src="${data.image}"
              alt=""
            />
          </div>  
            <div class="flex flex-col gap-3">
              <h2 onclick="loadProductDetails(${data.id})" class="font-semibold text-base cursor-pointer text-black">${data.name}</h2>
              <p class="text-sm line-clamp-3 text-black">${data.description}</p>
              <div class="flex justify-between items-center">
                <span class="bg-green-200 text-green-950 px-3 py-1 rounded-3xl"
                  >${data.category}</span
                >
                <span class="text-black"
                  ><i class="fa-solid fa-bangladeshi-taka-sign text-sm text-black"></i
                  >${data.price}</span
                >
              </div>
              <button onclick="addToCart(${data.id})" class="btn bg-green-800 rounded-4xl border-none py-1">
                Add to Cart
              </button>
            </div>
          </div>
    `;
  });
};

const loadProductDetails = id =>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url).then(res=>res.json()).then(item=>showProductDetails(item.plants))
}

const showProductDetails = plant => {

  const productDetails = getId("productDetails");

  productDetails.innerHTML = `
        <h3 class="text-lg font-bold text-black">${plant.name}</h3>
        <img class="rounded-lg h-60 md:h-80 w-full object-cover object-center"
              src="${plant.image}"
              alt=""
            />
        <h3 class="text-base font-medium text-black">Category: <span class="text-sm font-normal text-black">${plant.category}</span></h3>
        <h3 class="text-base font-medium text-black">Price: <span class="text-sm font-normal text-black"><i class="fa-solid fa-bangladeshi-taka-sign text-sm"></i><span>${plant.price}</span></span></h3>
        <h3 class="text-base font-medium text-black">Description: <span class="text-sm font-normal text-black">${plant.description}</span></h3>
        `
        
  getId("my_modal_5").showModal()

}


let cart = [];

const cartCountFun = () => {
  const cartCount = getId("cartCount");
  cartCount.innerText = cart.length
}

const addToCart = async id => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const plant = await fetch(url).then(res=>res.json()).then(plant=>plant.plants)
  alert(`${plant.name} has been added to the cart.`);
  cart.push(plant);
  showCart();
}

const showCart = () => {
  let totalPrice = 0;

  const cartDivs = document.querySelectorAll(".cartDiv");
  const totalPriceSpan = document.querySelectorAll(".totalPrice");

  cartDivs.forEach(cartDiv => {

    cartDiv.innerHTML = "";

    cart.forEach((plant,index) => {
      

      cartDiv.innerHTML += `
    <div class="flex justify-between items-center bg-[#DCFCE7]">
          <div class="">
            <h2 class="text-lg font-medium text-black">${plant.name}</h2>
            <span class="text-gray-500 text-base"
              ><i class="fa-solid fa-bangladeshi-taka-sign text-black"></i>${plant.price}</span
            >
          </div>
          <i onclick="removeFromCart(${index})" class="fa-solid fa-xmark text-gray-500 text-sm cursor-pointer"></i>
        </div>
    `
    })
    
  })

  cart.forEach(item => totalPrice += item.price)

  totalPriceSpan.forEach(span => span.innerHTML = totalPrice)

  cartCountFun();

}

const removeFromCart = index => {
  cart.splice(index,1)
  showCart();
}


loadAllCategory();
loadAllProducts();
// showCart();
