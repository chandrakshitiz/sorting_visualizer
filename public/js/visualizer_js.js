import {draw,updateCanvasAttributes} from './draw.js';
import bubble_sort from '../algorithms/bubble_sort.js';
import selection_sort from '../algorithms/selection_sort.js';
import quick_sort from '../algorithms/quick_sort.js';
import insertion_sort from '../algorithms/insertion_sort.js';
function rndInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}

function arrayGenerator(min,max,size)
{
    var arr=[];
    var colors=[];
    for(var i=0;i<size;i++)
    {
        arr.push(rndInt(min,max));
        colors.push("#545B62");//#FFFFFFDE");#6C757D#545B62
    }
    console.log(arr);
    return {arr:arr,colors:colors};
}

$(document).ready(function(){
    var arr_obj=arrayGenerator(100,2000,25);
    draw(arr_obj);
    $("#sl").change(function(){
        arr_obj=arrayGenerator(100,2000,parseInt($("#sl").val()));
        console.log("vl=",$("#sl").val());
        draw(arr_obj);
    })
    $("#btn").click(function(){
        quick_sort(arr_obj,0,arr_obj.arr.length-1);
    })
    $("#selection_btn").click(function(){
        $("#navbarDropdown").text("Selection Sort");
        selection_sort(arr_obj);
    });
    $("#bubble_btn").click(function(){
        $("#navbarDropdown").text("Bubble Sort");
        bubble_sort(arr_obj);
    });
    $("#quick_btn").click(function(){
        $("#navbarDropdown").text("Quick Sort");
        quick_sort(arr_obj,0,arr_obj.arr.length-1);
    });
    $("#insertion_btn").click(function(){
        $("#navbarDropdown").text("Insertion Sort");
        insertion_sort(arr_obj);
    });
    $("#btn1").click(function(){
        insertion_sort(arr_obj);
    })
    $("#play_btn").click(function(){
        $("#play_btn").css("display", "none");
        $("#pause_btn").css("display", "block");
    })
    $("#pause_btn").click(function(){
        $("#pause_btn").css("display", "none");
        $("#play_btn").css("display", "block");
    })
    $(window).resize(function(){
        updateCanvasAttributes();
        draw(arr_obj);
    })
})