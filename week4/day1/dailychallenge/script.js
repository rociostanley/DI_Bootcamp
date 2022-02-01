const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


let array=[];
gameInfo.forEach( item => {
  array.push(`${item["username"]}!`);
});


arrayTop =[]
gameInfo.forEach( item => {
  if (item["score"] > 5) {
    arrayTop.push(item["username"]);
  }
});

totalScore = 0;
gameInfo.forEach( item => {
  totalScore += item["score"];
});
console.log(totalScore);
