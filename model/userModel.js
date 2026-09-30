import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb"
import { dynamo } from "../config/database.js"


const TABLE_NAME = "user"

export const storeUser = async(data)=>{
    const param={
    TableName : TABLE_NAME,
    Item: data
    }
    await dynamo.send(new PutCommand(param))
}


export const findUser = async(email)=>{
    const param={
        TableName: TABLE_NAME,
        FilterExpression: "email = :email",

        ExpressionAttributeValues: {

            ":email": email

        }

    }

    const result = await dynamo.send(new ScanCommand(param));

    return result.Items[0];

}