

// // var element = document.getElementById("gen_div1");
// // let tegsAdd = document.createElement("div")
// // function add() {
// //     tegsAdd.appendChild(element)
// // }
// var a = 5

// switch (a) {
//     case "4":
//         console.log("a = 4");
//         break
//     case "6":
//         console.log("a = 6");
//         break
//     case 5:
//         console.log("a = 5");
//         break
//     default:
//         console.log("asss");
// }
// let s= 0
// setInterval(function ab(){

// },1500)
// var asus = setInterval(acba,500)

// function acba(){
//     console.log(s)
//     s++
//     if (s==3) {
//         clearInterval(asus)
//     }
// }

// setTimeout( function(){
//     console.log("Arman");
// },1500)


// let arr = [8, 9, 7, 89, 59, 46]

// console.log(typeof arr[3]);
// console.log(typeof arr.sort().join(""));

// var a
// console.log(a);
// var a=5

// const poi = [8, 9, 7, 89, 59, 46]
// poi.sort(function(a,b){return a-b})
// console.log(poi);

// class parents {


//     constructor(name,age,status){
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }


//      info(){
//         console.log("name is" + " " + this.name);
//     };
// }

// var alex = new parents('Alex',23,true)
// var jon = new parents('jon',27,false)


// alex.info()

// let arr = [...arr1, ...arr2]
// let mid
// let c = 0
// arr.sort(function (a, b) { return a - b })

// for (var i = 0; i < arr.length; i++) {
//     c = arr[i] + c;
// }
// mid = c / i

// mid = mid.toFixed(5)



// return (mid);
// let n;
// console.log(n);
// let count=1;
// function asus() {
//     if (n==undefined) {
//         count=0;
//         return
//     }

// while (n/10>10) {

//     count++
//     n=n/10;
//     console.log(n);

// }
// }
// asus()
// console.log(count);
// let num = [1,3,6,9,6,5,9,5]
// let tex=[]
// let num1
// add=100
// tex=num.find((v,i,a)=>{
//     console.log(tex);
//     return v>1

// })
// console.log(tex);
// console.log(true+true);

//*************** search number in string  task 6

// var myAtoi = function (s) {
//     let arm = ''
//     let cou = 0;
//     let cou1
//     if (s[0] == "w") {
//         return 0
//     }
//     for (i = 0; i < s.length; i++) {
//         if (s[i].charCodeAt() < 65 || s[i].charCodeAt() > 122) {
//             cou = i
//             if ((i - cou1) > 1) {
//                 break
//             }
//             cou1 = cou
//             if ((s[i] != " " && s[i + 1] == " ") || (s[i] != " " && s[i + 1] == "+") || (s[i] != " " && s[i + 1] == "-")) {
//                 arm += s[i]
//                 break
//             }
//             arm += s[i]
//         }
//     }
//     if (arm[arm.length - 1] == "-" || arm[arm.length - 1] == "+") {
//         let asus = [...arm]
//         asus[asus.length - 1] = " "
//         arm = asus.join("")
//     }
//     let arr1 = arm
//     arm = ''
//     let k = Number(arr1)
//     if (isNaN(k)) {
//         return 0
//     }
//     if (k > (2 ** 31 - 1)) {
//         k = 2 ** 31 - 1
//     }
//     if (k < ((-2) ** 31)) {
//         k = (-2) ** 31
//     }
//     return k
// }
// myAtoi('-5-')




// ************    task 135  cendy



//239 hard task from leedcode |

var maxSlidingWindow = function (nums, k) {
        
        let arr1 = []
        if(1<=k<=nums.length && 1<=nums.length<=100000){
        let arr = []
        
        let d = 0
        let count = k;
        for (j = 0; j < nums.length - k+1; j++) {
                for (let i = d; i < count; i++) {
                        arr.push(nums[i])

                }
                arr1.push(Math.max(...arr));
                d++;
                count++
                arr=[]
        }
console.log(arr1)
}

}
let masiv = [1, 9, 8, 9, 5, 6, 6, 7, 5, 9, 5, 5]
maxSlidingWindow(masiv, 3)
// let aste

// for (let i = 0; i < aste.length; i++) {
//        if (aste[i]>10000 || aste[i]<-10000) {
//         console.log(i);
//        }
        
// }
// // console.log(count);
// console.log(aste.length);