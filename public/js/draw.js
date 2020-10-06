function updateCanvasAttributes()
{
    $("#myCanvas").attr("width",$("#myCanvas")[0].clientWidth);
    $("#myCanvas").attr("height",$("#myCanvas")[0].clientHeight);
    console.log("WD= ",$("#myCanvas")[0].clientWidth);
    console.log("HT= ",$("#myCanvas")[0].clientHeight);
}
function normalizeHeight(arr,ht)
{
    var mx=arr[0];
    for(var i=0;i<arr.length;i++)
        if(arr[i]>mx)
            mx=arr[i];
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=(arr[i]/mx)*ht;
    }
    return arr;
}
function draw(arr_obj)
{   
    updateCanvasAttributes();
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    var c=$("#myCanvas")[0];
    var ctx=c.getContext("2d");
    var twd=c.clientWidth;
    ctx.clearRect(0,0,twd,c.clientHeight);
    var sp=2;
    var iwd=(twd-(arr.length+1)*sp)/arr.length;
    console.log(twd,iwd);
    arr=normalizeHeight(arr,c.clientHeight-10);
    for(var i=0;i<arr.length;i++)
    {
        var x,y;
        y=0;
        x=(i+1)*sp+i*iwd;
        ctx.fillStyle=colors[i];
        ctx.fillRect(x,y,iwd,arr[i]);
    }
}
export default draw;