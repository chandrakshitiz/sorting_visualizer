import {draw} from '../js/draw.js';
import {sleep_for,delay,activate_btns} from '../js/utilities.js';

async function selection_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    draw(arr_obj);
    await sleep_for(delay);
    for(var i=0;i<arr.length-1;i++)
    {
        var min_idx=i;
        colors[min_idx]="#df1372";
        for(var j=i+1;j<arr.length;j++)
        {
            colors[j]="#fffb00";
            draw(arr_obj);
            await sleep_for(delay);
            if(arr[j]<arr[min_idx])
            {
                colors[min_idx]="#138eb4";
                min_idx=j;
                colors[min_idx]="#df1372";
            }
            else
            {
                colors[j]="#138eb4";
            }
            draw(arr_obj);
            await sleep_for(delay);
        }
        var temp=arr[i];
        arr[i]=arr[min_idx];
        arr[min_idx]=temp;
        colors[min_idx]="#138eb4";
        colors[i]="#7c10bb";
        draw(arr_obj)
        await sleep_for(delay);
    }
    colors[arr.length-1]="#7c10bb";
    draw(arr_obj)
    activate_btns();
}

export default selection_sort;