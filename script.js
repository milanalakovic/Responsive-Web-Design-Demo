const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach(tab => tab.classList.remove("active"))

        tab.classList.add("active");

        contents.forEach(c => c.classList.remove("active"))

        contents[index].classList.add("active");
    })
})

tabs[0].click();

function validate() {
    if (document.myForm.name.value == "") {
        alert("Name is required!");
        document.myForm.name.focus();
        return false;
    }
    if (document.myForm.lastName.value == "") {
        alert("Last name is required!");
        document.myForm.lastName.focus();
        return false;
    }
    if (document.myForm.mail.value == "") {
        alert("Invalid email");
        document.myForm.mail.focus();
        return false;
    }
    return true;
}