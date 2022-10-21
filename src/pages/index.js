import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <p>{process.env.GATSBY_ECHO_VALUE}</p>
    </main>
  );
};

export default IndexPage;
