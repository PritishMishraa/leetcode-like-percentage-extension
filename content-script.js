window.addEventListener('load', () => {
    const PARENT_CLASS_NAME = 'css-10o4wqw'
    const SIBLING_CLASS_NAME = 'css-1rdgofi'

    console.log("LeetCode Liked Percentage Extension Running")

    const parentElement = document.getElementsByClassName(PARENT_CLASS_NAME)

    const likes = parseInt(parentElement[0].children[1].innerText)
    const dislikes = parseInt(parentElement[0].children[2].innerText)
    const percentage = ((likes) / (likes + dislikes) * 100).toPrecision(4)

    const percentageElement = document.createElement("div")

    percentageElement.textContent = percentage

    let color = ''
    if (percentage >= 75) {
        color = 'green'
    } else {
        color = 'red'
    }

    percentageElement.className = SIBLING_CLASS_NAME
    percentageElement.style.fontWeight = 700
    percentageElement.style.color = color

    document.getElementsByClassName(PARENT_CLASS_NAME)[0].insertBefore(percentageElement, document.getElementsByClassName(PARENT_CLASS_NAME)[0].children[2])
});