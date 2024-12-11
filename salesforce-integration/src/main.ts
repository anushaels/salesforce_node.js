import { SalesforceClient } from "./salesforceClient";

async function main() {
  const salesforce = new SalesforceClient();
  await salesforce.login();


  const newAccount = {
    Name: "Test Account from Integration",
    Phone: "1234567890",
    Industry: "Technology",
  };

  const createdAccount = await salesforce.create("Account", newAccount);
  console.log("Created Account:", createdAccount);


  const accounts = await salesforce.query("SELECT Id, Name FROM Account");
  console.log("Accounts:", accounts);
}

main().catch((error) => console.error("Application Error:", error));
