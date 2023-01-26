const dropdown = document.querySelector('.dropdown');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

let selectedDropdownValue = dropdownValue.innerHTML;
console.log(selectedDropdownValue);



function operateSubMenu(event) {
    elem = event.target;
    
    if ((dropdownList.classList.contains("dropdown__list_active")) && (!elem.classList.contains("dropdown__item"))) {
        dropdownList.classList.remove("dropdown__list_active");
       
    } else {
        dropdownList.classList.add("dropdown__list_active");
    };
};



for (i = 0; i < dropdownLinks.length; i++) {   
    
    (function(n) {
        dropdownLinks[n].onclick = function (){

            if (dropdownLinks[n]) {  

                selectedDropdownValue = dropdownLinks[n].innerHTML;
                dropdownValue.textContent = selectedDropdownValue;
                
                 console.log(dropdownValue.textContent);            
                return false;                                 
            }; 

            dropdownList.classList.remove("dropdown__list_active");
        };
    }(i));
 }

 dropdown.addEventListener('click', operateSubMenu)