import Image from "next/image";

const ContactPage = () => {
    return (
        <div>
            <h2 className='text-5xl'>This is contact page</h2>
            <Image src={'/communication.png'} alt="communication" width={500} height={300} priority style={{ width: "100%", height: "auto", maxWidth: "600px" }} />
        </div>
    );
};

export default ContactPage;