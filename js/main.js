let elHeroList = document.querySelector(".hero__list")
elHeroList.className = "flex flex-wrap gap-y-[40px] justify-between"
let elInputSearch = document.querySelector(".input-search")
let elSelectChange = document.querySelector(".select-change")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")
let elModalContent = document.querySelector(".modal-content")
let elModalCloseBtn = document.querySelector(".close-btn")


let elLikeCount = document.querySelector(".like-count")
let elSavedCount = document.querySelector(".saved-count")


const countries = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg",
        isLiked:false,
        isSaved:false
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg",
        isLiked:false,
        isSaved:false
    }
]

function renderCountry(arr){
    elHeroList.innerHTML = null
    arr.forEach(item => {
        let elHeroItem = document.createElement("li")
        elHeroItem.className = "w-[330px] p-5 bg-slate-200  border border-slate-500 rounded-[10px]"
        elHeroItem.innerHTML = `
            <img class="object-cover w-full h-[200px] rounded-[10px]" src=${item.flag} alt="flags" width="200" height="200">
            <h2 class="font-bold text-[20px] text-zinc-600 mt-[15px]">Country: ${item.name}</h2>
            <p class="font-normal text-[18px] text-slate-700">Capital: ${item.capital}</p>
            <p class="font-normal text-[18px] text-slate-700">Population: ${item.population}</p>
        
            <div class="w-[200px] flex items-center gap-[10px] mt-[20px]">
                <button onClick="handleLikeBtn(${item.id})" class=" ${item.isLiked ? "bg-red-300 border-red-300" : "border-slate-400"} border p-2 rounded-[10px] hover:scale-125 duration-300 cursor-pointer">
                    <img class="" src="./images/like-icon.svg" alt="like-icon" width="35" height="35">
                </button>
                <button onClick="handleSavedBtn(${item.id})" class="${item.isSaved ? "bg-green-300 border-green-300" : "border-slate-400"} border p-2 rounded-[10px] hover:scale-125 duration-300 cursor-pointer">
                    <img class="" src="./images/saved-icon.svg" alt="saved-icon" width="35" height="35">
                </button>
                <button onClick="handleMoreClick(${item.id})" class="p-2 bg-slate-400 rounded-[10px] hover:scale-125 duration-300 cursor-pointer">
                    <img class="" src="./images/more-icon.svg" alt="more-icon" width="35" height="35">
                </button>
            </div>
        `
        elHeroList.appendChild(elHeroItem)
    });

    elLikeCount.textContent = arr.filter(item => item.isLiked == true).length
    elSavedCount.textContent = arr.filter(item => item.isSaved == true).length
}
renderCountry(countries)


// More function start 
function handleMoreClick(id){
    elModalWrapper.classList.remove("scale-0")
    document.body.classList.add("overflow-y-hidden")
    // elModalWrapper.classList.add("overscroll-behavior:none")
    const findedObj = countries.find(item => item.id == id)
    console.log(findedObj);
    
    elModalContent.innerHTML = `
        <div class="w-[300px] mx-auto mt-[60px] p-2 bg-slate-300 border-[2px] border-slate-800 rounded-[10px]">
            <img class="object-cover w-[300px] h-[200px] rounded-[10px]" src=${findedObj.flag} alt="flags" width="200" height="200">
            <div>
                <h2 class="font-bold text-[20px] text-zinc-600 mt-[15px]">Country: ${findedObj.name}</h2>
                <p class="font-normal text-[18px] text-slate-700">Capital: ${findedObj.capital}</p>
                <p class="font-normal text-[18px] text-slate-700">Population: ${findedObj.population}</p>
            </div>
        </div>
        
            
        
    `
}
// More function end 


// modal start
elModalWrapper.addEventListener("click", function(e){
    if(e.target.id == "wrapper"){
        elModalWrapper.classList.add("scale-0")
        document.body.classList.remove("overflow-y-hidden")
    }
})
function handleCloseBtn(){
    elModalWrapper.classList.add("scale-0")
    document.body.classList.remove("overflow-y-hidden")
}
// modal start


// like and saved function start 
function handleLikeBtn(id){
    const findedObjLike = countries.find(item => item.id == id)
    findedObjLike.isLiked = !findedObjLike.isLiked
    
    renderCountry(countries)
}
function handleSavedBtn(id){
    const findObjSaved = countries.find(item => item.id == id)
    findObjSaved.isSaved = !findObjSaved.isSaved

    renderCountry(countries)
}


function handleLikeCountBtn(){
    const filteredArr = countries.filter(item => item.isLiked == true)
    renderCountry(filteredArr);
    
}
function handleSavedCountBtn(){
    const filteredArr = countries.filter(item => item.isSaved == true)
    renderCountry(filteredArr);
    
}
// like and saved function end


// input-search start
elInputSearch.addEventListener("keyup", function(evnt){
    const searchedValue = evnt.target.value.toLocaleLowerCase()
    const filteredObj = countries.filter(item => item.name.toLocaleLowerCase().includes(searchedValue))
    
    renderCountry(filteredObj)
})
// input-search end

// select-change start
countries.forEach(item => {
    let elOption = document.createElement("option")
    
    elOption.value = item.name
    elOption.textContent = item.name
    
    elSelectChange.appendChild(elOption)
})
elSelectChange.addEventListener("change", (evnt) => {
    const changedValue = evnt.target.value
    
    const filteredChangedObj = countries.filter(item => item.name === changedValue)
    if(changedValue == "All"){
        renderCountry(countries)
    }
    else{
        renderCountry(filteredChangedObj)
    }
})
// select-change end


let moon = document.querySelector("#moon")
let sun = document.querySelector("#sun")
let body = document.querySelector("body")


function toggleDarkMode(){
    body.classList.toggle("dark")

    if(body.classList.contains("dark")){
        moon.style.display = "none"
        sun.style.display = "block"
    }
    else{
        moon.style.display = "block"
        sun.style.display = "none"
    }
}
moon.addEventListener("click", toggleDarkMode)
sun.addEventListener("click", toggleDarkMode)

