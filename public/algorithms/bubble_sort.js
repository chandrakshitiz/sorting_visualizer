import {draw,updateCanvasAttributes} from '../js/draw.js'
const sleepNow =(delay) =>new Promise((resolve)=>setTimeout(resolve,delay));
async function bubble_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    for(var i=0;i<arr.length-1;i++)
    {
        draw({arr:arr,colors:colors});
        await sleepNow(50);
        for(var j=0;j<arr.length-1-i;j++)
        {
            colors[j]="green";colors[j+1]="green";
            draw({arr:arr,colors:colors});
            await sleepNow(150);
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                colors[j]="red";colors[j+1]="red";
            }
            else
            {
                colors[j]="black";
                colors[j+1]="black";
            }
            draw({arr:arr,colors:colors});
            await sleepNow(175);
            colors[j]="black";
            colors[j+1]="black";
        }
        colors[arr.length-1-i]="blue";
    }
    colors[0]="blue";
    draw(arr_obj);
}
export default bubble_sort;