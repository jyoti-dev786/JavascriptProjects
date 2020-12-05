let h1value = document.querySelector('.container');

// function myFunction(e)
// {
//     console.log(e);
// }

// h1value.addEventListener('click' , myFunction);
var fileInput = document.querySelector("#myfiles");


// var pullfiles=function(){ 
//     // love the query selector
    
    
//     var files = fileInput.files;
//     // cache files.length 
//     var fl = files.length;
    
//     var i = 0;

//     while ( i < fl) {
//         // localize file var in the loop
//         var file = files[i];
//        // alert(file.name);
//         console.log(file.name);
        
//         i++;
//     }    
// }

// // set the input element onchange to call pullfiles
// //document.querySelector("#myfiles").onchange=pullfiles;

// fileInput.addEventListener('change' , pullfiles);



// //a.t




var pullfiles=function(){ 
    // love the query selector
    
    
    var files = fileInput.files;
    // cache files.length 
    var fl = files.length;
    
    var i = 0;

    // if(i<fl)
    // {
        for(let i = 0; i<fl ; i++) {
            // localize file var in the loop
            var file = files[i];
           // alert(file.name);
            console.log(file.name);
            
           // i++;
        }    
    //}
    
}

// set the input element onchange to call pullfiles
//document.querySelector("#myfiles").onchange=pullfiles;

//fileInput.addEventListener('change' , pullfiles);



//a.t


function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
      console.log(preview.src );
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }