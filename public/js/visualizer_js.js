import {draw,updateCanvasAttributes} from './draw.js';
import bubble_sort from '../algorithms/bubble_sort.js';
import selection_sort from '../algorithms/selection_sort.js';
import quick_sort from '../algorithms/quick_sort.js';
import insertion_sort from '../algorithms/insertion_sort.js';
import merge_sort from '../algorithms/merge_sort.js';
import {arrayGenerator,regenerate_array,hide_all_des,activate_btns,play_btn_clkd,reset_colors_arr,incr,decr} from './utilities.js'

$(document).ready(function(){
    var arr_obj=arrayGenerator(100,2000,25);
    draw(arr_obj);
    $("#sl").change(function(){
        arr_obj=regenerate_array();
        draw(arr_obj);
    })
    $("#btn").click(function(){
        quick_sort(arr_obj,0,arr_obj.arr.length-1);
    })
    $("#can_btn").click(function(){
        $(this).toggleClass("fa-toggle-on fa-toggle-off");
        $("#myCanvas").toggleClass("canvas_light");
        
    })
    $("#selection_btn").click(function(){
        $("#algo_menu").html("<b>Selection Sort</b>");
        hide_all_des();
        activate_btns();
        $("#selection_des").show();
    });
    $("#bubble_btn").click(function(){
        $("#algo_menu").html("<b>Bubble Sort</b>");
        hide_all_des();
        activate_btns();
        $("#bubble_des").show();
    });
    $("#quick_btn").click(function(){
        $("#algo_menu").html("<b>Quick Sort</b>");
        hide_all_des();
        activate_btns();
        $("#quick_des").show();
    });
    $("#insertion_btn").click(function(){
        $("#algo_menu").html("<b>Insertion Sort</b>");
        hide_all_des();
        activate_btns();
        $("#insertion_des").show();
    });
    $("#merge_btn").click(function(){
        $("#algo_menu").html("<b>Merge Sort</b>");
        hide_all_des();
        activate_btns();
        $("#merge_des").show();
    });
    $("#play_btn").click(function(){
        
        const algo=$("#algo_menu").text();
        reset_colors_arr(arr_obj);
        if(algo=="Selection Sort")
        {
            play_btn_clkd();
            selection_sort(arr_obj);  
        }
        else if(algo=="Insertion Sort")
        {
            play_btn_clkd();
            insertion_sort(arr_obj);
        }
        else if(algo=="Quick Sort")
        {
            play_btn_clkd();
            quick_sort(arr_obj,0,arr_obj.arr.length-1);
        }
        else if(algo=="Bubble Sort")
        {
            play_btn_clkd();
            bubble_sort(arr_obj);
        }
        else
        {
            play_btn_clkd();
            merge_sort(arr_obj);
        }
    })
    $("#regenerate_btn").click(function(){
        arr_obj=regenerate_array();
        draw(arr_obj);
    })
    $("#random_btn").click(function(){
        $("#order_menu").html("<b>Random</b>");
        arr_obj=arrayGenerator(100,2000,parseInt($("#sl").val()));
        draw(arr_obj);
    })
    $("#ascend_btn").click(function(){
        $("#order_menu").html("<b>Ascending</b>");
        arr_obj.arr.sort(incr);
        draw(arr_obj);
    })
    $("#descend_btn").click(function(){
        $("#order_menu").html("<b>Descending</b>");
        arr_obj.arr.sort(decr);
        draw(arr_obj);
    })
    $("#order_menu").click(function(){
        const order=$(this).text();
        
    })
    $(window).resize(function(){
        updateCanvasAttributes(arr_obj);
        draw(arr_obj);
    })
})