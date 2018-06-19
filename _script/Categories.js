function Categories(_image, _name,_link) {
    this.image = _image;
    this.name = _name;
    this.link = _link;

//Categories.prototype.addToHtml = function() { // לייצר אלמנטים באינדקס
    this.newBox = document.createElement("div");
    this.newBox.className = "box";
    id_blocks.appendChild(this.newBox);

    this.newImg = document.createElement("img"); 
    this.newImg.src = "_images/"+this.image;
    this.newBox.appendChild(this.newImg);

    this.newBox.innerHTML += "<h2>"+this.name+"</h2>";
    this.newBox.innerHTML += "<a href="+this.link+">--קרא עוד--</a>"

}

