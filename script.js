const loadCategory = () =>{

    const url ="https://openapi.programming-hero.com/api/categories";

    fetch(url)

    .then((res) => res.json())
    .then((data) => displayCategory(data.categories))


};

const displayCategory = (categories) =>{
    const categoryContainer =document.getElementById("category-container");
   categoryContainer.innerHTML = ""
for(let category of categories){
    console.log(category);

    const btnDiv = document.createElement("div");

    btnDiv.innerHTML =` 
    <button id ="category-btn-${category.category_name}" onclick="loadCategory(${category.category_name})" class=" pr-5 bg-[#DCFCE7] border-0  w-[120px] h-[40px] rounded-20 text-start hover:bg-green-800 rounded-lg hover:text-white ">${category.category_name}</button>
    `
    categoryContainer.append(btnDiv);
}

};

loadCategory()