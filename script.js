
function init() {
    createCategories();
    setInterval("showTime()",10);
    createHome();
}

function createCategories(){
    var cat1 = new Categories("box1.jpg", "אוכל" , "Food.html");
    //cat1.addToHtml()
    
    var cat2 = new Categories("box2.jpg", "ילדים" ,"Children.html");
    //cat2.addToHtml();

    var cat3 = new Categories("box3.png", "בית", "Home.html");
    //cat3.addToHtml();

    var cat4 = new Categories("box4.png", "משפחה" , "Family.html");
    //cat4.addToHtml();

    var cat5 = new Categories("box4.png", "משחקים" , "Games.html");
    //cat5.addToHtml();
}

function showTime(){

    var mytime = new Date();
    var sec = mytime.getSeconds();
    var min = mytime.getMinutes();
    var hour = mytime.getHours();
    var str_time = "";

    if(sec < 10){
        str_time = "0"+sec;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(hour < 10){
        hour = "0"+hour;
    }
    str_time = hour+":"+min+":"+sec;
    document.getElementById("MyDate").innerHTML = str_time;
}