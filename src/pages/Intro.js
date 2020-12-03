const Intro =  async () => {
    localStorage.setItem("id", 0);

    const charactersDetails ={
        "front":[
            "https://i.ibb.co/PgRc6h0/Harry-Frente.png",
            "https://i.ibb.co/XSdgWkv/Hermione-Frente.png",
            "https://i.ibb.co/VTMmvrx/Ron-Frente.png"
        ],
        "heroes":{},
        "villians":{}
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