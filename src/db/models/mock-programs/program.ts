import { User, userA } from '../user'
import { preparation } from './preparation'
import { endurance } from './endurance'
import { powerEndurance } from './power-endurance'
import { strength } from './strength'

export type TrainingType =
  | 'power'
  | 'power endurance'
  | 'endurance'
  | 'preparation'
  | 'strength'

export type TrainingDayIntensity = 'low' | 'medium' | 'high'
export type TrainingProgramLevel = 'beginner' | 'advanced'

export interface TrainingTask {
  name: string
  done: boolean
}

export interface TrainingDay {
  name?: string
  /**
   * Training description. Could be translated into tasks as shown below
   */
  description: string
  /**
   * [] stretching 10min
   * [] warm up 15min
   * [] 3 circles x 50 moves
   */
  tasks?: TrainingTask[]
  intensity: TrainingDayIntensity
  /**
   * ex. 10 weeks
   */
  duration?: string
  /**
   * [endurance, long routes, big holds]
   */
  tags?: string[]
  type?: TrainingType
  createdAt?: number
  mediaURL?: string
}

export interface TrainingProgram extends TrainingDay {
  createdFrom: User
  phases: Record<string, TrainingCycle>
  level: TrainingProgramLevel
}

export interface TrainingCycle extends TrainingDay {
  days: TrainingDay[]
  createdFrom: User
}

export const mockProgram: TrainingProgram = {
  name: 'Endurance maker',
  intensity: 'high',
  description: 'bla',
  createdAt: Date.now(),
  createdFrom: userA,
  type: 'power endurance',
  level: 'advanced',
  phases: {
    preparation,
    endurance,
    'power-endurance': powerEndurance,
    strength
  }
}
