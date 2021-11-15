import type { NextComponentType, NextPageContext } from 'next';

const Footer: NextComponentType<NextPageContext, any, any> = () => {
    return (
        <div>
            <footer className="bg-elegant-black">
                <div className="flex flex-col items-center text-center text-white text-sm py-4">
                    <span className="mb-4">Made by Inhil People | FengkieJ</span>
                    <span>Copyright © 2021 HIDDEN.</span>
                    <span>All right reserved.</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
