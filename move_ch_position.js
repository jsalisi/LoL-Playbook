var b_ch_icons = document.getElementsByClassName("ch_icon_b");
var r_ch_icons = document.getElementsByClassName("ch_icon_r");
var s_ward_icons = document.getElementsByClassName("s_ward_icon");
var c_ward_icons = document.getElementsByClassName("c_ward_icon");

var pb_controls = document.getElementById("bsc_controls");

var def_pos_b = 
    [{
        "role_id": "blue_ch_top",
        "b_left": "18%",
        "b_top": "24%"
    },{
        "role_id": "blue_ch_jg",
        "b_left": "25%",
        "b_top": "45%"
    },{
        "role_id": "blue_ch_mid",
        "b_left": "45%",
        "b_top": "52%"
    },{
        "role_id": "blue_ch_bot",
        "b_left": "73%",
        "b_top": "84%"
    },{
        "role_id": "blue_ch_sup",
        "b_left": "70%",
        "b_top": "87%"
    }],

    def_pos_r = 
    [{
        "role_id": "red_ch_top",
        "r_left": "25%",
        "r_top": "16%"
    },{
        "role_id": "red_ch_jg",
        "r_left": "49%",
        "r_top": "23%"
    },{
        "role_id": "red_ch_mid",
        "r_left": "53%",
        "r_top": "45%"
    },{
        "role_id": "red_ch_bot",
        "r_left": "80%",
        "r_top": "75%"
    },{
        "role_id": "red_ch_sup",
        "r_left": "82%",
        "r_top": "72%"
    }];

var preset_play1 = 
    [{
        "role_id": "blue_ch_top",
        "b_left": "73%",
        "b_top": "84%"
    },{
        "role_id": "blue_ch_jg",
        "b_left": "25%",
        "b_top": "23%"
    },{
        "role_id": "blue_ch_mid",
        "b_left": "23%",
        "b_top": "20%"
    },{
        "role_id": "blue_ch_bot",
        "b_left": "20%",
        "b_top": "22%"
    },{
        "role_id": "blue_ch_sup",
        "b_left": "20%",
        "b_top": "18%"
    }],
    
    preset_play2 =
    [{
        "role_id": "blue_ch_top",
        "b_left": "18%",
        "b_top": "24%"
    },{
        "role_id": "blue_ch_jg",
        "b_left": "73%",
        "b_top": "75%"
    },{
        "role_id": "blue_ch_mid",
        "b_left": "74%",
        "b_top": "79%"
    },{
        "role_id": "blue_ch_bot",
        "b_left": "75%",
        "b_top": "82%"
    },{
        "role_id": "blue_ch_sup",
        "b_left": "78%",
        "b_top": "84%"
    }],
    
    preset_play3 = 
    [{
        "role_id": "blue_ch_top",
        "b_left": "73%",
        "b_top": "84%"
    },{
        "role_id": "blue_ch_jg",
        "b_left": "25%",
        "b_top": "23%"
    },{
        "role_id": "blue_ch_mid",
        "b_left": "45%",
        "b_top": "52%"
    },{
        "role_id": "blue_ch_bot",
        "b_left": "23%",
        "b_top": "20%"
    },{
        "role_id": "blue_ch_sup",
        "b_left": "20%",
        "b_top": "18%"
    }],
    
    preset_play4 =
    [{
        "role_id": "blue_ch_top",
        "b_left": "18%",
        "b_top": "24%"
    },{
        "role_id": "blue_ch_jg",
        "b_left": "45%",
        "b_top": "50%"
    },{
        "role_id": "blue_ch_mid",
        "b_left": "73%",
        "b_top": "84%"
    },{
        "role_id": "blue_ch_bot",
        "b_left": "45%",
        "b_top": "52%"
    },{
        "role_id": "blue_ch_sup",
        "b_left": "47%",
        "b_top": "52%"
    }],
    
    preset_play5 = 
    [{
        "role_id": "blue_ch_top",
        "b_left": "18%",
        "b_top": "24%"
    },{
        "role_id": "blue_ch_jg",
        "b_left": "73%",
        "b_top": "75%"
    },{
        "role_id": "blue_ch_mid",
        "b_left": "45%",
        "b_top": "52%"
    },{
        "role_id": "blue_ch_bot",
        "b_left": "74%",
        "b_top": "80%"
    },{
        "role_id": "blue_ch_sup",
        "b_left": "78%",
        "b_top": "84%"
    }];

