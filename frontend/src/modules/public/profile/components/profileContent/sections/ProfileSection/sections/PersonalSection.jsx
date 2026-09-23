import FormDatePicker from "../components/FormDatePicker";
import FormInput from "../components/FormInput";
import FormRadioGroup from "../components/FormRadioGroup";


const PersonalSection = () => {

  return (

    <section className="space-y-8">

      <h2 className="text-2xl font-semibold">

        Personal Details

      </h2>

      <div className="grid grid-cols-2 gap-6">

        <FormInput
          name="firstName"
          label="First Name"
          required
        />

        <FormInput
          name="lastName"
          label="Last Name"
          required
        />

        <FormDatePicker

          name="dob"

          label="Birthday (Optional)"

          placeholder="dd-mm-yyyy"

        />

        <FormRadioGroup

          name="gender"

          label="Identity"

          options={[
            {
              label: "Woman",
              value: "female",
            },
            {
              label: "Man",
              value: "male",
            },
            {
              label: "Other",
              value: "other",
            },
          ]}

        />

        <FormRadioGroup

          name="married"

          label="Married?"

          options={[
            {
              label: "Yes",
              value: true,
            },
            {
              label: "No",
              value: false,
            },
          ]}

        />

      </div>

    </section>

  );

};

export default PersonalSection;