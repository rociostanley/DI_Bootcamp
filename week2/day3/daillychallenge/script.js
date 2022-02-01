
let starLength = 6;
let star1='';
//one loop
for (let i = 1; i <= starLength; i++){
    star1 +="*";
    console.log(star1);
}
//nested loop
let star='';
for (let i = 1; i <= starLength; i++){
    for (let j = 1; j <= i; j++){
        star +="*";
    }
    console.log(star);
    star = '';
}