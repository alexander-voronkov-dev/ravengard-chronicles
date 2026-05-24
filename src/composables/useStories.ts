export type InfoCardType = 'default' | 'wide'

export interface InfoCard {
  title: string
  description: string
  image?: string
  type?: InfoCardType
}

export interface GalleryImage {
  src: string
  alt?: string
  title?: string
  description?: string
}

export interface Story {
  id: string
  icon: string
  title: string

  shortDescription: string
  description: string
  roles?: Role[]
  infoCards?: InfoCard[]
  gallery?: GalleryImage[]
  status: StoryStatus
  level?: number
  gameDate?: string
}

export interface Role {
  name: string
  description: string
  quote: string
  recommendedClasses: string[]
  advantages?: string[]
  image?: string
  items?: RoleItem[]
}

export interface RoleItem {
  name: string
  description: string
  image?: string
}

export type StoryStatus = 'active' | 'completed' | 'archived'

import { silverAlbatross } from '@/data/stories/1-silver-albatross'
import { dinnerParty } from '@/data/stories/2-dinner-party'
import { priceOfPerfection } from '@/data/stories/3-price-of-perfection'
import { greyTaiga } from '@/data/stories/4-grey-taiga'

export const useStories = (() => {
  const stories: Story[] = [silverAlbatross, dinnerParty, priceOfPerfection, greyTaiga]

  return () => {
    const getStories = () => stories

    return {
      getStories,
    }
  }
})()
