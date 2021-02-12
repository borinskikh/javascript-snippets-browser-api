(() => {
    document.getElementById('main').appendChild(getTask());
    /*if (window.localStorage.getItem('task3-cards')) {
        document.getElementById('task3-cards').innerHTML = window.localStorage.getItem('task3-cards');
        console.log('Task 3: local storage was used');
    } else {
        document.getElementById('task3-input').value = '10';;
        submit();
    }*/

    function getTask() {
        const task = document.createElement('div');
        task.setAttribute('id', 'task0');
        task.setAttribute('class', 'task bg-dark d-flex flex-column');
        task.innerHTML = '<h3>task 0</h3>';
        const content = document.createElement('div');
        content.setAttribute('id', 'task0-content');
        content.setAttribute('class', 'm-3 d-flex flex-column flex-lg-row');
        const form = document.createElement('div');
        form.setAttribute('id', 'task0-form');
        form.setAttribute('class', 'm-5 d-flex flex-column task-form');
        const field = document.createElement('div');
        field.setAttribute('id', 'task0-field');
        field.setAttribute('class', 'd-flex flex-column');
        const input = document.createElement('input');
        input.setAttribute('type', 'cardTitle');
        input.setAttribute('id', 'task0-input');
        input.setAttribute('class', 'bg-dark text-light border-secondary');
        input.setAttribute('placeholder', ' Enter a number');
        const label = document.createElement('label');
        label.innerHTML = 'Enter a number between 1 and 10';
        label.setAttribute('for', 'task0-input');
        const button = document.createElement('button');
        button.innerHTML = 'Submit';
        button.setAttribute('id', 'task0-button');
        button.setAttribute('class', 'm-3 btn btn-secondary');
        button.addEventListener('click', () => submit());
        const output = document.createElement('div');
        output.setAttribute('id', 'task0-output');
        output.setAttribute('class', 'd-flex flex-row flex-wrap flex-even');

        task.appendChild(content);
        content.appendChild(form);
        content.appendChild(output);
        form.appendChild(field);
        form.appendChild(button);
        field.appendChild(label);
        field.appendChild(input);
        return task;
    }

    function submit() {
        const ns = 'http://www.w3.org/2000/svg';
        const chart = document.createElementNS(ns, 'svg');
        chart.setAttribute('class', 'chart');
        chart.setAttribute('viewbox', '0 0 300 200');
        const line1 = document.createElementNS(ns, 'line');
        line1.setAttribute('style', 'stroke-width: 2;');
        line1.setAttribute('stroke', 'white');
        line1.setAttribute('x1', '0');
        line1.setAttribute('y1', '0');
        line1.setAttribute('x2', '0');
        line1.setAttribute('y2', '200');
        const line2 = document.createElementNS(ns, 'line');
        line2.setAttribute('style', 'stroke-width: 2;');
        line2.setAttribute('stroke', 'white');
        line2.setAttribute('x1', '0');
        line2.setAttribute('y1', '200');
        line2.setAttribute('x2', '300');
        line2.setAttribute('y2', '200');
        const polyline = document.createElementNS(ns, 'polyline');
        polyline.setAttribute('style', 'fill: none; stroke: white; stroke-width: 3');
        polyline.setAttribute('points', '0,200 30,100 60,150 90,50 120,140 150,140 180,120 210,140 300,0');
        chart.appendChild(line1);
        chart.appendChild(line2);
        chart.appendChild(polyline);

        document.getElementById('task0-output').appendChild(chart);
    }
})();