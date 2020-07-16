// const path = require("path")

// // create pages dynamically
// exports.createPages = async ({ gra phql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       blogs: allStrapiBlogs {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)

//   result.data.blogs.nodes.forEach(blog => {
//     createPage({
//       path: `/blogs/${blog.slug}`,
//       component: path.resolve(`src/templates/blog-template.js`),
//       context: {
//         slug: blog.slug,
//       },
//     })
//   })
// }
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-template.js`)

    const result = await graphql(`{
        blogs: allStrapiBlogs {
        nodes {
        slug
    }
}}`)


    result.data.blogs.nodes.forEach(blog => {
        createPage({
            path: `/blogs/${blog.slug}`,
            component: blogPostTemplate,
            context: {
                slug: blog.slug,
            },
        })
    })
}