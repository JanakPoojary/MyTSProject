/// <reference path="student.ts" />
/// <reference path="school.ts" />


let basil : School= new School();
let kv : School= new School();
let gps : School= new School();
let dps : School= new School();
basil.schoolName="basil";
kv.schoolName="kv";
gps.schoolName="gps";
dps.schoolName="dps";
let schoolList:Array<string>=[];


function displayOut(val:School):void{
  let h:any = <HTMLElement>document.getElementById("out-wrap");
  while(h.firstChild){
    h.removeChild(h.firstChild);
    } 
  let wrap=<HTMLElement>document.getElementById("out-wrap");
  for(let i = 0; i < val.studentsList.length; i++){
    let temp=val.studentsList[i].Name ;
    let item = document.createElement('li');
    item.textContent=temp;
    item.className="jk";
    wrap.appendChild(item);
 
 }
}


function validate() {
  let num1= (<HTMLInputElement>document.getElementById("name")).value;
  let num2= (<HTMLInputElement>document.getElementById("class")).value;
  let num3= (<HTMLInputElement>document.getElementById("age")).value;
  let num4= (<HTMLInputElement>document.getElementById("favs")).value;
  let num5= (<HTMLInputElement>document.getElementById("school")).value;
  if( num1 == "" ) {
    alert( "Please provide your name!" );
    return false;
 }
 else if(num2 == "" ) {
  alert( "Please provide your class!" );
  return false;
}
else if( num3 == "" ) {
  alert( "Please provide your age!" );
  return false;
}
else if( num4 == "" ) {
  alert( "Please provide your favsubject!" );
  return false;
}
else if( num5 == "" ) {
  alert( "Please provide your school name!" );
  return false;
}
return true;
    
}
const saveData=(e:any) => { 
  let de:boolean=validate();
  if(de==true){ 
  e.preventDefault();
  
let mform = <HTMLFormElement>document.getElementById('myform');
let student1 :Student = new Student();
let n:HTMLElement = <HTMLInputElement>document.getElementById('name');
let c:HTMLElement = <HTMLInputElement>document.getElementById('class');
let a:HTMLElement = <HTMLInputElement>document.getElementById('age');
let f:HTMLElement = <HTMLInputElement>document.getElementById('favs');
let s:HTMLElement = <HTMLInputElement>document.getElementById('school');

//schoolList is temp array of school
//school1 is the object of School Class
//school is a variable of type string

let school = (<HTMLInputElement>s).value;
school=school.toLowerCase();

switch(school)
{
  case "basil":
    basil.studentsList.push(student1);
    break;
  case "kv":
    kv.studentsList.push(student1);
    break;
  case "gps":
    gps.studentsList.push(student1);
    break;
  case "dps":
    dps.studentsList.push(student1);
    break;

}

student1.Name=(<HTMLInputElement>n).value;
student1.Age=Number((<HTMLInputElement>a).value);
student1.Class=Number((<HTMLInputElement>c).value);
student1.favSub=(<HTMLInputElement>f).value;
student1.scl=(<HTMLInputElement>s).value;
mform.reset();
  }
}

const searchData=(e:any) => {  
  e.preventDefault();
  let srch:HTMLElement = <HTMLInputElement>document.getElementById('searchtxt');
  let text = (<HTMLInputElement>srch).value;
  if(text!="basil" && text!="kv" && text!="gps" && text!="dps" && text!="")
  {
    alert("Enter valid name of school");
  }
  switch(text)
{
  case "basil":
    displayOut(basil);
    break;
  case "kv":
    displayOut(kv);
    break;
  case "gps":
    displayOut(gps);
    break;
  case "dps":
    displayOut(dps);
    break;
  default:
    break;
}  
}
(<HTMLInputElement>document.getElementById("submit")).addEventListener('click',saveData);
(<HTMLInputElement>document.getElementById("search")).addEventListener('click',searchData);