import { FaEnvelope, FaClipboardCheck, FaBullhorn, FaTag, FaBell, FaGift } from "react-icons/fa"; // Example icons

const events = [
    {
        date: "2016",
        icon: <FaEnvelope className="text-4xl text-[#fff]" />,
        description: "Grow Lotus Fintech started as S K Associate in Indore, MP, with a strong focus on traditional financial services. Over the years, it evolved into a leader in the fintech industry by embracing innovative technologies. The company's dedication to customer service and early adoption of cutting-edge solutions have set benchmarks in the financial technology sector, positioning Grow Lotus Fintech as a pioneering force in the industry.",
    },
    {
        date: "2017",
        icon: <FaClipboardCheck className="text-4xl text-[#fff]" />,

        description: "In 2017, Grow Lotus Fintech broadened its footprint by establishing two new business branches in Madhya Pradesh. This expansion marked a significant step in our journey, allowing us to better serve our growing client base and strengthen our presence in key regional markets. This strategic move was driven by our commitment to providing personalized financial solutions across a wider geographical area."
    },
    {
        date: "2018",
        icon: <FaEnvelope className="text-4xl  text-[#fff]" />,
        description: "In 2018, Grow Lotus Fintech proudly achieved a milestone of building a happy customer base of over 500 satisfied clients. This accomplishment reflects the company's unwavering commitment to delivering exceptional financial services and customer satisfaction, solidifying its reputation as a trusted partner in the fintech industry.",
    },
    {
        date: "2019",
        icon: <FaBullhorn className="text-4xl text-[#fff]" />,
        description: "In 2019, Grow Lotus Fintech further expanded its reach by opening four new business branches across Madhya Pradesh. This strategic expansion allowed us to enhance our services and cater to a larger clientele, reinforcing our commitment to delivering exceptional financial solutions. The growth in our branch network reflected our ongoing dedication to providing accessible and personalized financial advisory services.",
    },
    {
        date: "2020",
        icon: <FaTag className="text-4xl text-[#fff]" />,
        description: "In 2020, Grow Lotus Fintech was honored with the prestigious Dare to Dream Award for our achievements in Madhya Pradesh and Chhattisgarh. This award recognized our exceptional contributions and innovative approach in the financial services sector. It was a testament to our dedication to delivering high-quality financial solutions and our unwavering commitment to our clients' success.",
    },
    {
        date: "2022",
        icon: <FaBell className="text-4xl text-[#fff]" />,
        description: "In 2022, Grow Lotus Fintech expanded its operations into the Delhi NCR region by establishing a new corporate office in Gurugram. This strategic move allowed us to tap into one of India’s most vibrant economic hubs, enhancing our ability to serve a broader client base and strengthen our market presence. The new office underscores our commitment to providing top-notch financial services and support across key regional markets.",
    },
    {
        date: "2022",
        icon: <FaGift className="text-4xl text-[#fff]" />,
        description: "In 2022, Grow Lotus Fintech achieved a significant milestone by receiving the Dare to Dream Award twice for our outstanding performance in Madhya Pradesh and Chhattisgarh. This dual recognition highlighted our continued excellence and innovation in the financial services industry. The awards were a testament to our commitment to delivering exceptional service and achieving excellence across our key markets.",
    },
    {
        date: "2023",
        icon: <FaGift className="text-4xl text-[#fff]" />,
        description: "In 2023, Grow Lotus Fintech was honored with the prestigious Super Indian Award in Lucknow, Uttar Pradesh. This recognition underscores the company's excellence and leadership in the fintech sector, celebrating its continuous innovation and dedication to making a positive impact on the financial landscape in India.",
    },
    {
        date: "2023",
        icon: <FaGift className="text-4xl text-[#fff]" />,
        description: "In 2023, Grow Lotus Fintech was officially incorporated under the Ministry of Corporate Affairs (MCA) as Grow Lotus Fintech Private Limited. This formal recognition marked a new chapter in our evolution, affirming our commitment to providing high-quality financial services while ensuring compliance with regulatory standards. The incorporation reflects our growth and dedication to upholding the highest standards in the financial industry.",
    },
    {
        date: "2024",
        icon: <FaGift className="text-4xl text-[#fff]" />,
        description: "In 2023, Grow Lotus Fintech was officially incorporated under the Ministry of Corporate Affairs (MCA) as Grow Lotus Fintech Private Limited. This formal recognition marked a new chapter in our evolution, affirming our commitment to providing high-quality financial services while ensuring compliance with regulatory standards. The incorporation reflects our growth and dedication to upholding the highest standards in the financial industry.",
    },

];

