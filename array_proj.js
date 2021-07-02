let mas = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
let mas0=mas.slice('');
let mas1=mas.slice('');
let mas2=mas.slice('');
let mas3=mas.slice('');
let mas01=mas.slice('');
let mas4=mas.slice('');
let mas001=mas.slice('');
let mas5=mas.slice('');



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
//----//    
mas01.length=mas01.length-2;
//-----//
mas001.splice(-2,2);
//удаление первого элемента (cat)
    mas2.shift()

//ещё способы удалить элемент(fish)
let ara=mas3.forEach((mass,index)=>{
    if (mas3[index]=='fish'){
            mas3.splice(index,1);
            }
})
//---------//
let index1=mas4.indexOf('fish',0);
mas4.splice(index1,1);
//----//
let array = mas5.map((el ,index) => {   
    if (el=='fish') {
        mas5.splice(index,1); 
        return el;
    }
    return el; 
})
array.length=array.length-1;


console.log(1,mas);
console.log(2,mas0);
console.log(3,mas1);   
console.log(4,mas01);
console.log(5,mas001);
console.log(6,mas2);
console.log(7,mas3);
console.log(8,mas4);
console.log(9,mas5);
console.log(10,array);