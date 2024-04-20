import mysql from "mysql2/promise";

const getConnction = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mini_mail",
    password: "Ravi123@",
  });

  return connection;
};

export default getConnction;
