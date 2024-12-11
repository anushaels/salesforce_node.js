"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const salesforceClient_1 = require("./salesforceClient");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const salesforce = new salesforceClient_1.SalesforceClient();
        yield salesforce.login();
        // Create a new Account
        const newAccount = {
            Name: "Test Account from Integration",
            Phone: "1234567890",
            Industry: "Technology",
        };
        const createdAccount = yield salesforce.create("Account", newAccount);
        console.log("Created Account:", createdAccount);
        // Query accounts to verify
        const accounts = yield salesforce.query("SELECT Id, Name FROM Account");
        console.log("Accounts:", accounts);
    });
}
main().catch((error) => console.error("Application Error:", error));
