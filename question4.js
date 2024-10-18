//question4
function rearrangeArray(arr){
    const n=arr.length;
    const result=new Array(n);
    
    let left=0;
    let right=n-1;
    
    for (let i=0;i<n;i++){
        if(i%2===0){
            result[i]=arr[right];
            right--;
        }else{
            result[i]=arr[left];
            left++;
        }
    }
    return result;
}

//example usage:-

const n=6;
const arr = [1,2,3,4,5,6];
const rearrangesArray=rearrangeArray(arr);
console.log(rearrangeArray.join(''));
