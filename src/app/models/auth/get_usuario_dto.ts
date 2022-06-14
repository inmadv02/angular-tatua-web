export interface GetUsuarioDTO {
    id: string;
    nombre: string;
    email: string;
    photo: string;
    password: string;
    rol: string;
    citas: [];
    publicaciones: [];
    favoritos: [];

}