import prisma from "../prisma.js";

async function getAllUsers(){
    const users = prisma.usuario.findMany();
    return users;
}

export const UserService = {
    getAllUsers
}