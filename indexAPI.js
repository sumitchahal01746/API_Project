fetch('https://stocks3.onrender.com/api/stocks/getstocksdata')
.then(response => {
	if (response.ok) {
	return response.json(); // Parse the response data as JSON
	} else {
	throw new Error('API request failed');
	}
})

.then(data => {
	// console.log(data.stocksData[0].AAPL["1mo"]); // Example: Logging the data to the console
  
  var TimeLine = '1mo';
  function TimeLineOFMonthsYear(){
    TimeLine='3mo';
    console.log('pess')
  }
  
    const time1=data.stocksData[0].AAPL[TimeLine].timeStamp;
    const price1=data.stocksData[0].AAPL[TimeLine].value;
    const companyName=data.stocksData[0];
    console.log(Object.keys(companyName));


    companyNames(Object.keys(companyName))
    function companyNames(nameArry){
      for(let i=0;i<nameArry.length;i++){
        
        if(nameArry[i]!=="_id"){  
      const ul=document.querySelector('ul');
      const li = document.createElement('li');
      const aTag = document.createElement('a');
      aTag.className='dropdown-item w-100';
      aTag.href='#';
      aTag.innerHTML=nameArry[i]
      ul.appendChild(li);
      li.appendChild(aTag);
      console.log( li.appendChild(aTag))}

      }}

    var years=[];
    time1.forEach(element => { 
          years.push(Math.floor((element/86400)+25569));
    });
    console.log(years)
  
    
  
    
    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: time1,
        datasets: [{
          label: '# of Votes',
          data: price1,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true}}}});



})
.catch(error => {
	// Handle any errors here
	console.error(error); // Example: Logging the error to the console
});

