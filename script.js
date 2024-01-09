const toggle = document.getElementById("modes");
let clickCount = 0;

toggle.addEventListener("click", () => {
    clickCount++;
    if (clickCount % 2 === 1) {
       document.documentElement.classList.add("dark");
    } else {
         document.documentElement.classList.remove("dark");
    };
    
 });

