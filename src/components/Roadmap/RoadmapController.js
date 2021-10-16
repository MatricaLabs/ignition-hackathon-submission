
export default class RoadmapController {

    window = null;
    document = null;
    lastScrollTop = 0;

    initialPositions = {
        1: { top: 0, left: 0 },
        2: { top: 0, left: 0 },
        3: { top: 0, left: 0 },
        4: { top: 0, left: 0 },
        5: { top: 0, left: 0 },
        6: { top: 0, left: 0 },
    };

    targetPositions = {
        1: { top: 0, left: 0 },
        2: { top: 0, left: 0 },
        3: { top: 0, left: 0 },
        4: { top: 0, left: 0 },
        5: { top: 0, left: 0 },
        6: { top: 0, left: 0 },
    };

    constructor(window, document) {
        this.window = window;
        this.document = document;
        this.setInitialPositions();
    }

    setInitialPositions() {
        for (let i = 1; i <= 6; i++) {
            let initial = this.document.getElementsByClassName("start-" + i)[0];
            let target = this.document.getElementsByClassName("target-" + i)[0];

            if (initial && target) {
                console.log(initial);
                const initialRect = initial.getBoundingClientRect();
                const targetRect = target.getBoundingClientRect();

                this.initialPositions[i].top = initialRect.top;
                this.initialPositions[i].left = initialRect.left;
                this.targetPositions[i].top = targetRect.top;
                this.targetPositions[i].left = targetRect.left;
            }
        }
    }

    getOffset(i) {
        let offsetTop = 0;
        let offsetLeft = 0;
        let multiplier = this.window.innerWidth / 1024;

        switch (i) {
            case 1:
                offsetTop = -450;
                offsetLeft = -500;
                break;
            case 2:
                offsetTop = -450;
                offsetLeft = -500;
                break;
            case 3:
                offsetTop = -250;
                offsetLeft = -500;
                break;
            case 4:
                offsetTop = -350;
                offsetLeft = -500;
                break;
            case 5:
                offsetTop = -450;
                offsetLeft = -500;
                break;
            case 6:
                offsetTop = -450;
                offsetLeft = -500;
                break;
            default:
                offsetTop = 2;
                offsetLeft = 0;
                break;
        }

        return { top: offsetTop, left: offsetLeft };
    };

    handleScroll() {
        var windowHeight = this.window.innerHeight;
        var scrollArea = 1000 - windowHeight;
        let scrollLeft = this.window.pageXOffset || this.document.documentElement.scrollLeft;
        let scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
        var scrollPercent = scrollTop / scrollArea || 0;
        console.log({ scrollTop, scrollArea, scrollPercent });
        if (scrollTop > this.lastScrollTop) {
            this.handleScrollDown(scrollTop, scrollLeft, scrollPercent);
        }
        else {
            this.handleScrollUp(scrollTop, scrollLeft, scrollPercent);
        }

        this.lastScrollTop = scrollTop;
    };

    handleScrollUp = (scrollTop, scrollLeft, scrollPercent) => {
        for (let i = 1; i <= 6; i++) {
            let square = this.document.getElementsByClassName("start-" + i)[0];
            let target = this.document.getElementsByClassName("initial-" + i)[0];

            let topCollision = false;
            let leftCollision = false;

            square.style.position = "absolute";

            let curr = square.getBoundingClientRect();
            let top = scrollTop + curr.top;
            let left = scrollLeft + curr.left;
            let newTop = scrollTop + this.initialPositions[i].top;
            let newLeft = scrollLeft + this.initialPositions[i].left;
            let targetTop = this.initialPositions[i].top;
            let targetLeft = this.initialPositions[i].left;
            const offset = this.getOffset(i);
            const offsetLeft = offset.left * scrollPercent;
            const offsetTop = offset.top * scrollPercent;

            console.log({top, targetTop});
            if (top < (targetTop + 50)) {
                topCollision = true;
            }

            if (left < targetLeft + 50 && left > targetLeft - 50) {
                leftCollision = true;
            }

            if (leftCollision || topCollision) {
                square.style.left = targetLeft + "px";
                square.style.top = targetTop + "px";
                square.style.visibility = "hidden";
                //target.style.opacity = 1;
                continue;
            }

            if (top > targetTop) {
                square.style.top = newTop - offsetTop + "px";
            }

            if (left > this.targetPositions[i].left) {
                square.style.left = newLeft - offsetLeft + "px";
            }

            if (left < this.targetPositions[i].left) {
                square.style.left = newLeft + offsetLeft + "px";
            }
        }
    };

    handleScrollDown = (scrollTop, scrollLeft, scrollPercent) => {
        for (let i = 1; i <= 6; i++) {
            let square = this.document.getElementsByClassName("start-" + i)[0];
            let target = this.document.getElementsByClassName("target-" + i)[0];
            let topCollision = false;
            let leftCollision = false;

            square.style.position = "absolute";

            let curr = square.getBoundingClientRect();
            let top = scrollTop + curr.top;
            let left = scrollLeft + curr.left;
            let newTop = scrollTop + this.initialPositions[i].top;
            let newLeft = scrollLeft + this.initialPositions[i].left;
            let targetTop = this.targetPositions[i].top;
            let targetLeft = this.targetPositions[i].left;
            const offset = this.getOffset(i);
            const offsetLeft = offset.left * scrollPercent;
            const offsetTop = offset.top * scrollPercent;

            if (top > (targetTop - 50)) {
                topCollision = true;
            }

            if (left < targetLeft + 50 && left > targetLeft - 50) {
                leftCollision = true;
            }

            if (leftCollision || topCollision) {
                square.style.left = targetLeft + "px";
                square.style.top = targetTop + "px";
                square.style.visibility = "hidden";
                target.style.opacity = 1;
                continue;
            }

            if (top < targetTop) {
                square.style.top = newTop + offsetTop + "px";
            }

            if (left > this.targetPositions[i].left) {
                square.style.left = newLeft - offsetLeft + "px";
            }

            if (left < this.targetPositions[i].left) {
                square.style.left = newLeft + offsetLeft + "px";
            }
        }
    };



}