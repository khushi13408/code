
//question2 
function findBuySell(prices){
    const segments =[];
    const n= prices.length;
    
    for(let i=0; i<n-1;i++){
        if(prices[i]<prices[i+1]){
            const buy=i;
            while(i<n-1 && prices[i]< prices[i+1]){
                i++;
            }
            const sell =i;
            segments.push([buy,sell]);
        }
    }
    return segments;
}

//example usgae:-
const prices=[100,180,260,310,40,535,695];
const segments=findBuySell(prices);

console.log("possible buy/sell segments:");
segments.forEach(segment=>{
    console.log('Buy on day ${segment[0]}, Sell on day ${segment[1]}');
});
