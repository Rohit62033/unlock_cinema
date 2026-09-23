import EditableContactField from "../components/EditableContactField";
import SectionTitle from "../components/SectionTitle";


const AccountSection = ({ profile }) => {

  const handleEditMobile = () => {

    // TODO:
    // Open Change Mobile Dialog
    // OTP Verification Flow

    console.log("Edit Mobile");

  };

  const handleEditEmail = () => {

    // TODO:
    // Open Change Email Dialog
    // OTP Verification Flow

    console.log("Edit Email");

  };

  return (

    <section className="space-y-6">

      <SectionTitle
        title="Account Details"
        
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <EditableContactField

          label="Mobile Number"

          value={profile?.mobile}

          verified={profile?.mobileVerified}

          onEdit={handleEditMobile}

        />

        <EditableContactField

          label="Email Address"

          value={profile?.email}

          verified={profile?.emailVerified}

          onEdit={handleEditEmail}

        />

      </div>

    </section>

  );

};

export default AccountSection;