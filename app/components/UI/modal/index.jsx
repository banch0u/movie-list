import React from 'react';

const Modal = ({ modalKey, closeModal }) => {
  return (
    <>
      {modalKey ? (
        <>
          <div
            className='bg-[#00000080] fixed top-0 left-0 w-full h-[100vh] z-10'
            onClick={() => closeModal()}></div>
          <iframe
            width='70%'
            style={{ aspectRatio: 16 / 9 }}
            src={`https://www.youtube.com/embed/${modalKey}?rel=0?controls=0?modestbranding=1?autoplay=1`}
            title='sd'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            className='rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'
            allowfullscreen></iframe>
        </>
      ) : null}
    </>
  );
};

export default Modal;
