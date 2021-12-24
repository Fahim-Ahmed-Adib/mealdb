//API Key - 0be74eef511d40ac33e5fc8f1759fed7


let searchBox = document.getElementById('searchBox');
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', e =>
{
  let query=searchBox.value;
  searchBox.value='';
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  fetch(url).then( response => response.json()).then(data =>{
    let meals = data.meals;
    let col = 4;
    let row = Math.ceil(meals.length/col);
    let grid=document.getElementById('mealGrid');
    grid.innerHTML=`<div></div>`;
    let index=0;
    for(i=0;i<row;i++){
      grid.innerHTML+=`<div class="row mb-2" id=${i}></div>`
      let row= document.getElementById(i);
      for(j=0;j<col;j++){
        row.innerHTML+=
        `<div class="col" id="meal_${index}">
        <div class="card" style="width: 18rem;">
        <img src=${meals[index].strMealThumb} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meals[index].strMeal}</h5>
          <p class="card-text font-monospace">Ingredients:<br><span class="font-monospace">${meals[index].strIngredient1}, ${meals[index].strIngredient2}, ${meals[index].strIngredient3}, ${meals[index].strIngredient4}...</span></p>
          <a target="_blank" href=${meals[index].strYoutube} class="btn btn-danger"><i class="fab fa-youtube"></i> Watch on Youtube</a>
        </div>
      </div>
        </div>
        `
        index++;
        if(index===meals.length) break;
      }
    }

  })
  
}
)