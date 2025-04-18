import { file_api } from "../http";

type fileUpload = {
  accessToken: string;
  file: any;
};

export class ImageService {
  async fileUpload({ accessToken, file }: fileUpload) {
    const answer = await fetch(file_api, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ accessToken, file }),
    });
    const data = await answer.json();
    return data;
  }
  async getFilesList() {
    const answer = await fetch(file_api + "/files", {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await answer.json();
    return data;
  }
  async getFileInfo(fileName: string) {
    const answer = await fetch(file_api + "/" + fileName, {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await answer.json();
    return data;
  }
}
