let arr =  ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let withoutArticles = [];
let map = {};
for(let i=0; i<arr.length; i++){
	let str = arr[i];
	str = str.reeplace(/\ban\b|\bthe\b|\ba\b/gi, "");
	str = str.reeplace(/ +/gi, " ");
	str = str.trim();
	withoutArticles.push(str);
}
console.log(withoutArticles);
withoutArticles.sort;
for(let i=0;i<withoutArticles.length; i++){
	console.log(map [withoutArticles[i] ]);
}