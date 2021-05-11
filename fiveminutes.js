
var https = require('https');
function main(params) {
   
	var location = params.location || 'Vermont';
    var url = 'https://api.coingecko.com/api/v3/exchange_rates';

    return new Promise(function(resolve, reject) {
        
https.get('https://api.coingecko.com/api/v3/exchange_rates', (res) => {
 
	res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });


	console.log(`API returned status: ${res.statusCode}`);
	return res.on('end', () => {
         try {		

     		let timestamp = new Date().toString().replace(/T/, ':').replace(/\.\w*/, '');
		const parsedData = JSON.parse(rawData)['rates']['eth'];
		resolve({ result:{timestamp,...parsedData} });	 
      
        } catch (e) {
     		
     		 reject({ done: e.message});
          
  }
 });
	

});
   
});
}
