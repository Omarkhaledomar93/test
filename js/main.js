


var taskInput = document.getElementById("userInput")
var list=[]

function addTask(){
    var userInput= taskInput.value ;
    if(userInput ==="") {
      
    alert ("Wrong input")

    }else{
        list.push(userInput)
        displayTask(list)
    }



}

function displayTask (list){
    console.log(list)
    var cartona = ``;
    for (var i=0 ; i< list.length ; i++){
        cartona +=` <div class="w-50 form-check  mx-auto mt-5 d-flex justify-content-between p-2 bg-dark">
        <h3 >${list[i]}</h3>
        <button onclick= "deleteTask(${i})" class="btn btn-danger ">Delete</button>
      </div>`;
    }
    document.getElementById("data").innerHTML= cartona ;
}


function deleteTask(index){
    list.splice(index,1)
    displayTask(list)
    
}