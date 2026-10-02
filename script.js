function getNumbers(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000);
	});
}
getNumbers().then((arr)=>{
	return new Promise((resolve)=>{
		const evenNumbers=arr.filter((num)=>num%2==0);
		setTimeout(()=>{
			document.getElementById("output").textContent=evenNumbers.join(",");
			resolve(evenNumbers);
		},1000);
	});
}).then((evenNumbers)=>{
	return new Promise((resolve)=>{
		const multipliedNumbers=evenNumbers.map((num)=>num*2);
		setTimeout(()=>{
			document.getElementById("output").textContent=multipliedNumbers.join(",");
			resolve(multipliedNumbers);
		},2000);
	});
});