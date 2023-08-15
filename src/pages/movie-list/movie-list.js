import { Card } from "../../components/card"
import { Carousel } from "../../components/carousel"
import { Section } from "../../components/section"
import { PageLayout } from "../../layout/page-layout"

export const MovieList = () => {
    return (
        <PageLayout>
            <Carousel />
            <div className="mt-20">
                <Section name="Latest">
                    <div>
                        <Card />
                    </div>

                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>

                </Section>
            </div>

            <div className="mt-10">
                <Section name="Action" slideToShow={6}>
                    <div>
                        <Card type="col" />
                    </div>

                    <div>
                        <Card type="col" />
                    </div>
                    <div>
                        <Card type="col" />
                    </div>

                    <div>
                        <Card type="col" />
                    </div>

                    <div>
                        <Card type="col" />
                    </div>

                    <div>
                        <Card type="col" />
                    </div>
                    <div>
                        <Card type="col" />
                    </div>

                </Section>
            </div>
        </PageLayout>

    )
}