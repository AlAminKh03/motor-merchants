import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col-reverse grid-cols-1 lg:grid lg:gap-10  lg:grid-cols-2 items-center justify-center">
        <div className="lg:pt-10 pt-2 px-10">
          <p className="underline text-7xl pl-4 lg:pl-12 text-indigo-600">
            Who
            <br />
            we are
          </p>
          <div className="lg:pt-20 pt-5 text-gray-700 text-sm">
            <p className=" mr-4 lg:mr-20">
              Motor Merchants is a visionary automobile company that has been
              operating since 2001. The company is committed to developing
              innovative solutions that cater to the needs and desires of its
              customers. One of the ways that Motor Merchants stands out from
              its competitors is by offering a wide range of vehicles that are
              both stylish and practical. From fuel-efficient compact cars to
              luxury SUVs, Motor Merchants has a vehicle to suit every taste and
              budget.
            </p>
            <br />
            <p>
              In addition to producing high-quality cars, Motor Merchants has
              also been working on developing cutting-edge technology that
              enhances the driving experience. For example, the company has been
              investing in research on self-driving cars, which has the
              potential to reduce accidents and make driving more convenient and
              efficient. Motor Merchants has also been exploring alternative
              fuel sources, such as hydrogen and electric power, to reduce the
              environmental impact of its vehicles.
            </p>
          </div>
        </div>
        <div className="relative pt-0 lg:pt-0 mb-5 lg:mb-20 mx-auto">
          <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative lg:absolute top-2 lg:-top-20   lg:-left-28 flex items-center justify-center ">
            <Image
              src={"/about-2.svg"}
              alt="about image"
              fill
              className=" relative lg:absolute   z-10    "
            />
          </div>
          <div className=" hidden lg:block w-[400px] h-[270px] lg:w-[350px] lg:h-[270px] bg-indigo-100 "></div>
        </div>
      </div>
      <div className="flex flex-col lg:grid grid-cols-1  lg:gap-10  lg:grid-cols-2 items-center justify-center mb-10">
        <div className="relative pt-0 lg:pt-0 mb-5 lg:mb-20 mx-auto">
          <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative lg:absolute top-2 lg:-top-20   lg:-left-28 flex items-center justify-center ">
            <Image
              src={"/environment.svg"}
              alt="about image"
              fill
              className=" relative lg:absolute   z-10    "
            />
          </div>
          <div className=" hidden lg:block w-[400px] h-[270px] lg:w-[350px] lg:h-[270px] bg-indigo-100 "></div>
        </div>
        <div className="lg:pt-10 pt-2 px-10">
          <p className="underline text-5xl lg:text-7xl  lg:pl-12 text-indigo-600">
            our motto:
            <br />
            environment
          </p>
          <div className="lg:pt-20 pt-5 text-gray-700 text-sm">
            <p className="mr-4 lg:mr-20">
              As we become increasingly aware of the impact of human activities
              on the environment, it is important that we take steps to reduce
              our carbon footprint and minimize our impact on the planet. One
              way that we can do this is by being more mindful of the materials
              that we use in our daily lives. In the case of the automobile
              industry, this means being more careful about the tires that we
              use.
            </p>
            <br />
            <p>
              At our company, we understand the importance of protecting the
              environment, which is why we use 100% recyclable tires in all of
              our vehicles. Unlike traditional tires, which are made from
              non-renewable resources and can take decades to decompose in
              landfills, our tires are designed to be fully recyclable at the
              end of their life cycle.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="underline text-7xl text-center text-indigo-600">
            Our goal
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/goal.png" alt="goal pic" width={500} height={500} />
        </div>
        <div className="lg:pt-10 pt-2 px-10 mb-10">
          <div className=" text-gray-700 text-sm">
            <p className="mr-20">
              At our company, our goal is to provide our customers with the best
              possible products and services while also being socially
              responsible and environmentally sustainable. We believe that a
              successful business must take into account the needs of all
              stakeholders, including customers, employees, shareholders, and
              the wider community. To achieve our goal, we are committed to
              continuous improvement in all areas of our operations. We strive
              to maintain the highest standards of quality and safety in our
              products and services, while also minimizing our environmental
              impact and contributing to the well-being of the communities in
              which we operate.
            </p>
            <br />
            <p>
              Finally, we are committed to being a responsible and sustainable
              business. We are mindful of our impact on the environment, and we
              take steps to minimize our carbon footprint, reduce waste, and
              promote sustainability in everything we do. Overall, our goal is
              to be a leader in our industry and a responsible member of the
              global community. We believe that by working together with our
              stakeholders and embracing innovation, sustainability, and social
              responsibility, we can achieve great things and create a better
              world for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
