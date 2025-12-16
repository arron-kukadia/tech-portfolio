import { GraphQLClient } from 'graphql-request'

const hygraphEndpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || ''

export const hygraphClient = new GraphQLClient(hygraphEndpoint)

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
`;

export const GET_BLOG_POSTS = `
  query GetBlogPosts {
    posts(orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      publishedAt
      coverImage {
        url
      }
      tags
    }
  }
`;

export const GET_BLOG_POST = `
  query GetBlogPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      content {
        html
      }
      publishedAt
      coverImage {
        url
      }
      tags
    }
  }
`;

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
`;
