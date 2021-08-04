import React from 'react';
import Card from './Card';
import SpanModifier from './SpanModifier';
import spaceInfo from '../spaceInfo.json';

const FloorInfo = () => {
    return (
        <div className="p-5 mx-5">
            <h1 className="md:text-2xl text-xl font-semibold mb-4">Information about spaces to be painted: </h1>
            <div className="flex md:flex-row md:space-x-6 md:justify-start flex-col justify-center">
                {spaceInfo.map((item, index) => (
                    <Card
                        key={index}
                        backgroundColor="bg-yellow-100"
                        title={item.name}
                        item1={
                            <>
                                - Space area: <SpanModifier value={item.area} /> m²
                            </>
                        }
                        item2={
                            <>
                                - Surface roughness: <SpanModifier value={item.surfaceRoughness} />
                            </>
                        }
                    ></Card>
                ))}
            </div>
        </div>
    );
};

export default FloorInfo;
