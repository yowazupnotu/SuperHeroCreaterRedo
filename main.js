console.log("IronMan Face - Q; IronMan Body - W; IronMan Legs - E; IronMan LeftArm - R; IronMan RightArm - T; Hulk Head - Y; Hulk Body - U; Hulk Legs - I; Hulk LeftArm - O; Hulk RightArm - L; SpiderMan Head - A; SpiderMan Body - S; SpiderMan Legs - D; SpiderMan LeftArm - F; SpiderMan RightArm - G; Thor Head - H; Thor LeftArm - J; Thor RightArm - K");

canvas = new fabric.Canvas("canvas");

blockwidth = 30;
blockheight = 30;
playerx = 50;
playery = 50;
blockob = "";
playerob = "";

document.getElementById("width").innerHTML = blockwidth;
document.getElementById("height").innerHTML = blockheight;

function playerupdate() {
    console.log("SUPERHERO");
    fabric.Image.fromURL("player.png", function (Img) {
        playerob = Img;
        playerob.scaleToWidth(150);
        playerob.scaleToHeight(140);
        playerob.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerob);
    });
}

function newblocks(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        blockob = Img;
        blockob.scaleToWidth(blockwidth);
        blockob.scaleToHeight(blockheight);
        blockob.set({
            top: playery,
            left: playerx
        });
        canvas.add(blockob);
    });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
keycode = e.keyCode;
console.log(keycode);

if(e.shiftKey == true && keycode == 80){
    blockwidth = blockwidth + 10;
    blockheight = blockheight + 10;
    document.getElementById("width").innerHTML = blockwidth;
    document.getElementById("height").innerHTML = blockheight;
}

if(e.shiftKey == true && keycode == 77){
    blockwidth = blockwidth - 10;
    blockheight = blockheight - 10;
    document.getElementById("width").innerHTML = blockwidth;
    document.getElementById("height").innerHTML = blockheight;
}

if(keycode == 37){
    left();
    console.log("left");
}

if(keycode == 38){
    up();
    console.log("up");
}

if(keycode == 39){
    right();
    console.log("right");
}

if(keycode == 40){
    down();
    console.log("down");
}

if(keycode == 81){
    newblocks("ironface.png");
    console.log("q");
}

if(keycode == 87){
    newblocks("ironbody.png");
    console.log("w");
}

if(keycode == 69){
    newblocks("ironlegs.png");
    console.log("e");
}

if(keycode == 82){
    newblocks("ironlefthand.png");
    console.log("r");
}

if(keycode == 84){
    newblocks("ironrighthand.png");
    console.log("t");
}

if(keycode == 89){
    newblocks("hulkface.png");
    console.log("y");
}

if(keycode == 85){
    newblocks("hulkbody.png");
    console.log("u");
}

if(keycode == 73){
    newblocks("hulklegs.png");
    console.log("i");
}

if(keycode == 79){
    newblocks("hulklefthand.png");
    console.log("o");
}

if(keycode == 65){
    newblocks("spiderface.png");
    console.log("a");
}

if(keycode == 83){
    newblocks("spiderbody.png");
    console.log("s");
}

if(keycode == 68){
    newblocks("spiderlegs.png");
    console.log("d");
}

if(keycode == 70){
    newblocks("spiderlefthand.png");
    console.log("f");
}

if(keycode == 71){
    newblocks("spiderrighthand.png");
    console.log("g");
}

if(keycode == 72){
    newblocks("thorface.png");
    console.log("h");
}

if(keycode == 74){
    newblocks("thorlefthand.png");
    console.log("j");
}

if(keycode == 75){
    newblocks("thorrighthand.png");
    console.log("k");
}

if(keycode == 76){
    newblocks("hulkrighthand.png");
    console.log("l");
}
}

function up(){

    if(playery > 0){
    playery = playery - blockheight;
    canvas.remove(playerob);
    playerupdate();
    }
}

function down(){

    if(playery < 450){
    playery = playery + blockheight;
    canvas.remove(playerob);
    playerupdate();
    }
}

function left(){

    if(playerx > 0){
    playerx = playerx - blockwidth;
    canvas.remove(playerob);
    playerupdate();
    }
}

function right(){

    if(playerx < 700){
    playerx = playerx + blockwidth;
    canvas.remove(playerob);
    playerupdate();
    }
}