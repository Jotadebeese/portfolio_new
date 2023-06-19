import { prisma } from "@/lib/prisma";

interface image {
    id: number;
    key: string;
  }
  
  export default async function DisplayImages({ project }: any) {
    const getproject = await prisma.projects
    .findUnique({
        where: { id: project.id},
        include: { images: true}, // Include the related tech data
    });

    const images: any = getproject?.images || []; // Access 'tech' data from the project

    return (
      <div className="image-container fade-in">
        {images.map((image:image) => {
          return <img  className="single-image" key={image.id} src={image.key} alt={`Project Image ${image.id + 1}`} width={300} />
        })}
      </div>
    );
  };