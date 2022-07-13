


interface SeedData{
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status:string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description:
                " Pendiente: Mollit aute magna labore veniam est voluptate proident cupidatat irure.",
            status: "pending",
            createdAt: Date.now(),
        },
        {
            description:
                "In-Progress Magna et laboris ea fugiat dolore fugiat sunt est in dolore cillum minim proident non.",
            status: "in-progress",
            createdAt: Date.now(),
        },
        {
            description:
                "Finished: Eiusmod adipisicing do officia magna nostrud eiusmod esse sunt.",
            status: "finished",
            createdAt: Date.now(),
        },
    ],
};
