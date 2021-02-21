import Home from '../client/Home'
import Auth from '../client/Auth'
import Programs from '../client/Programs'
import { TrainingProgram } from '../models/mock-programs/program'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/programs',
    component: Programs,
    load: (): Promise<TrainingProgram[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([{ name: 'foo' }] as TrainingProgram[])
        }, 1000)
      })
    }
  }
]
