export const SEE_MORE_VALUE = "Voir plus";

export const buildSeeMoreString = (text: string, maxCharactersNb: number) => {
    let charactersNb = 0;
    let seeMoreString = "";
    let shouldStop = false;

    const words = text.split(' ');

    for (let index = 0; index < words.length && !shouldStop; index++) {
        if (charactersNb + words[index].length < maxCharactersNb) {
            seeMoreString += ` ${words[index]}`;
            charactersNb += words[index].length + 1;
        }      
        else {
            shouldStop = true;
        }  
    }

    if (shouldStop) {
        seeMoreString += "... <span class='see-more'>Voir plus</span>"
    }

    return seeMoreString;
};