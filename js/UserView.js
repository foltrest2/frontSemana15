class UserView {

    // atributos - más conocido como states

    constructor(user){
        this.user = user;
        this.block = null;
        // Object.freeze(this); Congela el objeto, no se pueden agregar mas variables desde afuera ni cambiar las existentes
        Object.seal(this); // No se pueden agregar mas variables desde afuera pero sí cambiar las existentes
    }

    // métodos

    renderTest = () =>{
        // construir un elemento visual
        let component = document.createElement("div");      //<div></div>
        let nombre = document.createElement("div");           // <p></p>
        let age = document.createElement("div");              // <p></p>
        let blockbtn = document.createElement("button");
        blockbtn.innerHTML = "Block";

        nombre.innerHTML = this.user.name;
        age.innerHTML = this.user.age;

        component.appendChild(nombre);                      //<div><p></p></div>
        component.appendChild(age);                      //<div><p></p><p></p></div>
        component.appendChild(blockbtn);

        component.classList.add("userview"); // <div class="userview"> ... </div>

        if(this.user.blocked){ // Siempre hay que poner el this dentro de la clase
            component.classList.add("blocked");
        } else{
            component.classList.add("nonblocked");
        }

        // En un if, para comparar, si usamos == compara solamente valores, si usamos === compara valores y tipo de dato. Para diferir es !==

        component.id = this.user.id;

        blockbtn.addEventListener("click", this.block);

        return component;
    }

    /*
    block = () =>{
        alert("Bloquear a " + this.user.name);
    }
    */

    render = (container) =>{
        let div = document.createElement("div");

                let html = `<div class="card w-50 cardMargin">
                        <div class="card-body">
                             <h5 class="card-title">${this.user.name}</h5>
                             <p class="card-text">Tiene ${this.user.age} años</p>
                              <a id=${this.user.id} href="#" class="btn btn-danger">Bloquear</a>
                          </div>
                    </div>`
        div.innerHTML = html;
        let card = div.firstChild;

        if(this.user.blocked){
            card.classList.add("text-white")
            card.classList.add("bg-secondary")
        }

        container.appendChild(card);

        let blockBtn = document.getElementById(this.user.id);
        blockBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            alert(this.user.name)
        });
    }
}