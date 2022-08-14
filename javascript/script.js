const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const face = document.querySelector("#face");

const toggleModal = () =>{
    [modal, face].forEach((el) => el.classList.toggle("hide"))

    //modal.classList.toggle("hide");
    //face.classList.toggle("hide");
}

[openModalButton, closeModalButton, face]. forEach((el) =>{
    el.addEventListener("click", () => toggleModal());
})