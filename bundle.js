(()=>{"use strict";function t(){document.querySelector(".modal-container").remove()}async function e(t){const e=document.querySelector(".modal-container");e.innerHTML="",e.appendChild(await t)}(async()=>{let n=await async function(){const t=await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");return(await t.json()).challenges}();document.getElementById("text-filter").addEventListener("keyup",(()=>function(t){let e=document.getElementById("text-filter").value;if(console.log(e),e)return t.filter((t=>t.title.toUpperCase().includes(e.toUpperCase())||t.description.toUpperCase().includes(e.toUpperCase())))}(n))),document.querySelectorAll(".challenge-item button").forEach((n=>{n.addEventListener("click",(a=>{!function(n){const a=document.createElement("div");a.classList.add("modal-container"),document.body.appendChild(a),e(async function(n){const a=document.createElement("form");a.classList.add("modal-content");const o=document.createElement("h1");o.textContent=`Book room ${n.title} (step 1)`,a.appendChild(o);const c=document.createElement("p");c.textContent="What date would you like to come?",a.appendChild(c);const l=document.createElement("label");l.textContent="Date",l.for="input[type=date]",a.appendChild(l);const s=document.createElement("input");s.type="date",s.setAttribute("min",(new Date).toLocaleDateString()),a.appendChild(s);const i=document.createElement("button");return i.type="submit",i.classList.add("button","primary"),i.name="search-times",i.textContent="Search available times",a.appendChild(i),a.addEventListener("submit",(async a=>{a.preventDefault();const o=s.value;if(""===s.value)alert("Please choose a date");else{const a=await async function(t,e){const n=await fetch("https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date="+e+"&challenge="+t),a=await n.json();return a.slots.forEach((t=>{console.log(t)})),a.slots}(n.id,o);e(async function(n,a){const o=document.createElement("form");o.classList.add("modal-content");const c=document.createElement("h1");c.textContent=`Book room ${n.title} (step 2)`,o.appendChild(c);const l=document.createElement("label");l.textContent="Name",l.for="input-name",o.appendChild(l);const s=document.createElement("input");s.type="text",s.classList.add("input-name"),o.appendChild(s);const i=document.createElement("label");i.textContent="E-mail",i.for="input-email",o.appendChild(i);const d=document.createElement("input");d.type="text",d.classList.add("input-email"),o.appendChild(d);const r=document.createElement("label");r.textContent="What time?",i.for="select-time",o.appendChild(r);const m=document.createElement("select");m.classList.add("select-time"),o.appendChild(m);for(let t=0;t<a.slots.length;t++){const e=document.createElement("option");e.textContent=a.slots[t],m.appendChild(e)}const p=document.createElement("label");p.textContent="How many participants?",p.for="select-participants",o.appendChild(p);const u=document.createElement("select");u.classList.add("select-participants"),o.appendChild(u);let h=n.maxParticipants-n.minParticipants;for(let t=0;t<h;t++){const e=document.createElement("option");e.textContent=`${n.minParticipants+t} participants`,u.appendChild(e)}const C=document.createElement("button");return C.type="submit",C.classList.add("button","primary"),C.name="submit-booking",C.textContent="Submit booking",o.appendChild(C),o.addEventListener("submit",(async n=>{n.preventDefault(),e(function(){const e=document.createElement("div");e.classList.add("modal-content","center");const n=document.createElement("h1");n.textContent="Thank you!",e.appendChild(n);const a=document.createElement("button");return a.classList.add("button","secondary"),a.textContent="Back to challenges",a.addEventListener("click",t),e.appendChild(a),e}())})),o}(n,a))}})),a}(n))}(JSON.parse(n.querySelector("input").value))}))}))})()})();