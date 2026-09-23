import { Controller, useFormContext } from "react-hook-form";

const FormRadioGroup = ({
  name,
  label,
  options,
  required = false,
}) => {

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (

    <div className="space-y-3">

      <label className="text-sm font-medium text-slate-700">

        {label}

        {required && (
          <span className="text-red-500 ml-1">*</span>
        )}

      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (

          <div className="flex no-scrollbar gap-2 overflow-auto">

            {

              options.map((option) => {

                const active =
                  field.value === option.value;

                return (

                  <button

                    key={option.value}

                    type="button"

                    onClick={() => field.onChange(option.value)}

                    className={`
                        h-11
                        min-w-[82px]
                        rounded-lg
                        border
                        px-5
                        text-sm
                        font-medium
                        transition-all

                        ${
                          active
                            ? "border-red-500 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-gray-400"
                        }
                    `}

                  >

                    {option.label}

                  </button>

                );

              })

            }

          </div>

        )}
      />

      {errors[name] && (

        <p className="text-sm text-red-500">

          {errors[name].message}

        </p>

      )}

    </div>

  );

};

export default FormRadioGroup;