let URL = 'https://jamestalamo.github.io/prac6remakeserver/data.json';

    function getData (URL) {
      fetch(URL)
      .then((res) =>{
        if(!res.ok)
        {throw new Error("There is something wrong")}
        else{
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        //Constructing of the things that fetched is built here -------------------START //
        let lang = document.querySelectorAll('.language-btn');

        let container = document.querySelector('.card-container')
        for(let a = 0; a< data.length; a++){

          let div = document.createElement('a');
          div.classList.add('card');
          div.style.cursor='pointer';

          let cardImgContainer = document.createElement('div');
          cardImgContainer.classList.add('card-img-container')

          let cardLangContainer = document.createElement('div');
          cardLangContainer.classList.add('card-lang-container')
  

          let cardImg = document.createElement('div');
          cardImg.classList.add('card-img');
          cardImg.style.backgroundImage = `url(${data[a].logo})`;
          cardImg.style.bacgkround
          cardImgContainer.appendChild(cardImg)
    
         
          if(data[a].new == true){
            let cardNew = document.createElement('div');
            cardNew.classList.add('card-new');
            cardNew.innerHTML = "NEW!";
            cardImgContainer.appendChild(cardNew);
          }
          
          if(data[a].featured == true){
            let cardFeatured = document.createElement('div');
            cardFeatured.classList.add('card-featured');
            cardFeatured.innerHTML = 'FEATURED';
            cardImgContainer.appendChild(cardFeatured);

          }

          let cardCompanyName = document.createElement('div');
          cardCompanyName.classList.add('card-company-name');
          cardCompanyName.innerHTML = data[a].company;
          cardImgContainer.appendChild(cardCompanyName);

          let cardPosition = document.createElement('div');
          cardPosition.classList.add('card-position');
          cardPosition.innerHTML = data[a].position;
          cardImgContainer.appendChild(cardPosition);

          let cardPostedAt = document.createElement('div');
          cardPostedAt.classList.add('card-postedat');
          cardPostedAt.innerHTML = data[a].postedAt;
          cardImgContainer.append(cardPostedAt);
          
          let cardRole = document.createElement('div');
          cardRole.classList.add('card-role');
          cardRole.innerHTML = data[a].role;
          cardImgContainer.append(cardRole);

          let cardLoc = document.createElement('div');
          cardLoc.classList.add('card-location');
          cardLoc.innerHTML = data[a].location;
          cardImgContainer.append(cardLoc);

          div.appendChild( cardImgContainer);

          div.appendChild(cardLangContainer);

          //Buttons for the languages //
          for (let b = 0; b < data[a].languages.length; b++) {

            let langBtn = document.createElement('button');
            langBtn.classList.add('language-btn');
            langBtn.innerHTML = data[a].languages[b];
            cardLangContainer.appendChild(langBtn);
            
            //this is the filter//
            langBtn.addEventListener('click', () => {
              let selectedLanguage = data[a].languages[b];
            
              let cards = document.querySelectorAll('.card');
              for (let i = 0; i < cards.length; i++) {
                let cardLanguages = Array.from(cards[i].querySelectorAll('.language-btn')).map(btn => btn.innerHTML);
                if (cardLanguages.includes(selectedLanguage)) {
                  cards[i].style.display = 'block';
                } else {
                  cards[i].style.display = 'none';
                }
              }

              
              //this is the filter//
              let containerLang = document.querySelector('#lang-container');
              let languageCard = document.createElement('div');
              languageCard.classList.add('languange-card');

              let langCardX = document.createElement('button');
              langCardX.classList.add('lang-card-x');

                langCardX.addEventListener('click', () =>{
                  langCardX.parentElement.remove();

                  let langContainer = document.getElementById('lang-container');
                  if(langContainer.childElementCount == 0){
                    let card = document.querySelectorAll('.card');
                    for(let a = 0; a< card.length; a++){
                      card[a].style.display='block';
                    }
                  }
                })

              languageCard.innerHTML = data[a].languages[b];
              languageCard.appendChild(langCardX);
              containerLang.appendChild(languageCard);
            });
          }
          //Buttons for the languages //

          
          
          container.appendChild(div);
        }
        //Constructing of the things that fetched is built here -------------------END//

        //clear function!//
        let clear = document.querySelector('#btnMain');
        clear.addEventListener('click', ()=>{
          let langContainer = document.querySelector('#lang-container');

          langContainer.innerHTML = '';

          let cards = document.querySelectorAll('.card');
            for(let a = 0; a < cards.length; a++){
              cards[a].style.display='block';
            }
        })
        //clear function!//

        

      })

      .catch(Error)
    }

    getData(URL);
