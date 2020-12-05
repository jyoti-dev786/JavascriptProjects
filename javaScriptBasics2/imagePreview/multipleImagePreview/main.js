let input = document.querySelector('input');
let multipleImageDiv = document.querySelector('.multipleImagePreview');


function imagePreview(event)
{
    let selectedImg = event.target;
    //console.log(selectedImg.files);
    //console.log(selectedImg.files.length);
    

    for(let i = 0; i< selectedImg.files.length ; i++)
    {
        //let imageFiles = selectedImg.files[i];
       //console.log(imageFiles);

       let reader = new FileReader();
       reader.onload = function()
       {
           //console.log(reader.result)

           //created two elements(img element and div element)
            let img = document.createElement("IMG");
            let div = document.createElement("DIV");
           
            img.height = "200";
            img.width = "200";
            img.src = reader.result;

            
            //appended img element and div element to html page
            multipleImageDiv.appendChild(img);
            multipleImageDiv.appendChild(div);
            

            //name of the image that is selected on html page
            div.innerHTML = selectedImg.files[i].name;
            //style for div element to keep the file name in center and padding of 5px
            div.style.textAlign="center";
            div.style.paddingRight= "5px";
       }
       
       reader.readAsDataURL(selectedImg.files[i]);
        
    
    
    }
    

}


input.addEventListener('change' , imagePreview);




