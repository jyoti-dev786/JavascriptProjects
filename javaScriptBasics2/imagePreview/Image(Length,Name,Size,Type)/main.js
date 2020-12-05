// //--------fileList Length(Total number of files selected by user)------------------------------
// let input = document.querySelector('input');

// function myFunction()
// {
   
//     const fileList = this.files;
//     const numberOfFiles = fileList.length;
//     console.log("Total number of files selected are : ",numberOfFiles);
// }




// input.addEventListener('change', myFunction);


// //----------------------------for loop used to iterate the number of files-----------------------------------------------------------------------------


// let input = document.querySelector('input');

// function myFunction()
// {
   
//     const fileList = this.files;
    
//     console.log("This is FileList Without For Loop : ",fileList);
//     for(let i=0; i<fileList.length ; i++)
//     {
//         const imageFile = fileList[i];
//         console.log("These are files accessed with FOR LOOP : " + [i] , "=" , imageFile);
//     }
// }




// input.addEventListener('change', myFunction);

// //---------------for loop used and size property used of File to get the NAME of file-----------------------------------------------------------------------------


// let input = document.querySelector('input');

// function myFunction()
// {
   
//     const fileList = this.files;
    
    
//     for(let i=0; i<fileList.length ; i++)
//     {
//         const imageFile = fileList[i].name;
//         console.log("name of file ", imageFile);
//     }
// }




// input.addEventListener('change', myFunction);

// //---------------for loop used and size property used of File to get the SIZE of file-----------------------------------------------------------------------------


// let input = document.querySelector('input');

// function myFunction()
// {
   
//     const fileList = this.files;
    
    
//     for(let i=0; i<fileList.length ; i++)
//     {
//         const imageFile = fileList[i].size;
//         console.log("size of file is ", imageFile  ,"bytes");
//     }
// }




// input.addEventListener('change', myFunction);



// //---------------for loop used and size property used of File to get the TYPE of file-----------------------------------------------------------------------------


let input = document.querySelector('input');

function myFunction()
{
   
    const fileList = this.files;
    
    
    
    for(let i=0; i<fileList.length; i++)
    {
        const imageFile = fileList[i].type;
        console.log("type of file is ", imageFile);
    }
}




input.addEventListener('change', myFunction);


//----------Example: Showing file(s) size(by mdn) ----------------------------------------------------------------------------------------
// website=>https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications


// function updateSize() {
//     let nBytes = 0,
//         oFiles = this.files,
//         nFiles = oFiles.length;
//     for (let nFileId = 0; nFileId < nFiles; nFileId++) {
//       nBytes += oFiles[nFileId].size;
//     }
//     let sOutput = nBytes + " bytes";
//     // optional code for multiples approximation
//     const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
//     for (nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
//       sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
//     }
//     // end of optional code
//     document.getElementById("fileNum").innerHTML = nFiles;
//     document.getElementById("fileSize").innerHTML = sOutput;
//   }

//   document.getElementById("uploadInput").addEventListener("change", updateSize, false);

