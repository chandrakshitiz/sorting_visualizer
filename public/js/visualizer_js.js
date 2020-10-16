import {draw,updateCanvasAttributes} from './draw.js';
import bubble_sort from '../algorithms/bubble_sort.js'

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
        colors.push("black");
    }
    console.log(arr);
    return {arr:arr,colors:colors};
}

$(document).ready(function(){

    var arr_obj=arrayGenerator(10,1000,100);
    draw(arr_obj);
    $("#sl").change(function(){
        arr_obj=arrayGenerator(10,1000,parseInt($("#sl").val()));
        draw(arr_obj);
    })
    $("#btn").click(function(){
        bubble_sort(arr_obj);
    })
    $(window).resize(function(){
        updateCanvasAttributes();
        draw(arr_obj);
    })
})