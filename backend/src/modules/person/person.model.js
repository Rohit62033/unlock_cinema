import mongoose from "mongoose";

const personSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      slug: {
        type: String,
        unique: true,
      },

      profileImage: String,

      coverImage: String,

      bio: String,

      birthDate: Date,

      professions: [
        {
          type: String,
          enum: [
            "ACTOR",
            "DIRECTOR",
            "WRITER",
            "PRODUCER",
            "SINGER",
            "MUSIC_DIRECTOR",
          ],
        },
      ],

      socialLinks: {
        instagram: String,
        twitter: String,
      },

      isActive: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );

personSchema.index({
  name: "text",
});

export const Person =
  mongoose.model(
    "Person",
    personSchema
  );