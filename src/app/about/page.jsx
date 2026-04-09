import Image from "next/image";


const AboutPage = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <Image src={'/alert.png'} alt="alert" width={500} height={300} priority style={{ width: "100%", height: "auto", maxWidth: "600px" }} />
        </div>
    );
};

export default AboutPage;