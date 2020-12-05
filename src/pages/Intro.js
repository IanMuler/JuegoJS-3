const Intro = async () => {
    localStorage.setItem("id", 0);

    const charactersDetails = {
        "front": [
            "https://i.ibb.co/PgRc6h0/Harry-Frente.png",
            "https://i.ibb.co/XSdgWkv/Hermione-Frente.png",
            "https://i.ibb.co/VTMmvrx/Ron-Frente.png"
        ],
        "fightWallpaper": [
            "https://i.ibb.co/1bPd3DD/Fondo-troll.jpg",
            "https://i.ibb.co/6b1vSm8/Fondo-quirrel.jpg",
            "https://i.ibb.co/kxQwpRz/Fondo-basilisco.jpg",
            "https://i.ibb.co/2Yhjggc/Fondo-tom.jpg",
            "https://i.ibb.co/82dhTPZ/Pettigrew2.jpg",
            "https://i.ibb.co/qB381Ts/Fondo-dementor.jpg",
            "https://i.ibb.co/SXJGBTY/Fondo-dragon.jpg",
            "https://i.ibb.co/N7bhsVN/Fondo-voldemort.jpg",
            "https://i.ibb.co/PtCvKHN/Fondo-umbridge.jpg",
            "https://i.ibb.co/DtGdkfK/Fondo-lucius.jpg",
            "https://i.ibb.co/k6Q2vTs/Fondo-bellatrix.jpg",
            "https://i.ibb.co/vdX7RBR/Fondo-draco.jpg",
            "https://i.ibb.co/jh2dcMY/Fondo-voldemort2.jpg",
        ],
        "floor": [
            "https://i.ibb.co/znzSd0w/Piso1-12.jpg",
            "https://i.ibb.co/bF5Wcvg/Piso2.png",
            "https://i.ibb.co/rdJP9HM/Piso3-4.png",
            "https://i.ibb.co/rdJP9HM/Piso3-4.png",
            "https://i.ibb.co/n6g0B1L/Piso5-6.jpg",
            "https://i.ibb.co/n6g0B1L/Piso5-6.jpg",
            "https://i.ibb.co/fQbyH7s/Piso7.jpg",
            "https://i.ibb.co/pW72gg6/Piso8-13.jpg",
            "https://i.ibb.co/W2MKLKR/Piso9.jpg",
            "https://i.ibb.co/rMJjy1s/Piso10.jpg",
            "https://i.ibb.co/Z8JCRc3/Piso11.jpg",
            "https://i.ibb.co/znzSd0w/Piso1-12.jpg",
            "https://i.ibb.co/pW72gg6/Piso8-13.jpg",
        ],
        "heroes": [
            [
                "https://i.ibb.co/k4ZHWvs/Harry1.png",
                "https://i.ibb.co/k4ZHWvs/Harry1.png",
                "https://i.ibb.co/k4ZHWvs/Harry1.png",
                "https://i.ibb.co/k4ZHWvs/Harry1.png",
                "https://i.ibb.co/6yBpCLk/Harry5.png",
                "https://i.ibb.co/6yBpCLk/Harry5.png",
                "https://i.ibb.co/NZkC8Fy/Harry7-2.png"
            ]
            [
                "https://i.ibb.co/TBFBqH0/Hermione1-2.png",
                "https://i.ibb.co/TBFBqH0/Hermione1-2.png",
                "https://i.ibb.co/G04SbfN/Hermione3.png",
                "https://i.ibb.co/TBFBqH0/Hermione1-2.png",
                "https://i.ibb.co/t226yS2/Hermione1.png", //hermione 5
                "https://i.ibb.co/TThDYZn/Hermione4.png",
                "https://i.ibb.co/TThDYZn/Hermione4.png"
            ]
            // [
            //     "https://i.ibb.co/DDMVHPF/Ron1.png",
            //     "https://i.ibb.co/Mht67jq/Ron2.png",
            //     "https://i.ibb.co/NZxj74h/Ron4.png",
            //     "https://i.ibb.co/NZxj74h/Ron4.png",
            //     "https://i.ibb.co/NZxj74h/Ron4.png",
            //     "https://i.ibb.co/NZxj74h/Ron4.png",
            //     "https://i.ibb.co/NZxj74h/Ron4.png"
            // ]
        ],
        "villains": [
            "https://i.ibb.co/3NwLqJk/Troll.png",
            "https://i.ibb.co/9W2YmLc/Quirrell.png",
            "https://i.ibb.co/vXDKfpV/Basilisco.png",
            "https://i.ibb.co/nrvMdS8/Tom-Riddle.png",
            "https://i.ibb.co/Jx6YKTd/Petegrew.png",
            "https://i.ibb.co/F8QBVLm/Dementor.png",
            "https://i.ibb.co/ZfYWVrg/Dragon1.png",            
            "https://i.ibb.co/svjwfkF/Voldemort.png",
            "https://i.ibb.co/JCcLLK8/Umbridge.png",
            "https://i.ibb.co/b2C2tby/Lucius.png",
            "https://i.ibb.co/L9g7mRb/Bellatrix.png",
            "https://i.ibb.co/xD5tJLb/Draco.png",
            "https://i.ibb.co/TBX5kG8/Voldemort2.png",
        ]
    }

    localStorage.setItem("charactersDetails", JSON.stringify(charactersDetails));

    const view = `
    <div class="intro-wallpaper">
        <div class="logo">
            <img src="https://i.ibb.co/qr326St/Intro-png.png" alt="">
        </div>
        <a href="#/select-character/0">
        <img src="https://i.ibb.co/JHZRL62/Intro-png2.png" alt="">
        </a>
    </div>
  `;
    return view;
};

export default Intro;