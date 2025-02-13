interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface SortOption {
  value: string
  name: string
}
export type { Post, SortOption }
