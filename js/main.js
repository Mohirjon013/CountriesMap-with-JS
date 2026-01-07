let elHeroList = document.querySelector(".hero__list")
elHeroList.className = "flex flex-wrap gap-y-[40px] justify-between"
let elInputSearch = document.querySelector(".input-search")


const countries = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
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
        
            <ul class="w-[200px] flex items-center gap-[10px] mt-[20px]">
                <li class="p-2 bg-slate-400 rounded-[10px] hover:scale-125 duration-300 cursor-pointer">
                    <img class="" src="./images/like-icon.svg" alt="like-icon" width="35" height="35">
                </li>
                <li class="p-2 bg-slate-400 rounded-[10px] hover:scale-125 duration-300 cursor-pointer">
                    <img class="" src="./images/saved-icon.svg" alt="saved-icon" width="35" height="35">
                </li>
                <li class="p-2 bg-slate-400 rounded-[10px] hover:scale-125 duration-300 cursor-pointer">
                    <img class="" src="./images/more-icon.svg" alt="more-icon" width="35" height="35">
                </li>
            </ul>
        `
        elHeroList.appendChild(elHeroItem)
    });
}
renderCountry(countries)

elInputSearch.addEventListener("keyup", function(evnt){
    const searchedValue = evnt.target.value.toLocaleLowerCase()
    const filteredObj = countries.filter(item => item.name.toLocaleLowerCase().includes(searchedValue))

    renderCountry(filteredObj)
})