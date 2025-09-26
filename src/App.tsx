import React from 'react';
import { NavBar } from "./components/NavBar.tsx";
import { Banner } from "./components/Banner.tsx";
import { Experiences } from "./components/Experiences.tsx";
import { Projects } from "./components/Projects.tsx";
import { ContactForm } from "./components/ContactForm.tsx";
import { Footer } from "./components/Footer.tsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): React.JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experiences />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