var preset_play1_r =
    [{
        "role_id": "red_ch_top",
        "r_left": "80%",
        "r_top": "75%"
    },{
        "role_id": "red_ch_jg",
        "r_left": "25%",
        "r_top": "23%"
    },{
        "role_id": "red_ch_mid",
        "r_left": "23%",
        "r_top": "19%"
    },{
        "role_id": "red_ch_bot",
        "r_left": "25%",
        "r_top": "16%"
    },{
        "role_id": "red_ch_sup",
        "r_left": "20%",
        "r_top": "16%"
    }],
    
    preset_play2_r =
    [{
        "role_id": "red_ch_top",
        "r_left": "25%",
        "r_top": "16%"
    },{
        "role_id": "red_ch_jg",
        "r_left": "74%",
        "r_top": "75%"
    },{
        "role_id": "red_ch_mid",
        "r_left": "77%",
        "r_top": "77%"
    },{
        "role_id": "red_ch_bot",
        "r_left": "80%",
        "r_top": "77%"
    },{
        "role_id": "red_ch_sup",
        "r_left": "80%",
        "r_top": "80%"
    }],
    
    preset_play3_r =
    [{
        "role_id": "red_ch_top",
        "r_left": "80%",
        "r_top": "75%"
    },{
        "role_id": "red_ch_jg",
        "r_left": "25%",
        "r_top": "23%"
    },{
        "role_id": "red_ch_mid",
        "r_left": "53%",
        "r_top": "45%"
    },{
        "role_id": "red_ch_bot",
        "r_left": "25%",
        "r_top": "16%"
    },{
        "role_id": "red_ch_sup",
        "r_left": "20%",
        "r_top": "16%"
    }],
    
    preset_play4_r = 
    [{
        "role_id": "red_ch_top",
        "r_left": "80%",
        "r_top": "75%"
    },{
        "role_id": "red_ch_jg",
        "r_left": "50%",
        "r_top": "46%"
    },{
        "role_id": "red_ch_mid",
        "r_left": "25%",
        "r_top": "16%"
    },{
        "role_id": "red_ch_bot",
        "r_left": "53%",
        "r_top": "45%"
    },{
        "role_id": "red_ch_sup",
        "r_left": "52%",
        "r_top": "48%"
    }],
    
    preset_play5_r =
    [{
        "role_id": "red_ch_top",
        "r_left": "25%",
        "r_top": "16%"
    },{
        "role_id": "red_ch_jg",
        "r_left": "74%",
        "r_top": "75%"
    },{
        "role_id": "red_ch_mid",
        "r_left": "53%",
        "r_top": "45%"
    },{
        "role_id": "red_ch_bot",
        "r_left": "77%",
        "r_top": "77%"
    },{
        "role_id": "red_ch_sup",
        "r_left": "80%",
        "r_top": "80%"
    }];
/*----- Functions -----*/

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(ev) {
    ev = ev || window.event;
    pos3 = ev.clientX;
    pos4 = ev.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(ev) {
    ev = ev || window.event;
    pos1 = pos3 - ev.clientX;
    pos2 = pos4 - ev.clientY;
    pos3 = ev.clientX;
    pos4 = ev.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function toDefaultPos(){
    for(var i = 0; i<b_ch_icons.length; i++){
        if(b_ch_icons[i].id == def_pos_b[i].role_id){
            var currIcon = document.getElementById(b_ch_icons[i].id);
            
            currIcon.style.left = def_pos_b[i].b_left;
            currIcon.style.top = def_pos_b[i].b_top;
        }
    }
        
        for(var i = 0; i<r_ch_icons.length; i++){
            if(r_ch_icons[i].id == def_pos_r[i].role_id){
                var currIcon = document.getElementById(r_ch_icons[i].id);
            
                currIcon.style.left = def_pos_r[i].r_left;
                currIcon.style.top = def_pos_r[i].r_top;
            }
        }
}

function change_play(play_id){
    var sel_play = "";
    var team = "";
    
    if(play_id == "play1"){
        team = "blue";
        sel_play = preset_play1;
    } else if (play_id == "play2") {
        team = "blue";
        sel_play = preset_play2;
    } else if (play_id == "play3") {
        team = "blue";
        sel_play = preset_play3;
    } else if (play_id == "play4") {
        team = "blue";
        sel_play = preset_play4;
    } else if (play_id == "play5") {
        team = "blue";
        sel_play = preset_play5;
    } else if (play_id == "play1_r") {
        team = "red";
        sel_play = preset_play1_r;
    } else if (play_id == "play2_r") {
        team = "red";
        sel_play = preset_play2_r;
    } else if (play_id == "play3_r") {
        team = "red";
        sel_play = preset_play3_r;
    } else if (play_id == "play4_r") {
        team = "red";
        sel_play = preset_play4_r;
    } else if (play_id == "play5_r") {
        team = "red";
        sel_play = preset_play5_r;
    }
    
    if(team == "blue"){
        for(var i = 0; i<b_ch_icons.length; i++){
            if(b_ch_icons[i].id == sel_play[i].role_id){
                var currIcon = document.getElementById(b_ch_icons[i].id);

                currIcon.style.left = sel_play[i].b_left;
                currIcon.style.top = sel_play[i].b_top;
            }
        }
    } else if (team == "red") {
        for(var i = 0; i<r_ch_icons.length; i++){
            if(r_ch_icons[i].id == sel_play[i].role_id){
                var currIcon = document.getElementById(r_ch_icons[i].id);

                currIcon.style.left = sel_play[i].r_left;
                currIcon.style.top = sel_play[i].r_top;
            }
        }
    }
}

/*----- Interactions -----*/

for(var i=0; i<b_ch_icons.length; i++){
    var icon_id = b_ch_icons[i].id;
    dragElement(document.getElementById((icon_id)));
}

for(var i=0; i<r_ch_icons.length; i++){
    var icon_id = r_ch_icons[i].id;
    dragElement(document.getElementById((icon_id)));
}

document.getElementById("s_ward").addEventListener("click", function(){
    for(var i=0; i<s_ward_icons.length; i++){
        var icon_id = s_ward_icons[i].id;
        dragElement(document.getElementById((icon_id)));
    }
})

document.getElementById("c_ward").addEventListener("click", function(){
    for(var i=0; i<c_ward_icons.length; i++){
        var icon_id = c_ward_icons[i].id;
        dragElement(document.getElementById((icon_id)));
    }
})

pb_controls.addEventListener("click", function(ev){
    if(ev.target.id == "default_strat"){
        toDefaultPos();
    } else {
        change_play(ev.target.id);
    }
})