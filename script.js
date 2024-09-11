// For navbar
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const item = document.querySelector('.items');
const fillit = document.querySelectorAll('.fillit');


// For Navbar
menuBtn.addEventListener('click', () => {
    item.style.transform = 'translateY(0)';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    item.style.transform = 'translateY(-120%)';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})

// for contact
const btn = document.querySelector('.nhihounga');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let counter = 0;
    const forminput = document.querySelectorAll('input:required');
    const textareaa = document.querySelector('#description');
    forminput.forEach((e) => {
        if (e.value == "") {
            e.style.border = '2px solid red';
            counter++;
        }
        if (textareaa.value == '') {
            textareaa.style.border = '2px solid red';
            counter++;
        }
    })
    if (counter > 0) {
        alert('Please enter all field');
    }
    

    // ************************************//

    else{
        // Write here your code for making contact working
        console.log('temp')
        const userName=document.querySelector('#name');
        const userEmail=document.querySelector('#email');
        const message=document.querySelector('#description');

        const messageBody= `Full Name: ${userName.value}<br> Email: ${userEmail.value}<br> Message: ${message.value}`

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "shivam20332@iiitd.ac.in",
            Password : "9501B28ABB8371378B2D12B14C94556D68B6",
            To : 'shivam20332@iiitd.ac.in',
            From : "shivam20332@iiitd.ac.in",
            Subject : "This is the subject",
            Body : messageBody
        }).then(
          message => alert(message)
        );
    }
})

// for lightmode
const sun = document.querySelector('#sun');
const moon = document.querySelector('#dark-moon');
sun.addEventListener('click', () => {
    sun.style.display = 'none';
    moon.style.display = 'block';
    document.body.classList.toggle('light-mode');
})
moon.addEventListener('click', () => {
    moon.style.display = 'none';
    sun.style.display = 'block';
    document.body.classList.toggle('light-mode');
})

