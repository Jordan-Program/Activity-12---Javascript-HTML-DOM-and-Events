
// adding a task
let add_button = document.querySelector("#add_task");
add_button.addEventListener("click", () => 
    {
        let task_input = document.querySelector("#task_input");
        let task_text = task_input.value.trim();

        if (task_text !== "") 
            {
                let task_list = document.querySelector("#task_list");
                let li = document.createElement("li");
                li.textContent = task_text;

                // marking a task as done
                li.addEventListener("click", () => 
                {
                    li.classList.toggle("done");
                });

                // deleting a task
                let delete_button = document.createElement("button");
                delete_button.className = "delete_button btn btn-danger border-0";
                
                delete_button.addEventListener("click", () => 
                {
                    li.remove();
                });

                li.appendChild(delete_button);
                task_list.appendChild(li);

                // after adding task, input field will be empty
                task_input.value = "";
            } 
        else 
            {
                alert("Please enter a task.");
            }
    });