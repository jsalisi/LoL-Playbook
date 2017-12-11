var ch_txt_inp = document.getElementById("ch_input"),
    go_button = document.getElementById("go"),
    login_win = document.getElementById("login_window");

var s_ward = document.getElementById("s_ward"),
    c_ward = document.getElementById("c_ward"),
    ward_id = 1;

var tips = document.getElementsByClassName("n_tips"),
    x_button = document.getElementsByClassName("x_button");

var tips_checkbox = document.getElementById("toggle_tips");

var close_window = function(ev){
    var sel_window = ev.target.parentElement.id;
    
    document.getElementById(sel_window).style.display = "none";
}

/*----- Functions -----*/

function log_win(targ){
    if (targ == "exp"){
        login_win.style.display = "none";
        tips_checkbox.checked = false;
        for(var i=0; i<tips.length; i++){
            tips[i].style.zIndex = -1;
            tips[i].style.display = "none";
        }
    } else if  (targ == "new"){
        login_win.style.display = "none";
        tips_checkbox.checked = true;
        for(var i=0; i<tips.length; i++){
            tips[i].style.display = "block";
        }
    }
}

function toggle_draw(toggle){    
    if(toggle == -1){
        document.getElementById("draw").innerHTML = "Draw [On]";
        document.getElementById("can").style.zIndex = "1";
        document.getElementById("clear").style.display = "block";
    } else {
        document.getElementById("draw").innerHTML = "Draw [Off]";
        document.getElementById("can").style.zIndex = "-1";
        document.getElementById("clear").style.display = "none";
    }
}

function tips_toggle(ev){
    if(ev.target.checked){
        for(var i=0; i<tips.length; i++){
            tips[i].style.zIndex = 4;
            tips[i].style.display = "block";
        }
    } else {
        for(var i=0; i<tips.length; i++){
            tips[i].style.zIndex = -1;
            tips[i].style.display = "none";
        }
    }
}

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data =  ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    if (ev.target.id == "top"){
        if(ev.target.className == "rolebox_b"){
            document.getElementById("blue_ch_top").style.backgroundImage = "url("+document.getElementById(data).src+")";
        } 
        
        else if(ev.target.className == "rolebox_r"){
            document.getElementById("red_ch_top").style.backgroundImage = "url("+document.getElementById(data).src+")";
        }
    } 
    
    else if (ev.target.id == "jungle"){
        if(ev.target.className == "rolebox_b"){
            document.getElementById("blue_ch_jg").style.backgroundImage = "url("+document.getElementById(data).src+")";
        } 
        
        else if(ev.target.className == "rolebox_r"){
            document.getElementById("red_ch_jg").style.backgroundImage = "url("+document.getElementById(data).src+")";
        }
    }
    
    else if (ev.target.id == "mid"){
        if(ev.target.className == "rolebox_b"){
            document.getElementById("blue_ch_mid").style.backgroundImage = "url("+document.getElementById(data).src+")";
        } 
        
        else if(ev.target.className == "rolebox_r"){
            document.getElementById("red_ch_mid").style.backgroundImage = "url("+document.getElementById(data).src+")";
        }
    }
    
    else if (ev.target.id == "bot"){
        if(ev.target.className == "rolebox_b"){
            document.getElementById("blue_ch_bot").style.backgroundImage = "url("+document.getElementById(data).src+")";
        } 
        
        else if(ev.target.className == "rolebox_r"){
            document.getElementById("red_ch_bot").style.backgroundImage = "url("+document.getElementById(data).src+")";
        }
    }
    
    else if (ev.target.id == "support"){
        if(ev.target.className == "rolebox_b"){
            document.getElementById("blue_ch_sup").style.backgroundImage = "url("+document.getElementById(data).src+")";
        } 
        
        else if(ev.target.className == "rolebox_r"){
            document.getElementById("red_ch_sup").style.backgroundImage = "url("+document.getElementById(data).src+")";
        }
    }
}

/*----- Interactions -----*/

for(var i=0; i<x_button.length; i++){
    x_button[i].addEventListener("click", close_window, false);
}

go_button.addEventListener("click", function(){    
    champion_name = ch_txt_inp.value;
    
    var new_ch_img = document.createElement("img");
    
    new_ch_img.id = "ch_img_" + champion_name;
    new_ch_img.className =  "ch_img";
    new_ch_img.src = "img/champion_icons/"+champion_name+"Square.png";
    new_ch_img.draggable = "true";
    new_ch_img.addEventListener("dragstart", drag);
    
    document.getElementById("img_box").appendChild(new_ch_img);
});

login_win.addEventListener("click", function(ev){
    log_win(ev.target.id);
});

document.getElementById("draw").addEventListener("click", function(){
    var ind = parseInt(document.getElementById("can").style.zIndex) || -1;
    toggle_draw(ind);
});

tips_checkbox.addEventListener("click", function(ev){
    tips_toggle(ev);
})

s_ward.addEventListener("click", function(ev){
    var nward = document.createElement("div");
        
    document.getElementById("onmap").appendChild(nward);
        
    nward.className = "s_ward_icon";
    nward.id = "ward_id" + ward_id;
    ward_id++;
})

c_ward.addEventListener("click", function(ev){
    var nward = document.createElement("div");
        
    document.getElementById("onmap").appendChild(nward);
        
    nward.className = "c_ward_icon";
    nward.id = "ward_id" + ward_id;
    ward_id++;
})