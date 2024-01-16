function loadApi(){
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => LoadData(data))
}
const LoadData=quote=>{
   const refresh =document.getElementById('quote');
   refresh.innerHTML=quote.quote;
}
loadApi();