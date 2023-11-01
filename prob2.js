let v1=[3,1,7,9,6]
let v2=[2,4,1,9,3]
var ps=0

for(let i=0 ;i < v1.length ; i++ )
{
 Dot_product(v1[i],v2[i],i) 
// console.log(Dot_product)
// console.log(ps)
}
function Dot_product(y,z,i)
{
ps = ps + (y*z)
return ps
}
         if (ps == 0) 
              {
                console.log("Les vecteurs sont orthogonaux");
               }
         else
               {
                console.log("Les vecteurs ne sont pas orthogonaux");
                }

//// affichage
console.log(ps)