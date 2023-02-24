import { Sequelize } from "sequelize";
 
const db = new Sequelize('ina_app', 'ina_app', '6c34492d', {
    host: "db4free.net",
    dialect: "mysql"
});
 
export default db;