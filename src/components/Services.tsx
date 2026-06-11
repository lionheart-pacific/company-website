export default function Services() {
    const productDevelopments = [
        {
            label: "The team",
            description: "A U.S.-based Delivery Lead and one or more pairs of engineers, working together as a single product, design, and engineering function.",
        },
        {
            label: "How it’s built",
            description: "Engineers based in Thailand for strong, stable, collaborative teams, and a Delivery Lead in the U.S. who stays close to you and the work.",
        }, {
            label: "How it grows",
            description: "Begin with a single pair and a Delivery Lead, then add pairs as the work expands — capability, a pair at a time.",
        }, {
            label: "Who it’s for",
            description: "Organizations where software has become core to the business, and they want a team that can take ownership of it.",
        },
    ]
    return (
        <div>
            <div className="px-24 pt-30 pb-20 flex flex-col gap-y-7 border-b border-brand-light-gray">
                <div className="text-overline text-brand-primary uppercase">services</div>
                <h1 className="text-h1 text-brand-ink font-semibold">Product development, as an ongoing capability.</h1>
                <p className="text-subtitle1 text-brand-dark-gray w-1/2">A self-managing product team that owns
                    meaningful
                    work
                    alongside you. It is the one service we offer today — and we intend to be exceptional at it.</p>
            </div>
            <div className="px-24 py-21 flex flex-col gap-7 border-b border-brand-light-gray">
                <div className="text-overline text-brand-primary uppercase">the services</div>
                <h2 className="text-h2">Product Development</h2>
                <p className="text-subtitle1 text-brand-dark-gray">A dedicated, self-managing product team that
                    takes ownership of meaningful work and stays aligned with your business priorities — without you
                    building and managing a software organization internally.</p>

                <div className="grid grid-cols-2 gap-6">

                {productDevelopments.map((item) => (
                    <div className="bg-brand-concrete p-9 gap-2 flex flex-col rounded-md">
                        <div className="text-brand-ink text-[19px] font-semibold">{item.label}</div>
                        <div className="text-brand-dark-gray text-[16px]">{item.description}</div>
                    </div>
                ))}
                </div>
            </div>
            <div className="px-24 pt-30 pb-20 border-b border-brand-light-gray ">
                <div className="p-14 flex flex-row border border-dashed border-brand-light-gray items-center">
                    <div className="w-1/2">
                        <div className="text-overline text-[#B8B8C2] uppercase">MORE TO COME</div>
                        <h2 className="text-7 text-[#B8B8C2]">Focused services, as we grow.</h2>
                    </div>
                    <div className="w-1/2 text-subtitle1 text-[#B8B8C2]">
                        This page is built to hold additional services over time — each one presented in the same way.
                    </div>
                </div>
            </div>
        </div>
    );
}