function init() {
  createHome();
}

function createHome(){
    var home1 = new Home("https://www.youtube.com/embed/Xaqb0cI88Wc" , "החלפת מנורה", "מדריך קצר איך להחליף מנורות בבית | רמת קושי: קל");
    var home2 = new Home("https://www.youtube.com/embed/Xaqb0cI88Wc" , "החלפת מנורה", "מדריך קצר איך להחליף מנורות בבית | רמת קושי: קל");
}

function Home(_iframe, _link, _para){
    this.frame = _iframe;
    this.link = _link;
    this.para = _para;

    this.newBox = document.createElement("div");
    this.newBox.className = "left_side";
    id_main.appendChild(this.newBox);

    this.newFrame = document.createElement("iframe"); 
    this.newFrame.src = this.frame;
    this.newBox.appendChild(this.newFrame);

    this.newBox.innerHTML += "<a href>"+this.link+"</a>";
    this.newBox.innerHTML += "<p>"+this.para+"</p>"
}