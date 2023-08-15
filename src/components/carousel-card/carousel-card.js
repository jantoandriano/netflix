export const CarouselCard = () => {
    return (
        <div className="rounded overflow-hidden shadow-lg flex justify-center items-center mb-10 bg-white rounded-3xl">
            <div className="w-9/12">
                <img src="/images/img-placeholder.jpg" width={400} height={400}></img>
            </div>

            <div className="flex flex-col p-4">
                <div className="font-bold">
                    Title
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </div>
            </div>
        </div>
    )
}