const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const LinkedInProfileModel = sequelize.define("LinkedInProfileModel", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  followerCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  connectionCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bioLine: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

console.log(LinkedInProfileModel === sequelize.models.LinkedInProfileModel);
module.exports = { LinkedInProfileModel };
