import { generaterandom } from "./index.js";

console.log(generaterandom());



const url = "somehttputl";

const fetching = function(url){

try{


    const fetcher = fetch(url);
    const response = fetcher.json();
    console.log(response);
}

catch(error){
    console.log(error);
}




}


fetching(url);