import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rodrigo',
      sobrenome: 'Feitosa',
      email: 'rodrigo@gmail.com',
      idade: 24,
      peso: 98.5,
      altura: 1.83,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
