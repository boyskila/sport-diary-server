import { TrainingCycle } from './program'
import { userA } from '../user'

export const preparation: TrainingCycle = {
  intensity: 'high',
  duration: '2 weeks',
  description: '',
  createdAt: Date.now(),
  createdFrom: userA,
  type: 'preparation',
  days: [
    {
      name: 'Running',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Core',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Stretching',
      description: '',
      intensity: 'low'
    },
    {
      name: 'Running',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Fitness',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Core',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Stretching',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Pull ups',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Core',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Fitness',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Running',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Pull ups',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Fitness',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Stretching',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Running',
      description: '',
      intensity: 'medium'
    },
    {
      name: 'Pull ups',
      description: '',
      intensity: 'medium'
    }
  ]
}
