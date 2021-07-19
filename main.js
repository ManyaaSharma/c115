function preload(){

}
function setup(){
 canvas=createCanvas(300,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(300,300);
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',got_poses);
}
function draw(){

}
function take_snapshot(){
    save('selfie.png');
}

function modelLoaded(){
    console.log("poseNet is initialized")
}

function got_poses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose X="+results[0].pose.nose.x);
        console.log("nose Y="+results[0].pose.nose.y);
        }
}