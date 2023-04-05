import init, { Universe } from "wasm-app"

const gameoflifeInit = {
    data() {
        return {
            universeRender: null,
            width: 0,
            height: 0,
            start: false
        }
    },

    watch: {
        start() {
            if (this.start) {
                init().then((raw) => {
                    const universe = Universe.new(this.width, this.height)
                    const renderLoop = () => {
                        this.universeRender = universe.render()
                        universe.tick()
                        requestAnimationFrame(renderLoop)
                    }
                    requestAnimationFrame(renderLoop)
                })
            }
        }
    }
}

export default gameoflifeInit