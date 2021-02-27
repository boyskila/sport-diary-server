import { TrainingProgram } from './mock-programs/program'

export interface Comment {
  at: number
  from: User
  text: string
}

export interface BlogPost {
  title: string
  authorName: string
  createdAt: number
  text: string
  comments: Comment[]
}

export type Role = 'trainer' | 'participant'

export interface User {
  name: string
  email: string
  password: string
  gravatar: string
  posts: BlogPost[]
  rating: number
  roles: Role[]
  followers: User[]
  following: User[]
  programs: Record<string, TrainingProgram[]>
}
export const userA: User = {
  name: 'Boyko Lalov',
  email: 'boiskila@gmail.com',
  password: 'asdf',
  gravatar:
    'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y',
  posts: [
    {
      title: 'Some title',
      createdAt: Date.now(),
      authorName: 'boiskila',
      text: '',
      comments: []
    }
  ],
  rating: 100,
  roles: ['trainer', 'participant'],
  followers: [],
  following: [],
  programs: {
    created: [],
    participating: [],
    done: []
  }
}

const users: User[] = [userA]
export default users
