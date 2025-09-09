import { Request, Response } from 'express'; 
import userService from '../factories/userInjectionFactory';
import { AuthUser } from '../core/usecases/AuthUser';
import { MongoUserRepository } from '../infra/database/mongoUserRepository'; 

export const welcomeUser = async (_: Request, res: Response): Promise<void> => {
  res.status(200).json('API de Usuários!');
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, login,password } = req.body;

  try {
    const newUser = await userService.createUser({ name, email, login, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar criar novo usuário', error });
  }
};

export const listUsers = async (_: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar listar usuários', error });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await userService.getUserById(id);
    if (!user) {
      res.status(404).json(`O usuário com ID ${id} não foi encontrado.`);
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuário', error });
  }
}

const authUser = new AuthUser(new MongoUserRepository()); 

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const token = await authUser.execute({ email, password });

    res.status(200).json({ token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: "Token inválido ou ausente" });
      return;
    }

    const user = await userService.getUserById(userId);

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
      login: user.login,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados do usuário", error });
  }
};