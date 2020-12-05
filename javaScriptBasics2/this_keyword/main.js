//------------------------------------Input element--(click event)-------------------------------------------------------------------
// //NOTE 1 : here this keyword refers to input tag or element




// let input = document.querySelector('input');

// function myFunction()
// {
//     //here this refers to input element which is related to addEventListener
//     console.log(this);
// }




// input.addEventListener('click', myFunction)

// //Window Object
// console.log(this);

//-----------------------------------------button element--(click event)----------------------------------------------------------------


// //NOTE 2 : here this keyword refers to button element




// let button = document.querySelector('button');


// function myFunction()
// {
//     //here this refers to button element which is related to addEventListener
//     console.log(this);
// }




// button.addEventListener('click', myFunction)

// //Window Object
// console.log(this);

//------------------------------------------h1 element--(click event)------------------------------------------------------------------

// //NOTE 2 : here this keyword refers to h1 element

// let h1 = document.querySelector('h1');


// function myFunction()
// {
//     //here this refers to h1 element which is related to addEventListener
//     console.log(this);
// }




// h1.addEventListener('click', myFunction)

// //Window Object
// console.log(this);


//---------------------------------------------------------------------------------------------------------
// 1 .------------------------------------input element without event parameter--(change event) ----------------------------------------------------------------


// let input = document.querySelector('input');
// //no event parameter here i.e myFunction(event)
// function myFunction()
// {
//      //this key word refers to input element which loads fileList(i.e all file properties )   
//     const fileList = this.files;
//     console.log(fileList);
// }




// input.addEventListener('change', myFunction)

// //Window Object
// console.log(this);

// // 2. -----------------------------------input element with event parameter--(change event)-------------------------------------------------------------------------------

// let input = document.querySelector('input');
// // event parameter is passed here i.e myFunction(event)
// function myFunction(event)
// {
//     //here this keyword is not used instead event.target.files is used which loads fileList 
//     //same as this.files keyword
//     const fileList = event.target.files;
//     console.log(fileList);
// }




// input.addEventListener('change', myFunction)

// //Window Object
// console.log(this);


// 3. -----------------------------------input element without event parameter--(change event)-------------------------------------------------------------------------------

// let input = document.querySelector('input');
// // No event parameter is passed here i.e myFunction(event)
// function myFunction()
// {
//     //here this keyword is not used instead direct input  is used which loads fileList 
//     //same as this.files keyword and same as event.target.files
//     const fileList = input.files;
//     console.log(fileList);
// }




// input.addEventListener('change', myFunction)

// //Window Object
// console.log(this);

// // above all three programs i.e 1, 2, 3 uses change function to load all the fileList that is files
// //using change event

/*--------------------------------------------------------------------------------------------- */

