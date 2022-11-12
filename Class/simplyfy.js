/* let str ="malayalam"
function occ(str){
    let map =new Map()
for(let i=0;i<str.length;i++){
    if(map.get(str[i])===undefined) map.set(str[i],1)
    else map.set(str[i],map.get(str[i])+1)
}
console.log(map)
}
occ(str) */
let obj =
[
    {
        "name": "x",
        "college":"y",
        "skills": [
            "c",
            "c++",
            "java"
        ]
    },
     {
        "name": "x",
        "college":"y",
        "skills": [
            "javascript",
            "python",
        ]
    }
]
//output = ["c","c++","java","javascript","python"]

function returnObj(obj){
    let arr =[]
    for(let i=0;i<obj.length;i++){
      if((obj[i]["skills"]))
            arr.push(obj[i]["skills"])
        
    }
    /* return faltternArr(arr)
}

function faltternArr(arr){
    let result =[]
    for(let i =0;i<arr.length;i++){
        if(Array.isArray(arr[i]))
        result = result.concat(faltternArr(arr[i]))
        else result.push(arr[i])
    }
    return result */
    return arr.flat()
}
console.log((returnObj(obj)))


const allSkills = obj.reduce(
    (accumulator, currentValue) => [...accumulator, ...currentValue.skills],
    [],
  );

  console.log(allSkills);