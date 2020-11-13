function rndInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}

function arrayGenerator(min,max,size)
{
    var arr=[];
    var colors=[];
    var mx=0;
    for(var i=0;i<size;i++)
    {
        arr.push(rndInt(min,max));
        if(arr[i]>mx)
            mx=arr[i];
        colors.push("#138eb4");//#b41313//#FFFFFFDE");#6C757D#545B62
    }
    
    // updateCanvasAttributes(scale);
    return {arr:arr,colors:colors,ht:mx+50,sf:1};
}

function regenerate_array()
{
    var arr_obj=arrayGenerator(50,1500,parseInt($("#sl").val()));
    
    if($("#order_menu").text()=="Ascending")
    {
        arr_obj.arr.sort(incr);
    }
    else if($("#order_menu").text()=="Descending")
    {
       arr_obj.arr.sort(decr);   
    }
    return arr_obj;
}

const sleepNow =(delay) =>new Promise((resolve)=>setTimeout(resolve,delay));
var speed=parseInt($("#sl1").val());
$("#sl1").change(function(){
    speed=parseInt($("#sl1").val());
    
    if(speed==0)
    {
        $("#fforward_btn").removeClass("other_btn_active");
        $("#fforward_btn").css("color", "#e95184");
    }
    else
    {
        
        if($("#fforward_btn").is(":disabled")==false)
            $("#fforward_btn").addClass("other_btn_active");
    }
})
$("#fforward_btn").click(function(){
    if(speed!=0)
    {
        
        speed=0;
        $(this).removeClass("other_btn_active");
        $(this).css("color", "#e95184");
    }
    else
    {
        speed=parseInt($("#sl1").val());
        $(this).addClass("other_btn_active");
    }
});
function reset_colors_arr(arr_obj)
{
    for(var i=0;i<arr_obj.colors.length;i++)
        arr_obj.colors[i]="#138eb4";
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
function activate_btns()
{
    $("#play_btn").attr("disabled",false);
    $("#play_btn").addClass("play_btn_active");

    $("#fforward_btn").attr("disabled",false);
    $("#fforward_btn").addClass("other_btn_active");
    speed=parseInt($("#sl1").val());

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
function play_btn_clkd()
{
    $("#play_btn").attr("disabled",true);
    $("#play_btn").removeClass("play_btn_active");
    $("#play_btn").css("color","#838383");

    $("#regenerate_btn").attr("disabled",true);
    $("#regenerate_btn").removeClass("other_btn_active");
    $("#regenerate_btn").css("color","#838383");
    
    
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
export {arrayGenerator,regenerate_array,sleepNow,speed,hide_all_des,activate_btns,play_btn_clkd,reset_colors_arr,incr,decr};