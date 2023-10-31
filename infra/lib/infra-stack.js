"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraStack = void 0;
const cdk = require("aws-cdk-lib");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
const s3 = require("aws-cdk-lib/aws-s3");
const dynamo = require("aws-cdk-lib/aws-dynamodb");
const lambda = require("aws-cdk-lib/aws-lambda");
class InfraStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const s3demo = new s3.Bucket(this, "mybucket101234", {
            bucketName: "demobucket002556",
            versioned: true,
            publicReadAccess: false
        });
        const dynammodb = new dynamo.Table(this, 'mynewDynamoDB', {
            partitionKey: { name: 'id', type: dynamo.AttributeType.NUMBER },
            readCapacity: 3,
            writeCapacity: 3,
            tableName: "demoTable"
        });
        const lambdademo = new lambda.Function(this, 'myLambda', {
            handler: 'lambda_function.lambda_demo',
            runtime: lambda.Runtime.NODEJS_18_X,
            code: lambda.Code.fromAsset('../services/'),
            functionName: 'mynewfunction'
        });
    }
}
exports.InfraStack = InfraStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZyYS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMsOENBQThDO0FBQzlDLHlDQUF5QztBQUN6QyxtREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3ZDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEIsTUFBTSxNQUFNLEdBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQztZQUNsRCxVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsZ0JBQWdCLEVBQUUsS0FBSztTQUN4QixDQUFDLENBQUE7UUFHRixNQUFNLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQztZQUN0RCxZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQztZQUMzRCxZQUFZLEVBQUUsQ0FBQztZQUNmLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxXQUFXO1NBQ3ZCLENBQUMsQ0FBQTtRQUVGLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsVUFBVSxFQUFDO1lBQ3JELE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1lBQzNDLFlBQVksRUFBRSxlQUFlO1NBQzlCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQXhCRCxnQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XG5pbXBvcnQgKiBhcyBzMyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMnO1xuaW1wb3J0ICogYXMgZHluYW1vIGZyb20gJ2F3cy1jZGstbGliL2F3cy1keW5hbW9kYic7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCBjbGFzcyBJbmZyYVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIGNvbnN0IHMzZGVtbyA9ICBuZXcgczMuQnVja2V0KHRoaXMsXCJteWJ1Y2tldDEwMTIzNFwiLHtcbiAgICAgIGJ1Y2tldE5hbWU6IFwiZGVtb2J1Y2tldDAwMjU1NlwiLCAgXG4gICAgICB2ZXJzaW9uZWQ6IHRydWUsXG4gICAgICBwdWJsaWNSZWFkQWNjZXNzOiBmYWxzZVxuICAgIH0pXG5cblxuICAgIGNvbnN0IGR5bmFtbW9kYiA9IG5ldyBkeW5hbW8uVGFibGUodGhpcywnbXluZXdEeW5hbW9EQicse1xuICAgICAgcGFydGl0aW9uS2V5OiB7bmFtZTonaWQnLHR5cGU6IGR5bmFtby5BdHRyaWJ1dGVUeXBlLk5VTUJFUn0sXG4gICAgICByZWFkQ2FwYWNpdHk6IDMsXG4gICAgICB3cml0ZUNhcGFjaXR5OiAzLFxuICAgICAgdGFibGVOYW1lOiBcImRlbW9UYWJsZVwiXG4gICAgfSlcblxuICAgIGNvbnN0IGxhbWJkYWRlbW8gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ215TGFtYmRhJyx7XG4gICAgICBoYW5kbGVyOiAnbGFtYmRhX2Z1bmN0aW9uLmxhbWJkYV9kZW1vJyxcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xOF9YLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuLi9zZXJ2aWNlcy8nKSxcbiAgICAgIGZ1bmN0aW9uTmFtZTogJ215bmV3ZnVuY3Rpb24nXG4gICAgfSlcbiAgfVxufVxuIl19