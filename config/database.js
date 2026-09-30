import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { S3Client } from "@aws-sdk/client-s3";


const region = "eu-north-1";

// connect aws

const credentials = {
accessKeyId: process.env.AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY

};


const connection = new DynamoDBClient({
    region,
    credentials
});


export const dynamo = DynamoDBDocumentClient.from(connection);


// Create connection to S3

export const s3 = new S3Client({
    region,
    credentials
});