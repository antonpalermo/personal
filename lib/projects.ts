export interface Project {
  title: string
  description: string
  link: string
  source: string
}

export const projects: Project[] = [
  {
    title: 'Rick and Morty API',
    description: 'Consumes Rick and Morty API using React Query with Next',
    link: 'https://rick-and-morty-app-psi.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/c_scale,h_180,q_auto:low,w_370/v1687189039/covers/rick_and_morty_app_ny33iz.jpg'
  },
  {
    title: 'Todo App',
    description: 'Just another typical todo app built using Next with Tailwind',
    link: 'https://todo-app-silk-five.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/c_scale,h_180,q_auto:low,w_370/v1687447226/covers/todo-app_vdvgm2.jpg'
  },
  {
    title: 'Airbnb Clone',
    description: 'React course simple airbnb clone app built using Vite.',
    link: 'https://airbnb-clone-alpha-three.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/c_scale,h_180,q_auto:low,w_370/v1687447480/covers/airbnb-clone_r85c4m.jpg'
  }
]
