import type { NextComponentType, NextPageContext } from 'next';
import buttonStyles from '../Button/Button.module.css';

const ContactUs: NextComponentType<NextPageContext, any, any> = (props) => {
    return (
        <div id={props.id}>
            <section className="bg-hidden-gold pt-8 pb-8">
                <div className="px-8">
                    <h1 className="text-white font-heading text-4xl mb-4">The Shop</h1>
                </div>

                <div className="flex flex-col items-center my-8">
                    <iframe
                        width="100%" height="360px"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.084771592363!2d103.1392660038919!3d-0.3082048044297232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e28418ffc9fc98f%3A0x1d6b30afcdc47270!2sHidden%20Cafe!5e0!3m2!1sen!2sid!4v1635942706298!5m2!1sen!2sid" 
                        allowFullScreen={true} 
                        loading="lazy" />
                    <span className="mx-8 mt-4 text-center text-sm sm:text-lg font-content text-elegant-black">Jl. Trimas Gang Trimas Seni No.1, Tembilahan Kota, Tembilahan, Kabupaten Indragiri Hilir, Riau 29212</span>
                    <span className="mt-4 mb-2 text-center font-heading text-xl text-elegant-black underline">Reservation</span>
                    <a href="https://api.whatsapp.com/send?phone=628000000000&text=Halo kak, saya ingin melakukan reservasi." className={`${buttonStyles.btn} w-36`}>
                        <div className="flex items-center justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
                            </svg>Contact Us
                        </div>
                    </a>
                </div>

            </section>
        </div>
    )
}

export default ContactUs
