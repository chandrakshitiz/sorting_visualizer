import {draw,updateCanvasAttributes} from '../js/draw.js';
import {sleepNow,speed,activate_btns} from '../js/utilities.js';

async function bubble_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    for(var i=0;i<arr.length-1;i++)
    {
        draw({arr:arr,colors:colors});
        await sleepNow(speed);
        for(var j=0;j<arr.length-1-i;j++)
        {
            colors[j]="green";colors[j+1]="green";
            draw({arr:arr,colors:colors});
            await sleepNow(speed);
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                colors[j]="red";colors[j+1]="red";
            }
            else
            {
                colors[j]="#545B62";
                colors[j+1]="#545B62";
            }
            draw({arr:arr,colors:colors});
            await sleepNow(speed);
            colors[j]="#545B62";
            colors[j+1]="#545B62";
        }
        colors[arr.length-1-i]="blue";
    }
    colors[0]="blue";
    draw(arr_obj);
    activate_btns();
}
export default bubble_sort;