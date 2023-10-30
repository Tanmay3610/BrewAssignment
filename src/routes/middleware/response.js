module.exports = (_req, res, next) => {
  res.invalid = ({ msg, code = null }) =>
    res.status(200).json({ ok: false, err: msg || 'Invalid Parameters', data: null, code });

  res.failure = ({ msg }) =>
    res
      .status(200)
      .json({ ok: false, err: msg || "Something is wrong! We're looking into it.", data: null });

  res.unauthorized = ({ msg }) =>
    res.status(401).json({ ok: false, err: msg || 'Authentication Failed', data: null });

  res.success = ({ data = {} }) => res.status(200).json({ ok: true, err: null, data });
  next();
};
