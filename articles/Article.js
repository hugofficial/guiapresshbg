const Sequilize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
  title: {
    type: Sequilize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequilize.STRING,
    allowNull: false
  },
  body: {
    type: Sequilize.TEXT,
    allowNull: false
  }
});

Category.hasMany(Article); //Uma categoria tem muitos artigos
Article.belongsTo(Category); //Um artigo pertence a uma categoria

//Article.sync({ force: true }); //Cria tabela no BD

module.exports = Article;
