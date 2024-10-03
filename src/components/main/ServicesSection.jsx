import Card from "../partials/ServicesSection/Card";

export default function ServicesSection() {
    return (
        <div className="flex gap-8 mx-10 my-5">
            <Card image='website_development.png' title='Website Development' />
            <Card image='website_development.png' title='Website Development' />
            <Card image='website_development.png' title='Website Development' />
            <Card image='website_development.png' title='Website Development' />
        </div>
    )
}