export default function Timeline() {

    const styles = {
        contentBox: {
            border: "3px solid transparent",
            borderImage: "linear-gradient(to right, green, lightgreen)",
            borderImageSlice: "1"
        }
    }
    return (<>

        <div className="timeline-container py-10 w-full text-white">
            <h1 className="text-[2rem] text-center text-[#000] font-bold  uppercase">Achivements </h1>
            <p className="mb-[50px] w-[85%] m-auto text-center text-[#575757]">Grow Lotus Fintech has consistently broken new ground in the fintech industry, setting benchmarks for innovation and customer service. Our early adoption of cutting-edge technologies has positioned us as leaders in the financial technology sector.</p>
            <div className="container mx-auto">
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-[101.1%] w-1 bg-gradient-to-b from-[#f5d546] to-[#ffd700]"></div>

                    {events.map((event, index) => (
                        <div key={index} className={`mb-10 flex relative ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center w-full`}>
                            <div className={`absolute h-[3px] w-[45%] ${index % 2 === 0 ? "left-[22%]" : "left-[29%]"} bg-[#ffd700]`}></div>
                            <div className="w-1/2 flex justify-center items-center relative z-[100]" >
                                <div className="bg-[#fff] text-[#ffd700] rounded-lg shadow-lg p-6 ml-10 w-[500px] " style={{ border: "3px solid transparent", borderImage: `linear-gradient(to ${index % 2 == 0 ? 'right' : 'left'}, #ffd700, lightgreen)`, borderImageSlice: "1" }} >
                                    <h3 className="font-bold text-[#ffd700]  text-[2.5rem]">{event.date}</h3>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                            <div className="relative w-1/2 m-0 flex justify-center items-center z-[100]">
                                {/* Timeline Icon */}
                                <div className="text-[3xl] left-[70%] transform -translate-x-1/2 bg-[#ffd700] p-4 rounded-full shadow-lg z-10 text-blue-900">
                                    {event.icon}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
            <div className="flex  justify-center  p-[20px] rounded-[10px] " style={{ border: "4px solid transparent", borderImage: `linear-gradient( #ffd700, lightgreen)`, borderImageSlice: "1" }}>
            <div className="w-[50%] h-[100%] flex justify-center items-center">
            <div>
            <h1 className="text-[#000] text-[1.5rem] pl-[0px] font-[600] text-[#003c07] mb-[30px]">Awarded <span className="text-[3.5rem] text-[#ffd700] block leading-[60px]  "> Prestigious
Super Indian Award </span>
<span className="font-[600]">Lucknow, Uttar Pradesh

2023</span></h1>
<p>In 2023, Grow Lotus Fintech was honored with the prestigious Super Indian Award in Lucknow, Uttar Pradesh. This recognition underscores the company's excellence and leadership in the fintech sector, celebrating its continuous innovation and dedication to making a positive impact on the financial landscape in India.
</p>
</div>
</div>
<div className="w-[50%] flex justify-end items-center">
                <video  className="w-[90%] h-[350px] object-cover " controls src="https://growlotusfintech.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-02-at-19.23.14_bd54e672.mp4">
               
                </video>
                </div>
                </div>
            </div>
        </div>
    </>
    );
}
