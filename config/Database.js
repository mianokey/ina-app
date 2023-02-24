import { Sequelize } from "sequelize";
 
const db = new Sequelize('nusetaco_inapp', 'nusetaco_admin', 'NUSETAADMIN2022..', {
    host: "pld109.truehost.cloud ",
    dialect: "mysql"
});
 
export default db;