exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
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
  `);

  data.allBallerzCsv.nodes.forEach(n => {
    const slug = n.ID
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/ballerz-profile.js`),
      context: { slug: slug },
    })
  })
}
