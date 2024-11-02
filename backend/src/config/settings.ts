import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) {
  new Error("Missing .env file");
}

const settings = {
  root: {
    PORT: process.env.PORT || 8000,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    url: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?sslmode=require`,
  },
};

export default settings;