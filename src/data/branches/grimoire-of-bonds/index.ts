import type { StoryBranch } from '@/composables/useStories'
import { dinnerParty } from './dinner-party'

export const grimoireOfBonds: StoryBranch = {
  id: 'grimoire-of-bonds',
  title: 'Гримуар Уз',
  tagline: 'Тайны и интриги Вингфорда',
  stories: [dinnerParty],
  isComingSoon: true,
}
