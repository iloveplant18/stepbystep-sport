document.addEventListener("click", function(event) {
    let button = event.target.closest("[data-action]");

    if (!button) return;

    let action = button.dataset.action;
    switch (action) {
        case "open-modal": openModal(button); break;
        case "close-modal": closeModal(); break;
    }
});

function openModal(button) {
    let id = button.dataset.id;
    let elementToOpen = document.getElementById(id);
    elementToOpen.classList.add("modal-is-open");
    if (elementToOpen.dataset.slide) {
        slideDirection = elementToOpen.dataset.slide;
        switch (slideDirection) {
            case "left": {
                elementToOpen.classList.add("slide-left"); 
                break;
            } 
            case "right": {
                elementToOpen.classList.add("slide-right"); 
                break;
            }
        }
    }

    let modalOverflow = document.getElementById("modal-overflow");
    modalOverflow.classList.add("modal-is-open");
}

function closeModal() {
    let elementsToClose = document.querySelectorAll(".modal-is-open");
    
    let animationClasses = ["slide-left", "slide-right"];

    for (let i of elementsToClose) {
        i.classList.remove("modal-is-open");
        
        for (let j of i.classList) {
            if (animationClasses.includes(j)) {
                i.classList.remove(j);
            }
        }
    }
}