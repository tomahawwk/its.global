module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production'){
    return {
      upload: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_ACCESS_KEY_ID'),
          accessKeyId: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET')
          }
        }
      },
      graphql: {
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: false,
          depthLimit: 7,
          amountLimit: 100,
          apolloServer: {
            tracing: false,
          },
        },
      },
    }
  }

  return {
    
  }
}