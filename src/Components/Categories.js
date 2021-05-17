import React from 'react';

function Categories({categories, filter}) {
    return (
        <div className="Categories">
            {
                categories.map((cat, i) =>
                {
                    return <button key={i} className="port-btn" onClick={() => filter(cat)}>{cat}</button>
                })
            }
        </div>
    );
}

export default Categories;
