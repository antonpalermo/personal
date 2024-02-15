export interface Project {
  title: string
  description: string
  link: string
  source: string
  difficulty: 'Basic' | 'Intermidiate' | 'Adavance'
}

export const projects: Project[] = [
  {
    title: 'Rick and Morty API',
    difficulty: 'Intermidiate',
    description: 'Consumes Rick and Morty API using React Query with Next',
    link: 'https://rick-and-morty-app-psi.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/f_auto,q_auto/v1/covers/owvql89fhkyqjeyd7fde'
  },
  {
    title: 'Todo App',
    difficulty: 'Intermidiate',
    description: 'Just another typical todo app built using Next with Tailwind',
    link: 'https://todo-app-silk-five.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/f_auto,q_auto/v1/covers/wocl1rnvuosjdeggwkwv'
  },
  {
    title: 'Airbnb Clone',
    difficulty: 'Basic',
    description: 'React course simple airbnb clone app built using Vite.',
    link: 'https://airbnb-clone-alpha-three.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/f_auto,q_auto/v1/covers/jugldeptyu9o1nzwjw8m'
  },
  {
    title: 'Travel Journal',
    difficulty: 'Basic',
    description: '',
    link: 'https://travel-journal-virid.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/f_auto,q_auto/v1/covers/ybnedebsjnnxxd9gk84m'
  },
  {
    title: 'Business Card',
    difficulty: 'Basic',
    description: '',
    link: 'https://business-card-roan.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/f_auto,q_auto/v1/covers/v85ouuh7cggcztofrtoy'
  },
  {
    title: 'Cat Profiles',
    description: '',
    difficulty: 'Basic',
    link: 'https://contact-app-jade-ten.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/f_auto,q_auto/v1/covers/ohcxyoetw9grlqyt45p7'
  },
  {
    title: 'Ninja Listing',
    difficulty: 'Intermidiate',
    description: '',
    link: 'https://contact-app-jade-ten.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/f_auto,q_auto/v1/covers/xhaytlxlidbjb8hgdrsx'
  },
  {
    title: 'React Facts',
    difficulty: 'Basic',
    description: '',
    link: 'https://react-info-one.vercel.app/',
    source:
      'https://res.cloudinary.com/dbndyylmv/image/upload/f_auto,q_auto/v1/covers/arwxr72looizaagxsepf'
  }
]
