import { Request, Response } from 'express';
const users: { name: string; email: string }[] = []; // Stockage en mémoire
export const getUsers = (req: Request, res: Response) => {
 res.json({ users });
};

export const addUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  console.log("Corps reçu :", req.body);

  if (!name || !email) {
    return res.status(400).json({ message: "Nom et email requis" });
  }

  const newUser = { name, email };
  users.push(newUser);
  console.log("🛠 Utilisateur ajouté :", newUser);

  res.status(201).json({
    message: `Utilisateur ${name} ajouté avec succès !`,
    user: newUser
  });
};