'use strict';

const {Router} = require(`express`);

const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => res.send(`/`));
mainRouter.get(`/register`, (req, res) => res.send(`/register`));
mainRouter.get(`/login`, (req, res) => res.send(`/login`));
mainRouter.get(`/search`, (req, res) => res.end(`/search`));
mainRouter.get(`/categories`, (req, res) => res.end(`/categories`));

module.exports = mainRouter;
