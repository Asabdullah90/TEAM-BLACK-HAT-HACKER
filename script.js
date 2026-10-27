"use strict";
(function(){
var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
var b=document.querySelector(".burger"),n=document.getElementById("nav");
if(b&&n)b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
var out=document.getElementById("out"),inp=document.getElementById("cmd"),term=document.getElementById("term");
if(!out||!inp)return;
var R={
help:["c1","Commands: help, about, identity, mission, country, principles, date, clear"],
about:["c3","TEAM BLACK HAT HACKER: an independent digital identity focused on technology, cybersecurity awareness, privacy and Pakistan's digital future."],
identity:["c2","Team: TEAM BLACK HAT HACKER | Founder & CEO: Abdullah | Identity: Anonymous | Contact: Not public"],
mission:["c1","Mission: promote cybersecurity awareness, digital resilience and technology education for Pakistan."],
country:["c3","Country: Pakistan"],
principles:["c2","Privacy is power. Knowledge is strength. Discipline is everything. Cybersecurity starts with awareness. Pakistan's digital future matters."]};
function p(cls,t){var d=document.createElement("p");d.className="l "+cls;d.textContent=t;out.appendChild(d)}
p("c1","Simulated demonstration terminal. Type 'help'.");
inp.addEventListener("keydown",function(e){
if(e.key!=="Enter")return;
var v=inp.value.trim().toLowerCase().slice(0,40);inp.value="";
p("","visitor@tbhh:~$ "+v);
if(v==="clear"){out.textContent="";return}
if(v==="date")p("c3",new Date().toDateString());
else if(Object.prototype.hasOwnProperty.call(R,v))p(R[v][0],R[v][1]);
else if(v)p("c2","Unknown command. Type 'help'.");
term.scrollTop=term.scrollHeight});
term.addEventListener("click",function(){inp.focus()});
})();
