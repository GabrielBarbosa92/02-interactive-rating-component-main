    
    const generalContainer = document.querySelector('.general__container');
    const thankYouContainer = document.querySelector('.thank-you__container')
    const btn = document.querySelectorAll('.btn');
    let btnContent = undefined;
    const heroBtn = document.getElementById('hero');
    const rating = document.getElementById('rating');
    const heroThankBtn = document.getElementById('hero2');

    heroBtn.disabled = true;

    btn.forEach(button => {
        button.addEventListener('click', function() {
            btnContent = button.innerHTML;
            heroBtn.disabled = false;
        });
    });

    heroBtn.addEventListener('click', function() {
        generalContainer.classList.add('hidden');
        thankYouContainer.classList.remove('hidden');
        rating.innerHTML = btnContent;
    });

    heroThankBtn.addEventListener('click', function() {
        thankYouContainer.classList.add('hidden');
        generalContainer.classList.remove('hidden');
        heroBtn.disabled = true; 
    });