const apibody= document.querySelector(".api_body");

const apiUrl= "https://icanhazdadjoke.com/";

const fetchData= () => {
 fetch(apiUrl, {
    headers:{
        Accept:"application/json",
    },
 })
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data) =>  {
        // console.log(data)
        console.log(data.joke);
        apibody.innerHTML=data.joke;
    })
    .catch((error) => {
console.log(error);

    });
};

fetchData();







document.getElementById("fetchjoke").addEventListener("click",fetchData);