"use client"
import { useState } from "react";

interface image {
    id: number;
    key: string;
    description: string;
  }
  
  export default function DisplayImages({ project }: any) {

    const [displayImage, setDisplayImage] = useState('');
    const [display, setDisplay] = useState(false);
    const [arrayImage, setArrayImage] = useState(0);
    const [imageDesc, setImageDesc] = useState('');
    
    const images: any = project?.images || []; // Access 'tech' data from the project

    return (
        <>
            <div className="image-container">
                <div className="main-image">
                    <h2>{project?.title}</h2>
                    <h3>Project screenshots</h3>
                    <p>Feel free to check them out.</p>
                </div>
                {images.map((image:image) => {
                return (
                    <div className="single-image">
                        <button onClick={() => {
                            setDisplayImage(image.key);
                            setImageDesc(image.description);
                            setDisplay(true);
                            setArrayImage(image.id - 1);
                        }} className="image-button">
                            <img key={image.id} src={image.key} alt={`Project Image ${image.id + 1}`} />
                        </button>
                    </div>
                )})}
            </div>
            {display && (
                <div className="display-box fade-in">
                    <button className='close-display' onClick={() => setDisplay(false)}>X</button>
                    <button className="previous" onClick={() => {
                        const index = arrayImage === 0 ? images.length - 1 : arrayImage - 1
                        setDisplayImage(images[index].key);
                        setImageDesc(images[index].description)
                        setArrayImage(index);
                    }}>&lt;</button>
                    <img className="display-image" src={displayImage} />
                    <p className="img-description">{imageDesc}</p>
                    <button className="next" onClick={() => {
                        const index = arrayImage === images.length - 1 ? 0 : arrayImage + 1;
                        setDisplayImage(images[index].key);
                        setImageDesc(images[index].description)
                        setArrayImage(index);
                    }}>&gt;</button>
                </div>
            )}
        </>
    );
  };