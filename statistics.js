var showStats = document.getElementById("open_user_stats");

var s_ward = document.getElementById("s_ward"),
    c_ward = document.getElementById("c_ward");

var num_ward1 = document.getElementById("s_ward_num"),
    num_ward2 = document.getElementById("c_ward_num");

var play_select = document.getElementById("bsc_controls");

var v_new = document.getElementById("new"),
    v_exp = document.getElementById("exp");

var n_user_num = document.getElementById("n_user_num"),
    e_user_num = document.getElementById("e_user_num");

var p1_b = document.getElementById("b_play_count1"),
    p2_b = document.getElementById("b_play_count2"),
    p3_b = document.getElementById("b_play_count3"),
    p4_b = document.getElementById("b_play_count4"),
    p5_b = document.getElementById("b_play_count5"),
    p1_r = document.getElementById("r_play_count1"),
    p2_r = document.getElementById("r_play_count2"),
    p3_r = document.getElementById("r_play_count3"),
    p4_r = document.getElementById("r_play_count4"),
    p5_r = document.getElementById("r_play_count5");

var new_stats;

/*----- Functions -----*/
function local_load(){
    var arrText = localStorage.getItem("items");
    var arr = JSON.parse(arrText);
    
    if(arr === null){
        var init_stats = 
            [{
                "s_ward_clicks": 0,
                "c_ward_clicks": 0
            },
            {
                "bPlay1": 0,
                "bPlay2": 0,
                "bPlay3": 0,
                "bPlay4": 0,
                "bPlay5": 0,
                "rPlay1": 0,
                "rPlay2": 0,
                "rPlay3": 0,
                "rPlay4": 0,
                "rPlay5": 0,
                "def_str": 0
            },
            {
                "new_v": 0,
                "exp_v": 0
            }];
        
        var arText = JSON.stringify(init_stats);
        localStorage.setItem("items", arText);
        
    } else {    
        new_stats = arr;

        if (new_stats.length > 0){
            new_stats[0].s_ward_clicks = 0;
            new_stats[0].c_ward_clicks = 0;

            n_user_num.innerHTML =  new_stats[2].new_v;
            e_user_num.innerHTML =  new_stats[2].exp_v;

            p1_b.innerHTML = new_stats[1].bPlay1;
            p2_b.innerHTML = new_stats[1].bPlay2;
            p3_b.innerHTML = new_stats[1].bPlay3;
            p4_b.innerHTML = new_stats[1].bPlay4;
            p5_b.innerHTML = new_stats[1].bPlay5;

            p1_r.innerHTML = new_stats[1].rPlay1;
            p2_r.innerHTML = new_stats[1].rPlay2;
            p3_r.innerHTML = new_stats[1].rPlay3;
            p4_r.innerHTML = new_stats[1].rPlay4;
            p5_r.innerHTML = new_stats[1].rPlay5;
        }
    }
}

function local_save(names_array){    
    var arrText = JSON.stringify(names_array);
    localStorage.setItem("items", arrText);
}

function addPlayDataToStats(play_id){
    if(play_id == "play1"){
        new_stats[1].bPlay1 += 1;
        p1_b.innerHTML = new_stats[1].bPlay1;
    } 
    else if (play_id == "play2") {
        new_stats[1].bPlay2 += 1;
        p2_b.innerHTML = new_stats[1].bPlay2;
    } 
    else if (play_id == "play3") {
        new_stats[1].bPlay3 += 1;
        p3_b.innerHTML = new_stats[1].bPlay3;
    } 
    else if (play_id == "play4") {
        new_stats[1].bPlay4 += 1;
        p4_b.innerHTML = new_stats[1].bPlay4;
    } 
    else if (play_id == "play5") {
        new_stats[1].bPlay5 += 1;
        p5_b.innerHTML = new_stats[1].bPlay5;
    } 
    else if (play_id == "play1_r") {
        new_stats[1].rPlay1 += 1;
        p1_r.innerHTML = new_stats[1].rPlay1;
    } 
    else if (play_id == "play2_r") {
        new_stats[1].rPlay2 += 1;
        p2_r.innerHTML = new_stats[1].rPlay2;
    } 
    else if (play_id == "play3_r") {
        new_stats[1].rPlay3 += 1;
        p3_r.innerHTML = new_stats[1].rPlay3;
    } 
    else if (play_id == "play4_r") {
        new_stats[1].rPlay4 += 1;
        p4_r.innerHTML = new_stats[1].rPlay4;
    } 
    else if (play_id == "play5_r") {
        new_stats[1].rPlay5 += 1;
        p5_r.innerHTML = new_stats[1].rPlay5;
    }
}

/*----- Interactions -----*/

s_ward.addEventListener("click", function(){
    new_stats[0].s_ward_clicks += 1;
    
    num_ward1.innerHTML = new_stats[0].s_ward_clicks;
    local_save(new_stats);
})

c_ward.addEventListener("click", function(){
    new_stats[0].c_ward_clicks += 1;
    
    num_ward2.innerHTML = new_stats[0].c_ward_clicks;
    local_save(new_stats);
})

play_select.addEventListener("click", function(ev){
    addPlayDataToStats(ev.target.id);
    
    local_save(new_stats);
})

v_new.addEventListener("click", function(){
    new_stats[2].new_v += 1
    
    n_user_num.innerHTML = new_stats[2].new_v;
    local_save(new_stats);
})

v_exp.addEventListener("click", function(){
    new_stats[2].exp_v += 1
    
    e_user_num.innerHTML = new_stats[2].exp_v;
    local_save(new_stats);
})

showStats.addEventListener("click", function(){
    local_load();
    document.getElementById("stats_page").style.display = "block";
})