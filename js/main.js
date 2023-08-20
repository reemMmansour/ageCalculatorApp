
// let getDay = document.getElementsByName ('day');
// let getMonth = document.getElementsByName ('month');
// let getYear = document.getElementsByName ('year');
let buttonSubmit = document.querySelector ('button');
let validationMessageDay = document.querySelector('.validation-day');
let validationMessageMonth = document.querySelector('.validation-month');
let validationMessageYear = document.querySelector('.validation-year');

let requiredDay = document.querySelector('.required-day');
let requiredMonth = document.querySelector('.required-month');
let requiredYear = document.querySelector('.required-year');

let validData = document.querySelector('.valid-data');


buttonSubmit.addEventListener ('click', function(event) {

    let date = new Date();
    let getBirthDay = document.querySelector ('#day').value;
    let getBirthMonth = document.querySelector('#month').value;
    let getBirthYear = document.querySelector('#year').value;

    // let birthDate = new Date(`${getBirthDay}/${getBirthMonth}/${getBirthYear}`);

console.log(typeof(getBirthDay))
    let regExDay = /\d{1}|(12)[1-9]/;
    let regExMonth = /\d{2}|3(01)/;
    let regExYear = /\d\d\d\d/;

    console.log(regExDay.test(getBirthDay));
    console.log(regExMonth.test(getBirthMonth));
    console.log(regExYear.test(getBirthYear));

    // if (regEx.test(getBirthDay) === true && regEx.test(getBirthMonth) === true &&  regEx.test(getBirthYear) === true  ) {
    
    // }

 

    // if (day === 'null' || month === 'null' || year === 'null') {
    //     validationMessageYear

    // }

    // if (day ===   ){
    //     validationMessageDay.style.cssText = `
    //     display: block;
    //     `;
    // }


    let year = date.getFullYear() - getBirthYear;
    let month = (date.getMonth() + 1) - getBirthMonth;
    let day = date.getDay() - getBirthDay;

    if ( day < 0 ) {
        month--;
        day += 30;
    }
    

    if ( month < 0 ) {
        year--;
        month += 12;
    }

    document.getElementById(`resule-year`).innerHTML = year;
    document.getElementById(`resulte-month`).innerHTML = month;
    document.getElementById(`resulte-day`).innerHTML = day;
    
    event.preventDefault();

});

