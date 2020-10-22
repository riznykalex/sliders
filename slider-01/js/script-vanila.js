
    let position = 0;
    const slideToShow = 3;
    const slideToScroll = 2;
    const container = document.querySelector('.container');
    const track = document.querySelector('.slider-track');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const items = document.querySelectorAll('.slider-item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slideToShow;
    const movePosition = slideToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });


    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;
        position -= itemsLeft>= slideToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });


    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft>= slideToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth
    };


    checkBtns();
