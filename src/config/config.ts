export const config = {
    'username': "databasedevv",
    'password': "database1234",
    'database': "databasedevv",
    'host': "databasedev.cr0vgbjlkgoq.us-west-2.rds.amazonaws.com",
    'dialect': 'postgres',
    'aws_region': process.env.AWS_REGION,
    'aws_profile': process.env.AWS_PROFILE,
    'aws_media_bucket': process.env.AWS_BUCKET,
    'url': process.env.URL,
    'jwt': {
      'secret': process.env.JWT_SECRET,
    },
  };
  