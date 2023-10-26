let arr =  ['The Virupaksha Temple', 'a Victoria Memorial', 'an Tajmahal'];
let withoutArticles = [];
let map = {};
for(let i=0; i<arr.length; i++){
	let str = arr[i];
	str = str.reeplace(/\ban\b|\bthe\b|\ba\b/gi, "")
	str = str.reeplace(/ +/gi, " ");
	str = str.trim();
	withoutArticles.push(str);
}
withoutArticles.sort;
for(let i=0;i<withoutArticles.length; i++){
	console.log(map [withoutArticles[i] ]);
}