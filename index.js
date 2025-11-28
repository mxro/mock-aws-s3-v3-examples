import { createS3Client } from "mock-aws-s3-v3";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = createS3Client({
  localDirectory: "s3Mock",
  bucket: "bucket",
});

const response = await getFileFromS3("bucket", "some-file", client);

console.log(response);

async function getFileFromS3(bucket, key, s3Client) {
  const response = await s3Client.send(
    new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    }),
  );
  return response;
}
