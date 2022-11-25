// const request = require('supertest')
// const app = require('./index')

// describe("POST /api/auth/login", () => {
//     let body = {
//         email: "",
//         password: ""
//     }
    
//     describe("Check your email to active your account", () => {
//         test("Check your email to active your account", async () => {
//             body = {
//                 email: "Check_your_email@gmail.com",
//                 password: "111"
//             }
//             const response = await request(app).post("/api/auth/login").send(body)
//             expect(response.text).toBe('Check your email to active your account')
//         })
//     })

//     describe("Email or password is incorect", () => {
//         test("Email or password is incorect", async () => {
//             body = {
//                 email: "client@gmail.com",
//                 password: "sqjdlqjmdkùlkjl"
//             }
//             const response = await request(app).post("/api/auth/login").send(body)
//             expect(response.text).toBe('Email or password is incorect')
//         })
//     })

//     describe("Fill the all fields to login", () => {
//         test("Fill the all fields to login", async () => {
//             body = {
//                 email: "",
//                 password: ""
//             }
//             const response = await request(app).post("/api/auth/login").send(body)
//             expect(response.text).toBe('Fill the all fields to login')
//         })
//     })
// })