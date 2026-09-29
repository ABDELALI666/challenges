let prompt = require('prompt-sync')()
let num = Number(prompt('tapez un number: '))
for(let i=1;i<=10;i++){
    let result=num*i;
    console.log(result);
}
