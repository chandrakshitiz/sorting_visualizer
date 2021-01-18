function rndInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}

function array_generator(min,max,size)
{
    var arr=[];
    var colors=[];
    var mx=0;
    for(var i=0;i<size;i++)
    {
        arr.push(rndInt(min,max));
        if(arr[i]>mx)
        {
            mx=arr[i];
        }
        colors.push("#138eb4");
    }
    return {arr:arr,colors:colors,ht:mx+50,sf:1};
}

function array_size()
{
    var arr_size=parseInt($("#array_size_slider").val());
    var width=$("#my_canvas")[0].clientWidth;
    if(width<=768&&arr_size>50)
    {
        arr_size=50;
    }
    else if(width<=1024&&arr_size>80)
    {
        arr_size=80;
    }
    console.log(arr_size);
    return arr_size;
}

function regenerate_array()
{
    console.log($("#my_canvas"));
    var arr_obj=array_generator(50,1500,array_size());
    if($("#order_menu").text()==="Ascending")
    {
        arr_obj.arr.sort(incr);
    }
    else if($("#order_menu").text()==="Descending")
    {
       arr_obj.arr.sort(decr);   
    }
    return arr_obj;
}

const sleep_for =(delay) =>new Promise((resolve)=>setTimeout(resolve,delay));
var delay=parseInt($("#delay_slider").val());

$("#delay_slider").change(function(){
    delay=parseInt($("#delay_slider").val());
    if(delay===0)
    {
        $("#fforward_btn").removeClass("other_btn_active");
        $("#fforward_btn").css("color", "#e95184");
    }
    else if($("#fforward_btn").is(":disabled")===false)
    {
        $("#fforward_btn").addClass("other_btn_active");
    }
});

$("#fforward_btn").click(function(){
    if(delay!=0)
    {
        delay=0;
        $(this).removeClass("other_btn_active");
        $(this).css("color", "#e95184");
    }
    else
    {
        delay=parseInt($("#delay_slider").val());
        $(this).addClass("other_btn_active");
    }
});

function reset_colors_arr(arr_obj)
{
    for(var i=0;i<arr_obj.colors.length;i++)
    {
        arr_obj.colors[i]="#138eb4";
    }
}

function hide_all_des()
{
    $("#bubble_des").hide();
    $("#selection_des").hide();
    $("#quick_des").hide();
    $("#insertion_des").hide();
    $("#merge_des").hide();
}

function enable_dropdowns()
{
    $("#algo_menu").attr("disabled",false);
    $("#array_size").attr("disabled",false);
    $("#order_menu").attr("disabled",false);
}

function activate_btns() //to enable buttons
{
    delay=parseInt($("#delay_slider").val());
    
    $("#play_btn").attr("disabled",false);
    $("#play_btn").addClass("play_btn_active");

    $("#fforward_btn").attr("disabled",false);
    $("#fforward_btn").addClass("other_btn_active");

    $("#regenerate_btn").attr("disabled",false);
    $("#regenerate_btn").addClass("other_btn_active");

    enable_dropdowns();
}

function disable_dropdowns()
{
    $("#algo_menu").attr("disabled",true);
    $("#array_size").attr("disabled",true);
    $("#order_menu").attr("disabled",true);
}

function disable_btns() //to disable buttons when algorithm is visualized.
{
    // disable play button
    $("#play_btn").attr("disabled",true);
    $("#play_btn").removeClass("play_btn_active");
    $("#play_btn").css("color","#838383");
    // disable regenerate button 
    $("#regenerate_btn").attr("disabled",true);
    $("#regenerate_btn").removeClass("other_btn_active");
    $("#regenerate_btn").css("color","#838383");
    // disable dropdown menus
    disable_dropdowns();
}

function incr(a,b)
{
    return a-b;
}

function decr(a,b)
{
    return b-a;
}

export {array_generator,regenerate_array,sleep_for,delay,hide_all_des,activate_btns,disable_btns,reset_colors_arr,incr,decr};