import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as dynamo from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import {Runtime, FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // const s3demo =  new s3.Bucket(this,"mybucket101234",{
    //   bucketName: "demobucket002556",  
    //   versioned: true,
    //   publicReadAccess: false
    // })


    // const dynammodb = new dynamo.Table(this,'mynewDynamoDB',{
    //   partitionKey: {name:'id',type: dynamo.AttributeType.NUMBER},
    //   readCapacity: 3,
    //   writeCapacity: 3,
    //   tableName: "demoTable"
    // })

    const lambdademo = new lambda.NodejsFunction(this,'myLambda2',{
      handler: 'lambda_demo',
      runtime: Runtime.NODEJS_18_X,
      entry: path.join(__dirname, `../../services/function.ts`),
      functionName: 'mynewfunction2',
    })

    const cloudwatchdemo =  new cloudwatch.Alarm(this,"mycloudwatch",{
      evaluationPeriods:1,
      threshold:1,
      metric:lambdademo.metricErrors(),
      alarmName:"lamda alram demo"
    })
  }
}
