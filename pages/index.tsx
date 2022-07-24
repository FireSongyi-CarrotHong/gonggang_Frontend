import type { NextPage } from 'next';
import dotenv from "dotenv";

dotenv.config();
console.log("너 엔브자나", process.env.REST_API_KEY);

const Home: NextPage = () => <div />;

export default Home;
