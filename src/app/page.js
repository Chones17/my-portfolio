import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Section from "@/components/Section";

const sections = [
  {
    id: 1,
    component: <Value />,
    heading: "Value",
    subheading:
      "Translating business goals into scalable solutions, strong systems, and cross-functional alignment.",
  },
  {
    id: 2,
    component: <About />,
    heading: "About",
    subheading:
      "Blending technical expertise with strategic leadership to deliver real-world impact.",
  },
  {
    id: 3,
    component: <Value />,
    heading: "Portfolio",
    subheading: "Portfolio",
  },
  {
    id: 4,
    component: <Value />,
    heading: "Contact Me",
    subheading:
      "Have a question or opportunity in mind? I am always open to a good conversation.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16 py-10 max-w-7xl bg-stone-900">
      <header>
        <Navigation />
        <Hero />
      </header>
      <main>
        {sections.map((item) => {
          return (
            <Section
              key={item.id}
              heading={item.heading}
              subheading={item.subheading}
              contents={item.component}
            />
          );
        })}
      </main>
      <footer className="bg-stone-500">{/* Add items in footer */}</footer>
    </div>
  );
}
