
interface image {
    id: number;
    key: string;
  }
  
  export default function DisplayImages({ project }: any) {
    
    const images: any = project?.images || []; // Access 'tech' data from the project

    return (
        <div className="image-container">
            < div className="main-image">
                <h3>Screenshots</h3>
                <p>Some screenshots to help you have a better picture of the work.</p>
            </div>
            {images.map((image:image) => {
            return (
                <div className={image.id === 1 ? "single-image" : "single-image hidden"}>
                    <img key={image.id} src={image.key} alt={`Project Image ${image.id + 1}`} />
                </div>
            )})}
        </div>
    );
  };