arr=[]

function sum(myarray){

	if(myarray.length==0)
    {return 0; }
else {
	return 	myarray.pop() + sum(myarray)	
}

}
sum(arr);

0
arr=[1,2,3,4,5]

function sum(myarray){

	if(myarray.length==0)
    {return 0; }
else {
	return 	myarray.pop() + sum(myarray)	
}

}
sum(arr);

15
arr1 =[10,2,-3,7,5];
let min = [0];




(5) [10, 2, -3, 7, 5]
function mins(arr){

let min = [0];
for(let i=1;i<=arr.length;i++){
   if(arr[i]<min){
min=arr[i];
   }
}
return min;
}
arr1 =[10,2,-3,7,5];
console.log(mins(arr1));