import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at?: Date;
  updated_at?: Date;

  constructor(id: string = uuidV4(), admin = false) {
    if (id) {
      this.id = uuidV4();
    }
    this.name = "";
    this.email = "";
    this.admin = admin;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
