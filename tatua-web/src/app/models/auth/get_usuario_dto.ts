export interface GetUsuarioDTO {
    id: string;
    nombre: string;
    email: string;
    foto: string;
    password: string;
    rol: string;
    citas: [];
    publicaciones: [];
    favoritos: [];

}