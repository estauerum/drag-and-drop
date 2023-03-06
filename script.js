window.addEventListener("DOMContentLoaded", () => {

    let item = document.querySelector('.item'),
        placeholders = document.querySelectorAll('.placeholder');

    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)

    placeholders.forEach((placeholder) => {
        //элемент который мы перетаскиваем находиться над плейсхолдером куда мы можем поместить
        placeholder.addEventListener('dragover', dragOver)
        //когда заходим на территорию конкретного плейсхолдера
        placeholder.addEventListener('dragenter', dragEnter)
        //когда перетащили и вышли
        placeholder.addEventListener('dragleave', dragLeave)
        //когда отпустили
        placeholder.addEventListener('drop', dragDrop)

    })



    function dragStart (event) {
        event.target.classList.add('hold')
        setTimeout(() => {
            event.target.classList.add('hide')
        }, 0);
    }

    function dragEnd (event) {
        event.target.classList.remove('hold', 'hide')
    }

    function dragOver (event) {
        event.preventDefault();
    }

    function dragEnter (event) {
        event.target.classList.add('hovered')
    }

    function dragLeave (event) {
        event.target.classList.remove('hovered')
    }

    function dragDrop (event) {
        event.target.append(item);
        event.target.classList.remove('hovered')
    }


})  