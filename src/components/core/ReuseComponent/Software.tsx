/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function Software() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="container mx-auto w-auto my-12">
      <div>
        <div className="mx-32 text-center">
          <h3 className="text-3xl">Innovate. Build. Thrive</h3>
          <p className="mx-32 text-lg">
            Revolutionize your digital landscape with cutting-edge software
            solutions. Innovate, build, and thrive in a world of endless
            possibilities.
          </p>
        </div>
        {/* flip this card */}
        <div
          className={`flex justify-between gap-6 mx-6 my-9 relative h-full w-full rounded-xl  ${
            isFlipped ? 'transform rotateY-180deg' : ''
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="w-full shadow-lg shadow-gray-300 p-12 rounded-xl">
            {isFlipped ? 'Back of the card content' : 'Enterprise Software'}
          </div>
          <div className="w-full shadow-lg shadow-gray-300 p-12 rounded-xl">
            {isFlipped ? 'Back of the card content' : 'Customized Software'}
          </div>
          <div className="w-full shadow-lg shadow-gray-300 p-12 rounded-xl">
            {isFlipped ? 'Back of the card content' : 'Enterprise Applications'}
          </div>
          <div className="w-full shadow-lg shadow-gray-300 p-12 rounded-xl">
            {isFlipped ? 'Back of the card content' : 'Solutions & Consulting'}
          </div>
          <div className="w-full shadow-lg shadow-gray-300 p-12 rounded-xl">
            {isFlipped ? 'Back of the card content' : 'Support & Maintenance'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Software;
