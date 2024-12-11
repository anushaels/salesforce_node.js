import { Connection } from "jsforce";
import * as dotenv from "dotenv";

dotenv.config();

export class SalesforceClient {
  private conn: Connection;

  constructor() {
    this.conn = new Connection({
      loginUrl: process.env.SALESFORCE_LOGIN_URL,
    });
  }

  async login(): Promise<void> {
    try {
      await this.conn.login(
        process.env.SALESFORCE_USERNAME!,
        process.env.SALESFORCE_PASSWORD! + process.env.SALESFORCE_SECURITY_TOKEN!
      );
      console.log("Successfully logged into Salesforce");
    } catch (error) {
      console.error("Error logging into Salesforce:", error);
      throw error;
    }
  }

  async query(queryString: string): Promise<any> {
    try {
      return await this.conn.query(queryString);
    } catch (error) {
      console.error("Error querying Salesforce:", error);
      throw error;
    }
  }

  async create(objectType: string, data: Record<string, any>): Promise<any> {
    try {
      const result = await this.conn.sobject(objectType).create(data);
      console.log(`Successfully created ${objectType}:`, result);
      return result;
    } catch (error) {
      console.error(`Error creating ${objectType}:`, error);
      throw error;
    }
  }
}
