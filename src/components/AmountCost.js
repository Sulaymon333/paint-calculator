import { useContext } from 'react';
import { FormContext } from '../store/contextProvider';
import { currencyFormatter } from '../utils';
import Card from './Card';
import SpanModifier from './SpanModifier';
import spaceInfo from '../spaceInfo.json';

const AmountCost = () => {
    let content;
    const formCtx = useContext(FormContext);
    const { paintName, pricePerLitre, sqmPerLitre, levels } = formCtx.formContext;

    if (Object.keys(formCtx.formContext).length === 0) {
        content = (
            <div className="p-5 md:pt-10 mx-5">
                <div className="bg-red-500 rounded-md overflow-hidden shadow-lg p-5 mx-5 my-10 text-white md:h-32">
                    <h2 className="text-2xl font-semibold mb-3">No Calculation yet!</h2>
                    <p>Please fill the form to get results</p>
                </div>
            </div>
        );
    } else {
        content = (
            <div className="p-10 md:pt-10 mx-5">
                <h1 className="md:text-2xl text-xl font-semibold mb-4">Paint amounts and cost per room: </h1>
                <div className="flex md:flex-row md:space-x-6 md:justify-start flex-col justify-center">
                    {spaceInfo.map((space, index) => {
                        const { name, area, surfaceRoughness } = space;
                        let litres = (area * surfaceRoughness * levels) / sqmPerLitre;
                        let totalPrice = litres * pricePerLitre;
                        return (
                            <Card
                                key={index}
                                backgroundColor="bg-blue-100"
                                title={
                                    <>
                                        {name} painted with{' '}
                                        <span className="bg-blue-700 p-1 px-2 rounded-3xl text-sm text-white whitespace-nowrap">
                                            {paintName}
                                        </span>
                                    </>
                                }
                                item1={
                                    <>
                                        <span className="text-2xl text-indigo-500">&#8226;</span> Amount of paint
                                        required: <SpanModifier value={`${litres.toFixed(2)}`} />
                                    </>
                                }
                                item2={
                                    <>
                                        <span className="text-2xl text-indigo-500">&#8226;</span> Total cost:{' '}
                                        <SpanModifier value={`${currencyFormatter(totalPrice)}`} />
                                    </>
                                }
                            ></Card>
                        );
                    })}
                </div>
            </div>
        );
    }

    return <>{content}</>;
};

export default AmountCost;
