(() => {
    document.getElementById('main').appendChild(getTask());

    function getTask() {
        const task = document.createElement('div');
        task.setAttribute('id', 'task3');
        task.setAttribute('class', 'task bg-dark d-flex flex-column');
        task.innerHTML = '<h3>task 3</h3>';
        const content = document.createElement('div');
        content.setAttribute('id', 'task3-content');
        content.setAttribute('class', 'm-3 d-flex flex-column justify-content-center');
        const form = document.createElement('div');
        form.setAttribute('id', 'task3-form');
        form.setAttribute('class', 'm-5 d-flex flex-row flex-wrap justify-content-center');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'task3-input');
        input.setAttribute('class', 'bg-dark text-light border-secondary');
        input.setAttribute('placeholder', ' Enter a number');
        const button = document.createElement('button');
        button.setAttribute('id', 'task3-button');
        button.setAttribute('class', 'm-3 btn btn-secondary');
        button.addEventListener('click', () => submit());
        const output = document.createElement('div');
        output.setAttribute('id', 'task3-output');
        output.setAttribute('class', 'd-flex messages bg-secondary');


        task.appendChild(content);
        content.appendChild(form);
        content.appendChild(output);
        form.appendChild(input);
        form.appendChild(button);
        button.appendChild(document.createTextNode('Submit'));

        return task;
    }

    function submit() {
        let iconPath = document.getElementById('task3-icon-path');
        if (iconPath.getAttribute('d')[2] === '6') {
            iconPath.setAttribute('d', 'M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z');
        } else {
            iconPath.setAttribute('d', 'M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z');
        }
    }
})();