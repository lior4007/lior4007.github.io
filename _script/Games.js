
function init()
{

}

// dice
function OnRollDiceClick(){
    var rnd = Math.random()*6;
    rnd = Math.ceil(rnd) // מעגל כלפי מעלה | floor - כלפי מטה 
    id_span.innerHTML = rnd;
    id_img.src = "_images/dice"+rnd+".jpg"
}

function OnRollDiceClick2(){
    var rnd = Math.random()*6;
    rnd = Math.ceil(rnd) // מעגל כלפי מעלה | floor - כלפי מטה 
    id_span2.innerHTML = rnd;
    id_img2.src = "_images/dice"+rnd+".jpg"
}

function Both(){
    OnRollDiceClick();
    OnRollDiceClick2();
}




