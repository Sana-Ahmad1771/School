import React from "react";
import Header from "../components/common/Header";
import AcademicsHero from "../components/pages/academics/AcademicsHero";
import Footer from "../components/common/Footer";
import AcademicSubjects from "../components/pages/academics/AcademicsSubjects";
import CoCurricular from "../components/pages/academics/CoCurricular";

const page = () => {
  return (
    <>
      <Header />
      <AcademicsHero />
      <AcademicSubjects />
      <CoCurricular />
      <Footer />
    </>
  );
};

export default page;
