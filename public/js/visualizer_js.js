import {draw,update_canvas_attr} from './draw.js';
import bubble_sort from '../algorithms/bubble_sort.js';
import selection_sort from '../algorithms/selection_sort.js';
import quick_sort from '../algorithms/quick_sort.js';
import insertion_sort from '../algorithms/insertion_sort.js';
import merge_sort from '../algorithms/merge_sort.js';
import {array_generator,regenerate_array,hide_all_des,activate_btns,disable_btns,reset_colors_arr,incr,decr} from './utilities.js'

$(document).ready(function(){
    var arr_obj=array_generator(100,2000,25);
    draw(arr_obj);

    $("#array_size_slider").change(function(){
        arr_obj=regenerate_array();
        draw(arr_obj);
    });

    $("#canvas_btn").click(function(){
        $(this).toggleClass("fa-toggle-on fa-toggle-off");
        $("#my_canvas").toggleClass("canvas_light");  
    });

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
        if(algo==="Selection Sort")
        {
            disable_btns();
            selection_sort(arr_obj);  
        }
        else if(algo==="Insertion Sort")
        {
            disable_btns();
            insertion_sort(arr_obj);
        }
        else if(algo==="Quick Sort")
        {
            disable_btns();
            quick_sort(arr_obj);
        }
        else if(algo==="Bubble Sort")
        {
            disable_btns();
            bubble_sort(arr_obj);
        }
        else
        {
            disable_btns();
            merge_sort(arr_obj);
        }
    });

    $("#regenerate_btn").click(function(){
        arr_obj=regenerate_array();
        draw(arr_obj);
    });

    $("#random_btn").click(function(){
        $("#order_menu").html("<b>Random</b>");
        arr_obj=array_generator(100,2000,parseInt($("#array_size_slider").val()));
        draw(arr_obj);
    });

    $("#ascend_btn").click(function(){
        $("#order_menu").html("<b>Ascending</b>");
        arr_obj.arr.sort(incr);
        draw(arr_obj);
    });

    $("#descend_btn").click(function(){
        $("#order_menu").html("<b>Descending</b>");
        arr_obj.arr.sort(decr);
        draw(arr_obj);
    });

    $("#order_menu").click(function(){
        const order=$(this).text();
    });

    $(window).resize(function(){
        update_canvas_attr(arr_obj);
        draw(arr_obj);
    });
})