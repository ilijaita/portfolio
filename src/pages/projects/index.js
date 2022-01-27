import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className={styles.projects}>
                    {projects.map(projects => (
                    <Link to={projects.frontmatter.webSite} target="_blank" key={projects.id}>
                        <div>
                        <GatsbyImage image={getImage(projects.frontmatter.thumb)} alt={projects.frontmatter.slug} />
                            <h3> {projects.frontmatter.title }</h3>
                            <p>{ projects.frontmatter.stack }</p>
                        </div>
                    </Link>  
                    ))}
                </div>
                <p>Like what you see? Email me at {contact} for a quote!</p>  
            </div>
            
        </Layout>
    )
}

export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          webSite
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
  
`
