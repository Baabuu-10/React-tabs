import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Home" },
    { id: "tab2", label: "About" },
    { id: "tab3", label: "Service" },
    { id: "tab4", label: "Contact" },
    { id: "tab5", label: "FAQ" },
  ];

  const tabContent = {
    tab1: (
      <div>
        <h2 className="mb-3 font-bold">Welcome</h2>
        <p className="mb-3 text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae obcaecati suscipit odio corrupti expedita facilis amet reprehenderit non dolor veritatis, culpa, pariatur autem quod vero modi? Quos, suscipit iusto!
        </p>
      </div>
    ),
    tab2: (
      <div>
        <h2 className="mb-4 text-2xl font-bold">About Us</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, facilis!
        </p>
        <span className="border-l-4 border-purple-500 pl-4 italic">
          Our mission is to provide innovative solutions for our clients
        </span>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis perferendis, ratione dolore expedita vero dolor nemo voluptatibus at asperiores laudantium sit. Soluta assumenda dignissimos cum incidunt atque qui earum!
        </p>
      </div>
    ),
    tab3: (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Services</h2>
        <p className="mb-4">We offer a wide range of services to meet your needs</p>

        <div className="grid grid-cols-2 gap-4">
          {["Service 1", "Service 2", "Service 3", "Service 4"].map((service, index) => (
            <div key={index} className="rounded-xl bg-purple-100 p-4 text-center">
              <h3 className="font-bold">{service}</h3>
              <p className="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium laudantium deserunt fugiat temporibus tenetur.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    tab4: (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
        <p className="m-4">Get in touch with our team</p>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full rounded-xl border-none ring-2 ring-transparent focus:ring-purple-400" />
          <input type="email" placeholder="Email" className="w-full rounded-xl border-none ring-2 ring-transparent focus:ring-purple-400" />
          <textarea placeholder="Message" className="w-full resize-none rounded-xl p-2 outline-none ring-2 ring-transparent focus:ring-purple-400"></textarea>
          <button className="rounded-full bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">Send</button>
        </form>
      </div>
    ),
    tab5: (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <h3 className="font-bold">What is your return policy?</h3>
          <p>A: Our return policy allows returns within 30 days of purchase.</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold">Do you offer international shipping?</h3>
          <p>A: Yes, we ship to most countries worldwide.</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold">How long does shipping usually take?</h3>
          <p>A: Domestic orders typically arrive within 3-5 business days, while international orders may take 7-14 business days.</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold">Are your products eco-friendly?</h3>
          <p>A: We strive to use sustainable materials and packaging whenever possible to minimize our environmental impact.</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300">
      <div className="max-w-[500px] rounded-3xl border bg-white p-8 mx-10 shadow-xl space-y-5">
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold ${
                activeTab === tab.id ? "border-b-2 border-purple-500 text-purple-500" : "text-gray-500 hover:text-purple-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default App;
