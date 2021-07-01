let mas = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
let mas0=mas.slice('');
let mas1=mas.slice('');
let mas2=mas.slice('');

//удаление fish
for (let i=0; i < mas.length; i++ )
{
    if (mas[i]=='fish')
        mas.splice(i,1);
    
}
//удаление cat
for (let i=0; i < mas0.length; i++ )
{
    if (mas0[i]=='cat')
        mas0.splice(i,1);
    
}
//удаление 2х последних
let c=0;
while( c !=2){
    mas1.pop();
    c++;}

//удаление первого элемента (cat)
    mas2.shift()

console.log(mas);
console.log(mas0);
console.log(mas1);   
console.log(mas2);