import Image from "next/image";
import React from "react";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="mt-20 lg:mt-0">
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-12 lg:col-span-8 flex items-center border border-b-black border-t-0 border-r-0 border-l-0  ">
          <div className="mb-3">
            <div className="flex flex-col-reverse items-center lg:grid grid-cols-12 ">
              <div className="col-span-4 flex flex-col items-center justify-center">
                <div className="hidden lg:block pb-5 border border-b-gray-300 border-t-0 border-r-0 border-l-0">
                  <p className="text-lg font-bold text-black tracking-tighter">
                    Electric and Autonomous Vehicles: The Future of Driving
                  </p>
                  <p className="text-sm text-gray-600 tracking-tighter">
                    The automotive industry is in the midst of a significant
                    shift towards electric ...
                  </p>
                  <p className="mt-2 text-xs text-indigo-700 ">5 mins read</p>
                  <div className=" flex  justify-end items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="underline cursor-pointer text-gray-600 text-xs"
                    >
                      Read the full article
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal ">
                      <div className="modal-box relative bg-yellow-50">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          Electric and Autonomous Vehicles: The Future of
                          Driving
                        </h3>
                        <p className="py-4 text-black">
                          The automotive industry is in the midst of a
                          significant shift towards electric and autonomous
                          vehicles. These technological advancements have the
                          potential to transform the way we drive, making our
                          roads safer, greener, and more efficient. Electric
                          vehicles (EVs) are becoming more popular as people
                          look for eco-friendly alternatives to traditional
                          gas-powered cars. Meanwhile, autonomous vehicles (AVs)
                          promise to revolutionize the way we commute, with the
                          potential to reduce accidents, increase productivity,
                          and reduce congestion. <br /> One of the most
                          significant advantages of EVs is their environmental
                          impact. They produce zero emissions and have the
                          potential to reduce our dependence on fossil fuels.
                          EVs also require less maintenance and have fewer
                          moving parts than traditional cars, which means lower
                          operating costs. Meanwhile, AVs have the potential to
                          eliminate human error on the road, which is the
                          leading cause of accidents. AVs can also optimize
                          traffic flow and reduce congestion, making our roads
                          safer and more efficient.
                          <br /> While these technologies are still in their
                          early stages, we can expect to see more and more
                          electric and autonomous vehicles on our roads in the
                          coming years. The development of charging
                          infrastructure and improvements in battery technology
                          will make EVs more accessible to consumers. Similarly,
                          advancements in machine learning and sensor technology
                          will make AVs safer and more reliable.
                        </p>
                        <p className="text-xs text-gray-500 text-right italic">
                          Zabed/ COO of motor merchants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:pt-5 mb-5 lg:mb-0 pt-2 px-20 lg:px-0">
                  <p className=" text-xl lg:text-lg font-bold text-black tracking-tighter">
                    Connected Cars and New Energy Sources
                  </p>
                  <p className=" text-lg lg:text-sm text-gray-600 tracking-tighter">
                    {" "}
                    Innovations in the Automotive Industry&quot; As the
                    automotive industry evolves, we&apos;re seeing a significant
                    shift ...
                  </p>

                  <p className="mt-2 text-xs text-indigo-700 ">3 mins read</p>

                  <div className=" flex  justify-end items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="underline cursor-pointer text-gray-600 text-xs"
                    >
                      Read the full article
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal ">
                      <div className="modal-box relative bg-yellow-50">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          So what is this MOBILE MACHANICS !?
                        </h3>
                        <p className="py-4 text-black">
                          Innovations in the Automotive Industry As the
                          automotive industry evolves, we&apos;re seeing a
                          significant shift towards connected cars and new
                          energy sources. Connected cars use advanced sensors
                          and data analytics to provide drivers with real-time
                          information about their vehicles, such as fuel
                          efficiency, engine performance, and safety alerts.
                          These technologies can also improve the overall
                          driving experience, with features like voice-activated
                          controls, entertainment systems, and advanced
                          navigation tools. New energy sources are also
                          emerging, with alternative fuels like hydrogen,
                          biofuels, and natural gas gaining popularity.
                          <br /> These fuels have the potential to reduce
                          greenhouse gas emissions and improve air quality,
                          making them an attractive option for eco-conscious
                          consumers. Additionally, new energy storage
                          technologies like solid-state batteries and hydrogen
                          fuel cells are being developed, which could make
                          electric vehicles more practical and affordable. The
                          integration of these technologies has the potential to
                          revolutionize the way we interact with our vehicles.
                          Connected cars can provide us with personalized
                          driving experiences, with real-time traffic updates
                          and predictive maintenance alerts.
                          <br /> Meanwhile, new energy sources can reduce our
                          environmental impact and help us move towards a more
                          sustainable future. In conclusion, the future of
                          automobiles looks exciting, with a range of new
                          technologies and trends emerging. From electric and
                          autonomous vehicles to connected cars and new energy
                          sources, we can expect to see significant advancements
                          in the automotive industry in the coming years. These
                          innovations have the potential to improve our driving
                          experiences, reduce our environmental impact, and make
                          our roads safer and more efficient.
                        </p>
                        <p className="text-xs text-gray-500 text-right italic">
                          Al Amin Khan/ CEO of motor merchants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-8 -mr-3 lg:border lg:border-b-0 lg:border-t-0 lg:border-r-gray-300 border-r-0 lg:border-l-0  px-5">
                <Image
                  src="/blog.jpg"
                  alt="blog post"
                  width={600}
                  height={600}
                />
                <p className="text-xs text-gray-500 text-right">
                  Al Amin Khan/ CEO of motor merchants
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden lg:block lg:col-span-4 border border-b-black border-t-0 border-r-0 border-l-0 mt-5 ">
          <div className="mb-4 ml-4">
            <Image src="/blog-3.jpg" alt="blog post" width={250} height={250} />
            <p className="text-xs text-gray-500 text-right pr-10">
              Shahriar/ publisher
            </p>
          </div>
          <div className="mb-5 px-3">
            <p className="text-lg font-bold text-black tracking-tighter">
              Revolutionizing the Automotive Industry
            </p>
            <p className="text-sm text-gray-600 tracking-tighter">
              {" "}
              he future of automobiles is exciting, with significant
              advancements in technology and sustainability. The integration of
              electric ....
            </p>
            <p className="mt-2 text-xs text-indigo-700 ">2 mins read</p>
            <div className=" flex  justify-end items-center">
              <label
                htmlFor="my-modal-3"
                className="underline cursor-pointer text-gray-600 text-xs"
              >
                Read the full article
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal ">
                <div className="modal-box relative bg-yellow-50">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    Revolutionizing the Automotive Industry: Innovations and
                    Trends to Watch Out For
                  </h3>
                  <p className="py-4 text-black">
                    The future of automobiles is exciting, with significant
                    advancements in technology and sustainability. The
                    integration of electric and autonomous vehicles, connected
                    cars, and alternative energy sources has the potential to
                    improve driving experiences, reduce environmental impact,
                    and make our roads safer and more efficient. As these
                    innovations continue to evolve, we can expect to see a
                    revolution in the automotive industry.
                    <br /> Summary: &apos;Green Driving: The Role of Electric
                    and Alternative Energy Vehicles&apos; As the world moves
                    towards a more sustainable future, electric and alternative
                    energy vehicles are becoming increasingly popular. The
                    environmental benefits of these vehicles, such as zero
                    emissions and reduced dependence on fossil fuels, make them
                    an attractive option for eco-conscious consumers. In
                    addition, connected cars provide real-time information about
                    vehicle performance, further contributing to green driving
                    practices.
                    <br /> The emergence of new energy storage technologies and
                    advancements in machine learning and sensor technology are
                    making these vehicles more practical and accessible to the
                    general public.
                  </p>
                  <p className="text-xs text-gray-500 text-right italic">
                    Shariar/ publisher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-12 lg:col-span-8 flex items-center border border-b-black border-t-0 border-r-0 border-l-0  ">
          <div className="mb-3">
            <div className="flex flex-col-reverse items-center lg:grid grid-cols-12 ">
              <div className="col-span-4 flex flex-col items-center justify-center">
                <div className="hidden lg:block pb-5 border border-b-gray-300 border-t-0 border-r-0 border-l-0">
                  <p className="text-lg font-bold text-black tracking-tighter">
                    Electric and Autonomous Vehicles: The Future of Driving
                  </p>
                  <p className="text-sm text-gray-600 tracking-tighter">
                    The automotive industry is in the midst of a significant
                    shift towards electric ...
                  </p>
                  <p className="mt-2 text-xs text-indigo-700 ">5 mins read</p>
                  <div className=" flex  justify-end items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="underline cursor-pointer text-gray-600 text-xs"
                    >
                      Read the full article
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal ">
                      <div className="modal-box relative bg-yellow-50">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          Electric and Autonomous Vehicles: The Future of
                          Driving
                        </h3>
                        <p className="py-4 text-black">
                          The automotive industry is in the midst of a
                          significant shift towards electric and autonomous
                          vehicles. These technological advancements have the
                          potential to transform the way we drive, making our
                          roads safer, greener, and more efficient. Electric
                          vehicles (EVs) are becoming more popular as people
                          look for eco-friendly alternatives to traditional
                          gas-powered cars. Meanwhile, autonomous vehicles (AVs)
                          promise to revolutionize the way we commute, with the
                          potential to reduce accidents, increase productivity,
                          and reduce congestion. <br /> One of the most
                          significant advantages of EVs is their environmental
                          impact. They produce zero emissions and have the
                          potential to reduce our dependence on fossil fuels.
                          EVs also require less maintenance and have fewer
                          moving parts than traditional cars, which means lower
                          operating costs. Meanwhile, AVs have the potential to
                          eliminate human error on the road, which is the
                          leading cause of accidents. AVs can also optimize
                          traffic flow and reduce congestion, making our roads
                          safer and more efficient.
                          <br /> While these technologies are still in their
                          early stages, we can expect to see more and more
                          electric and autonomous vehicles on our roads in the
                          coming years. The development of charging
                          infrastructure and improvements in battery technology
                          will make EVs more accessible to consumers. Similarly,
                          advancements in machine learning and sensor technology
                          will make AVs safer and more reliable.
                        </p>
                        <p className="text-xs text-gray-500 text-right italic">
                          Zabed/ COO of motor merchants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:pt-5 mb-5 lg:mb-0 pt-2 px-20 lg:px-0">
                  <p className=" text-xl lg:text-lg font-bold text-black tracking-tighter">
                    Connected Cars and New Energy Sources
                  </p>
                  <p className=" text-lg lg:text-sm text-gray-600 tracking-tighter">
                    {" "}
                    Innovations in the Automotive Industry&apos; As the
                    automotive industry evolves, we&apos;re seeing a significant
                    shift ...
                  </p>

                  <p className="mt-2 text-xs text-indigo-700 ">3 mins read</p>

                  <div className=" flex  justify-end items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="underline cursor-pointer text-gray-600 text-xs"
                    >
                      Read the full article
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal ">
                      <div className="modal-box relative bg-yellow-50">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          So what is this MOBILE MACHANICS !?
                        </h3>
                        <p className="py-4 text-black">
                          Innovations in the Automotive Industry&apos; As the
                          automotive industry evolves, we&apos;re seeing a
                          significant shift towards connected cars and new
                          energy sources. Connected cars use advanced sensors
                          and data analytics to provide drivers with real-time
                          information about their vehicles, such as fuel
                          efficiency, engine performance, and safety alerts.
                          These technologies can also improve the overall
                          driving experience, with features like voice-activated
                          controls, entertainment systems, and advanced
                          navigation tools. New energy sources are also
                          emerging, with alternative fuels like hydrogen,
                          biofuels, and natural gas gaining popularity.
                          <br /> These fuels have the potential to reduce
                          greenhouse gas emissions and improve air quality,
                          making them an attractive option for eco-conscious
                          consumers. Additionally, new energy storage
                          technologies like solid-state batteries and hydrogen
                          fuel cells are being developed, which could make
                          electric vehicles more practical and affordable. The
                          integration of these technologies has the potential to
                          revolutionize the way we interact with our vehicles.
                          Connected cars can provide us with personalized
                          driving experiences, with real-time traffic updates
                          and predictive maintenance alerts.
                          <br /> Meanwhile, new energy sources can reduce our
                          environmental impact and help us move towards a more
                          sustainable future. In conclusion, the future of
                          automobiles looks exciting, with a range of new
                          technologies and trends emerging. From electric and
                          autonomous vehicles to connected cars and new energy
                          sources, we can expect to see significant advancements
                          in the automotive industry in the coming years. These
                          innovations have the potential to improve our driving
                          experiences, reduce our environmental impact, and make
                          our roads safer and more efficient.
                        </p>
                        <p className="text-xs text-gray-500 text-right italic">
                          Al Amin Khan/ CEO of motor merchants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-8 -mr-3 lg:border lg:border-b-0 lg:border-t-0 lg:border-r-gray-300 border-r-0 lg:border-l-0  px-5">
                <Image
                  src="/blog-4.jpg"
                  alt="blog post"
                  width={600}
                  height={600}
                />
                <p className="text-xs text-gray-500 text-right">
                  Al Amin Khan/ CEO of motor merchants
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden lg:block lg:col-span-4 border border-b-black border-t-0 border-r-0 border-l-0 mt-5 ">
          <div className="mb-4 ml-4">
            <Image src="/blog-5.jpg" alt="blog post" width={250} height={250} />
            <p className="text-xs text-gray-500 text-right pr-10">
              Shahriar/ publisher
            </p>
          </div>
          <div className="mb-5 px-3">
            <p className="text-lg font-bold text-black tracking-tighter">
              Revolutionizing the Automotive Industry
            </p>
            <p className="text-sm text-gray-600 tracking-tighter">
              {" "}
              he future of automobiles is exciting, with significant
              advancements in technology and sustainability. The integration of
              electric ....
            </p>
            <p className="mt-2 text-xs text-indigo-700 ">2 mins read</p>
            <div className=" flex  justify-end items-center">
              <label
                htmlFor="my-modal-3"
                className="underline cursor-pointer text-gray-600 text-xs"
              >
                Read the full article
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal ">
                <div className="modal-box relative bg-yellow-50">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    Revolutionizing the Automotive Industry: Innovations and
                    Trends to Watch Out For
                  </h3>
                  <p className="py-4 text-black">
                    The future of automobiles is exciting, with significant
                    advancements in technology and sustainability. The
                    integration of electric and autonomous vehicles, connected
                    cars, and alternative energy sources has the potential to
                    improve driving experiences, reduce environmental impact,
                    and make our roads safer and more efficient. As these
                    innovations continue to evolve, we can expect to see a
                    revolution in the automotive industry.
                    <br /> Summary: &apos;Green Driving: The Role of Electric
                    and Alternative Energy Vehicles&apos; As the world moves
                    towards a more sustainable future, electric and alternative
                    energy vehicles are becoming increasingly popular. The
                    environmental benefits of these vehicles, such as zero
                    emissions and reduced dependence on fossil fuels, make them
                    an attractive option for eco-conscious consumers. In
                    addition, connected cars provide real-time information about
                    vehicle performance, further contributing to green driving
                    practices.
                    <br /> The emergence of new energy storage technologies and
                    advancements in machine learning and sensor technology are
                    making these vehicles more practical and accessible to the
                    general public.
                  </p>
                  <p className="text-xs text-gray-500 text-right italic">
                    Shariar/ publisher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-12 lg:col-span-8 flex items-center border border-b-black border-t-0 border-r-0 border-l-0  ">
          <div className="mb-3">
            <div className="flex flex-col-reverse items-center lg:grid grid-cols-12 ">
              <div className="col-span-4 flex flex-col items-center justify-center">
                <div className="hidden lg:block pb-5 border border-b-gray-300 border-t-0 border-r-0 border-l-0">
                  <p className="text-lg font-bold text-black tracking-tighter">
                    Electric and Autonomous Vehicles: The Future of Driving
                  </p>
                  <p className="text-sm text-gray-600 tracking-tighter">
                    The automotive industry is in the midst of a significant
                    shift towards electric ...
                  </p>
                  <p className="mt-2 text-xs text-indigo-700 ">5 mins read</p>
                  <div className=" flex  justify-end items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="underline cursor-pointer text-gray-600 text-xs"
                    >
                      Read the full article
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal ">
                      <div className="modal-box relative bg-yellow-50">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          Electric and Autonomous Vehicles: The Future of
                          Driving
                        </h3>
                        <p className="py-4 text-black">
                          The automotive industry is in the midst of a
                          significant shift towards electric and autonomous
                          vehicles. These technological advancements have the
                          potential to transform the way we drive, making our
                          roads safer, greener, and more efficient. Electric
                          vehicles (EVs) are becoming more popular as people
                          look for eco-friendly alternatives to traditional
                          gas-powered cars. Meanwhile, autonomous vehicles (AVs)
                          promise to revolutionize the way we commute, with the
                          potential to reduce accidents, increase productivity,
                          and reduce congestion. <br /> One of the most
                          significant advantages of EVs is their environmental
                          impact. They produce zero emissions and have the
                          potential to reduce our dependence on fossil fuels.
                          EVs also require less maintenance and have fewer
                          moving parts than traditional cars, which means lower
                          operating costs. Meanwhile, AVs have the potential to
                          eliminate human error on the road, which is the
                          leading cause of accidents. AVs can also optimize
                          traffic flow and reduce congestion, making our roads
                          safer and more efficient.
                          <br /> While these technologies are still in their
                          early stages, we can expect to see more and more
                          electric and autonomous vehicles on our roads in the
                          coming years. The development of charging
                          infrastructure and improvements in battery technology
                          will make EVs more accessible to consumers. Similarly,
                          advancements in machine learning and sensor technology
                          will make AVs safer and more reliable.
                        </p>
                        <p className="text-xs text-gray-500 text-right italic">
                          Zabed/ COO of motor merchants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:pt-5 mb-5 lg:mb-0 pt-2 px-20 lg:px-0">
                  <p className=" text-xl lg:text-lg font-bold text-black tracking-tighter">
                    Connected Cars and New Energy Sources
                  </p>
                  <p className=" text-lg lg:text-sm text-gray-600 tracking-tighter">
                    {" "}
                    Innovations in the Automotive Industry&apos; As the
                    automotive industry evolves, we&apos;re seeing a significant
                    shift ...
                  </p>

                  <p className="mt-2 text-xs text-indigo-700 ">3 mins read</p>

                  <div className=" flex  justify-end items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="underline cursor-pointer text-gray-600 text-xs"
                    >
                      Read the full article
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal ">
                      <div className="modal-box relative bg-yellow-50">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          So what is this MOBILE MACHANICS !?
                        </h3>
                        <p className="py-4 text-black">
                          Innovations in the Automotive Industry&apos; As the
                          automotive industry evolves, we&apos;re seeing a
                          significant shift towards connected cars and new
                          energy sources. Connected cars use advanced sensors
                          and data analytics to provide drivers with real-time
                          information about their vehicles, such as fuel
                          efficiency, engine performance, and safety alerts.
                          These technologies can also improve the overall
                          driving experience, with features like voice-activated
                          controls, entertainment systems, and advanced
                          navigation tools. New energy sources are also
                          emerging, with alternative fuels like hydrogen,
                          biofuels, and natural gas gaining popularity.
                          <br /> These fuels have the potential to reduce
                          greenhouse gas emissions and improve air quality,
                          making them an attractive option for eco-conscious
                          consumers. Additionally, new energy storage
                          technologies like solid-state batteries and hydrogen
                          fuel cells are being developed, which could make
                          electric vehicles more practical and affordable. The
                          integration of these technologies has the potential to
                          revolutionize the way we interact with our vehicles.
                          Connected cars can provide us with personalized
                          driving experiences, with real-time traffic updates
                          and predictive maintenance alerts.
                          <br /> Meanwhile, new energy sources can reduce our
                          environmental impact and help us move towards a more
                          sustainable future. In conclusion, the future of
                          automobiles looks exciting, with a range of new
                          technologies and trends emerging. From electric and
                          autonomous vehicles to connected cars and new energy
                          sources, we can expect to see significant advancements
                          in the automotive industry in the coming years. These
                          innovations have the potential to improve our driving
                          experiences, reduce our environmental impact, and make
                          our roads safer and more efficient.
                        </p>
                        <p className="text-xs text-gray-500 text-right italic">
                          Al Amin Khan/ CEO of motor merchants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-8 -mr-3 lg:border lg:border-b-0 lg:border-t-0 lg:border-r-gray-300 border-r-0 lg:border-l-0  px-5">
                <Image
                  src="/blog-6.jpg"
                  alt="blog post"
                  width={600}
                  height={600}
                />
                <p className="text-xs text-gray-500 text-right">
                  Al Amin Khan/ CEO of motor merchants
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden lg:block lg:col-span-4 border border-b-black border-t-0 border-r-0 border-l-0 mt-5 ">
          <div className="mb-4 ml-4">
            <Image src="/blog-7.jpg" alt="blog post" width={250} height={250} />
            <p className="text-xs text-gray-500 text-right pr-10">
              Shahriar/ publisher
            </p>
          </div>
          <div className="mb-5 px-3">
            <p className="text-lg font-bold text-black tracking-tighter">
              Revolutionizing the Automotive Industry
            </p>
            <p className="text-sm text-gray-600 tracking-tighter">
              {" "}
              he future of automobiles is exciting, with significant
              advancements in technology and sustainability. The integration of
              electric ....
            </p>
            <p className="mt-2 text-xs text-indigo-700 ">2 mins read</p>
            <div className=" flex  justify-end items-center">
              <label
                htmlFor="my-modal-3"
                className="underline cursor-pointer text-gray-600 text-xs"
              >
                Read the full article
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal ">
                <div className="modal-box relative bg-yellow-50">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    Revolutionizing the Automotive Industry: Innovations and
                    Trends to Watch Out For
                  </h3>
                  <p className="py-4 text-black">
                    The future of automobiles is exciting, with significant
                    advancements in technology and sustainability. The
                    integration of electric and autonomous vehicles, connected
                    cars, and alternative energy sources has the potential to
                    improve driving experiences, reduce environmental impact,
                    and make our roads safer and more efficient. As these
                    innovations continue to evolve, we can expect to see a
                    revolution in the automotive industry.
                    <br /> Summary: &apos;Green Driving: The Role of Electric
                    and Alternative Energy Vehicles&apos; As the world moves
                    towards a more sustainable future, electric and alternative
                    energy vehicles are becoming increasingly popular. The
                    environmental benefits of these vehicles, such as zero
                    emissions and reduced dependence on fossil fuels, make them
                    an attractive option for eco-conscious consumers. In
                    addition, connected cars provide real-time information about
                    vehicle performance, further contributing to green driving
                    practices.
                    <br /> The emergence of new energy storage technologies and
                    advancements in machine learning and sensor technology are
                    making these vehicles more practical and accessible to the
                    general public.
                  </p>
                  <p className="text-xs text-gray-500 text-right italic">
                    Shariar/ publisher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-12 lg:col-span-8 flex items-center border border-b-black border-t-0 border-r-0 border-l-0  ">
          <div className="mb-3">
            <div className="flex flex-col-reverse items-center lg:grid grid-cols-12 ">
              <div className="col-span-4 flex flex-col items-center justify-center">
                <div className="hidden lg:block pb-5 border border-b-gray-300 border-t-0 border-r-0 border-l-0">
                  <p className="text-lg font-bold text-black tracking-tighter">
                    Electric and Autonomous Vehicles: The Future of Driving
                  </p>
                  <p className="text-sm text-gray-600 tracking-tighter">
                    The automotive industry is in the midst of a significant
                    shift towards electric ...
                  </p>
                  <p className="mt-2 text-xs text-indigo-700 ">5 mins read</p>
                  <div className=" flex  justify-end items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="underline cursor-pointer text-gray-600 text-xs"
                    >
                      Read the full article
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal ">
                      <div className="modal-box relative bg-yellow-50">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          Electric and Autonomous Vehicles: The Future of
                          Driving
                        </h3>
                        <p className="py-4 text-black">
                          The automotive industry is in the midst of a
                          significant shift towards electric and autonomous
                          vehicles. These technological advancements have the
                          potential to transform the way we drive, making our
                          roads safer, greener, and more efficient. Electric
                          vehicles (EVs) are becoming more popular as people
                          look for eco-friendly alternatives to traditional
                          gas-powered cars. Meanwhile, autonomous vehicles (AVs)
                          promise to revolutionize the way we commute, with the
                          potential to reduce accidents, increase productivity,
                          and reduce congestion. <br /> One of the most
                          significant advantages of EVs is their environmental
                          impact. They produce zero emissions and have the
                          potential to reduce our dependence on fossil fuels.
                          EVs also require less maintenance and have fewer
                          moving parts than traditional cars, which means lower
                          operating costs. Meanwhile, AVs have the potential to
                          eliminate human error on the road, which is the
                          leading cause of accidents. AVs can also optimize
                          traffic flow and reduce congestion, making our roads
                          safer and more efficient.
                          <br /> While these technologies are still in their
                          early stages, we can expect to see more and more
                          electric and autonomous vehicles on our roads in the
                          coming years. The development of charging
                          infrastructure and improvements in battery technology
                          will make EVs more accessible to consumers. Similarly,
                          advancements in machine learning and sensor technology
                          will make AVs safer and more reliable.
                        </p>
                        <p className="text-xs text-gray-500 text-right italic">
                          Zabed/ COO of motor merchants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:pt-5 mb-5 lg:mb-0 pt-2 px-20 lg:px-0">
                  <p className=" text-xl lg:text-lg font-bold text-black tracking-tighter">
                    Connected Cars and New Energy Sources
                  </p>
                  <p className=" text-lg lg:text-sm text-gray-600 tracking-tighter">
                    {" "}
                    Innovations in the Automotive Industry&apos; As the
                    automotive industry evolves, we&apos;re seeing a significant
                    shift ...
                  </p>

                  <p className="mt-2 text-xs text-indigo-700 ">3 mins read</p>

                  <div className=" flex  justify-end items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="underline cursor-pointer text-gray-600 text-xs"
                    >
                      Read the full article
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal ">
                      <div className="modal-box relative bg-yellow-50">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          So what is this MOBILE MACHANICS !?
                        </h3>
                        <p className="py-4 text-black">
                          Innovations in the Automotive Industry&apos; As the
                          automotive industry evolves, we&apos;re seeing a
                          significant shift towards connected cars and new
                          energy sources. Connected cars use advanced sensors
                          and data analytics to provide drivers with real-time
                          information about their vehicles, such as fuel
                          efficiency, engine performance, and safety alerts.
                          These technologies can also improve the overall
                          driving experience, with features like voice-activated
                          controls, entertainment systems, and advanced
                          navigation tools. New energy sources are also
                          emerging, with alternative fuels like hydrogen,
                          biofuels, and natural gas gaining popularity.
                          <br /> These fuels have the potential to reduce
                          greenhouse gas emissions and improve air quality,
                          making them an attractive option for eco-conscious
                          consumers. Additionally, new energy storage
                          technologies like solid-state batteries and hydrogen
                          fuel cells are being developed, which could make
                          electric vehicles more practical and affordable. The
                          integration of these technologies has the potential to
                          revolutionize the way we interact with our vehicles.
                          Connected cars can provide us with personalized
                          driving experiences, with real-time traffic updates
                          and predictive maintenance alerts.
                          <br /> Meanwhile, new energy sources can reduce our
                          environmental impact and help us move towards a more
                          sustainable future. In conclusion, the future of
                          automobiles looks exciting, with a range of new
                          technologies and trends emerging. From electric and
                          autonomous vehicles to connected cars and new energy
                          sources, we can expect to see significant advancements
                          in the automotive industry in the coming years. These
                          innovations have the potential to improve our driving
                          experiences, reduce our environmental impact, and make
                          our roads safer and more efficient.
                        </p>
                        <p className="text-xs text-gray-500 text-right italic">
                          Al Amin Khan/ CEO of motor merchants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-8 -mr-3 lg:border lg:border-b-0 lg:border-t-0 lg:border-r-gray-300 border-r-0 lg:border-l-0  px-5">
                <Image
                  src="/blog-8.jpg"
                  alt="blog post"
                  width={600}
                  height={600}
                />
                <p className="text-xs text-gray-500 text-right">
                  Al Amin Khan/ CEO of motor merchants
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden lg:block lg:col-span-4 border border-b-black border-t-0 border-r-0 border-l-0 mt-5 ">
          <div className="mb-4 ml-4">
            <Image src="/blog-9.jpg" alt="blog post" width={250} height={250} />
            <p className="text-xs text-gray-500 text-right pr-10">
              Shahriar/ publisher
            </p>
          </div>
          <div className="mb-5 px-3">
            <p className="text-lg font-bold text-black tracking-tighter">
              Revolutionizing the Automotive Industry
            </p>
            <p className="text-sm text-gray-600 tracking-tighter">
              {" "}
              he future of automobiles is exciting, with significant
              advancements in technology and sustainability. The integration of
              electric ....
            </p>
            <p className="mt-2 text-xs text-indigo-700 ">2 mins read</p>
            <div className=" flex  justify-end items-center">
              <label
                htmlFor="my-modal-3"
                className="underline cursor-pointer text-gray-600 text-xs"
              >
                Read the full article
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal ">
                <div className="modal-box relative bg-yellow-50">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    Revolutionizing the Automotive Industry: Innovations and
                    Trends to Watch Out For
                  </h3>
                  <p className="py-4 text-black">
                    The future of automobiles is exciting, with significant
                    advancements in technology and sustainability. The
                    integration of electric and autonomous vehicles, connected
                    cars, and alternative energy sources has the potential to
                    improve driving experiences, reduce environmental impact,
                    and make our roads safer and more efficient. As these
                    innovations continue to evolve, we can expect to see a
                    revolution in the automotive industry.
                    <br /> Summary: &apos;Green Driving: The Role of Electric
                    and Alternative Energy Vehicles&apos; As the world moves
                    towards a more sustainable future, electric and alternative
                    energy vehicles are becoming increasingly popular. The
                    environmental benefits of these vehicles, such as zero
                    emissions and reduced dependence on fossil fuels, make them
                    an attractive option for eco-conscious consumers. In
                    addition, connected cars provide real-time information about
                    vehicle performance, further contributing to green driving
                    practices.
                    <br /> The emergence of new energy storage technologies and
                    advancements in machine learning and sensor technology are
                    making these vehicles more practical and accessible to the
                    general public.
                  </p>
                  <p className="text-xs text-gray-500 text-right italic">
                    Shariar/ publisher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
