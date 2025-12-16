import { GraphQLClient } from 'graphql-request'

const hygraphEndpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || ''
const hygraphToken = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN || ''

export const hygraphClient = new GraphQLClient(hygraphEndpoint, {
  headers: hygraphToken ? { Authorization: `Bearer ${hygraphToken}` } : {},
})

export const GET_PROJECTS = `
  query GetProjects {
    projects(orderBy: createdAt_DESC) {
      id
      title
      slug
      description
      technologies
      githubUrl
      liveUrl
      coverImage {
        url
      }
      featured
    }
  }
`

export const GET_BLOG_POSTS = `
  query GetBlogPosts {
    posts(orderBy: publishedAtTime_DESC) {
      id
      title
      slug
      excerpt
      publishedAtTime
      coverImage {
        url
      }
      tags
    }
  }
`

export const GET_BLOG_POST = `
  query GetBlogPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      content {
        html
      }
      publishedAtTime
      coverImage {
        url
      }
      tags
    }
  }
`

export const GET_EXPERIENCE = `
  query GetExperience {
    experiences(orderBy: startDate_DESC) {
      id
      company
      role
      description
      startDate
      endDate
      current
      technologies
    }
  }
`

export const GET_PERSONAL_INFO = `
  query GetPersonalInfo {
    personalInfos(first: 1) {
      name
      title
      tagline
      bio
      location
      email
      linkedin
      github
      instagram
      cv {
        url
      }
      skills
    }
  }
`
