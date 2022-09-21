const body = document.body;
let tilted = false;
const toggleTilt = function(){
    tilted = !tilted;
    if (tilted)
    body.classList.add('details');
    elsebody.classList.remove('details');
};

const statsCalc = () => {
    const barAll = document.querySelectorAll('.bar span');
    const resultHolder = document.querySelector('#result');
    const barValueArr = [];
    barAll.forEach(item => {
        const barValue = +(item.textContent);
        barValueArr.push(barValue);
    });
 const result = barValueArr.reduce((acc, item) =>  {
     return acc + item
 } , 0);
 resultHolder.textContent = result;
}
body.addEventListener('click', toggleTilt);
body.addEventListener('touchstart', toggleTilt);
if (location.pathname.match(/fullcpgrid/i))
 setTimeout(toggleTilt, 1000);
 statsCalc();