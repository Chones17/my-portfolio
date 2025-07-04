export default function Section({ heading, subheading, contents }) {
  return (
    <section className="py-10 px-2">
      <hgroup className="flex flex-col text-center">
        <h2 className="text-2xl">{heading}</h2>
        {subheading === "Portfolio" ? (
          <h3 className="my-2 text-stone-500">{subheading}</h3>
        ) : (
          <h3 className="mt-2 mb-6 text-stone-500">{subheading}</h3>
        )}
      </hgroup>
      {contents}
    </section>
  );
}
