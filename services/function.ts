export const lambda_demo = async(event: any)=>{
   console.log(event)
   return {
    statusCode: 200,
    body: JSON.stringify("hello from cdk lambda")
   }
}