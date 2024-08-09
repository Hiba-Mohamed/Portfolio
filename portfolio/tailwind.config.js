/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "lg-custom":
          "0 -0.5px 15px -4px rgba(0, 0, 0, 0.15), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      spacing: {
        100: "25rem", // 400px
        104: "26rem", // 416px
        108: "27rem", // 432px
        112: "28rem", // 448px
        116: "29rem", // 464px
        120: "30rem", // 480px
        128: "32rem", // 512px
        136: "34rem", // 544px
        144: "36rem", // 576px
        152: "38rem", // 608px
        160: "40rem", // 640px
        176: "44rem", // 704px
        192: "48rem", // 768px
        208: "52rem", // 832px
        224: "56rem", // 896px
        240: "60rem", // 960px
        256: "64rem", // 1024px
      },
      backgroundImage: {
        banner: "url('omer-yildiz-U7rwm4WmIPA-unsplash.jpg')",
      },
      colors: {
        navy: "#08263C",
      },
    },
    plugins: [],
  },
};
