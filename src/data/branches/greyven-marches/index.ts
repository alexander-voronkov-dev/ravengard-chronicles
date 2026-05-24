import type { StoryBranch } from '@/composables/useStories'
import { silverAlbatross } from './silver-albatross'
import { alienSkies } from './alien-skies'

export const greyvenMarches: StoryBranch = {
  id: 'greyven-marches',
  title: 'Грейвенский Предел',
  tagline: 'Серебряный Альбатрос и его экипаж',
  stories: [silverAlbatross, alienSkies],
  isComingSoon: false,
}
