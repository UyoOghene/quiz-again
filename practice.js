const alternatives = document.querySelector('.alternatives')
let titleDiv = document.querySelector('#title');

let questions = [
    {
    title: 'chatte',
    alternatives:['dog','cat','rabbit','sheep'], 
    correctAnswer: 1
    },
    {
    title: 'chienne',
    alternatives:['dog','cat','sheep','rabbit'], 
    correctAnswer: 0
    },
    {
    title: 'lapine',
    alternatives:['dog','cat','rabbit','sheep'], 
    correctAnswer: 2
    },
    {
    title: 'mouton',
    alternatives:['rabbit','dog','cat','sheep'], 
    correctAnswer: 0
    }

];

function showQuestion(q){

questions.forEach(function(ques,idx){
    console.log(ques.title,idx);
    titleDiv.innerHTML = ques.title;
    let alts = document.querySelectorAll('.alternatives');

        alts.forEach(function(element,index){
        element.textContent = ques.alternatives[index];

        element.addEventListener('click',function(e){
            if( Array.from(alts).indexOf(e.target) === ques.correctAnswer){
                console.log('right')
            }
        })


        })

})
}

showQuestion(questions);




// function showquestion(q){
//     let alts = document.querySelectorAll('.alternatives');
    
//     titleDiv.textContent =question.title;
//     alts.forEach(function(element,index){
//         element.textContent = q.alternatives[index];

        // element.addEventListener('click',function(e){
        //     if( index=== question.correctAnswer){
        //         console.log('right')
        //     }
        //     else{
        //         console.log('no')
        //     }
        // })
//      })
     
// }





