import { createS3Client } from "mock-aws-s3-v3";
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = createS3Client({
  localDirectory: "s3Mock",
  bucket: "bucket",
});
  await client.send(
    new PutObjectCommand({
      Bucket: 'bucket',
      Key: 'some-file',
      Body: '',
    }),
  );

const response = await getFileFromS3("bucket", "some-file", client);

console.log(response);

async function getFileFromS3(bucket, key, s3Client) {
  const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });
    console.log(JSON.stringify(command, null, 2));
    // console.log(command.
  const response = await s3Client.send(
    command
  );
  return response;
}
