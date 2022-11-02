"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adjectives_1 = __importDefault(require("./words/adjectives"));
const nouns_1 = __importDefault(require("./words/nouns"));
function default_1() {
    return generateRandomName();
}
exports.default = default_1;
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}
function generateRandomName() {
    const adjective = adjectives_1.default[Math.floor(Math.random() * adjectives_1.default.length)];
    const noun = nouns_1.default[Math.floor(Math.random() * nouns_1.default.length)];
    return `${capitalize(adjective)} ${capitalize(noun)}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvRUFBNEM7QUFDNUMsMERBQWtDO0FBRWxDO0lBQ0UsT0FBTyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQVMsVUFBVSxDQUFDLENBQVM7SUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsU0FBUyxrQkFBa0I7SUFDekIsTUFBTSxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUUsTUFBTSxJQUFJLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdELE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDeEQsQ0FBQyJ9