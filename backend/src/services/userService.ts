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

async function updateUser(
  id: number,
  data: { nome?: string; email?: string; senha?: string }
) {
  const user = await prisma.usuario.findUnique({ where: { id } });
  if (!user) throw new Error("Usuário não encontrado");

  const updatedUser = await prisma.usuario.update({
    where: { id },
    data,
  });

  return updatedUser;
}

export const deleteUser= async (id: number) => {
  // Verifica se o usuário existe
  const usuario = await prisma.usuario.findUnique({
    where: { id },
  });

  if (!usuario) {
    throw new Error("Usuário não encontrado");
  }

  // Deleta o usuário
  await prisma.usuario.delete({
    where: { id },
  });

  return { message: "Usuário deletado com sucesso" };
};

export const UserService = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}