const AboutMovie = ({ description }) => {

  
  return (
    <section className="hidden md:block border-b pb-10">

      <h2 className="text-4xl font-bold">
        About the movie
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-9 max-w-5xl font-medium">
        {description}
      </p>

    </section>
  );
};

export default AboutMovie;