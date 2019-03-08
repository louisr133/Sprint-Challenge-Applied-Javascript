class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    
    this.tabData =  this.tabElement.dataset.tab;
    
    if(this.tabData == "all"){
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    }

    this.cards = Array.from(this.cards).map( tCard => new TabCard(this.cards));

    this.tabElement.addEventListener('click', () => this.selectTab());


  }

  selectTab(){

    let tabs = document.querySelectorAll('.tab');

    tabs.forEach( i => {
      i.classList.remove('active-tab');
    })

    let cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'

    // cards.forEach()
    
    cards.forEach(t => {
      t.style.display = 'none';
    })

    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;

    this.tabElement.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(t => t.selectCard())

  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;

    this.cardElement.forEach(t => {
      t.style.display = 'flex';
    })
  }

}



let tabs = document.querySelectorAll(".tab");

tabs.forEach( item => {
  return new TabLink(item);
})