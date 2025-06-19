import express from "express";
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];
export const getReq = (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
};
//# sourceMappingURL=home.js.map