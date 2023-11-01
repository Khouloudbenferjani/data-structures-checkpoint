let set1=[3,1,7,9]
let set2=[2,4,1,9,3]
var occ=0
var tab = []
tab = tab.concat(set1,set2)
var diff = []

//////// test set1 //////////

for(let x=0 ;x < set1.length ; x++ )
{
for(let y=0 ;y < tab.length ; y++)
{

  if(set1[x] == tab[y]   )
  {
      occ = occ + 1
      
  }
  
}
if(occ == 1 )
{
    diff.push(set1[x])
}
occ = 0
}

//////// test set2 //////////
for(let x=0 ;x < set2.length ; x++ )
{
for(let y=0 ;y < tab.length ; y++)
{

  if(set2[x] == tab[y]   )
  {
      occ = occ + 1
      
  }
  
}
if(occ == 1 )
{
    diff.push(set2[x])
}
occ = 0
}

//// affichage
console.log(diff)
//// sum /////
const sum = diff.reduce((p,b) => p + b, 0);
console.log("sum of distinct elements is : " +sum)