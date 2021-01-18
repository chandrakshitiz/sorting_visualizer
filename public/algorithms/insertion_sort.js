import {draw} from '../js/draw.js';
import {sleep_for,delay,activate_btns} from '../js/utilities.js';

var transparent_colour='black';
$("#canvas_btn").click(function(){
    if(transparent_colour==='black')
    {
        transparent_colour='#ececec';
    }
    else
    {
        transparent_colour='black';
    }
});

async function insertion_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    for(var i=1;i<arr.length;i++)
    {
        var key=arr[i];
        colors[i]="#df1372";
        draw(arr_obj);
        await sleep_for(delay);
        var j=i-1;
        while(j>=0&&arr[j]>key)
        {
            arr[j+1]=arr[j];
            colors[j+1]="#7c10bb";
            colors[j]=transparent_colour;
            draw(arr_obj);
            await sleep_for(delay);
            colors[j+1]="#138eb4";
            j--;
        }
        arr[j+1]=key;
        colors[j+1]="red";
        draw(arr_obj);
        await sleep_for(delay);
        colors[j+1]="#138eb4";
        draw(arr_obj);
        await sleep_for(delay);
    }
    for(var i=0;i<arr.length;i++)
    {
        colors[i]="#7c10bb";
        draw(arr_obj);
        await sleep_for(20);
    }
    draw(arr_obj);
    activate_btns();
}

export default insertion_sort;