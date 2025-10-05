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

export const UserService = {
    getAllUsers,
    getUserById
}