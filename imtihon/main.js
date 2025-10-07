
    const num1 = +prompt("1-raqamni kiriting");
    const num2 = +prompt("2-raqamni kiriting");
    let answer = +prompt("Quyidagilardan birini tanlang \n 1)Qoshish \n 2)Minus \n 3)Kopyatirish \n 4)Bo'lish");

    let amalText = '';
    let natija = 0;

    if(answer === 1){
      amalText = '+';
      natija = num1 + num2;
      alert(`${num1} + ${num2} `)
    }else if(answer === 2){
      amalText = '-';
      natija = num1 - num2;
      alert(`${num1} - ${num2} `)
    }else if(answer === 3){
      amalText = '×';
      natija = num1 * num2;
      alert(`${num1} * ${num2} `)
    }else if(answer === 4){
      amalText = '÷';
      natija = num1 / num2;
      alert(`${num1} / ${num2} `)
    }else{
      alert("Iltimos shu ro‘yxatdan bor raqamlarni kiriting");
    }


    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="box">
        <div class="box1">${num1}</div>
        <div class="box1">${amalText}</div>
        <div class="box1">${num2}</div>
      </div>
      <button onclick="check()" class="btn">CHECK</button>
      <div class="result">
        Natija: <span id="natija"></span>
      </div>
    `;


    window.check = function(){
      const spanNatija = document.querySelector("#natija");
      spanNatija.textContent = natija;
    };