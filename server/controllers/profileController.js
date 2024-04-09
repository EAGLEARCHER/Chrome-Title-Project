const { LinkedInProfileModel } = require("../models/profileModel");
const { StatusCodes } = require("http-status-codes");

const profileController = async (req, res) => {
  try {
    const {
      name,
      location,
      about,
      bio,
      followerCount,
      connectionCount,
      bioLine,
    } = req.body;
    console.log(LinkedInProfileModel);
    const newProfile = await LinkedInProfileModel.create({
      name,
      location,
      about,
      bio,
      followerCount,
      connectionCount,
      bioLine,
    });
    console.log(newProfile);
    res.status(StatusCodes.CREATED).json({
      message: "LinkedIn profile data saved successfully",
      profile: newProfile,
    });
  } catch (error) {
    console.error("Error saving LinkedIn profile data:", error);

    if (error.name === "SequelizeValidationError") {
      // Handle validation errors
      res.status(StatusCodes.BAD_REQUEST).json({
        error: "Validation error",
        details: error.errors.map((e) => e.message),
      });
    } else if (error.name === "SequelizeUniqueConstraintError") {
      // Handle unique constraint errors
      res.status(StatusCodes.CONFLICT).json({
        error: "Duplicate record",
        details: error.errors.map((e) => e.message),
      });
    } else {
      // Handle other errors
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: "Internal server error",
      });
    }
  }
};
module.exports = { profileController };
