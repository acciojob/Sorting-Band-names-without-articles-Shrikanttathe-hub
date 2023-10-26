// let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// let withoutArticles = [ "Virupaksha Temple","Victoria Memorial", "Tajmahal"]
// let sortedWithoutArticles = ["Tajmahal", "Victoria Memorial", "Virupaksha Temple"]

// let finalAns = ["Tajmahal","Victoria Memorial", "The Virupaksha Temple" ]

// let str = "The jeba an rohan";
// str = str.replace(/\ban\b|\bthe\b|\ba\b/gi, "")
// str = str.replace(/ +/gi, " ");
// str = str.trim();
// "jeba rohan"

// p1: in the start  () => "The jeba an rohan" => "jeba an rohan"
// p2: in the middle _the_ | _an_ | _a_
// p3: in the end

// str.replace(/the|an|a/gi, '') ; 


// articles may be there at the beginning only.

 let arr = ['The Virupaksha Temple', 'A Victoria Memorial', 'An Tajmahal'];
 let withoutArticles =  [] ;
 let map = {} ;
 for(let i = 0 ; i < arr.length; i++) {
     let str = arr[i];
     str = str.replace(/\ban\b|\bthe\b|\ba\b/gi, "")
    str = str.replace(/ +/gi, " ");
    str = str.trim();
   map[str] = arr[i];
   withoutArticles.push(str);
 }
 withoutArticles.sort();
for(let i = 0; i < withoutArticles.length; i++) {
     console.log(map[ withoutArticles[i] ]);
 }