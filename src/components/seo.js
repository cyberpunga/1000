import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            author
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = site.siteMetadata.title
  const metaImage = image || site.siteMetadata.url + site.siteMetadata.image
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={metaTitle ? `%s | ${metaTitle}` : null}
      meta={[
        { name: `description`, content: metaDescription },
        // Facebook meta
        { property: `og:title`, content: `${title} | ${metaTitle}` },
        { property: `og:description`, content: metaDescription },
        { property: `og:image`, content: metaImage },
        { property: `og:url`, content: site.siteMetadata.url },
        { property: `og:type`, content: `website` },
        // Twitter Card data
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:title`, content: `${title} | ${metaTitle}` },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:image`, content: metaImage },
        { name: `twitter:site`, content: site.siteMetadata.author },
        { name: `twitter:creator`, content: site.siteMetadata.author || `` },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
