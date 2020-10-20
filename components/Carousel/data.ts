const image =
  "https://img.thrivemarket.com/custom_assets/759ce3d48e3628b5e29f2a6c0c547c26.jpg?w=1440";

export default function carouselData() {
  return [...[1, 2, 3, 4].map((id) => ({ id, image })),{id:5, image:'/seo-card.jpg'}];
}
