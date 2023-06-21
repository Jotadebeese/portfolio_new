
interface image {
    id: number;
    key: string;
  }
  
  export default function DisplayImages({ project }: any) {
    
    const images: any = project?.images || []; // Access 'tech' data from the project

    return (
        <div className="image-container">
            {images.map((image:image) => {
            return <img  className="single-image" key={image.id} src={image.key} alt={`Project Image ${image.id + 1}`} width={300} />
            })}
        </div>
    );
  };