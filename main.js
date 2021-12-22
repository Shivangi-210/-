function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YclxodjPP/model.json" , mr)
}
 
function mr(){
    classifier.classify(gotResult);
}
function gotResult(error,Result){
    if(error){
        console.error(error);
    }
    else{
        console.log(Result);
        red = Math.floor(Math.random()*255)+1;
        green = Math.floor(Math.random()*255)+1;
        blue = Math.floor(Math.random()*255)+1;  

        document.getElementById("ar").innerHTML = "I CAN HEAR - " +Result[0].label;    
        document.getElementById("a").innerHTML = " ACCURACY - " +(Result[0].confidence*100).toFixed(2) + "%";
        document.getElementById("ar").style.color = "rgb("+red+", "+blue+", "+green+")";
        document.getElementById("a").style.color = "rgb("+red+", "+blue+", "+green+")";
     

        img = document.getElementById("a1");
        img2 = document.getElementById("a2");
        img3= document.getElementById("a3");
        img4 = document.getElementById("a4");
        
        if(Result[0].label == "CLAP"){
            img.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(Result[0].label == "COUGH"){
            img.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(Result[0].label == "SNAP"){
            img.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else{
            img.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}

