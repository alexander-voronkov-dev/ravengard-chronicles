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

export interface StoryBranch {
  id: string
  title: string
  tagline?: string
  stories: Story[]
  isComingSoon?: boolean
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

import { greyvenMarches } from '@/data/branches/greyven-marches'
import { grimoireOfBonds } from '@/data/branches/grimoire-of-bonds'

export const useStories = (() => {
  const branches: StoryBranch[] = [greyvenMarches, grimoireOfBonds]

  return () => {
    const getBranches = () => branches
    const getStories = () => branches.flatMap((b) => b.stories)

    return {
      getBranches,
      getStories,
    }
  }
})()
