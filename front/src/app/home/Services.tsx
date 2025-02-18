import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="bg-white w-screen relative">
      <div className=" ellipse top-right z-0"></div>
      <div className=" ellipse mid-left z-0"></div>
      <section className="container  mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-darkblue font-transforma mb-12">
          <p>We provide on-demand services </p>
          for in-demand skills
        </h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8  relative">
          {[
            "Design services",
            "SME and startup support",
            "Institutional partnerships",
            "Marketing partnerships",
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
