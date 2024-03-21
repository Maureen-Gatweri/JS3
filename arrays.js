
//question1
let arr1 = [3,7,34,90,12];
console.log(arr1.slice(-1));

let arr2 = [true,"green","where",12,56];
console.log(arr2.slice(-1));

//question2
let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.join(" "));





//question3
let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);


//question4
let arr = ["apple","mango", "apple","orange","mango", "mango"];
function removeDuplicates(arr){
    let myStrings = [];
    arr.forEach(element => {
        if (!myStrings.includes(element)){
     myStrings.push(element);

        }
    });

return myStrings;
}
console.log(removeDuplicates(arr));

//question5
let arr5 = ["the", "way", "x", 4];
console.log(arr5.includes("the way"));