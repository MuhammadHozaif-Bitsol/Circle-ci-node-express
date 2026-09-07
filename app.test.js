const request = require("supertest");
const app = require("./app");

describe("API Route Tests", () => {
  it("GET / should return 200 and success status", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Express server is live!");
  });

  it("GET /api/users should return a list of users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
