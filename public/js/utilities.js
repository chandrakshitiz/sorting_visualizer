const sleepNow =(delay) =>new Promise((resolve)=>setTimeout(resolve,delay));
var speed=parseInt($("#sl1").val());
$("#sl1").change(function(){
    speed=parseInt($("#sl1").val());
    console.log("vl=",$("#sl1").val());
})
export {sleepNow,speed};