import {draw,updateCanvasAttributes} from '../js/draw.js';
import {sleepNow,speed} from '../js/utilities.js';
async function insertion_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    for(var i=1;i<arr.length;i++)
    {
        var key=arr[i];
        colors[i]="#df1372";
        draw(arr_obj);
        await sleepNow(speed);
        var j=i-1;
        while(j>=0&&arr[j]>key)
        {
            arr[j+1]=arr[j];
            colors[j+1]="pink";
            colors[j]="#fbfbfb";
            draw(arr_obj);
            await sleepNow(speed);
            colors[j+1]="#b3b3b3";
            j--;
        }
        arr[j+1]=key;
        colors[j+1]="red";
        draw(arr_obj);
        await sleepNow(speed);
        colors[j+1]="#b3b3b3";
        draw(arr_obj);
        await sleepNow(speed);
    }
    for(var i=0;i<arr.length;i++)
    {
        colors[i]="#7c10bb";
        draw(arr_obj);
        await sleepNow(20);
    }
    draw(arr_obj);
    console.log(arr);
}
export default insertion_sort;