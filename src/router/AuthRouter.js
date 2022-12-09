import Router from "express";
import { check } from "express-validator";

import authController from "../controller/authController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
// import authMiddleware from "../middleware/authMiddleware";

const authRouter = new Router();


/**
 * @swagger
 * tags:
 * name: Registration
 * description: This is for the registration
 * /auth/registration:
 * post:
 *  tags: [Registration]
 *  requestBody:
 *    require: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *            usename:
 *              type: string
 *              default: user
 *             usename:
 *              type: string
 *              default: password
 *  responses:
 *    default: 
 *      description: This is default response for registration
 */

/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is for the main data
 * /login:
 *  get:
 *      tags: [MainData]
 *      parameters:
 *          - name: page_number
 *            default: 1
 *            in: query
 *            schema:
 *              type: integer
 *          - name: page_length
 *            default: 10
 *            in: query
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          default:
 *              description: This is the default response for it
 */

/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is for the main data
 * /api/login:
 *  post:
 *      tags: [MainData]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              default: coder
 *                          password:
 *                              type: string
 *                              default: coder123
 *      responses:
 *          default:
 *              description: This is the default response for it
 */


/**
 * @swagger
 path:
  /auth/books/:
    post:
      summary: Creates a new book
      tags: [Books]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Book'
      responses:
        "200":
          description: The created book.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Book'
 */



authRouter.post(
  "/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({ min: 4, max: 10 }),
  ],
  authController.registration
);
authRouter.post("/login", authController.login);

export default authRouter;
