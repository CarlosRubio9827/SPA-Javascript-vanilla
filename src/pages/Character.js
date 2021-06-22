import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async ()=>{
    const id = getHash();
    const character = await getData(id)
    const view = /*html*/`
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Character-card">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: ${character.species}</h3>
                <h3>Gender: ${character.gender}</h3>
                <h3>Origin: ${character.origin.name}</h3>
                <h3>Last Location: ${character.location.name}</h3>
            </article>
        </div>
    `;
    return view;
}
export default Character