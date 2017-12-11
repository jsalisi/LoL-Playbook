var menuControl = document.getElementById("menuButton");
var menu = document.getElementById("hcontrols");
var struct_button = document.getElementById("toStructures"),
    jg_button = document.getElementById("toJungle"),
    struct_tab = document.getElementById("structure_tab"),
    jg_tab = document.getElementById("jungle_tab");

var nexus_desc = ["- Destroying this means you win the game.", 
                  "- It is located at the bottom left for the Blue Team or the Top right for the Red Team.", 
                  "- It is also guarded by 2 turrets.",
                  "- At least one inhibitor must be destroyed to be able to damage the Nexus."];

var inhib_desc = ["- Each team has 3 inhibitors; located at the edge of each team's base.",
                  "- Each inhibitor is gaurded by 1 turret.",
                  "- Once an inhibitor is destroyed, stronger minions, known as Super Minions, will spawn for the team who destroyed the inhibitor. If all inhibitors are destroyed, 2 super minions will spawn in each lane.",
                  "- Inhibitors will be restored after 5 minutes;  Super Minions will no longer spawn as a result."];

var turret_desc = ["- There are 2 turrets per lane, 1 turret for each inhibitor, and 2 turrets for the Nexus for each team. This amounts to a total of 22 turrets accross the map.",
                   "- Turrets will output a lot of damage and will only attack enemies.",
                   "- Turrets will not respawn.",
                   "- Turrets grant their team true sight, allowing it to see all traps and stealth units within their vision range."];

var baron_desc = ["- Baron Nashor can be found in the upper left section of the map. It is widely regarded as a high tier objective.",
                  "- It  often requires all 5 players to participate in order to take down Baron Nashor.",
                  "- Upon slaying Baron Nashor, a power-up is granted to all players of the team who participated in slaying it.",
                  "- This power-up, or 'Baron Buff', lasts only 2 minutes and Baron respawns after 7 minutes."];

var drag_desc = ["- Located opposite of Baron Nashor, it's a strong early game objective.",
                 "- A fire dragon will grant bonus damage while a cloud dragon will grant bonus movement speed.",
                 "- Alternatively, an ocean drake will increase regenration and an earth dragon will grant  additional damage to objectives such as structures and monsters.",
                 "- Dragon will only respawn 6 minutes after it has been taken down."];

var blue_desc = ["- The Blue Sentinel grants additional mana regenration to whoever takes it down.",
                 "- It will not spawn 5 minutes after it has been slain.",
                 "- It is located on the left and right quadrants of the map",
                 ""];

var red_desc = ["- The Red Brambleback grants additional health regenration and damage to whoever takes it down.",
                "- It will not spawn 5 minutes after it has been slain.",
                "- It is located in the upper left and lower right  quadrants of the map.",
                ""];

/*-----Functions-----*/

function openClose(position){
    if(position == "0%"){
        menu.style.left = "-15%";
    }
    else {
        menu.style.left = "0%";
    }
}

function menu_buttons(button_id){    
    switch(button_id){
        case "pb_button":
            document.getElementById("workspace").style.display = "block";
            document.getElementById("cont").style.display = "none";
            break;
        case "obj_button":
            document.getElementById("workspace").style.display = "none";
            document.getElementById("cont").style.display = "block";
            document.getElementById("Objectives").scrollIntoView({behavior: "smooth", block: "start"});
            break;
        case "strat_button":
            document.getElementById("workspace").style.display = "none";
            document.getElementById("cont").style.display = "block";
            document.getElementById("Basic_Strategy").scrollIntoView({behavior: "smooth", block: "start"}); 
            break;
        case "vis_button":
            document.getElementById("workspace").style.display = "none";
            document.getElementById("cont").style.display = "block";
            document.getElementById("vision_control").scrollIntoView({behavior: "smooth", block: "start"});
            break;
        case "home_button":
            document.getElementById("workspace").style.display = "none";
            document.getElementById("cont").style.display = "block";
            document.getElementById("homepage").scrollIntoView({behavior: "smooth", block: "start"});
            break;
        default:
            break;
    }
}

function switch_obj_tabs(button_id){
    if(button_id == "toStructures"){
        struct_tab.style.display = "block";
        struct_button.style.opacity = "1.0";
        jg_button.style.opacity = "0.7";
        jg_tab.style.display = "none";
    }
    
    else if(button_id == "toJungle"){
        jg_tab.style.display = "block";
        jg_button.style.opacity = "1.0";
        struct_button.style.opacity = "0.7";
        struct_tab.style.display = "none";
    }
}

