let string = '[---------------------------------------]'

function freeze(time) {
    const stop = new Date().getTime() + time;
    while(new Date().getTime() < stop); 
}


for(let i = 1; i < string.length - 1; i++){
    console.log(string)
    console.clear()
    string = string.replace('-', '=')    
    console.log(string + `${Math.floor(i * ( 100 / (string.length - 2)))} %`)
    freeze(100)
    
}
