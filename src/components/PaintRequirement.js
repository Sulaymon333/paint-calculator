import React from 'react';
import PaintInfo from './PaintInfo';

const PaintRequirement = ({ data, form }) => {
    let totalArea = 0;
    let totalAreaSurface = 0;
    let totalCost = 0;
    data.map((room) => {
        totalArea += room.sqmPerLitre;
        totalAreaSurface += room.sqmPerLitre * room.surface;
        return true;
    });

    let totalLitre = (totalAreaSurface * form.levels) / form.adequacy;
    totalCost = totalLitre * form.price;
    return (
        <>
            <section className="grid-wrapper">
                <h1>Paint amounts and cost per room: </h1>
                {data.map((room) => (
                    <PaintInfo key={room.name} {...room} values={form} />
                ))}
                <section className="total">
                    <h1>In total: </h1>
                    <p>Total area to be painted: {totalArea} &#13217;</p>
                    <p>Total area using surface modifier: {totalAreaSurface.toFixed(2)} &#13217;</p>
                </section>
            </section>
        </>
    );
};

export default PaintRequirement;
