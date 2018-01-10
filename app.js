
var images = document.getElementById('images');


var name = document.getElementById('name');
var age = document.getElementById('age')
var address = document.getElementById('address')
var email = document.getElementById('email')


var skill1 = document.getElementById('scriptlang');
var skill2 = document.getElementById('designing')


var school = document.getElementById('school');
var extraCourse = document.getElementById('extraCourse');


var portfolio1 = document.getElementById('prtFolio1');
var portfolio2 = document.getElementById('prtFolio2');
var portfolio3 = document.getElementById('prtFolio3');

var user = {
    images : "8.jpg",
    name :'Bilal Raza Attari',
    age : 19,
    address : 'Block M North Nazimabad',
    email : 'attari1235@gmail.com',
    skill1 : 'HTML 5 Javascript and React',
    skill2 : 'CSS bootstrap and adobe photoshop',
    school : 'Done O levels with 6As , Enter in commerce and now B.Com1 is going',
    extraCourse : 'Student Of Saylani Mass Training to become a developer',
     portfolio1 : "3.jpg",
    portfolio2 : '4.jpg',
    portfolio3 : "3.jpg",
}

images.innerHTML = user.images;
name.innerHTML= user.name;
age.innerHTML= user.age;
address.innerHTML= user.address;
email.innerHTML= user.email;
skill1.innerHTML= user.skill1;
skill2.innerHTML= user.skill2;
school.innerHTML= user.school;
extraCourse.innerHTML= user.extraCourse;
portfolio1.innerHTML= user.portfolio1;
portfolio2.innerHTML= user.portfolio2;
portfolio3.innerHTML= user.portfolio3;
