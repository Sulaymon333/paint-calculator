import { useContext } from 'react';
import { FormContext } from '../store/contextProvider';
import Card from './Card';
import SpanModifier from './SpanModifier';
import { currencyFormatter } from '../utils';
import spaceInfo from '../spaceInfo.json';

const AmountCost = () => {
    let content;
    const formCtx = useContext(FormContext);
    const { paintName, pricePerLitre, sqmPerLitre, levels } = formCtx.formContext;

    if (Object.keys(formCtx.formContext).length === 0) {
        content = (
            <div className="bg-red-500 rounded-md overflow-hidden shadow-lg p-5 mb-4 mx-32 my-10 text-white">
                <h2 className="text-2xl font-semibold mb-3">No Calculation yet!</h2>
                <p>Please fill the form to get results</p>
            </div>
        );
    } else {
        content = (
            <div className="p-10 mx-5">
                <h1 className="md:text-2xl text-xl font-semibold mb-4">Paint amounts and cost per room: </h1>
                <div className="flex md:flex-row md:space-x-6 md:justify-start flex-col justify-center">
                    {spaceInfo.map((space, index) => {
                        console.log(currencyFormatter(223333.78899887));
                        const { name, area, surfaceRoughness } = space;
                        let litres = (area * surfaceRoughness * levels) / sqmPerLitre;
                        let totalPrice = litres * pricePerLitre;
                        console.log(litres, totalPrice);
                        return (
                            <Card
                                key={index}
                                backgroundColor="bg-blue-100"
                                title={`${name} painted with ${paintName}`}
                                item1={
                                    <>
                                        - Amount of paint required: <SpanModifier value={`${litres.toFixed(2)}`} />
                                    </>
                                }
                                item2={
                                    <>
                                        - Total cost: <SpanModifier value={`${totalPrice}`} />
                                    </>
                                }
                            ></Card>
                        );
                    })}
                    {/* <Card
                        backgroundColor="bg-blue-100"
                        title={`First floor lobby painted with ${paintName}`}
                        item1={
                            <>
                                - Amount of paint required: <SpanModifier value="1000.00 litres" />{' '}
                            </>
                        }
                        item2={
                            <>
                                - Total cost: <SpanModifier value="1000.00 €" />
                            </>
                        }
                    ></Card>
                    <Card
                        backgroundColor="bg-blue-100"
                        title="Second floor lobby painted with Tikkurila ykkönen"
                        item1={
                            <>
                                - Amount of paint required: <SpanModifier value="1000.00 litres" />{' '}
                            </>
                        }
                        item2={
                            <>
                                - Total cost: <SpanModifier value="1000.00 €" />
                            </>
                        }
                    ></Card>
                    <Card
                        backgroundColor="bg-blue-100"
                        title="Third floor lobby painted with Tikkurila ykkönen"
                        item1={
                            <>
                                - Amount of paint required: <SpanModifier value="1000.00 litres" />{' '}
                            </>
                        }
                        item2={
                            <>
                                - Total cost: <SpanModifier value="1000.00 €" />
                            </>
                        }
                    ></Card> */}
                </div>
            </div>
        );
    }

    return <>{content}</>;
};

export default AmountCost;
