//question3

function getUniquePermutations(str){
    const results=new Set();
    
    const backtrack=(current,remaining)=>{
        if(remaining.length===0){
            results.add(current);
            return;
        }
        
        for (let i=0;i<remaining.length;i++){
            if(i>0 && remaining[i] === remaining[i-1])continue;
            const next=current+remaining[i];
            backtrack(next,remaining.slice(0,i)+remaining.slice(i+1));
        }
    };
    
    backtrack(",str.split(").sort().join('');
    const sortedResults=
    Array.from(results).sort();
    return sortedResults;
 }
 const input1="ABC";
 const input2="ABSG";
 
 console.log(getUniquepermutations(input1).join(''));
 console.log(getUniquepermutations(input2).join(''));
 
 
 
 
      
