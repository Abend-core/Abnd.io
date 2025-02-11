const modules = [
    {
        id: "4e93b1a1-f097-7f3b-b8c9-45f56bc59c7e",
        name: "Le cnam",
        link: "https://idp.lecnam.net",
        image: "cnam.jpg",
        content: "Ceci est une description temporaire.",
        isAlert: false,
        user_id: "018f3b9c-93a6-772f-bc34-4d2f8e3d5a6b",
    },
    {
        id: "adf48a2c-711b-7cfa-bfc5-d70f8b80b5ae",
        name: "Github",
        link: "https://github.com/",
        image: "github.png",
        content: "Ceci est une description temporaire.",
        isAlert: false,
        user_id: "018f3c2b-93a6-772f-bc34-4d2f8e3d5a7c",
    },
    {
        id: "d5f74bfa-b5f9-7c9b-9c3f-0e63973c25ad",
        name: "Anime-sama",
        link: "https://anime-sama.fr/",
        image: "anime.png",
        content: "Ceci est une description temporaire.",
        isAlert: false,
        user_id: "018f3c5d-93a6-772f-bc34-4d2f8e3d5a7f",
    },
    {
        id: "3f7e59a2-4df5-7b1f-92e9-43e4bba506c9",
        name: "Portfolio Lucas",
        link: "https://lucas-rolland.netlify.app/",
        image: "portfolio.png",
        content: "Ceci est une description temporaire.",
        isAlert: false,
        user_id: "018f3c5d-93a6-772f-bc34-4d2f8e3d5a7f",
    },
    {
        id: "8f97baf1-2a4d-7f8f-a3b8-4e7fcfb6d1b4",
        name: "Code Academy",
        link: "https://www.codeacademy.com",
        image: "logo.png",
        content: "Une plateforme d'apprentissage du codage.",
        isAlert: false,
        user_id: "018f3ca1-93a6-772f-bc34-4d2f8e3d5a80", // Jerome
    },
    {
        id: "e78bc3a3-ec92-7f5e-a2b3-c9076e63c4f2",
        name: "MangaHub",
        link: "https://www.mangahub.com",
        image: "logo.png",
        content: "Explorez une grande variété de mangas.",
        isAlert: false,
        user_id: "018f3cc3-93a6-772f-bc34-4d2f8e3d5a81", // Emma
    },
    {
        id: "f42c89d4-7db5-72f7-b5ad-6c73e983ef12",
        name: "Tech News",
        link: "https://www.technews.com",
        image: "logo.png",
        content: "Votre source quotidienne pour des actualités sur la tech.",
        isAlert: false,
        user_id: "018f3d97-93a6-772f-bc34-4d2f8e3d5a86", // Michael
    },
    {
        id: "d0f3cdd2-d38b-72f9-bb44-758f2ea7563d",
        name: "Cooking World",
        link: "https://www.cookingworld.com",
        image: "logo.png",
        content: "Découvrez des recettes de cuisine du monde entier.",
        isAlert: false,
        user_id: "018f3f32-93a6-772f-bc34-4d2f8e3d5a90", // George
    },
    {
        id: "34d129d0-0b38-7a3e-bcdb-798fd0efadd1",
        name: "Workout App",
        link: "https://www.workoutapp.com",
        image: "logo.png",
        content: "Suivez votre programme d'entraînement et de nutrition.",
        isAlert: false,
        user_id: "018f3e37-93a6-772f-bc34-4d2f8e3d5a8a", // Lena
    },
    {
        id: "b3e35f7d-3ad3-7b7b-a1d9-88bf22b0d855",
        name: "MovieTime",
        link: "https://www.movietime.com",
        image: "logo.png",
        content: "Regardez vos films et séries préférés en ligne.",
        isAlert: false,
        user_id: "018f3e61-93a6-772f-bc34-4d2f8e3d5a8b", // Samuel
    },
    {
        id: "72913b87-8d9f-72a5-a6ea-1e7f8cb83a91",
        name: "Art Gallery",
        link: "https://www.artgallery.com",
        image: "logo.png",
        content: "Découvrez des œuvres d'art modernes et classiques.",
        isAlert: false,
        user_id: "018f3f5c-93a6-772f-bc34-4d2f8e3d5a91", // Charlotte
    },
    {
        id: "b23e789c-4046-7f89-b4b3-54a22b41a1d3",
        name: "Music Hub",
        link: "https://www.musichub.com",
        image: "logo.png",
        content:
            "Écoutez de la musique en streaming avec vos artistes préférés.",
        isAlert: false,
        user_id: "018f3f86-93a6-772f-bc34-4d2f8e3d5a92", // Jules
    },
    {
        id: "b9c24e75-48b9-7284-9b71-6a5206606a39",
        name: "Travel Explorer",
        link: "https://www.travelexplorer.com",
        image: "logo.png",
        content: "Découvrez des destinations incroyables pour vos vacances.",
        isAlert: false,
        user_id: "018f3d43-93a6-772f-bc34-4d2f8e3d5a84", // Sophia
    },
    {
        id: "da59c45d-5728-7b7f-b11d-b43572558d90",
        name: "Sports Hub",
        link: "https://www.sportshub.com",
        image: "logo.png",
        content:
            "Suivez les dernières nouvelles et scores de vos sports favoris.",
        isAlert: false,
        user_id: "018f3fda-93a6-772f-bc34-4d2f8e3d5a94", // Alice
    },
    {
        id: "54b823df-b493-72ea-a5a7-8b8b13a66b3b",
        name: "DevHub",
        link: "https://www.devhub.com",
        image: "logo.png",
        content: "Un endroit où les développeurs partagent leurs ressources.",
        isAlert: false,
        user_id: "018f3d19-93a6-772f-bc34-4d2f8e3d5a83", // David
    },
    {
        id: "fb34d78a-2e77-7e90-9131-9b4fc3512c2e",
        name: "Creative Portfolio",
        link: "https://www.creativeportfolio.com",
        image: "logo.png",
        content: "Un site pour afficher vos œuvres créatives.",
        isAlert: false,
        user_id: "018f3cf6-93a6-772f-bc34-4d2f8e3d5a82", // Alice
    },
    {
        id: "a9836ef2-b45d-7e16-b7fd-9c864b2ec91a",
        name: "Science Blog",
        link: "https://www.scienceblog.com",
        image: "logo.png",
        content: "Les dernières nouvelles et recherches scientifiques.",
        isAlert: false,
        user_id: "018f3d43-93a6-772f-bc34-4d2f8e3d5a84", // Sophia
    },
    {
        id: "f2d6b9d3-d290-75db-941f-4c5fdf1f351a",
        name: "Language Learning",
        link: "https://www.languagelearning.com",
        image: "logo.png",
        content: "Apprenez une nouvelle langue facilement et rapidement.",
        isAlert: false,
        user_id: "018f3ca1-93a6-772f-bc34-4d2f8e3d5a80", // Jerome
    },
    {
        id: "df5b903c-92b1-7c28-91cc-c13e299dfbd3",
        name: "Health Matters",
        link: "https://www.healthmatters.com",
        image: "logo.png",
        content: "Tout sur la santé, le bien-être et la nutrition.",
        isAlert: false,
        user_id: "018f3e61-93a6-772f-bc34-4d2f8e3d5a8b", // Samuel
    },
    {
        id: "b35b5dcb-bce8-7d84-b88a-3c32b392a90e",
        name: "Fitness Tracker",
        link: "https://www.fitnesstracker.com",
        image: "logo.png",
        content: "Suivez vos progrès en matière de fitness.",
        isAlert: false,
        user_id: "018f3e37-93a6-772f-bc34-4d2f8e3d5a8a", // Lena
    },
    {
        id: "b842a7b8-cf0e-7e5a-83b4-229a497663ea",
        name: "MovieStream",
        link: "https://www.moviestream.com",
        image: "logo.png",
        content: "Regardez des films en streaming sans abonnement.",
        isAlert: false,
        user_id: "018f3b9c-93a6-772f-bc34-4d2f8e3d5a6b", // Rudy
    },
    {
        id: "a745679f-3fd2-7c60-b3c7-e0812adfaee0",
        name: "PhotoGallery",
        link: "https://www.photogallery.com",
        image: "logo.png",
        content: "Explorez une galerie de photos de haute qualité.",
        isAlert: false,
        user_id: "018f3e0d-93a6-772f-bc34-4d2f8e3d5a89", // Victor
    },
    {
        id: "8c0a53e2-d07f-748a-b3b2-1a24e6e7a2f3",
        name: "Gaming Zone",
        link: "https://www.gamingzone.com",
        image: "logo.png",
        content: "Les derniers jeux et critiques de jeux vidéo.",
        isAlert: false,
        user_id: "018f3f08-93a6-772f-bc34-4d2f8e3d5a8f", // Sophie
    },
    {
        id: "15bce3d8-c83b-7fa6-9c98-cb9cb7e9b846",
        name: "Photography Hub",
        link: "https://www.photohub.com",
        image: "logo.png",
        content: "Partagez vos photos avec la communauté.",
        isAlert: false,
        user_id: "018f3f32-93a6-772f-bc34-4d2f8e3d5a90", // George
    },
    {
        id: "ac319f5f-d94f-72f1-a8a9-b0d8b7da5405",
        name: "Tech Insights",
        link: "https://www.techinsights.com",
        image: "logo.png",
        content: "Les dernières tendances technologiques et innovations.",
        isAlert: false,
        user_id: "018f3f86-93a6-772f-bc34-4d2f8e3d5a92", // Jules
    },
    {
        id: "ac1b479d-65da-78c5-96b8-cfbc9d1c0b7d",
        name: "Digital Marketing Hub",
        link: "https://www.digitalmarketinghub.com",
        image: "logo.png",
        content: "Découvrez les meilleures stratégies marketing digitales.",
        isAlert: false,
        user_id: "018f3f5c-93a6-772f-bc34-4d2f8e3d5a91", // Charlotte
    },
    {
        id: "b1c4639a-dfa4-7a52-b617-0345374fbdbf",
        name: "Web Design Academy",
        link: "https://www.webdesignacademy.com",
        image: "logo.png",
        content: "Un centre d'apprentissage pour le design web.",
        isAlert: false,
        user_id: "018f3de3-93a6-772f-bc34-4d2f8e3d5a88", // Clara
    },
    {
        id: "a5c8df3e-89e2-7d71-a9ad-732d963e8f51",
        name: "Foodie Nation",
        link: "https://www.foodienation.com",
        image: "logo.png",
        content:
            "Explorez des recettes et conseils de cuisine du monde entier.",
        isAlert: false,
        user_id: "018f3d97-93a6-772f-bc34-4d2f8e3d5a86", // Michael
    },
    {
        id: "c1a8b7a9-1f93-79db-a8a2-5e04b67d13d8",
        name: "TravelExplorer",
        link: "https://www.travelexplorer.com",
        image: "logo.png",
        content: "Partez à la découverte de destinations de rêve.",
        isAlert: false,
        user_id: "018f3cc3-93a6-772f-bc34-4d2f8e3d5a81", // Emma
    },
    {
        id: "b6c8a678-c072-7a97-9b6d-dc12e3435a5a",
        name: "DIY Projects",
        link: "https://www.diyprojects.com",
        image: "logo.png",
        content: "Des projets créatifs et manuels à réaliser chez soi.",
        isAlert: false,
        user_id: "018f3ca1-93a6-772f-bc34-4d2f8e3d5a80", // Jerome
    },
    {
        id: "94a8d221-7129-7d60-825f-5d1f49b9c8b0",
        name: "Gaming Universe",
        link: "https://www.gaminguniverse.com",
        image: "logo.png",
        content:
            "Plongez dans l'univers des jeux vidéo avec des critiques et des news.",
        isAlert: false,
        user_id: "018f3db9-93a6-772f-bc34-4d2f8e3d5a87", // Maxime
    },
    {
        id: "7d8a3ed7-f8e9-7fa9-a5e4-ff72c63ed245",
        name: "PhotoMaster",
        link: "https://www.photomaster.com",
        image: "logo.png",
        content: "Apprenez à prendre des photos comme un professionnel.",
        isAlert: false,
        user_id: "018f3f32-93a6-772f-bc34-4d2f8e3d5a90", // George
    },
    {
        id: "d4e2a9f1-850a-779f-b10c-f289b5a1e87d",
        name: "Health & Fitness",
        link: "https://www.healthandfitness.com",
        image: "logo.png",
        content: "Atteignez vos objectifs de santé et de forme physique.",
        isAlert: false,
        user_id: "018f3b9c-93a6-772f-bc34-4d2f8e3d5a6b", // Rudy
    },
    {
        id: "f0d576bb-2dbd-73a4-b9ae-21176a272a38",
        name: "Music Discoveries",
        link: "https://www.musicdiscoveries.com",
        image: "logo.png",
        content: "Découvrez de la nouvelle musique chaque jour.",
        isAlert: false,
        user_id: "018f3d6d-93a6-772f-bc34-4d2f8e3d5a85", // John
    },
];

export { modules };
