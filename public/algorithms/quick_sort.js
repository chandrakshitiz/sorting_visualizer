import {draw,updateCanvasAttributes} from '../js/draw.js';
import {sleepNow,speed} from '../js/utilities.js';

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
        console.log(i,j);
        while(i<=u&&arr[i]<=arr[pivot])
        {
            colors[i]="orange";
            draw(arr_obj);
            await sleepNow(speed);
            colors[i]="#b3b3b3";
            i++;
        }
        if(i<=u)
            colors[i]="orange";
        await sleepNow(speed);
        while(j>=l&&arr[j]>arr[pivot])
        {
            colors[j]="yellow";
            draw(arr_obj);
            await sleepNow(speed);
            
            colors[j]="#b3b3b3";
            j--;
        }
        if(j>=l)
            colors[j]="yellow";
        draw(arr_obj);
        await sleepNow(speed);
        if(i<j)
        {
            swap(arr,i,j);
            colors[i]="pink";
            colors[j]="pink";
        }
        draw(arr_obj);
        await sleepNow(speed);
        if(i<=u)
            colors[i]="#b3b3b3";
        if(j>=l)
            colors[j]="#b3b3b3";
        draw(arr_obj);
        await sleepNow(speed);
    }
    colors[j]="red";
    draw(arr_obj);
    await sleepNow(speed);
    swap(arr,pivot,j);
    colors[pivot]="#b3b3b3";
    colors[j]="#107594";
    draw(arr_obj);
    await sleepNow(speed);
    return j;
}

async function quick_sort_on(arr_obj,l,u)
{
    if(l<=u)
    {
        console.log(l,u);
        var j;
        await partition(arr_obj,l,u).then((value)=>{j=value;console.log("j=",j,"v=",value);});
        console.log("j= ",j);
        console.log("l= ",l,"u= ",u);
        await quick_sort_on(arr_obj,l,j-1);
        await quick_sort_on(arr_obj,j+1,u);
    }
}

async function quick_sort(arr_obj,l,u)
{
    console.log(arr_obj.arr);
    await quick_sort_on(arr_obj,l,u);
    console.log(arr_obj.arr);
    draw(arr_obj);
}
export default quick_sort;