// -------------------------------- Main data ----------------------------------------------------

const tabName = document.querySelectorAll('.tabs-title');
const tabItem = document.querySelectorAll('.tabs-item');
const tabList = document.querySelector('.tabs');


tabList.addEventListener('click', event => {
    const tabActive = event.target.textContent;
    // const tabActive = event.target.getAttribute('data-type-name');

    tabItem.forEach(element => element.classList.remove('tabs-active'));
    tabName.forEach(element => element.classList.remove('active'));

    event.target.classList.add('active');

    tabItem.forEach(element => {
        if (element.classList.contains(tabActive))
            element.classList.add('tabs-active')
    });
});


