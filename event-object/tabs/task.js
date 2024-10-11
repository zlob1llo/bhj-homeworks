const tabsList = document.querySelectorAll('.tab');
const tabsContentList = document.querySelectorAll('.tab__content');

tabsList.forEach((item, index) => {
    item.onclick = () => {
        
        
    console.log( "Клик")
    console.log(index)

   }})