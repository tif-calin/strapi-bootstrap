module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c2ca852b7688003562c4ebb282d80c86'),
  },
});
