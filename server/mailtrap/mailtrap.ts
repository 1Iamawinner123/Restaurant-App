import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";
dotenv.config({ path: "server/mailtrap/.env" });
 
export const client = new MailtrapClient({token: process.env.MAILTRAP_API_TOKEN! });

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Deepa MernStack",
};
