function createForm(){
    let form=document.getElementById('user-form');
    form.addEventListener('submit',event=>{
        //preventing the browser from submitting the form
        event.preventDefault();
    });
}