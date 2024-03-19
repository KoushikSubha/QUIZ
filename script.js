const questions=[
    {
        question:"The term 'mixed economy' denoted : ",
        answers:[
            {text: "Existence of both rural and urban sectors", correct : false},
            {text: "Existence of both private and public sectors", correct : true},
            {text: "Existence of both heavy and small industries", correct : false},
            {text: "Existence of both  developed  and underdeveloped sectors", correct : false},
        ]
    },
    {
        question:"In an economy, the sectors are classified into public and private on the basis of :",
        answers:[
            {text: "Employment condition", correct : false},
            {text: "Nature of economic activities", correct : false},
            {text: "Ownership of enterprises", correct : true},
            {text: "Use of raw materials", correct : false},
        ]



    },
    {
        question:"The 'Dual Economy' is a mixture of :",
        answers:[
            {text: "Traditional agriculture sector and modern industrial sector", correct : true},
            {text: "Industrial sector and manufacturing sector", correct : false},
            {text: "State ownership of the means of production in corporation  of foreign organisation", correct : false},
            {text: "Industrial  sector and trading of goods obtained through imports", correct : false},
        ]



    },
    {
        question:"Which sector of Indian Economy  has shown remarkable expansion  during the last decade ?",
        answers:[
            {text: "Primary Sector", correct : false},
            {text: "Secondary Sector", correct : false},
            {text: "Tertiary Sector", correct : true},
            {text: "Mining Sector", correct :false },
        ]
},

{

    question:"When development in economy takes place , the share of tertiary sector in National Income :",
        answers:[
            {text: "First falls and the rises", correct : false},
            {text: "First rises and then falls", correct : false},
            {text: "Keeps on increasing", correct : true},
            {text: "Remains constant", correct :false },
        ]
},

{

    question:"It will be true to classify India as :",
        answers:[
            {text: "A food-deficit economy  ", correct : false},
            {text: "A labour-surplus economy", correct : true},
            {text: "A trade-surplus economy ", correct : false},
            {text: "A capital-surplus economy", correct :false },
        ]
},

{

    question:"Mixed economy means :",
        answers:[
            {text: "Where agriculture and industry are given equal importance", correct : false},
            {text: "Where public sector exists alongwith the private sector in national economy", correct : true},
            {text: "Where globalization is transferred with heavy does of Swadeshi in national economy ", correct : false},
            {text: "Where the Centre and the States are equal partners in economic  planning  and development", correct :false },
        ]
},

{

    question:"In India , planned economy is based on :",
        answers:[
            {text: "Gandhian System", correct : false},
            {text: "Socialist System", correct : true},
            {text: "Capitalist System", correct : false},
            {text: "Mixed Economy System", correct :false },
        ]
},

{

    question:"Economic liberalisation in India started with :",
        answers:[
            {text: "Substantial changes in industrial licensing policy", correct : true},
            {text: "The convertibility of Indian Rupee", correct : false},
            {text: "Doing away with procedural formalities for foreign direct invetment", correct : false},
            {text: "Significant reduction in tax rates", correct :false },
        ]
},

{

    question:"A firm sells new shares worth Rs-1000 direct to individuals . This transaction will cause :",
        answers:[
            {text: "Gross Nation Product to rise by Rs-1000", correct : false},
            {text: "Gross Domestic Product to rise by Rs-1000", correct : false},
            {text: "National Income to rise by Rs-1000", correct : false},
            {text: "No impact on Gross National Product", correct :true },
        ]
}

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){

    resetState();





    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex +1;
    questionElement.innerHTML=questionNo +"."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");

        score ++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled  =true;
    });
    nextButton.style.display="block";
    }
   function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} Out Of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display="block";
   }



    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        } else{
            showScore();
        }
    }


    nextButton.addEventListener("click", () => {
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })



startQuiz();

