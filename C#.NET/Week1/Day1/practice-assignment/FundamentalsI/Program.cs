// for (int i =1 ; i <= 255; i++)
// {
//     Console.WriteLine(i);
// }
// ********
// for (int i =1 ; i <= 100; i++)
// {
//     if((i % 3== 0 ||i % 5== 0) && !(i % 3== 0 && i % 5== 0)  ){
//         Console.WriteLine(i);
//     }
// }
//********
for (int i =1 ; i <= 100; i++){
    string S = "";
    if((i%5==0) && (i % 3== 0)){
        S="FizzBuzz";
        }
    else if((i%5)==0){
        S="Buzz";
    }
    else if((i % 3)== 0 ){
        S="Fizz";
    }
    Console.WriteLine(S+" "+i);
}