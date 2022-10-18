export default function handler(_, res) {
  res.status(200).send(process.env.ECHO_VALUE);
}
