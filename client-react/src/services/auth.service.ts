import { auth_api } from "../http";

type AuthUser = {
  email: string;
  password: string;
  name?: string;
};

class AuthService {
  async login({ email, password }: AuthUser): Promise<any> {
    const answer = await fetch(auth_api + "/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await answer.json();
    localStorage.setItem("token", JSON.stringify(data));
    return data;
  }

  async users(): Promise<any> {
    const answer = await fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await answer.json();
    console.log(data);
    return data;
  }

  async refresh() {}

  async registration({ email, name, password }: AuthUser): Promise<any> {
    const answer = await fetch(auth_api + "/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await answer.json();
    console.log(data);
    localStorage.setItem("token", JSON.stringify(data));
    return data;
  }
}

export default new AuthService();
