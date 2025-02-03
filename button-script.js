
function openTab(tabId) {
    // Скрыть все вкладки
    const tabs = document.querySelectorAll('.button-nav');
    tabs.forEach(tab => tab.classList.remove('active'));
    // Удалить класс 'active' у всех кнопок
    const buttons = document.querySelectorAll('#BUTTON-BOX .button-nav');
    buttons.forEach(button => button.classList.remove('active'));
    // Показать выбранную вкладку
    document.getElementById(tabId).classList.add('active');
    // Добавить класс 'active' к выбранной кнопке
    // event.target.classList.add('active');

}

document.querySelectorAll('#BUTTON-BOX .button-nav').forEach(button => {
    button.addEventListener('click', function() {
        // Удаляем класс 'active' у всех кнопок
        document.querySelectorAll('#BUTTON-BOX .button-nav').forEach(btn => btn.classList.remove('active'));
        // Добавляем класс 'active' к нажатой кнопке
        this.classList.add('active');
        // alert(this + " activ");
    });
});