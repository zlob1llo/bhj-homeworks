const tabsList = Array.from(document.querySelectorAll('.tab'));
const tabsContentList = document.querySelectorAll('.tab__content');
  
tabsList.forEach((item, index) => {
    item.onclick = () => {
      for (let i = 0; i < tabsList.length; i++) {
        tabsList[i].classList.remove("tab_active")
        tabsContentList[i].classList.remove("tab__content_active")
      }
      tabsList[index].classList.add("tab_active")
      tabsContentList[index].classList.add("tab__content_active")
    }
})