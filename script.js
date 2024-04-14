let titleDiv = document.querySelector('#title');
let nextQuesBtn = document.querySelector('#next-ques-btn');
let alts = document.querySelectorAll('.alternatives');

let count = 0;
const questions = [
    {
        title: 'cat',
        alternatives:['dog','cat','rabbit','sheep'], 
        correctAnswer: 1
    },
    {
        title: 'dog',
        alternatives:['dog','cat','sheep','rabbit'], 
        correctAnswer: 0
    },
    {
        title: 'rabbit',
        alternatives:['dog','cat','rabbit','sheep'], 
        correctAnswer: 2
    },
    {
        title: 'sheep',
        alternatives:['rabbit','dog','cat','sheep'], 
        correctAnswer: 3
    }
];

function showQuestion(q){
    titleDiv.textContent = `Question ${count+1}. ${q[count].title}`;
    alts.forEach((element,index) => {
        element.textContent = q[count].alternatives[index];
        element.setAttribute('option-no', index);
        element.addEventListener('click', checkCorrectAns);
     })
}

function checkCorrectAns(element){
    if(Number(element.target.getAttribute('option-no')) === questions[count].correctAnswer){
        console.log('correct');
    }
    else console.log('wrong');
}

function show() {
    if (count < questions.length-1) {
        showNextQuestion(questions); 
    }
    else {
        nextQuesBtn.removeEventListener('click', show)
        console.log('The End')
    }
}

function showNextQuestion (q) {
    count++
    titleDiv.textContent = (`Question ${count+1}. ${q[count].title}`);
    alts.forEach((element,index) => {
        element.textContent = q[count].alternatives[index];
        element.removeEventListener('click', checkCorrectAns);
        element.addEventListener('click', checkCorrectAns);
     })
} 

nextQuesBtn.addEventListener('click', show);
showQuestion(questions);