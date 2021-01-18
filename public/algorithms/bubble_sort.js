import {draw} from '../js/draw.js';
import {sleep_for,delay,activate_btns} from '../js/utilities.js';

async function bubble_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    for(var i=0;i<arr.length-1;i++)
    {
        draw(arr_obj);
        await sleep_for(delay);
        for(var j=0;j<arr.length-1-i;j++)
        {
            colors[j]="#fffb00";
            colors[j+1]="#fffb00";
            draw(arr_obj);
            await sleep_for(delay);
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                colors[j]="red";
                colors[j+1]="red";
            }
            else
            {
                colors[j]="#138eb4";
                colors[j+1]="#138eb4";
            }
            draw(arr_obj);
            await sleep_for(delay);
            colors[j]="#138eb4";
            colors[j+1]="#138eb4";
        }
        colors[arr.length-1-i]="blue";
    }
    colors[0]="blue";
    draw(arr_obj);
    activate_btns();
}

export default bubble_sort;