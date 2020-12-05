let input = document.querySelector('.input');

// input.addEventListener('change' , function(e){
    
//     console.log(input.files);

//     const reader = new FileReader();
//     reader.onload = function()
//     {
//         console.log();
//     }

//     reader.readAsDataURL(input.files[0]);
// })

let imageInput;

input.addEventListener('change',(event) => {

    const filelist = event.target.files;
    const imageValue = input.value;
    
    
    console.log(filelist);
    console.log(`TYPE is :${typeof(filelist)} , PATH is : ${imageValue}`);
    let count = filelist.length;
    console.log("Count Of Image is: " + count);
    for(let i = 0; i<filelist.length; i++)
    {
       
        console.log(filelist[i].name +"=" + [i]);
       
        
        
    }

       //ONLY FOR SINGLE IMAGE
   // console.log(filelist[0].name)
})


//Second Method used for displaying image name on console
//https://developer.mozilla.org/en-US/docs/Web/API/File/name






