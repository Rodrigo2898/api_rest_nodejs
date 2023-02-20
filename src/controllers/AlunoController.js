import Aluno from '../models/Aluno';

class AlunoController {
  // index
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  // store
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch(e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          erros: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(aluno);
    } catch(e) {
      return res.status(400).json({
        erros: e.erros.map((err)=> err.message),
      });
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          erros: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }

      return res.json(aluno);
    } catch(e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          erros: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }

      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch(e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

}

export default new AlunoController();
