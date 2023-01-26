const tabItems = document.querySelectorAll('.tab');
const tabItemsLength = tabItems.length;

const tabContentItems = document.querySelectorAll('.tab__content');
const tabContentItemsLength = tabContentItems.length;

const tabsItem = document.querySelector('.tabs');

function changeTabParameters(tabNumber) {

    tabItems[tabNumber].classList.add('tab_active');
    tabContentItems[tabNumber].classList.add('tab__content_active');
        
};

for (let i =0; i < tabItemsLength; i++) {

    tabItems[i].onclick = function (){

        let activeTabNumber = [...tabItems].findIndex(item => item.classList.contains( 'tab_active'));
        let activeContentNumber = [...tabContentItems].findIndex(item => item.classList.contains( 'tab__content_active'));
                
       if ((tabItems[i]) && (i <= (tabContentItemsLength - 1))) {
        tabItems[activeTabNumber].classList.remove('tab_active');
        tabContentItems[activeContentNumber].classList.remove('tab__content_active');     
        changeTabParameters(i);
       } else {
            console.log('Ошибка! Количество контентных блоков не равно количеству вкладок!');
            return;
       };
    };
 };