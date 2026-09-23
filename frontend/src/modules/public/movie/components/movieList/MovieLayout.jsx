import MovieContent from "./MovieContent"
import MovieSidebar from "./MovieSidebar"


const MovieLayout = () => {

  return (

    <div className="min-h-screen w-full">

      <div className="
        max-w-7xl
       w-full
        px-4
        py-6
      ">


        <div className="
          grid
          grid-cols-1
          lg:grid-cols-[260px_1fr]
          gap-8
        ">

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <MovieSidebar />
          </aside>

          {/* Content */}
          <main>
            <MovieContent />
          </main>

        </div>

      </div>

    </div>
  )
}

export default MovieLayout