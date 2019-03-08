
let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt, img;

function setup() {
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;


    cnv = createCanvas(650, 600);
    background('red');
    txt = createElement("h5", "Say something..")
        .position(100, 200)
        .style("color:white;")
        .hide();

    resultP = createP("")
        .position(40, 220)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString.split(' ').pop();
        resultP.html(sentence);
        if(sentence.includes("orange") || sentence.includes("Orange") ){
            switchImage('assets/orange.png');
        }
        if(sentence.includes("lemon")){
            switchImage('assets/lemon.png');
        }    
        if(sentence.includes("cake")){
            switchImage('assets/cake.png');
        }    
        if(sentence.includes("smart")){
            switchImage('assets/smart.gif');
        }    
        if(sentence.includes("blind") || sentence.includes("black") ){
            switchImage('assets/blind.jpg');
        }     
        if(sentence.includes("hey")){
            switchImage('assets/hey.jpg');
        }  
        if(sentence.includes("my")){
            switchImage('assets/my.jpg');
        }  
        if(sentence.includes("name")){
            switchImage('assets/name.jpg');
        }  
        if(sentence.includes("is")){
            switchImage('assets/is.jpg');
        }  
        if(sentence.includes("benjamin")|| sentence.includes("Benjamin")){
            switchImage('assets/benjamin.jpg');
        }  
        if(sentence.includes("loco")|| sentence.includes("Loco")){
            switchImage('assets/loco.png');
        } 
        if(sentence.includes("smooth")){
            switchImage('assets/smooth.jpg');
        }  
        if(sentence.includes("walk")){
            switchImage('assets/walk.png');
        }  
        
    }
}

function switchImage(url){
    if(img == undefined){
        img = createImg(url)
        .position(width/2, height/2)
        .style("width:300px;height:300px");
    }else{
        img.attribute('src', url)
    }
}