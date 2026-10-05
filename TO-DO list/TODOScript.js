const button = document.querySelector(".button")
const exit = document.querySelector(".Exit")
const taskCOntainer = document.querySelector(".task-container")
const input = document.querySelector("#input")
const span1 = document.getElementById("no1")
const span2 = document.getElementById("no2")

exit.addEventListener("click", ()=>{
    window.close()
})


button.addEventListener("click", ()=>{
    if (input.value.trim() ==="") {
        alert("Type Something!");
    } else {
        let task = document.createElement("div")
        task.textContent = input.value;
        taskCOntainer.append(task)
        let span = document.createElement("span")
        span.innerHTML = "<img src= 'remove.png'>";
        task.append(span)

        
        span2.textContent++;
    }
    input.value = ""
    save()
    
})

taskCOntainer.addEventListener("click", (e)=>{
    if (e.target.tagName === "DIV") {
        e.target.classList.toggle("check");
        
        // If it's now checked, increment. If unchecked, decrement.
        if (e.target.classList.contains("check")) {
            span1.textContent = Number(span1.textContent) + 1;
        } else {
            // Prevent going below 0 when unchecking
            let currentCount = Number(span1.textContent);
            span1.textContent = currentCount > 0 ? currentCount - 1 : 0;
        }
        save();

    } else if (e.target.tagName === "IMG") {
        const parentDiv = e.target.closest("div");
        
        // Check if the item we are deleting was actually checked
        const isChecked = parentDiv.classList.contains("check");

        parentDiv.remove();

        // Convert text content to safe numbers
        let count1 = Number(span1.textContent);
        let count2 = Number(span2.textContent);

        // Only decrement span1 (completed tasks) if the deleted item was checked
        if (isChecked && count1 > 0) {
            span1.textContent = count1 - 1;
        }

        // Decrement span2 (total tasks) only if it's above 0
        span2.textContent = count2 > 0 ? count2 - 1 : 0;
        
        save();
    }
        
    
})



function save() {
    localStorage.setItem("data", taskCOntainer.innerHTML)
    localStorage.setItem("count", span2.textContent)
}

function showData() {
    taskCOntainer.innerHTML = localStorage.getItem("data")
}
showData()