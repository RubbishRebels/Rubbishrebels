/*const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");*/
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const teksten = document.getElementById("teksten");


let points = (95 - Math.abs(Math.round((mostRecentScore /25) *100).toFixed(0)));
console.log(points);
console.log(mostRecentScore);
if (points < 0){

    finalScore.innerText = `Je bent ${Math.abs(points)}% beter in afvalscheiden dan een machine.`;
    teksten.innerText = `Je had ${mostRecentScore}/25 vragen goed, Goed bezig! Echter, is het scheidingspercentage niet veel hoger.`;
    document.getElementById("petitie").style.display = "none";
}else if (points == 0){
    finalScore.innerText = `Eenn machine is ${(points)}% beter in afvalscheiden dan een jij.`;
    teksten.innerText = `Je had ${mostRecentScore}/25 vragen goed. Je scoort gelijk met een machine. Eén fout meer en de machine zou het beter doen. Teken daarom de petitie en laat machines het afvalscheiden doen zonder moeite.`;
}else{
    finalScore.innerText = `Een machine is ${points}% beter in afvalscheiden dan jij`;
    teksten.innerText = `Je had maar ${mostRecentScore}/25 vragen goed. Teken daarom deze petitie en laat machines het afvalscheiden beter doen.`;
   }

/*saveHighScore = (e) => {
console.log("clicked the save button!");
e.preventDefault();

const score = {
    score: mostRecentScore,
    name: username.value
};
highScores.push(score);
console.log(highScores);
}*/