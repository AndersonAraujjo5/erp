import User from "../models/User";
class UserController{
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e,
      });
    }
  }
}

export default new UserController();
