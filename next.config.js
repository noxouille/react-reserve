// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://noxouille:ansiSakurios60@reactreserve-tmkte.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "thisisarandomstringcanbeanything",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/ferdipratama/image/upload",
    STRIPE_SECRET_KEY: "sk_test_eCZmWe8SAkNqtnE9Se83bS2O00NSEtZgrx",
  },
};
