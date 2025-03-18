document.getElementById("inputBtn").addEventListener("click",
    () => {

        const inputTxt = document.getElementById("inputTxt");
        const text = inputTxt.value.trim();

        if (text) {

            const list = document.getElementById("todoList");
            const listItem = document.createElement("li");

            listItem.addEventListener("click", () => {

                listItem.classList.toggle("li_finished");
            });

            listItem.textContent = text;
            list.appendChild(listItem);
            inputTxt.value = "";
        }

    }
);


