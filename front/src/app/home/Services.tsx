import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="bg-white w-screen relative">
      <div className=" ellipse top-right"></div>
      <div className=" ellipse mid-left"></div>
      <section className="container r  mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-darkblue font-transforma mb-12">
          <p>Lorem ipsum dolor sit amet,</p>
          adipiscing lit Services
        </h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 z-20 relative">
          {[
            "Skill Building",
            "Design & Content Services",
            "Web & App Development",
            "Customized Training Programs",
            "SME & Startup Support",
            "Institutional Partnerships",
          ].map((service) => (
            <Card
              style={{
                boxShadow:
                  " 9.49px 25.3px 63.24px -15.81px rgba(35, 101, 255, 0.2)",
              }}
              key={service}
              className="bg-white/5 hover:bg-white/10 transition-colors"
            >
              <CardContent className="p-6 flex items-center justify-between">
                <span className="text-lightblue">{service}</span>
                <GraduationCap className="h-6 w-6 text-blue-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
