
    console.clear();
    gsap
      .timeline({ defaults: { duration: 3, ease: "power3.inOut", }, repeat: -1, repeatDelay: 10, })
      .from("#arrow", { scale: 0.35,   })
      .to(
        "#arrow",
        {
          motionPath: {
            path: "#arrowPath",
            align: "#arrowPath",
            autoRotate: -90,
                alignOrigin: [0.5, 0.5],
               
          }
        },
        "<"
      )
      .from(
        "#motionPath",
        {
            drawSVG: 0,
           
        },
        "<"
      )
      .from(
        "#imageOne",
        {
          scale: 0,
          duration: 0.78,
          transformOrigin: "center bottom",
            ease: "back",
        },
        "-=0.8"
      )
      .from(
        "#text1",
        {
          scale: 0,
          duration: 0.78,
          transformOrigin: "center bottom",
            ease: "back",
        },
        "-=0.8"
      )
      .to("svg", { opacity: 1, duration: 1, ease: "none", }, "+=1");
    console.clear();
    gsap
      .timeline({ defaults: { duration: 4, ease: "power3.inOut" }, repeat: 0 })
      .from("#arrow2", { scale: 0.35 })
      .to(
        "#arrow2",
        {
          motionPath: {
            path: "#arrowPath2",
            align: "#arrowPath2",
            autoRotate: -90,
            alignOrigin: [0.5, 0.5]
          }
        },
        "<"
      )
      .from(
        "#motionPath2",
        {
          drawSVG: 0
        },
        "<"
      )
      .from(
        "#imageTwo",
        {
          scale: 0,
          duration: 0.78,
          transformOrigin: "center bottom",
            ease: "back"
          
        },
        "-=0.8"
      )
      .from(
        "#text2",
        {
          scale: 0,
          duration: 0.78,
          transformOrigin: "center bottom",
          ease: "back"
        },
        "-=0.8"
      )
      .to("svg", { opacity: 1, duration: 1, ease: "none" }, "+=1");


    console.clear();
    gsap
      .timeline({ defaults: { duration: 4, ease: "power3.inOut" }, repeat: 0 })
      .from("#arrow3", { scale: 0.35 })
      .to(
        "#arrow3",
        {
          motionPath: {
            path: "#arrowPath3",
            align: "#arrowPath3",
            autoRotate: -90,
            alignOrigin: [0.5, 0.5]
          }
        },
        "<"
      )
      .from(
        "#motionPath3",
        {
          drawSVG: 0
        },
        "<"
      )
      .from(
        "#image3",
        {
          scale: 0,
          duration: 0.78,
          transformOrigin: "center bottom",
          ease: "back"
        },
        "-=0.8"
      )
      .from(
        "#text3",
        {
          scale: 0,
          duration: 0.78,
          transformOrigin: "center bottom",
          ease: "back"
        },
        "-=0.8"
      )
    .to("svg", { opacity: 1, duration: 1, ease: "none" }, "+=1");
      
    console.clear();
    gsap
      .timeline({ defaults: { duration: 6, ease: "power3.inOut" }, repeat: 0 })
      .from("#arrow4", { scale: 0.35 })
      .to(
        "#arrow4",
        {
          motionPath: {
            path: "#arrowPath4",
            align: "#arrowPath4",
            autoRotate: -90,
            alignOrigin: [0.5, 0.5]
          }
        },
        "<"
      )
      .from(
        "#motionPath4",
        {
          drawSVG: 0
        },
        "<"
      )
      .from(
        "#image4",
        {
          scale: 0,
          duration: 0.78,
          transformOrigin: "center bottom",
          ease: "back"
        },
        "-=0.8"
      )
      .from(
        "#text4",
        {
          scale: 0,
          duration: 0.78,
          transformOrigin: "center bottom",
          ease: "back"
        },
        "-=0.8"
      )
      .to("svg", { opacity: 1, duration: 1, ease: "none" }, "+=1");
