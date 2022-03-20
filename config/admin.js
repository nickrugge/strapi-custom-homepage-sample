module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd97515580e7f4fa3cd7cfa03711991b1'),
  },
});
