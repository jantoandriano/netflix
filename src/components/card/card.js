export const Card = ({ type }) => {
    const cardType = type === 'col' ? 'flex flex-col' : 'flex items-center';

    return (
        <div class={`max-w-sm rounded overflow-hidden shadow-lg bg-white rounded-3xl ${cardType}`}>
            <img class="w-full h-48 object-cover" src="/images/img-placeholder.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-md mb-2">The Coldest Sunset</div>
            </div>
        </div>
    )
}