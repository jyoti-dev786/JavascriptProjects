// let input = document.querySelector('input');


// function printFile(event)
// {
//     debugger;
//    let file = input.files[0];
//     let reader = new FileReader();

//     reader.readAsText (file);
//     reader.onload = function() {
//         console.log(reader.result);
//     };

//     reader.onerror = function(){
//         console.log(reader.error);
//     }
   
// }


// input.addEventListener('change' , printFile);


//----------------------------------------Reader used to read the files(in Console)---------------------------------------------------------------------------

// let input = document.querySelector('input');

// function imageReader(event)
// {
//     let inputimage =event.target;

//     let reader = new FileReader();

//     reader.onload = function(){
//         console.log(reader.result);
//     };

   
//     reader.readAsDataURL(inputimage.files[0]);

// }


//   input.addEventListener('change', imageReader);

//----------------------------------image Preview on page--------------------------------------------------------------------

let input = document.querySelector('input');

let img = document.querySelector('#img');


function previewImage(event)
{
    let selectedFile = event.target;
    //console.log(selectedFile.files[0]);

    let reader = new FileReader();
    reader.onload= function()
    {
        //console.log(reader.result);
        img.src = reader.result;

    }

    reader.readAsDataURL(selectedFile.files[0]);

}


input.addEventListener('change', previewImage);