function switch_img(click_id){
    var display_img = document.getElementById("obj_img"),
        strat_img = document.getElementById("strat_img"),
        iHeader = document.getElementById("info_header"),
        info1 = document.getElementById("obj_info1"),
        info2 = document.getElementById("obj_info2"),
        info3 = document.getElementById("obj_info3"),
        info4 = document.getElementById("obj_info4");
    
    if (click_id == "nex_img"){
        display_img.style.backgroundImage =  "url(img/structures/nexus.png)";
        iHeader.innerHTML = "The Nexus";
        info1.innerHTML = nexus_desc[0];
        info2.innerHTML = nexus_desc[1];
        info3.innerHTML = nexus_desc[2];
        info4.innerHTML = nexus_desc[3];
    } 
    
    else if (click_id == "inhib_img"){
        display_img.style.backgroundImage =  "url(img/structures/Inhibitor.png)";
        iHeader.innerHTML = "Inhibitors";
        info1.innerHTML = inhib_desc[0];
        info2.innerHTML = inhib_desc[1];
        info3.innerHTML = inhib_desc[2];
        info4.innerHTML = inhib_desc[3];
    } 
    
    else if (click_id == "turret_img"){
        display_img.style.backgroundImage =  "url(img/structures/Turret.png)";
        iHeader.innerHTML = "Turrets";
        info1.innerHTML = turret_desc[0];
        info2.innerHTML = turret_desc[1];
        info3.innerHTML = turret_desc[2];
        info4.innerHTML = turret_desc[3];
    } 
    
    else if (click_id == "bar_img"){
        display_img.style.backgroundImage =  "url(img/jungle/Baron_Nashor_OriginalSkin.jpg)";
        iHeader.innerHTML = "Baron Nashor";
        info1.innerHTML = baron_desc[0];
        info2.innerHTML = baron_desc[1];
        info3.innerHTML = baron_desc[2];
        info4.innerHTML = baron_desc[3];
    }
    
    else if (click_id == "drag_img"){
        display_img.style.backgroundImage =  "url(img/jungle/Dragon_OriginalSkin.jpg)";
        iHeader.innerHTML = "Dragon";
        info1.innerHTML = drag_desc[0];
        info2.innerHTML = drag_desc[1];
        info3.innerHTML = drag_desc[2];
        info4.innerHTML = drag_desc[3];
    }
    
    else if (click_id == "blue_buff"){
        display_img.style.backgroundImage =  "url(img/jungle/Blue_Sentinel_OriginalSkin.jpg)";
        iHeader.innerHTML = "Blue Sentinel";
        info1.innerHTML = blue_desc[0];
        info2.innerHTML = blue_desc[1];
        info3.innerHTML = blue_desc[2];
        info4.innerHTML = blue_desc[3];
    }
    
    else if (click_id == "red_buff"){
        display_img.style.backgroundImage =  "url(img/jungle/Red_Brambleback_OriginalSkin.jpg)";
        iHeader.innerHTML = "Red Brambleback";
        info1.innerHTML = red_desc[0];
        info2.innerHTML = red_desc[1];
        info3.innerHTML = red_desc[2];
        info4.innerHTML = red_desc[3];
    } 
    
    else if (click_id ==  "lphase"){
        strat_img.style.backgroundImage =  "url(img/lanes.png)"
    }
    
    else if (click_id ==  "grouping"){
        strat_img.style.backgroundImage =  "url(img/grouping.jpg)"
    }
    
    else if (click_id ==  "splitp"){
        strat_img.style.backgroundImage =  "url(img/split.jpg)"
    }
    
    else if (click_id ==  "plist"){
        strat_img.style.backgroundImage = "url(http://cdn.cloth5.com/wp-content/uploads/2013/09/objective-priority-info.jpg)";
    }
}

/*-----Interaction-----*/

menu.addEventListener("mouseover", function(){
    openClose(menu.style.left);
})

menu.addEventListener("mouseout", function(){
    openClose(menu.style.left);
})

menu.addEventListener("click", function(ev){
    menu_buttons(ev.target.id);
})

document.getElementById("obj_controls").addEventListener("click", function(ev){
    switch_obj_tabs(ev.target.id);
    switch_img(ev.target.id);
})

document.getElementById("strat_controls").addEventListener("click", function(ev){
    switch_img(ev.target.id);
})