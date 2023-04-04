AFRAME.registerComponent("comics-posters",{
  
    init: function(){
      this.placesContainer = this.el
      this.createCards()
    },
  
   createCards: function(){
  
    const postersRef = [
      {
        id : "geronimo-stilton",
        title: "Geronimo Stilton",
        url: "../assets/posters/geronimo_stilton.jpg"
      },
      {
        id : "harry-potter",
        title: "Harry Potter",
        url: "../assets/posters/harry_potter.jpg"
      },
      {
        id : "heroes-of-the-olympus",
        title: "Heroes of the Olympus",
        url: "../assets/posters/heroes_of_the_olympus.jpg"
      },
      {
        id : "magnus-chase",
        title: "Magnus Chase",
        url: "../assets/posters/magnus_chase.jpg"
      }
  
    ]
  
    let previous_x_position = -60
  
    for(var item of postersRef){
      const posX = previous_x_position+25
      const posY = 10
      const posZ = -40
      const position = {x : posX, y: posY, z: posZ}
      previous_x_position = posX
  
      const borderEl = this.createBorder(position,item.id)
  
      const poster = this.createPoster(item)
      borderEl.appendChild(poster)
  
      const titleEl = this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
  
      this.posterContainer.appendChild(borderEl)
    }
   },
  
   createBorder: function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"box", 
      width: 20,
      height: 28 
    });
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{
      color:"#00bcd4",
      opacity: 0.4
    });
    return entityEl
   },
  
   createPoster: function(item){
  
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width: 20, 
      height: 28,
    });
    entityEl.setAttribute("material",{
      src: item.url 
    });
  
    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1});
    entityEl.setAttribute("material", { src: item.url});
   },
  
   createTitleEl: function(position,item){
  
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text",{
      font : "exo2bold",
      align : "center",
      width : 60,
      color : "#e6510",
      value : item.title
    });
    const elPosition = position
    elPosition.y = -20
    entityEl.setAttribute("position",elPosition)
    entityEl.setAttribute("visible",true)
  
    return entityEl
   }
  })