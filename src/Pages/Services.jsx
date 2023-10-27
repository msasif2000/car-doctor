import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="space-y-4">
                <h3 className="text-center text-4xl font-bold  text-[#FF3811]">Our Service Area</h3>
                <p className="lg:w-1/2 md:px-16 px-10 mx-auto text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-6 px-2">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;