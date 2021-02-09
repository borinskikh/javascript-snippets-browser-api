(() => {
    const main = document.getElementById('main');
    const task = document.createElement('div');
    task.setAttribute('id', 'task5');
    task.setAttribute('class', 'task');
    const button = document.createElement('input');
    button.setAttribute('id', 'task5-button');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'submit');
    const chartWrapper = document.createElement('div');
    chartWrapper.setAttribute('id', 'task5-chart');
    chartWrapper.setAttribute('class', 'chart');
    button.addEventListener('click', () => { addChart() });

    task.appendChild(button);
    task.appendChild(chartWrapper);
    main.appendChild(task);

    function addChart() {
        const chart = document.createElement('svg');
        chart.setAttribute('class', 'chart');
        chart.setAttribute('height', '200');
        chart.setAttribute('width', '300');
        const line1 = document.createElement('line');
        line1.setAttribute('style', 'stroke: rgb(0,0,0); stroke-width: 2;');
        line1.setAttribute('x1', '0');
        line1.setAttribute('y1', '0');
        line1.setAttribute('x2', '0');
        line1.setAttribute('y2', '200');
        const line2 = document.createElement('line');
        line2.setAttribute('style', 'stroke: rgb(0,0,0); stroke-width: 2;');
        line2.setAttribute('x1', '0');
        line2.setAttribute('y1', '200');
        line2.setAttribute('x2', '300');
        line2.setAttribute('y2', '200');
        const polyline = document.createElement('polyline');
        polyline.setAttribute('style', 'fill: none; stroke: rgb(255,0,0); stroke-width: 3');
        polyline.setAttribute('points', '0,200 30,100 60,150 90,50 120,140 150,140 180,120 210,140 300,0');
        chart.appendChild(line1);
        chart.appendChild(line2);
        chart.appendChild(polyline);
        document.getElementById('task5-chart').appendChild(chart);
    }
})();