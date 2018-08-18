
createCategories();


function createCategories(){
    var cat1 = new Categories("food-background.jpg", "אוכל" , "Food.html");
    var cat2 = new Categories("games-background.jpg", "משחקים" ,"Children.html");
    var cat3 = new Categories("home-background.jpg", "בית", "Home.html");
    var cat4 = new Categories("family-background.jpg", "משפחה" , "Family.html");
}

function Categories(_image, _name,_link) {
    this.image = _image;
    this.name = _name;
    this.link = _link;

    this.newBox = document.createElement("div");
    this.newBox.className = "col-md-6 mb-4";
    id_row.appendChild(this.newBox);

    this.newImg = document.createElement("img"); 
    this.newImg.src = `img/${this.image}`;
    this.newImg.className = "img-fluid z-depth-1-half"
    // this.newImg.onclick = function() {
    //     window.location.href = 'http://putyourlocationhere/';
    // };
    this.newBox.appendChild(this.newImg);

    this.newBox.innerHTML += "<a href="+this.link+">"+this.name+"</a>"

}