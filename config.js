(function() {
    const div = document.getElementById("header");

    // Listen for page scroll
    window.addEventListener("scroll", function() {
        try {
            if (window.scrollY > 10) {
                if (div.id !== "header-scroll") {
                    div.id = "header-scroll";
                }
            } else {
                if (div.id !== "header") {
                    div.id = "header";
                }
            }
        } catch (err) {
            console.error("Error changing div ID:", err);
        }
    });
    
})();

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('radio-all').checked = true; // Sets the 'Medium' radio button as checked
});

document.querySelectorAll('input[name="list-filter"]').forEach(radio => {
    radio.addEventListener('change', listValue);
});

function listValue() {

    const predial = document.querySelector('#predial');
    const condominial = document.querySelector('#condominial');
    const residencial = document.querySelector('#residencial');
    const comercial = document.querySelector('#comercial');

    const selected = document.querySelector('input[name="list-filter"]:checked');

    function setVisible(el){
        el.classList.add('visible');
        el.classList.add('hidden');

        el.classList.remove('hidden');
    }

    function setHidden(el){
        el.classList.add('visible');
        el.classList.add('hidden');

        el.classList.remove('visible');
    }

    switch(selected.value){

        case 'all':
            setVisible(predial);
            setVisible(condominial);
            setVisible(residencial);
            setVisible(comercial);

            console.log(selected.value);
        break;

        case 'predial':

            setVisible(predial);
            setHidden(condominial);
            setHidden(residencial);
            setHidden(comercial);

            console.log(predial);
        break;

        case 'condominial':
            setHidden(predial);
            setVisible(condominial);
            setHidden(residencial);
            setHidden(comercial);

            console.log(condominial);
        break;

        case 'residencial':
            setHidden(predial);
            setHidden(condominial);
            setVisible(residencial);
            setHidden(comercial);

            console.log(residencial);
        break;

        case 'comercial':
            setHidden(predial);
            setHidden(condominial);
            setHidden(residencial);
            setVisible(comercial);

            console.log(comercial);
        break;
    }
}
   

