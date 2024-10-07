import Card from "../partials/ServicesSection/Card";

export default function ServicesSection() {
  return (
    <div className="my-32">
      <h1 className="purple-dark text-center">Our Services</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-24 mx-32 my-10">
        <Card
          image="web_dev.png"
          title="Web Development"
          desc="We create responsive, high-performance websites tailored to your business needs, ensuring seamless user experiences across all devices."
        />
        <Card
          image="mobile_dev.png"
          title="Web Development"
          desc="We create responsive, high-performance websites tailored to your business needs, ensuring seamless user experiences across all devices."
        />
        <Card
          image="cloud_solutions.png"
          title="Web Development"
          desc="We create responsive, high-performance websites tailored to your business needs, ensuring seamless user experiences across all devices."
        />
      </div>
    </div>
  );
}
