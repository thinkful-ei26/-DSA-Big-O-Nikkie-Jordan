function countSheepLoop(num){
    for(let i=num; i>0; i--){
        console.log(`counting sheeps ${i}`);
    }
}
countSheepLoop(10);

//best case: O(1), if the first time it's run the number is 0
//worst case: O(n), bc the number of times it's run is directly proportionate to the number input