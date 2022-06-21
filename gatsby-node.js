// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("No hubo resultados", result.errors)
  }

  const habitaciones = result.data.allDatoCmsHabitacion.nodes

  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve("./src/components/habitacion.js"),
      context: {
        slug: habitacion.slug,
      },
    })
  })
}
