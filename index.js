

function superbowlWin (somearray) {
         
const result = somearray.find(didtheywin);
console.log(result);
if (result) {
    return result["year"];
}



}

function didtheywin(element) {
    console.log(element["year"],element["result"]);
    if (element["result"]==="W") {
        console.log("Here" + element["year"]);
        return true;
    }
}




