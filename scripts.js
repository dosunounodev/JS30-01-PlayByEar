const w = window
const d = document
const keys = d.querySelectorAll('.key')


const getKeyDiv = (keyCode) => {
    const selectedKeyDiv = d.querySelector(`.key[data-key="${keyCode}"]`)
    return selectedKeyDiv
}

const getKeySound = (keyCode) => {
    const selectedKeySound = d.querySelector(`audio[data-key="${keyCode}"]`)
    return selectedKeySound
}

const keyPressed = async (e) => {
    const selectedKey = await getKeyDiv(e.keyCode)
    const selectedSound = await getKeySound(e.keyCode)

    if (!selectedKey|| !selectedSound ) {
        return
    }

    selectedKey.classList.add('playing')
    selectedSound.currentTime = 0
    selectedSound.play()
}

const removeTransition = (e) => {
    if (e.propertyName !== "transform") return
    e.target.classList.remove('playing')
}

w.addEventListener('keydown', keyPressed)

keys.forEach(key => key.addEventListener('transitionend', removeTransition))