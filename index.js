"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adjectives_1 = __importDefault(require("./words/adjectives"));
const nouns_1 = __importDefault(require("./words/nouns"));
function generateRandomName(options = {}) {
    if (options.separator === undefined)
        options.separator = ' ';
    const adjective = adjectives_1.default[Math.floor(Math.random() * adjectives_1.default.length)];
    const noun = nouns_1.default[Math.floor(Math.random() * nouns_1.default.length)];
    return `${capitalize(adjective)}${options.separator}${capitalize(noun)}`;
}
exports.default = generateRandomName;
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvRUFBNEM7QUFDNUMsMERBQWtDO0FBRWxDLFNBQXdCLGtCQUFrQixDQUFDLFVBQW1CLEVBQUU7SUFDOUQsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVM7UUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUU3RCxNQUFNLFNBQVMsR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLG9CQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RSxNQUFNLElBQUksR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0QsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzNFLENBQUM7QUFORCxxQ0FNQztBQUVELFNBQVMsVUFBVSxDQUFDLENBQVM7SUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDIn0=