import {draw,updateCanvasAttributes} from '../js/draw.js'
const sleepNow =(delay) =>new Promise((resolve)=>setTimeout(resolve,delay));
async function selection_sort(arr_obj)
{
    var arr=arr_obj.arr;
    var colors=arr_obj.colors;
    draw({arr:arr,colors:colors});
    await sleepNow(10);
    for(var i=0;i<arr.length-1;i++)
    {
        var min_idx=i;
        colors[min_idx]="yellow";
        for(var j=i+1;j<arr.length;j++)
        {
            
            colors[j]="yellow";
            draw({arr:arr,colors:colors});
            await sleepNow(10);
            if(arr[j]<arr[min_idx])
            {
                colors[min_idx]="#FFFFFFDE";
                min_idx=j;
                colors[min_idx]="yellow";
            }
            else
            {
                colors[j]="#FFFFFFDE";
            }
            draw({arr:arr,colors:colors});
            await sleepNow(10);
        }
        var temp=arr[i];
        arr[i]=arr[min_idx];
        arr[min_idx]=temp;
        colors[min_idx]="#FFFFFFDE";
        colors[i]="#56cebe";//"#56ce5c";
        draw({arr:arr,colors:colors});
        await sleepNow(10);
    }
    colors[arr.length-1]="#56cebe";
    draw({arr:arr,colors:colors});
}
export default selection_sort;