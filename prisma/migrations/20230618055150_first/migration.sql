-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "categority" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "github" TEXT,
    "live" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tech" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "point1" TEXT,
    "point2" TEXT,
    "point3" TEXT,
    "point4" TEXT,
    "point5" TEXT,
    "point6" TEXT,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectsToTech" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ContentToProjects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tech_name_key" ON "Tech"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectsToTech_AB_unique" ON "_ProjectsToTech"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectsToTech_B_index" ON "_ProjectsToTech"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ContentToProjects_AB_unique" ON "_ContentToProjects"("A", "B");

-- CreateIndex
CREATE INDEX "_ContentToProjects_B_index" ON "_ContentToProjects"("B");

-- AddForeignKey
ALTER TABLE "_ProjectsToTech" ADD CONSTRAINT "_ProjectsToTech_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToTech" ADD CONSTRAINT "_ProjectsToTech_B_fkey" FOREIGN KEY ("B") REFERENCES "Tech"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToProjects" ADD CONSTRAINT "_ContentToProjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToProjects" ADD CONSTRAINT "_ContentToProjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
