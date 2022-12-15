

let animationBleu = document.getElementById("animationBleu");

let toggle_c = 0;

let bleu = 
    bodymovin.loadAnimation({
        container: animationBleu,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://lottie.host/c8c93407-3b67-41f8-9bd9-391153c40e12/BMUSy38oOa.json"
    });

    animationBleu.addEventListener('click', function(){
        bleu.playSegments([0,302], true);
        });

        animationBleu.addEventListener('mouseenter', function(){
            bleu.playSegments([48,108], true);
            });

            animationBleu.addEventListener('mouseleave', function(){
                bleu.playSegments([108,196], true);
                });

   

let animationToggle = document.getElementById("animationToggle");



let toggle = 
    bodymovin.loadAnimation({
        container: animationToggle,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://lottie.host/9bd1cfc2-7b2d-4786-a6f8-8c0bae447a0c/UqkR9dFpaY.json"
    });

    animationToggle.addEventListener('click', function() {
        if( toggle_c == 0 ) {
            toggle.playSegments([1,60], true);
            toggle_c = toggle_c + 1;
        } else {
            toggle.playSegments([80,120], true);
            toggle_c = 0;
        }
    });