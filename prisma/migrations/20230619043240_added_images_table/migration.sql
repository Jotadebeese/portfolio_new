-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "key" TEXT,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ImagesToProjects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ImagesToProjects_AB_unique" ON "_ImagesToProjects"("A", "B");

-- CreateIndex
CREATE INDEX "_ImagesToProjects_B_index" ON "_ImagesToProjects"("B");

-- AddForeignKey
ALTER TABLE "_ImagesToProjects" ADD CONSTRAINT "_ImagesToProjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImagesToProjects" ADD CONSTRAINT "_ImagesToProjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
