let addbtn = document.querySelector("#add");
let radiobtn = document.querySelector("#read");
let submitbtn = document.querySelector(".done");
let container = document.querySelector(".container");
let modal = document.querySelector(".modal");
let changeReadStatus;
let readRadio;
let xbtn;
addbtn.addEventListener("click", function () {
    modal.style.display = "flex";
    // document.body.style.backgroundColor = "rgba(0,0,0, 0.7)";
});
submitbtn.addEventListener("click", function (e) {
    e.preventDefault();
    createCard(changeStatusBtn, deleteCardBtn);
    reset();
});





function createCard(changeStatus, deleteCard) {
    //card
    let card = document.createElement("div");
    card.setAttribute("class", "cardModal");
    //close button
    let xbtnContainer = document.createElement("div");
    xbtnContainer.setAttribute("class", "xbtnContainer");
        //x button
        xbtn = document.createElement("p");
        xbtn.setAttribute("class", "xbtn");
        xbtn.innerHTML = "X";
        deleteCard();
    xbtnContainer.append(xbtn);
    card.append(xbtnContainer);
    //input author
    let authorModal = document.createElement("p");
    authorModal.setAttribute("class", "authorModal");
    authorModal.innerHTML = "Author: " + document.querySelector("#author").value;
    card.append(authorModal);
    //input title
    let titleModal = document.createElement("p");
    titleModal.setAttribute("class", "titleModal");
    titleModal.innerHTML = "Title: " + document.querySelector("#title").value;
    card.append(titleModal);
    //number of pages
    let pagesModal = document.createElement("p");
    pagesModal.setAttribute("class", "pagesModal");
    pagesModal.innerHTML = "Pages: " + document.querySelector("#pages").value;
    card.append(pagesModal);
    //read
    readRadio = document.createElement("p");
    readRadio.setAttribute("class", "readRadio");
    if (radiobtn.checked == true) {
        readRadio.innerHTML = "Status: " + "Read";
    } else {
        readRadio.innerHTML = "Status: " + "Didn't Read";
    }
    card.append(readRadio);
    //change read status
    changeReadStatus = document.createElement("button");
    changeReadStatus.setAttribute("class", "changeReadStatus");
    changeReadStatus.innerHTML = "Change Status";
    changeStatus();
    card.append(changeReadStatus);

    container.append(card);
}
function changeStatusBtn() {
    changeReadStatus.addEventListener("click", function() {
        if (this.previousSibling.innerHTML == "Status: Read") {
            // event.target.previousSibling.innerHTML = "Status: Didn't Read";
            this.previousSibling.innerHTML = "Status: Didn't Read";
        } else {
            // event.target.previousSibling.innerHTML = "Status: Read";
            this.previousSibling.innerHTML = "Status: Read";
        }
})};
function deleteCardBtn() {
    xbtn.addEventListener("click", function() {
        this.parentNode.parentNode.remove();
    });
}


function reset() {
    document.body.style.backgroundColor = "white";
    document.querySelector("#author").value = "";
    document.querySelector("#title").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
    modal.style.display = "none";
}