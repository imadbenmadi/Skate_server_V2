const sequelize = require("../config/database");

const User = require("./User");
const EmailVerificationToken = require("./EmailVerificationToken");
const RefreshToken = require("./RefreshToken");
const AdminData = require("./AdminData");
const Message = require("./Message");
const RequestCourse = require("./RequestCourse");
const RequestService = require("./RequestService");
const Service = require("./Service");
const Course = require("./Course");
const Blog = require("./Blog");
const Event = require("./Event");
const ServiceCategory = require("./ServiceCategory");
const CourseCategory = require("./CourseCategory");

// Setting up associations
User.hasMany(EmailVerificationToken);
EmailVerificationToken.belongsTo(User);

User.hasMany(RefreshToken);
RefreshToken.belongsTo(User);

User.hasMany(Message, { as: "sentMessages", foreignKey: "senderId" });
Message.belongsTo(User, { as: "sender", foreignKey: "senderId" });

User.hasMany(RequestCourse);
RequestCourse.belongsTo(User);

Course.hasMany(RequestCourse);
RequestCourse.belongsTo(Course);

User.hasMany(RequestService);
RequestService.belongsTo(User);

Service.hasMany(RequestService);
RequestService.belongsTo(Service);

User.hasMany(Notification, { as: "notifications" });
Notification.belongsTo(User);

// Sync database
sequelize
    .sync({ alter: true })
    .then(() => console.log("Database synced"))
    .catch((err) => console.error("Failed to sync database: ", err));

module.exports = {
    User,
    EmailVerificationToken,
    RefreshToken,
    AdminData,
    Message,
    RequestCourse,
    RequestService,
    Service,
    Course,
    Blog,
    Event,
    ServiceCategory,
    CourseCategory,
};
