let cl = console.log;

//some and every method

let oldies = [26,75,45,55,65,70,80];
let yongies = [13,12,11,18,15,14];
let age = [30,29,15,56,9,60,70,21];

let TeenAger = oldies.some((params)=>{
    return params > 12 && params <= 19
});
cl(TeenAger);

let TeenAger1 = yongies.some((params)=>{
    return params > 12 && params <= 19
});
cl(TeenAger1);

var companies = [
    { name: "Company One", id : 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id : 2, category: "retail", start: 1992, end: 2008 },
    { name: "Company Three", id : 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four",id : 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five",id : 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company six",id : 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven",id : 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight",id : 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine",id : 9, category: "Retail", start: 1981, end: 1989},
]

// is there any one company who run for atleast 20 years

let result = companies.some((params)=>{
    if (params.end - params.start >= 20){
        return true
    }else{
        return false;
    }
})
cl(result);

//using refactor
let result1 = companies.some(params =>params.end - params.start >= 20);
cl(result1);

//company who run atleast 12 years & should be atleast 90's

let result2 = companies.some((params)=>{
    return (params.end - params.start >= 12)&&(params.start >= 1990 && params.start <= 1999)
});
cl(result2);

// company who run atleast 20 years and & it should be retail

//here we have to check value is present or not .only one condition should satisfy

let result3 = companies.some((params)=>{
    return (params.category.toLowerCase().includes('retail')&&(params.end - params.start)>=20)
});
cl(result3);

//Every Method

let oldies1 = [26,75,45,55,65,70,80];
let yongies1 = [13,12,11,18,15,14];
let age1 = [30,29,15,56,9,60,70,21];

//if any condition is not satisfy the output would be false

let result4 = oldies1.every((ele)=>{
    return ele >= 18 ;

});
cl(result4);

let result5 = yongies1.every((params)=>{
    return params >= 18
});
cl(result5);


var companies = [
    { name: "Company One", id : 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id : 2, category: "retail", start: 1992, end: 2008 },
    { name: "Company Three", id : 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four",id : 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five",id : 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company six",id : 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven",id : 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight",id : 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine",id : 9, category: "Retail", start: 1981, end: 1989},
]

//company should be run atleast 10 years

let result6 = companies.every((params)=>{
    return (params.end - params.start >= 10)
});
cl(result6);

//company should be run for 15 years & category is "retail"
let result7 = companies.filter((params)=>{
    return (params.category.toLowerCase().includes('technology'))
}).every((ele)=>{
    return ele.end - ele.start >= 15
});
cl(result7);

// we have to check [] > 0.
let arr = []
let result8 = arr.every(ele=>ele>0);
    cl(result8);




