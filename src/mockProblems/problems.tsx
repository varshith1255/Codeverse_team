export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Basic",
		category: "Array",
		order: 1,
		videoId: "NJcw8voO-M4",
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Challenging",
		category: "Linked List",
		order: 2,
		videoId: "",
	},
	
	{
		id: "jump-game",
		title: "Jump Game",
		difficulty: "Intermediate",
		category: "Dynamic Programming",
		order: 3,
		videoId: "",
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Basic",
		category: "Stack",
		order: 4,
		videoId: "bAg0BJXxX6U",
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Challenging",
		category: "Binary Search",
		order: 5,
		videoId: "",
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Challenging",
		category: "Two Pointers",
		order: 6,
		videoId: "",
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Intermediate",
		category: "intervals",
		order: 7,
		videoId: "",
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Basic",
		category: "Tree",
		order: 8,
		videoId: "rrXvdEMHVXc",
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Basic",
		category: "Array",
		order: 9,
		videoId: "",
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Challenging",
		category: "Backtracking",
		order: 10,
		videoId: "",
	},
];