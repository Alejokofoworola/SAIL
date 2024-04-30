//const arr:number[]=[1,2,3,4,5,6]
//function sumOfArray(arr:number[]):number{
   // let y:number = 0;
   // for(let x:number= 0; x<arr.length; x++){
       // y+=arr[x]
   // }
   // return y
//}
//console.log(sumOfArray([10,20,30,40,50]

interface product {
    name: string;
    price: number;
    quantity: number;
}
   let  products:product[];
function addproduct(good:product) {
    products.push(good)
}
function removeproduct(goodName:string){
    for(let i= 0; i<products.length; i++){
        if (products[i].name===goodName){
            products.splice(i,1)
        }
    }
console.log(products);

}








