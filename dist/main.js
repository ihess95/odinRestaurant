(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("div");t.textContent="Ian's Spaghetti Parlor",t.classList.add("restaurantHeader");const n=document.createElement("img");n.src="../img/chef.jpg",n.classList.add("dumpImg");const a=document.createElement("div");for(a.classList.add("description"),a.textContent="Woah this restaurant is so good I almost forgot it's called a spaghetti parlor when all they serve is dumplings!";e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t),e.appendChild(n),e.appendChild(a)}!function(){e();const t=document.querySelector(".webContainer"),n=document.createElement("div"),a=document.getElementById("content");n.classList.add("buttonContainer");const d=document.createElement("button");d.textContent="Home",d.addEventListener("click",(function(){e()}));const s=document.createElement("button");s.textContent="Menu",s.addEventListener("click",(function(){!function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div");function a(e,t,a,d,s){const o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("img"),l=document.createElement("div"),r=document.createElement("div");o.classList.add(e+"Card"),i.classList.add(e+"Title"),i.textContent=t,c.src=a,c.classList.add(e+"Img"),l.classList.add(e+"Desc"),l.textContent=d,r.classList.add(e+"Price"),r.textContent=s,o.appendChild(i),o.appendChild(c),o.appendChild(l),o.appendChild(r),n.appendChild(o)}for(n.classList.add("menuGrid"),t.textContent="Ian's Menu Parlor",t.classList.add("restaurantHeader");e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t),e.appendChild(n),a("dump","Dumplings","../img/dump.jpg","Boy Howdy Look at these dumps","$2.99 a pop"),a("lasagna","Lasagna","../img/lasagna.png","Hoo boy is that a whole lasagn?","Gimme 14.99 for a 'sagn'"),a("pancakes","Pancakes","../img/pancakes.jpeg","The pancakes are fine, I guess...","Pancakes are on the house, callem $0.00"),a("pizza","Pizza Boy","../img/pizza.jpeg","This doesn't even need to be on the menu, you already knew we had pizza","Pizza's pizza, I need a buck fifty a schlice")}()}));const o=document.createElement("button");o.textContent="Contact Us",o.addEventListener("click",(function(){!function(){const e=document.getElementById("content"),t=document.createElement("div");t.textContent="Ian's Contact Parlor",t.classList.add("restaurantHeader");const n=document.createElement("img");n.src="../img/contact.webp",n.classList.add("dumpImg");const a=document.createElement("div");for(a.classList.add("description"),a.textContent="Woah this restaurant is so good I almost forgot it's called a spaghetti parlor when all they serve is dumplings!";e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t),e.appendChild(n),e.appendChild(a)}()})),n.appendChild(d),n.appendChild(s),n.appendChild(o),t.insertBefore(n,a)}()})();