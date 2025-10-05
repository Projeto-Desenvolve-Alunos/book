import prisma from "../prisma.js";

async function getAllUsers(){
    const users = prisma.usuario.findMany();
    return users;
}

async function getUserById(id: number){
    const user = await prisma.usuario.findUnique({
        where: {id}
    });
    return user
}

async function addUser(data: {
        nome: string,
        email: string,
        senha: string,
    }) {
    const novoUsuario = await prisma.usuario.create({
        data:{
            nome: data.nome,
            email: data.email,
            senha: data.senha
        }
    })
    
    return novoUsuario;
}

export const UserService = {
    getAllUsers,
    getUserById,
    addUser
}