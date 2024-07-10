import StudentAmbassador from "@/components/GetInvolved/StudentAmbassador";
import StudentAmbassadorOne from "@/components/GetInvolved/StudentAmbassadorOne";
import StudentAmbassadorTwo from "@/components/GetInvolved/StudentAmbassadorTwo";
import WhoWeAre from "@/components/WhoWeAre";

const StudentAmbassadorPage = () => {
  return (
    <>
      <WhoWeAre title={"STUDENT AMBASSADOR PROGRAM"} description={"Are you a student? Do you have the desire to do good and make an impact not only on your campus but around the world? We got you!"} />
      <StudentAmbassador />
      <StudentAmbassadorOne />
      <StudentAmbassadorTwo />
      {/* <GetInvolvedGallery /> */}
    </>
  );
};

export default StudentAmbassadorPage;
