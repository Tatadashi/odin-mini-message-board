import { body } from "express-validator";
export const messagesList = [
    {
        content: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        content: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];
const alphaNumErr = "must contain only letters and numbers.";
const lengthErr = "must be between 1 and 1000 characters.";
export const messageValidator = [
    body("user")
        .trim()
        .isAlphanumeric()
        .withMessage(`Name ${alphaNumErr}`)
        .isLength({ min: 1, max: 1000 })
        .withMessage(`Name ${lengthErr}`),
    body("content")
        .trim()
        .isLength({ min: 1, max: 1000 })
        .withMessage(`Content ${lengthErr}`),
];
//# sourceMappingURL=messages.js.map