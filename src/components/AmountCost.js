import React from 'react';
import Card from './Card';
import SpanModifier from './SpanModifier';

const AmountCost = () => {
    return (
        <div className="p-10 mx-5">
            <h1 className="md:text-2xl text-xl font-semibold mb-4">Paint amounts and cost per room: </h1>
            <div className="flex md:flex-row md:space-x-6 md:justify-start flex-col justify-center">
                <Card
                    backgroundColor="bg-blue-100"
                    title="First floor lobby painted with Tikkurila ykkönen"
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
                ></Card>
            </div>
        </div>
    );
};

export default AmountCost;
