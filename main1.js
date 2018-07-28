// function Loadjson(file,callback) {
//   var xhr =new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState === 4 && xhr.status == "200"){
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
// }
// Loadjson("data.json",function(text){
//   var data =JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.carrer);
//   education(data.education);
//   technicalskills(data.technicalskills);
//   achievements(data.achievements)
// })
function Loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
  })
}
var newfile=Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
    basics(data.details);
    careerinfo(data.carrer);
    education(data.education);
    technicalskills(data.technicalskills);
    achievements(data.achievements)
})
var child1 =document.querySelector(".childone");
function basics(det) {
  var image=document.createElement("img");
  image.src =det.image;
  child1.appendChild(image);
  var name =document.createElement("h4");
  name.textContent=det.name;
  child1.appendChild(name);
  var phonenum=document.createElement("h4");
  phonenum.textContent=det.phoneno;
  child1.appendChild(phonenum);
  var email=document.createElement("a");
  email.href="http://www.gmail.com";
  email.textContent=det.email;
  child1.appendChild(email);
  var add=document.createElement("h2");
  add.textContent="adress";
  child1.appendChild(add);
  var hr=document.createElement("hr");
  child1.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=det.adress;
  child1.appendChild(p);
}
var child2 =document.querySelector(".childtwo");
function careerinfo(det2){
  var heading=document.createElement("h4");
  heading.textContent="careerobjective";
  child2.appendChild(heading);
  var info=document.createElement("p");
  info.textContent=det2.info;
  child2.appendChild(info);
}
function education(det3){
  var heading=document.createElement("h4");
  heading.textContent="educational qualification";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var table1=document.createElement("table");
  table1.border="1";
  child2.appendChild(table1);
  tabledata="";
  tabledata="<tr><th>"+"qualification"+"</th><th>"+"institute"+"</th><th>"+"year"+"</th><th>"+"percentage"+"</th></tr>";
  for (i = 0; i < det3.length; i++) {
    tabledata+="<tr><td>"+det3[i].qualification+"</td><td>"+det3[i].institute+"</td><td>"+det3[i].year+"</td><td>"+det3[i].percentage+"</td></tr>";
  }
  table1.innerHTML=tabledata;
}
function technicalskills(det4){
  var heading=document.createElement("h4");
  heading.textContent="technicalskills";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  for (i = 0; i < det4.length; i++) {
    var title=document.createElement("h4");
    title.textContent=det4[i].title;
    child2.appendChild(title);
    var info=document.createElement("ul");
    child2.appendChild(info);
    var info1=document.createElement("li");
    info1.textContent=det4[i].info;
    child2.appendChild(info1);
  }

}
function achievements(det5)
{
  var heading=document.createElement("h4");
  heading.textContent="achievements";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var info=document.createElement("li");
  info.textContent=det5.info;
  child2.appendChild(info);
}
function openpage(){
  window.open("resume.html","_self",true);
}
