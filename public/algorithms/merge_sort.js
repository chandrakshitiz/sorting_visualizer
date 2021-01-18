import {draw} from '../js/draw.js';
import {sleep_for,delay,activate_btns} from '../js/utilities.js';

async function merge(arr_obj,l,m,u)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    var arr1=[];
    var arr2=[];
    var size1=m-l+1;
    var size2=u-m;
    for(var it=l;it<=m;it++)
    {
        arr1.push(arr[it]);
    }
    for(var it=m+1;it<=u;it++)
    {
        arr2.push(arr[it]);
    }
    var i=0,j=0,k=l;
    while(i<size1 && j<size2)
    {
        if(arr1[i]<arr2[j])
        {
            arr[k]=arr1[i];
            colors[k]="#7d0888";
            i++;
            k++;
            draw(arr_obj);
            await sleep_for(delay); 
        }
        else
        {
            arr[k]=arr2[j];
            colors[k]="#7d0888";
            j++;
            k++;
            draw(arr_obj);
            await sleep_for(delay);  
        }
    }
    while(i<size1)
    {
        arr[k]=arr1[i];
        colors[k]="#7d0888";
        i++;
        k++;
        draw(arr_obj);
        await sleep_for(delay);
    }
    while(j<size2)
    {
        arr[k]=arr2[j];
        colors[k]="#7d0888";
        j++;
        k++;
        draw(arr_obj);
        await sleep_for(delay);
    }
    draw(arr_obj);
    await sleep_for(delay);
}

async function merge_sort_on(arr_obj,l,u)
{
    if(l<u)
    {
        var m=(l+u)/2;
        m=parseInt(m);
        await merge_sort_on(arr_obj,l,m);
        await merge_sort_on(arr_obj,m+1,u);
        await merge(arr_obj,l,m,u);
        draw(arr_obj);
        await sleep_for(delay);
    }
    else
    {
        arr_obj.colors[l]="#7d0888";
    }
}

async function merge_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var u=arr.length-1;
    await merge_sort_on(arr_obj,0,u);
    draw(arr_obj);
    await sleep_for(delay);
    activate_btns();
}

export default merge_sort;