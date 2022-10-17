function reverse(str){
    if(str.length <=1 ) return str
    return reverse(str.slice(1))+str[0]
    }
    function reverseSet(sentence){
        let words = sentence.split(' ')
        for(let i =0; i<words.length; i++){
            words[i]=reverse(words[i])
        }
        return words.join(' ')
    }

    console.log(reverseSet("I am Swapnali"))