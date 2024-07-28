const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet"  href="../css/main.css">
  <div class="bg-slate-900  rounded-md p-2 flex flex-col  h-96 w-64 ">
   <div  class="rounded-md relative  ">
    <img src="./coffe-latte-100-arabica.jpg" alt=""  class="rounded-md ">
    <div  class="bg-red-600 w-10 h-10 flex items-center justify-center rounded-full text-yellow-400 absolute -top-5 -right-5">50%</div>
   </div>
   <!-- Info -->
    <div  class="mt-2 tracking-wider text-orange-300">
      <h1  class="text-xl cardTitle"></h1>
      <p>Lorem ipsum, dolor sit amet consectetur nostrum aspernatur sit accusamus.</p>
    </div>
    <!--- Btns ---->
    <div>
      <button class="bg-orange-600 px-1 mt-4 rounded-sm">add to cart</button>
    </div>
  </div>

`

class Card extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    };
    connectedCallback(){
      const cardTitle = this.shadowRoot.querySelector(".cardTitle")
      cardTitle.innerHTML = this.getAttribute("cardTitle")
    }
}


export default Card