import fun from './any.js';
import {draw} from './draw.js';

$("#myCanvas").attr("width",$("#myCanvas")[0].clientWidth)
console.log("HT=",$("#myCanvas")[0].clientHeight);
var m=10;
var c=$("#myCanvas")[0];
console.log(c);
$("#btn").click(function(){
    console.log("clicked ",m);
    draw(m);
    m=m+10;
})
$("#btn1").click(function(){
    fun();
});
$(window).resize(function(){
    $("#myCanvas").attr("width",$("#myCanvas")[0].clientWidth)
    console.log("hua ",$("#myCanvas")[0].clientWidth);
    draw(m);
});