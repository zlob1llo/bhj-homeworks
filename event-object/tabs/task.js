const tabsList = document.querySelectorAll('.tab');
const tabsContentList = document.querySelectorAll('.tab__content');

tabsList.forEach((tab) => tab.addEventListener('click', 
    function(event) {
    if (!event.target.classList.contains('tab_active')) {
        event.target.parentElement.querySelector('.tab_active').classList.remove('tab_active');
        event.target.classList.add('tab_active');
    }

    let tabIndex = 0;
    let contentIndex = 0;
    
    for (var tab of tabsList) {
        if (tab.classList.contains('tab_active')) break
        tabIndex++
    }

    for (var content of tabsContentList) {
        if (!content.classList.contains('tab__content_active') && tabIndex === contentIndex) {
            content.classList.add('tab__content_active');
        }

        if (content.classList.contains('tab__content_active') && tabIndex !== contentIndex) {
            content.classList.remove('tab__content_active');
        }
        contentIndex++
    }
}
));