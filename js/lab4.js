// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.
//George Ledbury
function verse1(){
    let output = '';
    output = "Well she was an American girl. Raised on promises." + '<br>' + "She couldn't help thinking that there was a little more to life somewhere else." + '<br>' + "After all it was a great big world with lots of places to run to." + '</br>' + "Yeah, and if she had to die tryin', she had one little promise she was gonna keep";    

    return output;
}

function verse2(){
    let output = '';
    output = "It was kind of cold that night." + '<br>' + "She stood alone on her balcony. She could see the cars roll by out on 441." + '<br>' + "Like waves crashin' on the beach. And for one desperate moment there, he crept back in her memory." + '<br>' + "God it's so painful, something that's so close, and still so far out of reach";
   

    return output;
}

function chorus1(){
    let output = '';
    output = "Oh yeah, all right." + '<br>' + "Take it easy baby. Make it last all night." + '<br>' + "She was an American girl";

    return output;
}

//function chorus2(){
    //let output = '';
    // your code here

    //return output;
//}



function main(){
    let finalOutput = ''; // used to build lyrics string
    finalOutput = verse1() + '<p></p>' + chorus1() + '<p></p>' + verse2() + '<p></p>' + chorus1();
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}