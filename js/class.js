var teacher = [
    { desg: 'Junior Lecturer', name: 'Prasanna' },
    { desg: 'Senior Lecturer', name: 'Sureka' },
    { desg: 'HOD', name: 'Ravi' }
];
var doctor = [
    { desg: 'DO', name: 'Mohan' },
    { desg: 'PA', name: 'Anila' },
    { desg: 'Dr', name: 'Vinod' }
];
var Person = (function () {
    function Person() {
    }
    Person.prototype.setName = function (name) {
        console.log(name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var t = new Person();
teacher.forEach(function (t1) { return t.setName(t1); });
var n = t.getName();
var d = new Person();
doctor.forEach(function (d1) { return d.setName(d1); });
var n1 = d.getName();
var p = new Person();
p.setName('Sowjanya');
var strname = p.getName();
var p1 = new Person();
p1.setName(4);
var numname = p1.getName();
var p2 = new Person();
p2.setName(true);
var booleanname = p2.getName();
//2nd task
var doctor1 = [
    { desg: 'DO', name: 'Mohan' },
    { desg: 'PA', name: 'Anila' },
    { desg: 'Dr', name: 'Vinod' }
];
var teacher1 = [
    { desg: 'Junior Lecturer', name: 'Prasanna' },
    { desg: 'Senior Lecturer', name: 'Sureka' },
    { desg: 'HOD', name: 'Ravi' }
];
var User = (function () {
    function User() {
        this._items = new Array();
    }
    User.prototype.find = function (desg) {
        console.log(desg);
        return this._items.filter(function (item) { return item.desg == desg; })[0];
    };
    return User;
}());
var d2 = new User();
var f = d2.find('Dr');
var t2 = new User();
var f1 = t2.find('HOD');
//# sourceMappingURL=class.js.map