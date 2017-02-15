interface Teacher{
    desg:string;
    name:string;
}

interface Doctor{
    desg:string;
    name:string;
}

let teacher: Array<Teacher>=[
    {desg:'Junior Lecturer', name:'Prasanna'},
    {desg:'Senior Lecturer', name:'Sureka'},
    {desg:'HOD', name:'Ravi'}
]

let doctor: Array<Doctor>=[
    {desg:'DO', name:'Mohan'},
    {desg:'PA', name:'Anila'},
    {desg:'Dr', name:'Vinod'}
]

class Person<T>{
name:T;
    setName(name:T){
        console.log(name);
    }
    getName():T{
        return this.name;
    }
}

let t: Person<Teacher> =new Person<Teacher>();
teacher.forEach(t1=>t.setName(t1));
let n: Teacher=t.getName();

let d: Person<Doctor> =new Person<Doctor>();
doctor.forEach(d1=>d.setName(d1));
let n1: Doctor=d.getName();


let p:Person<string>=new Person<string>();
p.setName('Sowjanya');
let strname= p.getName();

let p1:Person<number>=new Person<number>();
p1.setName(4);
let numname = p1.getName();

let p2:Person<boolean>=new Person<boolean>();
p2.setName(true);
let booleanname = p2.getName();




//2nd task

let doctor1: Array<Doctor>=[
    {desg:'DO', name:'Mohan'},
    {desg:'PA', name:'Anila'},
    {desg:'Dr', name:'Vinod'}
]

let teacher1: Array<Teacher>=[
    {desg:'Junior Lecturer', name:'Prasanna'},
    {desg:'Senior Lecturer', name:'Sureka'},
    {desg:'HOD', name:'Ravi'}
]

interface IUser { 
    desg:string;
}
class User<T extends IUser> { 
  private _items:Array<T>=new Array<T>();
    find(desg:string):T{
        console.log(desg);
        return this._items.filter(item => item.desg == desg)[0];
    }
}

let d2: User<IUser> =new User<IUser>();
let f=d2.find('Dr');

let t2: User<IUser> =new User<IUser>();
let f1=t2.find('HOD');

