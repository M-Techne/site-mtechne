const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    //snap: 1 / (sections.length - 1),
    // markers: true,
  }
});

console.log(1 / (sections.length - 1))

//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1
  }
});



//html

    // <div class="wrapper">
    //   <div class="container scrollx">
    //     <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
    //       <mask id="mask0_0_1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
    //         <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
    //       </mask>
    //       <g mask="url(#mask0_0_1)">
    //         <rect class="mask" y="-49" height="99" fill="black"/>
    //       </g>
    //     </svg>
    //     <h1 id="map-title">jornada do cliente</h1>
    //     <section class="sec1 pin">
    //       <h1>conversa consultiva</h1>
    //       <div class="col">
    //         <p>Momento para entender as necessidades do cliente, apresentar nossa metodologia e garantir confiança desde o início.</p>
    //       </div>
    //     </section>
    //     <section class="sec2 pin">
    //       <h1 class="anim">alinhamento inicial </h1>
    //       <div class="col anim">
    //         <p>Etapa de formalizaçõ, incluindo assinatura de contrato, estabelecimento dos canais de comunicação  e realização de kickoff para definir detalhes do projeto e alinhar expectativas.</p>
    //       </div>
    //     </section>
    //     <section class="sec3 pin">
    //       <h1 class="anim">projetos</h1>
    //       <div class="col anim">
    //         <p>Elaboração de projetos complementares utilizando a metodologia BIM, que integra informações 3D e dados precisos para maior eficiência e qualidade no seu canteiro.</p>
    //       </div>
    //     </section>
    //     <section class="sec3 pin">
    //       <h1 class="anim">compatibilização</h1>
    //       <div class="col anim">
    //         <p>Momento de revisão e verificação de projetos de diferentes disciplinas, garantindo a integração e compatibilidade para evitar conflitos na obra.</p>
    //       </div>
    //     </section>
    //     <section class="sec3 pin">
    //       <h1 class="anim">Reunião de entrega</h1>
    //       <div class="col anim">
    //         <p>Apresentação final dos projetos compatibilizados para a execução para a execução, garantindo uma obra eficiente, econômica e com excelente resultado!</p>
    //       </div>
    //     </section>
    //   </div>
    // </div>