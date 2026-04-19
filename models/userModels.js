const getdb = require("../config/db");

const User = {
  getAll: async () => {
    const db = await getdb();
    return db.all("SELECT * FROM users");
  },

  create: async (nome, email) => {
    const db = await getdb();
    const result = await db.run("INSERT INTO users(nome,email) VALUES(?,?)", [
      nome,
      email,
    ]);
    return result.lastID;
  },
  delete: async (id) => {
    const db = await getdb();
    const deleteUser = await db.run("DELETE FROM users WHERE id =?", [id]);
    return deleteUser.changes > 0;
  },
  update: async (id, nome, email) => {
    const db = await getdb();
    const updateUser = await db.run(
      "UPDATE users SET nome=? , email=? WHERE id =?",
      [nome, email, id]
    );
    return updateUser.changes > 0;
  },
};

module.exports = User;
