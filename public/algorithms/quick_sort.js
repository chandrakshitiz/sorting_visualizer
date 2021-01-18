import {draw} from '../js/draw.js';
import {sleep_for,delay,activate_btns} from '../js/utilities.js';

function swap(arr,i,j)
{
    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

async function partition(arr_obj,l,u)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    var pivot=l;
    colors[pivot]="#df1372";
    var i=l+1,j=u;
    while(i<=j)
    {
        while(i<=u&&arr[i]<=arr[pivot])
        {
            colors[i]="orange";
            draw(arr_obj);
            await sleep_for(delay);
            colors[i]="#138eb4";
            i++;
        }
        if(i<=u)
        {
            colors[i]="orange";
        }
        await sleep_for(delay);
        while(j>=l&&arr[j]>arr[pivot])
        {
            colors[j]="yellow";
            draw(arr_obj);
            await sleep_for(delay);
            colors[j]="#138eb4";
            j--;
        }
        if(j>=l)
        {
            colors[j]="yellow";
        }
        draw(arr_obj);
        await sleep_for(delay);
        if(i<j)
        {
            swap(arr,i,j);
            colors[i]="#545B62";
            colors[j]="#545B62";
        }
        draw(arr_obj);
        await sleep_for(delay);
        if(i<=u)
        {
            colors[i]="#138eb4";
        }
        if(j>=l)
        {
            colors[j]="#138eb4";
        }
        draw(arr_obj);
        await sleep_for(delay);
    }
    colors[j]="red";
    draw(arr_obj);
    await sleep_for(delay);
    swap(arr,pivot,j);
    colors[pivot]="#138eb4";
    colors[j]="#7c10bb";
    draw(arr_obj);
    await sleep_for(delay);
    return j;
}

async function quick_sort_on(arr_obj,l,u)
{
    if(l<=u)
    {
        var j;
        await partition(arr_obj,l,u).then((value)=>{j=value;});
        await quick_sort_on(arr_obj,l,j-1);
        await quick_sort_on(arr_obj,j+1,u);
    }
}

async function quick_sort(arr_obj,l,u)
{
    var l=0,u=arr_obj.arr.length-1;
    await quick_sort_on(arr_obj,l,u);
    draw(arr_obj);
    activate_btns();
}

export default quick_sort;