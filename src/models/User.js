const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    sex: {
      type: String,
      default: null,
    },
    hospital: {
      type: String,
      default: null,
    },
    speciality: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: null
    },
    lng: {
      type: Number,
      default: 0,
    },
    lat: {
      type: Number,
      default: 0,
    },
    years: {
      type: Number,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
    cover: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      default: [],
    },
    experiences: {
      type: Array,
      default: [],
    },
    articles: {
      type: Array,
      default: [],
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

module.exports = mongoose.model("User", UserSchema);

// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const SkillSchema = new Schema({
//   _id: Schema.Types.ObjectId, // Identifiant unique de la compétence
//   name: {
//     type: String,
//     required: true,
//   },
//   // Autres champs pertinents pour les compétences
// });

// const ExperienceSchema = new Schema({
//   _id: Schema.Types.ObjectId, // Identifiant unique de l'expérience
//   title: {
//     type: String,
//     required: true,
//   },
//   // Autres champs pertinents pour les expériences
// });

// const UserSchema = new Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     // Champs géographiques distincts pour la longitude et la latitude
//     lng: {
//       type: Number,
//       default: 0,
//     },
//     lat: {
//       type: Number,
//       default: 0,
//     },
//     about: {
//       type: String,
//       default: null,
//     },
//     type: {
//       type: String,
//       default: null,
//     },
//     sex: {
//       type: String,
//       default: null,
//     },
//     hospital: {
//       type: String,
//       default: null,
//     },
//     speciality: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       default: null,
//     },
//     years: {
//       type: Number,
//       default: null,
//     },
//     img: {
//       type: String,
//       default: null,
//     },
//     cover: {
//       type: String,
//       default: null,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     region: {
//       type: String,
//       required: true,
//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     orderNumber: {
//       type: String,
//       required: true,
//     },
//     skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }], // Tableau d'identifiants uniques des compétences
//     experiences: [{ type: Schema.Types.ObjectId, ref: 'Experience' }], // Tableau d'identifiants uniques des expériences
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("User", UserSchema);

