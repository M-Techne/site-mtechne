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

    const vendas = document.querySelector('#vendas');
    const engenharia = document.querySelector('#engenharia');

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
            setVisible(vendas);
            setVisible(engenharia);

            console.log(selected.value);
        break;

        case 'engenharia':

            setVisible(engenharia);
            setHidden(vendas);

            console.log(engenharia);
        break;

        case 'vendas':
            setHidden(engenharia);
            setVisible(vendas);

            console.log(vendas);
        break;
        
    }
}
   

