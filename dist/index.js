'use strict';

var _sec = import a from ''('./sec');

console.log(_sec.a); // let [a,[b,c],d] = [1,[2],3]
// console.log(a,b,c,d)
// let [a,b = " world"] = ['hello ']
// console.log(a+b)

// function arr(...arg) {
//     console.log(arg[0])
//     console.log(arg[1])
//     console.log(arg[2])
// }

// arr(1,2);

// let arr1 = [1,2,3,4]
// let arr2 = [...arr1]
// console.log(arr2)
// arr2.push('5')
// console.log(arr1)

// function test(first,...arr) {
//     console.log(arr.length)

//     for (const i of arr) {
//         console.log(i)
//     }
// }

// test(1,2,3,4)

// let str1 = "i am"
// let str2 = " king"
// let str3 = "cando"
// let str = `i am ${str2}cando`

// document.write(str)

// let str1 = "king"
// let str2 = "iamkingcando"

// document.write(str2.includes(str1))
// document.write(str1.repeat(5))

// let binary = 0B01110101001
//  document.write(binary)

// let o = 0o7654321
// document.write(o)

// let a = 11/4
// let a = Number.MAX_SAFE_INTEGER
// console.log(a)
// let b = Math.pow(2,53)-1
// console.log(b)

// let json = {
//     '0': 'king',
//     '1': 'can',
//     '2': 'do',
//     length:3
// }

// let arr = Array.from(json)
// let eva = eval('[1,2,3]')
// let arr = Array.of(eva)
// console.log(arr)

// let arr = [1,2,3,4,5,6,7,8,9]

// console.log(arr.find(function (val,index,arr) {
//     return val > 5
// }))

// let arr = ['a','b','c','d','e','f','g','h','i','j']
// arr.fill('king',2,5)
// for (let [index,val] of arr.entries()) {
//     // const element = array[index];
//     console.log(index+'-'+val)

// }
// console.log(arr)

// let list = arr.entries(arr)
// console.log(list)
// console.log(list.next().value)
// console.log(list.next().value)

// function add(a,b = 1) {

//     if (a == 0) {
//         throw new Error('This is error!a can\'t be 0')
//     }
//     return a + b
// }

// console.log(add(0))

// var add = (a,b) => {

//     console.log('箭头函数')
//     return a + b
// }

// console.log(add(1,2))

// let json = {
//     a: 'king',
//     b: 'can',
//     c: 'do'
// }

// function fun({a,b}) {
//     console.log(a,b)
// }

// fun(json)

// console.log('a' in json)
// let arr = ['a','b',,,]
// console.log(0 in arr)

// arr.forEach((val,index) => console.log(val,index));
// arr.filter(x=> console.log(x))
// arr.some(x=> console.log(x))
// console.log(arr.toString())
// console.log(arr.join('|'))
// let name = 'king'
// let skill = 'cando'
// var obj = {name,skill}
// let key = 'skill'
// var obj = {
//     [key]: 'web'
// }

// console.log(obj)
// console.log(+0 === -0)
// console.log(NaN === NaN)
// console.log(Object.is(NaN,NaN))

// var a = {a: 'king'}
// var b = {b: 'can'}
// var c = {c: 'do'}
// let d = Object.assign(a,b,c)

// console.log(d)

// var a = new String
// var b = new Number
// var c = new Boolean
// var d = new Array
// var e = new Object
// var f = Symbol();
// var g = Symbol('kingcando')
// console.log(typeof(g))
// console.log(g)
// console.log(g.toString())

// var kcd = Symbol
// var obj = {
//     [kcd]: 'kingcando'
// }
// console.log(obj[kcd])
// obj[kcd] = 'hello'
// console.log(obj[kcd])

// var kcd = {
//     name: 'kingcando',
//     sex: 'male'
// }

// var age = Symbol()
// kcd[age] = 18

// for (let item in kcd) {
//     console.log(kcd[item])
// }

// console.log(kcd)

// let setArr = new Set(['king','can','do'])
// setArr.add('age')
// for (let item of setArr) {
//     console.log(item)
// }
// setArr.forEach( (value) =>console.log(value) );
// console.log(setArr)

// var json = {
//     name: 'king',
//     sex: 'male'
// }

// console.log(json.name)

// var map = new Map()
// console.log(map)
// map.set(json,'iam')
// map.set('iam',json)
// console.log(map.get('iam'))

// let obj = {
//     add:function (val) {
//         return val+10
//     },
//     name: 'kingcando'
// }

// let obj = new Proxy({
//         add:function (val) {
//             return val+10
//         },
//         name: 'kingcando'
//     },{
//         get:function (target,key,property) {
//             console.log('come in Get')
//             // console.log(target)
//             return target[key]
//         },
//         set:function(target,key,value,receiver){
//             console.log(`    setting ${key} = ${value}`);
//             return target[key] = value;
//         }
//     })


// console.log(obj.name)
// obj.name = 'hello'
// console.log(obj.name)
// console.log(obj.add(100))

// let target = function () {
//     return 'kingcando'
// }

// let handler = {
//     apply(target,ctx,args) {
//         console.log('do')
//         return Reflect.apply(...arguments)
//     }
// }

// var pro = new Proxy(target,handler)

// console.log(pro())

// let state=1;
// function step1(resolve,reject){
//     console.log('1.start-cooking');
//     if(state==1){
//         resolve('cooking--done');
//     }else{
//         reject('cooking--wrong');
//     }
// }
// function step2(resolve,reject){
//     console.log('2.??-?????');
//     if(state==1){
//         resolve('?????--??');
//     }else{
//         reject('?????--??');
//     }
// }
// function step3(resolve,reject){
//     console.log('3.??-??????');
//      if(state==1){
//         resolve('??????--??');
//     }else{
//         reject('??????--??');
//     }
// }

// new Promise(step1).then(function(val) {
//     console.log(val)
//     return new Promise(step2)
// }).then(function(val) {
//     console.log(val)
//     return new Promise(step3)
// }).then(function(val) {
//     console.log(val)
//     return val
// })

// class Coder{
//     name(val){
//         console.log(val)
//     }
//     skill(){
//         console.log('skill'+val)
//     }
// }

// var coder = new Coder
// coder.name('kingcando')
// coder.skill('male')
