var happyIMG = ["https://knowledge.wharton.upenn.edu/wp-content/uploads/2016/01/compassion.jpg","https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/11/13/happiness.jpg?w968h681","https://im.indiatimes.in/content/itimes/photo/2016/Aug/26/1472233327-pug-drunk-on-happiness.jpg"];

var sadIMG = ["https://media.gettyimages.com/photos/putting-a-sad-face-on-picture-id453470795?s=612x612","https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://data.whicdn.com/images/270472641/superthumb.jpg?t=1481970523"];

var lazyIMG = ["https://worldwideinterweb.com/wp-content/uploads/2014/09/laziest-man-ever.jpg","https://media.tenor.com/images/1de74e808439965324e3263f94e5ac95/tenor.gif","https://im.indiatimes.in/content/2015/Mar/1817801_1437683066.jpg"];

var hungryIMG = ["https://tasteforlife.com/sites/default/files/styles/desktop/public/tools/quizzes/quiz-how-hungry-are-you-really/quiz-how-hungry-are-you-really.jpg?itok=-pGgwbmX","https://cdn2.stylecraze.com/wp-content/uploads/2018/04/How-To-Control-Hunger-–-20-Best-Strategies-To-Stop-Feeling-Hungry-All-The-Time.jpg","https://mymindmybody.net/wp-content/uploads/2018/04/Identifying-Hunger-1024x1024.png"];

var jojoIMG = ["https://pm1.narvii.com/6972/6687dabe066031e2efe14ecf02e347f347cd7f30r1-1280-720v2_hq.jpg","https://memestatic.fjcdn.com/pictures/Jojo_843627_6230783.jpg","https://i.imgur.com/sFOnwKx.jpg"];

$("#confirm").click(function(){
    var input = $("#form").val();
    $(".image-container").html("");
    if (input === "happy") {
        happyMood();
        clearForm();
    } else if (input === "sad") {
        sadMood();
        clearForm();
    } else if (input === "lazy") {
        lazyMood();
        clearForm();
    } else if (input === "hungry") {
        hungryMood();
        clearForm();
    } else if (input === "jojo") {
        jojoMood();
        clearForm();
    }
});

function happyMood(){
    $("#response").text("We're glad you're happy!");
    changeBackground("yellow","orange");
    happyIMG.forEach(function(image){
        $(".image-container").append("<img src="+image+">");    
    });
}

function sadMood(){
    $("#response").text("Sorry, we hope things will cheer up.");
    changeBackground("#0B2E59","#0D6759");
    sadIMG.forEach(function(image){
        $(".image-container").append("<img src="+image+">");    
    });
}

function lazyMood(){
    $("#response").text("Lazy.");
    changeBackground("#6AE7B5","#F0F06E"); 
    lazyIMG.forEach(function(image){
        $(".image-container").append("<img src="+image+">");    
    });
}

function hungryMood(){
    $(".response").text("We are always hungry!");
    changeBackground("brown","orange");
    hungryIMG.forEach(function(image){
        $(".image-container").append("<img src="+image+">");    
    });
}

function jojoMood(){
    $("#response").text("Happy Jojo Friday!");
    changeBackground("violet","gold");
    jojoIMG.forEach(function(image){
        $(".image-container").append("<img src="+image+">");    
    });
}

function changeBackground(color1,color2){
    $("body").css("background-color", color1);
    $("body").css("color", color2);
}


function clearForm(){
    $("#form").val("");
}