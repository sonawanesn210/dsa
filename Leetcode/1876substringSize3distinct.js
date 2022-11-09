// work for any window size
/* var countGoodSubstrings = function(s) {
    
    let sta,end,count;
    sta=end=count=0
    const map = new Map()
    
    while(end <= s.length-1){
        
      if(map.has(s[end])) map.set(s[end],map.get(s[end])+1)
        else{ map.set(s[end],1)}
           
        if(end < 2){// until window of 3 is achieved 
            end++
        }
       
        else if(end >=2){

            if(map.size ===3)count++
                
            if(map.get(s[sta]) >1) map.set(s[sta],map.get(s[sta])-1) 
            else{  map.delete(s[sta])}
         
            sta++
            end++
        } 
    }
    return count
};

 */

///
function subStr(s){
    let count =0
    let windowSize =0
    let str =""
    for(let i =0;i<s.length+1;i++){
        if(windowSize===3)  {
            if(str[0]!=str[1]&& str[0]!=str[2] && str[1]!=str[2]) {
                count++
            }
            str =str.slice(1)
            windowSize--

        }
        str =str+s[i]
        windowSize++
       
    }
    return count

}

console.log(subStr("xyzzaz"))




