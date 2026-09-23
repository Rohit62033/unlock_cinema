const SectionTitle = ({
  title,
  description,
}) => {

  return (

    <div>

      <h2
        className="
          text-3xl
          font-semibold
          tracking-tight
        "
      >

        {title}

      </h2>

      {

        description && (

          <p
            className="
              mt-1
              text-sm
              text-slate-500
            "
          >

            {description}

          </p>

        )

      }

    </div>

  );

};

export default SectionTitle;