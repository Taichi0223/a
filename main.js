Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:90 ,
});

Webcam.attach("#Camera");
function PictureTake(){
    Webcam.snap(function(Data){
        document.getElementById("Picture").innerHTML = "<img id = 'Pic' src = '" + Data + "'>" ;
    });

    
}
console.log("ml5 version : ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/20eOzyGMZ/model.json",model_loaded);
function model_loaded(){
    console.log("Model is loaded")
}

function PictureIdentify(){
    img = document.getElementById("Pic");
    classifier.classify(img,gotresults);
}

function gotresults(error, results){

    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        label = results[0].label;
        accuracy = ((results[0].confidence)*100).toFixed(2);
        document.getElementById("Object").innerHTML = label;
        document.getElementById("Accuracy").innerHTML = accuracy + "%";
    }
    
}