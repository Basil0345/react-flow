// Initial node and edge data
export const initialNodes = [
    {
        id: "1",
        position: { x: 0, y: 0 },
        data: { name: "John Doe", designation: "Founder", children: ["2", "3"] },
        type: "employeeCard",
    },
    {
        id: "2",
        position: { x: 400, y: 0 },
        data: { name: "Jane Smith", designation: "CFO", children: ["4", "5"] },
        type: "employeeCard",
    },
    {
        id: "3",
        position: { x: 400, y: 90 },
        data: { name: "Mark Johnson", designation: "CTO", children: ["6", "7"] },
        type: "employeeCard",
    },
    {
        id: "4",
        position: { x: 800, y: 0 },
        data: { name: "Emily Davis", designation: "Finance Manager", children: [] },
        type: "employeeCard",
    },
    {
        id: "5",
        position: { x: 800, y: 90 },
        data: { name: "Chris Wilson", designation: "Accountant", children: [] },
        type: "employeeCard",
    },
    {
        id: "6",
        position: { x: 800, y: 180 },
        data: { name: "Sarah Brown", designation: "Engineering Manager", children: ["8", "9"] },
        type: "employeeCard",
    },
    {
        id: "7",
        position: { x: 800, y: 270 },
        data: { name: "Kevin Lee", designation: "DevOps Manager", children: [] },
        type: "employeeCard",
    },
    {
        id: "8",
        position: { x: 1200, y: 180 },
        data: { name: "Lisa Taylor", designation: "Senior Developer", children: [] },
        type: "employeeCard",
    },
    {
        id: "9",
        position: { x: 1200, y: 270 },
        data: { name: "Brian Green", designation: "Junior Developer", children: [] },
        type: "employeeCard",
    },
];


export const initialEdges = [
    { id: "e1-2", source: "1", target: "2" }, // Founder to CFO
    { id: "e1-3", source: "1", target: "3" }, // Founder to CTO
    { id: "e2-4", source: "2", target: "4" }, // CFO to Finance Manager
    { id: "e2-5", source: "2", target: "5" }, // CFO to Accountant
    { id: "e3-6", source: "3", target: "6" }, // CTO to Engineering Manager
    { id: "e3-7", source: "3", target: "7" }, // CTO to DevOps Manager
    { id: "e6-8", source: "6", target: "8" }, // Engineering Manager to Senior Developer
    { id: "e6-9", source: "6", target: "9" }, // Engineering Manager to Junior Developer
];

