function updateCanvasAttributes(arr_obj)
{
    $("#myCanvas").attr("width",$("#myCanvas")[0].clientWidth);
    $("#myCanvas").attr("height",$("#myCanvas")[0].clientHeight);
    var newht=$("#myCanvas")[0].clientHeight;
    var prevht=arr_obj.ht;
    var sf=newht/prevht;
    arr_obj.ht=newht;
    arr_obj.sf=sf;
    console.log(sf);
    arr_obj.arr=normalizeHeight(arr_obj.arr,sf)
     //normalizeHeight(arr_obj.arr,$("#myCanvas")[0].clientHeight-10)
    //console.log("WD= ",$("#myCanvas")[0].clientWidth);
    //console.log("HT= ",$("#myCanvas")[0].clientHeight);
}
function normalizeHeight(arr,sf)
{
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i]*sf;
    }
    console.log(arr);
    return arr;
}
function draw(arr_obj,scale)
{   
    updateCanvasAttributes(arr_obj);
    var arr=arr_obj.arr;
    // for(var i=0;i<arr_obj.arr.length;i++)
    //     arr.push();
    var colors=arr_obj.colors;
    var c=$("#myCanvas")[0];
    var ctx=c.getContext("2d");
    var twd=c.clientWidth-10;
    ctx.clearRect(0,0,twd,c.clientHeight);
    var sp=3;
    var ext=5;
    var iwd=(twd-(arr.length+1)*sp)/arr.length;
    // console.log(twd,iwd);
    var invy=c.clientHeight;
    
    for(var i=0;i<arr.length;i++)
    {
        var x,y;
        y=2;
        x=(i+1)*sp+i*iwd+ext;
        //ctx.beginPath();
        if(colors[i]=='black'||colors[i]=='#ececec')
        {
            ctx.fillStyle=colors[i];
        }
        else
        {
            var my_gradient =ctx.createLinearGradient(0, 0, 0,2*c.clientHeight);
            my_gradient.addColorStop(0, colors[i]);
            my_gradient.addColorStop(1, "red");
            ctx.fillStyle=my_gradient;
        }
        // //ctx.lineWidth=1;
        ctx.fillRect(x,invy-arr[i],iwd,arr[i]-1);
        // ctx.fill();
        // ctx.strokeStyle="#47424b";//"#a8a8a8";
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.moveTo(x, invy-arr[i]);
        // ctx.lineTo(x,invy+arr[i]-1);
        // ctx.stroke();
    }
}
export {draw,updateCanvasAttributes};