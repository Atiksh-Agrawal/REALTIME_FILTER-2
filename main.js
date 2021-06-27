function preload() {

}

function setup() {
  canvas = createCanvas(550, 500);
  canvas.position(400,400);
 // canvas.center();
  video = createCapture(VIDEO);
  video.size(550, 500);
  video.hide();
  tint_color = "";

  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on('pose',gotPoses);
}

function draw() {
  image(video, 0, 0, 550, 500);
  tint(tint_color);
}

function Take_snap() {
  save("Fillterd.png");
}


function filterTint(){
  tint_color = document.getElementById("color_name").value;
}

function modelLoaded() {
  console.log("posenet initialized")
}

function gotPoses(results){
  
  console.log(results);
  if(results.length > 0){
   console.log("nose x =" + results[0].pose.nose.x);
   console.log("nose y =" + results[0].pose.nose.y);
  }
}

var filters = ["Mustache Filter","Lipstic Filter","Cute Eyes Filter","Angry Filter","Clown Nose Filter"];

function Switch(){
  console.log(filters);
  //document.getElementById("filter").innerHTML = filters[0];
  document.getElementById("filter").innerHTML = filters[0];
}