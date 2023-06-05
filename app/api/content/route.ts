const posts = [
    {
        "title": "Exploring the Beauty of Nature",
        "content": "Yesterday, I embarked on an amazing hike through the breathtaking mountains. The scenery was absolutely stunning, with snow-capped peaks, crystal-clear lakes, and lush green valleys. I couldn't resist capturing some photos along the way. Nature truly has a way of captivating the soul!"
    },
    {
        "title": "Delicious Homemade Recipes",
        "content": "I've been experimenting in the kitchen lately, and I'm excited to share some of my favorite homemade recipes with you all. Today, I whipped up a mouthwatering batch of chocolate chip cookies that are guaranteed to satisfy your sweet tooth. Stay tuned for more delectable creations!"
    },
    {
        "title": "Travel Tales: Exploring Ancient Cities",
        "content": "During my recent travels, I had the opportunity to explore some mesmerizing ancient cities steeped in history. From the majestic ruins of Machu Picchu to the mystical temples of Angkor Wat, each step transported me back in time. It's truly humbling to witness the marvels our ancestors built."
    },
    {
        "title": "Fitness Journey: Overcoming Challenges",
        "content": "Embarking on a fitness journey has been one of the most rewarding experiences of my life. From the early morning workouts to pushing through physical barriers, I've learned the importance of discipline and self-care. Remember, progress takes time, so stay committed and embrace the journey!"
    },
    {
        "title": "Book Review: A Gripping Thriller",
        "content": "Just finished reading an incredible thriller that kept me on the edge of my seat until the very last page. The plot twists were unexpected, the characters were well-developed, and the suspense was palpable. If you're a fan of gripping mysteries, this book is an absolute must-read!"
    }
];

import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json(posts);
}