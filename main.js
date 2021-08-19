function setup(){
canvas=createCanvas(450,450)
canvas.position(560,150)
video=createCapture(VIDEO)
video.size(450,400)
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}
function modelLoaded(){
console.log("model is loaded")
}
function draw(){
background("black")
fill("red")
stroke("black")
text("Subcribe to probot goku plays on yt",noseX,noseY)
textSize(difference)
document.getElementById("text_side").innerHTML="width and height of the text will be"+difference+"px"
}
noseX=0
noseY=0
leftwristX=0
rightwristX=0
difference=0
function gotPoses(results){
if(results.length>0){
console.log(results)
noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y
console.log("noseX="+noseX+"noseY="+noseY)
leftwristX=results[0].pose.leftWrist.x
rightwristX-results[0].pose.rightWrist.x
difference=floor(leftwristX-rightwristX)
console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX+"difference="+difference)
}
}
