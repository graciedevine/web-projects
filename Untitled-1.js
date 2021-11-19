const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function () {
    const choice = select.value;

    switch (choice) {
        case 0:
            if (choice === 'white');
            <option>white</option>
            break;

        case 1:
            if (choice === 'black');
            <option>black</option>
            break;

        case 2:
            if (choice === 'purple');
            <option>purple</option>
            break;

        case 3:
            if (choice === 'yellow');
            <option>yellow</option>
            break;

        case 4:
            if (choice === 'psychedelic');
            <option>psychedelic</option>
            break;
    }
}

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}