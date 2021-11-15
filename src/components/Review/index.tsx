import type { NextComponentType, NextPageContext } from 'next';
import ReviewCard from '../ReviewCard';

const Review: NextComponentType<NextPageContext, any, any> = (props) => {
    return (
        <div id={props.id}>
            <article className="bg-white pt-8 pb-16">
                <div className="px-8 py-8">
                    <h1 className="text-brown-coffee font-heading text-4xl mb-4">Our Reviews</h1>
                </div>

                <ReviewCard name="Katie" content="lorem ipsum" photo="https://www.hyperui.dev/code/photos/man-4.jpeg"/>
                <ReviewCard name="Katie" content="lorem ipsum" photo="https://www.hyperui.dev/code/photos/man-4.jpeg"/>
                <ReviewCard name="Katie" content="lorem ipsum" photo="https://www.hyperui.dev/code/photos/man-4.jpeg"/>
            </article>
        </div>
    )
}

export default Review
