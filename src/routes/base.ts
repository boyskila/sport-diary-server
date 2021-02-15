import Home from '../shared/Home'
import Auth from '../shared/Auth'
import Programs from '../shared/Programs'
import { TrainingProgram } from '../models/mock-programs/program'

const baseRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: 'programs',
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

export default baseRoutes
