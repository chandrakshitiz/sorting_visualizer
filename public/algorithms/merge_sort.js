import {draw} from '../js/draw.js';
import {sleepNow,speed,activate_btns} from '../js/utilities.js';
async function merge(arr_obj,l,m,u)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    var arr1=[];
    var arr2=[];
    var cl=colors[l];
    var cu=colors[u];
    // colors[l]="red";
    // colors[u]="red";
    // draw(arr_obj,scale);
    // await sleepNow(speed);
    // colors[l]=cl;
    // colors[u]=cu;
    // draw(arr_obj);
    // await sleepNow(speed);
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
    console.log("arr1- ",arr1.length);
    console.log("arr2 - ",arr2.length);
    console.log(l,m,u);
    console.log("arr1- ",arr1);
    console.log("arr-2",arr2);
    var i=0,j=0,k=l;
    while(i<size1 && j<size2)
    {
        if(arr1[i]<arr2[j])
        {
            arr[k]=arr1[i];
            colors[k]="#7d0888";
            i++;
            k++;
            console.log("a- ",arr);
            draw(arr_obj);
            await sleepNow(speed);
            console.log("a- ",arr);
        }
        else
        {
            arr[k]=arr2[j];
            colors[k]="#7d0888";
            j++;
            k++;
            console.log("b- ",arr);
            draw(arr_obj);
            await sleepNow(speed);
            console.log("b- ",arr);
        }
    }
    while(i<size1)
    {
        arr[k]=arr1[i];
        colors[k]="#7d0888";
        i++;
        k++;
        draw(arr_obj);
        await sleepNow(speed);
    }
    while(j<size2)
    {
        arr[k]=arr2[j];
        colors[k]="#7d0888";
        j++;
        k++;
        draw(arr_obj);
        await sleepNow(speed);
    }
    console.log(arr);
    draw(arr_obj);
    await sleepNow(speed);
}
async function merge_sort_on(arr_obj,l,u)
{
    if(l<u)
    {
        var m=(l+u)/2;
        m=parseInt(m);
        console.log(l,m,u);
        await merge_sort_on(arr_obj,l,m);
        await merge_sort_on(arr_obj,m+1,u);
        await merge(arr_obj,l,m,u);
        draw(arr_obj);
        await sleepNow(speed);
    }
    else
        arr_obj.colors[l]="#7d0888";
}
async function merge_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var u=arr.length-1;
    console.log(arr);
    console.log("aya");
    await merge_sort_on(arr_obj,0,u);
    draw(arr_obj);
    await sleepNow(speed);
    console.log(arr);
    activate_btns();
}

export default merge_sort;