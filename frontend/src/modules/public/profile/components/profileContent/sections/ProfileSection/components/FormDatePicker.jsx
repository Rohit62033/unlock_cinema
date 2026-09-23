import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormDatePicker = ({
  name,
  label,
  placeholder = "Select a date",
  required = false,
}) => {

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (

    <div className="space-y-2 ">

      <label className="text-sm font-medium">

        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}

      </label>

      <Controller

        control={control}

        name={name}

        render={({ field }) => (

          <Popover>

            <PopoverTrigger asChild>

              <Button
                type="button"
                variant="outline"
                className="
                    w-full
                    justify-between
                    font-normal
                    h-11
                "
              >

                {

                  field.value

                    ? format(field.value, "dd MMM yyyy")

                    : placeholder

                }

                <CalendarIcon className="h-4 w-4 opacity-60" />

              </Button>

            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="w-auto p-1"
            >

              <Calendar

                mode="single"

                selected={field.value}

                onSelect={field.onChange}

                disabled={(date) =>
                  date > new Date()
                }

                initialFocus

              />

            </PopoverContent>

          </Popover>

        )}

      />

      {

        errors[name] && (

          <p className="text-sm text-red-500">

            {errors[name].message}

          </p>

        )

      }

    </div>

  );

};

export default FormDatePicker;