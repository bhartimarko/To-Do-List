const button = document.querySelector("button");

//create a edit todo, jb user edit pe click kre to task edit ho.
// let editTodo = null

button.addEventListener("click", ()=>{

    
    // sbse pehle input(task) lenge user se.
    const addInput = document.querySelector("#add-input");
    //ab uske bad us input ko check krenge or ek new element me store kr denge or uske extra spaces ko hta denge.
    const inputText = addInput.value.trim();    // .value ek in-built function hai js ka.

     // check krenge input text empty to nhi h 
    if(inputText === ""){
        alert("enter any task.");
        return false;
    }

    //sbse pehle ham apne unorder list ko call krenge taki uske andr ham apne sare task add krte jaye as a list.
     const unorderList = document.querySelector(".add-task");
   
    //create krenge ek khali container taki usme list or button dono add ho
    let divContainer = document.createElement("div");
    divContainer.classList.add("containerList");
    //unorder list me pehle div container ko add krenge taki us container ke andr button ki separate jagah or text ki separate jagah.
    unorderList.appendChild(divContainer)

    //create krenge ek dynamic list jiske andr task jate rhenge.
    let list = document.createElement("li");
    // let p = document.createElement("p");

    //ab ham apne list me inputText ki value insert kr denge jo b user ne dia h.
    list.innerHTML = inputText;
    //divContainer list me append kr denge list child ko.
    divContainer.appendChild(list);
    
    //ab ham ek edit button bnayenge taki jb task complete ho jaye to use bad me delete b kr de  
    const editBtn = document.createElement("button");
    editBtn.innerText = "🖊️";
    editBtn.classList.add("edit-btn");
    divContainer.appendChild(editBtn);

     //ab ham ek delete button bnayenge taki jb task complete ho jaye to use bad me delete b kr de.
     const deleteBtn = document.createElement("button");
     deleteBtn.innerText = "X";
     deleteBtn.classList.add("delete-btn");
    //Append delete button to the list item 
    divContainer.appendChild(deleteBtn);

    //input se text hata do.
    addInput.value = "";

    //Delete task when clicking the delete button
    deleteBtn.addEventListener("click", ()=>{
        divContainer.remove();
    })

    editBtn.addEventListener("click", (e)=>{
        addInput.value = e.target.previousElementSibling.innerHTML;
        editTodo = e;
    })
})





  


 
 

 
 
   
    