import {draw,updateCanvasAttributes} from '../js/draw.js';
import {sleepNow,speed} from '../js/utilities.js';

async function selection_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    draw({arr:arr,colors:colors});
    await sleepNow(speed);
    for(var i=0;i<arr.length-1;i++)
    {
        var min_idx=i;
        colors[min_idx]="#df1372";
        for(var j=i+1;j<arr.length;j++)
        {
            
            colors[j]="yellow";
            draw({arr:arr,colors:colors});
            await sleepNow(speed);
            if(arr[j]<arr[min_idx])
            {
                colors[min_idx]="#b3b3b3";
                min_idx=j;
                colors[min_idx]="#df1372";
            }
            else
            {
                colors[j]="#b3b3b3";
            }
            draw({arr:arr,colors:colors});
            await sleepNow(speed);
        }
        var temp=arr[i];
        arr[i]=arr[min_idx];
        arr[min_idx]=temp;
        colors[min_idx]="#b3b3b3";
        colors[i]="#7c10bb";
        draw({arr:arr,colors:colors});
        await sleepNow(speed);
    }
    colors[arr.length-1]="#7c10bb";
    draw({arr:arr,colors:colors});
}
export default selection_sort;