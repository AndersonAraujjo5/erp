"use strict";Object.defineProperty(exports, "__esModule", {value: true});const middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  next();
};

exports. default = middlewareGlobal;
