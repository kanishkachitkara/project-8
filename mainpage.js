// let z=document.querySelector(".idk1");
// let l=document.querySelector(".idk");
// let o=document.querySelector("#int1");
// let inputValue = parseInt(z.value);
// let headingValue = parseInt(l.innerHTML);


// o.onclick=function(){mhj()}
//  function mhj(){
//     let sum = inputValue + headingValue;
//     l.innerHTML = sum;

// }
localStorage.getItem('store')
let output = document.querySelector('.idk')
let output2 = document.querySelector('.idk3')
let output3 = document.querySelector('.idk4')
let output4 = document.querySelector('.idk5')
let input = document.querySelector('.idk1')
let btn = document.querySelector('#int1')
let btn2 = document.querySelector('#int2')
// console.log(output.innerText)
btn.addEventListener('click', function () {
    output.innerHTML = Number(output.innerText) + Number(input.value)
    output3.innerHTML = Number(output3.innerText) + Number(input.value)
    output4.innerHTML = Number(output4.innerText) + Number(input.value)
})

btn2.addEventListener('click', function () {
    output2.innerHTML = Number(output2.innerText) + Number(input.value)
})
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
        datasets: [{
            label: '# of Expenditure in $',
            data: [6000255, 1121059, 8000200, 8000001, 5600000, output2.innerHTML ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const kshitiz = document.getElementById('mokshlele');
new Chart(kshitiz, {
    type: 'line',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },

});
const parth = document.getElementById('habhaiha');

new Chart(parth, {
    type: 'bar',
    data: {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40, 50,60 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1


        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const kabir = document.getElementById('kk47');
new Chart(kabir, {
    type: 'pie',
    data:{
        labels: [
          'travel',
          'shopping',
          'food',
          'entertainment'
        ],
        datasets: [{
          label: 'pie chart',
          data: [30, 20, 26,24],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'black'
          ],
          hoverOffset: 4
        }]
      },
    });




