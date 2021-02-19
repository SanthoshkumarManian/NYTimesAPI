const card_view =document.querySelector('.result');

export const searchView=(item)=>{
    
    const html = `
            <div class="card" style="width:200px">
            <img class="card-img-top" src= ${item.multimedia!=null ? item.multimedia[0].url : "asset/slider.jpg"} alt="Card image" style="width:100%">
            <div class="card-body">
                <h4 class="card-title">${item.title}</h4>
                <p class="card-text">${item.abstract}</p>
                <p class="card-text">${item.byline}</p>
            </div>
        </div>
            `;
        card_view.insertAdjacentHTML('beforeend',html);
    }

export const movieView=(item)=>{
    const html = `
    <div class="card" style="width:200px">
    <img class="card-img-top" src= ${item.multimedia!=null ? item.multimedia.src : "asset/slider.jpg"} alt="Card image" style="width:100%">
    <div class="card-body">
        <h4 class="card-title"><strong>${item.display_title}</strong></h4>
        <p class="card-text">${item.summary_short}</p>
        <p class="card-text">Reviwer:${item.byline}</p>
    </div>
</div>
    `;
card_view.insertAdjacentHTML('beforeend',html);
}

export const elementString={
    loader:'loader'
}

export const renderLoader = parent =>{
    const loader=`
            <div class='${elementString.loader}'>
                    <svg>
                    <use href="asset/spinner.svg#icon-cw"></use>
                    </svg>
            </div>
    `;

    parent.insertAdjacentHTML('afterbegin',loader);

}

export const clearLoader = () =>{
        const loader = document.querySelector(`.${elementString.loader}`);
        if(loader) loader.parentElement.removeChild(loader);
};