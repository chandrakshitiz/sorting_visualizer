const sleepNow =(delay) =>new Promise((resolve)=>setTimeout(resolve,delay));
var speed=parseInt($("#sl1").val());
$("#sl1").change(function(){
    speed=parseInt($("#sl1").val());
    console.log("vl=",$("#sl1").val());
    if(speed==0)
    {
        $("#fforward_btn").removeClass("other_btn_active");
        $("#fforward_btn").css("color", "#e95184");
    }
    else
    {
        console.log($("#fforward_btn").is(":disabled"));
        if($("#fforward_btn").is(":disabled")==false)
            $("#fforward_btn").addClass("other_btn_active");
    }
})
$("#fforward_btn").click(function(){
    if(speed!=0)
    {
        console.log("hmm speed");
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
    
    console.log("hua");
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
export {sleepNow,speed,hide_all_des,activate_btns,play_btn_clkd,reset_colors_arr,incr,decr};