import { useFormContext } from "react-hook-form";

const FormInput = ({
    name,
    label,
    required = false,
    ...props
}) => {

    const {

        register,

        formState: { errors },

    } = useFormContext();

    return (

        <div className="space-y-2">

            <label className="text-sm font-medium">

                {label}

                {required && (
                    <span className="text-red-500">
                        *
                    </span>
                )}

            </label>

            <input

                {...register(name)}

                {...props}

                className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    px-4
                "

            />

            {errors[name] && (

                <p className="text-sm text-red-500">

                    {errors[name].message}

                </p>

            )}

        </div>

    );

};

export default FormInput;