const alternatives = document.querySelector('.alternatives')
let titleDiv = document.querySelector('#title');

let question = {
    title: 'qato',
   alternatives:['dog','cat','rabbit','sheep'], 
   correctAnswer: 1
}  ;
function showquestion(q){

    titleDiv.textContent =question.title;

}

let answers =question.alternatives;
let alts = document.querySelectorAll('.alternatives');


// for(let ans of answers){
    // alts.forEach(function(a,idx){
        // alts[idx].innerHTML =ans[]
//     })
//     console.log(ans);
// }
showquestion(question);

answers.forEach(function(ans,idxans){
    console.log(ans,idxans)
    alts.forEach(function(alt,idx){
        console.log(alt);
        ans[idxans].innerHtml = alt[idx]

    })
})




