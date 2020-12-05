let input = document.querySelector('input');
let img = document.querySelector('img');


function imagePreview(event)
{

    let selectedFile = event.target;
    //console.log(selectedFile.files);
    let reader = new FileReader();
    reader.onload = function()
    {
        console.log(reader.result);
        img.src = reader.result;
    }

    reader.readAsDataURL(selectedFile.files[0]);
    



}

input.addEventListener('change', imagePreview);