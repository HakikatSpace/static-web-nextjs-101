import type { NextComponentType, NextPageContext } from 'next';
import buttonStyles from '../Button/Button.module.css';

const Hero: NextComponentType<NextPageContext, any, any> = (props) => {
    return (
        <div id={props.id}>
            <section
                className={`relative text-white bg-center bg-no-repeat bg-cover bg-fixed h-540px`}
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80")'
                }}
                role="banner"
            >
                <span className="absolute inset-0 bg-black opacity-60"></span>

                <div className="relative flex flex-col items-center max-w-screen text-center">
                    <div className="mt-24 mb-16">
                        <img src='logo.jpg' width={150} height={150} alt="logo.jpg" className="rounded-3xl" />
                    </div>
                    <div className="flex flex-col justify-center mx-16 max-w-prose">
                        <h1 className="text-3xl sm:text-5xl mb-8 font-heading">
                            Finest taste, made with 💕
                        </h1>

                        <p className="sm:text-xl font-content">
                            Our love, our passion, our secret. Hidden is the best place to <b>grab your daily dose of coffee</b>.
                        </p>
                    </div>
                    <div className="flex flex-row my-16 sm:my-24 justify-center">
                        <a href="#contact" className={`${buttonStyles.btn} flex mr-4 sm:w-48`}>Find Us</a>
                        <a href="#menu" className={`${buttonStyles.btn} flex ml-4 sm:w-48 `}>Our Menu</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
