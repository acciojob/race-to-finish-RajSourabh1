window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let x = Math.floor(Math.random()*5)+1
let p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("1");
	},x*1000)
})
let p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("2");
	},x*1000)
})
let p3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("3");
	},x*1000)
})
let p4 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("4");
	},x*1000)
})
let p5 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("5");
	},x*1000)
})

promises.push(p1);
promises.push(p2);
promises.push(p3);
promises.push(p4);
promises.push(p5);

Promise.any(promises).then((value)=>{
	document.getElementById("output").innerText = value;
})