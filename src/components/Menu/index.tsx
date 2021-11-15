import type { NextComponentType, NextPageContext } from 'next';

const Menu: NextComponentType<NextPageContext, any, any> = (props) => {
    return (
        <div id={props.id}>
            <article className="bg-elegant-black pb-16">
                <div className="px-8 py-8">
                    <span className="text-warm-white text-2xl font-title">H I D D E N</span>
                    <h1 className="text-warm-white font-heading text-4xl mb-4">Menu</h1>

                    <h2 className="text-white font-heading text-2xl my-2">Coffee</h2>
                    <div className="flex flex-row">
                        <p className="flex-auto text-white font-content text-2xl mx-4">Lorem ipsum</p>
                        <p className="flex-none flex-end text-white font-content text-2xl mx-4">12k</p>
                    </div>

                    <h2 className="text-white font-heading text-2xl my-2">Non-Coffee</h2>
                    <div className="flex flex-row">
                        <p className="flex-auto text-white font-content text-2xl mx-4">Lorem ipsum</p>
                        <p className="flex-none flex-end text-white font-content text-2xl mx-4">12k</p>
                    </div>

                    <h2 className="text-white font-heading text-2xl my-2">Snacks & Meals</h2>
                    <div className="flex flex-row">
                        <p className="flex-auto text-white font-content text-2xl mx-4">Lorem ipsum</p>
                        <p className="flex-none flex-end text-white font-content text-2xl mx-4">12k</p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Menu
