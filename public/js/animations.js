gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

gsap.utils.toArray(".all_title").forEach((all_title) => {
    gsap.fromTo(
        all_title,
        {
            letterSpacing: "10px",
            opacity: 0,
            x: 300,
            skewX: 65,
        },
        {
            letterSpacing: "0",
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 0.7,
            delay: 0.5,
            scrollTrigger: {
                trigger: all_title,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        }
    );
});

gsap.utils.toArray(".paragraph_lines").forEach((paragraph_lines) => {
    const originalText = paragraph_lines.textContent;

    gsap.fromTo(
        paragraph_lines,
        {
            text: {
                value: randomizeText(originalText),
                scrambleText: {
                    chars: "AXdYcFGhBe0123456789!@#$%^&*()",
                    speed: 1,
                    duration: 3,
                },
            },
            opacity: 0,
        },
        {
            text: originalText,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: paragraph_lines,
                start: "top 80%",
                toggleActions: "play none none reset",
            },
        }
    );
});

function randomizeText(text) {
    return text
        .split("")
        .map((char) => {
            if (char !== " ") {
                return String.fromCharCode(33 + Math.floor(Math.random() * 94));
            }
            return char;
        })
        .join("");
}

var tl = new TimelineMax({ repeat: -1, repeatDelay: 2 });

tl.to(".glitch", 0.1, { skewX: 70, ease: Power4.easeInOut })
    .to(".glitch", 0.04, { skewX: 0, ease: Power4.easeInOut })
    .to(".glitch", 0.04, { opacity: 0 })
    .to(".glitch", 0.04, { opacity: 1 })
    .to(".glitch", 0.04, { x: -20 })
    .to(".glitch", 0.04, { x: 0 })
    .add("split", 0)
    .to(".top", 0.5, { x: -60, ease: Power4.easeInOut }, "split")
    .to(".bottom", 0.5, { x: 60, ease: Power4.easeInOut }, "split")
    .to(".glitch", 0.08, { className: "+=redShadow" }, "split")

    .to("#txt", 0, { scale: 1.1 }, "split")
    .to("#txt", 0, { scale: 1 }, "+=0.02")

    .to(".glitch", 0.08, { className: "-=redShadow" }, "+=0.09")
    .to(".glitch", 0.03, { className: "+=greenShadow" }, "split")
    .to(".glitch", 0.03, { className: "-=greenShadow" }, "+=0.01")

    .to(".top", 0.2, { x: 0, ease: Power4.easeInOut })
    .to(".bottom", 0.2, { x: 0, ease: Power4.easeInOut })

    .to(".glitch", 0.02, { scaleY: 1.1, ease: Power4.easeInOut })
    .to(".glitch", 0.04, { scaleY: 1, ease: Power4.easeInOut });

const tl2 = gsap.timeline({
    defaults: {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power2.out",
    },
});
tl2.from("#project-heading", {
    scrollTrigger: {
        trigger: "#project-heading",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
});
tl2.from("#project", {
    scrollTrigger: {
        trigger: "#project",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
});
tl2.from("#project2", {
    scrollTrigger: {
        trigger: "#project2",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
});

//service page animation
gsap.to("#rorate-svg", {
    rotation: 360,
    transformOrigin: "center",
    repeat: -1,
    duration: 7,
    ease: "linear",
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#popup-col", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#popup-col",
            start: "top center",
            toggleActions: "play none none reset",
        },
    });

    gsap.from("#heading-h1", {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#heading-h1-trigger",
            start: "top 80%",
            toggleActions: "play none none reset",
        },
    });

    gsap.to("#after-heading-text, #animate-img", {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1,
        ease: "back.out(1.7)",
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#heading-h1",
            start: "top 80%",
            toggleActions: "play none none reset",
        },
    });

    gsap.to("#popup-sec-1", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#popup-sec-1",
            start: "top 80%",
            toggleActions: "play none none reset",
        },
    });

    gsap.to("#popup-sec-2", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#popup-sec-2",
            start: "top 80%",
            toggleActions: "play none none reset",
        },
    });
});

// Footer animation start
let balls = document.querySelectorAll(".ball");
balls.forEach(function (ball) {
    let dx = Math.random() * 2 - 1; // Generate random value between -1 and 1 for horizontal direction
    let dy = Math.random() * 2 - 1; // Generate random value between -1 and 1 for vertical direction
    moveBall(ball, parseInt(ball.style.left), parseInt(ball.style.top), dx, dy);
});

function moveBall(ball, x, y, dx, dy) {
    let speed = 2.4; // Set a fixed speed value

    function changeDirectionIfNecessary(x, y) {
        let rect = ball.getBoundingClientRect();
        let canvasWidth =
            document.querySelector(".rotating-canvas").offsetWidth;
        let canvasHeight =
            document.querySelector(".rotating-canvas").offsetHeight;
        let overflow = 120; // Number of pixels allowed to go outside the canvas

        if (x < -overflow || x > canvasWidth - rect.width + overflow) {
            dx = -dx;
        }
        if (y < -overflow || y > canvasHeight - rect.height + overflow) {
            dy = -dy;
        }
        return { dx, dy };
    }

    function draw() {
        let rect = ball.getBoundingClientRect();

        x += dx * speed; // Apply the speed
        y += dy * speed; // Apply the speed

        ball.style.left = x + "px";
        ball.style.top = y + "px";

        let directions = changeDirectionIfNecessary(x, y);
        dx = directions.dx;
        dy = directions.dy;

        setTimeout(draw, 1000 / 60);
    }

    draw();
}
// Footer animation end
