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
                "https://i.ibb.co/qCxvP3G/Harry4.png",
                "https://i.ibb.co/qCxvP3G/Harry4.png",
                "https://i.ibb.co/BnV0pMM/Harry5-2.png",
                "https://i.ibb.co/BnV0pMM/Harry5-2.png",
                "https://i.ibb.co/BnV0pMM/Harry5-2.png",
                "https://i.ibb.co/QCfkd4C/Harry6.png",
                "https://i.ibb.co/NZkC8Fy/Harry7-2.png"
            ],
            [
                "https://i.ibb.co/TBFBqH0/Hermione1-2.png",
                "https://i.ibb.co/TBFBqH0/Hermione1-2.png",
                "https://i.ibb.co/TBFBqH0/Hermione1-2.png",
                "https://i.ibb.co/TBFBqH0/Hermione1-2.png",
                "https://i.ibb.co/G04SbfN/Hermione3.png",
                "https://i.ibb.co/G04SbfN/Hermione3.png",
                "https://i.ibb.co/TThDYZn/Hermione4.png",
                "https://i.ibb.co/TThDYZn/Hermione4.png",
                "https://i.ibb.co/QkkdcXM/Hermione5.png", 
                "https://i.ibb.co/QkkdcXM/Hermione5.png", 
                "https://i.ibb.co/QkkdcXM/Hermione5.png",
                "https://i.ibb.co/7rNSbVY/Hermione6.png",
                "https://i.ibb.co/pKcNL9n/Hermione7.png"            
            ],
            [
                "https://i.ibb.co/tHQht12/Ron1.png",
                "https://i.ibb.co/tHQht12/Ron1.png",
                "https://i.ibb.co/Mht67jq/Ron2.png",
                "https://i.ibb.co/Mht67jq/Ron2.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png",
                "https://i.ibb.co/BZHr1LH/Ron4.png"
            ]
        ],
        "villains": [
            "https://i.ibb.co/3NwLqJk/Troll.png",
            "https://i.ibb.co/9W2YmLc/Quirrell.png",
            "https://i.ibb.co/vXDKfpV/Basilisco.png",
            "https://i.ibb.co/nrvMdS8/Tom-Riddle.png",
            "https://i.ibb.co/Jx6YKTd/Petegrew.png",
            "https://i.ibb.co/F8QBVLm/Dementor.png",
            // "https://i.ibb.co/ZfYWVrg/Dragon1.png",
            "https://i.ibb.co/r41KHLr/Dragon2.png",
            "https://i.ibb.co/svjwfkF/Voldemort.png",
            "https://i.ibb.co/JCcLLK8/Umbridge.png",
            "https://i.ibb.co/b2C2tby/Lucius.png",
            "https://i.ibb.co/L9g7mRb/Bellatrix.png",
            "https://i.ibb.co/xD5tJLb/Draco.png",
            "https://i.ibb.co/TBX5kG8/Voldemort2.png",
        ],
        "attack2png": [
            "https://i.ibb.co/Srdpn5v/Claws212.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png",
            "https://i.ibb.co/Srdpn5v/Claws212.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png",
            "https://i.ibb.co/Srdpn5v/Claws212.png",
            "https://i.ibb.co/Srdpn5v/Claws212.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png",
            "https://i.ibb.co/KKSvGpH/Rayoverde.png"   
        ],
        "defense2png": [
            "https://i.ibb.co/KXnrBVk/baston.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/vdfyhv7/escudosnake-removebg-preview.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/vdfyhv7/escudosnake-removebg-preview.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png",
            "https://i.ibb.co/b3y8dd7/Shield-Villain.png"   
        ]

    }

    const fightClasses = {
        "heroes": [
            [
                "Harry0",
                "Harry1",
                "Harry2",
                "Harry3",
                "Harry4",
                "Harry5",
                "Harry6",
                "Harry7",
                "Harry8",
                "Harry9",
                "Harry10",
                "Harry11",
                "Harry12"
            ],
            [
                "Hermione0",
                "Hermione1",
                "Hermione2",
                "Hermione3",
                "Hermione4",
                "Hermione5",
                "Hermione6",
                "Hermione7",
                "Hermione8",
                "Hermione9",
                "Hermione10",
                "Hermione11",
                "Hermione12"
            ],
            [
                "Ron0",
                "Ron1",
                "Ron2",
                "Ron3",
                "Ron4",
                "Ron5",
                "Ron6",
                "Ron7",
                "Ron8",
                "Ron9",
                "Ron10",
                "Ron11",
                "Ron12"
            ]
        ],
        "villains": [
            "Troll",
            "Quirrell",
            "Basilisco",
            "Tom",
            "Pettigrew",
            "Dementor",
            "Dragon",
            "Voldemort1",
            "Umbridge",
            "Lucius",
            "Bellatrix",
            "Draco",
            "Voldemort2"
        ]
    }
    localStorage.setItem("charactersDetails", JSON.stringify(charactersDetails));
    localStorage.setItem("fightClasses", JSON.stringify(fightClasses));

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