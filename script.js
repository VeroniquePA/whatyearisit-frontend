fetch('https://whatyearisit-backend-sable.vercel.app/year')
 .then(response => response.json())
 .then(data => {
    console.log(data)
   document.querySelector('#year').textContent = "year" + data.year;
 })

 