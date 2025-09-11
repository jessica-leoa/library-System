import request from "supertest";
import app from "../../app";

describe("GET /", () => {

  it("deverá retornar uma mensagem de boas vindas", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toBe("Biblioteca API!");
  });
});