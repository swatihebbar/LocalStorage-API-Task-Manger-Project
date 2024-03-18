const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#delete");
const outputEl = document.querySelector("#list-container");
const form = document.querySelector("form");

//------------------------------------------------------------

// //add task and save into local storage

// localStorage.setItem("firstname","swati");

// //get item

// const result = localStorage.getItem("firstname");

// //remove

// localStorage.removeItem("firstname")

//--------------------------------------------------------------


//add task and save into local storage

//delete task

const removeTask = id => {
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks", tasks));
    }
    tasks = tasks.filter(task => {
        return task.id !== +id; //to convert id to number we can use + sign
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTasks();
}

const addTask = e => {
    e.preventDefault();
    // console.log(e);
    // console.log(inputEl.value);
    if(inputEl.value === ""){
        alert("Please enter a task");
    }


//get the item
    const task = inputEl.value;
    if(task){
        let tasks;
        if(localStorage.getItem("tasks") === null) {
            tasks = []; //if there is no variable named tasks in local storage create one
            console.log(tasks);
        } else{
            // tasks = localStorage.getItem("tasks");
            tasks = JSON.parse(localStorage.getItem("tasks"));
            console.log(tasks);
        }
        tasks.unshift({  
            id: Date.now(),
            title: task,
        }); //to add the newly added task at begining of the list use "unshift" instead of "push" 
         
        //save to storage

        // localStorage.setItem("tasks", tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        //empty input
        inputEl.value = ""
    }

    getTasks();

};

//get items

const getTasks = () => {
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    console.log(tasks);


    //display to DOM

    let output;
    const allTasks = tasks.map((task) => {
        return `
        <li id="item">
        <span>${task.title}</span>
        <button onclick="removeTask('${task.id}')" id="delete">X</button>
        </li>        
        `
    })

    output = allTasks.join("");
    // console.log(output)
    outputEl.innerHTML = output;
};

getTasks();

//remove

//event listener

form.addEventListener('submit',addTask);