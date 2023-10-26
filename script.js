let arr =  ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let withoutArticles = [];
let map = {};
for(let i=0; i<arr.length; i++){
	let str = arr[i];
	str = str.reeplace(/\ban\b|\bthe\ba\b/gi, "");
	str = str.reeplace(/ +/gi, " ");
	str = str.trim();
	withoutArticles.push(str)l;
}