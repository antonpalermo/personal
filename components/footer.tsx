export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8">
      <div className="container mx-auto w-full pb-4 md:w-6/12">
        <p className="w-full text-center text-sm">
          Created with love by <strong>Anton Palermo</strong> &copy;{' '}
          {currentYear}
        </p>
      </div>
    </footer>
  )
}
