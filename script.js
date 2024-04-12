const alternatives = document.querySelector('.alternatives')
let titleDiv = document.querySelector('#title');

let question = {
    title: 'qato',
   alternatives:['dog','cat','rabbit','sheep'], 
   correctAnswer: 1
}  ;
function showquestion(q){
    let alts = document.querySelectorAll('.alternatives');
    
    titleDiv.textContent =question.title;
    alts.forEach(function(element,index){
        element.textContent = q.alternatives[index];

        element.addEventListener('click',function(e){
            if( index=== question.correctAnswer){
                console.log('right')
            }
            else{
                console.log('no')
            }
        })
     })
     
}

showquestion(question);






