import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query {
    allBallerzCsv(limit:10) {
      nodes {
        ID
        Image
        Role
        Team
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const orderNodes = data.allBallerzCsv.nodes;
  return (<Layout>
    <Seo title="Home" />
    <h1>{orderNodes.length}</h1>
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image Url</th>
            <th>Role</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {orderNodes.map(node => (
            <tr key={node.id}>
              <td>{node.ID}</td>
              <td>{node.Image}</td>
              <td>{node.Role}</td>
              <td>{node.Team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>);
};

export default IndexPage
