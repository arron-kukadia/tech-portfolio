import { GraphQLClient } from 'graphql-request'
import { BlogPost, Experience, PersonalInfo, Project } from '@/lib/types'

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
      excerpt
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
      description {
        html
      }
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
      bio {
        html
      }
      location
      email
      linkedin
      github
      instagram
      cv {
        url
      }
      profileImage {
        url
      }
      skills
    }
  }
`

export const fetchProjects = async (): Promise<Project[]> => {
  const data = await hygraphClient.request<{ projects: Project[] }>(GET_PROJECTS)
  return data.projects
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const data = await hygraphClient.request<{ posts: BlogPost[] }>(GET_BLOG_POSTS)
  return data.posts
}

export const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const data = await hygraphClient.request<{ post: BlogPost }>(GET_BLOG_POST, { slug })
  return data.post
}

export const fetchExperience = async (): Promise<Experience[]> => {
  const data = await hygraphClient.request<{ experiences: Experience[] }>(GET_EXPERIENCE)
  return data.experiences
}

export const fetchPersonalInfo = async (): Promise<PersonalInfo | null> => {
  const data = await hygraphClient.request<{ personalInfos: PersonalInfo[] }>(GET_PERSONAL_INFO)
  return data.personalInfos[0] || null
}
