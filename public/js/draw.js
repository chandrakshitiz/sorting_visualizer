function norm_height(arr,sf)
{
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i]*sf;
    }
}

function update_canvas_attr(arr_obj)
{
    $("#my_canvas").attr("width",$("#my_canvas")[0].clientWidth);
    $("#my_canvas").attr("height",$("#my_canvas")[0].clientHeight);
    var newht=$("#my_canvas")[0].clientHeight;
    var prevht=arr_obj.ht;
    var sf=newht/prevht;
    arr_obj.ht=newht;
    arr_obj.sf=sf;
    norm_height(arr_obj.arr,sf);
}

function draw(arr_obj)
{   
    update_canvas_attr(arr_obj);
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    var c=$("#my_canvas")[0];
    var ctx=c.getContext("2d");
    var twd=c.clientWidth-10; //total drawing width
    ctx.clearRect(0,0,twd,c.clientHeight);
    var sp=3; //space between bars
    var ext=5; //extra space on left and right end
    var iwd=(twd-(arr.length+1)*sp)/arr.length; //individual width of bar
    var y_max=c.clientHeight;
    for(var i=0;i<arr.length;i++)
    {
        var x=(i+1)*sp+i*iwd+ext;
        if(colors[i]==='black'||colors[i]==='#ececec')
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
        ctx.fillRect(x,y_max-arr[i],iwd,arr[i]-1);
    }
}

export {draw,update_canvas_attr};