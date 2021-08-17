//barebone callback example
const logCall = function (){
    console.log("logCall was called");
}

setTimeout(logCall,3000)
/*

let btn = document.querySelector("#example");
btn.addEventListener("click",function(e) {
    console.log("btn was clicked")
})
*/

let students = [{name:"Hans",score:1.2},
{name:"Line",score: 1.3 },
{name:"Kristine",score: 6.6},
{name:"Kenneth",score: 12}
]

const processStudents = (data, callbackFn) =>{
    for( let i = 0; i < data.length; i++){

            if(typeof callbackFn === "function"){
                callbackFn(data[i])
            }
        
    }
}

//who has passed
processStudents(students,function(obj){
    if(obj.score > 2){
        console.log(obj.name + " Passed")
    }
})

//who starts with certain letter
processStudents(students,function(obj){
    if(obj.name.startsWith("K")){
        console.log(obj.name)
    }
})
//The average grade of students
const getAverageGrade = ()=>{
    let average = 0;
        count = 0;
    processStudents(students,function(obj){
        average = average + obj.score;
        count ++
    })
    average = average / count;
    console.log("The average of all grade is: " + average);
    }
    getAverageGrade();