export class CreateUsuarioDTO {
    nombre: string;
    email: string;
    password: string;
    password2: string;

    constructor(){
        this.nombre = "";
        this.email = "";
        this.password = "";
        this.password2 = "";
    }
}