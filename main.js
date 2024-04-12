img = "";
status= "";
objects = [];
function preload(){
  img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(video, 0, 0, 380, 380);
    fill("#FF0000");
    text("bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    

}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    
}


function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}




function modelLoaded()
{
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
  if(error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
 }