import { graphql, useStaticQuery } from "gatsby"

const useHabitacion = () => {

  const query = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          id
          contenido
          titulo
          slug
          imagen {
            gatsbyImageData(imgixParams: {maxW: 1200})
          }
        }
      }
    }
  `)

  return query.allDatoCmsHabitacion.nodes.map( habitacion => ({
    id: habitacion.id,
    titulo: habitacion.titulo,
    contenido: habitacion.contenido,
    imagen: habitacion.imagen,
    slug: habitacion.slug,
  }))
}

export default useHabitacion